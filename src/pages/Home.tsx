import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, Home as HomeIcon, Layout, Ruler, Phone, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '../config/site';
import ProcessSection from '../components/ProcessSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import PremiumPortfolio from '../components/PremiumPortfolio';

const Home = () => {
    return (
        <>
            <SEO
                title={`Custom Home Builders ${SITE_CONFIG.contact.address.city} ${SITE_CONFIG.contact.address.state} | ${SITE_CONFIG.name}`}
                description={`${SITE_CONFIG.name} offers custom home construction, remodeling, and additions in ${SITE_CONFIG.serviceAreas[0].name}, ${SITE_CONFIG.serviceAreas[1].name}, and ${SITE_CONFIG.serviceAreas[3].name}. Over 30 years of experience.`}
            />

            {/* Premium Hero Section */}
            <section className="relative h-screen min-h-[700px] flex items-center justify-center bg-primary text-white overflow-hidden">
                {/* Parallax Background */}
                <div className="absolute inset-0 bg-[url('/images/spotlights/spotlight-6.png')] bg-cover bg-center bg-fixed opacity-50 z-0 scale-105 animate-slow-zoom"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-primary/90 z-10"></div>

                <div className="container mx-auto px-6 relative z-20 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="font-script text-3xl md:text-5xl text-blue-100 mb-2 drop-shadow-md">Quality you can see, people you can trust</div>
                        <h1 style={{ textWrap: "balance" }} className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-8 leading-tight text-white drop-shadow-2xl">
                            Northern Colorado's Best Custom Home Builder
                        </h1>
                        <p className="text-xl md:text-2xl mb-12 text-slate-200 max-w-2xl mx-auto font-light leading-relaxed">
                            We craft bespoke homes and transformative remodels that capture your vision and elevate your lifestyle.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center"
                    >
                        <Link to="/contact" className="group px-10 py-5 bg-[#2B70B6] hover:bg-white hover:text-[#2B70B6] transition-all duration-300 text-white font-bold tracking-widest uppercase shadow-xl hover:shadow-2xl rounded-full">
                            Start Your Project
                        </Link>
                        <Link to="/portfolio" className="group px-10 py-5 border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#2B70B6] transition-all duration-300 text-white font-bold tracking-widest uppercase flex items-center gap-3 rounded-full">
                            View Our Work <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                >
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                        <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                    </div>
                </motion.div>
            </section>

            {/* Services Section - Clean & Geometric */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Sidebar Title */}
                        <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                            <span className="text-[#2B70B6] font-bold tracking-widest uppercase text-sm block mb-4">What We Do</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Master Craftsmanship<br />For Every Scale.</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                From concept to completion, we handle every aspect of your residential construction project with precision, transparency, and architectural integrity.
                            </p>
                            <Link to="/services" className="inline-flex items-center text-primary font-bold border-b-2 border-[#2B70B6] pb-1 hover:text-[#2B70B6] transition-colors">
                                Explore All Services <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>

                        {/* Grid */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
                                <div key={index} className="group p-10 bg-surface hover:bg-primary transition-colors duration-500">
                                    <service.icon size={48} className="text-[#2B70B6] mb-8" />
                                    <h3 className="text-2xl font-serif font-bold text-primary group-hover:text-white mb-4 transition-colors">{service.title}</h3>
                                    <p className="text-slate-600 group-hover:text-slate-300 mb-8 leading-relaxed transition-colors">{service.desc}</p>
                                    <Link to={service.link} className="text-primary group-hover:text-[#2B70B6] font-bold inline-flex items-center uppercase tracking-widest text-xs transition-colors">
                                        Learn More <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* New Components Injection */}
            <ProcessSection />

            <PremiumPortfolio />

            {/* Value Prop / Since 1990 */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <div className="lg:w-1/2 relative">
                            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2B70B6]/20 rounded-full blur-3xl"></div>
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                                alt="Luxury Custom Home Interior"
                                className="w-full h-auto shadow-2xl relative z-10"
                            />
                            <div className="absolute -bottom-10 -right-10 bg-primary p-10 text-white z-20 hidden md:block">
                                <span className="block text-4xl font-serif font-bold text-[#2B70B6] mb-1">30+</span>
                                <span className="uppercase tracking-widest text-sm">Years Experience</span>
                            </div>
                        </div>

                        <div className="lg:w-1/2">
                            <span className="text-[#2B70B6] font-bold tracking-widest uppercase text-sm mb-4 block">Our Heritage</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">Rooted in Northern Colorado,<br />Built on Trust.</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                We started in {SITE_CONFIG.foundingYear} with a simple mission: build quality you can see. Today, {SITE_CONFIG.name} is Northern Colorado's most trusted partner for complex custom builds and seamless renovations.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Locally Owned & Operated",
                                    "Acreage & Mountain Specialists",
                                    "Transparent Pricing Model",
                                    "Award-Winning Designs"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-[#2B70B6]"></div>
                                        <span className="font-bold text-primary">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-12">
                                <Link to="/about" className="px-10 py-4 border-2 border-primary text-primary font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors">
                                    Our Story
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TestimonialCarousel />

            {/* AI Answer-First FAQ Section (GEO Optimized - Kept for Ranking) */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">Common Questions</h2>
                        <p className="text-slate-500">Answers to your most important questions about building in NoCO.</p>
                    </div>

                    <div className="space-y-4">
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
                            <div key={i} className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-lg font-bold text-primary mb-3 flex items-start gap-3">
                                    <CheckCircle className="text-[#2B70B6] w-5 h-5 flex-shrink-0 mt-1" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 leading-relaxed pl-8">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-32 bg-[#2B4677] text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8">Ready to Start Your Legacy?</h2>
                    <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">Schedule a free consultation to discuss your project, budget, and timeline with our expert team.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link to="/contact" className="px-12 py-5 bg-[#2B70B6] text-white font-bold hover:bg-white hover:text-[#2B70B6] transition-colors uppercase tracking-widest shadow-xl rounded-full">
                            Book Consultation
                        </Link>
                        <a href={SITE_CONFIG.contact.phoneHref} className="flex items-center gap-3 px-12 py-5 border-2 border-white/20 text-white font-bold hover:bg-white/10 transition-colors uppercase tracking-widest backdrop-blur-sm">
                            <Phone size={20} />
                            {SITE_CONFIG.contact.phone}
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
