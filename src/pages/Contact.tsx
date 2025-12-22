import { Phone, Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Contact = () => {
    return (
        <>
            <SEO
                title="Contact Homestead Home Builders | Loveland & Fort Collins"
                description="Get in touch to discuss your custom home or remodeling project. Serving Loveland, Fort Collins, Windsor, and Boulder."
                canonical="https://homesteadhomebuilders.com/contact"
            />

            <PageHeader
                title="Contact Us"
                subtitle="Let's start the conversation about your dream home."
                backgroundImage="https://images.unsplash.com/photo-1516156008625-3a9d60da923c?q=80&w=1974&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Contact', path: '/contact' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Info */}
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-8">Get in Touch</h2>
                            <p className="text-lg text-slate-600 mb-12">
                                Whether you have a lot ready to build on, or are just starting to explore the possibilities, we'd love to hear from you.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="bg-surface p-3 rounded-full text-accent"><Phone size={24} /></div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Phone</h3>
                                        <a href="tel:970-555-0123" className="text-slate-600 hover:text-accent transition-colors">970-555-0123</a>
                                        <p className="text-sm text-slate-500 mt-1">Mon-Fri, 8am - 5pm MST</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-surface p-3 rounded-full text-accent"><Mail size={24} /></div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Email</h3>
                                        <a href="mailto:info@homesteadhomebuilders.com" className="text-slate-600 hover:text-accent transition-colors">info@homesteadhomebuilders.com</a>
                                        <p className="text-sm text-slate-500 mt-1">We typically reply within 24 hours.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-surface p-3 rounded-full text-accent"><MapPin size={24} /></div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg">Office</h3>
                                        <p className="text-slate-600">
                                            123 Construction Way, Suite 100<br />
                                            Loveland, CO 80538
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="mt-12 h-64 bg-slate-200 w-full rounded-sm overflow-hidden">
                                {/* Google Maps Embed Placeholder - using iframe for demo purposes */}
                                <iframe
                                    title="Office Location"
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195600.73977699!2d-105.1557929!3d40.4079549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876953047d89953f%3A0xe54c14777a83d7a8!2sLoveland%2C%20CO!5e0!3m2!1sen!2sus!4v1709325752251!5m2!1sen!2sus"
                                    allowFullScreen
                                />
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-surface p-8 md:p-12 rounded-lg shadow-sm">
                            <h3 className="text-2xl font-serif font-bold text-primary mb-6">Send Us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                        <input type="text" id="firstName" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent" placeholder="John" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                        <input type="text" id="lastName" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent" placeholder="(555) 123-4567" />
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-bold text-slate-700 mb-2">I'm Interested In</label>
                                    <select id="interest" className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent">
                                        <option>Custom Home Build</option>
                                        <option>Whole Home Remodel</option>
                                        <option>Basement Finish</option>
                                        <option>Addition</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Tell us about your project</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 border border-slate-300 rounded-sm focus:outline-none focus:border-accent" placeholder="Lot location, timeline, budget, etc."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white font-bold py-4 hover:bg-secondary transition-colors uppercase tracking-widest">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
