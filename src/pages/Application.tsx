import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ApplicationSurvey from '../components/ApplicationSurvey';
import SEO from '../components/SEO';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import ProjectSpotlights from '../components/ProjectSpotlights';
import SocialProof from '../components/SocialProof';

const CTA_LABEL = 'Book Your Free Planning Call';

const Application = () => {
    const [surveyOpen, setSurveyOpen] = useState(false);

    const openSurvey = () => setSurveyOpen(true);
    const closeSurvey = () => setSurveyOpen(false);

    // Lock the page behind the modal and let Escape close it
    useEffect(() => {
        if (!surveyOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeSurvey();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [surveyOpen]);

    const ctaClass = "px-6 py-3 text-sm md:px-8 md:py-4 md:text-base bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] border-2 border-transparent hover:border-[#2B70B6] transition-all shadow-lg hover:shadow-xl rounded-full";

    const checkmarks = [
        '100% Transparent Open Book Pricing',
        '5-Star Rating With 65+ Projects Completed',
    ];

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
                            <div className="text-center">
                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-5 leading-tight">
                                    We'll Help You Build Your Dream Home From Idea To Move-In Day In Northern Colorado
                                </h1>

                                {/* Trust bullets */}
                                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-8 mb-5">
                                    {checkmarks.map((item) => (
                                        <div key={item} className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#2B70B6] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm md:text-base font-semibold text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Home images strip */}
                                <div className="flex justify-center items-center mb-5 -space-x-5">
                                    <div className="w-28 md:w-36 h-20 md:h-24 rounded-xl overflow-hidden shadow-md rotate-[-5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home1.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-32 md:w-40 h-22 md:h-28 rounded-xl overflow-hidden shadow-xl relative z-10 flex-shrink-0">
                                        <img src="/images/home2.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                    <div className="w-28 md:w-36 h-20 md:h-24 rounded-xl overflow-hidden shadow-md rotate-[5deg] relative z-0 flex-shrink-0">
                                        <img src="/images/home3.png" alt="Custom home" className="w-full h-full object-cover object-top" />
                                    </div>
                                </div>

                                <p className="text-sm md:text-base text-slate-600 max-w-xl mx-auto leading-relaxed mb-8">
                                    Fill out this short 30 second survey to book your free planning call and receive your step-by-step build plan for your exact situation.
                                </p>

                                <button onClick={openSurvey} className={ctaClass}>
                                    {CTA_LABEL}
                                </button>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Portfolio Section */}
                <div className="bg-white border-t border-slate-200">
                    <ProjectSpotlights />
                    <div className="bg-white pb-20 text-center">
                        <button onClick={openSurvey} className={ctaClass}>
                            {CTA_LABEL}
                        </button>
                    </div>
                </div>

                {/* Social Proof */}
                <SocialProof ctaLabel={CTA_LABEL} onCtaClick={openSurvey} />
            </div>

            <FunnelFooter />

            {/* Survey Modal */}
            {surveyOpen && (
                <div
                    className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/70 backdrop-blur-sm px-4 py-10"
                    role="dialog"
                    aria-modal="true"
                    aria-label={CTA_LABEL}
                    onClick={closeSurvey}
                >
                    <div className="relative w-full max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={closeSurvey}
                            aria-label="Close"
                            className="absolute -top-3 -right-1 md:-top-4 md:-right-4 z-10 p-2 rounded-full bg-white text-slate-700 shadow-lg hover:bg-slate-100 transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <ApplicationSurvey />
                    </div>
                </div>
            )}
        </>
    );
};

export default Application;
