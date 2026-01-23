import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        text: "Homestead Home Builders didn't just build a house; they crafted our family's legacy. The attention to detail in the custom millwork and the seamless flow of the floor plan demonstrated their deep expertise. They navigated the complex county permitting process for us effortlessly.",
        author: "The Anderson Family",
        location: "Estes Park, CO",
        rating: 5
    },
    {
        text: "We interviewed five different builders in Northern Colorado. Homestead was the only team that truly listened to our vision for a net-zero mountain modern home. The project was delivered on time and significantly under the budget of other quotes.",
        author: "Dr. Sarah Chen",
        location: "Boulder, CO",
        rating: 5
    },
    {
        text: "Living out of state during the build was scary, but their weekly video updates and transparent communication made us feel like we were on site every day. The finished basement is now our favorite part of the home!",
        author: "Mark & Lisa Thompson",
        location: "Timnath, CO",
        rating: 5
    }
];

const TestimonialCarousel = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-32 bg-primary text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#2B70B6]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <Star className="w-8 h-8 text-[#2B70B6] mx-auto mb-4" fill="currentColor" />
                    <h2 className="text-4xl font-serif font-bold">Client Experiences</h2>
                </div>

                <div className="max-w-4xl mx-auto relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <Quote className="w-16 h-16 text-[#2B70B6]/30 mx-auto mb-8" />
                            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-10 text-slate-200">
                                "{testimonials[current].text}"
                            </p>
                            <div>
                                <h4 className="text-xl font-bold text-[#2B70B6]">{testimonials[current].author}</h4>
                                <p className="text-sm tracking-widest uppercase text-slate-400 mt-2">{testimonials[current].location}</p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex justify-center gap-4 mt-12">
                        <button onClick={prev} className="p-3 border border-slate-700 hover:border-[#2B70B6] hover:text-[#2B70B6] rounded-full transition-colors">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={next} className="p-3 border border-slate-700 hover:border-[#2B70B6] hover:text-[#2B70B6] rounded-full transition-colors">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialCarousel;
