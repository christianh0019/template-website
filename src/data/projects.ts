export interface ProjectData {
    slug: string;
    title: string;
    category: string;
    location: string;
    description: string;
    challenge: string;
    solution: string;
    stats: {
        sqFt: string;
        duration: string;
        beds: string;
        baths: string;
    };
    mainImage: string;
    gallery: string[];
    testimonial?: {
        videoThumbnail: string; // Placeholder for video thumbnail
        videoUrl: string;       // Placeholder for video URL (e.g., YouTube/Vimeo)
        quote: string;
        author: string;
    };
}

export const projects: ProjectData[] = [
    {
        slug: 'westlake-estate',
        title: "The Westlake Estate",
        category: "Custom Build",
        location: "Loveland, CO",
        description: "A modern interpretation of the classic lake house, designed to maximize views of Boyd Lake while providing privacy for the homeowners.",
        challenge: "The narrow, sloping lot required a unique structural approach to support the open-concept main floor while adhering to strict height restrictions.",
        solution: "We utilized a cantilevered steel frame foundation and a reverse-living floor plan, placing the primary living spaces on the second floor to capture the panoramic lake views.",
        stats: {
            sqFt: "4,200",
            duration: "14 Months",
            beds: "4",
            baths: "4.5"
        },
        mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1516156008625-3a9d60bdd72e?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#", // Placeholder
            quote: "Homestead didn't just build a house; they engineered a way for us to live on the lake in a way we never thought possible.",
            author: "The Anderson Family"
        }
    },
    {
        slug: 'mountain-modern-retreat',
        title: "Mountain Modern Retreat",
        category: "Whole Home Remodel",
        location: "Boulder, CO",
        description: "Transforming a dated 1980s cabin into a sustainable, energy-efficient modern sanctuary nestled in the foothills.",
        challenge: "The existing structure had poor insulation and a chopped-up layout that blocked natural light. Access to the site was also limited by steep terrain.",
        solution: "We gutted the interior to the studs, installed high-performance windows and insulation to reach Net-Zero ready standards, and opened up the south-facing wall to flood the home with light.",
        stats: {
            sqFt: "3,100",
            duration: "9 Months",
            beds: "3",
            baths: "3"
        },
        mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2187&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#",
            quote: "We were worried about managing a renovation from out of state, but the weekly video updates made us feel like we were on site every day.",
            author: "Sarah & Mark J."
        }
    },
    {
        slug: 'pearl-street-historic',
        title: "Pearl Street Historic Reno",
        category: "Restoration",
        location: "Old Town Fort Collins",
        description: "Preserving the charm of a 1920s bungalow while adding modern amenities and a discrete second-story addition.",
        challenge: "Strict historic preservation guidelines meant the street-facing facade could not be altered. We needed to add 1,000 sq ft without changing the curb appeal.",
        solution: "We designed a 'pop-top' addition set back from the front roofline, making it invisible from the street. We also restored original hardwood floors and millwork.",
        stats: {
            sqFt: "2,400",
            duration: "11 Months",
            beds: "4",
            baths: "3"
        },
        mainImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=2070&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfe1?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
        ],
        testimonial: {
            videoThumbnail: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#",
            quote: "Adding space to a historic home without ruining its character is an art form. Homestead truly are artists.",
            author: "The Chen Family"
        }
    }
];
