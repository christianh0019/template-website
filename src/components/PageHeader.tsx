import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    breadcrumbs: { label: string; path: string }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage, breadcrumbs }) => {
    return (
        <section className="relative h-[400px] flex items-center justify-center bg-primary text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            <div className="absolute inset-0 bg-primary/70"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">{title}</h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-slate-200 mb-6 max-w-2xl mx-auto font-light">
                            {subtitle}
                        </p>
                    )}

                    {/* Breadcrumbs */}
                    <nav className="flex justify-center items-center gap-2 text-sm text-slate-300">
                        {breadcrumbs.map((crumb, index) => (
                            <React.Fragment key={index}>
                                <Link
                                    to={crumb.path}
                                    className={`hover:text-accent transition-colors ${index === breadcrumbs.length - 1 ? 'text-white font-bold pointer-events-none' : ''}`}
                                >
                                    {crumb.label}
                                </Link>
                                {index < breadcrumbs.length - 1 && <span className="text-accent">/</span>}
                            </React.Fragment>
                        ))}
                    </nav>
                </motion.div>
            </div>
        </section>
    );
};

export default PageHeader;
