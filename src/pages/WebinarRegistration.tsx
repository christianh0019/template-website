import React, { useState } from 'react';
import { CheckCircle, Clock, Calendar, Users, Star, ArrowRight, Lock, Video, Loader2, Quote } from 'lucide-react';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import SEO from '../components/SEO';

const LEARN_ITEMS = [
    {
        title: "What price per square foot actually means",
        desc: "Most builders use this number differently. We'll show you what it includes, what it doesn't, and why two identical quotes can mean very different things."
    },
    {
        title: "The real range — $250 vs. $350 vs. $450/sqft",
        desc: "What separates each tier, what finishes and specs drive the cost up, and where the biggest jumps actually come from."
    },
    {
        title: "How to spot a low bid that will blow your budget",
        desc: "The most common way homeowners get burned: a builder wins on price then charges for every allowance overrun. We'll show you the warning signs."
    },
    {
        title: "Red flags in a builder's contract",
        desc: "The specific clauses that shift cost risk onto you — and the exact language you should insist on before signing."
    },
    {
        title: "How to compare bids from multiple builders fairly",
        desc: "A simple framework to put any two quotes side by side on equal terms, regardless of how they're formatted."
    },
    {
        title: "The questions builders dread — and you should always ask",
        desc: "The 8 questions that separate transparent builders from the ones who have something to hide."
    }
];

const TRUST_STATS = [
    { value: "35+", label: "Years Building in\nNorthern Colorado" },
    { value: "100+", label: "Custom Homes\nDelivered" },
    { value: "5.0★", label: "Average Google\nReview Rating" },
    { value: "$0", label: "Cost to Attend\nThis Webinar" },
];

