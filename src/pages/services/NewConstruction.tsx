import { Link as RouterLink } from 'react-router-dom';
import { FileText } from 'lucide-react';
import SEO from '../../components/SEO';
import ServiceSchema from '../../components/seo/ServiceSchema';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ProcessSteps from '../../components/services/ProcessSteps';
import RelatedProjects from '../../components/services/RelatedProjects';
import ServiceFAQ from '../../components/services/ServiceFAQ';

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
                backgroundImage="https://images.unsplash.com/photo-1600596542815-e32c21216f95?q=80&w=2072&auto=format&fit=crop"
                primaryCtaText="Start Feasibility Study"
                secondaryCtaText="Download 2025 Cost Guide"
            />

            {/* PAS Framework: The Problem / Agitation */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">The Challenge</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 leading-tight">
                        Building in Northern Colorado requires more than just a floor plan.
                    </h2>
                    <div className="prose prose-lg text-slate-600">
                        <p className="mb-6">
                            You envision a mountain-modern retreat or a legacy estate, but the path is often blocked by <strong>expensive tap fees, expansive clay soils, and complex zoning codes</strong>. Many projects stall in the permitting phase because the "builder" lacks the local regulatory knowledge to navigate Larimer or Weld County requirements.
                        </p>
                        <p className="font-medium text-primary text-xl">
                            We don't just build homes; we engineer solutions to these complexities so you can focus on the vision.
                        </p>
                    </div>
                </div>
                {/* Subtle pattern background could go here */}
            </section>

            {/* The Solution: Features Grid with Clusters */}
            <ServiceFeatures
                title="A Foundation of Expertise"
                description="Our 'Operational Maturity' ensures that your investment is protected by rigorous process, transparent financials, and building science excellence."
                features={features}
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
                        Download our comprehensive <strong>2025 Cost to Build Guide</strong>. We break down hard costs, soft costs, and permit fees for Loveland, Fort Collins, and Windsor.
                    </p>
                    <button className="bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Free Guide
                    </button>
                    <p className="text-sm text-slate-500 mt-4 italic">Updated for Q1 2025 Market Rates</p>
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
