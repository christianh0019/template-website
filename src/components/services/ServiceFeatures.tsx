import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServiceFeaturesProps {
    title: string;
    description: string;
    features: string[];
}

const ServiceFeatures = ({ title, description, features }: ServiceFeaturesProps) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="lg:w-1/2 sticky top-32">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">{title}</h2>
                        <div className="w-20 h-1 bg-accent mb-8"></div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            {description}
                        </p>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 gap-6">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg hover:bg-white transition-all hover:shadow-lg border border-slate-100"
                                >
                                    <div className="mt-1 text-accent bg-white rounded-full p-1 shadow-sm">
                                        <CheckCircle2 size={20} />
                                    </div>
                                    <span className="text-lg font-medium text-slate-800">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
