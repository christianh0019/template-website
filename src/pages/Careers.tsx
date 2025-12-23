
import { HardHat, Heart, Award } from 'lucide-react';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Careers = () => {
    return (
        <>
            <SEO
                title="Careers at Homestead | Join Our Team"
                description="Build your legacy with Northern Colorado's premier custom home builder. We offer competitive pay, benefits, and a culture of craftsmanship."
                canonical="https://homesteadhomebuilders.com/careers"
            />

            <PageHeader
                title="Build Your Legacy"
                subtitle="Join a team that values craftsmanship, integrity, and safety above all else."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Resources', path: '#' },
                    { label: 'Careers', path: '/careers' }
                ]}
            />

            {/* Culture & Values */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-serif font-bold text-primary mb-6">More Than Just A Job</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            At Homestead, we don't just build houses; we build careers. We believe that if we take care of our people, they will take care of our clients. We are looking for dedicated craftsmen and professionals who take pride in their work.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: HardHat,
                                title: "Safety & Respect",
                                desc: "We maintain rigorous safety standards. Every team member has the authority to stop work if they see a hazard."
                            },
                            {
                                icon: Award,
                                title: "Craftsmanship",
                                desc: "We don't cut corners. We provide the time and resources needed to do the job right the first time."
                            },
                            {
                                icon: Heart,
                                title: "Family Culture",
                                desc: "We work hard, but we also respect your time with family. Weekend work is the exception, not the rule."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-surface p-8 rounded-lg border border-slate-100 text-center hover:shadow-lg transition-shadow">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-sm text-accent mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold font-serif text-primary mb-4">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-24 bg-primary text-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-12 text-center">Current Openings</h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Project Manager",
                                type: "Full-Time",
                                location: "Loveland / Northern Colorado",
                                desc: "Lead high-end custom builds from permit to closeout. Requires 5+ years experience in residential construction management."
                            },
                            {
                                title: "Site Superintendent",
                                type: "Full-Time",
                                location: "Field Based",
                                desc: "Daily on-site supervision of subcontractors, quality control, and schedule enforcement. proven track record of hitting milestones."
                            },
                            {
                                title: "Lead Carpenter",
                                type: "Full-Time",
                                location: "Field Based",
                                desc: "Perform rough and finish carpentry, install blocking, window sets, and manage labor crews. Tool allowance provided."
                            }
                        ].map((job, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold font-serif mb-2">{job.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-accent font-bold uppercase tracking-widest mb-4">
                                        <span>{job.type}</span>
                                        <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                                        <span>{job.location}</span>
                                    </div>
                                    <p className="text-slate-300 max-w-2xl">{job.desc}</p>
                                </div>
                                <a href="#career-form" className="px-8 py-3 border border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors whitespace-nowrap">
                                    Apply Now
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Employment Application Form */}
            <section id="career-form" className="py-24 bg-surface">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="bg-white p-10 rounded-lg shadow-xl border-t-4 border-primary">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-2 text-center">Employment Application</h2>
                        <p className="text-slate-600 text-center mb-10">Use the form below to apply. We review every application confidentially.</p>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Position Applied For</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                                    <option>Project Manager</option>
                                    <option>Site Superintendent</option>
                                    <option>Lead Carpenter</option>
                                    <option>General Laborer</option>
                                    <option>Office / Admin</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Years of Experience</label>
                                    <input type="number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Date Available</label>
                                    <input type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Paste Resume / Work History</label>
                                <textarea rows={6} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Please paste your resume text here or describe your relevant work history..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-accent text-primary font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors shadow-lg border-2 border-transparent hover:border-accent">
                                Submit Application
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Careers;
