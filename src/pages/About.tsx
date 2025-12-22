import { Award, Users, Home } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <SEO
                title="About Homestead Builders | Custom Home Builders Northern CO"
                description="Family-owned custom home builders serving Loveland, Fort Collins, and Boulder since 1995. committed to integrity, craftsmanship, and transparency."
                canonical="https://homesteadhomebuilders.com/about"
            />

            <PageHeader
                title="About Our Company"
                subtitle="Building legacies, one home at a time."
                backgroundImage="https://images.unsplash.com/photo-1598928506311-1555d33145ee?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'About Us', path: '/about' }
                ]}
            />

            {/* Story Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Story</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Homestead Home Builders was founded on a simple premise: building a custom home should be an exciting journey, not a stressful ordeal.
                            </p>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                What began as a small framing crew in 1995 has grown into one of Northern Colorado's most respected design-build firms. We've weathered market cycles by staying true to our core values: transparency, quality without compromise, and treating every client's budget as if it were our own.
                            </p>
                            <div className="grid grid-cols-3 gap-6 mt-8">
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold text-accent mb-2">30+</h3>
                                    <p className="text-sm uppercase tracking-wider text-slate-500">Years Experience</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold text-accent mb-2">150+</h3>
                                    <p className="text-sm uppercase tracking-wider text-slate-500">Custom Homes</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold text-accent mb-2">15</h3>
                                    <p className="text-sm uppercase tracking-wider text-slate-500">Industry Awards</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 relative">
                            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-accent z-0"></div>
                            <img
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                                alt="Construction Team"
                                className="relative z-10 shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif font-bold text-center text-primary mb-16">The Homestead Standard</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Award className="w-12 h-12 text-accent" />,
                                title: "Uncompromising Quality",
                                desc: "We don't cut corners. From the foundation pour to the final trim, every detail is inspected to meet our rigorous standards."
                            },
                            {
                                icon: <Users className="w-12 h-12 text-accent" />,
                                title: "Client-Centric Approach",
                                desc: "You are a partner in the process. We listen, advise, and collaborate to ensure your vision is realized."
                            },
                            {
                                icon: <Home className="w-12 h-12 text-accent" />,
                                title: "Sustainable Building",
                                desc: "We prioritize energy efficiency and durable materials that ensure your home stands the test of time and Northern Colorado weather."
                            }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 shadow-sm text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="flex justify-center mb-6">{val.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-4">{val.title}</h3>
                                <p className="text-slate-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-serif mb-6">Ready to Build with Us?</h2>
                    <Link to="/contact" className="inline-block bg-white text-primary px-8 py-3 font-bold hover:bg-accent hover:text-white transition-colors">
                        Meet the Team
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
