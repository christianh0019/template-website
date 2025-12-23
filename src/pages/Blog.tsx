
import { Link } from 'react-router-dom';
import { Search, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Blog = () => {
    return (
        <>
            <SEO
                title="Building Insights & Resources | Homestead Home Builders"
                description="Expert guides on custom home building costs, local zoning in Loveland & Fort Collins, and design trends for Northern Colorado."
                canonical="https://homesteadhomebuilders.com/blog"
            />

            <PageHeader
                title="Resources & Insights"
                subtitle="Expert advice on land, design, and construction in Northern Colorado."
                backgroundImage="https://images.unsplash.com/photo-1517646133311-665e81cbc699?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Resources', path: '/blog' } // Breadcrumb effectively acts as 'Blog'
                ]}
            />

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    {/* Search / Filter Placeholder (Visual only for now) */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-2">Latest Guides</h2>
                            <p className="text-slate-600">Deep dives into the questions our clients ask most.</p>
                        </div>
                        {/* Search Bar Visual */}
                        <div className="relative w-full md:w-auto">
                            <input
                                type="text"
                                placeholder="Search topics..."
                                className="pl-10 pr-4 py-3 border border-slate-200 rounded-lg w-full md:w-80 focus:ring-2 focus:ring-primary focus:border-transparent outline-none shadow-sm"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.slug} to={`/blog/${post.slug}`} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary rounded-sm shadow-sm">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="text-xs text-slate-500 mb-3 flex items-center gap-2 font-medium">
                                        <span>{post.date}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                        {post.description}
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center text-primary font-bold text-sm uppercase tracking-widest group-hover:text-accent transition-colors">
                                        <BookOpen size={16} className="mr-2" />
                                        Read Guide
                                    </div>
                                </div>
                            </Link>
                        ))}

                        {/* Placeholder Card for Future Content */}
                        <div className="bg-slate-100 rounded-lg border-2 border-dashed border-slate-200 flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
                            <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center text-slate-400 mb-4">
                                <Search size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-slate-500 mb-2">More Coming Soon</h3>
                            <p className="text-slate-400 text-sm max-w-xs">
                                We publish new deep-dive guides every month. Check back for updates on design trends and land acquisition.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
