
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const PortfolioGallery = () => {
    // Flatten all images into a single array for the "pure gallery" feel
    const allImages = projects.flatMap(project => [
        { src: project.mainImage, title: project.title, category: project.category },
        ...project.gallery.map(img => ({ src: img, title: project.title, category: project.category }))
    ]);

    // Shuffle only for display variety if needed, but for now specific order is fine.
    // We'll use a CSS column layout for a true masonry look.

    return (
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Inspiration Board</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                        Visual Gallery
                    </h2>
                    <p className="text-slate-600 text-lg">
                        A curated collection of details, textures, and finished spaces from our recent builds.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {allImages.map((image, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={image.src}
                                alt={`${image.title} - ${image.category}`}
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-secondary text-xs font-bold uppercase tracking-widest block mb-1">
                                    {image.category}
                                </span>
                                <p className="text-white font-serif font-medium">
                                    {image.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
