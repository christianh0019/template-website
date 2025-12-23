
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import PremiumPortfolio from '../components/PremiumPortfolio';
import PortfolioGallery from '../components/PortfolioGallery';
import { ArrowDown } from 'lucide-react';

const Portfolio = () => {
    return (
        <>
            <SEO
                title="Luxury Custom Home Portfolio | Homestead"
                description="Explore our showcased projects and visual gallery. Deep dives into custom builds, renovations, and historic restorations in Northern Colorado."
                canonical="https://homesteadhomebuilders.com/portfolio"
            />

            <PageHeader
                title="Our Work"
                subtitle="From concept to completion, every home tells a unique story."
                backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Portfolio', path: '/portfolio' }
                ]}
            />

            {/* Section 1: Deep Dives / Case Studies */}
            <div className="py-24 bg-white relative">
                <div className="container mx-auto px-6 mb-16 text-center max-w-3xl">
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm block mb-4">Case Studies</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                        Featured Project Deep Dives
                    </h2>
                    <p className="text-lg text-slate-600">
                        Go behind the scenes. Explore the challenges we faced, the solutions we engineered, and the detailed specs of our most iconic builds.
                    </p>
                </div>

                <PremiumPortfolio showViewAll={false} />

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-slate-400">
                    <span className="text-xs uppercase tracking-widest">More Photos</span>
                    <ArrowDown className="animate-bounce" />
                </div>
            </div>

            {/* Section 2: Visual Gallery (Masonry) */}
            <PortfolioGallery />
        </>
    );
};

export default Portfolio;
