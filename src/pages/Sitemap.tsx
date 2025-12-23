
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';

const Sitemap = () => {
    const mainPages = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Process', path: '/process' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'Blog', path: '/blog' },
        { name: 'Strategic Partners', path: '/partners' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
    ];

    const services = [
        { name: 'Services Overview', path: '/services' },
        { name: 'New Custom Homes', path: '/services/new-construction' },
        { name: 'Whole Home Remodeling', path: '/services/remodeling' },
        { name: 'Basement Finishing', path: '/services/basement-finishing' },
        { name: 'Home Additions', path: '/services/additions' },
        { name: 'ADUs & Guest Houses', path: '/services/adu' },
    ];

    const locations = [
        { name: 'Locations Overview', path: '/locations' },
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
    ];

    const resources = [
        { name: 'Cost Guide', path: '/resources/cost-guide-optin' },
        { name: 'Booking', path: '/booking' },
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Sitemap', path: '/sitemap' },
    ];

    const Section = ({ title, links }: { title: string, links: { name: string, path: string }[] }) => (
        <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-slate-100 pb-2">{title}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {links.map((link) => (
                    <li key={link.path}>
                        <Link
                            to={link.path}
                            className="text-slate-600 hover:text-accent transition-colors flex items-center gap-2 group"
                        >
                            <span className="w-1.5 h-1.5 bg-accent/50 rounded-full group-hover:bg-accent transition-colors"></span>
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

    return (
        <>
            <SEO
                title="Sitemap | Homestead Home Builders"
                description="Easily navigate the Homestead Home Builders website. Find pages for services, portfolio, blog, and service areas."
                canonical="https://homesteadhomebuilders.com/sitemap"
            />

            <PageHeader
                title="Sitemap"
                subtitle="Complete overview of our website content."
                backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Sitemap', path: '/sitemap' }
                ]}
            />

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <Section title="Main Pages" links={mainPages} />
                    <Section title="Our Services" links={services} />
                    <Section title="Service Areas" links={locations} />
                    <Section title="Resources & Legal" links={resources} />
                </div>
            </section>
        </>
    );
};

export default Sitemap;
