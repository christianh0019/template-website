
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Lock, TrendingUp } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CostGuideOptIn = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        status: 'researching'
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call/processing
        setTimeout(() => {
            // Set the "key" in session storage
            sessionStorage.setItem('unlocked_cost_guide', 'true');
            // Store lead data if we had a backend
            // console.log('Lead captured:', formData);

            setIsSubmitting(false);
            navigate('/resources/cost-guide');
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <>
            <Helmet>
                <title>2025 Cost to Build Guide | Northern Colorado Custom Homes</title>
                <meta name="description" content="Download our comprehensive guide to understanding custom home building costs in Fort Collins, Loveland, and Windsor. Real numbers, no guesswork." />
            </Helmet>

            <div className="min-h-screen bg-stone-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Copy */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-900/5 rounded-full mb-6">
                                <TrendingUp className="w-4 h-4 text-stone-600" />
                                <span className="text-sm font-medium text-stone-600">Updated for Current Market Rates</span>
                            </div>

                            <h1 className="text-4xl lg:text-5xl font-serif text-stone-900 leading-tight mb-6">
                                Stop Guessing. Know the <span className="italic text-stone-600">Real Cost</span> to Build in Northern Colorado.
                            </h1>

                            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                                Budgeting for a custom home shouldn't be a mystery. We've compiled actual project data from the last 12 months to give you a transparent look at what it really takes to build today.
                            </p>

                            <div className="space-y-4 mb-12">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-stone-800 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-stone-900">Per Square Foot Breakdowns</h3>
                                        <p className="text-stone-600 text-sm">Detailed ranges for Economy, Mid-Range, and Luxury finishes.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-stone-800 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-stone-900">Hidden Soft Costs Revealed</h3>
                                        <p className="text-stone-600 text-sm">Permits, engineering, and design fees that often catch homeowners off guard.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-stone-800 mt-1 flex-shrink-0" />
                                    <div>
                                        <h3 className="font-medium text-stone-900">Sample Budgets</h3>
                                        <p className="text-stone-600 text-sm">Real-world scenarios for 2,500 sq.ft and 4,000 sq.ft homes.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-stone-500">
                                <div className="flex -space-x-2">
                                    {/* Placeholder avatars */}
                                    <div className="w-8 h-8 rounded-full bg-stone-300 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-stone-400 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-stone-500 border-2 border-white"></div>
                                </div>
                                <p>Downloaded by 500+ local homeowners</p>
                            </div>
                        </motion.div>

                        {/* Right Column: Opt-In Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-white p-8 rounded-2xl shadow-xl border border-stone-100"
                        >
                            <div className="text-center mb-8">
                                <div className="inline-block p-3 bg-stone-100 rounded-full mb-4">
                                    <FileText className="w-8 h-8 text-stone-800" />
                                </div>
                                <h2 className="text-2xl font-serif text-stone-900">Unlock the Full Guide</h2>
                                <p className="text-stone-600 mt-2">Enter your details for instant access.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all"
                                        placeholder="Jane"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all"
                                        placeholder="jane@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="status" className="block text-sm font-medium text-stone-700 mb-1">Where are you in the process?</label>
                                    <select
                                        id="status"
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="w-full bg-stone-50 border border-stone-200 rounded-lg px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-400 focus:bg-white transition-all"
                                    >
                                        <option value="researching">Just researching / Curious</option>
                                        <option value="planning">Planning (1-2 years out)</option>
                                        <option value="ready">Ready to build (0-6 months)</option>
                                        <option value="land">I have land, need a builder</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-stone-900 text-white font-medium py-3.5 px-6 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                                >
                                    {isSubmitting ? 'Unlocking...' : 'Read the Guide'}
                                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </button>

                                <div className="flex items-center justify-center gap-2 text-xs text-stone-400 mt-4">
                                    <Lock className="w-3 h-3" />
                                    <span>Your information is secure. No spam, ever.</span>
                                </div>
                            </form>
                        </motion.div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default CostGuideOptIn;
