import React, { useState } from 'react';
import { CheckCircle, Lock, Loader2, Star } from 'lucide-react';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import SEO from '../components/SEO';

const FASCINATIONS = [
    {
        emoji: "🗺️",
        title: 'The "Right Order of Operations"',
        desc: "Most first-timers do this backwards — they fall in love with a plan or a piece of land before they've done the one thing that determines everything else. Herm walks you through the four first moves, in the order that actually protects your budget.",
    },
    {
        emoji: "💵",
        title: "The Real Budget Conversation",
        desc: "Prequalifying vs. paying cash, and how to get a true cost number early — before you get emotionally attached to a design you can't afford to build. Everything downstream depends on knowing your real number first.",
    },
    {
        emoji: "🕳️",
        title: "The Hidden Site Costs",
        desc: "Whether you're buying land, already own it, or building on family property, the site itself can quietly add tens of thousands before you break ground. Soil issues, water tap fees, utility runs, propane vs. natural gas, blasting through rock, long driveways, the mountain-building premium.",
    },
    {
        emoji: "📐",
        title: "The Design Money Pit",
        desc: "This is where budgets really run away. How the wrong architect can blow your number, why two homes with the same square footage can cost wildly different amounts to build, and the plan errors that cost you later.",
    },
    {
        emoji: "❓",
        title: "Straight Answers to Your Questions",
        desc: "Not sure how all of this applies to your situation? That's what the live Q&A is for. Bring whatever's on your mind, and Herm will give you a straight, 35-year answer — no sales pitch, no pressure.",
    },
];

const TRUST_STATS = [
    { value: "35+", label: "Years Building in\nNorthern Colorado" },
    { value: "100%", label: "Open-Book\nPricing" },
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

const WebinarRegistration2: React.FC = () => {
    const [formData, setFormData] = useState({ firstName: '', email: '', phone: '' });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            client: "Herman Boonstra - Homestead Home Builders",
            source: "Webinar 2 Registration",
            timestamp: new Date().toISOString(),
            contact: { name: formData.firstName, email: formData.email, phone: formData.phone },
            webinar: { title: "Thinking About Building a Custom Home? Here's Where It Quietly Goes Wrong", date: "July 10, 2026", time: "7:00 PM MT" },
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
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
            <p className="text-[#2B70B6] text-xs font-bold uppercase tracking-widest text-center mb-2">Free Live Training &amp; Q&amp;A</p>
            <p className="text-center text-slate-600 text-xs mb-3">📅 Thu, July 10 @ 7PM MT &nbsp;·&nbsp; 📍 Zoom &nbsp;·&nbsp; <em>Limited spots</em></p>

            {submitted ? (
                <div className="text-center py-6">
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={28} className="text-green-500" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-primary mb-2">You're Registered!</h3>
                    <p className="text-slate-500 text-sm">Check your inbox for the Zoom link. We'll also send a reminder before the event.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">First Name</label>
                        <input required type="text" value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="John"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2B70B6] focus:border-transparent transition-colors text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Email Address</label>
                        <input required type="email" value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2B70B6] focus:border-transparent transition-colors text-sm" />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wide mb-1.5">Phone <span className="normal-case font-normal text-slate-400">(optional — for text reminder only)</span></label>
                        <input type="tel" value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="(555) 123-4567"
                            className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2B70B6] focus:border-transparent transition-colors text-sm" />
                    </div>
                    <button type="submit" disabled={loading}
                        className="w-full mt-1 bg-[#2B70B6] text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#4a9eff] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm">
                        {loading
                            ? <><Loader2 className="animate-spin" size={18} /> Registering...</>
                            : 'YES! Reserve My Free Seat Now'}
                    </button>
                    <div className="flex items-center justify-center gap-1.5 text-slate-400 text-xs pt-1">
                        <Lock size={11} />
                        <span>Only your Zoom link — no spam, ever. 35 Northern Colorado homeowners already registered.</span>
                    </div>
                </form>
            )}
        </div>
    );

    return (
        <>
            <SEO
                title="Free Webinar: Where Do I Even Start With My Custom Home? | Homestead"
                description="Thinking about building a custom home? Join Herm Boonstra live to learn where it quietly goes wrong before you ever break ground — budget, site, and plans."
                canonical="https://homesteadhomebuilders.com/webinar2"
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
                                    Thinking About Building a Custom Home?{' '}
                                    <span className="text-[#4a9eff]">Here's Where It Quietly Goes Wrong</span>{' '}
                                    — Before You Ever Break Ground.
                                </h1>

                                <p className="text-sm md:text-base text-white/55 leading-relaxed mb-8">
                                    Join 35-year veteran <strong className="text-white/80">Herm Boonstra</strong> for a free live training on the expensive mistakes that happen before construction even starts — from setting a real budget, to evaluating your site, to the plans and people you commit to.
                                </p>

                                {/* Overlapping home images */}
                                <div className="flex items-end -space-x-5">
                                    <div className="w-28 md:w-32 h-20 rounded-xl overflow-hidden shadow-md rotate-[-5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home1.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-32 md:w-44 h-24 rounded-xl overflow-hidden shadow-xl relative z-10 flex-shrink-0">
                                        <img src="/images/home2.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-28 md:w-32 h-20 rounded-xl overflow-hidden shadow-md rotate-[5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home3.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                </div>
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
                            Herm spends about 15 minutes walking you through the right way to begin — the places a custom home goes sideways long before the first shovel hits the ground — then opens the floor for <strong>45 minutes of live Q&amp;A</strong>.
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
                            35 Years in Northern Colorado. Zero Hidden Agendas.
                        </h2>
                        <p className="text-slate-500 text-sm text-center mb-10 max-w-lg mx-auto">
                            We've been building custom homes across Northern Colorado since 1990 — and we've guided homeowners through this exact stage, from "where do I even start?" all the way to move-in, for decades.
                        </p>

                        <div className="space-y-4 mb-10">
                            {[
                                { icon: "📖", title: "100% Open Book Policy", desc: "Every client sees the actual cost breakdown — every line item, every subcontractor invoice. No padding, no guessing." },
                                { icon: "🤝", title: "No Commissioned Salespeople", desc: "The person who answers your questions is the same one who manages your build. We have no incentive to oversell you." },
                                { icon: "🎓", title: "Free For a Reason", desc: "Informed homeowners make better clients. We'd rather you start your journey with confidence than make an expensive mistake before you ever find us." },
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
                                In this training, he's going to walk you through the smart way to begin — the same first steps he's relied on since 1990 — so you can start your build with a real budget, the right site, the right plans, and the right team, instead of an expensive lesson.
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
                        <p className="text-slate-400 text-xs text-center mb-10">5.0 ★ Google Verified</p>
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
                            Before You Spend a Dollar on Your Custom Home — Start Here.
                        </p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-white text-center mb-3">
                            Get the first steps right, and everything after gets easier.
                        </h2>
                        <p className="text-white/50 text-sm text-center mb-3">
                            📅 Thursday, July 10, 2026 · 7:00 PM MT
                        </p>
                        <p className="text-white/40 text-xs text-center mb-8 max-w-md mx-auto leading-relaxed">
                            And once your budget, site, and plans are in order? The next question is who actually builds it — which is exactly what Herm covers in our follow-up training,{' '}
                            <a href="/webinar" className="text-[#7bb8f0] underline hover:text-white transition-colors">
                                "How to Avoid the $390,000 Mistake When Hiring a Custom Home Builder."
                            </a>
                        </p>
                        <RegistrationForm />
                    </div>
                </div>

            </div>

            <FunnelFooter />
        </>
    );
};

export default WebinarRegistration2;
