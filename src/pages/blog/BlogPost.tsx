import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, User, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../../data/blogPosts';
import AnswerBox from '../../components/blog/AnswerBox';
import TableOfContents from '../../components/blog/TableOfContents';
import BlogSchema from '../../components/blog/BlogSchema';
import SEO from '../../components/SEO';

const BlogPost = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />; // Or 404 page
    }

    return (
        <>
            <SEO
                title={post.title}
                description={post.description}
                canonical={`https://homesteadhomebuilders.com/blog/${post.slug}`}
                image={post.image}
            />
            <BlogSchema
                title={post.title}
                description={post.description}
                datePublished={post.date}
                authorName={post.author}
                image={post.image}
                url={`https://homesteadhomebuilders.com/blog/${post.slug}`}
            />

            <article className="min-h-screen bg-white">
                {/* Header Section */}
                <div className="bg-primary text-white py-16">
                    <div className="container mx-auto px-6 max-w-4xl">
                        <Link to="/blog" className="inline-flex items-center text-accent font-bold uppercase tracking-widest text-xs hover:text-white transition-colors mb-6">
                            <ArrowLeft size={14} className="mr-2" /> Back to Resources
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 font-medium border-t border-white/20 pt-6">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-accent" />
                                <span>{post.author}, {post.authorRole}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-accent" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-accent" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 min-h-screen">
                    <div className="container mx-auto px-6 py-12">
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Main Content Column */}
                            <div className="lg:w-2/3">
                                {/* Answer Box - The "Answer-First" Hook */}
                                <AnswerBox title={post.answerBox.title} content={post.answerBox.content} />

                                {/* Main Post Image */}
                                <img src={post.image} alt={post.title} className="w-full h-auto rounded-lg shadow-md mb-12" />

                                {/* YouTube Embed */}
                                {post.youtubeVideoId && (
                                    <div className="mb-12 rounded-lg overflow-hidden shadow-lg border border-slate-200">
                                        <h3 className="bg-slate-100 px-6 py-3 font-bold text-primary border-b border-slate-200 flex items-center gap-2">
                                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
                                            Video Walkthrough
                                        </h3>
                                        <div className="aspect-video">
                                            <iframe
                                                width="100%"
                                                height="100%"
                                                src={`https://www.youtube.com/embed/${post.youtubeVideoId}`}
                                                title="YouTube video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                )}

                                {/* Content Body */}
                                <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-headings:text-primary prose-a:text-accent prose-li:marker:text-accent">
                                    {post.content.map((block, index) => {
                                        switch (block.type) {
                                            case 'h2':
                                                return <h2 key={index} id={block.id} className="scroll-mt-32 border-b border-slate-200 pb-4 mt-16 mb-8 text-3xl">{block.text}</h2>;
                                            case 'h3':
                                                return <h3 key={index} id={block.id} className="scroll-mt-32 mt-10 mb-4 text-2xl">{block.text}</h3>;
                                            case 'p':
                                                return <p key={index} className="mb-8 leading-relaxed text-slate-700 text-lg" dangerouslySetInnerHTML={{ __html: block.text?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') || '' }} />;
                                            case 'ul':
                                                return (
                                                    <ul key={index} className="bg-white p-8 rounded-lg border border-slate-100 shadow-sm list-disc list-inside space-y-4 mb-10 text-lg text-slate-700">
                                                        {block.items?.map((item, i) => (
                                                            <li key={i} className="pl-2" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                                                        ))}
                                                    </ul>
                                                );
                                            case 'image':
                                                return (
                                                    <figure key={index} className="my-12">
                                                        <img src={block.src} alt={block.alt} className="rounded-lg shadow-lg w-full" />
                                                        {block.alt && <figcaption className="text-center text-sm text-slate-500 mt-4 italic">{block.alt}</figcaption>}
                                                    </figure>
                                                );
                                            case 'callout':
                                                return (
                                                    <div key={index} className="bg-yellow-50 border-l-4 border-yellow-400 p-8 my-10 italic text-slate-700 font-medium text-lg leading-relaxed shadow-sm rounded-r-lg">
                                                        {block.text}
                                                    </div>
                                                );
                                            default:
                                                return null;
                                        }
                                    })}
                                </div>

                                {/* Internal Linking Bridge - Bottom of Post */}
                                <div className="bg-primary/5 p-8 rounded-lg mt-16 border border-primary/10">
                                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Ready to start your project?</h3>
                                    <p className="text-slate-600 mb-6">
                                        We hope this guide helped clarify the process. If you have a specific lot in mind or need a feasibility study, let's talk.
                                    </p>
                                    <div className="flex gap-4 flex-wrap">
                                        <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-secondary transition-colors rounded-sm shadow-md text-sm">
                                            Book Consultation
                                        </Link>
                                        <Link to="/portfolio" className="inline-block border-2 border-primary text-primary px-8 py-3 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-sm text-sm">
                                            View Portfolio
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Column */}
                            <div className="lg:w-1/3">
                                <TableOfContents items={post.toc} />

                                {/* Sticky CTA Widget */}
                                <div className="bg-primary text-white p-8 rounded-lg shadow-xl sticky top-[450px]">
                                    <h3 className="text-2xl font-serif font-bold mb-4">Need an expert opinion?</h3>
                                    <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                                        Our Feasibility Studies provide a clear "Go/No-Go" on any lot in Northern Colorado before you buy.
                                    </p>
                                    <ul className="space-y-3 mb-8 text-sm">
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            <span>Zoning & Setback Analysis</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            <span>Utility Tap Verification</span>
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                                            <span>Preliminary Budgeting</span>
                                        </li>
                                    </ul>
                                    <Link to="/contact" className="block w-full text-center bg-accent text-primary py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-lg">
                                        Start Feasibility Study
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};

export default BlogPost;
