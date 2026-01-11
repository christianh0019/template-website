import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';

interface RelatedProjectsProps {
    category?: string; // "Custom Build", "Whole Home Remodel", etc.
    limit?: number;
}

const RelatedProjects = ({ limit = 3 }: RelatedProjectsProps) => {
    // User request: Show all 3 deep dives on all pages, regardless of category
    const matchingProjects = projects.slice(0, limit);

    if (matchingProjects.length === 0) return null;

    return (
        <section className="py-24 bg-surface">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-primary mb-2">Featured Projects</h2>
                        <p className="text-slate-600">Explore our latest custom builds and renovations.</p>
                    </div>
                    <Link to="/portfolio" className="hidden md:block text-primary font-bold hover:text-accent transition-colors">
                        View Full Portfolio &rarr;
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {matchingProjects.map((project) => (
                        <div key={project.slug} className="group relative overflow-hidden rounded-sm shadow-md aspect-[4/5] cursor-pointer">
                            {/* Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${project.mainImage})` }}
                            ></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {project.location}
                                </span>
                                <Link to={`/portfolio/${project.slug}`}>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-2 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                                        {project.title} <ArrowUpRight size={18} className="text-accent" />
                                    </h3>
                                </Link>
                                <p className="text-slate-200 text-sm line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100 opacity-0 group-hover:opacity-100">
                                    {project.motivation.substring(0, 100)}...
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/portfolio" className="text-primary font-bold hover:text-accent transition-colors">
                        View Full Portfolio &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default RelatedProjects;
