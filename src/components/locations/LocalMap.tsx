
import { MapPin, Navigation } from 'lucide-react';

interface LocalMapProps {
    city: string;
    mapEmbedUrl: string;
    directions: {
        from: string;
        text: string;
    }[];
}

const LocalMap = ({ city, mapEmbedUrl, directions }: LocalMapProps) => {
    return (
        <section className="py-20 bg-surface">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-lg shadow-xl overflow-hidden">

                    {/* Interactive Map Zone */}
                    <div className="lg:w-3/5 h-[400px] lg:h-auto min-h-[400px] relative bg-slate-100">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map of ${city} Service Area`}
                        ></iframe>
                    </div>

                    {/* Content & Directions Zone */}
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-widest text-xs mb-4">
                            <Navigation size={14} />
                            Local Presence
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-6">
                            Building in {city}
                        </h2>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Our team is active throughout {city}, managing projects from permitting to final walk-through. We are deeply familiar with strictly enforced local codes and HOA requirements.
                        </p>

                        <div className="space-y-6">
                            <h3 className="text-primary font-bold text-sm uppercase tracking-wide border-b border-slate-100 pb-2">
                                Driving Directions
                            </h3>
                            {directions.map((dir, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="bg-primary/5 text-primary p-2 rounded-full h-fit flex-shrink-0">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <span className="block text-slate-800 font-bold text-sm mb-1">From {dir.from}</span>
                                        <p className="text-slate-500 text-sm leading-relaxed">{dir.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalMap;
