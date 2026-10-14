import { Play } from 'lucide-react';

interface VideoSlotProps {
    /** Vimeo or YouTube embed URL. Empty shows the placeholder. */
    src: string;
    title: string;
    /** Caption on the placeholder, e.g. who is speaking. */
    caption?: string;
    poster?: string;
    size?: 'lg' | 'sm';
}

const VideoSlot = ({ src, title, caption, poster = '/images/spotlights/spotlight-5.jpg', size = 'lg' }: VideoSlotProps) => {
    const frame = 'relative w-full aspect-video overflow-hidden bg-[#0F172A] ' +
        (size === 'lg'
            ? 'rounded-xl shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)] ring-1 ring-black/5'
            : 'rounded-lg shadow-md ring-1 ring-black/5');

    if (src) {
        return (
            <div className={frame}>
                <iframe
                    src={src}
                    title={title}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                />
            </div>
        );
    }

    return (
        <div className={frame} role="img" aria-label={`${title}, video coming soon`}>
            <img src={poster} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-[#0F172A]/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className={(size === 'lg' ? 'w-16 h-16 md:w-20 md:h-20' : 'w-11 h-11') + ' rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur-sm flex items-center justify-center'}>
                    <Play className="text-white translate-x-0.5" size={size === 'lg' ? 28 : 18} fill="currentColor" />
                </div>
                <p className={(size === 'lg' ? 'mt-4 text-xs md:text-sm' : 'mt-3 text-[11px]') + ' font-semibold uppercase tracking-[0.2em] text-white/70'}>
                    Video coming soon
                </p>
            </div>
            {caption && size === 'lg' && (
                <p className="absolute bottom-4 left-5 right-5 text-left text-sm md:text-base text-white/90 font-medium">
                    {caption}
                </p>
            )}
        </div>
    );
};

export default VideoSlot;
