import { Helmet } from 'react-helmet-async';

interface BlogSchemaProps {
    title: string;
    description: string;
    datePublished: string;
    authorName: string;
    image: string;
    url: string;
}

const BlogSchema = ({ title, description, datePublished, authorName, image, url }: BlogSchemaProps) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": image,
        "datePublished": datePublished,
        "dateModified": datePublished, // Ideally this would track updates
        "author": {
            "@type": "Person",
            "name": authorName,
            "url": "https://homesteadhomebuilders.com/about" // Linking to About page for Entity connection
        },
        "publisher": {
            "@type": "Organization",
            "name": "Homestead Home Builders",
            "logo": {
                "@type": "ImageObject",
                "url": "https://homesteadhomebuilders.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
        },
        "inLanguage": "en-US",
        "isAccessibleForFree": true,
        "articleBody": description // In a real scenario, this might need full body or summary
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default BlogSchema;
