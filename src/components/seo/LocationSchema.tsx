
import { Helmet } from 'react-helmet-async';

interface LocationSchemaProps {
    name: string;
    description: string;
    image: string;
    telephone: string;
    address: {
        streetAddress: string;
        addressLocality: string;
        addressRegion: string;
        postalCode: string;
        addressCountry: string;
    };
    geo: {
        latitude: number;
        longitude: number;
    };
    url: string;
    sameAs?: string[];
    areaServed?: {
        name: string;
        wikidataId?: string; // e.g., "Q12345" for Loveland
    }[];
    priceRange?: string;
    hasMap?: string;
}

const LocationSchema = ({
    name,
    description,
    image,
    telephone,
    address,
    geo,
    url,
    sameAs = [],
    areaServed = [],
    priceRange = "$$$",
    hasMap
}: LocationSchemaProps) => {
    // Construct the AreaServed array with Wikidata sameAs links
    const areaServedSchema = areaServed.map(area => ({
        "@type": "City",
        "name": area.name,
        "sameAs": area.wikidataId ? `https://www.wikidata.org/wiki/${area.wikidataId}` : undefined
    }));

    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness", // Specific subtype
        "@id": `${url}#store`, // Persistent ID as per protocol
        "name": name,
        "description": description,
        "image": image,
        "url": url,
        "telephone": telephone,
        "priceRange": priceRange,
        "address": {
            "@type": "PostalAddress",
            ...address
        },
        "geo": {
            "@type": "GeoCoordinates",
            ...geo
        },
        "sameAs": sameAs,
        "areaServed": areaServedSchema,
        "hasMap": hasMap,
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
        "parentOrganization": {
            "@type": "Organization",
            "name": "Homestead Home Builders",
            "url": "https://homesteadhomebuilders.com"
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

export default LocationSchema;
