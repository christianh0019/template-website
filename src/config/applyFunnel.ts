// Settings for the /apply VSL funnel. Swapping in a finished video, or
// changing the phone number or reviews, is a one-line change here.

export const APPLY_FUNNEL = {
    // Paste an embed URL (Vimeo player or YouTube embed) to replace a
    // placeholder. Left empty, the page shows a framed "coming soon" slot.
    videos: {
        vsl: '',
        expectations: '',
        transparency: '',
        timeline: '',
        changeOrders: '',
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
