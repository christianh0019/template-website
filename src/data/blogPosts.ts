export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    category: "Cost Guide" | "Neighborhood Spotlight" | "Design Trends" | "Process";
    author: string;
    authorRole: string;
    date: string;
    readTime: string;
    image: string;
    youtubeVideoId?: string; // e.g. "dQw4w9WgXcQ"
    toc: { id: string; label: string }[];
    answerBox: {
        title: string;
        content: string;
    };
    content: {
        type: "h2" | "h3" | "p" | "ul" | "image" | "callout";
        text?: string;
        items?: string[];
        src?: string;
        alt?: string;
        id?: string;
    }[];
    relatedServices: string[]; // Slugs of related services
}

export const blogPosts: BlogPost[] = [
    {
        slug: "cost-to-build-custom-home-loveland-2025",
        title: "Cost to Build a Custom Home in Loveland, CO (2025 Guide)",
        description: "A transparent breakdown of hard costs, soft costs, and permit fees for building in Loveland. Updated for 2025 market rates.",
        category: "Cost Guide",
        author: "Michael Homestead",
        authorRole: "Founder & Lead Contractor",
        date: "December 15, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=2070&auto=format&fit=crop", // Construction site / blueprints
        youtubeVideoId: "dQw4w9WgXcQ", // Placeholder ID
        toc: [
            { id: "answer-box", label: "Quick Summary" },
            { id: "average-costs", label: "Average Cost Per Square Foot" },
            { id: "hard-vs-soft", label: "Hard Costs vs. Soft Costs" },
            { id: "permit-fees", label: "Loveland Permit & Tap Fees" },
            { id: "land-costs", label: "Land & Site Prep" },
            { id: "bottom-line", label: "The Bottom Line" }
        ],
        answerBox: {
            title: "Quick Answer: Loveland Custom Home Costs",
            content: "In 2025, the average cost to build a custom home in Loveland, CO ranges from **$300 to $450+ per square foot**. For a 3,000 sq. ft. home, expect a total budget between **$900,000 and $1.35M** (excluding land). Key drivers include tap fees (City vs. FCLWD), expansive soil engineering, and finish levels."
        },
        content: [
            {
                type: "p",
                text: "Building a custom home is likely the largest financial investment of your life. Yet, most builders in **Northern Colorado** obscure the real numbers until you've already signed a contract. At Homestead, we believe in radical transparency."
            },
            {
                type: "p",
                text: "Whether you're looking at a lakefront lot in **Boyd Lake** or acreage near **Carter Lake**, this guide breaks down exactly where your money goes when building in Loveland. We've updated these figures for the **2025 construction market** to give you a realistic baseline."
            },
            {
                type: "h2",
                id: "average-costs",
                text: "Average Cost Per Square Foot in 2025"
            },
            {
                type: "p",
                text: "While 'price per square foot' is a flawed metric due to massive variables in finish quality (marble vs. laminate), it serves as a useful starting point for initial feasibility studies."
            },
            {
                type: "ul",
                items: [
                    "**Entry-Level Custom ($280 - $325/sq.ft.)**: This typically includes standard finishes, asphalt shingle roofing, carpet or LVP flooring, and simple rooflines. These are often semi-custom plans adapted for your lot.",
                    "**Mid-Range Custom ($325 - $400/sq.ft.)**: Expect site-finished hardwood floors, quartz countertops, clad wood windows, stone masonry accents, and a finished 3-car garage.",
                    "**Luxury Custom ($400 - $550+/sq.ft.)**: The sky is the limit. Think structural steel elements, floor-to-ceiling glass walls, radiant in-floor heating, smart home integration, and premium landscaping packages."
                ]
            },
            {
                type: "h2",
                id: "hard-vs-soft",
                text: "Hard Costs vs. Soft Costs: The Hidden 20%"
            },
            {
                type: "p",
                text: "Many homeowners focus solely on the lumber and labor (Hard Costs) and forget the 'Soft Costs'—the professional fees required before a shovel hits the ground. In Loveland, soft costs can equate to **15-20% of your total project budget**."
            },
            {
                type: "h3",
                text: "Common Soft Costs to Budget For:"
            },
            {
                type: "ul",
                items: [
                    "**Architecture & Engineering**: $25,000 - $60,000+ (Crucial for complex soils)",
                    "**Soils Report (Geotechnical)**: $2,500 - $4,000",
                    "**Survey & Site Plan**: $3,000 - $5,000",
                    "**Interior Design Fees**: $150/hr or fixed flat fee packages"
                ]
            },
            {
                type: "h2",
                id: "permit-fees",
                text: "Navigating Loveland Permit & Tap Fees"
            },
            {
                type: "p",
                text: "One of the biggest financial surprises for new builders in Loveland is the cost of water. Depending on your specific lot location, you will either pay **City of Loveland Utilities** or **Fort Collins-Loveland Water District (FCLWD)** fees."
            },
            {
                type: "callout",
                text: "Pro Tip: FCLWD tap fees have risen significantly in recent years due to water scarcity infrastructure projects. Always verify the current raw water dedication requirements before closing on a lot."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
                alt: "Construction foundation pouring in Loveland"
            },
            {
                type: "h2",
                id: "land-costs",
                text: "Land & Site Preparation"
            },
            {
                type: "p",
                text: "Loveland's geology varies wildly. You might encounter rocky foothills out west (requiring expensive **rock excavation**) or clay-heavy plains in the east (requiring **over-excavation** and structural floors)."
            },
            {
                type: "p",
                text: "Site costs are **never** included in the base square footage price and can range from $50,000 to $150,000+ depending on the lot's slope and soil complexity. Always perform a soil test during your due diligence period."
            }
        ],
        relatedServices: ["new-construction", "remodeling"]
    },
    {
        slug: "building-in-old-town-fort-collins-guide",
        title: "The Insider's Guide to Building & Renovating in Old Town Fort Collins",
        description: "Navigating historic preservation reviews, alley houses, and modernizing 100-year-old foundations in Fort Collins' most coveted neighborhood.",
        category: "Neighborhood Spotlight",
        author: "Sarah Jenkins",
        authorRole: "Senior Architect",
        date: "November 28, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1513584685908-42c9e12d4490?q=80&w=2070&auto=format&fit=crop", // Historic brick house
        youtubeVideoId: "dQw4w9WgXcQ", // Placeholder
        toc: [
            { id: "answer-box", label: "Quick Summary" },
            { id: "historic-review", label: "Historic Preservation Review" },
            { id: "structural-challenges", label: "Common Structural Issues" },
            { id: "adues", label: "ADUs & Alley Houses" },
            { id: "design-philosophy", label: "Modernizing While Preserving" }
        ],
        answerBox: {
            title: "Quick Answer: Old Town Regulations",
            content: "Renovating in Old Town Fort Collins requires navigating the **Landmark Preservation Commission (LPC)**. Changes to street-facing facades are strictly regulated. However, rear additions and 'pop-tops' are often permitted if they are set back to minimize visual impact. Expect a **3-6 month approval timeline** for major alterations."
        },
        content: [
            {
                type: "p",
                text: "Old Town Fort Collins is widely considered the crown jewel of Northern Colorado living. The wide, tree-lined streets and walkability to **Old Town Square** restaurants make it highly desirable. However, the housing stock—mostly built between 1900 and 1940—presents unique challenges for modern living."
            },
            {
                type: "h2",
                id: "historic-review",
                text: "Navigating the Landmark Preservation Commission"
            },
            {
                type: "p",
                text: "If your home is over 50 years old, it likely falls under some level of historic review. The City's primary goal is to maintain the 'historic fabric' and streetscape of the neighborhood."
            },
            {
                type: "ul",
                items: [
                    "**Street Facade**: This is almost always protected. Changing original windows, removing porches, or altering the roofline requires detailed review and often public hearings.",
                    "**Siding Materials**: Original wood siding must often be repaired rather than replaced with modern vinyl or fiber cement, unless the deterioration is total.",
                    "**Additions**: Any new square footage must be 'subordinate' to the original structure. This usually means stepping back second-story additions or building strictly to the rear."
                ]
            },
            {
                type: "h2",
                id: "structural-challenges",
                text: "The 'Old Town Foundation' Problem"
            },
            {
                type: "p",
                text: "Many Old Town homes were built on **sandstone** or unreinforced concrete foundations. Over 100 years, these porous materials often crumble, settle, or allow significant moisture intrusion."
            },
            {
                type: "callout",
                text: "Warning: Before falling in love with a fixer-upper, get a structural engineer to inspect the basement. Underpinning a failing foundation can cost $30k - $50k+."
            },
            {
                type: "h2",
                id: "adues",
                text: "The Rise of the Alley House (ADU)"
            },
            {
                type: "p",
                text: "Fort Collins has some of the most progressive codes in the state regarding **Accessory Dwelling Units (ADUs)**. Old Town's unique alley network makes it perfect for carriage houses. These can provide essential rental income or space for aging parents."
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop",
                alt: "Modern carriage house ADU in Fort Collins"
            }
        ],
        relatedServices: ["remodeling", "additions", "new-construction"]
    }
];
