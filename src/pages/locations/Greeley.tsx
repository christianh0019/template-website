
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Greeley = () => {
    const serviceArea = [
        { name: "Greeley", wikidataId: "Q28221" },
        { name: "Evans", wikidataId: "Q1016624" },
        { name: "Garden City" }
    ];

    const faqs = [
        {
            question: "Is it cheaper to build in Greeley compared to Loveland?",
            answer: "Generally, yes. Land costs and impact fees in Greeley are typically lower than in Loveland or Fort Collins. We can often build larger square footage for the same budget in Greeley's expanding western subdivisions."
        },
        {
            question: "Do you build on agricultural land in Weld County?",
            answer: "Yes. Many of our Greeley projects are custom homes on acreage. We are experienced with Weld County's septic requirements, well permits, and agricultural zoning setbacks."
        },
        {
            question: "Does Greeley have specific design standards?",
            answer: "While less restrictive than historic Fort Collins, newer Greeley master-planned communities (like St. Michaels) have strict HOAs. We ensure your custom design meets these covenant requirements while maximizing your lot's potential."
        }
    ];

    const features = [
        "Weld County Agricultural Zoning",
        "Septic & Well Integration",
        "Cost-Effective Tap Fees",
        "Master-Planned Community HOAs",
        "Multi-Generational Layouts",
        "Energy Efficient Rural Builds"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Greeley"
                description="Custom home builder serving Greeley and Weld County. Specializing in affordable financing, acreage properties, and modern farmhouse designs."
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/greeley"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.4233,
                    longitude: -104.7091
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97793.8478426027!2d-104.7091!3d40.4233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ea764350346c1%3A0x6e9f1a0e073c683b!2sGreeley%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Greeley"
                subtitle="Bringing quality craftsmanship to the plains. From university district remodels to custom homes on acreage, we build for the Greeley lifestyle."
                image="https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070&auto=format&fit=crop"
                customersServed={110}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Greeley & Weld County</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Building Freedom on the Plains
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Greeley offers opportunities for land ownership that are becoming rare elsewhere. We specialize in <strong>rural-residential custom builds</strong>, navigating Weld County's specific regulations for <strong>septic systems and well water</strong>, ensuring your country dream home is built on a solid foundation.
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
                city="Greeley"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97793.8478426027!2d-104.7091!3d40.4233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ea764350346c1%3A0x6e9f1a0e073c683b!2sGreeley%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "West Greeley",
                        text: "Focusing on the new developments near St. Michaels and the Promontory, we bring modern construction quality to Greeley's fastest-growing neighborhoods."
                    },
                    {
                        from: "University District",
                        text: "We also serve central Greeley near UNC, specializing in pop-tops and comprehensive renovations for historic investment properties."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Cost to Build in Greeley?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Weld County offers distinct cost advantages. Download our <strong>Greeley Cost Guide</strong> to see per-square-foot breakdowns.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Greeley Cost Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Greeley Building FAQ" />
        </>
    );
};

export default Greeley;
