import { ArrowRight } from 'lucide-react';

export const CTA_LABEL = 'Tell Us About Your Project';

// The one button that opens the application, used down the page and at the
// end of every case study.
const CtaButton = ({ onClick }: { onClick: () => void }) => (
    <button
        type="button"
        onClick={onClick}
        className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-[#0F172A] px-7 py-4 md:px-9 md:py-5 text-base md:text-lg font-semibold text-white shadow-[0_14px_30px_-12px_rgba(15,23,42,0.6)] hover:bg-[#2B70B6] transition-colors"
    >
        {CTA_LABEL}
        <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
    </button>
);

export default CtaButton;
