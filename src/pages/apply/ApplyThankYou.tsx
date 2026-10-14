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

interface Breakout {
    title: string;
    text: string;
    src: string;
    poster: string;
    length?: string;
}

// Stacked from the question we hear most to the one we hear least. The first
// five are the videos on Herman's About page. The rest are still to be filmed.
const BREAKOUTS: Breakout[] = [
    {
        title: 'Do I Need to Buy Land First?',
        text: "Most of our clients don't have land yet. Herman will look at lots with you for free and check the soil, utilities, water, and driveway before you buy.",
        src: APPLY_FUNNEL.videos.landFirst,
        poster: '/images/apply/videos/landFirst.webp',
        length: '1:32',
    },
    {
        title: 'How Do I Get Started?',
        text: "What happens after you reach out, from the first call to sitting down with Herman. There's no pressure, and we never sell your number.",
        src: APPLY_FUNNEL.videos.getStarted,
        poster: '/images/apply/videos/getStarted.webp',
        length: '1:47',
    },
    {
        title: 'What Does the Homestead Design-Build Process Look Like?',
        text: "You don't need plans to start. We'll connect you with architects and draftsmen we trust at no extra charge, or you can bring your own.",
        src: APPLY_FUNNEL.videos.designProcess,
        poster: '/images/apply/videos/designProcess.webp',
        length: '2:06',
    },
    {
        title: 'Who Is Homestead, and How Long Have You Been Building?',
        text: 'How Herman got started more than thirty years ago, what we build today, and the area we cover from our Loveland office.',
        src: APPLY_FUNNEL.videos.whoIsHomestead,
        poster: '/images/apply/videos/whoIsHomestead.webp',
        length: '2:56',
    },
    {
        title: 'What Sets Homestead Apart From Other Builders?',
        text: 'Why you see every bid and a copy of every bill we pay, and how getting three to five quotes on each phase can save you six figures.',
        src: APPLY_FUNNEL.videos.whatSetsApart,
        poster: '/images/apply/videos/whatSetsApart.webp',
        length: '4:50',
    },
    {
        title: 'How Our 100% Transparency Policy Actually Works, Bid by Bid',
        text: 'What cost-plus pricing looks like in practice. You see every real bid, and our fee is one clear percentage on top.',
        src: APPLY_FUNNEL.videos.transparency,
        poster: '/images/case-studies/longmont/09.webp',
    },
    {
        title: 'How Long a Custom Build Really Takes in Northern Colorado',
        text: 'Honest ranges for design, permitting, and construction, and what can push a date.',
        src: APPLY_FUNNEL.videos.timeline,
        poster: '/images/case-studies/loveland/22.webp',
    },
    {
        title: 'How Change Orders Work With Us (No Black Box)',
        text: "You see what a change costs before it happens, you approve it in writing, and you can check our math.",
        src: APPLY_FUNNEL.videos.changeOrders,
        poster: '/images/case-studies/fort-collins/22.webp',
    },
    {
        title: 'Who Will Actually Be Working On Your Home',
        text: 'Meet the people who will be on your project, from Herman to the person who picks up your first call.',
        src: APPLY_FUNNEL.videos.team,
        poster: '/images/case-studies/fort-collins-new/02.webp',
    },
    {
        title: 'What Will a Home Like Yours Actually Cost?',
        text: 'What really moves the price of a custom home, and why the finishes matter more than the square footage.',
        src: APPLY_FUNNEL.videos.cost,
        poster: '/images/case-studies/longmont/08.webp',
    },
    {
        title: 'What Happens On Your Consultation Call',
        text: "It's a working session, not a sales pitch. Here's what we'll cover and what you'll know by the end of it.",
        src: APPLY_FUNNEL.videos.consultationCall,
        poster: '/images/case-studies/loveland-design/00.webp',
    },
    {
        title: 'Building From Out of State (Yes, People Do It)',
        text: 'How families build here from far away, with weekly photos, a shared cost ledger, and video walkthroughs.',
        src: APPLY_FUNNEL.videos.outOfState,
        poster: '/images/case-studies/loveland/01.webp',
    },
];

