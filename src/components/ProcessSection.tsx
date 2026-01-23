import { motion } from 'framer-motion';
import { Search, PenTool, Hammer, Key, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const steps = [
    {
        icon: Search,
        title: "Discovery & Planning",
        desc: "We begin with a deep dive into your vision, budget, and site requirements. This phase includes land feasibility studies and initial concept alignment."
    },
    {
        icon: PenTool,
        title: "Design & Selections",
        desc: "Our architectural partners bring your vision to blueprint. We guide you through selecting premium materials, fixtures, and finishes that define your home's character."
    },
    {
        icon: Hammer,
        title: "Construction",
        desc: "Your dedicated project manager oversees every nail driven. You receive weekly updates, photo logs, and schedule tracking via our client portal."
    },
    {
        icon: Key,
        title: "Welcome Home",
        desc: "We don't just hand over keys; we welcome you home. Includes a comprehensive orientation, warranty portfolio, and ongoing support after move-in."
    }
];

const ProcessSection = () => {
    return (
        <section className="py-32 bg-surface">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <span className="text-[#2B70B6] font-bold tracking-widest uppercase text-sm">The Homestead Way</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mt-4 mb-6">A Seamless Path to Your Dream Home</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-10">
                        Building a custom home shouldn't be stressful. We've refined our process over 30 years to ensure transparency, precision, and joy at every stage.
                    </p>
                    <Link to="/process" className="inline-flex items-center px-8 py-4 bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] transition-colors rounded-full shadow-lg">
                        View Detailed Process <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-slate-200 z-0"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white p-8 rounded-none border-l-4 border-l-transparent hover:border-l-[#2B70B6] shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="w-16 h-16 bg-[#2B70B6] flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-lg">
                                    <step.icon size={32} />
                                </div>
                                <h4 className="text-xl font-serif font-bold text-primary mb-4">{index + 1}. {step.title}</h4>
                                <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
