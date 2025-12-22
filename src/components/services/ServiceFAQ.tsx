import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQProps {
    faqs: FAQItem[];
    title?: string;
}

const ServiceFAQ = ({ faqs, title = "Frequently Asked Questions" }: ServiceFAQProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-3xl font-serif font-bold text-primary text-center mb-16">{title}</h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-slate-200 rounded-sm overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 bg-white hover:bg-slate-50 transition-colors text-left"
                            >
                                <span className="text-lg font-bold text-primary">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-accent flex-shrink-0" />
                                ) : (
                                    <Plus className="text-slate-400 flex-shrink-0" />
                                )}
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 pt-0 bg-white text-slate-600 leading-relaxed border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceFAQ;
