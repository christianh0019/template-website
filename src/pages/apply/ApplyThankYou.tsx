import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CalendarPlus, Check, Download, UserPlus } from 'lucide-react';
import SEO from '../../components/SEO';
import FunnelTracking from '../../components/FunnelTracking';
import { ApplyFooter, ApplyHeader } from '../../components/apply/ApplyChrome';
import GoogleReviews from '../../components/apply/GoogleReviews';
import VideoSlot from '../../components/apply/VideoSlot';
import { APPLY_FUNNEL } from '../../config/applyFunnel';
import { readApplyResult, takeSchedulePending } from '../../utils/applyResult';
import type { ApplyResult } from '../../utils/applyResult';
import { formatCall, formatCallDay, formatTime, googleCalendarUrl, icsFile, timezoneLabel } from '../../utils/callTime';
import type { CallEvent } from '../../utils/callTime';

const PREP = [
    { title: 'Bring your photos', text: "Grab photos of your lot or your current home, and anything you've saved for inspiration." },
    { title: 'Know your non-negotiables', text: 'Write down your three non-negotiables, the things that would make this build a win for you.' },
];

const HOMEWORK = [
    {
        title: 'How Our 100% Transparency Policy Actually Works, Bid by Bid',
        text: 'See a real cost-plus breakdown and how every bid reaches you.',
        src: APPLY_FUNNEL.videos.transparency,
        poster: '/images/spotlights/spotlight-2.png',
    },
    {
        title: 'How Long a Custom Build Really Takes in Northern Colorado',
        text: 'Design, permitting, and construction, including what pushes dates.',
        src: APPLY_FUNNEL.videos.timeline,
        poster: '/images/spotlights/spotlight-4.jpg',
    },
    {
        title: 'How Change Orders Work With Us (No Black Box)',
        text: "What triggers one, how it's priced, and how you approve it.",
        src: APPLY_FUNNEL.videos.changeOrders,
        poster: '/images/spotlights/spotlight-5.jpg',
    },
];

const eyebrow = 'inline-block rounded-full bg-[#2B70B6] px-3.5 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.06em] text-white';

