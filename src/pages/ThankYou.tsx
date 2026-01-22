import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import FunnelTracking from '../components/FunnelTracking';

const ThankYou = () => {
    useEffect(() => {
        if (window.fbq) {
            window.fbq('track', 'Schedule');
        }
    }, []);

    return (
        <>
            <SEO
                title="Thank You | Homestead Home Builders"
                description="We look forward to speaking with you about your custom home project."
                canonical="https://homesteadhomebuilders.com/thank-you"
            />
            <FunnelTracking />
            {/* Simple centered layout */}
            <div className="min-h-screen bg-surface flex items-center justify-center p-6">
                <div className="bg-white p-12 rounded-lg shadow-xl max-w-2xl text-center">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-600">
                        <CheckCircle size={40} />
                    </div>

                    <h1 className="text-4xl font-serif font-bold text-primary mb-6">You're All Set!</h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        Your consultation has been confirmed. We've sent a calendar invitation to your email with a Google Meet link.
                    </p>

                    <div className="border-t border-slate-100 pt-8 mt-8">
                        <p className="text-slate-500 mb-6">In the meantime, seek inspiration from our recent projects:</p>
                        <div className="flex gap-4 justify-center">
                            <Link
                                to="/portfolio"
                                className="px-8 py-3 bg-primary text-white font-bold uppercase tracking-widest hover:bg-accent transition-colors rounded-sm"
                            >
                                View Portfolio
                            </Link>
                            <Link
                                to="/"
                                className="px-8 py-3 border border-slate-300 text-slate-600 font-bold uppercase tracking-widest hover:border-primary hover:text-primary transition-colors rounded-sm"
                            >
                                Back Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ThankYou;
