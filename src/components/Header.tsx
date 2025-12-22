import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <img src="/logo.png" alt="Homestead Home Builders" className="h-12 w-auto" />
                    <div className="hidden lg:block text-primary font-serif font-bold leading-tight">
                        <span className="block text-xl">HOMESTEAD</span>
                        <span className="block text-sm tracking-widest text-secondary">HOME BUILDERS</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-slate-600 font-bold uppercase tracking-wide text-sm hover:text-secondary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="tel:9707753796"
                        className="flex items-center gap-2 px-6 py-2 bg-primary text-white font-bold rounded hover:bg-secondary transition-colors"
                    >
                        <Phone size={18} />
                        970.775.3796
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-slate-100 absolute w-full">
                    <div className="flex flex-col p-6 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-slate-900 font-bold block"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="block text-center bg-secondary text-white py-3 font-bold rounded"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
