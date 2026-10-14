import { ArrowRight, ShieldCheck } from 'lucide-react';
import SEO from '../../components/SEO';
import FunnelTracking from '../../components/FunnelTracking';
import { ApplyFooter, ApplyHeader } from '../../components/apply/ApplyChrome';
import ApplyForm from '../../components/apply/ApplyForm';
import GoogleReviews from '../../components/apply/GoogleReviews';
import { ProjectCard } from '../../components/ProjectSpotlights';
import { SPOTLIGHT_PROJECTS } from '../../data/spotlightProjects';
import VideoSlot from '../../components/apply/VideoSlot';
import { APPLY_FUNNEL } from '../../config/applyFunnel';

const CTA_LABEL = 'Tell Us About Your Project';

const scrollToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const CtaButton = () => (
    <button
        type="button"
        onClick={scrollToApply}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-[#0F172A] px-7 py-4 md:px-9 md:py-5 text-base md:text-lg font-semibold text-white shadow-[0_14px_30px_-12px_rgba(15,23,42,0.6)] hover:bg-[#2B70B6] transition-colors"
    >
        {CTA_LABEL}
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
    </button>
);

const TransparencyBadge = () => (
    <div className="inline-flex items-center gap-3 rounded-full border border-[#E3DDD1] bg-white py-2 pl-2 pr-5 shadow-sm">
        <span className="w-10 h-10 flex-shrink-0 rounded-full bg-[#2B70B6] text-white flex items-center justify-center">
            <ShieldCheck size={20} strokeWidth={2.25} />
        </span>
        <span className="text-left leading-tight">
            <span className="block text-sm font-bold uppercase tracking-[0.12em] text-[#0F172A]">100% Transparency</span>
            <span className="block mt-0.5 text-xs text-slate-500">Every bid shown. Zero hidden markups.</span>
        </span>
    </div>
);

const FACTS = [
    { value: 'Since 1990', label: 'Building custom homes on the Front Range' },
    { value: 'Open book', label: 'Cost-plus pricing with every bid shown' },
    { value: 'Founder-led', label: 'Herman stays involved from sketch to walkthrough' },
];

const STEPS = [
    'Tell us about your project. It takes about two minutes.',
    'Pick a time that works for a call with our team.',
    'We walk through your land, your timeline, and a realistic budget together.',
];

const ApplyVsl = () => (
    <div className="bg-[#FAF8F4] text-[#0F172A] antialiased">
        <SEO
            title="Apply to Build With Us | Homestead Home Builders"
            description="Custom homes across Northern Colorado since 1990, with open-book, cost-plus pricing and the founder involved from first sketch to final walkthrough."
            canonical="https://homesteadhomebuilders.com/apply"
        />
        <FunnelTracking />
        <ApplyHeader />

        {/* Hero and video */}
        <section className="pt-24 md:pt-28 pb-16 md:pb-20 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="inline-flex items-center gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#2B70B6]">
                    <span className="hidden sm:block h-px w-8 bg-[#2B70B6]/40" />
                    For homeowners building a custom home in Northern Colorado
                    <span className="hidden sm:block h-px w-8 bg-[#2B70B6]/40" />
                </p>

                <h1 className="mt-5 md:mt-6 font-serif text-[27px] leading-[1.22] md:text-[36px] md:leading-[1.2] lg:text-[40px] text-[#0F172A]">
                    You already know what you want your home to be. The question is whether your builder will show you what it actually costs to build it.
                </h1>
            </div>

            <div className="mt-8 md:mt-10 max-w-3xl mx-auto">
                <VideoSlot
                    src={APPLY_FUNNEL.videos.vsl}
                    title="How Homestead Home Builders prices and builds"
                    caption="Herman Boonstra, Founder"
                />
            </div>

            <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-6">
                <CtaButton />
                <TransparencyBadge />
            </div>
        </section>

        {/* Recent projects */}
        <section className="bg-white border-y border-[#E9E4DA] py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2B70B6]">Our work</p>
                    <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">Recent project spotlights.</h2>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                        See how we turn vision into reality. Each home we build is custom-tailored to the land, the budget, and the family who lives there.
                    </p>
                </div>
                <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {SPOTLIGHT_PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <CtaButton />
                </div>
            </div>
        </section>

        {/* Who you'd build with */}
        <section className="py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2B70B6]">Why Homestead</p>
                <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">You see every bid, and you work directly with the founder.</h2>
                <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-slate-600">
                    Homestead Home Builders has been designing and building custom homes across the Front Range since 1990. You see the actual bids and pricing from every vendor and subcontractor, with zero hidden markups, and you talk directly with Herman Boonstra, the founder, from first sketch to final walkthrough.
                </p>
            </div>

            <div className="mt-12 md:mt-14 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 border-y border-[#E3DDD1] divide-y sm:divide-y-0 sm:divide-x divide-[#E3DDD1]">
                {FACTS.map((fact) => (
                    <div key={fact.value} className="py-5 sm:py-7 px-4 text-center">
                        <p className="font-serif text-xl md:text-2xl">{fact.value}</p>
                        <p className="mt-1 text-sm text-slate-500">{fact.label}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Application */}
        <section id="apply" className="scroll-mt-16 bg-white border-y border-[#E9E4DA] py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
                <div className="lg:sticky lg:top-28">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2B70B6]">Apply to build with us</p>
                    <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">Tell us about your project.</h2>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-600">
                        It takes about two minutes, and it's how we make sure the first conversation is worth your time.
                    </p>

                    {/* Desktop only, so on a phone the first question sits right under the heading. */}
                    <ol className="hidden lg:block mt-8 space-y-5">
                        {STEPS.map((text, i) => (
                            <li key={text} className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-[#2B70B6]/30 text-[#2B70B6] font-serif text-sm flex items-center justify-center">
                                    {i + 1}
                                </span>
                                <span className="pt-1 text-slate-700 leading-relaxed">{text}</span>
                            </li>
                        ))}
                    </ol>

                    <img
                        src="/images/spotlights/spotlight-5.jpg"
                        alt="A finished Homestead custom home with a timber-framed entry"
                        className="hidden lg:block mt-10 w-full aspect-[16/10] object-cover rounded-xl"
                        loading="lazy"
                    />
                </div>

                <ApplyForm />
            </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
                <div className="text-center max-w-2xl mx-auto">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2B70B6]">From our Google reviews</p>
                    <h2 className="mt-4 font-serif text-3xl md:text-4xl leading-tight">What homeowners say after the build.</h2>
                </div>
                <div className="mt-10 md:mt-12">
                    <GoogleReviews />
                </div>
                <div className="mt-12 text-center">
                    <CtaButton />
                </div>
            </div>
        </section>

        <ApplyFooter />
    </div>
);

export default ApplyVsl;
