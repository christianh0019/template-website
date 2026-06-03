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

            <div className="min-h-screen bg-slate-50 flex flex-col pt-14">
                <div className="flex-grow pt-8 pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">

                            {/* Hero Section */}
                            <div className="text-center mb-10">
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5 leading-tight">
                                    Build Your Dream Home In Northern Colorado
                                </h1>

                                {/* Trust bullets */}
                                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-5">
                                    {[
                                        '100% On-Time & On-Budget',
                                        '100% Transparent Open Book Policy',
                                    ].map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#2B70B6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm md:text-base font-semibold text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Home images strip */}
                                <div className="grid grid-cols-3 gap-2 md:gap-3 mb-5 max-w-lg mx-auto">
                                    {['home1.png', 'home2.png', 'home3.png'].map((img) => (
                                        <div key={img} className="rounded-lg overflow-hidden h-20 md:h-28 shadow-sm">
                                            <img
                                                src={`/images/${img}`}
                                                alt="Custom home"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>

                                <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                                    Fill out this short survey to see if you qualify for a free consultation.
                                </p>
                            </div>

                            {/* Survey Container */}
                            <div id="application-survey" className="scroll-mt-16">
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
