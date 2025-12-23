import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div>
                        <Link to="/" className="inline-block mb-6 bg-white p-3 rounded-lg shadow-lg">
                            <img src="/logo.png" alt="Homestead Home Builders" className="h-12 w-auto" />
                        </Link>
                        <p className="mb-6 leading-relaxed">
                            Serving Weld, Larimer, and Boulder counties since 1990. We build quality custom homes tailored to your lifestyle and land.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" className="hover:text-white transition-colors"><Facebook size={24} /></a>
                            <a href="https://instagram.com" className="hover:text-white transition-colors"><Instagram size={24} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Menu</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors">
                                        {item === 'Home' ? 'Home' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Silo Links) */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services/new-construction" className="hover:text-secondary transition-colors">New Custom Homes</Link></li>
                            <li><Link to="/services/remodeling" className="hover:text-secondary transition-colors">Whole Home Remodeling</Link></li>
                            <li><Link to="/services/basement-finishing" className="hover:text-secondary transition-colors">Basement Finishing</Link></li>
                            <li><Link to="/services/additions" className="hover:text-secondary transition-colors">Home Additions</Link></li>
                            <li><Link to="/services/adu" className="hover:text-secondary transition-colors">ADUs & Guest Houses</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Areas */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="text-secondary flex-shrink-0" />
                                <span>2444 E 13th St<br />Loveland, CO 80537</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-secondary flex-shrink-0" />
                                <a href="tel:9707753796" className="hover:text-white">970.775.3796</a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-secondary flex-shrink-0" />
                                <a href="mailto:info@homesteadhomebuilders.com" className="hover:text-white">info@homesteadhomebuilders.com</a>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Service Areas</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Loveland, Fort Collins, Boulder, Greeley, Longmont, Windsor, Timnath, Wellington, Berthoud, Mead, Erie.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Menu</h3>
                        <ul className="space-y-3">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary transition-colors">
                                        {item === 'Home' ? 'Home' : item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services (Silo Links) */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Services</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services/new-construction" className="hover:text-secondary transition-colors">New Custom Homes</Link></li>
                            <li><Link to="/services/remodeling" className="hover:text-secondary transition-colors">Whole Home Remodeling</Link></li>
                            <li><Link to="/services/basement-finishing" className="hover:text-secondary transition-colors">Basement Finishing</Link></li>
                            <li><Link to="/services/additions" className="hover:text-secondary transition-colors">Home Additions</Link></li>
                            <li><Link to="/services/adu" className="hover:text-secondary transition-colors">ADUs & Guest Houses</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Areas */}
                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="text-secondary flex-shrink-0" />
                                <span>2444 E 13th St<br />Loveland, CO 80537</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="text-secondary flex-shrink-0" />
                                <a href="tel:9707753796" className="hover:text-white">970.775.3796</a>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="text-secondary flex-shrink-0" />
                                <a href="mailto:info@homesteadhomebuilders.com" className="hover:text-white">info@homesteadhomebuilders.com</a>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Service Areas</h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                                Loveland, Fort Collins, Boulder, Greeley, Longmont, Windsor, Timnath, Wellington, Berthoud, Mead, Erie.
                            </p>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p>&copy; {new Date().getFullYear()} Homestead Home Builders. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
