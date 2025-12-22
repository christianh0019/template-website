import { Layout, Maximize, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const BasementFinishing = () => {
    return (
        <>
            <SEO
                title="Basement Finishing Services Fort Collins | Homestead"
                description="Double your living space with a custom basement finish. Home theaters, guest suites, and wet bars in Fort Collins, Loveland, and Windsor."
                canonical="https://homesteadhomebuilders.com/services/basement-finishing"
            />

            <PageHeader
                title="Basement Finishing"
                subtitle="Unlock the potential beneath your feet."
                backgroundImage="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2187&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: 'Basement Finishing', path: '/services/basement-finishing' }
                ]}
            />

            {/* Answer-First Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">Is finishing a basement a good investment in Northern Colorado?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        Absolutely. In the Northern Colorado market, finishing a basement is often the most cost-effective way to add square footage. While building an addition can cost $300-$500/sq. ft., basement finishing typically ranges from $80-$150/sq. ft. depending on finishes. It also yields a high ROI (approx. 70-75%) at resale, making it a smart choice for growing families in Fort Collins and Windsor.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-serif font-bold text-primary mb-12 text-center">Popular Basement Additions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Layout className="w-8 h-8 text-accent" />,
                                title: "Guest Suites",
                                desc: "Give visitors privacy with a dedicated bedroom and bathroom."
                            },
                            {
                                icon: <Maximize className="w-8 h-8 text-accent" />,
                                title: "Entertainment Areas",
                                desc: "Home theaters, game rooms, or a wet bar for hosting."
                            },
                            {
                                icon: <DollarSign className="w-8 h-8 text-accent" />,
                                title: "Rental Units",
                                desc: "Create a separate entrance ADU for rental income (zoning permitting)."
                            }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                                <div className="mb-6">{feature.icon}</div>
                                <h4 className="text-xl font-bold text-primary mb-3">{feature.title}</h4>
                                <p className="text-slate-600">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">Ready to expand your living space?</h2>
                    <Link
                        to="/contact"
                        className="inline-block bg-accent text-primary px-8 py-4 font-bold hover:bg-white transition-colors"
                    >
                        Get a Free Estimate
                    </Link>
                </div>
            </section>
        </>
    );
};

export default BasementFinishing;
