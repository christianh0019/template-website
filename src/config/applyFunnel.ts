// Settings for the /apply VSL funnel. Swapping in a finished video, or
// changing the phone number or reviews, is a one-line change here.

// The five breakout videos and Jann's interview already live on
// homesteadhomebuilders.com/about. These are those same files.
const ABOUT_PAGE_VIDEOS = 'https://homesteadhomebuilders.com/wp-content/uploads';

export const APPLY_FUNNEL = {
    // Paste a video file URL (.mp4), a Vimeo player URL, or a YouTube embed
    // URL to replace a placeholder. Left empty, the page shows a framed
    // "coming soon" slot.
    videos: {
        vsl: '',

        // Thank-you page, in the order the copy doc puts them.
        dueDiligence: '',
        expectations: '',
        landFirst: `${ABOUT_PAGE_VIDEOS}/2026/08/Do-I-Need-Land-First_.mp4`,
        getStarted: `${ABOUT_PAGE_VIDEOS}/2026/08/How-To-Get-Started-with-Homestead.mp4`,
        designProcess: `${ABOUT_PAGE_VIDEOS}/2026/08/What-Does-Homestead_s-Design-Process-Look-Like_.mp4`,
        whoIsHomestead: `${ABOUT_PAGE_VIDEOS}/2026/08/Tell-me-about-Homestead-and-Their-Building-Experience.mp4`,
        whatSetsApart: `${ABOUT_PAGE_VIDEOS}/2026/08/What-Sets-Homestead-Apart-From-All-The-Other-Builders_.mp4`,
        cost: '',
        timeline: '',
        jannInterview: `${ABOUT_PAGE_VIDEOS}/2026/07/Jann-S-Interview.mp4`,
    },

    phone: '970.775.3796',
    phoneHref: 'tel:9707753796',

    // The GoHighLevel "Discovery Phone Call" calendar the custom picker books
    // into. api/slots.js and api/book.js hold the same ids server side.
    callLengthMinutes: 30,
    callName: 'Discovery Phone Call',
};

export const GOOGLE_REVIEWS = [
    {
        name: 'Calie M.',
        text: 'They did a beautiful job turning my basement into a second home. They were kind and professional and on time without incident.',
    },
    {
        name: 'Miles P.',
        text: 'Herman and his staff were the best. His office generated a detailed floor plan within days of the consultation and every trade was on time, courteous, efficient and performed brilliant, quality work.',
    },
    {
        name: 'Jo L.',
        text: 'He was so fast with communication and was always honest and upfront with cost. They finished everything in about 7 weeks. I was very impressed with the outcome.',
    },
    {
        name: 'Carol K.',
        text: 'If you are looking for honest work with a professional company I highly and strongly recommend Homestead Home Services for both new construction and remodeling.',
    },
];
