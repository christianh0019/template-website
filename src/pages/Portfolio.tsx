import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import PremiumPortfolio from '../components/PremiumPortfolio';

const Portfolio = () => {
    return (
        <>
            <SEO
                title="Luxury Custom Home Portfolio | Homestead"
                description="Browse our gallery of custom homes, renovations, and additions in Northern Colorado. See our craftsmanship in Loveland, Fort Collins, and Boulder."
                canonical="https://homesteadhomebuilders.com/portfolio"
            />

            <PageHeader
                title="Our Portfolio"
                subtitle="A collection of our finest work across Northern Colorado."
                backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Portfolio', path: '/portfolio' }
                ]}
            />

            <div className="py-24 bg-white">
                <div className="container mx-auto px-6 mb-12 text-center max-w-3xl">
                    <p className="text-lg text-slate-600">
                        From modern farmhouses in Windsor to historic renovations in Old Town Fort Collins, each project represents our commitment to quality, integrity, and design excellence.
                    </p>
                </div>

                {/* Reusing the grid but without the 'View All' button */}
                <PremiumPortfolio showViewAll={false} />
            </div>
        </>
    );
};

export default Portfolio;
