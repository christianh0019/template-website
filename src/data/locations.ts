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
    }
];
