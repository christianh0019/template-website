import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Maximize, Clock, Home, MapPin } from 'lucide-react';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import { projects } from '../../data/projects';

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        return <Navigate to="/portfolio" replace />;
    }

    return (
        <>
            <SEO
                title={`${project.title} | Custom Home Portfolio`}
                description={`Explore the ${project.title}, a ${project.category} in ${project.location} by Homestead Home Builders. ${project.description.substring(0, 120)}...`}
                canonical={`https://homesteadhomebuilders.com/portfolio/${project.slug}`}
            />

            <PageHeader
                title={project.title}
                subtitle={project.location}
                backgroundImage={project.mainImage}
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Portfolio', path: '/portfolio' },
                    { label: project.title, path: `/portfolio/${project.slug}` }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Sidebar / Stats */}
                        <div className="lg:w-1/3 order-2 lg:order-1">
                            <div className="bg-surface p-8 border border-slate-100 sticky top-32">
                                <h3 className="text-xl font-serif font-bold text-primary mb-6">Project Details</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm"><Maximize size={20} /></div>
                                        <div>
                                            <p className="text-sm text-slate-500 uppercase tracking-wide">Square Feet</p>
                                            <p className="font-bold text-primary">{project.stats.sqFt} sq. ft.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm"><Clock size={20} /></div>
                                        <div>
                                            <p className="text-sm text-slate-500 uppercase tracking-wide">Duration</p>
                                            <p className="font-bold text-primary">{project.stats.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm"><Home size={20} /></div>
                                        <div>
                                            <p className="text-sm text-slate-500 uppercase tracking-wide">Configuration</p>
                                            <p className="font-bold text-primary">{project.stats.beds} Bed, {project.stats.baths} Bath</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-accent shadow-sm"><MapPin size={20} /></div>
                                        <div>
                                            <p className="text-sm text-slate-500 uppercase tracking-wide">Location</p>
                                            <p className="font-bold text-primary">{project.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-200">
                                    <Link to="/contact" className="block w-full text-center bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-secondary transition-colors">
                                        Build Like This
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:w-2/3 order-1 lg:order-2">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">The Vision</h2>
                            <div className="prose prose-lg text-slate-600 mb-12">
                                <p>{project.description}</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4">The Challenge</h3>
                                    <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4">The Solution</h3>
                                    <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Gallery</h3>
                            <div className="grid grid-cols-1 gap-8">
                                {project.gallery.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`${project.title} detail ${i + 1}`}
                                        className="w-full h-auto rounded-sm shadow-md"
                                    />
                                ))}
                            </div>

                            <div className="mt-12">
                                <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors">
                                    <ArrowLeft size={20} /> Back to Portfolio
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetail;