const ApplyThankYou = () => {
    const location = useLocation();
    const [result] = useState<ApplyResult | null>(() => (location.state as ApplyResult | null) || readApplyResult());
    const hasCall = Boolean(result?.startTime);

    useEffect(() => {
        if (takeSchedulePending() && hasCall && window.fbq) {
            window.fbq('track', 'Schedule');
        }
    }, [hasCall]);

    const event: CallEvent | null = result && hasCall
        ? {
            startIso: result.startTime,
            minutes: APPLY_FUNNEL.callLengthMinutes,
            title: 'Discovery call with Homestead Home Builders',
            details: `A ${APPLY_FUNNEL.callLengthMinutes}-minute phone call about the home project. Questions before the call? Call ${APPLY_FUNNEL.phone}.`,
        }
        : null;
    const callLabel = result && hasCall ? formatCall(result.startTime, result.timezone) : '';

    const downloadIcs = () => {
        if (!event) return;
        const url = URL.createObjectURL(icsFile(event));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'homestead-call.ics';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    };

    const invite = async () => {
        if (!event) return;
        const link = googleCalendarUrl(event);
        const text = `We have a call with Homestead Home Builders about our home project on ${callLabel} (${timezoneLabel(result!.timezone)}). Add it to your calendar here: ${link}`;
        if (navigator.share) {
            try {
                await navigator.share({ title: 'Our call with Homestead Home Builders', text });
                return;
            } catch {
                // Share sheet closed. Fall through to email.
            }
        }
        window.location.assign(`mailto:?subject=${encodeURIComponent('Our call with Homestead Home Builders')}&body=${encodeURIComponent(text)}`);
    };

    return (
        <div className="bg-[#FAF8F4] text-[#0F172A] antialiased">
            <SEO
                title="Application Received | Homestead Home Builders"
                description="Your application is in. Here's what happens next."
                canonical="https://homesteadhomebuilders.com/apply/thank-you"
            />
            <FunnelTracking />
            <ApplyHeader />

            {/* Hero */}
            <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white border border-[#E3DDD1] px-4 py-1.5 text-sm font-medium text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-[#2B70B6] text-white flex items-center justify-center">
                            <Check size={13} strokeWidth={3} />
                        </span>
                        Application received
                    </span>
                    <h1 className="mt-6 text-[28px] leading-[1.2] md:text-[42px] md:leading-[1.15] font-semibold tracking-[-0.02em] text-balance">
                        You're in. Your application is on Herman's desk.
                    </h1>
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
                        Someone from our team reviews every application personally. Here's exactly what happens next, and what to have ready for your call.
                    </p>
                </div>

                {/* The call */}
                <div className="mt-10 max-w-2xl mx-auto bg-white rounded-xl border border-[#E9E4DA] shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)] p-6 md:p-8">
                    {event ? (
                        <>
                            <p className={eyebrow}>Your call</p>
                            <p className="mt-3 text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-snug">
                                {formatCallDay(result!.startTime, result!.timezone)}{' '}
                                <span className="whitespace-nowrap">at {formatTime(result!.startTime, result!.timezone)}</span>
                            </p>
                            <p className="mt-1 text-sm text-slate-500">
                                {timezoneLabel(result!.timezone)}. A {APPLY_FUNNEL.callLengthMinutes}-minute phone call with our team. We'll confirm your time once we've reviewed your application.
                            </p>
                            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <a
                                    href={googleCalendarUrl(event)}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] text-white font-semibold py-3.5 px-4 hover:bg-[#2B70B6] transition-colors"
                                >
                                    <CalendarPlus size={18} /> Add to Google Calendar
                                </a>
                                <button
                                    type="button"
                                    onClick={downloadIcs}
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#DCD5C8] text-slate-700 font-semibold py-3.5 px-4 hover:border-[#2B70B6] hover:text-[#2B70B6] transition-colors"
                                >
                                    <Download size={18} /> Apple or Outlook
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className={eyebrow}>Your call</p>
                            <p className="mt-3 text-slate-700 leading-relaxed">
                                We'll reach out to set up a time once we've reviewed your application. If you'd like to talk sooner, call us at{' '}
                                <a href={APPLY_FUNNEL.phoneHref} className="text-[#2B70B6] font-medium">{APPLY_FUNNEL.phone}</a>.
                            </p>
                        </>
                    )}
                </div>
            </section>

            {/* What happens next */}
            <section className="bg-white border-y border-[#E9E4DA] py-16 md:py-20 px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center">
                        <p className={eyebrow}>Step 1</p>
                        <h2 className="mt-3 text-[28px] md:text-4xl font-semibold tracking-[-0.02em] leading-tight">Watch this before your call.</h2>
                    </div>
                    <div className="mt-8">
                        <VideoSlot src={APPLY_FUNNEL.videos.expectations} title="What happens next" caption="What happens next, from Herman" />
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {PREP.map((item) => (
                            <div key={item.title} className="rounded-xl bg-[#FAF8F4] border border-[#E9E4DA] p-6">
                                <p className="text-lg font-semibold text-[#0F172A]">{item.title}</p>
                                <p className="mt-2 text-slate-700 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    {event && (
                        <div className="mt-5 rounded-xl border border-[#2B70B6]/25 bg-[#2B70B6]/[0.04] p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                            <div className="flex-grow">
                                <p className="font-semibold">Building this decision together?</p>
                                <p className="mt-1 text-slate-600">Add your spouse, partner, or architect to the call with one click.</p>
                            </div>
                            <button
                                type="button"
                                onClick={invite}
                                className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2B70B6] text-white font-semibold py-3.5 px-5 hover:bg-[#0F172A] transition-colors"
                            >
                                <UserPlus size={18} /> Invite them to the call
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Due diligence */}
            <section className="py-16 md:py-20 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className={eyebrow}>Step 2</p>
                        <h2 className="mt-3 text-[28px] md:text-4xl font-semibold tracking-[-0.02em] leading-tight">Do your homework on us.</h2>
                    </div>
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {HOMEWORK.map((video) => (
                            <div key={video.title}>
                                <VideoSlot src={video.src} title={video.title} poster={video.poster} size="sm" />
                                <h3 className="mt-4 text-lg font-semibold leading-snug">{video.title}</h3>
                                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{video.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reviews */}
            <section className="bg-white border-y border-[#E9E4DA] py-16 md:py-20 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className={eyebrow}>From our Google reviews</p>
                        <h2 className="mt-3 text-[28px] md:text-4xl font-semibold tracking-[-0.02em] leading-tight">What homeowners say after the build.</h2>
                    </div>
                    <div className="mt-10">
                        <GoogleReviews />
                    </div>
                </div>
            </section>

            {/* Timing */}
            <section className="py-16 md:py-20 px-4 md:px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <p className={eyebrow}>Why the timing matters</p>
                    <p className="mt-5 text-xl md:text-2xl leading-relaxed text-[#0F172A]">
                        Custom builds in Northern Colorado run on seasons. Design and permitting lead time means the people breaking ground next spring are making their builder decision now.
                    </p>
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
                        Every month a project waits pushes the move-in date back, so if your timeline matters, this is the window.
                    </p>
                </div>
            </section>

            <ApplyFooter question="Questions before your call? Call us directly at" />
        </div>
    );
};

export default ApplyThankYou;
