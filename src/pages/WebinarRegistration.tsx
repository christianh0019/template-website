import React, { useState } from 'react';
import { CheckCircle, Lock, Loader2, Star } from 'lucide-react';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import SEO from '../components/SEO';

const FASCINATIONS = [
    {
        emoji: "🛑",
        title: 'The "Denominator Trap"',
        desc: "The sneaky mathematical trick builders use to inflate your square footage and make their price look artificially low. (Hint: Not every builder counts the same things).",
    },
    {
        emoji: "🔍",
        title: "The $390k Gap, Deconstructed",
        desc: "A line-by-line, open-book breakdown of a $350 vs. $450/sqft quote. You'll see exactly how the gap accumulates — and realize what is actually driving your number.",
    },
    {
        emoji: "🕳️",
        title: 'The 5 "Black Holes" of Your Budget',
        desc: "The exact places your money vanishes (finishes, lot prep, plan complexity, materials, overhead) — and how to take back control of them.",
    },
    {
        emoji: "❓",
        title: 'The 3 "Dreaded" Questions',
        desc: "Ask these three specific questions before signing any contract. If a builder stutters or deflects, walk away immediately.",
    },
    {
        emoji: "🔥",
        title: 'LIVE "Hot Seat" Consulting',
        desc: "Bring your lot details, your floor plans, or even a competitor's quote. Herm will give you his unfiltered, 35-year expert opinion on your exact situation.",
    },
];

const TRUST_STATS = [
    { value: "35+", label: "Years in\nNorthern Colorado" },
    { value: "100+", label: "Custom Homes\nDelivered" },
    { value: "5.0★", label: "Google\nReview Rating" },
    { value: "$0", label: "Cost to\nAttend" },
];

const TESTIMONIALS = [
    {
        text: "We interviewed five builders. Homestead was the only team that truly listened to our vision and delivered significantly under budget.",
        author: "Dr. Sarah Chen",
        location: "Verified Homeowner, Boulder, CO",
    },
    {
        text: "From the initial soil test to the final walk-through, the team explained every cost and timeline adjustment clearly. No surprises, just a beautiful home.",
        author: "James & Rebecca Miller",
        location: "Verified Homeowners, Fort Collins, CO",
    },
    {
        text: "When lumber prices spiked, they were open about it and helped us value engineer other areas to keep the total flat. You can trust them.",
        author: "Robert Evans",
        location: "Verified Homeowner, Berthoud, CO",
    },
];

const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4a9eff] transition-colors text-sm";
const labelClass = "block text-xs font-bold text-white/50 uppercase tracking-wide mb-1.5";

