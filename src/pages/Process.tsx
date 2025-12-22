import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import ProcessSection from '../components/ProcessSection';

const Process = () => {
    return (
        <>
            <SEO
                title="Our Custom Home Building Process | Homestead"
                description="Learn about our transparent, 4-step custom home building process. Design, planning, construction, and warranty support in Northern Colorado."
                canonical="https://homesteadhomebuilders.com/process"
            />

            <PageHeader
                title="Our Process"
                subtitle="Transparent. Predictable. Enjoyable."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Process', path: '/process' }
                ]}
            />

            {/* Reusing the steps component */}
            <ProcessSection />

            {/* Additional Detail Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-8">Why Our Process Works</h2>
                    <div className="prose prose-lg text-slate-600">
                        <p>
                            Many builders treat the process as a "black box," leaving homeowners in the dark about schedules and budgets. At Homestead, we believe in radical transparency.
                        </p>
                        <ul className="list-disc pl-6 space-y-4 my-6">
                            <li><strong>Fixed-Price Contracts:</strong> We work hard upfront to minimize change orders later.</li>
                            <li><strong>Online Portal:</strong> See your construction schedule, approve selections, and view daily photos from anywhere.</li>
                            <li><strong>Weekly Meetings:</strong> Dedicated time with your project manager to answer questions and review progress.</li>
                        </ul>
                        <p>
                            Building a home is likely the largest investment you will make. You deserve a partner who treats it with that level of respect.
                        </p>
                    </div>

                    <div className="mt-12">
                        <RouterLink
                            to="/contact"
                            className="inline-block bg-primary text-white px-8 py-4 font-bold hover:bg-secondary transition-colors"
                        >
                            Start Your Project
                        </RouterLink>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Process;
