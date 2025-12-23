
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

const Additions = () => {
    const pageTitle = "Home Additions & ADU Builders Northern Colorado | Homestead";

    const features = [
        "Seamless Roofline & Siding Integration", // Aesthetic Cluster
        "Structural Foundation Pinning & Extensions", // Technical Cluster
        "ADU (Accessory Dwelling Unit) Design-Build", // Product Cluster
        "Zoning Setback & Height Restriction Analysis", // Regulatory Cluster
        "Pop-Top Second Story Additions",
        "Attached & Detached Garage Extensions"
    ];

    const faqs = [
        {
            question: "How much does it cost to add a room or addition?",
            answer: "Additions usually cost more per square foot than new construction because of the complexities of tying into the existing structure. Expect ranges from $250 to $400+ per sq.ft., depending on if plumbing/HVAC extensions are needed."
        },
        {
            question: "Can I build an ADU on my property?",
            answer: "Zoning for ADUs varies by city. Fort Collins and Loveland have become more permissive recently, but strict setbacks and lot coverage rules apply. We conduct a feasibility study to confirm what you can build."
        },
        {
            question: "How do you make the addition look like part of the original house?",
            answer: "We focus on seamless integration. We match roof pitches, sourcing matching brick/siding, and align window headers. Our goal is for the addition to look like it was always there."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Expert home additions, pop-tops, and ADUs in Loveland and Fort Collins. We specialize in seamless design integration and navigating complex zoning codes."
                canonical="https://homesteadhomebuilders.com/services/additions"
            />

            <ServiceSchema
                serviceName="Home Additions & ADUs"
                description="Design and construction of home additions, accessory dwelling units (ADUs), and garage expansions."
                areaServed={["Loveland", "Fort Collins", "Windsor", "Boulder", "Longmont"]}
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            />

            <ServiceHero
                title="Home Additions & ADUs"
                subtitle="Expand your footprint without sacrificing your home's character."
                backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                primaryCtaText="Feasibility Study"
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
                                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" alt="Modern Home Addition" className="w-full h-auto" />
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
                                Outgrowing your home, but love your block.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    Your family is growing, or you need space for aging parents, but moving means leaving the neighborhood, schools, and neighbors you love.
                                </p>
                                <p>
                                    We create <strong>seamless additions and Accessory Dwelling Units (ADUs)</strong> that give you the space you need. We handle the complex zoning setbacks, structural tie-ins, and architectural matching so your new space adds value and function without looking "tacked on."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <ServiceFeatures
                title="Seamless Integration"
                description="The best addition is one you can't identify. We obsess over matching rooflines, siding, and interior flow."
                features={features}
            />

            <ServiceTestimonial
                quote="Adding a second story master suite was a huge project, but the team handled the structural complexities perfectly. From the street, you genuinely can't tell it wasn't there originally."
                author="The Davis Family"
                location="Pop-Top Addition in boulder"
                image="https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=2070&auto=format&fit=crop"
            />

            <ProcessSteps />

            <RelatedProjects category="Addition" />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Cost of Adding On?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Additions are complex. Our <strong>Cost to Build Guide</strong> breaks down the costs of pop-tops, extensions, and ADUs in our local market.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Free Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Addition & ADU FAQ" />

            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Need more space?</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Let's verify your zoning setbacks and determine the feasibility of your addition.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-accent text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl text-lg">
                        Start Feasibility Study
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default Additions;
