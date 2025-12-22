import SEO from '../../components/SEO';
import ServiceHero from '../../components/services/ServiceHero';
import ServiceFeatures from '../../components/services/ServiceFeatures';
import ProcessSteps from '../../components/services/ProcessSteps';
import RelatedProjects from '../../components/services/RelatedProjects';
import ServiceFAQ from '../../components/services/ServiceFAQ';

const NewConstruction = () => {
    const features = [
        "Net-Zero Ready Energy Efficiency",
        "Smart Home Technology Integration",
        "Full Design-Build Service",
        "Lot Evaluation & Acquisition Assistance",
        "Transparent Budgeting & Scheduling",
        "10-Year Structural Warranty"
    ];

    const faqs = [
        {
            question: "What is your typical price per square foot?",
            answer: "While every custom home is unique, our luxury custom builds typically hover around $350-$450 per sq. ft. depending on finishes and site conditions."
        },
        {
            question: "Do you only build on lots you own?",
            answer: "No, we are an 'On Your Lot' builder. We can build on land you already own, or help you find the perfect lot in Northern Colorado."
        },
        {
            question: "How long does a custom home project take?",
            answer: "From groundbreaking to move-in, most of our projects take between 10-14 months. Design and permitting can add 3-6 months prior to that."
        },
        {
            question: "Can we use our own architect?",
            answer: "Absolutely. We are happy to collaborate with your architect, or you can utilize our in-house design partners for a seamless design-build experience."
        }
    ];

    return (
        <>
            <SEO
                title="Custom Home Builders in Loveland & Fort Collins | Homestead"
                description="Award-winning custom home builder in Northern Colorado. We design and build luxury energy-efficient homes on your lot or ours."
                canonical="https://homesteadhomebuilders.com/services/new-construction"
            />

            <ServiceHero
                title="Build Your Field of Dreams"
                subtitle="Uncompromising quality for your forever home. Experience the difference of a true custom builder in Northern Colorado."
                backgroundImage="https://images.unsplash.com/photo-1600596542815-3ad3091f67ed?q=80&w=2075&auto=format&fit=crop"
            />

            <ServiceFeatures
                title="Designed for Your Lifestyle"
                description="We don't just build houses; we craft environments tailored to how you live. From finding the perfect lot to the final light fixture, our team manages every detail unless you want to."
                features={features}
            />

            <ProcessSteps />

            <RelatedProjects category="Custom Build" />

            <ServiceFAQ faqs={faqs} />

            {/* Final CTA Strip */}
            <div className="bg-primary py-16 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Ready to Start the Conversation?</h2>
                    <a href="/contact" className="inline-block bg-accent text-primary px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl">
                        Schedule Discovery Call
                    </a>
                </div>
            </div>
        </>
    );
};

export default NewConstruction;
