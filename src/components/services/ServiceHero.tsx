import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceHeroProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
    primaryCtaText?: string;
    primaryCtaLink?: string;
    secondaryCtaText?: string;
    secondaryCtaLink?: string;
}

const ServiceHero = ({
    title,
    subtitle,
    backgroundImage,
    primaryCtaText = "Start Your Project",
    primaryCtaLink = "/contact",
    secondaryCtaText = "View Portfolio",
    secondaryCtaLink = "/portfolio"
}: ServiceHeroProps) => {
    return (
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image - Absolute Positioned */}
            <div className="absolute inset-0 w-full h-full z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            </div>

            <div className="relative container mx-auto px-6 text-center z-10 max-w-4xl pt-20">
                <span className="inline-block py-2 px-4 bg-accent/90 text-primary font-bold uppercase tracking-widest text-sm mb-6 rounded-sm backdrop-blur-sm shadow-sm">
                    Premium Custom Home Builder
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl">
                    {title}
                </h1>
                <p className="text-lg md:text-2xl text-slate-100 mb-10 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to={primaryCtaLink}
                        className="px-8 py-4 bg-accent text-primary font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-sm shadow-xl flex items-center justify-center gap-2 group"
                    >
                        {primaryCtaText} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        to={secondaryCtaLink}
                        className="px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-colors rounded-sm text-center shadow-lg"
                    >
                        {secondaryCtaText}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
