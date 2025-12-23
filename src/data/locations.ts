export interface LocationData {
    slug: string;
    name: string;
    metaTitle: string;
    metaDescription: string;
    introTitle: string;
    introText: string;
    image: string;
    landmarks: string[];
}

export const locations: LocationData[] = [
    {
        slug: 'loveland',
        name: 'Loveland',
        metaTitle: 'Custom Home Builders Loveland, CO | Homestead',
        metaDescription: 'Premier custom home builder in Loveland, CO. specialized in lakefront properties and custom remodeling near Boyd Lake and Centerra.',
        introTitle: 'Building in the Sweetheart City',
        introText: 'Loveland offers a perfect blend of artistic culture and outdoor living. From lakefront properties at Boyd Lake to the historic charm of downtown, we understand the specific zoning and architectural nuances of building in Loveland.',
        image: 'https://images.unsplash.com/photo-1549643276-fbc2cbd0236f?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Boyd Lake', 'Devil\'s Backbone', 'Benson Sculpture Garden', 'The lakes at Centerra']
    },
    {
        slug: 'fort-collins',
        name: 'Fort Collins',
        metaTitle: 'Fort Collins Custom Home Builders | Homestead',
        metaDescription: 'Award-winning custom homes and renovations in Fort Collins. Serving Old Town, Horsetooth Reservoir, and surrounding luxury neighborhoods.',
        introTitle: 'Modern Living in Fort Collins',
        introText: 'As a hub of innovation and history, Fort Collins demands homes that are both cutting-edge and respectful of the local character. We specialize in Old Town renovations and custom builds near Horsetooth Reservoir.',
        image: 'https://images.unsplash.com/photo-1579632652768-6cb9dcf85912?q=80&w=1961&auto=format&fit=crop',
        landmarks: ['Old Town Square', 'Horsetooth Reservoir', 'CSU Campus', 'Poudre River Trail']
    },
    {
        slug: 'windsor',
        name: 'Windsor',
        metaTitle: 'New Home Builders Windsor, CO | Homestead',
        metaDescription: 'Luxury custom homes in Windsor, CO. Expert builders for Water Valley, RainDance, and Highland Meadows golf course communities.',
        introTitle: 'Luxury Golf Course Living',
        introText: 'Windsor is rapidly becoming the destination for luxury living in Northern Colorado. We have extensive experience building in premier communities like Water Valley and RainDance, maximizing views and lot potential.',
        image: 'https://images.unsplash.com/photo-1534942858547-06830689b9d1?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Water Valley', 'RainDance', 'Windsor Lake', 'Highland Meadows Golf Course']
    },
    {
        slug: 'boulder',
        name: 'Boulder',
        metaTitle: 'Custom Home Builders Boulder, CO | Homestead',
        metaDescription: 'Sustainable custom homes and modern renovations in Boulder. Navigate building codes and energy requirements with local experts.',
        introTitle: 'Sustainable Luxury in Boulder',
        introText: 'Building in Boulder requires a deep understanding of energy codes, land use regulations, and sustainable design. We deliver net-zero ready homes that capture the breathtaking Flatiron views.',
        image: 'https://images.unsplash.com/photo-1525287515124-7ee69b4c0de6?q=80&w=1951&auto=format&fit=crop',
        landmarks: ['The Flatirons', 'Pearl Street Mall', 'Chautauqua Park', 'Mapleton Hill']
    },
    {
        slug: 'greeley',
        name: 'Greeley',
        metaTitle: 'Custom Home Builders Greeley, CO | Homestead',
        metaDescription: 'Custom home building in Greeley, CO. Specializing in acreage properties and modern construction near UNC and the Poudre River Trail.',
        introTitle: 'Agricultural Heritage Meets Modern Living',
        introText: 'From rapidly expanding western suburbs to historic central neighborhoods, Greeley offers diverse building opportunities. We specialize in custom homes that embrace the open plains and agricultural roots of Weld County.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
        landmarks: ['UNC Campus', 'Bittersweet Park', 'Greeley Stampede', 'Poudre River Trail']
    },
    {
        slug: 'longmont',
        name: 'Longmont',
        metaTitle: 'Custom Home Builders Longmont, CO | Homestead',
        metaDescription: 'Expert custom builders in Longmont. Bridging the gap between Boulder luxury and Northern Colorado charm near Union Reservoir and Prospect.',
        introTitle: 'The Gateway to the Flatirons',
        introText: 'Longmont perfectly bridges the gap between tech-forward Boulder and the relaxed Northern Colorado plains. We build custom homes that reflect this balance of innovation and community.',
        image: 'https://images.unsplash.com/photo-1623298317883-6b70254edf31?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Union Reservoir', 'Sunset Golf Course', 'St. Vrain State Park', 'Prospect New Town']
    },
    {
        slug: 'timnath',
        name: 'Timnath',
        metaTitle: 'Luxury Home Builders Timnath, CO | Homestead',
        metaDescription: 'Timnath\'s premier custom builder. Exclusive homes in Harmony Club, WildWing, and riverside estates.',
        introTitle: 'Premier Riverside & Golf Communities',
        introText: 'One of the fastest-growing towns in Colorado, Timnath is synonymous with upscale living. We are experts in its premier master-planned communities like Harmony Club and WildWing.',
        image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?q=80&w=1974&auto=format&fit=crop',
        landmarks: ['Harmony Club', 'Timnath Reservoir', 'WildWing', 'Poudre River']
    },
    {
        slug: 'wellington',
        name: 'Wellington',
        metaTitle: 'Custom Home Builders Wellington, CO | Homestead',
        metaDescription: 'Building spacious custom homes in Wellington, CO. Large lots and small-town charm just minutes from Fort Collins.',
        introTitle: 'Small Town Charm, Big Possibilities',
        introText: 'Wellington offers more space and a tight-knit community feel just minutes from Fort Collins. Perfect for those seeking larger lots and a quieter pace of life.',
        image: 'https://images.unsplash.com/photo-1542853647-47ad77242390?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Boxelder Creek', 'Wellington Community Park', 'Centennial Park']
    },
    {
        slug: 'berthoud',
        name: 'Berthoud',
        metaTitle: 'Custom Home Builders Berthoud, CO | Homestead',
        metaDescription: 'Custom homes in the Garden Spot of Colorado. Building near TPC Colorado and Carter Lake in Berthoud.',
        introTitle: 'The Garden Spot of Colorado',
        introText: 'With its tree-lined streets and historic agriculture, Berthoud is a hidden gem. We build homes that honor its "Garden Spot" reputation, integrating outdoor living spaces with classic architecture.',
        image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Fickel Park', 'TPC Colorado', 'Carter Lake']
    },
    {
        slug: 'mead',
        name: 'Mead',
        metaTitle: 'Custom Home Builders Mead, CO | Homestead',
        metaDescription: 'Large lot custom building in Mead, CO. The perfect commuter location with expansive views and rural freedom.',
        introTitle: 'Crossroad of Community and Growth',
        introText: 'Situated perfectly for commuters to both Denver and Longmont, Mead offers expansive lots and a family-focused atmosphere.',
        image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
        landmarks: ['Mead Town Park', 'High Plains Raceway']
    },
    {
        slug: 'erie',
        name: 'Erie',
        metaTitle: 'Custom Home Builders Erie, CO | Homestead',
        metaDescription: 'Panoramic view homes in Erie, CO. Modern custom building with sweeping Front Range vistas.',
        introTitle: 'Elevated Living with Front Range Views',
        introText: 'Erie has transformed into a vibrant community with some of the best panoramic views in the Front Range. We specialize in hilltop custom builds that maximize these sweeping vistas.',
        image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop',
        landmarks: ['Erie Community Park', 'Colorado National Golf Club', 'Erie Lake']
    }
];
