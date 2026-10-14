import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MapPin, ShieldCheck, Star, X } from 'lucide-react';
import type { CaseStudy, CaseStudyPhoto } from '../../data/caseStudies';
import { FactsRow, StatusPill } from './CaseStudyCard';
import CtaButton from './CtaButton';

interface CaseStudyModalProps {
    study: CaseStudy;
    next: CaseStudy;
    onClose: () => void;
    onNext: () => void;
    onApply: () => void;
}

const Gallery = ({ photos, name }: { photos: CaseStudyPhoto[]; name: string }) => {
    const [index, setIndex] = useState(0);
    const count = photos.length;
    const photo = photos[index];
    const stripRef = useRef<HTMLDivElement>(null);
    const touchX = useRef<number | null>(null);

    const go = useCallback((step: number) => setIndex((i) => (i + step + count) % count), [count]);

    useEffect(() => {
        if (count < 2) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') go(1);
            if (e.key === 'ArrowLeft') go(-1);
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [count, go]);

    // Fetch the photos on either side so the arrows feel instant.
    useEffect(() => {
        if (count < 2) return;
        [index + 1, index - 1].forEach((i) => {
            new Image().src = photos[(i + count) % count].src;
        });
    }, [index, count, photos]);

    // Keep the active thumbnail in view. Scrolling the strip by hand, rather
    // than scrollIntoView, so the pop-up itself never jumps up or down.
    useEffect(() => {
        const strip = stripRef.current;
        const thumb = strip?.children[index] as HTMLElement | undefined;
        if (!strip || !thumb) return;
        strip.scrollTo({ left: thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2, behavior: 'smooth' });
    }, [index]);

    return (
        <div className="bg-[#0F172A]">
            <div
                className="relative aspect-[4/3] sm:aspect-[16/10] select-none"
                onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
                onTouchEnd={(e) => {
                    if (touchX.current === null) return;
                    const dx = e.changedTouches[0].clientX - touchX.current;
                    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
                    touchX.current = null;
                }}
            >
                <img
                    key={photo.src}
                    src={photo.src}
                    alt={`${name}, photo ${index + 1} of ${count}: ${photo.label}`}
                    className="absolute inset-0 w-full h-full object-contain"
                />
                {count > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={() => go(-1)}
                            aria-label="Previous photo"
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-slate-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <ChevronLeft size={22} />
                        </button>
                        <button
                            type="button"
                            onClick={() => go(1)}
                            aria-label="Next photo"
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-slate-800 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                        >
                            <ChevronRight size={22} />
                        </button>
                    </>
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/75 to-transparent px-4 sm:px-5 pt-12 pb-3 sm:pb-4 text-white">
                    <p className="text-sm sm:text-[15px] font-medium">{photo.label}</p>
                    {count > 1 && (
                        <p className="flex-shrink-0 rounded-full bg-black/45 px-2.5 py-1 text-xs font-semibold tabular-nums">
                            {index + 1} / {count}
                        </p>
                    )}
                </div>
            </div>

            {count > 1 && (
                <div ref={stripRef} className="relative flex gap-2 overflow-x-auto px-3 py-3 sm:px-4 [scrollbar-width:thin]">
                    {photos.map((p, i) => (
                        <button
                            key={p.src}
                            type="button"
                            onClick={() => setIndex(i)}
                            aria-label={`Photo ${i + 1}: ${p.label}`}
                            aria-current={i === index}
                            className={`flex-shrink-0 w-[72px] h-12 sm:w-24 sm:h-16 rounded-md overflow-hidden ring-2 transition ${i === index ? 'ring-white' : 'ring-transparent opacity-55 hover:opacity-100'}`}
                        >
                            <img src={p.thumb} alt="" loading="lazy" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

const label = 'text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500';

// One home's full story: every photo, how it went, the numbers, the timeline,
// and the family's words, ending on the application.
const CaseStudyModal = ({ study, next, onClose, onNext, onApply }: CaseStudyModalProps) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        const previousOverflow = document.body.style.overflow;
        const previousFocus = document.activeElement as HTMLElement | null;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);
        closeRef.current?.focus({ preventScroll: true });

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
            previousFocus?.focus({ preventScroll: true });
        };
    }, [onClose]);

    // "Next story" starts the reader back at the top of the new home.
    useEffect(() => {
        overlayRef.current?.scrollTo({ top: 0 });
    }, [study.id]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] overflow-y-auto bg-[#0F172A]/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={`${study.family}, ${study.location}`}
            onClick={onClose}
        >
            <div className="min-h-full flex items-start justify-center px-3 py-8 sm:px-6 sm:py-12">
                <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute -top-3 -right-1 sm:-top-4 sm:-right-4 z-10 w-10 h-10 rounded-full bg-white text-slate-700 shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                    >
                        <X size={20} />
                    </button>

                    <article className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                        <Gallery key={study.id} photos={study.photos} name={study.title} />

                        <div className="px-5 py-8 sm:px-8 md:px-12 md:py-12">
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                                <StatusPill status={study.status} className="bg-[#F3EFE7]" />
                                <p className="flex items-center gap-1.5 text-sm font-medium text-slate-500">
                                    <MapPin size={15} className="text-[#2B70B6]" />
                                    {study.location}
                                    <span className="text-slate-300">|</span>
                                    {study.family}
                                </p>
                            </div>
                            <h2 className="mt-4 text-[26px] md:text-[34px] font-semibold tracking-[-0.02em] leading-tight text-[#0F172A] text-balance">
                                {study.headline}
                            </h2>
                            <p className="mt-3 text-base md:text-lg text-slate-600">{study.title}</p>
                            <div className="mt-7">
                                <FactsRow facts={study.facts} size="lg" />
                            </div>

                            <div className="mt-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-10 lg:gap-12">
                                <div className="space-y-8">
                                    {study.story.map((section) => (
                                        <section key={section.heading}>
                                            <h3 className="text-lg md:text-xl font-semibold tracking-[-0.01em] text-[#0F172A]">{section.heading}</h3>
                                            {section.body.map((paragraph) => (
                                                <p key={paragraph.slice(0, 24)} className="mt-2.5 text-base md:text-[17px] leading-relaxed text-slate-700">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </section>
                                    ))}

                                    <section className="rounded-xl border border-[#2B70B6]/25 bg-[#2B70B6]/[0.06] p-5 md:p-7">
                                        <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold tracking-[-0.01em] text-[#0F172A]">
                                            <ShieldCheck size={22} className="flex-shrink-0 text-[#2B70B6]" />
                                            The open-book moment
                                        </h3>
                                        {study.openBook.map((paragraph) => (
                                            <p key={paragraph.slice(0, 24)} className="mt-2.5 text-base md:text-[17px] leading-relaxed text-slate-700">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </section>
                                </div>

                                <aside className="space-y-6">
                                    <div className="rounded-xl border border-[#E9E4DA] bg-[#FAF8F4] p-5 md:p-6">
                                        <p className={label}>The numbers</p>
                                        <dl className="mt-3">
                                            {study.numbers.map((row) => (
                                                <div key={row.label} className="flex items-start justify-between gap-4 py-3 border-b border-[#E9E4DA] last:border-0 last:pb-0">
                                                    <dt className="text-sm text-slate-600">
                                                        {row.label}
                                                        {row.note && <span className="block mt-0.5 text-xs text-slate-500">{row.note}</span>}
                                                    </dt>
                                                    <dd className={`text-right tabular-nums text-[#0F172A] ${row.strong ? 'text-lg font-bold' : 'text-[15px] font-semibold'}`}>
                                                        {row.value}
                                                    </dd>
                                                </div>
                                            ))}
                                        </dl>
                                        <p className="mt-4 text-xs text-slate-500">{study.numbersNote}</p>
                                    </div>

                                    <div className="rounded-xl border border-[#E9E4DA] p-5 md:p-6">
                                        <p className={label}>The timeline</p>
                                        <ol className="mt-4 ml-1.5 border-l-2 border-[#E3DDD1] space-y-4">
                                            {study.timeline.map((step) => (
                                                <li key={step.when + step.what} className="relative pl-5">
                                                    <span className={`absolute -left-[7px] top-1 w-3 h-3 rounded-full border-2 ${step.upcoming ? 'bg-white border-slate-300' : 'bg-[#2B70B6] border-[#2B70B6]'}`} />
                                                    <p className={`text-xs font-bold uppercase tracking-[0.06em] ${step.upcoming ? 'text-slate-400' : 'text-[#2B70B6]'}`}>{step.when}</p>
                                                    <p className={`mt-0.5 text-sm leading-snug ${step.upcoming ? 'text-slate-500' : 'text-slate-700'}`}>{step.what}</p>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                </aside>
                            </div>

                            <figure className="mt-12 rounded-2xl bg-[#0F172A] p-7 md:p-10 text-white">
                                <div className="flex gap-1" aria-label="5 out of 5 stars">
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <Star key={i} size={18} className="fill-[#E7A93B] text-[#E7A93B]" />
                                    ))}
                                </div>
                                <blockquote className="mt-4 text-lg md:text-[22px] leading-relaxed font-medium text-balance">
                                    &ldquo;{study.testimonial.quote}&rdquo;
                                </blockquote>
                                <figcaption className="mt-5 text-sm md:text-base">
                                    <span className="font-semibold">{study.testimonial.name}</span>
                                    <span className="text-white/60">, {study.testimonial.detail}</span>
                                </figcaption>
                            </figure>

                            <div className="mt-10 text-center">
                                <p className="mx-auto max-w-2xl text-lg md:text-xl font-semibold tracking-[-0.01em] text-[#0F172A] text-balance">
                                    You already know what you want your home to be. We'll show you what it actually costs to build it.
                                </p>
                                <div className="mt-5 flex justify-center">
                                    <CtaButton onClick={onApply} />
                                </div>
                                <button
                                    type="button"
                                    onClick={onNext}
                                    className="group mt-7 inline-flex items-center gap-2 text-sm md:text-base font-semibold text-slate-600 hover:text-[#2B70B6] transition-colors"
                                >
                                    Next story: {next.location}, {next.family}
                                    <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;
