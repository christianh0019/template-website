import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../config/site';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: 'website' | 'article';
    name?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical = 'https://homesteadhomebuilders.com', // This should technically be dynamic too, but requires base URL config if flexible
    type = 'website',
    name = SITE_CONFIG.name,
    image = '/logo.png'
}) => {
    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={name} />
            <meta property="og:url" content={canonical} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Schema.org for Google Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": SITE_CONFIG.name,
                    "image": image,
                    "telephone": SITE_CONFIG.contact.phone,
                    "email": SITE_CONFIG.contact.email,
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": SITE_CONFIG.contact.address.street,
                        "addressLocality": SITE_CONFIG.contact.address.city,
                        "addressRegion": SITE_CONFIG.contact.address.state,
                        "postalCode": SITE_CONFIG.contact.address.zip,
                        "addressCountry": "US"
                    },
                    "url": canonical,
                    "priceRange": "$$$",
                    "areaServed": SITE_CONFIG.serviceAreas.map(area => area.name),
                    "openingHoursSpecification": {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": [
                            "Monday",
                            "Tuesday",
                            "Wednesday",
                            "Thursday",
                            "Friday"
                        ],
                        "opens": "08:00",
                        "closes": "17:00"
                    },
                    "sameAs": [
                        SITE_CONFIG.socials.facebook,
                        SITE_CONFIG.socials.instagram
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
