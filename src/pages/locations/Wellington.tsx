
import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import LocationSchema from '../../components/seo/LocationSchema';
import LocationHero from '../../components/locations/LocationHero';
import LocalMap from '../../components/locations/LocalMap';
import ServiceFAQ from '../../components/services/ServiceFAQ';
import RelatedProjects from '../../components/services/RelatedProjects';

const Wellington = () => {
    const serviceArea = [
        { name: "Wellington", wikidataId: "Q1286395" },
        { name: "Nunn" }
    ];

    const faqs = [
        {
            question: "Why build in Wellington vs. Fort Collins?",
            answer: "Wellington offers significantly more land for your money. It's ideal for homeowners who want 'elbow room,' large shops, or horse property, while still being just 15 minutes from Old Town Fort Collins."
        },
        {
            question: "Are water taps expensive in Wellington?",
            answer: "Water has historically been a challenge in Wellington, leading to higher tap fees or moratoriums in certain years. We work closely with the North Poudre Irrigation Company and the Town to verify water availability before you buy land."
        },
        {
            question: "Do you build detached shops (Barndominiums) in Wellington?",
            answer: "Yes! Wellington's zoning is often friendly to large accessory structures. We frequently build custom homes with matching large detached RV garages or workshops."
        }
    ];

    const features = [
        "Large Lot Custom Builds",
        "Detached Shop & RV Garage Design",
        "North Poudre Water Rights",
        "Rural-Residential Zoning",
        "Affordable Land Options",
        "USDA Loan Eligible Areas"
    ];

    return (
        <>
            <LocationSchema
                name="Homestead Home Builders - Wellington"
                description="Custom homes and barndominiums in Wellington, CO. We specialize in large-lot builds, shops, and navigating rural water rights."
                image="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop"
                url="https://homesteadhomebuilders.com/locations/wellington"
                telephone="+1-970-775-3796"
                address={{
                    streetAddress: "2444 E 13th St",
                    addressLocality: "Loveland",
                    addressRegion: "CO",
                    postalCode: "80537",
                    addressCountry: "US"
                }}
                geo={{
                    latitude: 40.7025,
                    longitude: -105.0069
                }}
                areaServed={serviceArea}
                hasMap="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19565.123456789!2d-105.0069!3d40.7025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876936304543590f%3A0x6334659f635677!2sWellington%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
            />

            <LocationHero
                city="Wellington"
                subtitle="Space to breathe, room to grow. We build custom homes and shops that make the most of Wellington's expansive rural landscape."
                image="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop"
                customersServed={70}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Wellington & Northern Larimer</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                            The Hub of Northern Colorado Living
                        </h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Wellington is the choice for those who value independence. We specialize in maximizing these rural lots, designing <strong>custom homes with integrated shops</strong> and ensuring your investment is protected with rock-solid utility planning in this water-conscious region.
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
                city="Wellington"
                mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19565.123456789!2d-105.0069!3d40.7025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876936304543590f%3A0x6334659f635677!2sWellington%2C%20CO!5e0!3m2!1sen!2sus!4v1709920000000!5m2!1sen!2sus"
                directions={[
                    {
                        from: "I-25 Corridor",
                        text: "We serve the entire Wellington area along I-25, providing easy access for our crews coming from Fort Collins."
                    },
                    {
                        from: "Cleveland Ave",
                        text: "From downtown Wellington to the rural parcels east of town, we handle the logistics of building on larger, spread-out lots."
                    }
                ]}
            />

            <section className="py-20 bg-primary/5 border-y border-primary/10">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Building in Wellington?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Water taps are the biggest variable here. Download our <strong>Wellington Cost Guide</strong> to check current water fee estimates.
                    </p>
                    <RouterLink to="/resources/cost-guide-optin" className="inline-block bg-white border-2 border-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors rounded-sm shadow-md">
                        Download Wellington Guide
                    </RouterLink>
                </div>
            </section>

            <ServiceFAQ faqs={faqs} title="Wellington Building FAQ" />
        </>
    );
};

export default Wellington;