const WebinarRegistration: React.FC = () => {
    const [formData, setFormData] = useState({ firstName: '', email: '', phone: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            client: "Herman Boonstra - Homestead Home Builders",
            source: "Webinar Registration",
            timestamp: new Date().toISOString(),
            contact: { name: formData.firstName, email: formData.email, phone: formData.phone },
            webinar: { title: "What It Really Costs to Build a Custom Home in Colorado", date: "July 10, 2026", time: "7:00 PM MT" },
            headers: { host: window.location.host, userAgent: navigator.userAgent, referer: document.referrer },
        };
        try {
            await fetch('https://services.leadconnectorhq.com/hooks/cG3cesDKIajoyQPNPYZK/webhook-trigger/webinar-registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        } catch (_) { /* silent fail */ } finally {
            setLoading(false);
            setSubmitted(true);
        }
    };

    const RegistrationForm = () => (
        <div className="bg-white/5 border border-white/15 rounded-2xl p-6 md:p-8 shadow-2xl">
            <p className="text-[#7bb8f0] text-xs font-bold uppercase tracking-widest text-center mb-3">Free Live Training &amp; Q&amp;A</p>
            <div className="text-center text-white/85 text-sm font-semibold mb-2">
                <p>📅 Thursday, July 10 @ 7:00 PM MT</p>
                <p className="mt-1">📍 Live via Zoom</p>
            </div>
            <p className="text-white/40 text-xs text-center mb-5 leading-relaxed italic">
                Spots are strictly limited to ensure Herm can answer everyone's live questions.
            </p>

            {submitted ? (
                <div className="text-center py-6">
                    <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={28} className="text-green-400" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white mb-2">You're Registered!</h3>
                    <p className="text-white/55 text-sm">Check your inbox for the Zoom link. We'll also send a reminder before the event.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className={labelClass}>First Name</label>
                        <input required type="text" value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="John" className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Email Address</label>
                        <input required type="email" value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com" className={inputClass} />
                    </div>
                    <div>
                        <label className={labelClass}>Phone <span className="normal-case font-normal text-white/30">(optional — for text reminder only)</span></label>
                        <input type="tel" value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 123-4567" className={inputClass} />
                    </div>
                    <button type="submit" disabled={loading}
                        className="w-full mt-1 bg-[#2B70B6] text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#4a9eff] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm">
                        {loading
                            ? <><Loader2 className="animate-spin" size={18} /> Registering...</>
                            : 'YES! Reserve My Free Seat Now'}
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-white/35 text-xs pt-1">
                        <Lock size={11} />
                        <span>Only your Zoom link — no spam, ever. 47 Northern Colorado homeowners already registered.</span>
                    </div>
                </form>
            )}
        </div>
    );

    return (
        <>
            <SEO
                title="Free Webinar: How to Avoid the $390,000 Mistake When Building a Custom Home | Homestead"
                description="Same size. Same finishes. One builder quotes $320/sqft, the other $450. Join Herm Boonstra live to find out exactly why — and which side of that gap you want to be on."
                canonical="https://homesteadhomebuilders.com/webinar"
            />

            <FunnelHeader />

            <div className="min-h-screen bg-slate-50 flex flex-col pt-14">

                {/* ── Hero ─────────────────────────────────────────────── */}
                <div className="bg-[#0d1f3c] px-6 pt-10 pb-14">
                    <div className="container mx-auto max-w-6xl">

                        <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12 items-start">

                            {/* Left — copy */}
                            <div className="py-2 lg:py-6">
                                <h1 className="text-3xl md:text-4xl lg:text-[2.6rem] font-serif font-bold text-white mb-4 leading-tight">
                                    How to Avoid the{' '}
                                    <span className="text-[#4a9eff]">"$390,000 Mistake"</span>{' '}
                                    When Hiring a Custom Home Builder
                                </h1>

                                <p className="text-base md:text-lg text-white/75 font-semibold mb-3 leading-snug">
                                    One builder quotes $320/sqft. Another quotes $450. On a 3,000 sq ft home, that's a $390,000 gap.
                                </p>

                                <p className="text-sm md:text-base text-white/55 leading-relaxed">
                                    Join 35-year veteran <strong className="text-white/80">Herm Boonstra</strong> to uncover exactly where that money goes — and get your questions answered live.
                                </p>
                            </div>

                            {/* Right — registration form */}
                            <div className="lg:sticky lg:top-20">
                                <RegistrationForm />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Fascination Bullets ──────────────────────────────── */}
                <div className="bg-white py-16 px-6 border-b border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <p className="text-[#2B70B6] text-xs font-bold uppercase tracking-widest text-center mb-3">Inside This Free Masterclass</p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-3">
                            What You'll Discover
                        </h2>
                        <p className="text-slate-500 text-sm text-center mb-10 max-w-xl mx-auto">
                            Herm spends 15 minutes revealing the industry's closely guarded pricing secrets, then opens the floor for <strong>45 minutes of live Q&amp;A</strong>.
                        </p>
                        <div className="space-y-4">
                            {FASCINATIONS.map((item) => (
                                <div key={item.title} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5 border border-slate-100">
                                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                                    <div>
                                        <p className="font-bold text-primary mb-1">{item.title}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 text-center">
                            <a href="#register"
                                className="inline-block px-8 py-4 bg-[#2B70B6] text-white font-bold uppercase tracking-widest rounded-full hover:bg-[#4a9eff] transition-all duration-300 shadow-md text-sm">
                                Click Here to Claim Your Spot →
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Why Listen to Us ─────────────────────────────────── */}
                <div className="bg-slate-50 py-16 px-6 border-b border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <p className="text-[#2B70B6] text-xs font-bold uppercase tracking-widest text-center mb-3">Why Listen to Us?</p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-2">
                            35 Years. 100+ Homes. Zero Hidden Agendas.
                        </h2>
                        <p className="text-slate-500 text-sm text-center mb-10 max-w-lg mx-auto">
                            We've built custom homes across Northern Colorado since 1990. We know what things really cost, where the industry hides the markups, and how to protect homeowners from overpaying.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                { icon: "📖", title: "100% Open Book Policy", desc: "Every client sees the actual cost breakdown — every line item, every subcontractor invoice. No padding, no guessing." },
                                { icon: "🤝", title: "No Commissioned Salespeople", desc: "The person who answers your questions is the same one who manages your build. We have no incentive to oversell you." },
                                { icon: "🎓", title: "Free For a Reason", desc: "Informed homeowners make better clients. We'd rather you walk in with confidence than sign a bad contract with someone else." },
                            ].map((item) => (
                                <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                                    <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                                    <div>
                                        <p className="font-bold text-primary mb-1">{item.title}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Trust stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {TRUST_STATS.map((stat) => (
                                <div key={stat.value} className="bg-white rounded-xl p-5 text-center border border-slate-200 shadow-sm">
                                    <p className="text-2xl md:text-3xl font-serif font-bold text-[#2B70B6] mb-1">{stat.value}</p>
                                    <p className="text-slate-500 text-xs leading-tight whitespace-pre-line">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Meet Your Host ───────────────────────────────────── */}
                <div className="bg-white py-16 px-6 border-b border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <p className="text-[#2B70B6] text-xs font-bold uppercase tracking-widest text-center mb-3">Meet Your Host</p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-2">
                            Herman Boonstra
                        </h2>
                        <p className="text-slate-400 text-sm text-center mb-8 italic">
                            Founder &amp; Lead Builder · Homestead Home Builders · Est. 1990
                        </p>
                        <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200 max-w-2xl mx-auto">
                            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                                Herm has been building custom homes in Northern Colorado for over three decades. He started Homestead on one simple commitment: <strong className="text-primary">no surprises.</strong>
                            </p>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base mt-4">
                                During this webinar, he's going to walk you through exactly how he prices every project — the same open-book framework he's used on over 100 homes — so you can hold <em>any</em> builder accountable.
                            </p>
                            <div className="flex justify-center mt-6">
                                <img src="/logo.png" alt="Homestead Home Builders" className="h-10 w-auto opacity-80" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Testimonials ─────────────────────────────────────── */}
                <div className="bg-slate-50 py-16 px-6 border-b border-slate-200">
                    <div className="container mx-auto max-w-3xl">
                        <p className="text-[#2B70B6] text-xs font-bold uppercase tracking-widest text-center mb-3">What Our Homeowners Are Saying</p>
                        <div className="flex justify-center gap-0.5 mb-2">
                            {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                        </div>
                        <p className="text-slate-400 text-xs text-center mb-10">5.0 ★ Google Verified · 100+ Reviews</p>
                        <div className="space-y-5">
                            {TESTIMONIALS.map((t) => (
                                <div key={t.author} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                    <div className="flex gap-0.5 mb-3">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                    <p className="text-slate-700 text-sm leading-relaxed mb-4">"{t.text}"</p>
                                    <p className="text-primary font-bold text-sm">— {t.author}</p>
                                    <p className="text-slate-400 text-xs">{t.location}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Final CTA ────────────────────────────────────────── */}
                <div id="register" className="bg-[#0d1f3c] py-16 px-6 scroll-mt-14">
                    <div className="container mx-auto max-w-xl">
                        <p className="text-[#7bb8f0] text-xs font-bold uppercase tracking-widest text-center mb-4">
                            Don't Sign A Custom Home Contract Until You've Watched This.
                        </p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-3">
                            Join 47 other smart homeowners who are taking control of their build process.
                        </h2>
                        <p className="text-white/50 text-sm text-center mb-8">
                            📅 Thursday, July 10, 2026 · 7:00 PM MT
                        </p>
                        <RegistrationForm />
                    </div>
                </div>

            </div>

            <FunnelFooter />
        </>
    );
};

export default WebinarRegistration;
