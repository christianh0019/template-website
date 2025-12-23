
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Timnath = () => {
    const serviceArea = [
        { name: "Timnath", wikidataId: "Q2189689" },
        { name: "Harmony Corridor" }
    ];

    const faqs = [
        {
            question: "Is Timnath distinct from Fort Collins for building codes?",
            answer: "Yes. While Timnath borders Fort Collins, it has its own Building Department and fee schedules. Tap fees can be significant due to the rapid growth, often rivaling Fort Collins in cost."
        },
        {
            question: "Do you build in the luxury subdivisions like Harmony Club?",
            answer: "Yes, we are experienced with the rigorous architectural guidelines of Timnath's premier communities like Harmony Club and Serratoga Falls. We ensure your custom home meets these high aesthetic standards."
        },
        {
            question: "What schools serve Timnath?",
            answer: "Most of Timnath falls into the highly desirable Poudre School District (PSD). This drives high demand for family-sized custom homes with dedicated study spaces and large mudrooms."
        }
    ];

    const features = [
        "Luxury Subdivision Compliance",
        "Harmony Club Custom Builds",
        "Poudre School District Zones",
        "High-End Outdoor Living",
        "Multi-Car Garage Designs",
        "Rapid Growth Permitting"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Timnath"
                description="Luxury custom home builder in Timnath, CO. Specializing in high-end builds in Harmony Club, Serratoga Falls, and Wildwing."
                image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/timnath"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.5283,
                    longitude: -104.9813
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35542.123456789!2d-104.9813!3d40.5283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ebe0e2c84210d%3A0xc3f8374d6c62c3f!2sTimnath%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Timnath"
                subtitle="Small town roots, luxury living. We build estate-style homes that define Timnath's new era of architectural excellence."
                image="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2070&auto=format&fit=crop"
                customersServed={65}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Timnath Luxury</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Estate Homes on the Harmony Corridor
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Timnath is Northern Colorado's destination for modern luxury. We specialize in the <strong>large-lot estate homes</strong> found in Wildwing and Harmony Club, delivering the expansive outdoor living spaces and multi-car garages that these expansive lots demand.
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

            <RelatedProjects category="Custom Build" />

            <LocalMap
                city="Timnath"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35542.123456789!2d-104.9813!3d40.5283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ebe0e2c84210d%3A0xc3f8374d6c62c3f!2sTimnath%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Timnath Main St",
                        text: "While Timnath grows, we never lose sight of its character. Our team is expert at blending new construction with the local aesthetic near the Poudre River."
                    },
                    {
                        from: "Harmony Club",
                        text: "We are frequent builders in Timnath's premier golf communities, familiar with the strict gating and construction hour limitations to minimize disruption to neighbors."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Building Luxury in Timnath?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Timnath tap fees are unique. Download our <strong>Timnath Cost Guide</strong> to plan your estate build budget accurately.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Timnath Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Timnath Building FAQ" />
        </>
    );
};

export default Timnath;
