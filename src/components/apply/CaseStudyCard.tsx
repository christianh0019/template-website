import { ArrowRight, Images, MapPin } from 'lucide-react';
import type { CaseStudy, CaseStudyStatus } from '../../data/caseStudies';

const STATUS_DOT: Record<CaseStudyStatus, string> = {
    Completed: 'bg-emerald-500',
    'Under construction': 'bg-[#2B70B6]',
    'In design': 'bg-amber-400',
};

export const StatusPill = ({ status, className = '' }: { status: CaseStudyStatus; className?: string }) => (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] text-[#0F172A] ${className}`}>
        <span className={`w-2 h-2 rounded-full ${STATUS_DOT[status]}`} />
        {status}
    </span>
);

export const FactsRow = ({ facts, size = 'sm' }: { facts: CaseStudy['facts']; size?: 'sm' | 'lg' }) => (
    <dl className="grid grid-cols-3 border-y border-[#E9E4DA] divide-x divide-[#E9E4DA]">
        {facts.map((fact) => (
            <div key={fact.label} className={size === 'lg' ? 'py-4 px-3 sm:px-5 first:pl-0' : 'py-3 px-2.5 sm:px-4 first:pl-0'}>
                <dt className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.06em] text-slate-500">{fact.label}</dt>
                <dd className={`mt-0.5 font-semibold tracking-[-0.01em] text-[#0F172A] tabular-nums ${size === 'lg' ? 'text-base sm:text-xl' : 'text-[14px] sm:text-base'}`}>
                    {fact.value}
                </dd>
            </div>
        ))}
    </dl>
);

// The whole card opens the story. The button's ::after stretches over the card,
// so there is one real control instead of a clickable div.
const CaseStudyCard = ({ study, onOpen }: { study: CaseStudy; onOpen: () => void }) => {
    const cover = study.photos[0];

    return (
        <article className="group relative flex flex-col bg-white border border-[#E9E4DA] rounded-xl overflow-hidden transition-shadow hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.35)]">
            <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                <img
                    src={cover.thumb}
                    srcSet={`${cover.thumb} 560w, ${cover.src} 1400w`}
                    sizes="(min-width: 768px) 560px, 100vw"
                    alt={`${study.title} in ${study.location}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <StatusPill status={study.status} className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm" />
                {study.photos.length > 1 && (
                    <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-[#0F172A]/75 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white">
                        <Images size={14} />
                        {study.photos.length} photos
                    </span>
                )}
            </div>

            <div className="flex flex-col flex-1 p-6 md:p-8">
                <p className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm font-medium text-slate-500">
                    <MapPin size={15} className="text-[#2B70B6]" />
                    {study.location}
                    <span className="text-slate-300">|</span>
                    {study.family}
                </p>
                <h3 className="mt-2 text-xl md:text-[22px] font-semibold tracking-[-0.01em] leading-snug text-[#0F172A] text-balance">
                    {study.title}
                </h3>
                <div className="mt-5">
                    <FactsRow facts={study.facts} />
                </div>
                <p className="mt-5 text-[15px] md:text-base leading-relaxed text-slate-600">{study.teaser}</p>
                <div className="mt-auto pt-6">
                    <button
                        type="button"
                        onClick={onOpen}
                        className="inline-flex items-center gap-2 font-semibold text-[#2B70B6] after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-[#2B70B6] focus-visible:after:rounded-xl"
                    >
                        {study.photos.length > 1 ? 'Read their story and see the photos' : 'Read their story'}
                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CaseStudyCard;
