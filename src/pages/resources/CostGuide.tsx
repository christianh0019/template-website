
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, Ruler, FileText, ArrowRight, Wallet } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CostGuide = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const isUnlocked = sessionStorage.getItem('unlocked_cost_guide');
        if (!isUnlocked) {
            navigate('/resources/cost-guide-optin');
        }
    }, [navigate]);

    return (
        <>
            <Helmet>
                <title>The Northern Colorado Cost to Build Report | 2025 Edition</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            {/* Hero Section */}
            <section className="bg-stone-900 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <span className="inline-block py-1 px-3 border border-stone-700 rounded-full text-xs font-medium tracking-wider mb-6 bg-stone-800/50">
                        OFFICIAL REPORT
                    </span>
                    <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                        The True Cost to Build <br />
                        <span className="text-stone-400 italic">in Northern Colorado</span>
                    </h1>
                    <p className="text-xl text-stone-300 max-w-2xl mx-auto">
                        A comprehensive breakdown of construction costs, soft costs, and what you can expect to pay for your custom home project in today's market.
                    </p>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-10 relative z-10">
                <div className="bg-white rounded-xl shadow-xl border border-stone-200 overflow-hidden">
                    <div className="p-8 md:p-12">

                        {/* Introduction */}
                        <div className="prose prose-stone max-w-none mb-16">
                            <p className="lead text-xl text-stone-800 font-medium">
                                The question we get asked most often is, "How much does it cost to build a custom home?" It's a fair question, but one with a complicated answer.
                            </p>
                            <p>
                                In 2024 and moving into 2025, we've seen material prices stabilize after years of volatility, but labor costs in Northern Colorado remains high due to demand.
                                This guide separates "Hard Costs" (sticks and bricks) from "Soft Costs" (fees and services), giving you a clear picture of the total investment required.
                            </p>
                        </div>

                        {/* Section 1: Cost Per Square Foot */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-stone-100 rounded-lg">
                                    <Ruler className="w-6 h-6 text-stone-800" />
                                </div>
                                <h2 className="text-2xl font-serif text-stone-900 m-0">1. Cost Per Square Foot Breakdown</h2>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b-2 border-stone-100">
                                            <th className="py-4 pr-4 font-semibold text-stone-900">Finish Level</th>
                                            <th className="py-4 px-4 font-semibold text-stone-900">Price Range (Per Sq. Ft.)</th>
                                            <th className="py-4 pl-4 font-semibold text-stone-900">What to Expect</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-stone-600 align-top">
                                        <tr className="border-b border-stone-50">
                                            <td className="py-6 pr-4 font-medium text-stone-900">Standard / Economy</td>
                                            <td className="py-6 px-4 font-semibold text-stone-800">$250 - $325</td>
                                            <td className="py-6 pl-4 text-sm">
                                                Laminate or basic quartz counters, LVP flooring, modular cabinets, asphalt shingles, standard appliances.
                                            </td>
                                        </tr>
                                        <tr className="border-b border-stone-50">
                                            <td className="py-6 pr-4 font-medium text-stone-900">Mid-Range / Custom</td>
                                            <td className="py-6 px-4 font-semibold text-stone-800">$325 - $450</td>
                                            <td className="py-6 pl-4 text-sm">
                                                Hardwood floors, custom cabinetry, quartz/granite, composite decking, metal roof accents, higher-end appliances.
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-6 pr-4 font-medium text-stone-900">Luxury / High-End</td>
                                            <td className="py-6 px-4 font-semibold text-stone-800">$450+</td>
                                            <td className="py-6 pl-4 text-sm">
                                                Architectural steel, premium natural stone, smart home integration, Wolf/SubZero appliances, complex structural engineering.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100 text-sm text-amber-900">
                                <strong>Note:</strong> These figures are for the <em>home only</em>. They generally do not include the cost of the land or heavy site work (wells, septic, long driveways).
                            </div>
                        </div>

                        {/* Section 2: Soft Costs */}
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-stone-100 rounded-lg">
                                    <FileText className="w-6 h-6 text-stone-800" />
                                </div>
                                <h2 className="text-2xl font-serif text-stone-900 m-0">2. The "Hidden" Soft Costs</h2>
                            </div>
                            <p className="text-stone-600 mb-6">
                                Many homeowners focus only on construction costs, but soft costs can add 15-20% to your total project budget. Do not overlook these.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                                    <h3 className="font-semibold text-stone-900 mb-4 flex items-center gap-2">
                                        <DollarSign className="w-4 h-4" /> Essential Soft Costs
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Architectural Plans</span>
                                            <span className="font-medium">$15k - $50k+</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Structural Engineering</span>
                                            <span className="font-medium">$3k - $8k</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Soils Test & Survey</span>
                                            <span className="font-medium">$2.5k - $4k</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Building Permits (NoCo)</span>
                                            <span className="font-medium">$15k - $40k</span>
                                        </li>
                                        <li className="flex justify-between text-sm">
                                            <span className="text-stone-600">Water/Sewer Tap Fees</span>
                                            <span className="font-medium">$30k - $80k+</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 flex flex-col justify-center">
                                    <div className="text-center">
                                        <p className="text-stone-500 text-sm mb-2">Estimated Soft Costs Total</p>
                                        <p className="text-3xl font-bold text-stone-900 mb-2">$65,000 - $150,000</p>
                                        <p className="text-xs text-stone-400">Depending on municipality and tap fees (Water taps in Northern Colorado can be significant).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Section 3: Sample Budgets */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-stone-100 rounded-lg">
                                    <Wallet className="w-6 h-6 text-stone-800" />
                                </div>
                                <h2 className="text-2xl font-serif text-stone-900 m-0">3. Sample Project Budgets</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Budget 1 */}
                                <div className="border border-stone-200 rounded-xl p-6 relative">
                                    <div className="absolute top-0 right-0 bg-stone-900 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>
                                    <h3 className="font-serif text-xl text-stone-900 mb-2">The "Empty Nester"</h3>
                                    <p className="text-sm text-stone-500 mb-6">2,400 Sq. Ft. Ranch | Mid-High Finish</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Construction</span>
                                            <span className="font-medium">$840,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Plan & Permits</span>
                                            <span className="font-medium">$65,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Site Prep</span>
                                            <span className="font-medium">$45,000</span>
                                        </div>
                                        <div className="border-t border-stone-100 pt-3 flex justify-between font-bold text-lg text-stone-900">
                                            <span>Total Est.</span>
                                            <span>$950,000</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Budget 2 */}
                                <div className="border border-stone-200 rounded-xl p-6">
                                    <h3 className="font-serif text-xl text-stone-900 mb-2">The "Forever Home"</h3>
                                    <p className="text-sm text-stone-500 mb-6">4,000 Sq. Ft. Two-Story | Luxury Finish</p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Construction</span>
                                            <span className="font-medium">$1,800,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Plan & Permits</span>
                                            <span className="font-medium">$85,000</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-stone-600">Site Prep</span>
                                            <span className="font-medium">$60,000</span>
                                        </div>
                                        <div className="border-t border-stone-100 pt-3 flex justify-between font-bold text-lg text-stone-900">
                                            <span>Total Est.</span>
                                            <span>$1,945,000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Conclusion / CTA */}
                        <div className="bg-stone-50 rounded-xl p-8 text-center border border-stone-200">
                            <h3 className="text-2xl font-serif text-stone-900 mb-4">Want a specific number for your project?</h3>
                            <p className="text-stone-600 mb-8 max-w-lg mx-auto">
                                Every site is unique. Schedule a free Discovery Session, and we can help you build a preliminary budget based on your specific land and vision.
                            </p>
                            <button
                                onClick={() => navigate('/booking')}
                                className="inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-lg font-medium hover:bg-stone-800 transition-colors"
                            >
                                Book a Discovery Session <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Spacer for bottom breathing room */}
            <div className="h-20"></div>
        </>
    );
};

export default CostGuide;
