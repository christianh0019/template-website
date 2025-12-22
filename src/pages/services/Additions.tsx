import { PlusSquare, Sun, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const Additions = () => {
    return (
        <>
            <SEO
                title="Home Additions Builder Boulder & Loveland | Homestead"
                description="Expand your footprint with a seamless home addition. Master suites, sunrooms, and garage expansions designed to match your existing home."
                canonical="https://homesteadhomebuilders.com/services/additions"
            />

            <PageHeader
                title="Custom Home Additions"
                subtitle="More space, without leaving the neighborhood you love."
                backgroundImage="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: 'Additions', path: '/services/additions' }
                ]}
            />

            {/* Answer-First Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">How do you ensure an addition blends with the existing house?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        The biggest fear homeowners have with additions is that it will look "tacked on." At Homestead, we focus on architectural continuity. This means matching rooflines, sourcing identical or complementary exterior materials (siding, brick, stone), and ensuring interior floor transitions are seamless. Our goal is for guests to be unable to tell where the original house ends and the addition begins.
                    </p>
                </div>
            </section>

            {/* Types of Additions */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <PlusSquare className="w-8 h-8 text-accent" />,
                                title: "Master Suite Extensions",
                                desc: "Create a private sanctuary with a luxury en-suite bathroom and walk-in closets."
                            },
                            {
                                icon: <Sun className="w-8 h-8 text-accent" />,
                                title: "Sunrooms & Living Space",
                                desc: "Bring in natural light and expand your gathering areas for family time."
                            },
                            {
                                icon: <Users className="w-8 h-8 text-accent" />,
                                title: "Second Story Pop-Tops",
                                desc: "Double your square footage by building up instead of out—ideal for smaller lots in Boulder."
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

            {/* Process Teaser */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-serif mb-6">Our Process for Additions</h2>
                    <p className="max-w-2xl mx-auto text-slate-300 mb-8">Additions require complex permitting and zoning checks. We handle all city approvals, engineering, and architectural reviews.</p>
                    <Link
                        to="/process"
                        className="inline-block border border-accent text-accent px-8 py-4 font-bold hover:bg-accent hover:text-primary transition-colors"
                    >
                        See How We Build
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Additions;
