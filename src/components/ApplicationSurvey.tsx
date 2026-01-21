import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, AlertCircle, Home, MapPin, DollarSign, Calendar, User, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ApplicationSurveyProps {
    webhookUrl?: string;
}

const ApplicationSurvey: React.FC<ApplicationSurveyProps> = ({ webhookUrl = 'https://services.leadconnectorhq.com/hooks/placeholder' }) => {
    const [step, setStep] = useState(1);
    const [disqualified, setDisqualified] = useState(false);
    const [formData, setFormData] = useState({
        projectType: '',
        landStatus: '',
        budget: '',
        timeline: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        notes: ''
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleSelection = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));

        // Qualification Logic
        if (field === 'budget') {
            const lowBudgetOptions = ["Under $500k", "$500k - $750k"];
            if (lowBudgetOptions.includes(value)) {
                // Determine if we want to disqualify or just flag. 
                // For now, let's disqualify to match the agency flow behavior
                // setDisqualified(true); // Uncomment to enable strict disqualification
                // return;
            }
        }

        setStep(prev => prev + 1);
    };

    // Helper to get cookie by name without external dependencies
    const getCookie = (name: string) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Capture common ad tracking cookies if present
        const fbp = getCookie('_fbp');
        const fbc = getCookie('_fbc');

        const payload = {
            ...formData,
            fbp,
            fbc,
            source: 'website_application'
        };

        try {
            // For template demonstration, we might strictly log to console if URL is placeholder
            if (webhookUrl.includes('placeholder')) {
                console.log('Mock Submission Payload:', payload);
                // Simulate delay
                await new Promise(resolve => setTimeout(resolve, 1500));
            } else {
                await fetch(webhookUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
            }

            // Redirect to Booking
            const params = new URLSearchParams();
            if (formData.firstName || formData.lastName) {
                params.append('full_name', [formData.firstName, formData.lastName].filter(Boolean).join(' '));
            }
            if (formData.email) params.append('email', formData.email);
            if (formData.phone) params.append('phone', formData.phone);

            navigate({
                pathname: '/booking',
                search: params.toString()
            });

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const goBack = () => {
        if (disqualified) {
            setDisqualified(false);
            setStep(1);
        } else {
            setStep(prev => Math.max(1, prev - 1));
        }
    };

    if (disqualified) {
        return (
            <div className="w-full bg-white p-10 rounded-lg shadow-xl text-center border border-slate-100">
                <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
                    <AlertCircle size={32} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">We might not be the best fit.</h2>
                <p className="text-slate-600 mb-8">
                    Based on typical project costs in our area, our starting price point is usually above the budget you selected. We want to be respectful of your time and resources.
                </p>
                <button
                    onClick={goBack}
                    className="text-slate-500 hover:text-primary font-bold underline transition-colors"
                >
                    Wait, I selected the wrong option
                </button>
            </div>
        );
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-10">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-[#2B70B6] transition-all duration-500 ease-out"
                        style={{ width: `${(step / 5) * 100}%` }}
                    ></div>
                </div>
                <div className="mt-4 flex justify-between items-center text-sm font-bold text-slate-500">
                    <span className="text-[#2B70B6] uppercase tracking-widest text-xs">Step {step} of 5</span>
                    {step > 1 && (
                        <button onClick={goBack} className="flex items-center gap-1 hover:text-primary transition-colors">
                            <ArrowLeft size={16} /> Back
                        </button>
                    )}
                </div>
            </div>

            {/* Step 1: Project Type */}
            {step === 1 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/5 rounded-lg text-primary">
                            <Home size={28} />
                        </div>
                        <h1 className="text-3xl font-serif font-bold text-primary">What type of project are you planning?</h1>
                    </div>

                    <div className="space-y-4">
                        {['Custom Home Build', 'Whole Home Remodel', 'Large Addition', 'Other'].map((option) => (
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

            {/* Step 2: Land Status */}
            {step === 2 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/5 rounded-lg text-primary">
                            <MapPin size={28} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-primary">Do you have land / property?</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {["Yes, I own the land", "I am currently looking", "No, I need help finding land", "Rebuilding on existing lot"].map((option) => (
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

            {/* Step 3: Budget */}
            {step === 3 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/5 rounded-lg text-primary">
                            <DollarSign size={28} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-primary">What is your estimated budget?</h2>
                    </div>
                    <div className="space-y-4">
                        {["Under $500k", "$500k - $750k", "$750k - $1M", "$1M - $2M", "$2M+"].map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelection('budget', option)}
                                className="w-full text-left p-6 rounded border transition-all duration-200 group flex justify-between items-center bg-white border-slate-200 hover:border-accent hover:shadow-md"
                            >
                                <span className="text-lg font-bold text-slate-700 group-hover:text-primary">{option}</span>
                                <div className={`w-6 h-6 rounded-full border-2 ${formData.budget === option ? 'border-[#2B70B6] bg-[#2B70B6]' : 'border-slate-200'} flex items-center justify-center`}>
                                    {formData.budget === option && <Check size={14} className="text-white" />}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 4: Timeline */}
            {step === 4 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/5 rounded-lg text-primary">
                            <Calendar size={28} />
                        </div>
                        <h2 className="text-3xl font-serif font-bold text-primary">When are you hoping to start?</h2>
                    </div>
                    <div className="space-y-4">
                        {["Immediately", "3-6 Months", "6-12 Months", "12+ Months", "Just researching"].map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelection('timeline', option)}
                                className="w-full text-left p-6 rounded border transition-all duration-200 group flex justify-between items-center bg-white border-slate-200 hover:border-accent hover:shadow-md"
                            >
                                <span className="text-lg font-bold text-slate-700 group-hover:text-primary">{option}</span>
                                <ArrowRight className="text-slate-300 group-hover:text-[#2B70B6] transition-colors" size={20} />
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Step 5: Contact Details */}
            {step === 5 && (
                <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl border border-slate-100 animate-fadeIn">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-primary/5 rounded-lg text-primary">
                            <User size={28} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-serif font-bold text-primary">Last step.</h2>
                            <p className="text-slate-600">Where should we send your project analysis?</p>
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
