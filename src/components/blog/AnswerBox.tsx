import { Info } from 'lucide-react';

interface AnswerBoxProps {
    title: string;
    content: string;
}

const AnswerBox = ({ title, content }: AnswerBoxProps) => {
    return (
        <div id="answer-box" className="bg-surface border-l-4 border-accent p-8 my-10 rounded-r-lg shadow-sm">
            <div className="flex items-start gap-4">
                <div className="p-2 bg-white rounded-full shadow-sm text-accent hidden sm:block">
                    <Info size={24} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-primary mb-3 font-serif">{title}</h3>
                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-medium">
                        <p dangerouslySetInnerHTML={{ __html: content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnswerBox;
