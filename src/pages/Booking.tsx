import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import FunnelHeader from '../components/FunnelHeader';
import FunnelFooter from '../components/FunnelFooter';
import SEO from '../components/SEO';
import FunnelTracking from '../components/FunnelTracking';

const Booking = () => {


    useEffect(() => {
        // Facebook Lead Event
        if (window.fbq) {
            window.fbq('track', 'Lead');
        }

        // Load the form embed script
        const script = document.createElement('script');
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <>
            <SEO
                title="Schedule Your Discovery Call | Homestead Home Builders"
                description="Book your complimentary Build Clarity Consultation."
                canonical="https://homesteadhomebuilders.com/booking"
            />
            <FunnelTracking />

            <FunnelHeader />

            <div className="min-h-screen bg-slate-50 flex flex-col pt-24">
                <div className="flex-grow pt-12 pb-20 px-6">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">

                            {/* Hero Section */}
                            <div className="text-center mb-12">
                                <div className="inline-flex items-center gap-2 bg-[#2B70B6]/5 border border-[#2B70B6]/20 px-4 py-2 rounded-full mb-8 animate-fadeIn">
                                    <CheckCircle size={16} className="text-[#2B70B6]" />
                                    <span className="text-sm font-bold text-slate-800">Application Received!</span>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                                    Let's Discuss Your Vision on a <br />
                                    <span className="text-[#2B70B6]">Free Discovery Call.</span>
                                </h1>
                                <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                                    This 15-minute conversation is the perfect next step to get your questions answered and see if we're the right team for your project. No pressure, just clarity.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left mb-12">
                                    {[
                                        "Review your project goals",
                                        "Discuss budget & timeline feasibility",
                                        "Outline next steps for your build"
                                    ].map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded border border-slate-100 shadow-sm">
                                            <div className="p-1 bg-[#2B70B6]/10 rounded-full">
                                                <CheckCircle size={16} className="text-[#2B70B6]" />
                                            </div>
                                            <span className="text-sm font-bold text-slate-700">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Booking Widget */}
                            <div className="bg-white rounded-lg shadow-xl border border-slate-100 overflow-hidden">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/booking/xPaYSZulboJxxCpHa9dY"
                                    style={{ width: '100%', border: 'none', overflow: 'hidden' }}
                                    scrolling="no"
                                    id="EQQGeUU49pxoPjjuBmng_1769023798226"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <FunnelFooter />
        </>
    );
};

export default Booking;
