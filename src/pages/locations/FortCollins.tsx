
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const FortCollins = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "Fort Collins", wikidataId: "Q33575" },
        { name: "Timnath", wikidataId: "Q2452295" },
        { name: "Laporte" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED (Fort Collins Specifics)
    const faqs = [
        {
            question: "Does Fort Collins require Green Building standards for new homes?",
            answer: "Yes. Fort Collins enforces strict Green Building Code amendments. New builds must meet specific 'Green Points' criteria or Energy Star certifications. We handle all compliance documentation, ensuring your home is both sustainable and code-compliant."
        },
        {
            question: "How do I build in Old Town Fort Collins' historic districts?",
            answer: "Building in Old Town requires navigating the Historic Preservation Division's reviews. We specialize in designing 'compatible yet distinct' additions and infill homes that respect the historic character while meeting modern efficiency standards."
        },
        {
            question: "What is the difference between Fort Collins Utilities and ELCO?",
            answer: "Water service depends on your quadrant. Central Fort Collins uses City Utilities, while areas near the I-25 corridor or north often use ELCO or Fort Collins-Loveland Water District. We identify your provider early to accurately project tap fees."
        },
        {
            question: "What is the cost per square foot for a custom home in Fort Collins?",
            answer: "Fort Collins is a premium market. Expect costs from $350 to $500+ per square foot. The higher range accounts for the rigorous green energy systems (solar readiness, EV charging) and architectural requirements prevalent in neighborhoods like Old Town or Observatory Village."
        },
        {
            question: "Are radon mitigation systems required in Fort Collins?",
            answer: "Yes. All new single-family homes in Fort Collins must have a passive radon mitigation system installed. We typically upgrade this to an active system (with a fan) for maximum safety given Larimer County's high radon levels."
        }
    ];

    // 3. Local Relevance Vectors (Fort Collins Specifics)
    const features = [
        "Historic Old Town Design Review",
        "Green Building Code Compliance",
        "ELCO vs. City Utilities Tap Fees",
        "Net-Zero & Solar Ready Standards",
        "Old Town Alley House (ADU) Zoning",
        "Radon & Soil Gas Mitigation"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Fort Collins"
                description="Luxury custom home builder in Fort Collins, CO. Experts in Green Building Codes, Old Town historic renovations, and sustainable modern design."
                image="https://images.unsplash.com/photo-1572023197621-e07e60155b1a?q=80&w=2072&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/fort-collins"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St", // Using HQ address, technically valid as service area HQ
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.5853,
                    longitude: -105.0844
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195698.0538740516!2d-105.1583!3d40.5853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a451e225431%3A0x296a2d04a8b7593c!2sFort%20Collins%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Fort Collins"
                subtitle="Merging sustainable innovation with historic charm. We are Fort Collins' premier builder for high-performance, design-forward homes."
                image="https://images.unsplash.com/photo-1572023197621-e07e60155b1a?q=80&w=2072&auto=format&fit=crop" // Old Town style image
                customersServed={210}
            />

            {/* Zone 2: Relevance & Specificity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Fort Collins Experts</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Mastering the Fort Collins Building Code
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Fort Collins leads the nation in sustainable building requirements. We don't just meet these codes; we excel at them. From navigating <strong>Historic Preservation reviews in Old Town</strong> to calculating <strong>Green Points</strong> for net-zero energy compliance, we simplify the complex regulations of the Choice City.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-accent/30 transition-colors flex items-start gap-4"
                            >
                                <CheckCircle2 className="text-accent flex-shrink-0 mt-1" size={20} />
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zone 3: Local Proof */}
            <RelatedProjects category="Remodel" /> {/* Often remodels in FTC */}

            {/* Zone 4: Map & Directions */}
            <LocalMap
                city="Fort Collins"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195698.0538740516!2d-105.1583!3d40.5853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a451e225431%3A0x296a2d04a8b7593c!2sFort%20Collins%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Old Town Square",
                        text: "We manage many projects in the historic East Side and West Side neighborhoods. Our team is frequently on-site coordinating with the City's preservation planners along Mountain and Laporte Avenues."
                    },
                    {
                        from: "Harmony Corridor",
                        text: "Serving the newer developments in South Fort Collins, we are easily accessible via the Harmony & Timberline intersection, ensuring rapid response times for our clients in Observatory Village and fossil Creek. "
                    }
                ]}
            />

            {/* Zone 5: RAG Conversion Layer */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Budgeting for a Fort Collins Build?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Fort Collins tap fees and green code compliance can impact budgets significantly. Download our <strong>Fort Collins Cost Guide</strong> to see the numbers.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Fort Collins Guide
                    </RouterLink>
                </div>
            </section>

            {/* Zone 6: FAQ */}
            <ServiceFAQ faqs={faqs} title="Fort Collins Construction FAQ" />
        </>
    );
};

export default FortCollins;
