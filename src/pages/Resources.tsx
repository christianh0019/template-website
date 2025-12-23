
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Briefcase, Handshake, Info } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Resources = () => {
    return (
        <>
            <SEO
                title="Resources | Homestead Home Builders"
                description="Explore our resources including our process, blog, career opportunities, and strategic partnerships."
                canonical="https://homesteadhomebuilders.com/resources"
            />

            <PageHeader
                title="Resources"
                subtitle="Everything you need to know about building with Homestead."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Resources', path: '/resources' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: BookOpen,
                                title: "Our Process",
                                desc: "Step-by-step guide to our custom home building journey.",
                                link: "/process",
                                linkText: "View Process"
                            },
                            {
                                icon: Info,
                                title: "About Us",
                                desc: "Learn about our history, values, and the team.",
                                link: "/about",
                                linkText: "Meet the Team"
                            },
                            {
                                icon: BookOpen, // Reused icon or generic
                                title: "Blog",
                                desc: "Latest news, tips, and project updates from our team.",
                                link: "/blog",
                                linkText: "Read Articles"
                            },
                            {
                                icon: Handshake,
                                title: "Strategic Partners",
                                desc: "For realtors, architects, and trade partners.",
                                link: "/partners",
                                linkText: "Partner With Us"
                            },
                            {
                                icon: Users, // Or Briefcase
                                title: "Careers",
                                desc: "Join the Homestead team. View current openings.",
                                link: "/careers",
                                linkText: "View Openings"
                            },
                            {
                                icon: Briefcase,
                                title: "Portfolio",
                                desc: "Browse our gallery of completed custom homes.",
                                link: "/portfolio",
                                linkText: "View Work"
                            }
                        ].map((resource, i) => (
                            <div key={i} className="group p-8 bg-surface rounded-lg border border-slate-100 hover:shadow-lg transition-all hover:-translate-y-1">
                                <resource.icon size={32} className="text-accent mb-6" />
                                <h3 className="text-2xl font-serif font-bold text-primary mb-3">{resource.title}</h3>
                                <p className="text-slate-600 mb-6">{resource.desc}</p>
                                <Link to={resource.link} className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm group-hover:text-accent transition-colors">
                                    {resource.linkText} <ArrowRight size={16} />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resources;
