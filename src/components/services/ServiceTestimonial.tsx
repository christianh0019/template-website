import { Quote } from 'lucide-react';

interface ServiceTestimonialProps {
    quote: string;
    author: string;
    location: string;
    image?: string;
}

const ServiceTestimonial = ({ quote, author, location, image }: ServiceTestimonialProps) => {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Quote size={200} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {image && (
                            <div className="flex-shrink-0">
                                <img
                                    src={image}
                                    alt={author}
                                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                            </div>
                        )}
                        <div className="text-center md:text-left">
                            <div className="mb-6 flex justify-center md:justify-start text-accent">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className="text-2xl font-serif text-primary italic leading-relaxed mb-6">
                                "{quote}"
                            </blockquote>
                            <div>
                                <cite className="not-italic font-bold text-slate-900 block">{author}</cite>
                                <span className="text-slate-500 text-sm uppercase tracking-wider">{location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTestimonial;
