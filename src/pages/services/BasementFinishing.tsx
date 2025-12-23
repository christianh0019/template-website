
import { Link as RouterLink } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ProcessSteps from '../../components/services/ProcessSteps';
import RelatedProjects from '../../components/services/RelatedProjects';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import ServiceTestimonial from '../../components/services/ServiceTestimonial';

const BasementFinishing = () => {
    const pageTitle = "Basement Finishing & Remodeling in Northern Colorado | Homestead";

    const features = [
        "Floating Slab Engineering & Movement Buffers", // Technical Cluster
        "Egress Window Installation & Code Compliance", // Regulatory Cluster
        "Custom Home Theaters & Wet Bars", // Luxury Cluster
        "Guest Suites & Multi-Generational Living",
        "Waterproofing & Moisture Mitigation", // Technical Cluster
        "Soundproofing & Insulation Upgrades"
    ];

    const faqs = [
        {
            question: "What is the cost per square foot to finish a basement?",
            answer: "Basement finishing typically ranges from $75 to $150 per square foot. Costs vary based on plumbing needs (adding bathrooms/wet bars), egress window requirements, and the level of finish (e.g., custom cabinetry vs. standard)."
        },
        {
            question: "How do you handle floating slab floors?",
            answer: "Colorado basements have 'floating' structural floors to accommodate soil movement. We frame all walls to 'float' from the ceiling down, preserving this structural buffer to prevent drywall cracking and warping."
        },
        {
            question: "Do I need a permalink for a basement remodel?",
            answer: "Yes. Finishing a basement adds legal livable square footage, which increases home value. We handle all permitting with Loveland, Fort Collins, or Windsor building departments to ensure code compliance."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Transform your lower level into a luxury retreat. Expert basement finishing in Fort Collins and Loveland, featuring wet bars, theaters, and guest suites."
                canonical="https://homesteadhomebuilders.com/services/basement-finishing"
            />

            <ServiceSchema
                serviceName="Basement Remodeling"
                description="Custom basement finishing services including theaters, wet bars, bedrooms, and bathrooms."
                areaServed={["Loveland", "Fort Collins", "Windsor", "Johnstown", "Berthoud"]}
                image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop"
            />

            <ServiceHero
                title="Luxury Basement Finishing"
                subtitle="Double your living space with a warm, engineered lower-level retreat."
                backgroundImage="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop"
                primaryCtaText="Get a Basement Quote"
                secondaryCtaText="Download Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
            />

            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1595521624992-48a59aef95e3?q=80&w=1956&auto=format&fit=crop" alt="Finished Basement Lounge" className="w-full h-auto" />
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
                            <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">The Challenge</span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                Wasted space and cold storage.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Your unfinished basement is a vast area of potential, but right now it's just gathering dust. It's cold, uninviting, and often feels disconnected from the rest of your beautiful home.
                                </p>
                                <p>
                                    We transform dark basements into vibrant extensions of your lifestyle. Whether it's a <strong>home theater, a guest suite for in-laws, or a custom wet bar</strong>, we engineer the space to be warm, dry, and perfectly integrated with your main floor's aesthetic.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ServiceFeatures
                title="Engineered for Comfort"
                description="Basements require specialized knowledge of floating walls, moisture control, and thermal breaks to ensure long-term comfort."
                features={features}
            />

            <ServiceTestimonial
                quote="We wanted a space where our teenagers could hang out, plus a guest room for the grandparents. Homestead nailed it. The soundproofing is amazing, and the wet bar is the highlight of our parties."
                author="The Miller Family"
                location="Basement Finish in Timnath"
                image="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
            />

            <ProcessSteps />

            <RelatedProjects category="Basement" />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning Your Basement Budget?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Basement costs vary wildly based on plumbing and finishes. Download our <strong>Cost to Build Guide</strong> for realistic price ranges.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Free Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Basement Finishing FAQ" />

            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Ready to expand your home?</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Schedule a walkthrough to measure your space and discuss layout options.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-accent text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl text-lg">
                        Schedule Walkthrough
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default BasementFinishing;
