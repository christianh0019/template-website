
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, Maximize, Clock, Home, MapPin, Play, Quote, CheckCircle2, Star, Ruler, Map, Hammer } from 'lucide-react';
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
                description={`Explore the ${project.title}, a ${project.category} in ${project.location} by Homestead Home Builders.`}
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

                        {/* Main Content - Narrative Flow */}
                        <div className="lg:w-2/3 order-1 lg:order-2 space-y-16">

                            {/* Section 1: Meet The Family */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block flex items-center gap-2">
                                    <div className="w-8 h-px bg-secondary"></div> The Clients
                                </span>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                                    Meet {project.clientName}
                                </h2>
                                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                    {project.clientBio}
                                </p>
                            </motion.div>

                            {/* Section 2: Why Build A Custom Home? */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-serif font-bold text-primary mb-4 flex items-center gap-3">
                                    Why Build a Custom Home?
                                </h3>
                                <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-accent pl-6 py-2">
                                    {project.motivation}
                                </p>
                            </motion.div>

                            {/* Sections 3 & 4: Lot Selection & Design (Grid) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-50 p-8 rounded-lg border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6"><Map size={24} /></div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Finding the Perfect Lot</h3>
                                    <p className="text-slate-600 leading-relaxed">{project.lotSelection}</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-50 p-8 rounded-lg border border-slate-100"
                                >
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-6"><Ruler size={24} /></div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Designing the Dream</h3>
                                    <p className="text-slate-600 leading-relaxed">{project.designPhase}</p>
                                </motion.div>
                            </div>

                            {/* Section 5: The Construction */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-primary/5 -mx-6 p-8 md:p-10 rounded-2xl border border-primary/10"
                            >
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6 flex items-center gap-3">
                                    <Hammer className="text-secondary" /> The Construction
                                </h2>
                                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                    {project.construction.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {project.construction.images.map((img, idx) => (
                                        <div key={idx} className="relative group overflow-hidden rounded-lg shadow-md aspect-video">
                                            <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded backdrop-blur-sm z-10">
                                                In Progress
                                            </div>
                                            <img
                                                src={img}
                                                alt="Construction progress"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>


                            {/* Section 6: Move-In Time */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block flex items-center gap-2">
                                    <div className="w-8 h-px bg-secondary"></div> The Result
                                </span>
                                <h3 className="text-3xl font-serif font-bold text-primary mb-8">Move-In Time</h3>

                                <div className="mb-8 relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
                                    {/* Placeholder for Video Embed */}
                                    <img
                                        src={project.moveIn.videoThumbnail}
                                        alt="Move in day"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform">
                                            <Play fill="white" className="text-white ml-1" size={32} />
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xl text-slate-600 leading-relaxed italic border-l-4 border-secondary pl-6">
                                    "{project.moveIn.description}"
                                </p>
                            </motion.div>

                            {/* Section 7: Review Block */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-primary text-white p-8 md:p-12 rounded-lg shadow-xl relative overflow-hidden"
                            >
                                <Quote className="text-white/10 absolute top-4 right-4" size={120} />
                                <div className="flex gap-1 text-accent mb-6">
                                    {[...Array(project.review.rating)].map((_, i) => (
                                        <Star key={i} fill="currentColor" size={24} />
                                    ))}
                                </div>
                                <blockquote className="text-xl md:text-2xl font-serif leading-relaxed mb-8 relative z-10">
                                    "{project.review.quote}"
                                </blockquote>
                                <cite className="flex items-center gap-4 not-italic">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-lg">
                                        {project.review.author.charAt(0)}
                                    </div>
                                    <div>
                                        <span className="block font-bold text-lg">{project.review.author}</span>
                                        <span className="text-sm text-white/60 uppercase tracking-widest">{project.location}</span>
                                    </div>
                                </cite>
                            </motion.div>


                            {/* Visual Tour / Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-2">
                                    <CheckCircle2 className="text-accent" /> Finished Home Tour
                                </h3>
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
