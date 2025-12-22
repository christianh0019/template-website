import { ArrowRight, Hammer, CheckCircle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';

const Remodeling = () => {
    return (
        <>
            <SEO
                title="Whole Home Remodeling Northern Colorado | Homestead"
                description="Transform your existing space with Homestead Home Builders. Expert whole-home renovations, kitchens, and structural remodeling in Loveland and Boulder."
                canonical="https://homesteadhomebuilders.com/services/remodeling"
            />

            <PageHeader
                title="Complete Home Remodeling"
                subtitle="Re-imagine your home from the ground up."
                backgroundImage="https://images.unsplash.com/photo-1574359411659-15573a21bc2c?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Services', path: '/services' },
                    { label: 'Remodeling', path: '/services/remodeling' }
                ]}
            />

            {/* Answer-First Section (SEO) */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">When does a whole-home remodel make sense?</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        A whole-home remodel is the ideal solution when you love your location—perhaps for the school district as in Boulder or the mountain views in Loveland—but the house itself no longer meets your needs. Whether it's removing load-bearing walls to create an open concept, updating outdated electrical/plumbing systems, or completely modernizing the aesthetic, we manage the structural complexity of extensive renovations.
                    </p>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-24 bg-surface">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h3 className="text-3xl font-serif font-bold text-primary mb-6">Our Remodeling Capabilities</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Structural Changes",
                                        desc: "We work with structural engineers to safely remove walls, raise ceilings, and reconfigure floor plans."
                                    },
                                    {
                                        title: "Historic Renovations",
                                        desc: "Specialized care for older homes in Old Town Fort Collins and Boulder, preserving character while updating functionality."
                                    },
                                    {
                                        title: "Kitchens & Baths",
                                        desc: "Luxury finishes, custom cabinetry, and spa-like retreats that increase your home's value."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-sm text-accent">
                                            {i === 0 ? <Hammer size={20} /> : i === 1 ? <RefreshCw size={20} /> : <CheckCircle size={20} />}
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold text-primary mb-2">{item.title}</h4>
                                            <p className="text-slate-600">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1936&auto=format&fit=crop"
                                alt="Kitchen Remodel"
                                className="shadow-2xl rounded-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Remodeling;
