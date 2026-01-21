import { useRef } from 'react';
import ApplicationSurvey from '../components/ApplicationSurvey';
import { ArrowDown, Star } from 'lucide-react';
import SEO from '../components/SEO';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import PortfolioGallery from '../components/PortfolioGallery';

const Application = () => {
    const surveyRef = useRef<HTMLDivElement>(null);

    const scrollToSurvey = () => {
        surveyRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <SEO
                title="Partner Application | Homestead Home Builders"
                description="Apply to work with us on your custom home project."
                canonical="https://homesteadhomebuilders.com/application"
            />

            <FunnelHeader />

            <div className="min-h-screen bg-slate-50 flex flex-col pt-20"> {/* pt-20 to account for fixed header */}
                <div className="flex-grow pt-12 pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">

                            {/* Hero Section */}
                            <div className="text-center mb-16">
                                <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-100 px-4 py-2 rounded-full mb-8 animate-fadeIn">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm font-bold text-slate-800">Rated 4.9/5 by Homeowners</span>
                                </div>

                                <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
                                    Build Your Dream Home <br />
                                    <span className="text-accent">Without The Stress.</span>
                                </h1>
                                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                                    We accept a limited number of custom builds each year to ensure the highest quality.
                                    Complete the quick survey below to see if we're the right fit for your vision.
                                </p>

                                <button
                                    onClick={scrollToSurvey}
                                    className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest hover:text-accent transition-colors"
                                >
                                    Start Application <ArrowDown size={20} className="animate-bounce" />
                                </button>
                            </div>

                            {/* Survey Container */}
                            <div ref={surveyRef} className="scroll-mt-32"> {/* Increased scroll margin for header */}
                                <ApplicationSurvey />
                            </div>

                            {/* Social Proof / Trust Section */}
                            <div className="mt-24 pt-12 border-t border-slate-200 text-center">
                                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-8">Trusted Suppliers & Partners</p>
                                <div className="flex flex-wrap justify-center gap-8 opacity-50 grayscale">
                                    {/* Placeholders for partner logos - using text for now to be cleaner */}
                                    <div className="font-serif font-bold text-xl text-slate-400">Pella Windows</div>
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
                    <PortfolioGallery />
                </div>
            </div>

            <FunnelFooter />
        </>
    );
};

export default Application;
