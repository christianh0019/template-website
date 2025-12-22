import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const NewConstruction = () => {
    return (
        <>
            <SEO
                title="Custom Home Builders Northern Colorado | New Construction"
                description="Premier custom home builder in Loveland, Fort Collins, and Boulder. We specialize in luxury new construction on your lot or acreage."
                canonical="https://homesteadhomebuilders.com/services/new-construction"
            />

            <PageHeader
                title="Custom Home Construction"
                subtitle="Designing and building bespoke residences that reflect your lifestyle and legacy."
                backgroundImage="https://images.unsplash.com/photo-1600596542815-e32c21216f95?q=80&w=2072&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: 'New Construction', path: '/services/new-construction' }
                ]}
            />

            {/* Answer-First Section (SEO) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">What defines a comprehensive custom home build?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        A comprehensive custom home build differs from production building by offering you complete control over every aspect of the project—from site selection and architectural orientation to the finest interior details. At Homestead Home Builders, we manage the entire lifecycle: land feasibility, architectural design, engineering, permitting, and construction, ensuring a home that is uniquely tailored to your land and lifestyle.
                    </p>
                    <div className="p-8 bg-surface border-l-4 border-accent">
                        <h3 className="text-xl font-bold text-primary mb-4">Our Specialty: Build On Your Lot</h3>
                        <p className="text-slate-600">
                            We specialize in acreage properties in Weld and Larimer counties. We understand the complexities of well/septic systems, soil engineering, and maximizing mountain views.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Architectural Design",
                                desc: "We partner with top local architects to translate your vision into blueprints that optimize your site's topography and solar exposure."
                            },
                            {
                                title: "High-Performance Build",
                                desc: "We go beyond code with advanced insulation, air sealing, and energy-efficient systems for a home that is comfortable year-round."
                            },
                            {
                                title: "Interior Selection",
                                desc: "Our interior design partners guide you through selecting finishes, fixtures, and materials that create a cohesive and luxurious aesthetic."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg">
                                <CheckCircle className="text-accent w-10 h-10 mb-6" />
                                <h3 className="text-xl font-serif font-bold text-primary mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process CTA */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1598928636135-d146006ff4be?q=80&w=2070&auto=format&fit=crop"
                            alt="Construction Framing"
                            className="rounded-none shadow-2xl"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">Transparent & Timely Delivery</h2>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            We use cloud-based project management software (CoConstruct) to give you 24/7 access to your build schedule, budget selections, and progress photos. You'll never be in the dark about your new home's progress.
                        </p>
                        <Link to="/process" className="text-primary font-bold border-b-2 border-accent pb-1 hover:text-accent transition-colors inline-flex items-center">
                            See Our 4-Step Process <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default NewConstruction;
