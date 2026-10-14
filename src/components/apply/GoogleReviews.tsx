import { Star } from 'lucide-react';
import { GOOGLE_REVIEWS } from '../../config/applyFunnel';

const GoogleReviews = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {GOOGLE_REVIEWS.map((review) => (
            <figure key={review.name} className="bg-white rounded-xl border border-[#E9E4DA] p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                        <Star key={i} size={16} className="fill-[#E7A93B] text-[#E7A93B]" />
                    ))}
                </div>
                <blockquote className="mt-4 flex-grow text-slate-700 leading-relaxed">
                    "{review.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between text-sm">
                    <span className="font-semibold text-[#0F172A]">{review.name}</span>
                    <span className="text-slate-400">Google review</span>
                </figcaption>
            </figure>
        ))}
    </div>
);

export default GoogleReviews;
