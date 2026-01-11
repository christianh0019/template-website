export interface ProjectData {
    slug: string;
    title: string;
    category: string;
    location: string;

    clientName: string;
    clientBio: string; // "Meet The [Family]"
    motivation: string; // "Why Build A Custom Home?"
    lotSelection: string; // Finding the perfect lot
    designPhase: string; // Designing the open floor plan

    construction: {
        description: string; // Winter delays, updates
        images: string[];
    };

    moveIn: {
        description: string; // Kids happy, emotional moment
        videoThumbnail: string;
        videoUrl: string;
    };

    stats: {
        sqFt: string;
        duration: string;
        beds: string;
        baths: string;
    };
    mainImage: string;
    gallery: string[];

    review: {
        author: string;
        quote: string;
        rating: number;
    };
}

export const projects: ProjectData[] = [
    {
        slug: 'johnson-residence',
        title: "The Johnson Residence",
        category: "Custom Build",
        location: "Loveland, CO",
        clientName: "The Johnson Family",
        clientBio: "The Johnsons are a lively family of five who love the outdoors but hate the commute. With three growing kids and two dogs, they had simply outgrown their starter home.",
        motivation: "They bought their first house ten years ago, and for a long time, it was perfect. But as their family grew from one child to three, the walls started closing in. They wanted their kids to grow up with plenty of land to explore and space to run, but they didn't want to be so far out of town that they spent their lives in the car.",
        lotSelection: "We helped them scour the market for the perfect lot. After months of searching, we found a hidden gem: a 2-acre parcel with plenty of flat outdoor space for the kids to play, but still connected to city utilities so they wouldn't have to deal with a septic system or well.",
        designPhase: "Once the land was secured, we sat down to design a house that would actually work for their chaos. We created a wide-open floor plan so they could keep an eye on the kids from the kitchen, and we made sure every bedroom was big enough to handle desks, toys, and sleepovers.",
        construction: {
            description: "Construction kicked off in late fall, which meant we hit some classic Colorado winter delays. But instead of leaving them in the dark, we sent weekly video updates showing exactly what was happening—even when it was just snow removal. We turned the framing stage into a family event, letting the kids write their names on the studs of their new rooms.",
            images: [
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2070&auto=format&fit=crop"
            ]
        },
        moveIn: {
            description: "The most rewarding moment wasn't the final inspection—it was watching the kids sprint through the front door for the first time. seeing their eyes light up when they realized this massive new space was actually theirs. It was the start of a new chapter for the Johnson family.",
            videoThumbnail: "https://images.unsplash.com/photo-1516156008625-3a9d60bdd72e?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#"
        },
        stats: {
            sqFt: "4,200",
            duration: "14 Months",
            beds: "5",
            baths: "4.5"
        },
        mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
        gallery: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
        ],
        review: {
            author: "The Johnson Family",
            quote: "Homestead didn't just build a house; they built the backdrop for our children's childhood. We couldn't be happier.",
            rating: 5
        }
    },
    {
        slug: 'mountain-modern-retreat',
        title: "Mountain Modern Retreat",
        category: "Whole Home Remodel",
        location: "Boulder, CO",
        clientName: "Sarah & Mark",
        clientBio: "Sarah and Mark are empty nesters who moved from Chicago to retire in the mountains. They bought a dated 1980s cabin for the views but hated the dark, cramped interior.",
        motivation: "They wanted a sanctuary. After years of city living, they craved silence and nature, but they were used to modern amenities. The original cabin was drafty, inefficient, and felt isolated from the outdoors rather than connected to it.",
        lotSelection: "Since they already owned the home, the 'lot selection' was really about site analysis. We identified the best sightlines that were currently blocked by walls and planned how to open the home up to the Flatirons.",
        designPhase: "We gutted the interior layout completely. We designed a new great room with floor-to-ceiling glass and created a master suite that felt like a luxury hotel, giving them the retirement retreat they had earned.",
        construction: {
            description: "Renovating in the mountains is never easy. We found structural dry rot early on, which required a major pivot. We communicated the options clearly, and they chose to upgrade the structural beams, allowing us to vault the ceilings even higher.",
            images: [
                "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2070&auto=format&fit=crop"
            ]
        },
        moveIn: {
            description: "Sarah cried when she saw the view from the new kitchen for the first time. They told us it felt like they had moved into a completely different house, one that finally did justice to the incredible location.",
            videoThumbnail: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#"
        },
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
        review: {
            author: "Sarah & Mark J.",
            quote: "We were worried about managing a renovation from out of state, but the process was seamless. The result is better than we imagined.",
            rating: 5
        }
    },
    {
        slug: 'pearl-street-historic',
        title: "Pearl Street Historic Reno",
        category: "Restoration",
        location: "Old Town Fort Collins",
        clientName: "The Chen Family",
        clientBio: "The Chens loved the charm of Old Town but were bursting at the seams in their 2-bedroom bungalow. They were terrified of ruining the historic character with a clumsy addition.",
        motivation: "They didn't want to leave the neighborhood—they knew all their neighbors and loved walking to dinner. But with a new baby on the way, they needed more bedrooms and a modern kitchen.",
        lotSelection: "The challenge here was the lot size. It was a tight urban lot with strict historic preservation zoning. We had to find space where there seemingly was none.",
        designPhase: "We designed a 'pop-top' addition that was invisible from the street, preserving the curb appeal. We created a modern, open living area in the back that connected to the backyard, giving them the best of both worlds.",
        construction: {
            description: "Matching 100-year-old brick is an art form. We spent weeks sourcing reclaimed materials to ensure the new addition looked like it had always been there. We essentially built a new house inside the shell of the old one.",
            images: [
                "https://images.unsplash.com/photo-1599708153386-dc3d9d304ee1?q=80&w=2070&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
            ]
        },
        moveIn: {
            description: "Walking them through the finished home was emotional. They couldn't believe we had managed to add so much space without losing the soul of the house they loved.",
            videoThumbnail: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop",
            videoUrl: "#"
        },
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
        review: {
            author: "The Chen Family",
            quote: "Adding space to a historic home without ruining its character is an art form. Homestead truly are artists.",
            rating: 5
        }
    }
];
