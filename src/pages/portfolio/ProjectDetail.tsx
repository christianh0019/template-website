
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Maximize, Clock, Home, MapPin, Play, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import PageHeader from '../../components/PageHeader';
import { projects } from '../../data/projects';

const ProjectDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const projectIndex = projects.findIndex(p => p.slug === slug);
    const project = projects[projectIndex];

    // Calculate next project for navigation
    const nextProject = projects[(projectIndex + 1) % projects.length];

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

            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Sidebar / Stats - Sticky */}
                        <div className="lg:w-1/3 order-2 lg:order-1">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-surface p-8 border border-slate-100 sticky top-32 rounded-lg shadow-lg"
                            >
                                <h3 className="text-xl font-serif font-bold text-primary mb-6 border-b border-primary/10 pb-4">
                                    Project Specs
                                </h3>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform"><Maximize size={24} /></div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Square Feet</p>
                                            <p className="font-bold text-primary text-lg">{project.stats.sqFt} sq. ft.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform"><Clock size={24} /></div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Duration</p>
                                            <p className="font-bold text-primary text-lg">{project.stats.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform"><Home size={24} /></div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Configuration</p>
                                            <p className="font-bold text-primary text-lg">{project.stats.beds} Bed, {project.stats.baths} Bath</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 group">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm group-hover:scale-110 transition-transform"><MapPin size={24} /></div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Location</p>
                                            <p className="font-bold text-primary text-lg">{project.location}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-slate-200">
                                    <Link to="/contact" className="block w-full text-center bg-primary text-white py-4 font-bold uppercase tracking-widest hover:bg-secondary transition-all rounded-sm shadow-md hover:shadow-lg">
                                        Start Your Build
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Main Content */}
                        <div className="lg:w-2/3 order-1 lg:order-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">The Vision</span>
                                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
                                    {project.description}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                                    <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-accent">
                                        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                            The Challenge
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">{project.challenge}</p>
                                    </div>
                                    <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-secondary">
                                        <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                            The Solution
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed text-lg">{project.solution}</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Client Journey / Video Section */}
                            {project.testimonial && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="mb-16"
                                >
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-6">Client Journey</h3>
                                    <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                                        {/* Placeholder for Video Embed - would replace img with iframe in real prod */}
                                        <img
                                            src={project.testimonial.videoThumbnail}
                                            alt="Client Testimonial Thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                                <Play fill="white" className="text-white ml-1" size={32} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="bg-primary text-white p-8 md:p-10 rounded-b-xl -mt-2 relative z-10 mx-4 md:mx-8 shadow-xl transform -translate-y-12">
                                        <Quote className="text-secondary opacity-50 absolute top-6 left-6" size={48} />
                                        <blockquote className="text-xl md:text-2xl font-serif text-center relative z-10 leading-relaxed italic mb-6">
                                            "{project.testimonial.quote}"
                                        </blockquote>
                                        <cite className="block text-center font-bold text-secondary uppercase tracking-widest not-italic">
                                            — {project.testimonial.author}
                                        </cite>
                                    </div>
                                </motion.div>
                            )}

                            {/* Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-serif font-bold text-primary mb-8">Visual Tour</h3>
                                <div className="grid grid-cols-1 gap-8">
                                    {project.gallery.map((img, i) => (
                                        <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                                            <img
                                                src={img}
                                                alt={`${project.title} detail ${i + 1}`}
                                                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Navigation */}
                            <div className="mt-20 flex justify-between items-center border-t border-slate-200 pt-10">
                                <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest text-sm">
                                    <ArrowLeft size={16} /> Back to Portfolio
                                </Link>

                                <Link to={`/portfolio/${nextProject.slug}`} className="group text-right">
                                    <span className="block text-xs text-slate-400 uppercase tracking-widest mb-1">Next Project</span>
                                    <span className="text-xl font-serif font-bold text-primary group-hover:text-accent transition-colors flex items-center justify-end gap-2">
                                        {nextProject.title} <ArrowLeft size={20} className="rotate-180" />
                                    </span>
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
