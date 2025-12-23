
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Windsor = () => {
    // 1. GEO Protocol
    const serviceArea = [
        { name: "Windsor", wikidataId: "Q1018338" },
        { name: "Severance", wikidataId: "Q2163989" },
        { name: "Water Valley" }
    ];

    // 2. RAG Content: "Answer-First" FAQ - Windsor Specifics
    const faqs = [
        {
            question: "Does Windsor have the same soil issues as other Front Range cities?",
            answer: "Yes. Windsor has pockets of high-swelling Bentonite clay, especially near the bluffs. We use soil tests to determine if over-excavation or pier systems are needed to protect your foundation."
        },
        {
            question: "Which water district serves Windsor?",
            answer: "It's a mix. Central Windsor is often Town of Windsor Water, but many outlying and new subdivisions (like largely in Severance or North Windsor) are served by North Weld County Water District, which has its own tap fee structure and share requirements."
        },
        {
            question: "I want to build in Water Valley. Are there specific design rules?",
            answer: "Yes. Water Valley has a strict Architectural Control Committee (ACC). Designs often require specific masonry percentages (stone/stucco) and roof pitches. We are experienced in navigating these HOA reviews to get your custom design approved."
        },
        {
            question: "What is the cost to build in Windsor vs. Fort Collins?",
            answer: "Windsor can be slightly more affordable, typically ranging from $280 to $400 per sq.ft. Land costs are often lower, and while tap fees are high, they are generally predictable compared to the complexities of Fort Collins infill."
        },
        {
            question: "Do you build in Severance as well?",
            answer: "Yes, we build extensively in Severance. We are familiar with the Town of Severance's building department and the unique requirements for rural-residential lots that may require septic systems alongside municipal water."
        }
    ];

    // 3. Local Relevance Vectors
    const features = [
        "North Weld vs. Windsor Water Districts",
        "Water Valley HOA Architectural Review",
        "Expansive Soil Mitigation",
        "Rural-Residential Septic Integration",
        "Golf Course Lot Design Optimization",
        "Severance Building Code Compliance"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Windsor"
                description="Custom home builder in Windsor, CO. Experts in Water Valley luxury homes, Severance rural builds, and navigating North Weld water taps."
                image="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/windsor"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St", // Using HQ address
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.4775,
                    longitude: -104.9011
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48914.73541459463!2d-104.935!3d40.4775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876eac9a8c607ecf%3A0x6d110960537a7d4!2sWindsor%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Windsor"
                subtitle="From golf course estates in Water Valley to custom homes in Severance, we bring structural integrity and luxury design to Northern Colorado."
                image="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop" // Golf course / luxury vibe
                customersServed={95}
            />

            {/* Zone 2: Relevance & Specificity */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Windsor Specialists</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Building Excellence in Windsor & Severance
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Windsor offers a unique blend of luxury subdivision living and rural freedom. We understand the nuances of <strong>Water Valley's design guidelines</strong>, the engineering required for local soil conditions, and the complexities of <strong>North Weld Water District</strong> tap allocations.
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
                city="Windsor"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48914.73541459463!2d-104.935!3d40.4775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876eac9a8c607ecf%3A0x6d110960537a7d4!2sWindsor%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Water Valley",
                        text: "Located just east of I-25, we frequently manage builds in the Water Valley and RainDance communities. Our team is well-versed in the Pelican Lakes area design requirements."
                    },
                    {
                        from: "Severance",
                        text: "We provide comprehensive building services throughout the rapid growth corridors of Severance, ensuring your rural-residential lot is properly engineered for water and septic."
                    }
                ]}
            />

            {/* Zone 5: RAG Conversion Layer */}
            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Build in Windsor?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Understanding North Weld water shares is critical for your budget. Download our <strong>Windsor Cost Guide</strong> for 2025 estimates.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Windsor Cost Guide
                    </RouterLink>
                </div>
            </section>

            {/* Zone 6: FAQ */}
            <ServiceFAQ faqs={faqs} title="Windsor & Severance FAQ" />
        </>
    );
};

export default Windsor;
