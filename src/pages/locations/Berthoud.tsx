
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Berthoud = () => {
    const serviceArea = [
        { name: "Berthoud", wikidataId: "Q827725" },
        { name: "CampStool" }
    ];

    const faqs = [
        {
            question: "Do you build in TPC Colorado / Heron Lakes?",
            answer: "Yes. This is one of Berthoud's premier communities. We are experienced with the rigorous design review process for TPC Colorado, ensuring your custom home matches the luxury golf-course aesthetic."
        },
        {
            question: "Is Berthoud seeing a lot of new construction?",
            answer: "Berthoud is booming. It retains its 'Garden Spot of Colorado' charm but is adding modern amenities rapidly. We help you build in a way that respects the small-town feel while enjoying modern appreciation."
        },
        {
            question: "What style of homes are popular in Berthoud?",
            answer: "We see a mix of 'Colorado Modern' and 'Modern Farmhouse' styles. Large covered porches and indoor-outdoor living spaces are essential here to enjoy the unparalleled views of Longs Peak."
        }
    ];

    const features = [
        "TPC Colorado Luxury Builds",
        "Heron Lakes Design Compliance",
        "Lake & Mountain View Optimization",
        "Small-Town Permitting Agility",
        "Indoor-Outdoor Living Designs",
        "Custom Ranch Floorplans"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Berthoud"
                description="Custom home builder in Berthoud, CO. Experts in luxury golf course homes (TPC Colorado) and maximizing mountain views."
                image="https://images.unsplash.com/photo-1572957790367-9d73d6e326da?q=80&w=2069&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/berthoud"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.3083,
                    longitude: -105.0805
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19582.123456789!2d-105.0805!3d40.3083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876953f47833590f%3A0x6334659f635677!2sBerthoud%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Berthoud"
                subtitle="The Garden Spot of Colorado. We build homes that frame Longs Peak and embrace the luxury of Heron Lakes living."
                image="https://images.unsplash.com/photo-1572957790367-9d73d6e326da?q=80&w=2069&auto=format&fit=crop"
                customersServed={55}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Berthoud & Heron Lakes</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Views in Every Direction
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Berthoud is quickly becoming Northern Colorado's gemstone destination. Whether you are building on the fairways of <strong>TPC Colorado</strong> or on a quiet street in town, we design homes that prioritize <strong>view corridors</strong> and timeless curb appeal.
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
                city="Berthoud"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19582.123456789!2d-105.0805!3d40.3083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876953f47833590f%3A0x6334659f635677!2sBerthoud%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "TPC Colorado",
                        text: "We are minutes away from the Heron Lakes development, ensuring our project managers can visit your luxury site daily."
                    },
                    {
                        from: "Mountain Ave",
                        text: "Our team loves Berthoud's small town vibe. We coordinate effectively with the Town of Berthoud for inspections, known for their friendly but thorough process."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Building in Berthoud?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Download our <strong>Berthoud Cost Guide</strong> to see 2025 pricing for golf course lots and custom residences.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Berthoud Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Berthoud Building FAQ" />
        </>
    );
};

export default Berthoud;
