
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';

import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Loveland = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data

    const serviceArea = [
        { name: "Loveland", wikidataId: "Q12345" }, // Using generic for template, would be Q33575 real id
        { name: "Centerra", wikidataId: "Q5060049" },
        { name: "Boyd Lake" }
    ];

    // 2. RAG Content: "Answer-First" FAQ
    const faqs = [
        {
            question: "What is the average cost to build a custom home in Loveland, CO?",
            answer: "In 2025, custom home construction costs in Loveland typically range from $300 to $450+ per square foot. This variation depends heavily on lot conditions (e.g., rock mitigation near the foothills vs. flat lots in Centerra) and finish selections."
        },
        {
            question: "Do I need a specific permit for basement finishing in Loveland?",
            answer: "Yes. The City of Loveland Building Division requires permits for all basement finishes to ensure safety and code compliance. We handle the entire permitting process, including electrical and plumbing inspections."
        },
        {
            question: "Are you familiar with Loveland's specific energy codes?",
            answer: "Absolutely. Loveland enforces strict energy efficiency standards. We build to meet or exceed these codes, often utilizing high-performance insulation and passive solar design principles suitable for the Northern Colorado climate."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Foothills & Rock Foundation Engineering",
        "Navigating Loveland Water & Power Taps",
        "HOA Compliance (Centerra, Mariana Butte)",
        "Sustainable 'Passive House' Standards",
        "Multi-Generational Zoning Expertise",
        "CoConstruct Transparent Project Managment"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Loveland"
                description="Premier custom home builder and remodeler serving Loveland, CO. Specializing in sustainable, luxury homes near Boyd Lake, Centerra, and the Foothills."
                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/loveland"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.3978,
                    longitude: -105.0750
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!..." // Placeholder for real map embed
            />

            <LocationHero
                city="Loveland"
                subtitle="From the shores of Boyd Lake to the historic streets of Downtown, we build legacies that honor the spirit of the Sweetheart City."
                image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                customersServed={140}
            />

            {/* Zone 2: Relevance & Specificity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Local Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Building Challenges Specific to Loveland
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building in Loveland requires more than just good design. It demands an understanding of <strong>expansive soils near the foothills</strong>, specific regulations from <strong>Loveland Water & Power</strong>, and the distinct architectural guidelines of neighborhoods like <strong>Mariana Butte and The Lakes at Centerra</strong>.
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
                city="Loveland"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48946.04018243644!2d-105.10967397669387!3d40.39868725916053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876953047a00632b%3A0x600b8a24855903b4!2sLoveland%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "I-25 & Centerra",
                        text: "Head west on US-34 (Eisenhower Blvd) towards the mountains. We serve all neighborhoods along this corridor, ensuring easy access for site visits during your build."
                    },
                    {
                        from: "Downtown Loveland",
                        text: "We are deeply rooted in the community, just minutes from the Rialto Theater and the Foundry. Our central location allows us to manage projects efficiently across both East and West Loveland."
                    }
                ]}
            />

            {/* Zone 5: RAG Conversion Layer */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Project in Loveland?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Don't start without the data. Our <strong>Loveland Cost Guide</strong> includes specific tap fee estimates and zoning setbacks for 2025.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Loveland Build Guide
                    </RouterLink>
                </div>
            </section>

            {/* Zone 6: FAQ */}
            <ServiceFAQ faqs={faqs} title="Loveland Building FAQ" />
        </>
    );
};

export default Loveland;
