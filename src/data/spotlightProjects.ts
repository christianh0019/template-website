// The home cards on the /application and /apply funnels.
export const SPOTLIGHT_PROJECTS = [
    {
        id: 5,
        title: "The Timberline Retreat",
        location: "Loveland, CO",
        sqft: "4,100 Sq. Ft.",
        description: "A stunning mountain-modern sanctuary blending rustic stone work with sophisticated architectural lines. Features grand entertainment spaces and a private primary wing.",
        image: "/images/spotlights/spotlight-5.jpg",
        tags: ["Mountain Modern", "Luxury Living"]
    },
    {
        id: 2,
        title: "The Stone Creek Estate",
        location: "Fort Collins, CO",
        sqft: "3,200 Sq. Ft.",
        description: "Timeless craftsman detailed with natural stone and timber accents. This family home includes a dedicated home office, a chef's kitchen, and a 4-car garage.",
        image: "/images/spotlights/spotlight-2.png",
        tags: ["Luxury Estate", "Craftsman"]
    },
    {
        id: 6,
        title: "The Black Forest Estate",
        location: "Monument, CO",
        sqft: "3,200 Sq. Ft.",
        description: "An expansive custom estate set amongst towering pines. Featuring a dramatic entry timber truss, stone wainscoting, and a detached workshop.",
        image: "/images/spotlights/spotlight-6.png",
        tags: ["Custom Estate", "Timber Frame"],
        status: "Under Construction"
    },
    {
        id: 3,
        title: "The Mountain View Modern",
        location: "Larimer County, CO",
        sqft: "4,500 Sq. Ft.",
        description: "A striking contemporary walk-out maximizing mountain views. Floor-to-ceiling windows, steel accents, and a multi-level deck define this architectural statement.",
        image: "/images/spotlights/spotlight-3.png",
        tags: ["Contemporary", "Walk-out"],
        status: "Under Construction"
    },
    {
        id: 4,
        title: "The Prairie Horizon",
        location: "Severance, CO",
        sqft: "2,800 Sq. Ft.",
        description: "Efficient luxury on acreage. This plan balances budget and style with durable LVP flooring, quartz countertops, and a highly efficient HVAC system.",
        image: "/images/spotlights/spotlight-4.jpg",
        tags: ["Acreage Build", "Energy Efficient"]
    },
    {
        id: 1,
        title: "The Sagebrush Custom",
        location: "Wellington, CO",
        sqft: "2,400 Sq. Ft.",
        description: "A modern ranch designed for open-concept living. Features a vaulted great room, custom alder cabinetry, and an expansive covered patio perfect for Northern Colorado sunsets.",
        image: "/images/spotlights/spotlight-1.png",
        tags: ["Custom Build", "Ranch Style"]
    }
];

export type SpotlightProject = (typeof SPOTLIGHT_PROJECTS)[number];
