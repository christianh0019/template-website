import React from 'react';
import { Helmet } from 'react-helmet-async';

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
    canonical = 'https://homesteadhomebuilders.com',
    type = 'website',
    name = 'Homestead Home Builders',
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
                    "name": "Homestead Home Builders",
                    "image": image,
                    "telephone": "970-775-3796",
                    "email": "info@homesteadhomebuilders.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "2444 E 13th St",
                        "addressLocality": "Loveland",
                        "addressRegion": "CO",
                        "postalCode": "80537",
                        "addressCountry": "US"
                    },
                    "url": canonical,
                    "priceRange": "$$$",
                    "areaServed": ["Loveland", "Fort Collins", "Boulder", "Weld County", "Larimer County"],
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
                        "https://www.facebook.com/homesteadhomebuilders",
                        "https://www.instagram.com/homesteadhomebuilders"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
