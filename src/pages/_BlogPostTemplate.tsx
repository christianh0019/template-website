
import { Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

// Token Declarations for Scaffold Script
declare const __POST_TITLE__: string;
declare const __POST_EXCERPT__: string;
declare const __AUTHOR__: string;
declare const __PUBLISH_DATE__: string;
declare const __READ_TIME__: string;
declare const __HERO_IMAGE__: string;
declare const __CONTENT_HTML__: string;


const __PAGE_COMPONENT__ = () => {
    return (
        <>
            <SEO
                title="__POST_TITLE__ | Homestead Insights"
                description="__POST_EXCERPT__"
                canonical="https://homesteadhomebuilders.com/blog/__PAGE_NAME__"
            />

            <PageHeader
                title="__POST_TITLE__"
                subtitle="Insights & Articles"
                backgroundImage="__HERO_IMAGE__"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Resources', path: '/resources' },
                    { label: 'Blog', path: '/blog' },
                    { label: '__POST_TITLE__', path: '#' }
                ]}
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary mb-8 transition-colors font-bold uppercase tracking-widest text-xs">
                        <ArrowLeft size={16} className="mr-2" /> Back to Articles
                    </Link>

                    {/* Meta Header */}
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm mb-12 border-b border-slate-100 pb-8">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-accent" />
                            <span>__PUBLISH_DATE__</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={16} className="text-accent" />
                            <span>__AUTHOR__</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} className="text-accent" />
                            <span>__READ_TIME__</span>
                        </div>
                    </div>

                    {/* Content Body */}
                    <article className="prose prose-lg prose-slate max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: `__CONTENT_HTML__` }} />
                    </article>

                    {/* Footer CTA */}
                    <div className="mt-16 bg-surface p-10 rounded-lg border border-slate-100 text-center">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4">Enjoyed this article?</h3>
                        <p className="text-slate-600 mb-8">Subscribe to our newsletter for more insights on custom home building and remodeling.</p>
                        <form className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
                            <input type="email" placeholder="Your Email Address" className="flex-1 px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-primary" />
                            <button type="submit" className="bg-primary text-white px-6 py-3 font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default __PAGE_COMPONENT__;
