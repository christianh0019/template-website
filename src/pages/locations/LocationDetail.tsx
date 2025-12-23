
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
        { name: "Boyd Lake" },
        { name: "Campion" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - RESEARCH BACKED
    const faqs = [
        {
            question: "What are the specific soil risks for building in Loveland?",
            answer: "Loveland's soil composition relies heavily on expansive Bentonite clay, particularly in the 'Area C' Front Range zone. This requires 'floating slab' engineering for basements and often deep pier foundations to prevent structural heaving during freeze-thaw cycles."
        },
        {
            question: "How do water tap fees differ between City of Loveland and FCLWD?",
            answer: "It depends on your lot location. Projects within city limits typically connect to City of Loveland Utilities, while properties in the northern outskirts (like near Windsor) often fall under the Fort Collins-Loveland Water District (FCLWD). We navigate the specific inclusions and capital expansion fees for both entities."
        },
        {
            question: "What are the current building codes adopted by Loveland (2025)?",
            answer: "As of late 2025, Loveland enforces the 2021 International Residential Code (IRC) with local amendments. Key design criteria include a 130 MPH wind load (Exposure C) and a 30 psf snow load, which significantly impacts roof truss design and shear wall bracing."
        },
        {
            question: "Are ADUs allowed in Loveland neighborhoods?",
            answer: "Yes, but with strict caveats. Regulations limit ADUs based on lot size and setbacks. A separate zoning permit is required, and the unit often cannot exceed a certain percentage of the primary dwelling's footprint. We conduct feasibility studies to ensure compliance before design begins."
        },
        {
            question: "What is the average cost to build a custom home in Loveland?",
            answer: "Custom builds in Loveland generally range from $300 to $450+ per square foot. Costs are driven by site preparation (rock mitigation in the foothills vs. flat lots in Centerra) and the rigorous energy efficiency standards required by local code."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "Expansive Soil (Bentonite) Mitigation",
        "Loveland vs. FCLWD Water Taps",
        "130 MPH Wind Load Engineering",
        "HOA Compliance (Mariana Butte, The Lakes)",
        "Review Process for Historic Overlays",
        "Radon Resistant New Construction (RRNC)"
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
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48946.04018243644!2d-105.10967397669387!3d40.39868725916053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876953047a00632b%3A0x600b8a24855903b4!2sLoveland%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
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
                            Building in Loveland requires deep technical knowledge of the local environment. We specialize in engineering for <strong>Type C expansive soils</strong>, navigating the distinct water rights of the <strong>Big Thompson vs. FCLWD</strong>, and meeting the 130 MPH wind load requirements common along the foothills.
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
                        Download Loveland Cost Guide
                    </RouterLink>
                </div>
            </section>

            {/* Zone 6: FAQ */}
            <ServiceFAQ faqs={faqs} title="Loveland Building FAQ" />
        </>
    );
};

export default Loveland;
