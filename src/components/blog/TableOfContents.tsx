import { Link } from 'react-scroll';
import { List } from 'lucide-react';

interface TOCProps {
    items: { id: string; label: string }[];
}

const TableOfContents = ({ items }: TOCProps) => {
    if (!items || items.length === 0) return null;

    return (
        <div className="bg-white p-6 border border-slate-100 rounded-lg shadow-sm mb-8 sticky top-32">
            <div className="flex items-center gap-2 mb-4 text-primary font-bold uppercase tracking-widest text-xs border-b border-slate-100 pb-2">
                <List size={14} className="text-accent" />
                <span>Table of Contents</span>
            </div>
            <nav className="flex flex-col space-y-2">
                {items.map((item) => (
                    <Link
                        key={item.id}
                        to={item.id}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="text-sm text-slate-600 hover:text-accent cursor-pointer transition-colors block py-1 border-l-2 border-transparent hover:border-accent pl-3 -ml-3"
                    >
                        {item.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
};

export default TableOfContents;
