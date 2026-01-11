
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../components/seo/LocationSchema';
import LocationHero from '../components/locations/LocationHero';
// import LocalMap from '../components/locations/LocalMap'; // Uncomment if using LocalMap
import ServiceFAQ from '../components/services/ServiceFAQ';
// import RelatedProjects from '../components/services/RelatedProjects'; // Uncomment if using related projects
// Token Declarations for Scaffold Script
declare const __CITY_NAME__: string;
declare const __PAGE_TITLE__: string;
declare const __PAGE_DESC__: string;
declare const __CANONICAL_URL__: string;
declare const __TELEPHONE__: string;
declare const __LATITUDE__: number;
declare const __LONGITUDE__: number;
declare const __MAP_EMBED_URL__: string;
declare const __WIKIDATA_ID__: string;
declare const __HERO_IMAGE__: string;
declare const __INTRO_SUBTITLE__: string;
declare const __UNIQUE_FACTS_JSON__: string[];
declare const __FAQ_JSON__: { question: string, answer: string }[];
declare const __ADDRESS_STREET__: string;
declare const __ZIP_CODE__: string;


const __PAGE_COMPONENT__ = () => {
    // 1. GEO Protocol: Entity Definitions & Schema Data
    const serviceArea = [
        { name: "__CITY_NAME__", wikidataId: "__WIKIDATA_ID__" },
        // Add surrounding areas if needed via manual edit or complex token
    ];

    // 2. RAG Content: "Answer-First" FAQ
    const faqs = __FAQ_JSON__;

    // 3. Local Relevance Vectors
    const features = __UNIQUE_FACTS_JSON__;

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - __CITY_NAME__"
                description="__PAGE_DESC__"
                image="__HERO_IMAGE__"
                url="__CANONICAL_URL__"
                telephone="__TELEPHONE__"
                address={{
                    streetAddress: "__ADDRESS_STREET__", // Needs to be replaced or defaulted
                    addressLocality: "__CITY_NAME__",
                    addressRegion: "CO",
                    postalCode: "__ZIP_CODE__", // Needs to be replaced
                    addressCountry: "US"
                }}
                geo={{
                    latitude: __LATITUDE__,
                    longitude: __LONGITUDE__
                }}
                areaServed={serviceArea}
                hasMap="__MAP_EMBED_URL__"
            />

            <LocationHero
                city="__CITY_NAME__"
                subtitle="__INTRO_SUBTITLE__"
                image="__HERO_IMAGE__"
                customersServed={100} // Default value
            />

            {/* Zone 2: Relevance & Specificity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Local Expertise</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Building Challenges Specific to __CITY_NAME__
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Building in __CITY_NAME__ requires deep technical knowledge of the local environment. We specialize in engineering for local soil conditions, navigating specific water rights, and meeting local wind and snow load requirements.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature: string, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-surface p-8 rounded-lg border border-slate-100 hover:shadow-md transition-shadow"
                            >
                                <CheckCircle2 className="text-accent w-8 h-8 mb-4" />
                                <h3 className="text-lg font-bold text-primary">{feature}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zone 5: FAQ */}
            <ServiceFAQ faqs={faqs} title="Building in __CITY_NAME__: Common Questions" />

            {/* CTA */}
            <section className="py-20 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif font-bold mb-6">Ready to build in __CITY_NAME__?</h2>
                    <p className="text-white/80 max-w-2xl mx-auto mb-10">
                        Schedule a feasibility consultation to discuss your lot and vision.
                    </p>
                    <RouterLink to="/contact" className="inline-block bg-accent hover:bg-accent-light text-white px-10 py-5 rounded-sm uppercase tracking-widest text-sm font-bold transition-all duration-300">
                        Start Your Project
                    </RouterLink>
                </div>
            </section>
        </>
    );
};

export default __PAGE_COMPONENT__;