const eyebrow = 'inline-block rounded-full bg-[#2B70B6] px-3.5 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.06em] text-white';
const sectionTitle = 'mt-3 text-[26px] md:text-4xl font-semibold tracking-[-0.02em] leading-tight text-balance';

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
                description="Your application is in. Everything you need to be ready for your call is on this page."
                canonical="https://homesteadhomebuilders.com/apply/thank-you"
            />
            <FunnelTracking />
            <ApplyHeader />

            {/* Hero, then the urgency video. It is always the first video they see. */}
            <section className="pt-24 md:pt-32 pb-14 md:pb-20 px-4 md:px-6">
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
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-700 max-w-2xl mx-auto">
                        Someone from our team reviews every application personally. Everything you need to be ready for your call is on this page, and every question we hear from homeowners is answered in the videos below.
                    </p>
                </div>

                <div className="mt-12 md:mt-14 max-w-4xl mx-auto">
                    <div className="text-center">
                        <p className={eyebrow}>Watch this first</p>
                        <h2 className="mt-3 text-xl md:text-2xl font-semibold tracking-[-0.01em] leading-snug text-balance">
                            Why the Timing of Your Decision Matters More Than Anything Else
                        </h2>
                    </div>
                    <div className="mt-6">
                        <VideoSlot
                            src={APPLY_FUNNEL.videos.urgency}
                            title="Why the Timing of Your Decision Matters More Than Anything Else"
                            caption="Herman Boonstra, Founder"
                            poster="/images/apply/videos/herman.webp"
                        />
                    </div>
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
                            <p className="mt-1 text-sm text-slate-600">
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

            {/* The expectations video and what to bring */}
            <section className="bg-white border-y border-[#E9E4DA] py-16 md:py-20 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <p className={eyebrow}>Then watch this</p>
                        <h2 className={sectionTitle}>What Happens Next, and How to Get the Most Out of Your Call</h2>
                    </div>
                    <div className="mt-8">
                        <VideoSlot
                            src={APPLY_FUNNEL.videos.expectations}
                            title="What Happens Next, and How to Get the Most Out of Your Call"
                            poster="/images/case-studies/longmont/01.webp"
                        />
                    </div>

                    <p className="mt-12 text-center text-lg md:text-xl font-semibold">Two things will make your call ten times more valuable.</p>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {PREP.map((item, i) => (
                            <div key={item.title} className="rounded-xl bg-[#FAF8F4] border border-[#E9E4DA] p-6 flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0F172A] text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
                                <div>
                                    <p className="text-lg font-semibold text-[#0F172A]">{item.title}</p>
                                    <p className="mt-1.5 text-slate-700 leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Breakout videos */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className={eyebrow}>Your questions, answered</p>
                        <h2 className={sectionTitle}>Every question homeowners ask us, answered by Herman.</h2>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
                            Watch the ones that matter to you. Most of them are under three minutes.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-12">
                        {BREAKOUTS.map((video) => (
                            <article key={video.title}>
                                <VideoSlot src={video.src} title={video.title} poster={video.poster} length={video.length} size="sm" />
                                <h3 className="mt-4 text-lg font-semibold leading-snug tracking-[-0.01em] text-balance">{video.title}</h3>
                                <p className="mt-1.5 text-[15px] text-slate-700 leading-relaxed">{video.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust */}
            <section className="bg-white border-y border-[#E9E4DA] py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className={eyebrow}>In our clients' words</p>
                        <h2 className={sectionTitle}>Hear it from one of our clients.</h2>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-700">
                            Jann interviewed other builders before she hired us. Here's why she chose Herman, and what it was like having our crew in her home.
                        </p>
                    </div>
                    <div className="mt-8">
                        <VideoSlot
                            src={APPLY_FUNNEL.videos.jannInterview}
                            title="Jann S. on why she chose Homestead"
                            caption="Jann S., Homestead client"
                            poster="/images/apply/videos/jannInterview.webp"
                            length="4:51"
                        />
                    </div>
                </div>
                <div className="mt-16 md:mt-20 max-w-5xl mx-auto">
                    <h3 className="text-center text-xl md:text-2xl font-semibold tracking-[-0.01em]">From our Google reviews</h3>
                    <div className="mt-8">
                        <GoogleReviews />
                    </div>
                </div>
            </section>

            {/* Decision-maker add */}
            {event && (
                <section className="py-16 md:py-20 px-4 md:px-6">
                    <div className="max-w-2xl mx-auto bg-white rounded-xl border border-[#E9E4DA] shadow-[0_24px_70px_-30px_rgba(15,23,42,0.35)] p-6 md:p-10 text-center">
                        <span className="mx-auto w-12 h-12 rounded-full bg-[#2B70B6]/10 text-[#2B70B6] flex items-center justify-center">
                            <UserPlus size={22} />
                        </span>
                        <p className="mt-5 text-2xl md:text-3xl font-semibold tracking-[-0.02em] leading-snug">Building this decision together?</p>
                        <p className="mt-3 text-base md:text-lg text-slate-700 leading-relaxed">Add your spouse, partner, or architect to the call with one click.</p>
                        <button
                            type="button"
                            onClick={invite}
                            className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#0F172A] text-white font-semibold py-4 px-7 hover:bg-[#2B70B6] transition-colors"
                        >
                            <UserPlus size={18} /> Invite them to the call
                        </button>
                    </div>
                </section>
            )}

            <ApplyFooter question="Questions before your call? Call us directly at" />
        </div>
    );
};

export default ApplyThankYou;
