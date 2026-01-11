import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ServiceSchema from '../components/seo/ServiceSchema';
import ServiceHero from '../components/services/ServiceHero';
// import ServiceFeatures from '../components/services/ServiceFeatures'; // Optional: Uncomment if common features exist
// import ProcessSteps from '../components/services/ProcessSteps'; // Optional: As above
// import RelatedProjects from '../components/services/RelatedProjects'; // Optional
import ServiceFAQ from '../components/services/ServiceFAQ';
// import ServiceTestimonial from '../components/services/ServiceTestimonial'; // Optional

// Token Declarations for Scaffold Script
declare const __PAGE_TITLE__: string;
declare const __PAGE_DESC__: string;
declare const __CANONICAL_URL__: string;
declare const __SERVICE_NAME__: string;
declare const __AREA_SERVED__: string[];
declare const __HERO_TITLE__: string;
declare const __HERO_SUBTITLE__: string;
declare const __HERO_BG__: string;
declare const __INTRO_TITLE__: string;
declare const __INTRO_CONTENT__: string;
declare const __FAQ_JSON__: { question: string, answer: string }[];


const __PAGE_COMPONENT__ = () => {

    // Page-Specific Data
    const pageTitle = "__PAGE_TITLE__";
    const pageDesc = "__PAGE_DESC__";
    const canonical = "__CANONICAL_URL__";

    const faqs = __FAQ_JSON__;

    return (
        <>
            <SEO
                title={pageTitle}
                description={pageDesc}
                canonical={canonical}
            />

            <ServiceSchema
                serviceName="__SERVICE_NAME__"
                description={pageDesc}
                areaServed={__AREA_SERVED__}
                image="__HERO_BG__"
            />

            <ServiceHero
                title="__HERO_TITLE__"
                subtitle="__HERO_SUBTITLE__"
                backgroundImage="__HERO_BG__"
                primaryCtaText="Start Information Request"
                secondaryCtaText="Download Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
            />

            {/* Intro / Relevance Section */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        {/* Visual Anchor */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img src="__HERO_BG__" alt="Planning" className="w-full h-auto" />
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full z-0 blur-2xl"></div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:w-1/2"
                        >
                            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">Overview</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                __INTRO_TITLE__
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <div dangerouslySetInnerHTML={{ __html: `__INTRO_CONTENT__` }} />
                            </div>

                            <div className="mt-10 flex gap-4">
                                <RouterLink to="/contact" className="px-8 py-4 bg-primary text-white text-sm font-bold uppercase tracking-widest hover:bg-primary-light transition-colors duration-300">
                                    Get Started
                                </RouterLink>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} />

            {/* Final CTA Strip */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6">Ready to discuss your project?</h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-10">
                        Our team is ready to answer your questions and help you navigate the process.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-5 rounded-sm uppercase tracking-widest text-sm font-bold transition-all duration-300">
                        Contact Us
                    </RouterLink>
                </div>
            </section>
        </>
    );
};

export default __PAGE_COMPONENT__;
