import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';


const PremiumPortfolio = ({ showViewAll = true }: { showViewAll?: boolean }) => {
    return (
        <section className="py-0 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 h-auto md:h-[600px]">
                {[
                    {
                        title: "The Timberline Retreat",
                        category: "Mountain Modern",
                        mainImage: "/images/spotlights/spotlight-5.jpg",
                        slug: "timberline-retreat"
                    },
                    {
                        title: "The Stone Creek Estate",
                        category: "Luxury Estate",
                        mainImage: "/images/spotlights/spotlight-2.png",
                        slug: "stone-creek-estate"
                    },
                    {
                        title: "The Black Forest Estate",
                        category: "Custom Estate",
                        mainImage: "/images/spotlights/spotlight-6.png",
                        slug: "black-forest-estate"
                    }
                ].map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative h-[400px] md:h-full overflow-hidden cursor-pointer"
                    >
                        {/* Full Size Link Overlay */}
                        <Link to={`/portfolio/${project.slug}`} className="absolute inset-0 z-20">
                            <span className="sr-only">View {project.title}</span>
                        </Link>

                        {/* Background Image with Zoom Effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.mainImage})` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors duration-500"></div>

                        {/* Content Content - Slides up on hover */}
                        <div className="absolute inset-0 p-12 flex flex-col justify-end pointer-events-none">
                            <div className="">
                                <span className="text-[#2B70B6] text-sm font-bold tracking-widest uppercase mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.category}
                                </span>
                                <div className="block group/link">
                                    <h3 className="text-3xl font-serif font-bold text-white mb-4 flex items-center gap-4">
                                        {project.title}
                                    </h3>
                                    <span className="inline-flex items-center gap-2 text-white border-b border-[#2B70B6] pb-1 text-sm font-bold tracking-widest uppercase mt-2">
                                        Explore Project <ArrowUpRight className="text-[#2B70B6]" size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View All CTA */}
            {showViewAll && (
                <div className="bg-primary py-24 text-center">
                    <Link
                        to="/portfolio"
                        className="inline-block px-12 py-5 border-2 border-white/20 text-white font-bold tracking-widest uppercase hover:bg-white hover:text-primary hover:border-white transition-all duration-300"
                    >
                        View Full Portfolio
                    </Link>
                </div>
            )}
        </section>
    );
};

export default PremiumPortfolio;
