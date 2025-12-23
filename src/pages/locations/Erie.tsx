
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Erie = () => {
    const serviceArea = [
        { name: "Erie", wikidataId: "Q1286364" },
        { name: "Vista Ridge" }
    ];

    const faqs = [
        {
            question: "Is Erie in Boulder or Weld County?",
            answer: "It straddles both! This affects everything from property taxes to building permit jurisdiction. We help you identify exactly which county your lot is in to determine the correct code compliance path."
        },
        {
            question: "Do you build near the Erie Air Park?",
            answer: "Yes. The Air Park is a unique community requiring specialized noise mitigation in construction (triple-pane windows, upgraded insulation). We are experienced in building comfortable homes even near active runways."
        },
        {
            question: "What is the vibe of new homes in Erie?",
            answer: "Erie is modern and fast-paced. New builds here often feature 'Colorado Contempo' designs—flat roofs, mixed materials, and smart technology integration to match the demographic of the area."
        }
    ];

    const features = [
        "Boulder vs. Weld County Zoning",
        "Air Park Noise Mitigation",
        "Modern 'Colorado Contempo' Design",
        "Golf Course Community Builds",
        "Family-Centric Floorplans",
        "Smart Home Tech Packages"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Erie"
                description="Custom home builder in Erie, CO. Specializing in modern family homes, Air Park properties, and energy-efficient designs."
                image="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/erie"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.0503,
                    longitude: -105.0499
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48995.123456789!2d-105.0499!3d40.0503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf778d4218655%3A0x6334659f635677!2sErie%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Erie"
                subtitle="Future-focused building for a modern community. We design homes that match Erie's energetic growth and panoramic mountain views."
                image="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop"
                customersServed={80}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Erie & Vista Ridge</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Where Innovation Meets Implementation
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Erie is one of Colorado's most dynamic towns. We match this energy with forward-thinking construction methods, from <strong>advanced framing techniques</strong> to <strong>solar-ready roofing</strong>, ensuring your home is as modern as the community around it.
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
                city="Erie"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48995.123456789!2d-105.0499!3d40.0503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf778d4218655%3A0x6334659f635677!2sErie%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "Erie Parkway",
                        text: "Central to our operations in the south county, we can quickly access sites from Old Town Erie to the new Colliers Hill development."
                    },
                    {
                        from: "Vista Ridge",
                        text: "We are well-versed in the soil conditions and view corridors of the Vista Ridge golf course community."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Building in Erie?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        County lines matter here. Download our <strong>Erie Cost Guide</strong> to understand the tax and permit differences between Weld and Boulder counties.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Erie Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Erie Building FAQ" />
        </>
    );
};

export default Erie;
