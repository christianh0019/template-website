import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
    const location = useLocation();

    const navigation = [
        {
            name: 'Services',
            path: '/services',
            children: [
                { name: 'New Construction', path: '/services/new-construction' },
                { name: 'Remodeling', path: '/services/remodeling' },
                { name: 'Basement Finishing', path: '/services/basement-finishing' },
                { name: 'Additions', path: '/services/additions' },
            ]
        },
        {
            name: 'Locations',
            path: '/locations',
            children: [
                { name: 'Loveland', path: '/locations/loveland' },
                { name: 'Fort Collins', path: '/locations/fort-collins' },
                { name: 'Windsor', path: '/locations/windsor' },
                { name: 'Boulder', path: '/locations/boulder' },
                { name: 'Greeley', path: '/locations/greeley' },
                { name: 'Longmont', path: '/locations/longmont' },
                { name: 'Timnath', path: '/locations/timnath' },
                { name: 'Wellington', path: '/locations/wellington' },
                { name: 'Berthoud', path: '/locations/berthoud' },
                { name: 'Mead', path: '/locations/mead' },
                { name: 'Erie', path: '/locations/erie' },
            ]
        },
        { name: 'Pricing', path: '/resources/cost-guide-optin' },
        { name: 'Portfolio', path: '/portfolio' },
        {
            name: 'Resources',
            path: '/resources', // Updated to clickable parent page
            children: [
                { name: 'About Us', path: '/about' },
                { name: 'Our Process', path: '/process' },
                { name: 'Blog', path: '/blog' },
                { name: 'Partners', path: '/partners' },
                { name: 'Careers', path: '/careers' },
            ]
        },
    ];

    const isActive = (path: string) => location.pathname === path;

    const toggleSubmenu = (name: string) => {
        setOpenSubmenu(openSubmenu === name ? null : name);
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-50 font-sans">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex flex-col items-start gap-0.5 z-50">
                    <img src="/logo.png" alt={SITE_CONFIG.name} className="h-12 w-auto" />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden xl:flex items-center gap-8">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group h-full"
                        >
                            <Link
                                to={item.path}
                                className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors py-4
                                    ${isActive(item.path) ? 'text-accent' : 'text-slate-600 hover:text-secondary'}`}
                            >
                                {item.name}
                                {item.children && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.children && (
                                <div className="absolute top-full left-0 w-64 bg-white shadow-xl border-t-2 border-accent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-left">
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            to={child.path}
                                            className="block px-6 py-3 text-slate-600 hover:bg-surface hover:text-primary font-medium text-sm border-b border-slate-50 last:border-none"
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        to="/contact"
                        className="flex items-center gap-2 px-6 py-3 bg-[#2B70B6] text-white font-bold rounded-full hover:bg-secondary transition-colors text-sm uppercase tracking-widest"
                    >
                        Request A Discovery Call
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-primary z-50 p-2"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out xl:hidden flex flex-col pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full overflow-y-auto px-6 pb-10">
                    {navigation.map((item) => (
                        <div key={item.name} className="border-b border-slate-100 py-2">
                            <div className="flex items-center justify-between min-h-[44px]">
                                <Link
                                    to={item.path}
                                    className="text-xl font-serif font-bold text-primary block flex-grow py-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                                {item.children && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleSubmenu(item.name);
                                        }}
                                        className="p-3 text-slate-500 hover:bg-slate-50 rounded-full transition-colors -mr-2"
                                        aria-label="Toggle Submenu"
                                    >
                                        <ChevronDown
                                            size={20}
                                            className={`transition-transform duration-300 ${openSubmenu === item.name ? 'rotate-180' : ''}`}
                                        />
                                    </button>
                                )}
                            </div>

                            {/* Mobile Submenu Items */}
                            {item.children && (
                                <div className={`pl-4 space-y-2 mt-1 border-l-2 border-accent/20 overflow-hidden transition-all duration-300 ${openSubmenu === item.name ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                                    {item.children.map((child) => (
                                        <Link
                                            key={child.name}
                                            to={child.path}
                                            className="block text-slate-600 font-medium py-2"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {child.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="mt-8 space-y-4">
                        <Link
                            to="/contact"
                            className="block text-center w-full bg-[#2B70B6] text-white py-4 font-bold uppercase tracking-widest rounded-full"
                            onClick={() => setIsOpen(false)}
                        >
                            Request A Discovery Call
                        </Link>
                        <a
                            href={SITE_CONFIG.contact.phoneHref}
                            className="flex items-center justify-center gap-2 w-full border-2 border-primary text-primary py-4 font-bold uppercase tracking-widest rounded-sm"
                        >
                            <Phone size={20} />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
