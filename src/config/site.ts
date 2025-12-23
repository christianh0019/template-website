
export const SITE_CONFIG = {
    name: "Homestead Home Builders",
    shortName: "Homestead", // Used in tighter spaces or mobile if needed
    tagline: "Northern Colorado's Premier Custom Home Builder",
    description: "Family-owned custom home builder serving Northern Colorado since 1990. specialized in luxury custom homes, whole-home remodeling, and additions.",
    foundingYear: 1990,
    contact: {
        phone: "(970) 775-3796",
        phoneHref: "tel:9707753796",
        email: "info@homesteadhomebuilders.com",
        address: {
            street: "2444 E 13th St",
            city: "Loveland",
            state: "CO",
            zip: "80537",
            mapLink: "https://maps.google.com/?q=2444+E+13th+St,+Loveland,+CO+80537" // Placeholder google maps link
        }
    },
    socials: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
    },
    serviceAreas: [
        { name: "Loveland", path: "/locations/loveland" },
        { name: "Fort Collins", path: "/locations/fort-collins" },
        { name: "Windsor", path: "/locations/windsor" },
        { name: "Boulder", path: "/locations/boulder" },
        { name: "Greeley", path: "/locations/greeley" },
        { name: "Longmont", path: "/locations/longmont" },
        { name: "Timnath", path: "/locations/timnath" },
        { name: "Wellington", path: "/locations/wellington" },
        { name: "Berthoud", path: "/locations/berthoud" },
        { name: "Mead", path: "/locations/mead" },
        { name: "Erie", path: "/locations/erie" },
    ],
    services: [
        { name: "New Custom Homes", path: "/services/new-construction" },
        { name: "Whole Home Remodeling", path: "/services/remodeling" },
        { name: "Basement Finishing", path: "/services/basement-finishing" },
        { name: "Home Additions", path: "/services/additions" },
        { name: "ADUs & Guest Houses", path: "/services/adu" },
    ]
};
