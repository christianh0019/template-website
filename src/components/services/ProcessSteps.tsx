import { ClipboardList, PenTool, Hammer, Key } from 'lucide-react';

const steps = [
    {
        icon: ClipboardList,
        title: "1. Discovery",
        description: "We meet to discuss your vision, budget, and potential building sites."
    },
    {
        icon: PenTool,
        title: "2. Design",
        description: "Our architects and designers collaborate to create your custom blueprints."
    },
    {
        icon: Hammer,
        title: "3. Construction",
        description: "We manage every detail of the build with transparency and quality control."
    },
    {
        icon: Key,
        title: "4. Welcome Home",
        description: "Final walkthroughs, warranty activation, and handing over the keys."
    }
];

const ProcessSteps = () => {
    return (
        <section className="py-24 bg-primary text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm block mb-4">How We Work</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">The Simplified Build Process</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector Line (Hidden on mobile/last item) */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-700 -z-10"></div>
                            )}

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center border-2 border-slate-700 group-hover:border-accent transition-colors mb-6 z-10 shadow-lg relative">
                                    <step.icon className="text-accent" size={28} />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full text-primary font-bold text-xs flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed px-2">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSteps;
