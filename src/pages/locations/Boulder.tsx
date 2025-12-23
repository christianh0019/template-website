
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Boulder = () => {
    // 1. GEO Protocol
    const serviceArea = [
        { name: "Boulder", wikidataId: "Q47438" },
        { name: "Niwot", wikidataId: "Q2516474" },
        { name: "Gunbarrel" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - BOULDER SPECIFIC
    const faqs = [
        {
            question: "What are the current Green Points requirements for Boulder?",
            answer: "Boulder's 'Green Points' system is mandatory for all residential building permits. New homes generally need a score of 60+ (depending on size), often requiring solar PV systems, high-efficiency mechanicals, and sustainable material sourcing to pass."
        },
        {
            question: "Do you build in the Wildland-Urban Interface (WUI)?",
            answer: "Yes. Many properties in West Boulder fall into the WUI zone. We are experts in implementing ignition-resistant exterior materials (Class A roofing, non-combustible siding) and establishing defensible spaces as required by Boulder County code."
        },
        {
            question: "What is the cost per square foot to build in Boulder?",
            answer: "Boulder is one of the most expensive markets in the state. Custom builds typically range from $450 to $700+ per square foot. This accounts for premium labor rates, strict energy codes, and the complex city planning review process."
        },
        {
            question: "Does Boulder allow ADUs?",
            answer: "Yes, Boulder has recently relaxed ADU regulations to encourage density, but rules vary strictly by zone. We conduct detailed intake analysis to determine if your lot qualifies for an attached or detached ADU under the current Land Use Code."
        },
        {
            question: "How does SmartRegs affect my remodel?",
            answer: "If you are remodeling a rental property, it must meet SmartRegs energy efficiency standards. Even for owner-occupied remodels, significant additions (over 500 sq ft) trigger current energy code compliance for the entire structure."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Boulder Green Points Strategy",
        "Wildland-Urban Interface (WUI) Compliance",
        "SmartRegs Energy Audits",
        "Solar PV & Net-Zero Integration",
        "Land Use Review (LUR) Navigation",
        "Ignition-Resistant Exterior Materials"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Boulder"
                description="Sustainable custom home builder in Boulder, CO. Specializing in Green Points compliance, Net-Zero homes, and WUI fire-resistant construction."
                image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/boulder"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St", // Using HQ address
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.0150,
                    longitude: -105.2705
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97777.67493527265!2d-105.2705!3d40.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8d4e278dafd3%3A0xc8393b7ca01b8058!2sBoulder%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Boulder"
                subtitle="High-performance homes for the environmentally conscious. We navigate Boulder's Green Points and planning reviews so you can build your sustainable sanctuary."
                image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop" // Modern/Sustainable aesthetic
                customersServed={85}
            />

            {/* Zone 2: Relevance & Specificity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Boulder Design-Build</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Building Meaningfully in Boulder
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Boulder is a world leader in sustainable building, and its codes reflect that. We specialize in meeting the rigorous <strong>City of Boulder Green Building Code</strong>, navigating <strong>Wildland-Urban Interface (WUI)</strong> fire zones, and leveraging passive solar design to create homes that are as efficient as they are beautiful.
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
            <RelatedProjects category="Custom Build" />

            {/* Zone 4: Map & Directions */}
            <LocalMap
                city="Boulder"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97777.67493527265!2d-105.2705!3d40.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8d4e278dafd3%3A0xc8393b7ca01b8058!2sBoulder%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Pearl Street",
                        text: "We work extensively in the downtown and Mapleton Hill districts, coordinating closely with City Planning services to ensure historic and aesthetic compatibility."
                    },
                    {
                        from: "The Foothills",
                        text: "For projects in the WUI zones west of Broadway, our focus shifts to defensible space and ignition-resistant exteriors, ensuring your mountain home is safe and compliant."
                    }
                ]}
            />

            {/* Zone 5: RAG Conversion Layer */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Budgeting for a Boulder Build?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Boulder's planning process is unique. Download our <strong>Boulder Cost Guide</strong> to understand soft costs, Green Points fees, and construction timelines.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Boulder Cost Guide
                    </RouterLink>
                </div>
            </section>

            {/* Zone 6: FAQ */}
            <ServiceFAQ faqs={faqs} title="Boulder Building FAQ" />
        </>
    );
};

export default Boulder;