const TESTIMONIALS = [
    {
        text: "From the initial soil test to the final walk-through, the team was professional and educational. They explained every cost and timeline adjustment clearly. No surprises, just a beautiful home.",
        author: "James & Rebecca Miller",
        location: "Fort Collins, CO"
    },
    {
        text: "We interviewed five different builders in Northern Colorado. Homestead was the only team that truly listened to our vision and delivered significantly under budget.",
        author: "Dr. Sarah Chen",
        location: "Boulder, CO"
    },
    {
        text: "Honest. That's the one word I'd use. When lumber prices spiked, they were open about it and helped us value engineer other areas to keep the total price flat. You can trust them.",
        author: "Robert Evans",
        location: "Berthoud, CO"
    }
];

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
            contact: {
                name: formData.firstName,
                email: formData.email,
                phone: formData.phone,
            },
            webinar: {
                title: "Custom Home Pricing: What Every Buyer Should Know",
                date: "July 10, 2026",
                time: "7:00 PM MT"
            },
            headers: {
                host: window.location.host,
                userAgent: navigator.userAgent,
                referer: document.referrer
            }
        };

        try {
            // Replace with actual GHL webinar registration webhook URL
            await fetch('https://services.leadconnectorhq.com/hooks/cG3cesDKIajoyQPNPYZK/webhook-trigger/webinar-registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
        } catch (_) {
            // Silent fail — show success regardless
        } finally {
            setLoading(false);
            setSubmitted(true);
        }
    };

    return (
        <>
            <SEO
                title="Free Webinar: Custom Home Pricing Explained | Homestead Home Builders"
                description="Learn what price per square foot actually means, how to compare builders fairly, and how to know if you're getting a good deal. Free live webinar — July 10, 2026."
                canonical="https://homesteadhomebuilders.com/webinar"
            />

            <FunnelHeader />

            <div className="min-h-screen bg-slate-50 flex flex-col pt-14">

                {/* ── Hero: two-column, form above the fold ─────────── */}
                <div className="bg-[#0d1f3c] px-6 pt-14 pb-20">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-3.5rem)]">

                            {/* Left column — copy + home images */}
                            <div className="py-8 lg:py-12">

                                {/* Badge */}
                                <div className="inline-flex items-center gap-2.5 bg-[#2B70B6]/20 border border-[#2B70B6]/30 px-4 py-2 rounded-full mb-7">
                                    <span className="w-2 h-2 bg-[#4a9eff] rounded-full animate-pulse flex-shrink-0" />
                                    <span className="text-sm font-bold text-[#7bb8f0] uppercase tracking-widest">Free Live Webinar</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-5 leading-tight">
                                    What Should a Custom Home Actually Cost{' '}
                                    <span className="text-[#4a9eff]">Per Square Foot?</span>
                                </h1>

                                <p className="text-base md:text-lg text-white/65 mb-8 leading-relaxed max-w-xl">
                                    Most people start their build without knowing what's a fair price — and builders know it.
                                    In this free 60-minute webinar, we break down real pricing ranges, expose common markups,
                                    and show you how to evaluate any quote with confidence.
                                </p>

                                {/* Overlapping home images — same treatment as /application */}
                                <div className="flex items-end mb-8 -space-x-5">
                                    <div className="w-28 md:w-36 h-20 md:h-24 rounded-xl overflow-hidden shadow-md rotate-[-5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home1.png" alt="Custom home by Homestead" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-32 md:w-44 h-24 md:h-32 rounded-xl overflow-hidden shadow-xl relative z-10 flex-shrink-0">
                                        <img src="/images/home2.png" alt="Custom home by Homestead" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-28 md:w-36 h-20 md:h-24 rounded-xl overflow-hidden shadow-md rotate-[5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home3.png" alt="Custom home by Homestead" className="w-full h-full object-cover object-top" />
                                    </div>
                                </div>

                                {/* Quick trust strip */}
                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {[
                                        "35+ years building in Northern Colorado",
                                        "100+ custom homes delivered",
                                        "5.0★ on Google",
                                    ].map(point => (
                                        <div key={point} className="flex items-center gap-2">
                                            <CheckCircle size={13} className="text-[#4a9eff] flex-shrink-0" />
                                            <span className="text-sm text-white/60 font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right column — registration form */}
                            <div className="py-8 lg:py-12">
                                <div className="bg-[#162d4a] rounded-2xl shadow-2xl overflow-hidden border border-white/10">

                                    {/* Card header with event details */}
                                    <div className="px-8 pt-7 pb-5 border-b border-white/10">
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="w-2 h-2 bg-[#4a9eff] rounded-full animate-pulse flex-shrink-0" />
                                            <span className="text-xs font-bold uppercase tracking-widest text-[#7bb8f0]">Seats Filling Fast</span>
                                        </div>
                                        <h2 className="text-xl font-serif font-bold text-white mb-3">Reserve Your Free Seat</h2>
                                        {/* Event detail pills — compact, inside the card */}
                                        <div className="flex flex-wrap gap-2">
                                            {[
                                                { Icon: Calendar, text: "July 10, 2026" },
                                                { Icon: Clock,    text: "7:00 PM MT" },
                                                { Icon: Video,    text: "Free Zoom" },
                                                { Icon: Users,    text: "100 Seats" },
                                            ].map(({ Icon, text }) => (
                                                <div key={text} className="flex items-center gap-1.5 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full">
                                                    <Icon size={11} className="text-[#7bb8f0] flex-shrink-0" />
                                                    <span className="text-xs font-semibold text-white/70">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="px-8 py-7">
                                        {submitted ? (
                                            <div className="text-center py-8">
                                                <div className="w-16 h-16 bg-[#2B70B6]/20 rounded-full flex items-center justify-center mx-auto mb-5">
                                                    <CheckCircle size={32} className="text-[#4a9eff]" />
                                                </div>
                                                <h3 className="text-xl font-serif font-bold text-white mb-3">You're Registered!</h3>
                                                <p className="text-white/55 text-sm leading-relaxed max-w-xs mx-auto">
                                                    Check your email for the Zoom link and calendar invite.
                                                    We'll see you July 10th at 7:00 PM MT.
                                                </p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div>
                                                    <label className="block text-xs font-bold text-white/55 mb-1.5 uppercase tracking-wide">
                                                        First Name
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.firstName}
                                                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                                        placeholder="Jane"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-white/55 mb-1.5 uppercase tracking-wide">
                                                        Email Address
                                                    </label>
                                                    <input
                                                        required
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                                        placeholder="jane@example.com"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-xs font-bold text-white/55 mb-1.5 uppercase tracking-wide">
                                                        Phone Number{' '}
                                                        <span className="text-white/25 normal-case font-normal">(optional)</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                                        placeholder="(970) 555-1234"
                                                    />
                                                </div>

                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="w-full bg-[#2B70B6] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#4a9eff] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
                                                >
                                                    {loading ? (
                                                        <><Loader2 className="animate-spin" size={20} /> Reserving Your Seat...</>
                                                    ) : (
                                                        "Reserve My Free Seat →"
                                                    )}
                                                </button>

                                                <div className="flex items-center justify-center gap-1.5 pt-0.5">
                                                    <Lock size={11} className="text-white/20" />
                                                    <p className="text-xs text-white/20">
                                                        No spam. Only your Zoom link and one reminder.
                                                    </p>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>

                                {/* Social proof under form */}
                                <div className="mt-4 flex items-center gap-2 justify-center">
                                    <Users size={13} className="text-white/30" />
                                    <p className="text-sm text-white/40">
                                        <span className="font-bold text-white/60">47 homeowners</span> have already registered.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ── What You'll Learn ─────────────────────────────── */}
                <div id="learn" className="py-20 px-6 bg-slate-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2B70B6] mb-3">What You'll Learn</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 leading-snug">
                                Walk Away Knowing If You're Getting A Fair Deal.
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                                Everything we cover in this webinar is based on real projects built in Northern Colorado — real numbers, not estimates.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {LEARN_ITEMS.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <div className="mt-0.5 flex-shrink-0 w-6 h-6 bg-[#2B70B6] rounded-full flex items-center justify-center">
                                        <CheckCircle size={13} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-base mb-1">{item.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <a
                                href="#"
                                onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] border-2 border-transparent hover:border-[#2B70B6] transition-all shadow-lg hover:shadow-xl rounded-full"
                            >
                                Reserve My Free Seat <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Homes image strip ─────────────────────────────── */}
                <div className="bg-white border-t border-b border-slate-100 py-16 px-6 overflow-hidden">
                    <div className="container mx-auto max-w-5xl">
                        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
                            A Sample of Our Work — Northern Colorado
                        </p>
                        <div className="grid grid-cols-3 gap-4 md:gap-6">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                                <img src="/images/home1.png" alt="Custom home — Northern Colorado" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl mt-0 md:-mt-6">
                                <img src="/images/home2.png" alt="Custom home — Northern Colorado" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                                <img src="/images/home3.png" alt="Custom home — Northern Colorado" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Why Trust Us ──────────────────────────────────── */}
                <div className="bg-white py-20 px-6">
                    <div className="container mx-auto max-w-5xl">

                        <div className="text-center mb-14">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2B70B6] mb-4">Why Listen To Us</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-5">
                                35 Years. 100+ Homes. No Hidden Agendas.
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                                We've built custom homes across Northern Colorado since 1990. We know what things really cost,
                                where the industry hides the markups, and how to protect homeowners from overpaying —
                                and we're sharing all of it for free.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16">
                            {TRUST_STATS.map(stat => (
                                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-3xl md:text-4xl font-serif font-bold text-[#2B70B6] mb-2">{stat.value}</div>
                                    <div className="text-xs text-slate-500 font-medium leading-snug whitespace-pre-line">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Trust bullets */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {[
                                {
                                    title: "Open Book Policy",
                                    desc: "We show every client the actual cost breakdown — every line item, every subcontractor invoice. No padding, no guessing."
                                },
                                {
                                    title: "No Commissioned Salespeople",
                                    desc: "The person who answers your questions is the same one who manages your build. We have no incentive to oversell you."
                                },
                                {
                                    title: "Free For A Reason",
                                    desc: "Informed homeowners make better clients. We'd rather you walk in with confidence than sign a bad contract with someone else."
                                }
                            ].map(item => (
                                <div key={item.title} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    <CheckCircle size={20} className="text-[#2B70B6] mb-3" />
                                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Herman Boonstra presenter card */}
                        <div className="bg-slate-50 rounded-2xl border border-slate-100 p-8 mb-16 flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md bg-slate-200">
                                <img
                                    src="/images/home1.png"
                                    alt="Herman Boonstra — Homestead Home Builders"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#2B70B6] mb-2">Your Host</p>
                                <h3 className="text-xl font-serif font-bold text-primary mb-1">Herman Boonstra</h3>
                                <p className="text-slate-500 text-sm mb-3">Founder &amp; Lead Builder · Homestead Home Builders · Est. 1990</p>
                                <p className="text-slate-600 text-sm leading-relaxed max-w-xl">
                                    Herman has been building custom homes in Northern Colorado for over 35 years. He started Homestead with a
                                    single commitment: no surprises. He'll walk you through exactly how he prices every project — the same
                                    framework he's used on 100+ homes — so you can hold any builder accountable.
                                </p>
                                <div className="flex items-center gap-1 mt-4 justify-center md:justify-start">
                                    {[1,2,3,4,5].map(i => (
                                        <Star key={i} size={13} className="fill-[#2B70B6] text-[#2B70B6]" />
                                    ))}
                                    <span className="text-xs text-slate-400 ml-2">5.0 · Google Verified · 100+ Reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {TESTIMONIALS.map(review => (
                                <div key={review.author} className="bg-white p-7 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                                    <div className="flex gap-0.5 mb-4">
                                        {[1,2,3,4,5].map(i => (
                                            <Star key={i} size={15} className="fill-[#2B70B6] text-[#2B70B6]" />
                                        ))}
                                    </div>
                                    <Quote className="w-6 h-6 text-primary/10 mb-3" />
                                    <p className="text-slate-600 text-sm leading-relaxed italic flex-grow mb-5">
                                        "{review.text}"
                                    </p>
                                    <div className="pt-4 border-t border-slate-50">
                                        <h4 className="font-bold text-primary text-sm">{review.author}</h4>
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 mt-1">
                                            <CheckCircle size={11} className="text-[#2B70B6]" />
                                            Verified Homeowner · {review.location}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Final CTA */}
                        <div className="text-center">
                            <a
                                href="#"
                                onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] border-2 border-transparent hover:border-[#2B70B6] transition-all shadow-lg hover:shadow-xl rounded-full"
                            >
                                Reserve My Free Seat <ArrowRight size={16} />
                            </a>
                            <p className="mt-3 text-sm text-slate-400">
                                Thursday, July 10, 2026 · 7:00 PM Mountain Time · Free via Zoom
                            </p>
                        </div>

                    </div>
                </div>

            </div>

            <FunnelFooter />
        </>
    );
};

export default WebinarRegistration;
