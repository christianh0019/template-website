import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const FunnelHeader = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 h-20">
            <div className="container mx-auto px-6 h-full flex items-center justify-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary text-white p-2 rounded transform group-hover:bg-accent transition-colors duration-300">
                        <Home size={24} />
                    </div>
                    <span className="font-serif text-2xl font-bold text-primary tracking-tight group-hover:text-accent transition-colors duration-300">
                        Homestead
                    </span>
                </Link>
            </div>
        </header>
    );
};

export default FunnelHeader;
