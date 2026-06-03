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

        // Parse Budget (Simple extraction for estimate)
        let estimatedBudget = 0;
        if (formData.budget.includes('750k')) estimatedBudget = 750000;
        if (formData.budget.includes('1M')) estimatedBudget = 1000000;
        if (formData.budget.includes('1.5M')) estimatedBudget = 1500000;
        if (formData.budget.includes('2M+')) estimatedBudget = 2000000;

        // Construct Sales Note
        const salesNote = `${fullName} is planning a ${formData.projectType || 'Project'} (${formData.timeline}) with a budget range of ${formData.budget}. Land Status: ${formData.landStatus}. Contact via: ${formData.preferredContact}.`;

        const payload = {
            client: "Herman Boonstra - Homestead Home Builders",
            source: "Partner Application",
            timestamp: new Date().toISOString(),
            is_qualified: true,
            quality_tier: "Qualified",
            contact: {
                name: fullName,
                email: formData.email,
                phone: formData.phone,
                agreedToTerms: true
            },
            sales_note: salesNote,
            project: {
                city: "Northern Colorado", // Default context
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
            // Updated Webhook
            const targetUrl = 'https://services.leadconnectorhq.com/hooks/cG3cesDKIajoyQPNPYZK/webhook-trigger/61e5d2ad-bff6-4dda-afe3-89b988885e8a';

            await fetch(targetUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            // Redirect to Booking
            const params = new URLSearchParams();
            if (fullName) params.append('full_name', fullName);
            if (formData.email) params.append('email', formData.email);
            if (formData.phone) params.append('phone', formData.phone);

            navigate({
                pathname: '/booking',
                search: params.toString()
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            // alert('Something went wrong. Please try again.'); // Silent fail safe for tracking

            // Still redirect on error to not block user
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

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-5">
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#2B70B6] transition-all duration-500 ease-out"
                        style={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                    ></div>
                </div>
                {step > 1 && (
                    <div className="mt-2 flex justify-end">
                        <button onClick={goBack} className="flex items-center gap-1 text-xs font-bold text-slate-400 hover:text-primary transition-colors">
                            <ArrowLeft size={13} /> Back
                        </button>
                    </div>
                )}
            </div>

            {/* Step 1: Project Type */}
            {step === 1 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#2B70B6]/5 rounded-lg text-[#2B70B6]">
                            <Home size={28} />
                        </div>
                        <h1 className="text-xl font-serif font-bold text-primary">What type of project are you planning?</h1>
                    </div>

                    <div className="space-y-4">
                        {['Custom home build', 'Major renovation / addition', 'Tear-down and rebuild', 'Not sure yet, still exploring'].map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelection('projectType', option)}
                                className="w-full text-left p-6 rounded border transition-all duration-200 group flex justify-between items-center bg-white border-slate-200 hover:border-[#2B70B6] hover:shadow-md"
                            >
                                <span className="text-lg font-bold text-slate-700 group-hover:text-primary">{option}</span>
                                <ArrowRight className="text-slate-300 group-hover:text-[#2B70B6] transition-colors" size={20} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 2: Timeline */}
            {step === 2 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#2B70B6]/5 rounded-lg text-[#2B70B6]">
                            <Calendar size={28} />
                        </div>
                        <h2 className="text-xl font-serif font-bold text-primary">When are you hoping to begin construction?</h2>
                    </div>
                    <div className="space-y-4">
                        {["Within 6 months", "6–12 months", "12–24 months", "Just researching"].map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelection('timeline', option)}
                                className="w-full text-left p-6 rounded border transition-all duration-200 group flex justify-between items-center bg-white border-slate-200 hover:border-[#2B70B6] hover:shadow-md"
                            >
                                <span className="text-lg font-bold text-slate-700 group-hover:text-primary">{option}</span>
                                <ArrowRight className="text-slate-300 group-hover:text-[#2B70B6] transition-colors" size={20} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 3: Budget */}
            {step === 3 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#2B70B6]/5 rounded-lg text-[#2B70B6]">
                            <DollarSign size={28} />
                        </div>
                        <h2 className="text-xl font-serif font-bold text-primary">What investment range do you anticipate for your project?</h2>
                    </div>
                    <div className="space-y-4">
                        {["$750k – $1M", "$1M – $1.5M", "$1.5M – $2M", "$2M+", "Not sure yet"].map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelection('budget', option)}
                                className="w-full text-left p-6 rounded border transition-all duration-200 group flex justify-between items-center bg-white border-slate-200 hover:border-[#2B70B6] hover:shadow-md"
                            >
                                <span className="text-lg font-bold text-slate-700 group-hover:text-primary">{option}</span>
                                <ArrowRight className="text-slate-300 group-hover:text-[#2B70B6] transition-colors" size={20} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 4: Land Status */}
            {step === 4 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#2B70B6]/5 rounded-lg text-[#2B70B6]">
                            <MapPin size={28} />
                        </div>
                        <h2 className="text-xl font-serif font-bold text-primary">Have you already secured land?</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {["Yes", "In the process", "Not yet"].map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelection('landStatus', option)}
                                className="p-6 rounded border text-left font-bold transition-all bg-white border-slate-200 text-slate-600 hover:border-[#2B70B6] hover:text-primary hover:shadow-md"
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 5: Contact Details */}
            {step === 5 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-[#2B70B6]/5 rounded-lg text-[#2B70B6]">
                            <User size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-primary">Last step.</h2>
                            <p className="text-slate-600">How can we contact you?</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] bg-white"
                                    placeholder="John"
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] bg-white"
                                    placeholder="Doe"
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                            <input
                                required
                                type="email"
                                className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] bg-white"
                                placeholder="john@example.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] bg-white"
                                    placeholder="(555) 123-4567"
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Preferred Contact Method</label>
                                <select
                                    required
                                    className="w-full px-4 py-3 rounded border border-slate-300 focus:outline-none focus:border-[#2B70B6] focus:ring-1 focus:ring-[#2B70B6] bg-white"
                                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select an option</option>
                                    <option value="Phone Call">Phone Call</option>
                                    <option value="Text Message">Text Message</option>
                                    <option value="Email">Email</option>
                                </select>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#2B70B6] text-white font-bold uppercase tracking-widest py-4 rounded hover:bg-[#2B4677] hover:text-white transition-all duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} />
                                    Submitting...
                                </>
                            ) : (
                                "Complete Application"
                            )}
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ApplicationSurvey;
