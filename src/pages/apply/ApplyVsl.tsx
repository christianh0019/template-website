import { useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import FunnelTracking from '../../components/FunnelTracking';
import { ApplyFooter, ApplyHeader } from '../../components/apply/ApplyChrome';
import ApplyModal from '../../components/apply/ApplyModal';
import CaseStudyCard from '../../components/apply/CaseStudyCard';
import CaseStudyModal from '../../components/apply/CaseStudyModal';
import CtaButton from '../../components/apply/CtaButton';
import GoogleReviews from '../../components/apply/GoogleReviews';
import VideoSlot from '../../components/apply/VideoSlot';
import { APPLY_FUNNEL } from '../../config/applyFunnel';
import { CASE_STUDIES, HAS_SAMPLE_STORIES } from '../../data/caseStudies';

const pill = 'inline-block rounded-full bg-[#2B70B6] px-3 py-1.5 sm:px-3.5 text-[10.5px] sm:text-[11px] md:text-xs font-bold uppercase tracking-[0.03em] sm:tracking-[0.06em] text-white whitespace-nowrap';
const sectionHeading = 'mt-5 text-[28px] md:text-4xl font-semibold tracking-[-0.02em] leading-tight text-[#0F172A]';

const TransparencyBadge = () => (
    <p className="inline-flex items-center gap-2.5 rounded-2xl sm:rounded-full border border-[#E3DDD1] bg-white px-4 py-2.5 text-left text-sm font-semibold text-[#0F172A] shadow-sm">
        <ShieldCheck size={18} strokeWidth={2.25} className="flex-shrink-0 text-[#2B70B6]" />
        100% transparency. Every bid shown, zero hidden markups.
    </p>
);

const FACTS = [
    { value: 'Since 1990', label: 'Building custom homes on the Front Range' },
    { value: 'Open book', label: 'Cost-plus pricing with every bid shown' },
    { value: 'Founder-led', label: 'Herman stays involved from sketch to walkthrough' },
];

const ApplyVsl = () => {
    // A link straight to /apply#apply opens the application on arrival.
    const [applyOpen, setApplyOpen] = useState(() => typeof window !== 'undefined' && window.location.hash === '#apply');
    const openApply = useCallback(() => setApplyOpen(true), []);
    const closeApply = useCallback(() => setApplyOpen(false), []);

    const [storyIndex, setStoryIndex] = useState<number | null>(null);
    const closeStory = useCallback(() => setStoryIndex(null), []);
    const nextStory = useCallback(() => setStoryIndex((i) => (i === null ? 0 : (i + 1) % CASE_STUDIES.length)), []);
    const applyFromStory = useCallback(() => {
        setStoryIndex(null);
        setApplyOpen(true);
    }, []);

    return (
        <div className="bg-[#FAF8F4] text-[#0F172A] antialiased">
            <SEO
                title="Apply to Build With Us | Homestead Home Builders"
                description="Custom homes across Northern Colorado since 1990, with open-book, cost-plus pricing and the founder involved from first sketch to final walkthrough."
                canonical="https://homesteadhomebuilders.com/apply"
            />
            {/* The case studies are placeholders until the real stories come in. */}
            {HAS_SAMPLE_STORIES && (
                <Helmet>
                    <meta name="robots" content="noindex" />
                </Helmet>
            )}
            <FunnelTracking />
            <ApplyHeader />

            {/* Hero and video */}
            <section className="pt-24 md:pt-[104px] pb-16 md:pb-20 px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className={pill}>For homeowners building in Northern Colorado</p>
                    <h1 className="mt-5 md:mt-6 text-[26px] leading-[1.25] md:text-[33px] md:leading-[1.22] lg:text-[36px] font-normal tracking-[-0.02em] text-[#0F172A] text-balance">
                        You already know what you want your home to be. The question is whether your builder will show you <strong className="font-bold">what it actually costs to build it.</strong>
                    </h1>
                </div>

                <div className="mt-8 max-w-[720px] mx-auto">
                    <VideoSlot
                        src={APPLY_FUNNEL.videos.vsl}
                        title="How Homestead Home Builders prices and builds"
                        caption="Herman Boonstra, Founder"
                        poster="/images/case-studies/loveland-design/00.webp"
                    />
                </div>

                <div className="mt-7 flex flex-col items-center gap-4">
                    <CtaButton onClick={openApply} />
                    <TransparencyBadge />
                </div>
            </section>

            {/* Case studies, one for every home on the portfolio page */}
            <section className="bg-white border-y border-[#E9E4DA] py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className={pill}>Our work</p>
                        <h2 className={`${sectionHeading} text-balance`}>What these homes actually cost to build</h2>
                        <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                            Every family here saw the real bids from every vendor and subcontractor before we broke ground. Open any home to see the photos, the timeline, and the real numbers behind it.
                        </p>
                    </div>
                    <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {CASE_STUDIES.map((study, i) => (
                            <CaseStudyCard key={study.id} study={study} onOpen={() => setStoryIndex(i)} />
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <CtaButton onClick={openApply} />
                    </div>
                </div>
            </section>

            {/* Who you'd build with */}
            <section className="py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <p className={pill}>Why Homestead</p>
                    <h2 className={`${sectionHeading} text-balance`}>You see every bid, and you work directly with the founder.</h2>
                    <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-600">
                        Homestead Home Builders has been designing and building custom homes across the Front Range since 1990. You see the actual bids and pricing from every vendor and subcontractor, with zero hidden markups, and you talk directly with Herman Boonstra, the founder, from first sketch to final walkthrough.
                    </p>
                </div>

                <div className="mt-12 md:mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 border-y border-[#E3DDD1] divide-y sm:divide-y-0 sm:divide-x divide-[#E3DDD1]">
                    {FACTS.map((fact) => (
                        <div key={fact.value} className="py-5 sm:py-7 px-4 text-center">
                            <p className="text-xl md:text-2xl font-semibold tracking-[-0.01em]">{fact.value}</p>
                            <p className="mt-1 text-sm text-slate-500">{fact.label}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <CtaButton onClick={openApply} />
                </div>
            </section>

            {/* Reviews */}
            <section className="bg-white border-y border-[#E9E4DA] py-16 md:py-24 px-4 md:px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto">
                        <p className={pill}>From our Google reviews</p>
                        <h2 className={sectionHeading}>What homeowners say after the build</h2>
                    </div>
                    <div className="mt-10 md:mt-12">
                        <GoogleReviews />
                    </div>
                    <div className="mt-12 text-center">
                        <CtaButton onClick={openApply} />
                    </div>
                </div>
            </section>

            <ApplyFooter />
            {storyIndex !== null && (
                <CaseStudyModal
                    study={CASE_STUDIES[storyIndex]}
                    next={CASE_STUDIES[(storyIndex + 1) % CASE_STUDIES.length]}
                    onClose={closeStory}
                    onNext={nextStory}
                    onApply={applyFromStory}
                />
            )}
            <ApplyModal open={applyOpen} onClose={closeApply} />
        </div>
    );
};

export default ApplyVsl;
