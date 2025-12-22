import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { locations } from '../data/locations';

const Locations = () => {
    return (
        <>
            <SEO
                title="Service Areas Northern Colorado | Homestead Builders"
                description="Serving Fort Collins, Loveland, Windsor, and Boulder. Custom home building and remodeling across Northern Colorado's most desirable communities."
                canonical="https://homesteadhomebuilders.com/locations"
            />

            <PageHeader
                title="Our Service Areas"
                subtitle="Building capability across Northern Colorado's premier communities."
                backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Locations', path: '/locations' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {locations.map((location) => (
                            <div key={location.slug} className="group relative overflow-hidden rounded-lg shadow-lg">
                                <div className="absolute inset-0">
                                    <img
                                        src={location.image}
                                        alt={location.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors" />
                                </div>

                                <div className="relative p-8 h-80 flex flex-col justify-end text-white">
                                    <div className="flex items-center gap-2 mb-2 text-accent">
                                        <MapPin size={20} />
                                        <span className="font-bold tracking-wider uppercase text-sm">Service Area</span>
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold mb-4">{location.name}</h3>
                                    <p className="text-slate-200 mb-6 line-clamp-2">
                                        {location.introText}
                                    </p>
                                    <Link
                                        to={`/locations/${location.slug}`}
                                        className="inline-flex items-center gap-2 font-bold text-white group-hover:text-accent transition-colors"
                                    >
                                        View Local Projects <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">Don't see your city?</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        We serve the greater Northern Colorado area. If you possess a lot of land outside these main hubs, please reach out. We frequently travel for the right custom projects.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-primary text-white px-8 py-4 font-bold hover:bg-secondary transition-colors"
                    >
                        Contact Us to Discuss Your Lot
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Locations;
