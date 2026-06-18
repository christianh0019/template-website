import React, { useState } from 'react';
import { CheckCircle, Users, Star, ArrowRight, Lock, Loader2, Quote } from 'lucide-react';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import SEO from '../components/SEO';

const LEARN_ITEMS = [
    {
        title: "Why two quotes for the 'same home' can be $390,000 apart",
        desc: "On a 3,000 sq ft home, $130/sqft is nearly $400K. We'll show you exactly where that gap comes from — and how to land on the right side of it."
    },
    {
        title: "The denominator trap — how builders inflate sq footage to look cheaper",
        desc: "The cheapest way to make a price look low is to inflate the number you divide by. Garage, porch, unfinished basement — not every builder counts the same things."
    },
    {
        title: "The 5 places where the money actually goes",
        desc: "Finishes, your lot, plan complexity, materials quality, builder overhead. We walk each one so you can see exactly what's driving your number."
    },
    {
        title: "A $350 vs $450/sqft breakdown — line by line",
        desc: "Cabinets, flooring, countertops, windows, rooflines. See how the gap accumulates — and realize that most of it is your choices, not a builder ripping you off."
    },
    {
        title: "The 3 questions to ask any builder before you sign",
        desc: "What's in your square footage? Cost-plus or fixed price? What's not in this number? These are the questions builders dread — and you should always ask."
    },
    {
        title: "40+ minutes of live Q&A with Herm — ask anything",
        desc: "This is the main event. Herm opens the floor after about 15 minutes of teaching. Bring your lot, your plan, your quote — he'll tell you what he sees."
    }
];

const TRUST_STATS = [
    { value: "35+", label: "Years in\nNorthern Colorado" },
    { value: "100+", label: "Custom Homes\nDelivered" },
    { value: "5.0★", label: "Google\nReview Rating" },
    { value: "$0", label: "Cost to\nAttend" },
];

