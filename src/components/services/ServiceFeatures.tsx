import { CheckCircle2 } from 'lucide-react';

interface ServiceFeaturesProps {
    title: string;
    description: string;
    features: string[];
}

const ServiceFeatures = ({ title, description, features }: ServiceFeaturesProps) => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">{title}</h2>
                        <div className="w-20 h-1 bg-accent mb-8"></div>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            {description}
                        </p>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                    <div className="mt-1 text-accent">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <span className="text-lg font-medium text-slate-800">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceFeatures;
