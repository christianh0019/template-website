import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronRight, Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        projectType: '',
        hasLand: '',
        projectAddress: '',
        timeline: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    });

    const updateData = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would send data to your backend/Netlify/Vercel
        console.log("Form Submitted", formData);
        navigate('/booking');
    };

    const variants = {
        enter: { opacity: 0, x: 20 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <>
            <SEO
                title="Start Your Project | Homestead Home Builders"
                description="Tell us about your dream home project. Our multi-step inquiry form helps us understand your vision before we talk."
                canonical="https://homesteadhomebuilders.com/contact"
            />

            <PageHeader
                title="Start Your Project"
                subtitle="Tell us about your vision."
                backgroundImage="https://images.unsplash.com/photo-1516156008625-3a9d60da923c?q=80&w=1974&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Inquiry', path: '/contact' }
                ]}
            />

            <section className="py-24 bg-surface min-h-screen">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Left Column: Context & Info */}
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Let's Build Something Project</h2>
                            <p className="text-lg text-slate-600 mb-12">
                                We accept a limited number of custom projects each year to ensure the highest level of attention.
                                Please fill out this brief survey so we can prepare for our proper introduction.
                            </p>

                            <div className="space-y-8 border-t border-slate-200 pt-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full text-accent shadow-sm"><Phone size={24} /></div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Direct Line</h3>
                                        <a href={SITE_CONFIG.contact.phoneHref} className="text-slate-600 hover:text-accent font-medium">{SITE_CONFIG.contact.phone}</a>
                                        <p className="text-sm text-slate-500 mt-1">Mon-Fri, 6am - 6pm MST</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full text-accent shadow-sm"><Mail size={24} /></div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Email Support</h3>
                                        <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-slate-600 hover:text-accent font-medium">{SITE_CONFIG.contact.email}</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-white p-3 rounded-full text-accent shadow-sm"><MapPin size={24} /></div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Studio</h3>
                                        <p className="text-slate-600">{SITE_CONFIG.contact.address.street}<br />{SITE_CONFIG.contact.address.city}, {SITE_CONFIG.contact.address.state} {SITE_CONFIG.contact.address.zip}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: The Wizard */}
                        <div className="order-1 lg:order-2">
                            <div className="bg-white p-8 md:p-12 rounded-sm shadow-xl relative overflow-hidden">

                                {/* Progress Bar */}
                                <div className="absolute top-0 left-0 h-2 bg-slate-100 w-full">
                                    <div
                                        className="h-full bg-accent transition-all duration-500 ease-out"
                                        style={{ width: `${(step / 4) * 100}%` }}
                                    ></div>
                                </div>

                                <div className="mb-8 mt-4">
                                    <span className="text-accent font-bold uppercase tracking-widest text-xs">Step {step} of 4</span>
                                    <h3 className="text-2xl font-serif font-bold text-primary mt-2">
                                        {step === 1 && "What type of project is this?"}
                                        {step === 2 && "Tell us about the property."}
                                        {step === 3 && "What is your desired timeline?"}
                                        {step === 4 && "How can we reach you?"}
                                    </h3>
                                </div>

                                <AnimatePresence mode='wait'>
                                    {/* STEP 1: Project Type */}
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.3 }}
                                            className="space-y-4"
                                        >
                                            {['Custom Home Build', 'Whole Home Remodel', 'Addition / ADU', 'Basement Finish', 'Other'].map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => { updateData('projectType', opt); nextStep(); }}
                                                    className={`w-full text-left p-4 rounded border transition-all flex justify-between items-center group
                                                        ${formData.projectType === opt ? 'border-accent bg-accent/5' : 'border-slate-200 hover:border-accent hover:shadow-md'}`}
                                                >
                                                    <span className={`font-bold ${formData.projectType === opt ? 'text-primary' : 'text-slate-600'}`}>{opt}</span>
                                                    {formData.projectType === opt && <Check size={20} className="text-accent" />}
                                                </button>
                                            ))}
                                        </motion.div>
                                    )}

                                    {/* STEP 2: Land / Address */}
                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            className="space-y-6"
                                        >
                                            <div className="space-y-3">
                                                <label className="block text-sm font-bold text-slate-700">Do you own the land/property yet?</label>
                                                <div className="grid grid-cols-2 gap-4">
                                                    {['Yes', 'No / Looking'].map(opt => (
                                                        <button
                                                            key={opt}
                                                            onClick={() => updateData('hasLand', opt)}
                                                            className={`p-4 rounded border text-center font-bold transition-all
                                                                ${formData.hasLand === opt ? 'border-accent bg-accent/5 text-primary' : 'border-slate-200 text-slate-500 hover:border-accent'}`}
                                                        >
                                                            {opt}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {formData.hasLand === 'Yes' && (
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-slate-700">Project Address (or Lot #)</label>
                                                    <input
                                                        type="text"
                                                        value={formData.projectAddress}
                                                        onChange={(e) => updateData('projectAddress', e.target.value)}
                                                        className="w-full p-4 border border-slate-300 rounded focus:border-accent focus:outline-none"
                                                        placeholder="e.g. 123 Mountain View Dr, Loveland"
                                                    />
                                                </div>
                                            )}

                                            <div className="flex gap-4 pt-4">
                                                <button onClick={prevStep} className="px-6 py-3 text-slate-500 font-bold hover:text-primary">Back</button>
                                                <button
                                                    onClick={nextStep}
                                                    disabled={!formData.hasLand}
                                                    className="flex-1 bg-primary text-white py-3 font-bold uppercase tracking-widest hover:bg-secondary disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Next Step
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 3: Timeline */}
                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            className="space-y-4"
                                        >
                                            {['As soon as possible', '3-6 Months', '6-12 Months', 'Just wondering'].map(opt => (
                                                <button
                                                    key={opt}
                                                    onClick={() => { updateData('timeline', opt); nextStep(); }}
                                                    className={`w-full text-left p-4 rounded border transition-all flex justify-between items-center group
                                                        ${formData.timeline === opt ? 'border-accent bg-accent/5' : 'border-slate-200 hover:border-accent hover:shadow-md'}`}
                                                >
                                                    <span className={`font-bold ${formData.timeline === opt ? 'text-primary' : 'text-slate-600'}`}>{opt}</span>
                                                    {formData.timeline === opt && <Check size={20} className="text-accent" />}
                                                </button>
                                            ))}
                                            <div className="pt-4">
                                                <button onClick={prevStep} className="text-slate-500 font-bold hover:text-primary px-4">Back</button>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* STEP 4: Contact & Submit */}
                                    {step === 4 && (
                                        <motion.div
                                            key="step4"
                                            variants={variants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            className="space-y-6"
                                        >
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-slate-700">First Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.firstName}
                                                        onChange={(e) => updateData('firstName', e.target.value)}
                                                        className="w-full p-3 border border-slate-300 rounded focus:border-accent focus:outline-none"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="block text-sm font-bold text-slate-700">Last Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        value={formData.lastName}
                                                        onChange={(e) => updateData('lastName', e.target.value)}
                                                        className="w-full p-3 border border-slate-300 rounded focus:border-accent focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-slate-700">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => updateData('email', e.target.value)}
                                                    className="w-full p-3 border border-slate-300 rounded focus:border-accent focus:outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="block text-sm font-bold text-slate-700">Phone Number</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => updateData('phone', e.target.value)}
                                                    className="w-full p-3 border border-slate-300 rounded focus:border-accent focus:outline-none"
                                                />
                                            </div>

                                            <div className="flex gap-4 pt-6">
                                                <button onClick={prevStep} className="px-6 py-3 text-slate-500 font-bold hover:text-primary">Back</button>
                                                <button
                                                    onClick={handleSubmit}
                                                    disabled={!formData.email || !formData.firstName}
                                                    className="flex-1 bg-accent text-primary py-4 font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                                >
                                                    Complete & Book Call <ChevronRight size={20} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
