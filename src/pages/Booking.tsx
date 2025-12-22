import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Booking = () => {
    const navigate = useNavigate();

    // Mock callback for when a user completes booking (in reality this would be handled by Calendly's event listener)
    const handleMockBookingComplete = () => {
        navigate('/thank-you');
    };

    return (
        <>
            <SEO
                title="Schedule Consultation | Homestead Home Builders"
                description="Book your initial project discovery call with our team."
                canonical="https://homesteadhomebuilders.com/booking"
            />

            <PageHeader
                title="Schedule Your Call"
                subtitle="Select a time that works best for your discovery session."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Inquiry', path: '/contact' },
                    { label: 'Booking', path: '/booking' }
                ]}
            />

            <section className="py-20 bg-surface">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden min-h-[600px] flex flex-col md:flex-row">

                        {/* Information Side */}
                        <div className="md:w-1/3 bg-primary p-10 text-white">
                            <Calendar className="w-12 h-12 text-accent mb-6" />
                            <h2 className="text-2xl font-serif font-bold mb-4">Discovery Session</h2>
                            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
                                <p>During this 30-minute call, we will:</p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>Review your project scope and vision</li>
                                    <li>Discuss land feasibility or lot acquisition</li>
                                    <li>Provide a preliminary budget range estimation</li>
                                    <li>Explain our design-build process</li>
                                </ul>
                                <div className="pt-8 border-t border-slate-700 mt-8">
                                    <p className="font-bold text-white mb-2">Preparing for our call:</p>
                                    <p>Please have any inspiration photos or lot surveys handy if available.</p>
                                </div>
                            </div>
                        </div>

                        {/* Calendar Side */}
                        <div className="md:w-2/3 p-4 flex flex-col items-center justify-center bg-slate-50 relative">
                            {/* Placeholder for Calendly/Cal.com Embed */}
                            <div className="text-center w-full max-w-md">
                                <div className="border-2 border-dashed border-slate-300 rounded-lg p-12 bg-white mb-6">
                                    <p className="text-slate-400 font-bold mb-4">[ Calendar Widget Loading... ]</p>
                                    <p className="text-xs text-slate-400">Integration: Embed Calendly or Cal.com iframe here.</p>
                                </div>

                                {/* Demo Button to simulate successful booking */}
                                <button
                                    onClick={handleMockBookingComplete}
                                    className="bg-accent text-primary px-8 py-3 font-bold uppercase tracking-widest rounded hover:bg-primary hover:text-white transition-colors shadow-lg"
                                >
                                    (Demo) Confirm Booking
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Booking;
