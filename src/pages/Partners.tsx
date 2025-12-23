
import { ArrowRight, Handshake, ShieldCheck, Ruler, ClipboardCheck, Users, Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Partners = () => {
    return (
        <>
            <SEO
                title="Strategic Partners | Realtors, Architects & Trades"
                description="Homestead Home Builders partners with top realtors, architects, and subcontractors in Northern Colorado to deliver exceptional custom homes."
                canonical="https://homesteadhomebuilders.com/partners"
            />

            <PageHeader
                title="Strategic Partnerships"
                subtitle="Building value together through trust, transparency, and execution."
                backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Resources', path: '#' },
                    { label: 'Partners', path: '/partners' }
                ]}
            />

            {/* Introduction */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-4xl font-serif font-bold text-primary mb-6">Relationships Built on Respect</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-12">
                        We believe that the best projects are born from collaboration. Whether you are a realtor protecting your client's interests, an architect protecting your design integrity, or a trade partner seeking reliable workflow, we are built to support you.
                    </p>
                </div>
            </section>

            {/* Realtors Section */}
            <section className="py-24 bg-surface relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-accent text-primary rounded-lg">
                                    <Handshake size={24} />
                                </div>
                                <span className="font-bold text-primary tracking-widest uppercase text-sm">For Realtors</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Protecting Your Commission & Client Relationships</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                We know the horror stories: a builder cuts the agent out of the deal or fails to communicate, making you look bad. At Homestead, we view agents as essential partners. We offer a simple, transparent commission agreement and keep you in the loop from lot selection to key handoff.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Fully Protected Commissions (Even on Build-on-Your-Lot)",
                                    "We Handle the Technical Feasibility, You Handle the Deal",
                                    "Weekly Updates So You Never Look Out of the Loop",
                                    "Co-Marketing Opportunities for Listings"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#partner-form" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-secondary transition-colors rounded-sm shadow-md">
                                Register a Client <ArrowRight size={18} />
                            </a>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
                                alt="Realtor handing keys to client"
                                className="rounded-lg shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Architects Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-3 bg-primary text-white rounded-lg">
                                    <Ruler size={24} />
                                </div>
                                <span className="font-bold text-primary tracking-widest uppercase text-sm">For Architects & Designers</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">Executing Your Vision Without Compromise</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                You spend months perfecting the details, only for a builder to "value engineer" the soul out of the project. We pride ourselves on technical execution. We don't just build to code; we build to the intent of the design.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Respect for Architectural Intent & Detailing",
                                    "Collaborative Problem Solving, Not 'RFI Wars'",
                                    "High-Fidelity 3D Modeling Integration",
                                    "Direct Access to Project Managers"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                        </div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#partner-form" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm">
                                Discuss a Project <ArrowRight size={18} />
                            </a>
                        </div>
                        <div className="lg:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                                alt="Architect reviewing blueprints"
                                className="rounded-lg shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trade Partners Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="inline-flex items-center gap-3 mb-6 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                            <Briefcase size={18} className="text-accent" />
                            <span className="font-bold tracking-widest uppercase text-xs">For Trade Partners</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Reliable Payments. Clean Job Sites.</h2>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            We are builders, not just paper-pushers. We know that if our subs aren't successful, we aren't successful.
                            We run a tight ship so you can confirm the schedule, do your best work, and get paid on time.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                icon: ShieldCheck,
                                title: "Safety First",
                                desc: "OSHA-compliant sites that are clean and organized every single day."
                            },
                            {
                                icon: ClipboardCheck,
                                title: "Schedule Certainty",
                                desc: "We don't call you out until the site is actually ready. No wasted trips."
                            },
                            {
                                icon: Users,
                                title: "Fast Payment",
                                desc: "Transparent draw schedules and ACH payments. We respect your cash flow."
                            }
                        ].map((card, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-lg hover:bg-white/10 transition-colors">
                                <card.icon size={32} className="text-accent mb-6" />
                                <h3 className="text-xl font-bold font-serif mb-4">{card.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <a href="#partner-form" className="inline-flex items-center gap-2 bg-accent text-primary px-10 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl">
                            Join Bid List <ArrowRight size={18} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Application Form Section */}
            <section id="partner-form" className="py-24 bg-surface">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-white p-10 rounded-lg shadow-xl border-t-4 border-accent">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-2 text-center">Partnership Inquiry</h2>
                        <p className="text-slate-600 text-center mb-10">Tell us about your business and how we can collaborate.</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="First Name" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Last Name" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Company Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Company / Agency" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Partner Type</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                                        <option>Realtor / Broker</option>
                                        <option>Architect / Designer</option>
                                        <option>Subcontractor / Trade</option>
                                        <option>Vendor / Supplier</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="email@company.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="(555) 555-5555" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">How can we help you?</label>
                                <textarea rows={4} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="I have a client looking to build... / I am a licensed electrician..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white font-bold uppercase tracking-widest py-4 hover:bg-secondary transition-colors shadow-lg">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partners;
