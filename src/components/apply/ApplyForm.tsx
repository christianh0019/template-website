import { useEffect, useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import TimePicker from './TimePicker';
import { APPLY_FUNNEL } from '../../config/applyFunnel';
import { sendLeadToBluBuilder } from '../../utils/blubuilder';
import { getAttribution } from '../../utils/attribution';
import { formatCall, visitorTimezone } from '../../utils/callTime';
import { saveApplyResult } from '../../utils/applyResult';
import type { ApplyResult } from '../../utils/applyResult';

const PROJECT_TYPES = ['New custom build', 'Scrape and rebuild', 'Whole-home remodel', 'Basement finishing', 'Home addition'];
// Remodels, basements and additions happen on a home they already own, so they skip the land question.
const BUILDS_ON_LAND = ['New custom build', 'Scrape and rebuild'];
const LAND = ['Yes, we own the land', "No, we're looking for land", "We're considering a purchase now"];
const TIMELINES = ['Within 6 months', '6 to 12 months', '12+ months', 'Still exploring timing'];
const BUDGETS = ['Under $500k', '$500k to $1M', '$1M to $2M', '$2M+', 'Not sure yet, help me frame it'];
// Lower bound of each range, for the CRM's deal value.
const BUDGET_VALUE: Record<string, number> = { '$500k to $1M': 500000, '$1M to $2M': 1000000, '$2M+': 2000000 };

type StepKey = 'project' | 'land' | 'contact' | 'location' | 'timeline' | 'budget' | 'priorities' | 'time';

function stepsFor(projectType: string): StepKey[] {
    const all: StepKey[] = ['project', 'land', 'contact', 'location', 'timeline', 'budget', 'priorities', 'time'];
    return !projectType || BUILDS_ON_LAND.includes(projectType) ? all : all.filter((s) => s !== 'land');
}

const ApplyForm = () => {
    const navigate = useNavigate();
    const cardRef = useRef<HTMLDivElement>(null);
    const [timezone] = useState(visitorTimezone);

    const [step, setStep] = useState<StepKey>('project');
    const [answers, setAnswers] = useState({
        projectType: '',
        landStatus: '',
        location: '',
        timeline: '',
        budget: '',
        priorities: '',
    });
    const [contact, setContact] = useState({ firstName: '', lastName: '', email: '', phone: '' });
    const [contactError, setContactError] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [bookError, setBookError] = useState('');
    const [refreshKey, setRefreshKey] = useState(0);

    const isBuild = BUILDS_ON_LAND.includes(answers.projectType);
    const steps = stepsFor(answers.projectType);
    const index = steps.indexOf(step);

    // Keep the top of the card in view as steps change height on a phone.
    const firstRender = useRef(true);
    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        const card = cardRef.current;
        if (card && card.getBoundingClientRect().top < 64) {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [step]);

    const move = (offset: number, list = steps) => {
        const next = list[list.indexOf(step) + offset];
        if (next) setStep(next);
    };

    const pick = (field: keyof typeof answers, value: string) => {
        const next = { ...answers, [field]: value };
        setAnswers(next);
        // Picking a project type can add or drop the land step, so "next" comes from the new answer.
        window.setTimeout(() => move(1, stepsFor(next.projectType)), 160);
    };

    const landStatus = isBuild ? answers.landStatus : 'Existing home';

    const leadFields = (extra: Record<string, unknown> = {}) => ({
        first_name: contact.firstName.trim(),
        last_name: contact.lastName.trim(),
        email: contact.email.trim(),
        phone: contact.phone.trim(),
        source: 'VSL Application',
        project_type: answers.projectType,
        land_status: landStatus,
        location: answers.location.trim(),
        timeline: answers.timeline,
        budget_range: answers.budget,
        value: BUDGET_VALUE[answers.budget] || undefined,
        priorities: answers.priorities.trim(),
        ...extra,
    });

    const contactReady = Boolean(contact.firstName.trim() && contact.lastName.trim() && contact.email.trim() && contact.phone.trim());

    const submitContact = (e: FormEvent) => {
        e.preventDefault();
        const digits = contact.phone.replace(/\D/g, '');
        if (!(digits.length === 10 || (digits.length === 11 && digits.startsWith('1')))) {
            setContactError('Please enter a 10-digit phone number.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email.trim())) {
            setContactError('Please enter a valid email address.');
            return;
        }
        setContactError('');
        // Saved now, so someone who stops partway is still a lead.
        sendLeadToBluBuilder(leadFields({ notes: 'Started the VSL application' }));
        move(1);
    };

    const submitLocation = (e: FormEvent) => {
        e.preventDefault();
        move(1);
    };

    const submitApplication = (e: FormEvent) => {
        e.preventDefault();
        if (window.fbq) window.fbq('track', 'Lead');
        sendLeadToBluBuilder(leadFields({ notes: 'Finished the VSL application, choosing a call time' }));
        move(1);
    };

    const finish = async (startTime: string) => {
        setSubmitting(true);
        setBookError('');
        const callLabel = startTime ? formatCall(startTime, timezone) : '';

        try {
            const res = await fetch('/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    contact: {
                        firstName: contact.firstName.trim(),
                        lastName: contact.lastName.trim(),
                        email: contact.email.trim(),
                        phone: contact.phone.trim(),
                    },
                    application: {
                        ...answers,
                        location: answers.location.trim(),
                        priorities: answers.priorities.trim(),
                        landStatus,
                        budgetValue: BUDGET_VALUE[answers.budget] || 0,
                    },
                    startTime,
                    timezone,
                    callLabel,
                    headers: { host: window.location.host, userAgent: navigator.userAgent, referer: document.referrer },
                    attribution: getAttribution(),
                }),
            });

            if (res.status === 409) {
                setBookError('Someone just took that time. Please pick another one.');
                setRefreshKey((n) => n + 1);
                return;
            }
            if (!res.ok) throw new Error(String(res.status));

            const data: { booked: boolean } = await res.json();
            await sendLeadToBluBuilder(leadFields({
                notes: startTime ? `Requested call: ${callLabel} (${timezone})` : 'No call time picked, call to schedule',
                call_time: startTime || undefined,
                call_booked: data.booked,
            }));

            const result: ApplyResult = { firstName: contact.firstName.trim(), startTime, timezone, booked: data.booked };
            saveApplyResult(result);
            navigate('/apply/thank-you', { state: result });
        } catch {
            setBookError(`We couldn't save that just now. Please try again, or call us at ${APPLY_FUNNEL.phone}.`);
        } finally {
            setSubmitting(false);
        }
    };

    const option = (selected: boolean) =>
        'w-full flex items-center justify-between gap-3 text-left rounded-lg border px-5 py-4 transition-colors ' +
        (selected
            ? 'border-[#2B70B6] bg-[#2B70B6]/5 text-[#0F172A]'
            : 'border-[#DCD5C8] bg-white text-slate-700 hover:border-[#2B70B6] hover:bg-[#2B70B6]/[0.03]');
    const field = 'w-full rounded-lg border border-[#DCD5C8] bg-white px-4 text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#2B70B6] focus:ring-2 focus:ring-[#2B70B6]/15 transition';
    const input = `${field} h-12`;
    const label = 'block text-sm font-medium text-slate-700 mb-1.5';
    const heading = 'font-serif text-xl md:text-2xl text-[#0F172A] leading-snug';
    const primary = 'w-full mt-6 rounded-lg bg-[#0F172A] text-white font-semibold py-4 hover:bg-[#2B70B6] transition-colors disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#0F172A]';

    const choices = (key: keyof typeof answers, list: string[]) => (
        <div className="mt-6 space-y-2.5">
            {list.map((value) => (
                <button key={value} type="button" onClick={() => pick(key, value)} className={option(answers[key] === value)}>
                    <span className="font-medium">{value}</span>
                    <ChevronRight size={18} className="flex-shrink-0 text-slate-300" />
                </button>
            ))}
        </div>
    );

    return (
        <div ref={cardRef} className="scroll-mt-24 bg-white rounded-xl border border-[#E9E4DA] shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)] overflow-hidden">
            {/* Progress */}
            <div className="px-6 md:px-8 pt-5">
                <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                    <span>Step {index + 1} of {steps.length}</span>
                    {index > 0 && !submitting && (
                        <button type="button" onClick={() => move(-1)} className="inline-flex items-center gap-1 hover:text-[#0F172A] transition-colors">
                            <ArrowLeft size={13} /> Back
                        </button>
                    )}
                </div>
                <div className="mt-3 h-1 rounded-full bg-[#EFEBE3] overflow-hidden">
                    <div className="h-full bg-[#2B70B6] rounded-full transition-all duration-500" style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
                </div>
            </div>

            <div className="px-6 md:px-8 pt-6 pb-8">
                {step === 'project' && (
                    <>
                        <h3 className={heading}>Which best describes your project?</h3>
                        {choices('projectType', PROJECT_TYPES)}
                    </>
                )}

                {step === 'land' && (
                    <>
                        <h3 className={heading}>Do you currently own the land or lot for this project?</h3>
                        {choices('landStatus', LAND)}
                    </>
                )}

                {step === 'contact' && (
                    <form onSubmit={submitContact} noValidate>
                        <h3 className={heading}>Who should we talk to about this project?</h3>
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="apply-first" className={label}>First name</label>
                                <input id="apply-first" name="given-name" required autoComplete="given-name" className={input}
                                    value={contact.firstName} onChange={(e) => setContact({ ...contact, firstName: e.target.value })} />
                            </div>
                            <div>
                                <label htmlFor="apply-last" className={label}>Last name</label>
                                <input id="apply-last" name="family-name" required autoComplete="family-name" className={input}
                                    value={contact.lastName} onChange={(e) => setContact({ ...contact, lastName: e.target.value })} />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="apply-email" className={label}>Email</label>
                            <input id="apply-email" name="email" type="email" required autoComplete="email" inputMode="email" className={input}
                                value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="apply-phone" className={label}>Phone</label>
                            <input id="apply-phone" name="tel" type="tel" required autoComplete="tel" inputMode="tel" className={input}
                                value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
                        </div>
                        {contactError && <p className="mt-3 text-sm text-red-600" role="alert">{contactError}</p>}
                        <button type="submit" className={primary} disabled={!contactReady}>Continue</button>
                        <p className="mt-3 text-xs text-slate-400 text-center">We only use this to reach you about your project.</p>
                    </form>
                )}

                {step === 'location' && (
                    <form onSubmit={submitLocation}>
                        <h3 className={heading}>Where is the project located?</h3>
                        <div className="mt-6">
                            <label htmlFor="apply-location" className={label}>City and area</label>
                            <input id="apply-location" required autoFocus className={input} placeholder="For example, west Loveland"
                                value={answers.location} onChange={(e) => setAnswers({ ...answers, location: e.target.value })} />
                        </div>
                        <button type="submit" className={primary} disabled={!answers.location.trim()}>Continue</button>
                    </form>
                )}

                {step === 'timeline' && (
                    <>
                        <h3 className={heading}>{isBuild ? 'When do you want to break ground?' : 'When do you want to start?'}</h3>
                        {choices('timeline', TIMELINES)}
                    </>
                )}

                {step === 'budget' && (
                    <>
                        <h3 className={heading}>What budget range are you planning around for this project?</h3>
                        {choices('budget', BUDGETS)}
                    </>
                )}

                {step === 'priorities' && (
                    <form onSubmit={submitApplication}>
                        <h3 className={heading}>What matters most to you in this home? What would make this build a win for you two years from now?</h3>
                        <textarea required autoFocus rows={5} aria-label="What matters most to you in this home"
                            className={`${field} mt-6 min-h-[140px] py-3 leading-relaxed resize-y`}
                            placeholder="A few sentences is plenty."
                            value={answers.priorities} onChange={(e) => setAnswers({ ...answers, priorities: e.target.value })} />
                        <button type="submit" className={primary} disabled={!answers.priorities.trim()}>Choose a time for your call</button>
                    </form>
                )}

                {step === 'time' && (
                    <>
                        <h3 className={heading}>Pick a time to walk through your project with us, {contact.firstName.trim()}.</h3>
                        <div className="mt-2">
                            <TimePicker
                                timezone={timezone}
                                refreshKey={refreshKey}
                                submitting={submitting}
                                error={bookError}
                                onConfirm={(slot) => finish(slot)}
                                onNoTimes={() => finish('')}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ApplyForm;
