import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface VideoSlotProps {
    /** A video file (.mp4), or a Vimeo or YouTube embed URL. Empty shows the placeholder. */
    src: string;
    title: string;
    /** Caption on the large slot, e.g. who is speaking. */
    caption?: string;
    poster?: string;
    /** Running time shown on the cover, e.g. "1:32". */
    length?: string;
    size?: 'lg' | 'sm';
}

const FILE = /\.(mp4|webm|mov)(\?|#|$)/i;

// Only one video plays at a time. Starting one pauses the rest.
const pauseOthers = (current: HTMLVideoElement) => {
    document.querySelectorAll('video').forEach((video) => {
        if (video !== current) video.pause();
    });
};

const PlayBadge = ({ size }: { size: 'lg' | 'sm' }) => (
    <div className={(size === 'lg' ? 'w-16 h-16 md:w-20 md:h-20' : 'w-12 h-12') + ' rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur-sm flex items-center justify-center'}>
        <Play className="text-white translate-x-0.5" size={size === 'lg' ? 28 : 20} fill="currentColor" />
    </div>
);

const VideoSlot = ({ src, title, caption, poster = '/images/case-studies/loveland-design/00.webp', length, size = 'lg' }: VideoSlotProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [started, setStarted] = useState(false);

    const frame = 'relative w-full aspect-video overflow-hidden bg-[#0F172A] ' +
        (size === 'lg'
            ? 'rounded-xl shadow-[0_30px_80px_-30px_rgba(15,23,42,0.55)] ring-1 ring-black/5'
            : 'rounded-lg shadow-md ring-1 ring-black/5');

    if (src && FILE.test(src)) {
        const start = () => {
            setStarted(true);
            videoRef.current?.play().catch(() => {
                // Autoplay refused. The native controls are showing now, so one more tap plays it.
            });
        };

        return (
            <div className={frame}>
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    title={title}
                    aria-label={title}
                    controls={started}
                    preload="none"
                    playsInline
                    onPlay={(e) => {
                        setStarted(true);
                        pauseOthers(e.currentTarget);
                    }}
                    className="absolute inset-0 w-full h-full object-contain bg-black"
                />
                {!started && (
                    <button
                        type="button"
                        onClick={start}
                        aria-label={`Play: ${title}`}
                        className="group absolute inset-0 w-full h-full text-left"
                    >
                        <img src={poster} alt="" loading={size === 'lg' ? 'eager' : 'lazy'} className="absolute inset-0 w-full h-full object-cover" />
                        <span className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-[#0F172A]/10 to-transparent transition-colors group-hover:from-[#0F172A]/80" />
                        <span className="absolute inset-0 flex items-center justify-center transition-transform group-hover:scale-105">
                            <PlayBadge size={size} />
                        </span>
                        {caption && size === 'lg' && (
                            <span className="absolute bottom-4 left-5 right-24 text-sm md:text-base text-white font-medium">{caption}</span>
                        )}
                        {length && (
                            <span className="absolute bottom-3 right-3 rounded-md bg-black/70 px-2 py-0.5 text-xs font-semibold tabular-nums text-white">
                                {length}
                            </span>
                        )}
                    </button>
                )}
            </div>
        );
    }

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
            <img src={poster} alt="" loading={size === 'lg' ? 'eager' : 'lazy'} className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-[#0F172A]/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <PlayBadge size={size} />
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
