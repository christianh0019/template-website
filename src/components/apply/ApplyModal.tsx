import { useEffect } from 'react';
import { X } from 'lucide-react';
import ApplyForm from './ApplyForm';

interface ApplyModalProps {
    open: boolean;
    onClose: () => void;
}

// The application only ever shows in this pop-up. It stays mounted while
// closed, so someone who closes it halfway comes back to the step they left.
const ApplyModal = ({ open, onClose }: ApplyModalProps) => {
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [open, onClose]);

    return (
        <div
            className={`fixed inset-0 z-[100] overflow-y-auto bg-[#0F172A]/80 backdrop-blur-sm ${open ? '' : 'hidden'}`}
            role="dialog"
            aria-modal="true"
            aria-label="Apply to build with Homestead"
            onClick={onClose}
        >
            <div className="min-h-full flex items-start sm:items-center justify-center px-3 py-8 sm:px-6 sm:py-12">
                <div className="relative w-full max-w-xl" onClick={(e) => e.stopPropagation()}>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="absolute -top-3 -right-1 sm:-top-4 sm:-right-4 z-10 w-10 h-10 rounded-full bg-white text-slate-700 shadow-lg flex items-center justify-center hover:bg-slate-100 transition-colors"
                    >
                        <X size={20} />
                    </button>
                    <ApplyForm />
                </div>
            </div>
        </div>
    );
};

export default ApplyModal;
