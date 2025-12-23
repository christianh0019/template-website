
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { Phone, FileText, Ruler, HardHat, Key, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Process = () => {
    const steps = [
        {
            id: 1,
            title: "Discovery & Feasibility",
            subtitle: "Can we build what you're imagining?",
            icon: <Phone size={40} className="text-secondary" />,
            description: "Before we sign contracts or draw blueprints, we need to make sure your vision matches your budget and timeline. This is a low-pressure phase where we just get to know each other.",
            points: [
                "Initial consultation call to discuss your goals",
                "Rough budget alignment check",
                "Lot feasibility review (if you have land)",
                "Explanation of our contract structure"
            ],
            image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "Design & Pre-Construction",
            subtitle: "Putting ideas on paper.",
            icon: <Ruler size={40} className="text-secondary" />,
            description: "This is where the magic happens. We work with architects and engineers to turn your Pinterest boards into permits. We don't start building until we have a real plan.",
            points: [
                "Preliminary floor plan & elevation sketches",
                "Engineering & structural analysis",
                "Permit submission and zoning review",
                "Initial trade partner walkthroughs"
            ],
            image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
        },
        {
            id: 3,
            title: "Selections & Final Budget",
            subtitle: "Choosing the details that make it yours.",
            icon: <FileText size={40} className="text-secondary" />,
            description: "No ambiguity. Before we break ground, you'll select your finishes—cabinetry, flooring, fixtures. This allows us to give you a Fixed-Price Contract so you aren't hit with surprises later.",
            points: [
                "Guided showroom visits with our designers",
                "Finalizing specific material selections",
                "Presentation of Fixed-Price Construction Agreement",
                "Construction schedule creation"
            ],
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
        },
        {
            id: 4,
            title: "Construction",
            subtitle: "Bringing the vision to life.",
            icon: <HardHat size={40} className="text-secondary" />,
            description: "Boots on the ground. You'll receive weekly updates and photos via our client portal, so you know exactly what's happening even if you aren't on site.",
            points: [
                "Excavation and foundation pour",
                "Framing, rough-ins, and drywall",
                "Weekly site walks with your Project Manager",
                "Quality control checkpoints at every stage"
            ],
            image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 5,
            title: "Delivery & Warranty",
            subtitle: "Welcome home.",
            icon: <Key size={40} className="text-secondary" />,
            description: "We don't just hand over the keys and vanish. We walk you through every system in your new home, and we stand behind our work with a comprehensive warranty.",
            points: [
                "Final walkthrough and punch list completion",
                "Home orientation (learning your HVAC, smart systems)",
                "Move-In Day celebration",
                "1-Year and 10-Year Structural Warranty coverage"
            ],
            image: "https://images.unsplash.com/photo-1560518883-ce09059ee971?q=80&w=2073&auto=format&fit=crop"
        }
    ];

    return (
        <>
            <SEO
                title="Our Custom Home Building Process | Homestead"
                description="A transparent, step-by-step guide to building your custom home. From design to warranty, we handle every detail with care."
                canonical="https://homesteadhomebuilders.com/process"
            />

            <PageHeader
                title="How We Build"
                subtitle="A human approach to construction. No jargon, no black boxes—just a clear path to your dream home."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Our Process', path: '/process' }
                ]}
            />

            <div className="flex flex-col">
                {steps.map((step, index) => (
                    <section
                        key={step.id}
                        className={`py-20 md:py-32 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
                    >
                        <div className="container mx-auto px-6">
                            <div className={`flex flex-col gap-12 lg:gap-20 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                }`}>

                                {/* Image Side */}
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-0 left-0 bg-primary/90 text-white p-6 rounded-br-lg">
                                            <span className="text-4xl font-bold font-serif block">0{step.id}</span>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Content Side */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="w-full lg:w-1/2"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 bg-secondary/10 rounded-full">
                                            {step.icon}
                                        </div>
                                        <span className="text-secondary font-bold uppercase tracking-widest text-sm">Phase {step.id}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                                        {step.title}
                                    </h2>
                                    <h3 className="text-xl text-accent font-medium mb-6 italic">
                                        {step.subtitle}
                                    </h3>

                                    <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                        {step.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {step.points.map((point, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <ShieldCheck className="text-accent flex-shrink-0 mt-1" size={20} />
                                                <span className="text-slate-700 font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </section>
                ))}
            </div>

            {/* CTA */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-4xl font-serif font-bold mb-6">Ready to start Phase 1?</h2>
                    <p className="text-xl text-slate-300 mb-10">
                        The Discovery Phase is complimentary. Let's just talk about your ideas and see if we're a good fit.
                    </p>
                    <RouterLink
                        to="/contact"
                        className="inline-block bg-white text-primary px-10 py-5 font-bold uppercase tracking-widest hover:bg-secondary hover:text-white transition-all shadow-lg rounded-sm"
                    >
                        Schedule Discovery Call
                    </RouterLink>
                </div>
            </section>
        </>
    );
};

export default Process;
