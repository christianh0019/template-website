import { useParams, Navigate, Link } from 'react-router-dom';
import { MapPin, CheckCircle } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import { locations } from '../../data/locations';

const LocationDetail = () => {
    const { city } = useParams<{ city: string }>();
    const location = locations.find(l => l.slug === city);

    if (!location) {
        return <Navigate to="/locations" replace />;
    }

    return (
        <>
            <SEO
                title={location.metaTitle}
                description={location.metaDescription}
                canonical={`https://homesteadhomebuilders.com/locations/${location.slug}`}
            />

            <PageHeader
                title={`Custom Homes in ${location.name}`}
                subtitle={`Premier design-build services in ${location.name} and surrounding areas.`}
                backgroundImage={location.image}
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Locations', path: '/locations' },
                    { label: location.name, path: `/locations/${location.slug}` }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl font-serif font-bold text-primary mb-6">{location.introTitle}</h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                {location.introText}
                            </p>

                            <div className="bg-surface p-8 rounded-lg border border-slate-100">
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <MapPin className="text-accent" />
                                    Key Neighborhoods & Areas
                                </h3>
                                <ul className="space-y-3">
                                    {location.landmarks.map((landmark, i) => (
                                        <li key={i} className="flex items-center gap-3 text-slate-700">
                                            <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                                            {landmark}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-primary text-white p-10 rounded-sm shadow-xl">
                                <h3 className="text-2xl font-serif font-bold mb-4">Building in {location.name}?</h3>
                                <p className="text-slate-300 mb-6">
                                    Every municipality has unique zoning laws, soil conditions, and permit processes. We have deep experience navigating {location.name}'s specific requirements.
                                </p>
                                <Link
                                    to="/contact"
                                    className="inline-block w-full text-center bg-accent text-primary px-6 py-4 font-bold hover:bg-white transition-colors"
                                >
                                    Schedule a Consultation
                                </Link>
                            </div>

                            {/* Placeholder for localized portfolio items could go here */}
                            <div className="relative h-64 overflow-hidden rounded-sm group">
                                <img
                                    src="https://images.unsplash.com/photo-1613545325278-f24b0cae985e?q=80&w=2070&auto=format&fit=crop"
                                    alt="Luxury Kitchen"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <span className="text-white font-serif text-2xl font-bold border-b-2 border-accent pb-1">Recent Work in {location.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LocationDetail;
