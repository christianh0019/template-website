import ApplicationSurvey from '../components/ApplicationSurvey';
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
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                                    We Help Northern Colorado Families Build Their Dream Home <span className="text-[#2B70B6]">On-Budget, On-Time, and For a Fair Price!</span>
                                </h1>
                                <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                                    Fill out this short survey to see if you qualify for a free consultation.
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
