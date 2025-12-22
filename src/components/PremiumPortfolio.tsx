import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "The Westlake Estate",
        category: "Custom Build",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        link: "/portfolio/westlake"
    },
    {
        title: "Mountain Modern Retreat",
        category: "Whole Home Remodel",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        link: "/portfolio/mountain-modern"
    },
    {
        title: "Pearl Street Historic Reno",
        category: "Restoration",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
        link: "/portfolio/pearl-street"
    }
];

const PremiumPortfolio = () => {
    return (
        <section className="py-0 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[600px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-[400px] md:h-full overflow-hidden cursor-pointer"
                    >
                        {/* Background Image with Zoom Effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500"></div>

                        {/* Content Content - Slides up on hover */}
                        <div className="absolute inset-0 p-12 flex flex-col justify-end">
                            <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-accent text-sm font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.category}
                                </span>
                                <Link to={project.link} className="block group/link">
                                    <h3 className="text-3xl font-serif font-bold text-white mb-4 flex items-center gap-4">
                                        {project.title}
                                        <ArrowUpRight className="opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 transform group-hover/link:translate-x-2 text-accent" />
                                    </h3>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View All CTA */}
            <div className="bg-primary py-24 text-center">
                <Link
                    to="/portfolio"
                    className="inline-block px-12 py-5 border-2 border-white/20 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
                >
                    View Full Portfolio
                </Link>
            </div>
        </section>
    );
};

export default PremiumPortfolio;
