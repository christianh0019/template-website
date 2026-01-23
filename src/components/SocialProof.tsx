import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
    {
        id: 1,
        text: "Homestead Home Builders didn't just build a house; they crafted our family's legacy. The attention to detail in the custom millwork and the seamless flow of the floor plan demonstrated their deep expertise.",
        author: "The Anderson Family",
        location: "Estes Park, CO",
        date: "2 months ago"
    },
    {
        id: 2,
        text: "We interviewed five different builders in Northern Colorado. Homestead was the only team that truly listened to our vision for a net-zero mountain modern home. delivered significantly under budget.",
        author: "Dr. Sarah Chen",
        location: "Boulder, CO",
        date: "1 month ago"
    },
    {
        id: 3,
        text: "Living out of state during the build was scary, but their weekly video updates and transparent communication made us feel like we were on site every day. The finished basement is our favorite part!",
        author: "Mark & Lisa Thompson",
        location: "Timnath, CO",
        date: "3 months ago"
    },
    {
        id: 4,
        text: "From the initial soil test to the final walk-through, the team was professional and educational. They explained every cost and timeline adjustment clearly. No surprises, just a beautiful home.",
        author: "James & Rebecca Miller",
        location: "Fort Collins, CO",
        date: "5 months ago"
    },
    {
        id: 5,
        text: "Our lot had significant slope challenges that other builders walked away from. Homestead engineered a brilliant walk-out foundation that actually improved our mountain views. Incredible problem solvers.",
        author: "The Rodriguez Family",
        location: "Loveland, CO",
        date: "6 months ago"
    },
    {
        id: 6,
        text: "The 'Build Clarity Consultation' isn't a sales gimmick—it saved us $40k before we even broke ground by identifying a better orientation for the solar gain. Highly recommend starting there.",
        author: "Michael O'Connor",
        location: "Windsor, CO",
        date: "2 weeks ago"
    },
    {
        id: 7,
        text: "We wanted a builder who prioritized energy efficiency. Our blower door test came back nearly passive-house levels. The quality of insulation and air sealing is unmatched in this area.",
        author: "Jennifer Wu",
        location: "Longmont, CO",
        date: "4 months ago"
    },
    {
        id: 8,
        text: "Building a custom home while pregnant was supposed to be a nightmare, but they handled everything. They even rushed the nursery completion so we could move in before our due date.",
        author: "The Bakers",
        location: "Greeley, CO",
        date: "8 months ago"
    },
    {
        id: 9,
        text: "Honest. That's the one word I'd use. When lumber prices spiked, they were open about it and helped us value engineer other areas to keep the total price flat. You can trust them.",
        author: "Robert Evans",
        location: "Berthoud, CO",
        date: "1 year ago"
    }
];

const SocialProof = () => {
    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white border border-[#2B70B6]/20 px-4 py-2 rounded-full mb-6 shadow-sm">
                        <div className="flex -space-x-2">
                            {[
                                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64"
                            ].map((src, i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
                                    <img src={src} alt="User" className="w-full h-full object-cover" />
                                </div>
                            ))}
                            <div className="w-8 h-8 rounded-full bg-[#2B70B6] border-2 border-white flex items-center justify-center text-white text-[10px] font-bold relative z-10">
                                99+
                            </div>
                        </div>
                        <span className="text-sm font-bold text-slate-700 ml-2">Join 100+ Happy Families</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
                        Don't Just Take Our Word For It.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We've built our reputation on transparency, quality, and trust. Here is what your neighbors are saying about their experience with Homestead.
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
                            <div className="flex gap-1 mb-6">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={18} className="fill-[#2B70B6] text-[#2B70B6]" />
                                ))}
                            </div>

                            <div className="flex-grow">
                                <Quote className="w-8 h-8 text-primary/10 mb-4" />
                                <p className="text-slate-700 leading-relaxed italic mb-6">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-primary">{review.author}</h4>
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mt-1">
                                            <CheckCircle size={12} className="text-[#2B70B6]" />
                                            Verified Homeowner &bull; {review.location}
                                        </div>
                                    </div>
                                    <span className="text-xs text-slate-400">{review.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="mt-16 text-center">
                <button
                    onClick={() => document.getElementById('application-survey')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-6 py-3 text-sm md:px-8 md:py-4 md:text-base bg-[#2B70B6] text-white font-bold uppercase tracking-widest hover:bg-white hover:text-[#2B70B6] border-2 border-transparent hover:border-[#2B70B6] transition-all shadow-lg hover:shadow-xl rounded-full"
                >
                    Book Your Build Clarity Consultation
                </button>
            </div>
        </section>
    );
};

export default SocialProof;
