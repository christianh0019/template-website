
import { Link } from 'react-router-dom';
import { MapPin, Phone, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationHeroProps {
    city: string;
    subtitle: string;
    image: string;
    customersServed: number;
}

const LocationHero = ({ city, subtitle, image, customersServed }: LocationHeroProps) => {
    return (
        <section className="relative bg-slate-900 border-b border-white/10 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* LEFT ZONE: Text & Conversion */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-widest mb-6">
                            <MapPin size={12} />
                            Serving {city} & Surrounding Areas
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                            Custom Home Builders in <span className="text-secondary">{city}</span>
                        </h1>

                        <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                            {subtitle}
                        </p>

                        {/* Trust Bar */}
                        <div className="flex flex-wrap gap-6 mb-10 pb-10 border-b border-white/10">
                            <div className="flex items-center gap-3">
                                <div className="bg-primary-light p-2 rounded-full">
                                    <ShieldCheck className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-lg">{customersServed}+</span>
                                    <span className="text-slate-400 text-xs uppercase tracking-wide">Projects in {city}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-primary-light p-2 rounded-full">
                                    <Star className="text-accent w-6 h-6" />
                                </div>
                                <div>
                                    <span className="block text-white font-bold text-lg">5.0</span>
                                    <span className="text-slate-400 text-xs uppercase tracking-wide">Google Rating</span>
                                </div>
                            </div>
                        </div>

                        {/* NAP Block & CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <Link
                                to="/contact"
                                className="bg-accent text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl w-full sm:w-auto text-center"
                            >
                                Schedule Consultation
                            </Link>
                            <a
                                href="tel:9707753796"
                                className="flex items-center gap-2 text-white font-bold hover:text-accent transition-colors px-4 py-3"
                            >
                                <Phone size={20} />
                                970.775.3796
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT ZONE: Authentic Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl skew-y-1">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <img
                                src={image}
                                alt={`Construction project in ${city}`}
                                className="w-full h-full object-cover aspect-[4/3]"
                            />

                            {/* Floating Local Label */}
                            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-sm shadow-lg">
                                <span className="block text-primary font-bold text-sm">Recent Project</span>
                                <span className="text-slate-600 text-xs flex items-center gap-1">
                                    <MapPin size={10} /> {city} Metro
                                </span>
                            </div>
                        </div>

                        {/* Decorative Background Blur */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/40 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>

            {/* Sticky Mobile CTA Spacer (logic would be in layout, but added purely for visual spacing here) */}
        </section>
    );
};

export default LocationHero;
