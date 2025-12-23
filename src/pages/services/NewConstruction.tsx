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

const NewConstruction = () => {
    // GEO Blueprint: Focus on "Entity-Service-Location Triad"
    const pageTitle = "Custom Home Builders in Loveland & Fort Collins | Sustainable Design-Build";

    // GEO Blueprint: Keyword Clusters (Technical, Financial, Regulatory)
    const features = [
        "Advanced Soil Engineering & Pier Foundations", // Technical Cluster
        "Fixed-Price Contracts & Transparent Draw Schedules", // Financial Cluster
        "Navigating HOA & Historic Overlay Reviews", // Regulatory Cluster
        "Net-Zero Ready & Passive House Standards", // Efficiency Cluster
        "In-House Architectural Design Teams",
        "CoConstruct Project Management Portal" // Operational Maturity Signal
    ];

    const faqs = [
        {
            question: "What is your typical price per square foot for a custom home in 2025?",
            answer: "In the Loveland and Fort Collins market, entry-level custom homes typically start at $300/sq.ft, with luxury estates ranging from $375 to $450+. Final costs depend heavily on site conditions (slope, soil) and finish selections."
        },
        {
            question: "Do you handle zoning variances and water tap fees?",
            answer: "Yes. Our pre-construction team manages the entire regulatory process, including obtaining water district taps (e.g., North Weld, Fort Collins-Loveland) and navigating county zoning variances."
        },
        {
            question: "Can you build on a sloped lot or in the foothills?",
            answer: "We specialize in complex sites. From walkout basements on steep grades to rock mitigation in the foothills, our engineering partners ensure a stable, lasting foundation."
        }
    ];

    return (
        <>
            <SEO
                title={pageTitle}
                description="Award-winning custom home builder specializing in luxury sustainable homes on your lot. we handle complex zoning, soil engineering, and full design-build in Northern Colorado."
                canonical="https://homesteadhomebuilders.com/services/new-construction"
            />

            <ServiceSchema
                serviceName="Custom Home Construction"
                description="Full-service custom home design and build on your lot. Specializing in sustainable, luxury residential construction."
                areaServed={["Loveland", "Fort Collins", "Windsor", "Timnath", "Boulder"]}
                image="https://images.unsplash.com/photo-1600596542815-e32c21216f95?q=80&w=2072&auto=format&fit=crop"
            />

            <ServiceHero
                title="Custom Home Builders in Loveland & Fort Collins"
                subtitle="Sustainable Design-Build Services for the Modern Legacy."
                backgroundImage="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                primaryCtaText="Start Feasibility Study"
                secondaryCtaText="Download Cost Guide"
                secondaryCtaLink="/resources/cost-guide-optin"
            />

            {/* PAS Framework: The Problem / Agitation - Softened & Humanized */}
            <section className="py-32 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-20">
                        {/* Visual Anchor for Emotional Connection */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="Construction planning on site" className="w-full h-auto" />
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
                                Building a legacy shouldn't be a struggle.
                            </h2>
                            <div className="prose prose-lg text-slate-600 space-y-6">
                                <p>
                                    You envision a mountain-modern retreat or a multigenerational estate, but the path is often blocked by <strong>expensive tap fees, expansive clay soils, and complex zoning codes</strong>.
                                </p>
                                <p>
                                    Many future homeowners feel overwhelmed by the technicalities before they even break ground. At Homestead, we believe the process should be as inspiring as the outcome. We engineer solutions to these complexities so you can focus on the vision.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* The Solution: Features Grid with Clusters */}
            <ServiceFeatures
                title="A Foundation of Expertise"
                description="Our 'Operational Maturity' ensures that your investment is protected by rigorous process, transparent financials, and building science excellence."
                features={features}
            />

            {/* Added: Specific Testimonial for Social Proof */}
            <ServiceTestimonial
                quote="We had heard horror stories about building custom homes—delays, budget blowouts, silica dust... Homestead was the complete opposite. Their fixed-price contract gave us peace of mind, and the CoConstruct app kept us updated daily."
                author="The Sarah & Michael J."
                location="Custom Build in Water Valley, Windsor"
                image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop"
            />

            {/* The Process: Operational Transparency */}
            <ProcessSteps />

            {/* Proof Ecosystem: Project Cards & Contextual Evidence */}
            <RelatedProjects category="Custom Build" />

            {/* Soft Conversion: Cost Guide CTA */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning Your Budget?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Download our comprehensive <strong>Cost to Build Guide</strong>. We break down hard costs, soft costs, and permit fees for Loveland, Fort Collins, and Windsor.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Free Guide
                    </RouterLink>
                    <p className="text-sm text-slate-500 mt-4 italic">Updated for Current Market Rates</p>
                </div>
            </section>

            {/* Answer-First Content */}
            <ServiceFAQ faqs={faqs} title="Common Questions about Custom Builds" />

            <div className="bg-primary py-24 text-center">
                <div className="container mx-auto px-6 max-w-3xl">
                    <h2 className="text-4xl font-serif font-bold text-white mb-8">Ready to break ground?</h2>
                    <p className="text-slate-300 text-lg mb-10">
                        Schedule a site consultation to discuss lot feasibility, solar orientation, and initial budgeting.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-accent text-primary px-12 py-5 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl text-lg">
                        Schedule Site Consultation
                    </RouterLink>
                </div>
            </div>
        </>
    );
};

export default NewConstruction;
