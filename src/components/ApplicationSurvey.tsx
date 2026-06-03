import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Home, MapPin, DollarSign, Calendar, User, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ApplicationSurveyProps {
    webhookUrl?: string;
}

const ApplicationSurvey: React.FC<ApplicationSurveyProps> = () => {
    const TOTAL_STEPS = 5;
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        projectType: '',
        timeline: '',
        budget: '',
        landStatus: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredContact: '',
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSelection = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        setStep(prev => prev + 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const fullName = [formData.firstName, formData.lastName].filter(Boolean).join(' ');

        let estimatedBudget = 0;
        if (formData.budget.includes('750k')) estimatedBudget = 750000;
        if (formData.budget.includes('1M')) estimatedBudget = 1000000;
        if (formData.budget.includes('1.5M')) estimatedBudget = 1500000;
        if (formData.budget.includes('2M+')) estimatedBudget = 2000000;

        const salesNote = `${fullName} is planning a ${formData.projectType || 'Project'} (${formData.timeline}) with a budget range of ${formData.budget}. Land Status: ${formData.landStatus}. Contact via: ${formData.preferredContact}.`;

        const payload = {
            client: "Herman Boonstra - Homestead Home Builders",
            source: "Partner Application",
            timestamp: new Date().toISOString(),
            is_qualified: true,
            quality_tier: "Qualified",
            contact: { name: fullName, email: formData.email, phone: formData.phone, agreedToTerms: true },
            sales_note: salesNote,
            project: {
                city: "Northern Colorado",
                totalBudget: estimatedBudget,
                landOwned: formData.landStatus === 'Yes',
                timeline: formData.timeline,
                type: formData.projectType
            },
            headers: {
                host: window.location.host,
                userAgent: navigator.userAgent,
                referer: document.referrer
            }
        };

        try {
            const targetUrl = 'https://services.leadconnectorhq.com/hooks/cG3cesDKIajoyQPNPYZK/webhook-trigger/61e5d2ad-bff6-4dda-afe3-89b988885e8a';
            await fetch(targetUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const params = new URLSearchParams();
            if (fullName) params.append('full_name', fullName);
            if (formData.email) params.append('email', formData.email);
            if (formData.phone) params.append('phone', formData.phone);
            navigate({ pathname: '/booking', search: params.toString() });
        } catch (error) {
            console.error('Error submitting form:', error);
            const params = new URLSearchParams();
            if (fullName) params.append('full_name', fullName);
            navigate({ pathname: '/booking', search: params.toString() });
        } finally {
            setLoading(false);
        }
    };

    const goBack = () => {
        setStep(prev => Math.max(1, prev - 1));
    };

    const optionClass = "w-full text-left px-5 py-4 rounded-lg border transition-all duration-200 group flex justify-between items-center bg-white/5 border-white/15 hover:bg-[#2B70B6] hover:border-[#2B70B6] hover:shadow-lg";
    const optionText = "text-base font-semibold text-white/90 group-hover:text-white";
    const iconBox = "p-2.5 bg-white/10 rounded-lg text-[#7bb8f0]";

    return (
        <div className="w-full max-w-2xl mx-auto">

            {/* Progress bar header */}
            <div className="bg-[#0d1f3c] rounded-t-xl px-8 pt-5 pb-4 border border-b-0 border-white/10 shadow-2xl">
                <div className="h-1.5 bg-white/15 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#4a9eff] transition-all duration-500 ease-out rounded-full"
                        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    />
                </div>
                {step > 1 && (
                    <div className="mt-2 flex justify-end">
                        <button onClick={goBack} className="flex items-center gap-1 text-xs font-bold text-white/40 hover:text-white/80 transition-colors">
                            <ArrowLeft size={13} /> Back
                        </button>
                    </div>
                )}
            </div>

            {/* Step 1: Project Type */}
            {step === 1 && (
                <div className="bg-[#0d1f3c] px-8 pb-8 pt-6 md:px-12 md:pb-10 rounded-b-xl border border-t-0 border-white/10 shadow-2xl animate-fadeIn">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={iconBox}><Home size={22} /></div>
                        <h1 className="text-lg font-serif font-bold text-white">What type of project are you planning?</h1>
                    </div>
                    <div className="space-y-3">
                        {['Custom home build', 'Major renovation / addition', 'Tear-down and rebuild', 'Not sure yet, still exploring'].map((option) => (
                            <button key={option} onClick={() => handleSelection('projectType', option)} className={optionClass}>
                                <span className={optionText}>{option}</span>
                                <ArrowRight className="text-white/30 group-hover:text-white transition-colors flex-shrink-0" size={18} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Timeline */}
            {step === 2 && (
                <div className="bg-[#0d1f3c] px-8 pb-8 pt-6 md:px-12 md:pb-10 rounded-b-xl border border-t-0 border-white/10 shadow-2xl animate-fadeIn">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={iconBox}><Calendar size={22} /></div>
                        <h2 className="text-lg font-serif font-bold text-white">When are you hoping to begin construction?</h2>
                    </div>
                    <div className="space-y-3">
                        {["Within 6 months", "6–12 months", "12–24 months", "Just researching"].map((option) => (
                            <button key={option} onClick={() => handleSelection('timeline', option)} className={optionClass}>
                                <span className={optionText}>{option}</span>
                                <ArrowRight className="text-white/30 group-hover:text-white transition-colors flex-shrink-0" size={18} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
                <div className="bg-[#0d1f3c] px-8 pb-8 pt-6 md:px-12 md:pb-10 rounded-b-xl border border-t-0 border-white/10 shadow-2xl animate-fadeIn">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={iconBox}><DollarSign size={22} /></div>
                        <h2 className="text-lg font-serif font-bold text-white">What investment range do you anticipate?</h2>
                    </div>
                    <div className="space-y-3">
                        {["$750k – $1M", "$1M – $1.5M", "$1.5M – $2M", "$2M+", "Not sure yet"].map((option) => (
                            <button key={option} onClick={() => handleSelection('budget', option)} className={optionClass}>
                                <span className={optionText}>{option}</span>
                                <ArrowRight className="text-white/30 group-hover:text-white transition-colors flex-shrink-0" size={18} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 4: Land Status */}
            {step === 4 && (
                <div className="bg-[#0d1f3c] px-8 pb-8 pt-6 md:px-12 md:pb-10 rounded-b-xl border border-t-0 border-white/10 shadow-2xl animate-fadeIn">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={iconBox}><MapPin size={22} /></div>
                        <h2 className="text-lg font-serif font-bold text-white">Have you already secured land?</h2>
                    </div>
                    <div className="space-y-3">
                        {["Yes", "In the process", "Not yet"].map((option) => (
                            <button key={option} onClick={() => handleSelection('landStatus', option)} className={optionClass}>
                                <span className={optionText}>{option}</span>
                                <ArrowRight className="text-white/30 group-hover:text-white transition-colors flex-shrink-0" size={18} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 5: Contact Details */}
            {step === 5 && (
                <div className="bg-[#0d1f3c] px-8 pb-8 pt-6 md:px-12 md:pb-10 rounded-b-xl border border-t-0 border-white/10 shadow-2xl animate-fadeIn">
                    <div className="flex items-center gap-3 mb-6">
                        <div className={iconBox}><User size={22} /></div>
                        <div>
                            <h2 className="text-lg font-serif font-bold text-white">Last step.</h2>
                            <p className="text-white/50 text-sm">How can we reach you?</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">First Name</label>
                                <input required type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                    placeholder="John"
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Last Name</label>
                                <input required type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                    placeholder="Doe"
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Email Address</label>
                            <input required type="email"
                                className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                placeholder="john@example.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Phone Number</label>
                                <input required type="tel"
                                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                    placeholder="(555) 123-4567"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-white/60 mb-1.5 uppercase tracking-wide">Preferred Contact</label>
                                <select required defaultValue=""
                                    className="w-full px-4 py-3 rounded-lg border border-white/15 bg-white text-slate-900 focus:outline-none focus:border-[#4a9eff] focus:ring-1 focus:ring-[#4a9eff] transition-colors"
                                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                                >
                                    <option value="" disabled className="bg-white">Select an option</option>
                                    <option value="Phone Call" className="bg-white">Phone Call</option>
                                    <option value="Text Message" className="bg-white">Text Message</option>
                                    <option value="Email" className="bg-white">Email</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#2B70B6] text-white font-bold uppercase tracking-widest py-4 rounded-lg hover:bg-[#4a9eff] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                        >
                            {loading ? (
                                <><Loader2 className="animate-spin" size={20} /> Submitting...</>
                            ) : (
                                "Complete Application →"
                            )}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ApplicationSurvey;
