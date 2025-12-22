import { Helmet } from 'react-helmet-async';

interface ServiceSchemaProps {
    serviceName: string;
    description: string;
    areaServed: string[];
    image: string;
}

const ServiceSchema = ({ serviceName, description, areaServed, image }: ServiceSchemaProps) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "name": "Homestead Home Builders",
        "image": image,
        "description": description,
        "areaServed": areaServed.map(city => ({
            "@type": "City",
            "name": city
        })),
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Construction Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": serviceName,
                        "description": description
                    }
                }
            ]
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default ServiceSchema;
