
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Mead = () => {
    const serviceArea = [
        { name: "Mead", wikidataId: "Q1285375" },
        { name: "Highland Lake" }
    ];

    const faqs = [
        {
            question: "Is Mead a good location for commuters?",
            answer: "Excellent. Mead sits perfectly between Fort Collins, Longmont, and Denver. Building here gives you quick access to I-25 while retaining a quiet, small-town atmosphere."
        },
        {
            question: "Are property taxes lower in Mead?",
            answer: "Mead generally benefits from Weld County's traditionally lower property tax rates compared to Boulder County neighbors, making it attractive for larger custom homes."
        },
        {
            question: "Do you offer 'Build on Your Lot' in Mead?",
            answer: "Yes. Mead has many independent parcels and small subdivisions available. We specialize in the site prep required to turn a raw piece of land into a build-ready homesite."
        }
    ];

    const features = [
        "I-25 Commuter Access Designs",
        "Weld County Tax Advantages",
        "Large Acreage Site Prep",
        "Quiet Subdivision Planning",
        "Custom Family Homes",
        "Propane & Septic Coordination"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Mead"
                description="Custom home builder in Mead, CO. Building commuter-friendly luxury homes on large lots with quick I-25 access."
                image="https://images.unsplash.com/photo-1516156008625-3a9d60bdd72e?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/mead"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.2311,
                    longitude: -104.9972
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19586.123456789!2d-104.9972!3d40.2311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c0e547833590f%3A0x6334659f635677!2sMead%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Mead"
                subtitle="The crossroads of commerce and community. We build refined custom homes that offer a peaceful retreat just minutes from I-25."
                image="https://images.unsplash.com/photo-1516156008625-3a9d60bdd72e?q=80&w=2070&auto=format&fit=crop"
                customersServed={45}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Mead & Highland Lake</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            Connected Country Living
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Mead is the perfect balance for the modern family. We build homes that maximize this strategic location—offering <strong>spacious floor plans, large garages</strong>, and high-efficiency insulation to block out highway noise while keeping you connected to everything.
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
                city="Mead"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19586.123456789!2d-104.9972!3d40.2311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c0e547833590f%3A0x6334659f635677!2sMead%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "I-25 Exit",
                        text: "Just off the highway, we can easily transport materials and crews to Mead sites, keeping construction timelines tight and efficient."
                    },
                    {
                        from: "Mead High School",
                        text: "We build family-focused homes in the neighborhoods surrounding the new schools, creating communities that grow with you."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Planning a Build in Mead?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Get realistic numbers for your acreage build. Download our <strong>Mead Cost Guide</strong> for 2025.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Mead Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Mead Building FAQ" />
        </>
    );
};

export default Mead;
