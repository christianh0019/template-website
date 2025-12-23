
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

const Remodeling = () => {
    // GEO Blueprint: Focus on "Entity-Service-Location Triad"
    const pageTitle = "Whole Home Remodeling & Renovations in Northern Colorado | Homestead";

    // GEO Blueprint: Keyword Clusters (Technical, Financial, Regulatory)
    const features = [
        "Load-Bearing Wall Removal & Structural Engineering", // Technical Cluster
        "Dust Containment & Air Quality Control", // Operational Cluster
        "Kitchen & Bath Design-Build Services", // Service Cluster
        "Historic Home Preservation & Updates", // Niche Cluster
        "Plumbing & Electrical Systems Modernization",
        "Open-Concept Layout Reconfigurations"
    ];

    const faqs = [
        {
            question: "How much does a whole home remodel cost in Northern Colorado?",
            answer: "Whole home renovations typically range from $100 to $250+ per square foot, depending on the scope (e.g., structural changes, moving mechanicals) and finish levels. Kitchens alone often range from $80k to $150k+."
        },
        {
            question: "Can we live in the house during the remodel?",
            answer: "For minor renovations, yes. However, for whole-home projects involving water/power shutoffs or extensive demolition, we recommend temporary housing. If staying, we implement strict dust containment and safety zones."
        },
        {
            question: "Do I need a structural engineer to remove a wall?",
            answer: "Almost always. Even 'partial' walls can be load-bearing. We work with licensed structural engineers to size LVL beams or steel headers, ensuring your home's integrity is never compromised."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Specializing in large-scale home renovations, kitchen remodels, and open-concept transformations in Loveland, Fort Collins, and Windsor."
                canonical="https://homesteadhomebuilders.com/services/remodeling"
            />

            <ServiceSchema
                serviceName="Home Remodeling & Renovation"
                description="Expert comprehensive home remodeling, structural modifications, and luxury kitchen/bath renovations."
                areaServed={["Loveland", "Fort Collins", "Windsor", "Timnath", "Boulder"]}
                image="https://images.unsplash.com/photo-1556912173-3db996ea0622?q=80&w=2070&auto=format&fit=crop"
            />

            <ServiceHero
                title="Luxury Home Remodeling & Renovations"
                subtitle="Reimagine your space without leaving the neighborhood you love."
                backgroundImage="https://images.unsplash.com/photo-1556912173-3db996ea0622?q=80&w=2070&auto=format&fit=crop"
                primaryCtaText="Schedule Design Consult"
                secondaryCtaText="Download Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
            />

            {/* PAS Framework: The Problem / Agitation */}
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
                                <img src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=2071&auto=format&fit=crop" alt="Modern Kitchen Renovation" className="w-full h-auto" />
                            </div>
                            {/* Decorative Element */}
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
                                Your home feels stuck in the past.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    You love your location, but your home's layout doesn't fit your modern lifestyle. <strong>Closed-off kitchens, cramped bathrooms, and dated finishes</strong> make your daily life harder than it needs to be.
                                </p>
                                <p>
                                    Remodeling can feel daunting—fear of hidden costs, dust everywhere, and contractors who ghost you. We change that narrative with rigorous project management and a respect for your living space that is second to none.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Solution: Features Grid */}
            <ServiceFeatures
                title="Renovating with Respect"
                description="We treat your home like our own, utilizing advanced dust protection, transparent scheduling, and structural expertise."
                features={features}
            />

            {/* Social Proof */}
            <ServiceTestimonial
                quote="Living through a remodel is tough, but Homestead made it painless. The crew was incredibly clean, they sealed off the work zone perfectly, and the finished open-concept kitchen changed our lives."
                author="The Anderson Family"
                location="Whole Home Remodel in Old Town Fort Collins"
                image="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2074&auto=format&fit=crop"
            />

            {/* The Process */}
            <ProcessSteps />

            {/* Proof Ecosystem */}
            <RelatedProjects category="Remodel" />

            {/* Soft Conversion */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Budgeting for a Renovation?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Get our <strong>Cost to Build & Remodel Guide</strong>. See specific price ranges for kitchen upgrades, bathroom remodels, and whole-house transformations.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Free Guide
                    </RouterLink>
                    <p className="text-sm text-slate-500 mt-4 italic">Updated for Current Market Rates</p>
                </div>
            </section>

            {/* FAQ */}
            <ServiceFAQ faqs={faqs} title="Remodeling Questions Answered" />

            {/* Final CTA */}
            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Love your home again.</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Let's discuss how we can open up your floor plan and modernize your space.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-accent text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl text-lg">
                        Schedule Design Consult
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default Remodeling;
