import { Phone } from 'lucide-react';
import { APPLY_FUNNEL } from '../../config/applyFunnel';

export const ApplyHeader = () => (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-white/95 backdrop-blur-sm border-b border-[#E9E4DA]">
        <div className="max-w-6xl mx-auto h-full px-4 md:px-6 flex items-center justify-center md:justify-between">
            <img src="/logo.png" alt="Homestead Home Builders" className="h-9 md:h-10 w-auto" />
            <a
                href={APPLY_FUNNEL.phoneHref}
                className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-[#2B70B6] transition-colors"
            >
                <Phone size={15} className="text-[#2B70B6]" />
                {APPLY_FUNNEL.phone}
            </a>
        </div>
    </header>
);

export const ApplyFooter = ({ question = 'Questions before applying? Call' }: { question?: string }) => (
    <footer className="bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-14 text-center">
            <p className="font-serif text-2xl md:text-3xl">Quality you can see, people you can trust.</p>
            <p className="mt-4 text-sm md:text-base text-white/70">
                Loveland, Fort Collins, Windsor, Cheyenne, and the entire Front Range.
            </p>
            <p className="mt-2 text-sm md:text-base text-white/70">
                {question}{' '}
                <a href={APPLY_FUNNEL.phoneHref} className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white">
                    {APPLY_FUNNEL.phone}
                </a>
                .
            </p>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs text-white/50">
                <span>&copy; {new Date().getFullYear()} Homestead Home Builders</span>
                <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
                <span className="inline-flex items-center rounded bg-white px-2 py-1">
                    <img src="/images/bbb-logo.png" alt="BBB Accredited Business" className="h-6 w-auto" />
                </span>
            </div>
        </div>
    </footer>
);
