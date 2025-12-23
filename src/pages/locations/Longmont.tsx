
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Longmont = () => {
    const serviceArea = [
        { name: "Longmont", wikidataId: "Q33555" },
        { name: "Hygiene", wikidataId: "Q5956743" },
        { name: "Niwot" }
    ];

    const faqs = [
        {
            question: "Does Longmont allow ADUs (Accessory Dwelling Units)?",
            answer: "Yes, Longmont has a relatively progressive ADU ordinance. Attached or detached units are allowed in many residential zones, provided they meet setback and lot coverage requirements. We help design ADUs that maximize space within these legal limits."
        },
        {
            question: "Do you work with older homes in Historic Longmont?",
            answer: "Absolutely. We renovate many 1900s-era bungalows and Victorians in the historic West Side. We modernize plumbing and electrical while preserving original millwork and character."
        },
        {
            question: "What utility provider serves Longmont?",
            answer: "Longmont has its own NextLight municipal fiber and electric utility (LPC). This often makes integrating smart home tech and high-efficiency electric systems (like heat pumps) more streamlined during construction."
        }
    ];

    const features = [
        "ADU Design & Permitting",
        "Historic Home Modernization",
        "NextLight Smart Home Integration",
        "Boulder County Green Guidelines",
        "Crawl Space Encapsulation",
        "Pop-Top Additions"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Longmont"
                description="Longmont's trusted custom builder. Specializing in ADUs, historic renovations, and high-performance new homes in Boulder County."
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/longmont"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.1672,
                    longitude: -105.1019
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48995.123456789!2d-105.1019!3d40.1672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf95368a2f327%3A0x6334659f635677!2sLongmont%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Longmont"
                subtitle="High-speed living meets historic charm. We build ADUs and contemporary homes that fit perfectly into Longmont's vibrant neighborhoods."
                image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                customersServed={125}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Longmont Living</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Modernizing Main St. & Beyond
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Longmont is evolving. Whether it's adding a <strong>rental ADU</strong> to offset a mortgage or updating a classic home in the <strong>Historic Eastside</strong>, we bring modern building science to this distinct community, respecting its past while building for a fiber-connected future.
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

            <RelatedProjects category="Remodel" />

            <LocalMap
                city="Longmont"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48995.123456789!2d-105.1019!3d40.1672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf95368a2f327%3A0x6334659f635677!2sLongmont%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Hover St & 119",
                        text: "Easily accessible from the Diagonal Highway, we service all of Southwest Longmont, including the upscale neighborhoods near Twin Peaks Golf Course."
                    },
                    {
                        from: "Historic Downtown",
                        text: "Our renovation teams are a common sight in the avenues near Roosevelt Park, managing complex remodels that require careful lead paint mitigation and structural updates."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Building an ADU in Longmont?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Download our <strong>Longmont ADU & Cost Guide</strong> to understand setback rules and pricing per square foot.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Longmont Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Longmont Building FAQ" />
        </>
    );
};

export default Longmont;
