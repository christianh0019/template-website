import { ArrowRight, Hammer, Home as HomeIcon, Layout, Ruler, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Services = () => {
    return (
        <>
            <SEO
                title="Custom Home Building Services | Homestead Home Builders"
                description="Comprehensive design and build services in Northern Colorado. New construction, remodeling, basements, and additions."
                canonical="https://homesteadhomebuilders.com/services"
            />

            <PageHeader
                title="Our Services"
                subtitle="Expert craftsmanship capabilities for every stage of your home's lifecycle."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                icon: HomeIcon,
                                title: "New Custom Homes",
                                desc: "Turn your land into a legacy. We handle everything from site feasibility and architectural design to permitting and construction. Whether it's a mountain retreat or an acreage estate, we build homes that last generations.",
                                link: "/services/new-construction",
                                features: ["Build on Your Lot", "Architectural Design", "Energy Efficient Builds"]
                            },
                            {
                                icon: Hammer,
                                title: "Whole Home Remodeling",
                                desc: "Love your location but outgrown your home? We specialize in large-scale renovations that modernize layouts, improve flow, and upgrade finishes while respecting the original character.",
                                link: "/services/remodeling",
                                features: ["Structural Changes", "Kitchens & Baths", "Historic Renovations"]
                            },
                            {
                                icon: Layout,
                                title: "Basement Finishing",
                                desc: "Double your livable square footage. We transform dark storage areas into vibrant family rooms, home theaters, guest suites, and wet bars.",
                                link: "/services/basement-finishing",
                                features: ["Guest Suites", "Home Theaters", "Wet Bars & Kitchenettes"]
                            },
                            {
                                icon: Ruler,
                                title: "Additions & ADUs",
                                desc: "Expand your footprint. From pop-tops to ground-level additions and detached accessory dwelling units (ADUs), we help you maximize your property's potential.",
                                link: "/services/additions",
                                features: ["Second Story Pop-Tops", "Master Suites", "Detached Guest Houses"]
                            }
                        ].map((service, index) => (
                            <div key={index} className="flex flex-col h-full bg-surface border border-slate-100 p-10 hover:shadow-xl transition-shadow group">
                                <div className="bg-white w-20 h-20 flex items-center justify-center rounded-full shadow-sm mb-8 text-secondary group-hover:scale-110 transition-transform duration-500">
                                    <service.icon size={40} />
                                </div>
                                <h2 className="text-3xl font-serif font-bold text-primary mb-4">{service.title}</h2>
                                <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                                    {service.desc}
                                </p>

                                <ul className="mb-8 space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-500">
                                            <CheckCircle size={16} className="text-accent" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link to={service.link} className="inline-flex items-center text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors mt-auto">
                                    View Details <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif font-bold mb-6">Not Sure Where to Start?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Schedule a free site consultation to discuss feasibility and budget for your specific project type.
                    </p>
                    <Link to="/contact" className="inline-block px-10 py-4 bg-accent text-primary font-bold hover:bg-white transition-colors uppercase tracking-widest">
                        Book Site Consult
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Services;