const TESTIMONIALS = [
    {
        text: "From the initial soil test to the final walk-through, the team explained every cost and timeline adjustment clearly. No surprises, just a beautiful home.",
        author: "James & Rebecca Miller",
        location: "Fort Collins, CO"
    },
    {
        text: "We interviewed five builders. Homestead was the only team that truly listened to our vision and delivered significantly under budget.",
        author: "Dr. Sarah Chen",
        location: "Boulder, CO"
    },
    {
        text: "When lumber prices spiked, they were open about it and helped us value engineer other areas to keep the total flat. You can trust them.",
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
            contact: { name: formData.firstName, email: formData.email, phone: formData.phone },
            webinar: { title: "What It Really Costs to Build a Custom Home in Colorado", date: "July 10, 2026", time: "7:00 PM MT" },
            headers: { host: window.location.host, userAgent: navigator.userAgent, referer: document.referrer }
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

    const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <SEO
                title="Free Webinar: What It Really Costs to Build a Custom Home | Homestead"
                description="Same size. Same finishes. One builder quotes $320/sqft, the other $450. Join Herm Boonstra live to find out exactly why — and which side of that gap you want to be on."
                canonical="https://homesteadhomebuilders.com/webinar"
            />

            <FunnelHeader />

            <div className="min-h-screen bg-slate-50 flex flex-col pt-14">

                {/* ── Hero ──────────────────────────────────────────── */}
                <div className="bg-[#0d1f3c] px-6 pt-12 pb-16">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14 items-center">

                            {/* Left — copy + home images */}
                            <div className="py-4 lg:py-10">
                                <div className="inline-flex items-center gap-2 bg-[#2B70B6]/20 border border-[#2B70B6]/30 px-4 py-2 rounded-full mb-7">
                                    <span className="w-1.5 h-1.5 bg-[#4a9eff] rounded-full animate-pulse flex-shrink-0" />
                                    <span className="text-xs font-bold text-[#7bb8f0] uppercase tracking-widest">Free Live Webinar · July 10, 2026</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold text-white mb-5 leading-tight">
                                    Same size home. Same finishes on paper.
                                    <br className="hidden md:block" />
                                    <span className="text-[#4a9eff]"> One builder quotes $320/sqft.
                                    <br className="hidden lg:block" /> The other quotes $450.</span>
                                </h1>

                                <p className="text-base md:text-lg text-white/60 mb-8 leading-relaxed max-w-lg">
                                    On a 3,000 sq ft home, that gap is nearly <strong className="text-white/80 font-semibold">$390,000</strong>. In this free 60-minute session,
                                    Herman Boonstra breaks down exactly where it comes from — and which side of it you should be on.
                                </p>

                                {/* Overlapping home images */}
                                <div className="flex items-end mb-8 -space-x-5">
                                    <div className="w-28 md:w-32 h-20 md:h-22 rounded-xl overflow-hidden shadow-md rotate-[-5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home1.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-32 md:w-44 h-24 md:h-30 rounded-xl overflow-hidden shadow-xl relative z-10 flex-shrink-0">
                                        <img src="/images/home2.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-28 md:w-32 h-20 md:h-22 rounded-xl overflow-hidden shadow-md rotate-[5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home3.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-x-6 gap-y-2">
                                    {["35+ years building in Northern Colorado", "100+ custom homes delivered", "5.0★ on Google"].map(point => (
                                        <div key={point} className="flex items-center gap-2">
                                            <CheckCircle size={12} className="text-[#4a9eff] flex-shrink-0" />
                                            <span className="text-sm text-white/50 font-medium">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right — light-themed registration form */}
                            <div className="py-4 lg:py-10">
                                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                                    <div className="px-7 pt-7 pb-6 border-b border-slate-100">
                                        <h2 className="text-lg font-serif font-bold text-primary mb-1">Reserve Your Free Seat</h2>
                                        <p className="text-slate-400 text-sm">Thu, July 10 · 7:00 PM MT · Free via Zoom</p>
                                    </div>

                                    <div className="px-7 py-6">
                                        {submitted ? (
                                            <div className="text-center py-6">
                                                <div className="w-14 h-14 bg-[#2B70B6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <CheckCircle size={28} className="text-[#2B70B6]" />
                                                </div>
                                                <h3 className="text-lg font-serif font-bold text-primary mb-2">You're In!</h3>
                                                <p className="text-slate-500 text-sm leading-relaxed">
                                                    Check your email for the Zoom link. See you July 10th.
                                                </p>
                                            </div>
                                        ) : (
                                            <form onSubmit={handleSubmit} className="space-y-3.5">
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">First Name</label>
                                                    <input
                                                        required type="text"
                                                        value={formData.firstName}
                                                        onChange={e => setFormData({ ...formData, firstName: e.target.value })}
                                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] focus:bg-white transition-colors text-sm"
                                                        placeholder="Jane"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">Email</label>
                                                    <input
                                                        required type="email"
                                                        value={formData.email}
                                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] focus:bg-white transition-colors text-sm"
                                                        placeholder="jane@example.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs font-bold text-slate-500 mb-1.5 uppercase tracking-wide">
                                                        Phone <span className="text-slate-300 normal-case font-normal">(optional)</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        value={formData.phone}
                                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] focus:bg-white transition-colors text-sm"
                                                        placeholder="(970) 555-1234"
                                                    />
                                                </div>
                                                <button
                                                    type="submit" disabled={loading}
                                                    className="w-full bg-[#2B70B6] text-white font-bold uppercase tracking-widest py-3.5 rounded-lg hover:bg-[#1a5a9e] transition-all duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm mt-1"
                                                >
                                                    {loading ? <><Loader2 className="animate-spin" size={17} /> Saving your seat...</> : "Reserve My Free Seat →"}
                                                </button>
                                                <div className="flex items-center justify-center gap-1.5">
                                                    <Lock size={10} className="text-slate-300" />
                                                    <p className="text-xs text-slate-300">Only your Zoom link — no spam, ever.</p>
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-3 flex items-center gap-2 justify-center">
                                    <Users size={12} className="text-white/25" />
                                    <p className="text-xs text-white/35">
                                        <span className="font-semibold text-white/50">47 homeowners</span> already registered
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ── What You'll Learn ─────────────────────────────── */}
                <div className="py-20 px-6 bg-slate-50">
                    <div className="container mx-auto max-w-5xl">
                        <div className="text-center mb-12">
                            <p className="text-xs font-bold uppercase tracking-widest text-[#2B70B6] mb-3">What's Covered</p>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                                ~15 Minutes of Teaching. 40+ Minutes of Q&amp;A.
                            </h2>
                            <p className="text-slate-500 max-w-xl mx-auto leading-relaxed">
                                Herm spends about 15 minutes on the material below, then opens the floor. Your questions are the main event.
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
                            <a href="#" onClick={scrollToTop}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] border-2 border-transparent hover:border-[#2B70B6] transition-all shadow-lg hover:shadow-xl rounded-full">
                                Reserve My Free Seat <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ── Portfolio image strip ─────────────────────────── */}
                <div className="bg-white border-t border-b border-slate-100 py-14 px-6 overflow-hidden">
                    <div className="container mx-auto max-w-5xl">
                        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-10">
                            A Sample of Our Work in Northern Colorado
                        </p>
                        <div className="grid grid-cols-3 gap-4 md:gap-6">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                                <img src="/images/spotlights/spotlight-4.jpg" alt="Custom home — Northern Colorado" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl md:-mt-5">
                                <img src="/images/spotlights/spotlight-5.jpg" alt="Custom home — Northern Colorado" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                                <img src="/images/spotlights/spotlight-6.png" alt="Custom home — Northern Colorado" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
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
                                where the industry hides the markups, and how to protect homeowners from overpaying.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
                            {TRUST_STATS.map(stat => (
                                <div key={stat.label} className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    <div className="text-3xl md:text-4xl font-serif font-bold text-[#2B70B6] mb-2">{stat.value}</div>
                                    <div className="text-xs text-slate-500 font-medium leading-snug whitespace-pre-line">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Herman Boonstra card */}
                        <div className="bg-[#0d1f3c] rounded-2xl p-8 mb-14 flex flex-col md:flex-row gap-8 items-center md:items-start">
                            <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg bg-slate-700">
                                <img
                                    src="/images/spotlights/spotlight-1.png"
                                    alt="Herman Boonstra — Homestead Home Builders"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <p className="text-xs font-bold uppercase tracking-widest text-[#7bb8f0] mb-2">Your Host</p>
                                <h3 className="text-xl font-serif font-bold text-white mb-1">Herman Boonstra</h3>
                                <p className="text-white/50 text-sm mb-4">Founder &amp; Lead Builder · Homestead Home Builders · Est. 1990</p>
                                <p className="text-white/65 text-sm leading-relaxed max-w-xl">
                                    Herm has been building custom homes in Northern Colorado for over 35 years. He started Homestead on one commitment: no surprises.
                                    He'll walk you through exactly how he prices every project — the same open-book framework he's used on 100+ homes —
                                    so you can hold any builder accountable.
                                </p>
                                <div className="flex items-center gap-1 mt-4 justify-center md:justify-start">
                                    {[1,2,3,4,5].map(i => <Star key={i} size={13} className="fill-[#2B70B6] text-[#2B70B6]" />)}
                                    <span className="text-xs text-white/35 ml-2">5.0 · Google Verified · 100+ Reviews</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust bullets */}
                        <div className="grid md:grid-cols-3 gap-6 mb-14">
                            {[
                                { title: "Open Book Policy", desc: "Every client sees the actual cost breakdown — every line item, every subcontractor invoice. No padding, no guessing." },
                                { title: "No Commissioned Salespeople", desc: "The person who answers your questions is the same one who manages your build. We have no incentive to oversell you." },
                                { title: "Free For A Reason", desc: "Informed homeowners make better clients. We'd rather you walk in with confidence than sign a bad contract with someone else." }
                            ].map(item => (
                                <div key={item.title} className="p-6 bg-slate-50 rounded-xl border border-slate-100">
                                    <CheckCircle size={20} className="text-[#2B70B6] mb-3" />
                                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Testimonials */}
                        <div className="grid md:grid-cols-3 gap-6 mb-14">
                            {TESTIMONIALS.map(review => (
                                <div key={review.author} className="bg-white p-7 rounded-xl shadow-sm border border-slate-100 flex flex-col">
                                    <div className="flex gap-0.5 mb-4">
                                        {[1,2,3,4,5].map(i => <Star key={i} size={15} className="fill-[#2B70B6] text-[#2B70B6]" />)}
                                    </div>
                                    <Quote className="w-6 h-6 text-primary/10 mb-3" />
                                    <p className="text-slate-600 text-sm leading-relaxed italic flex-grow mb-5">"{review.text}"</p>
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
                            <a href="#" onClick={scrollToTop}
                                className="inline-flex items-center gap-2 px-8 py-4 bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] border-2 border-transparent hover:border-[#2B70B6] transition-all shadow-lg hover:shadow-xl rounded-full">
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
