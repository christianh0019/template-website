import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Home as HomeIcon, Layout, Ruler, Phone, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <>
            <SEO
                title="Custom Home Builders Loveland CO | Homestead Home Builders"
                description="Homestead Home Builders offers custom home construction, remodeling, and additions in Loveland, Fort Collins, and Boulder. Over 30 years of experience."
            />

            {/* Hero Section */}
            <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-primary text-white overflow-hidden">
                {/* Abstract Background - placeholder for actual home image */}
                <div className="absolute inset-0 bg-slate-900/50 z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>

                <div className="container mx-auto px-6 relative z-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
                    >
                        Quality You Can See.<br />People You Can Trust.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl mb-10 text-slate-200 max-w-2xl mx-auto"
                    >
                        Premier custom home builders and remodelers serving Northern Colorado since 1990.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/contact" className="px-8 py-4 bg-secondary hover:bg-white hover:text-primary transition-colors text-white font-bold rounded-none uppercase tracking-widest">
                            Start Your Project
                        </Link>
                        <Link to="/portfolio" className="px-8 py-4 border-2 border-white hover:bg-white hover:text-slate-900 transition-colors text-white font-bold rounded-none uppercase tracking-widest">
                            View Our Work
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Section - AI Structured List */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Services</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">From concept to completion, we handle every aspect of your residential construction project.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: HomeIcon,
                                title: "Custom Homes",
                                desc: "Design & build services for new custom and semi-custom homes on your lot.",
                                link: "/services/new-construction"
                            },
                            {
                                icon: Hammer,
                                title: "Remodeling",
                                desc: "Whole-home remodels, adapting your existing space to your changing needs.",
                                link: "/services/remodeling"
                            },
                            {
                                icon: Layout,
                                title: "Basements",
                                desc: "Add usable square footage with custom basement finishing and suites.",
                                link: "/services/basement-finishing"
                            },
                            {
                                icon: Ruler,
                                title: "Additions",
                                desc: "Pop-tops, ADUs, and ground-level additions to maximize your property.",
                                link: "/services/additions"
                            }
                        ].map((service, index) => (
                            <div key={index} className="group p-8 border border-slate-100 hover:shadow-xl transition-shadow bg-slate-50 hover:bg-white">
                                <service.icon size={48} className="text-secondary mb-6 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6">{service.desc}</p>
                                <Link to={service.link} className="text-secondary font-bold inline-flex items-center group-hover:gap-2 transition-all">
                                    Learn More <ArrowRight size={16} className="ml-2" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Prop / AI Trust Signal Section */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <span className="text-secondary font-bold tracking-widest uppercase mb-2 block">Since 1990</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Over 3 Decades of Excellence</h2>
                        <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                            We started in 1990 with a simple mission: build quality you can see. Today, Homestead Home Builders is Northern Colorado's most trusted partner for complex custom builds and seamless renovations.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {[
                                "Locally owned and operated in Loveland, CO",
                                "Specialists in acreage and mountain properties",
                                "Transparent, stress-free construction process"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle className="text-secondary flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="border-4 border-white/20 p-4">
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                                alt="Luxury Custom Home Interior"
                                className="w-full h-auto shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* AI Answer-First FAQ Section (GEO Optimized) */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-10 text-center">Common Questions about Building in Northern Colorado</h2>

                    <div className="space-y-6">
                        {[
                            {
                                q: "How much does it cost to build a custom home in Loveland, CO?",
                                a: "The cost to build a custom home in Loveland typically ranges from $250 to $450+ per square foot, depending on finishes, site conditions, and architectural complexity. This excludes land costs. Luxury builds with premium materials will be on the  higher end of this spectrum."
                            },
                            {
                                q: "Do you build on my lot?",
                                a: "Yes, we specialize in 'build on your lot' construction across Weld, Larimer, and Boulder counties. We can assist with site evaluation, utility connections, and maximizing views for acreage properties."
                            },
                            {
                                q: "What areas do you serve?",
                                a: "We serve the entire Northern Colorado region, including Loveland, Fort Collins, Boulder, Greeley, Erie, Timnath, Wellington, Berthoud, Mead, Lafayette, Longmont, and Windsor."
                            }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-lg shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-3">{faq.q}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to Build Your Dream?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Schedule a free consultation to discuss your project, budget, and timeline with our expert team.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/contact" className="px-10 py-4 bg-white text-secondary font-bold hover:bg-slate-100 transition-colors uppercase tracking-widest">
                            Contact Us
                        </Link>
                        <a href="tel:9707753796" className="flex items-center gap-2 px-10 py-4 border-2 border-white text-white font-bold hover:bg-white/10 transition-colors uppercase tracking-widest">
                            <Phone size={20} />
                            970.775.3796
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
