
import { Link } from 'react-router-dom';
import { Award, Users, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const About = () => {
    return (
        <>
            <SEO
                title="About Us | Homestead Home Builders"
                description="Family-owned and operated since 1990. We have built a reputation for integrity, craftsmanship, and transparent pricing in Northern Colorado."
                canonical="https://homesteadhomebuilders.com/about"
            />

            <PageHeader
                title="Building Trust Since 1990"
                subtitle="Rooted in Northern Colorado. Committed to Craftsmanship. Dedicated to You."
                backgroundImage="https://images.unsplash.com/photo-1621847468516-1ed5d0df56fe?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'About', path: '/about' }
                ]}
            />

            {/* Founder's Message */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            {/* Abstract decorative element */}
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
                                alt="Michael Homestead, Founder"
                                className="w-full h-auto rounded-lg shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 shadow-lg rounded-lg z-20 border border-slate-100 hidden md:block">
                                <span className="font-serif font-bold text-4xl text-primary block">34</span>
                                <span className="text-slate-500 uppercase tracking-widest text-xs">Years Active</span>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Founder's Message</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">The Homestead Promise</h2>
                            <div className="text-slate-600 text-lg leading-relaxed space-y-6">
                                <p>
                                    When I started this company in 1990, the building industry was different. Handshakes meant something, and a builder's reputation was their only marketing budget. Over three decades later, technologies have changed, designs have modernized, but that core philosophy remains untouched.
                                </p>
                                <p>
                                    At Homestead, we don't just build houses; we build the backdrop for your family's most cherished memories. We promise <strong>radical transparency</strong> in our pricing, <strong>uncompromising quality</strong> in our materials, and a <strong>collaborative process</strong> that respects your vision.
                                </p>
                                <p>
                                    We aren't perfect, but we run towards problems, not away from them. That is my personal guarantee to you.
                                </p>
                            </div>
                            <div className="mt-10">
                                <img src="/signature.png" alt="Michael Homestead Signature" className="h-16 opacity-70" />
                                <div className="mt-2">
                                    <p className="font-bold text-primary text-xl">Michael Homestead</p>
                                    <p className="text-slate-500 uppercase tracking-widest text-sm">Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us / Core Values */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Core Values</h2>
                        <p className="text-slate-600 text-lg">The principles that guide every decision we make on the job site.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Quality First",
                                desc: "We don't optimize for speed; we optimize for longevity. We use materials that stand the test of Colorado's climate."
                            },
                            {
                                icon: Users,
                                title: "Radical Transparency",
                                desc: "You see the invoices we see. No hidden markups, no surprise changelog fees. You control the budget."
                            },
                            {
                                icon: Heart,
                                title: "Service Heart",
                                desc: "We are guests on your property. We keep job sites clean, respect neighbors, and communicate daily."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 border border-slate-100 shadow-sm hover:shadow-md transition-shadow rounded-sm relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-1 h-full bg-accent transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                <item.icon size={40} className="text-primary mb-6" />
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History / Timeline */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Our Journey</h2>
                        <p className="text-slate-600 text-lg">From a single pickup truck to Northern Colorado's most trusted custom builder.</p>
                    </div>

                    <div className="relative">
                        {/* Vertical line specifically for mobile/tablet/desktop consistency */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

                        {[
                            { year: "1990", title: "The Humble Beginning", desc: "Michael Homestead starts the company with a single truck and a framing crew in Loveland, CO." },
                            { year: "1998", title: "First Custom Award", desc: "Awarded 'Best Custom Home under 3000 sq ft' by the NOCO Builders Association." },
                            { year: "2010", title: "Expansion to Commercial", desc: "Launched a commercial division to handle boutique office remodels in Old Town Fort Collins." },
                            { year: "2018", title: "Next Generation", desc: "Michael's daughter, Sarah, joins as Lead Architect, bringing modern design principles to the firm." },
                            { year: "2024", title: "Sustainability Leader", desc: "Recognized as a leader in passive house standards and energy-efficient building practices." }
                        ].map((event, i) => (
                            <div key={i} className={`flex items-center mb-16 relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Spacer for desktop alternating layout */}
                                <div className="hidden md:block md:w-1/2"></div>

                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm z-10"></div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                                    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
                                        {/* Connector line for mobile */}
                                        <div className="md:hidden absolute top-4 -left-12 w-8 h-0.5 bg-slate-200"></div>

                                        <span className="text-accent font-bold text-xl md:text-2xl block mb-2">{event.year}</span>
                                        <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                                        <p className="text-slate-600">{event.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our People</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold">Meet the Leadership</h2>
                        </div>
                        <Link to="/careers" className="px-8 py-3 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors">
                            Join Our Team
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Michael Homestead",
                                role: "Founder & CEO",
                                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop"
                            },
                            {
                                name: "Sarah Jenkins",
                                role: "Lead Architect",
                                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
                            },
                            {
                                name: "David Chen",
                                role: "Head of Construction",
                                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
                            }
                        ].map((member, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-lg">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8">
                                    <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-accent uppercase tracking-widest text-xs font-bold">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
