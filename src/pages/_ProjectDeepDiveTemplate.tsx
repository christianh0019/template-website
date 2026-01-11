
import { Link } from 'react-router-dom';
import { Maximize, Clock, Home, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

// Token Declarations for Scaffold Script
declare const __PROJECT_TITLE__: string;
declare const __PROJECT_LOCATION__: string;
declare const __PROJECT_CATEGORY__: string;
declare const __HERO_IMAGE__: string;
declare const __SQ_FT__: string;
declare const __DURATION__: string;
declare const __BEDS__: string;
declare const __BATHS__: string;
declare const __DESCRIPTION__: string;
declare const __GALLERY_IMAGES_JSON__: string[];


const __PAGE_COMPONENT__ = () => {

    // Project Data
    const project = {
        title: "__PROJECT_TITLE__",
        location: "__PROJECT_LOCATION__",
        category: "__PROJECT_CATEGORY__",
        stats: {
            sqFt: "__SQ_FT__",
            duration: "__DURATION__",
            beds: "__BEDS__",
            baths: "__BATHS__"
        },
        description: `__DESCRIPTION__`,
        images: __GALLERY_IMAGES_JSON__
    };

    return (
        <>
            <SEO
                title={`${project.title} | Custom Home Portfolio`}
                description={`Explore the ${project.title}, a ${project.category} in ${project.location}.`}
                canonical={`https://homesteadhomebuilders.com/portfolio/__PAGE_NAME__`} // Assuming filename is slug
            />

            <PageHeader
                title={project.title}
                subtitle={project.location}
                backgroundImage="__HERO_IMAGE__"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Portfolio', path: '/portfolio' },
                    { label: project.title, path: '#' }
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
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm"><Clock size={24} /></div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Duration</p>
                                            <p className="font-bold text-primary text-lg">{project.stats.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm"><Home size={24} /></div>
                                        <div>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Configuration</p>
                                            <p className="font-bold text-primary text-lg">{project.stats.beds} Bed, {project.stats.baths} Bath</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-accent shadow-sm"><MapPin size={24} /></div>
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
                                <h2 className="text-3xl font-serif font-bold text-primary mb-6">About the Project</h2>
                                <div className="prose prose-lg text-slate-600 mb-12" dangerouslySetInnerHTML={{ __html: project.description }} />

                                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Galley</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.images.map((img: string, idx: number) => (
                                        <div key={idx} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                            <img src={img} alt={`${project.title} view ${idx + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default __PAGE_COMPONENT__;
