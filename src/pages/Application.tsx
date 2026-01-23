import ApplicationSurvey from '../components/ApplicationSurvey';
import { Star } from 'lucide-react';
import SEO from '../components/SEO';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import ProjectSpotlights from '../components/ProjectSpotlights';
import SocialProof from '../components/SocialProof';

const Application = () => {
    return (
        <>
            <SEO
                title="Partner Application | Homestead Home Builders"
                description="Apply to work with us on your custom home project."
                canonical="https://homesteadhomebuilders.com/application"
            />

            <FunnelHeader />

            <div className="min-h-screen bg-slate-50 flex flex-col pt-24"> {/* pt-24 to account for fixed header (h-24) */}
                <div className="flex-grow pt-12 pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">

                            {/* Hero Section */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 bg-[#2B70B6]/5 border border-[#2B70B6]/20 px-4 py-2 rounded-full mb-8 animate-fadeIn">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} size={16} className="fill-[#2B70B6] text-[#2B70B6]" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-slate-800">Rated 4.9/5 by 100+ Homeowners</span>
                                </div>

                                <div className="font-script text-2xl md:text-4xl text-[#2B70B6] mb-4">Quality you can see, people you can trust</div>

                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                                    We Help Northern Colorado Families Build Their Dream Home <span className="text-[#2B70B6]">On-Budget, On-Time, and For a Fair Price!</span>
                                </h1>
                                <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                                    This short survey helps us understand your project and determine whether a free Clarity Consultation is the right next step. We only work with a limited number of homeowners each year to ensure every project receives focused attention, accurate planning, and clear communication.
                                </p>
                            </div>

                            {/* Survey Container */}
                            <div id="application-survey" className="scroll-mt-32"> {/* Increased scroll margin for header */}
                                <ApplicationSurvey />
                            </div>

                            {/* Social Proof / Trust Section */}
                            <div className="mt-24 pt-12 border-t border-slate-200 text-center">
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">Trusted Suppliers & Partners</p>
                                <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                                    {/* Placeholders for partner logos - using text for now to be cleaner */}
                                    <div className="font-serif font-bold text-xl text-slate-400">Marvin Windows</div>
                                    <div className="font-serif font-bold text-xl text-slate-400">Kohler</div>
                                    <div className="font-serif font-bold text-xl text-slate-400">James Hardie</div>
                                    <div className="font-serif font-bold text-xl text-slate-400">Sherwin Williams</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Portfolio Section */}
                <div className="bg-white border-t border-slate-200">
                    <ProjectSpotlights />
                    <div className="bg-white pb-20 text-center">
                        <button
                            onClick={() => document.getElementById('application-survey')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] border-2 border-transparent hover:border-[#2B70B6] transition-all shadow-lg hover:shadow-xl rounded-full"
                        >
                            Book Your Build Clarity Consultation
                        </button>
                    </div>
                </div>

                {/* Social Proof */}
                <SocialProof />
            </div>

            <FunnelFooter />
        </>
    );
};

export default Application;
