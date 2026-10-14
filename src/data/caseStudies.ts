// Case studies on /apply, one for every home on homesteadhomebuilders.com/portfolio,
// using only that page's photos (public/images/case-studies/<id>/).
//
// SAMPLE STORIES. Every family name, price, date, and quote below is invented
// as a placeholder until Herman sends the real ones. While any entry has
// `sample: true`, /apply tells search engines not to index it. Replace a story
// with the real one, then set `sample: false`.

export type CaseStudyStatus = 'Completed' | 'Under construction' | 'In design';

export interface CaseStudyPhoto {
    src: string;
    thumb: string;
    label: string;
}

export interface CaseStudy {
    id: string;
    sample: boolean;
    location: string;
    status: CaseStudyStatus;
    title: string;
    family: string;
    teaser: string;
    headline: string;
    facts: { label: string; value: string }[];
    photos: CaseStudyPhoto[];
    story: { heading: string; body: string[] }[];
    openBook: string[];
    numbers: { label: string; value: string; note?: string; strong?: boolean }[];
    numbersNote: string;
    timeline: { when: string; what: string; upcoming?: boolean }[];
    testimonial: { quote: string; name: string; detail: string };
}

// Builds a gallery from the numbered files in a folder. `stages` maps the first
// photo of each stage to its caption, so every photo after it shares the label.
const gallery = (id: string, count: number, stages: [number, string][]): CaseStudyPhoto[] =>
    Array.from({ length: count }, (_, i) => {
        const n = String(i).padStart(2, '0');
        const label = stages.filter(([start]) => i >= start).pop()?.[1] ?? '';
        return { src: `/images/case-studies/${id}/${n}.webp`, thumb: `/images/case-studies/${id}/${n}-sm.webp`, label };
    });

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: 'longmont',
        sample: true,
        location: 'Longmont, CO',
        status: 'Completed',
        title: 'A single-level home with a walkout for the grandkids',
        family: 'Greg and Dana W.',
        teaser: "Greg and Dana had three fixed bids and couldn't see inside any of them. With us, they saw every bid, and their final cost came in $36,000 over the first estimate, all from changes they asked for and signed.",
        headline: 'Three fixed bids, and not one of them showed what was inside.',
        facts: [
            { label: 'Size', value: '4,850 sq ft' },
            { label: 'Final cost', value: '$1,448,000' },
            { label: 'Build time', value: '11 months' },
        ],
        photos: gallery('longmont', 30, [
            [0, 'Design rendering'],
            [1, 'The finished home'],
            [8, 'Kitchen, bar, and fireplace'],
            [14, 'Bedrooms and baths'],
            [24, 'The walkout basement'],
        ]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    'Greg and Dana raised two kids in a two-story house in Erie. Once the kids moved out, the stairs got old fast. They wanted to build one home they would never have to leave.',
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    'They wanted everything they use each day on one level, with a big kitchen and a primary suite with a soaking tub. Downstairs, they wanted a walkout with a wet bar and plenty of room for five grandkids. They found a few acres east of Longmont with a clear view of the mountains.',
                ],
            },
            {
                heading: 'How it went',
                body: [
                    "Before they found us, they had three fixed bids from three builders. The bids were $180,000 apart, and none of them showed what the framing, the concrete, or the cabinets really cost. Greg said it felt like picking a number out of a hat.",
                    'Herman walked them through every bid we got from our vendors and subcontractors, line by line. They picked their cabinet maker and their stone mason after seeing three quotes for each. The build took 11 months, and they moved in during March 2025.',
                ],
            },
        ],
        openBook: [
            "Halfway through the build, Dana asked for a bigger window wall facing the mountains and a better range in the kitchen. We priced both changes from the supplier's actual quotes, and they signed off before anyone ordered a thing.",
            'Those two changes are the only reason the final cost came in $36,000 over the first estimate. There was nothing else on the bill they had not already seen.',
        ],
        numbers: [
            { label: 'First estimate, built from real bids', value: '$1,412,000' },
            { label: 'Changes they chose and signed', value: '+$36,000', note: 'Window wall and kitchen range' },
            { label: 'Final cost', value: '$1,448,000', strong: true },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land.',
        timeline: [
            { when: 'October 2023', what: 'First walk of the land with Herman' },
            { when: 'January 2024', what: 'Design done and every trade bid in hand' },
            { when: 'April 2024', what: 'Permits approved and ground broken' },
            { when: 'August 2024', what: 'Roof on and windows in' },
            { when: 'March 2025', what: 'Final walkthrough and move-in day' },
        ],
        testimonial: {
            quote: "We'd been handed a number three times and never shown where it came from. Herman showed us every bid, and when we changed something, we saw the price before anyone did the work. We moved in knowing exactly what our home cost.",
            name: 'Greg and Dana W.',
            detail: 'Moved in March 2025',
        },
    },
    {
        id: 'loveland',
        sample: true,
        location: 'Loveland, CO',
        status: 'Under construction',
        title: 'A foothills walkout they watched go up from Texas',
        family: 'Mark and Erin S.',
        teaser: "Mark and Erin are building from nearly 1,000 miles away. Weekly photos and a shared cost ledger mean they've known every number and every subcontractor by name since day one.",
        headline: 'Building from 1,000 miles away, without ever guessing what was going on.',
        facts: [
            { label: 'Size', value: '4,600 sq ft' },
            { label: 'Estimate', value: '$1,905,000' },
            { label: 'Move-in', value: 'Early 2027' },
        ],
        photos: gallery('loveland', 73, [
            [0, 'Design rendering'],
            [1, 'The lot, November 2025'],
            [3, 'Foundation, December 2025'],
            [14, 'Slab and floor system'],
            [20, 'Framing, January to March 2026'],
            [42, 'Windows and mechanicals, spring 2026'],
            [52, 'Stucco and stone, May 2026'],
            [58, 'Drywall and stone, June 2026'],
            [67, 'Tile and the safe room, summer 2026'],
            [70, 'Exterior finishes, October 2026'],
        ]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    'Mark grew up in Loveland, and Erin fell in love with the foothills on her first visit. After 15 years in Austin, they decided to move home with their two teenagers. The catch was that they would still be in Texas for most of the build.',
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    'They wanted a walkout on a sloped lot west of town, with big timber beams, stucco, and stone. They also wanted a safe room and a covered deck that looks right out at the hills.',
                ],
            },
            {
                heading: 'How it went',
                body: [
                    "Their biggest fear was hiring a builder they couldn't check on. So every Friday, they get a set of photos from the site and an updated cost ledger with every bill attached. They've watched the foundation, the framing, the stone, and the tile go in from their kitchen table in Austin.",
                    'Mark has met every subcontractor lead on a video call. When snow cost the framing crew two days in February, Herman told them that same afternoon, along with the new finish date.',
                ],
            },
        ],
        openBook: [
            'In March, the stone supplier raised the price of the rock Erin picked. Herman sent the new quote the day it came in, along with a lower cost stone that looks almost the same.',
            'They kept the stone they loved, and they knew the exact cost before they said yes. That one choice is most of the $34,300 they have added so far.',
        ],
        numbers: [
            { label: 'First estimate, built from real bids', value: '$1,905,000' },
            { label: 'Changes they chose and signed so far', value: '+$34,300', note: 'Stone upgrade and deck lighting' },
            { label: 'Projected final cost', value: '$1,939,300', strong: true },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land. Their ledger updates every week.',
        timeline: [
            { when: 'June 2025', what: 'First video call with Herman, then a walk of the lot on their next trip home' },
            { when: 'November 2025', what: 'Permits approved and the lot cleared' },
            { when: 'December 2025', what: 'Foundation poured' },
            { when: 'January to March 2026', what: 'Framing, with photos every Friday' },
            { when: 'May to June 2026', what: 'Stucco, stone, and drywall' },
            { when: 'October 2026', what: 'Exterior finishes and front steps' },
            { when: 'Early 2027', what: 'Move-in day', upcoming: true },
        ],
        testimonial: {
            quote: "We were nervous about building from Texas. Every Friday we get the photos and the numbers, and we've never once had to chase anyone for an answer. We know every person working on our home by name.",
            name: 'Mark and Erin S.',
            detail: 'Moving in early 2027',
        },
    },
    {
        id: 'fort-collins',
        sample: true,
        location: 'Fort Collins, CO',
        status: 'Completed',
        title: 'A modern rebuild on the lot they already loved',
        family: 'Priya and Tom K.',
        teaser: 'Priya and Tom tore down their 1960s ranch and built new around the old tree out front. When a better roof insulation came up, they saw both quotes side by side and made the call themselves.',
        headline: 'A change order with no black box.',
        facts: [
            { label: 'Size', value: '3,300 sq ft' },
            { label: 'Final cost', value: '$1,236,200' },
            { label: 'Build time', value: '10 months' },
        ],
        photos: gallery('fort-collins', 36, [
            [0, 'The finished design'],
            [1, '3D renderings from the design phase'],
            [19, 'Framing and insulation, summer 2024'],
            [25, 'Drywall'],
            [30, 'Sheathing and windows'],
            [31, 'Siding and stone, fall 2024'],
        ]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    'Priya and Tom lived in a small 1960s ranch in an older Fort Collins neighborhood for nine years. They loved the street, the walk to the park, and the huge tree in the front yard. What they did not love was the house.',
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    'They wanted a modern two-story home with a tall great room, lots of light, and a steel stair up to a loft. Most of all, they wanted to keep the tree. Our team drew 3D renderings so they could walk through every room before a single wall went up.',
                ],
            },
            {
                heading: 'How it went',
                body: [
                    "We took the old house down in April 2024 and protected the tree's roots the whole way through. Framing went up that summer, and the siding and stone were on by fall. They moved in during February 2025, 10 months after the old house came down.",
                ],
            },
        ],
        openBook: [
            'During framing, our insulation sub pointed out that spray foam in the vaulted roof would keep the great room far more comfortable. Herman put both quotes in front of them, the standard insulation and the spray foam, with the $6,840 difference right on paper.',
            'They signed the change before any work started, and that exact amount showed up on the next bill. No padding, no surprise, and no guessing.',
        ],
        numbers: [
            { label: 'First estimate, built from real bids', value: '$1,214,000', note: 'Includes tearing down the old house' },
            { label: 'Changes they chose and signed', value: '+$22,200', note: 'Spray foam roof and a stone fireplace wall' },
            { label: 'Final cost', value: '$1,236,200', strong: true },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land.',
        timeline: [
            { when: 'Fall 2023', what: 'First meeting on the lot, and the tree goes on the plan' },
            { when: 'Winter 2023', what: '3D renderings of every room, then every trade bid' },
            { when: 'April 2024', what: 'Old house torn down' },
            { when: 'July 2024', what: 'Framing and the steel loft stair' },
            { when: 'September 2024', what: 'Drywall, siding, and stone' },
            { when: 'February 2025', what: 'Move-in day' },
        ],
        testimonial: {
            quote: "The spray foam is a perfect example. We saw both quotes, we saw the difference, and we made the call. That's how the whole build went, and we never once wondered where our money was going.",
            name: 'Priya and Tom K.',
            detail: 'Moved in February 2025',
        },
    },
    {
        id: 'fort-collins-new',
        sample: true,
        location: 'Fort Collins, CO',
        status: 'Under construction',
        title: 'A farmhouse built in two steps on family acreage',
        family: 'Ben and Kelsey R.',
        teaser: "Ben and Kelsey built the carriage house first and moved into the apartment upstairs. When the dig turned up something nobody could see, they got the excavator's actual invoice, not a padded allowance.",
        headline: 'When the ground surprised everyone, they saw the real invoice.',
        facts: [
            { label: 'Size', value: '4,200 sq ft' },
            { label: 'Estimate', value: '$1,650,000' },
            { label: 'Move-in', value: 'Fall 2027' },
        ],
        photos: gallery('fort-collins-new', 20, [
            [0, 'Design rendering'],
            [1, 'Digging the basement, September 2026'],
            [5, 'Foundation forms'],
            [12, 'Basement walls poured'],
            [14, 'Basement slab prep, October 2026'],
            [19, 'Inside the finished carriage house garage'],
        ]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    'Ben and Kelsey bought five acres north of Fort Collins with room for a big garden, a greenhouse, and their two kids. They did not want to pay rent and a mortgage at the same time while they built.',
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    'So the plan came in two steps. First, a carriage house with a garage below and a small apartment above, where the family could live during the build. Then, a farmhouse with a deep front porch and a full basement.',
                ],
            },
            {
                heading: 'How it went',
                body: [
                    'The carriage house was finished in 2025, and the family has lived upstairs ever since. Each morning they walk out the front door and see their new home taking shape. The basement walls went up in October 2026.',
                ],
            },
        ],
        openBook: [
            'When the crew dug the basement, they hit a pocket of soft clay that had to come out and be replaced with rock. Nobody could have seen it before digging.',
            "Herman called that day, sent photos, and passed along the excavator's invoice for $14,200, billed at exactly what the excavator charged. No hidden markup, and no allowance padded ahead of time just in case.",
        ],
        numbers: [
            { label: 'Carriage house, final cost', value: '$312,400', note: 'Finished in 2025' },
            { label: 'Farmhouse, first estimate from real bids', value: '$1,650,000', strong: true },
            { label: 'Soft clay found during the dig', value: '+$14,200', note: "The excavator's actual invoice" },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land.',
        timeline: [
            { when: 'Fall 2024', what: 'First walk of the acreage with Herman' },
            { when: 'Spring to fall 2025', what: 'Carriage house built' },
            { when: 'Fall 2025', what: 'Family moves into the apartment over the garage' },
            { when: 'Spring 2026', what: 'Farmhouse design done and every trade bid in hand' },
            { when: 'September 2026', what: 'Basement dug and foundation formed' },
            { when: 'October 2026', what: 'Basement walls up and the slab prepped' },
            { when: 'Fall 2027', what: 'Move-in day in the farmhouse', upcoming: true },
        ],
        testimonial: {
            quote: "When Herman called about the clay, I braced for a big number. He sent the photos and the excavator's invoice within the hour, and it was exactly what they charged. That's when I stopped worrying about this build.",
            name: 'Kelsey R.',
            detail: 'Living on site during the build',
        },
    },
    {
        id: 'cheyenne',
        sample: true,
        location: 'Cheyenne, WY',
        status: 'Completed',
        title: 'A ranch home built to stand up to Wyoming wind',
        family: 'Dan and Michelle H.',
        teaser: 'Dan and Michelle got a real price range on the very first call. Their final cost of $786,400 landed right inside it, and they met every crew lead before the work began.',
        headline: 'A real number on the first call, and a final cost that landed inside it.',
        facts: [
            { label: 'Size', value: '2,900 sq ft' },
            { label: 'Final cost', value: '$786,400' },
            { label: 'Build time', value: '9 months' },
        ],
        photos: gallery('cheyenne', 1, [[0, 'Front of the home']]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    'Dan retired from F.E. Warren Air Force Base after 24 years. He and Michelle had moved nine times, and they were ready for one home that was truly theirs.',
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    "They wanted a single-level ranch with a three-car garage, room for Dan's workbench, and a front porch for summer nights. They also needed it built to handle the wind that comes across the plains.",
                ],
            },
            {
                heading: 'How it went',
                body: [
                    "Other builders wouldn't give them a number until they paid for a design contract. Herman gave them a range of $750,000 to $820,000 on the first call and showed them how he got there.",
                    "He then brought in a local engineer to design the roof and walls for Cheyenne's high winds. That cost was on paper before they signed anything.",
                ],
            },
        ],
        openBook: [
            'Before any work started, Dan and Michelle met the lead from every crew, from the framer to the roofer. Herman told them why he picked each one, and they got a weekly update with every bill attached.',
            'Their final cost came in at $786,400, right inside the range from that first call.',
        ],
        numbers: [
            { label: 'Range given on the first call', value: '$750,000 to $820,000' },
            { label: 'First estimate, built from real bids', value: '$774,000' },
            { label: 'Changes they chose and signed', value: '+$12,400', note: 'Covered back patio' },
            { label: 'Final cost', value: '$786,400', strong: true },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land.',
        timeline: [
            { when: 'June 2024', what: 'First call, and a real price range' },
            { when: 'August 2024', what: 'Design and wind engineering done, with every trade bid in hand' },
            { when: 'September 2024', what: 'Ground broken' },
            { when: 'December 2024', what: 'Roof on and windows in before the worst of winter' },
            { when: 'June 2025', what: 'Move-in day' },
        ],
        testimonial: {
            quote: "Herman gave us a real range on the first call when nobody else would. We met every crew lead before they set foot on our lot. The final number landed right where he said it would.",
            name: 'Dan and Michelle H.',
            detail: 'Moved in June 2025',
        },
    },
    {
        id: 'arvada',
        sample: true,
        location: 'Arvada, CO',
        status: 'In design',
        title: 'A modern downsize that saved $41,000 before ground was broken',
        family: 'Alan and Rosa P.',
        teaser: 'Alan and Rosa came to us with a plan they bought online and a $985,000 fixed bid with no breakdown. Herman priced it line by line, then showed them a simpler roof that saved $41,000.',
        headline: 'A straight answer, even when the answer was a cheaper way.',
        facts: [
            { label: 'Size', value: '2,600 sq ft' },
            { label: 'Estimate', value: '$905,000' },
            { label: 'Ground breaks', value: 'Spring 2027' },
        ],
        photos: gallery('arvada', 1, [[0, 'Design rendering']]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    "Alan and Rosa raised three kids in a big house in Westminster. Now that it's just the two of them, they want less house and less upkeep, on a lot close to Old Town Arvada.",
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    'They found a modern plan online with warm wood siding, a tall stone column, and big windows in the main room. They wanted it open and bright, with the kitchen, the laundry, and the primary suite all on one floor.',
                ],
            },
            {
                heading: 'How it went',
                body: [
                    'Another builder had given them a fixed bid of $985,000, with no breakdown at all. Herman priced the same plan line by line from real bids, and it came to $946,000. Then he showed them where the plan was costing more than it needed to.',
                ],
            },
        ],
        openBook: [
            'The plan had a complex roof with a long steel beam hidden inside it. Herman told them one big shed roof would look just as good from the street and save $41,000 in steel, framing, and roofing.',
            'He put both prices side by side, and they picked the simpler roof you see in the rendering. That brought their estimate down to $905,000.',
        ],
        numbers: [
            { label: "Another builder's fixed bid", value: '$985,000', note: 'No breakdown' },
            { label: 'Our first estimate, built from real bids', value: '$946,000' },
            { label: "Simpler roof, Herman's idea", value: '$41,000 saved' },
            { label: 'Current estimate', value: '$905,000', strong: true },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land.',
        timeline: [
            { when: 'May 2026', what: 'First meeting, with the online plan and the other bid' },
            { when: 'July 2026', what: 'Line by line estimate from real trade bids' },
            { when: 'August 2026', what: 'Roof redesigned, saving $41,000' },
            { when: 'November 2026', what: 'Permit drawings go to the city', upcoming: true },
            { when: 'Spring 2027', what: 'Ground breaks', upcoming: true },
        ],
        testimonial: {
            quote: 'Most builders would have just built the roof and cashed the check. Herman showed us how to save $41,000 before we had even signed. That told us everything we needed to know about who we were hiring.',
            name: 'Alan and Rosa P.',
            detail: 'Breaking ground spring 2027',
        },
    },
    {
        id: 'bellvue',
        sample: true,
        location: 'Bellvue, CO',
        status: 'In design',
        title: 'A mountain home on acreage, with an honest timeline',
        family: 'Jess and Ryan T.',
        teaser: 'Jess and Ryan wanted to break ground fast. Herman told them the truth up front: a well, a septic system, wildfire rules, and months of county permits come first, and he priced every one.',
        headline: "An honest timeline, even when it wasn't the one they wanted to hear.",
        facts: [
            { label: 'Size', value: '3,000 sq ft' },
            { label: 'Estimate', value: '$1,350,000' },
            { label: 'Ground breaks', value: 'Spring 2027' },
        ],
        photos: gallery('bellvue', 1, [[0, 'Design rendering']]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    'Jess and Ryan both work from home, and they were tired of a tiny yard in town. They bought 12 acres in the hills outside Bellvue with a view up the valley.',
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    'They wanted a mountain home with a tall glass wall facing the view, a wood stove, and a deck that wraps around the side. They also wanted two offices on opposite ends of the house, so their calls never overlap.',
                ],
            },
            {
                heading: 'How it went',
                body: [
                    'Another builder told them they could break ground in three months. Herman told them the truth instead. Land like theirs needs a well, a septic system, and a plan that meets wildfire rules, and mountain permits often take four to six months on their own.',
                ],
            },
        ],
        openBook: [
            "Instead of waiting around, Herman put the well first. It was drilled in September 2026, and they had the driller's actual invoice of $32,500 the same day.",
            'Now they know they have water before a single dollar goes into the house, and they know what every step ahead of them will cost.',
        ],
        numbers: [
            { label: 'Well, drilled first', value: '$32,500', note: "The driller's actual invoice" },
            { label: 'Septic system, from real bids', value: '$41,800' },
            { label: 'Total estimate, built from real bids', value: '$1,350,000', note: 'Includes the well and septic', strong: true },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land.',
        timeline: [
            { when: 'April 2026', what: 'First walk of the land with Herman' },
            { when: 'June 2026', what: 'Design done, with a wildfire plan built in' },
            { when: 'September 2026', what: 'Well drilled and permits filed with the county' },
            { when: 'Spring 2027', what: 'Ground breaks once permits are approved', upcoming: true },
            { when: 'Summer 2028', what: 'Move-in day', upcoming: true },
        ],
        testimonial: {
            quote: "Herman was the only builder who told us how long it would really take. He was honest about the well, the septic, and the permits, and he showed us the cost of each one. We'd rather hear the truth now than find out later.",
            name: 'Jess and Ryan T.',
            detail: 'Breaking ground spring 2027',
        },
    },
    {
        id: 'loveland-design',
        sample: true,
        location: 'Loveland, CO',
        status: 'In design',
        title: 'A lodge-style home big enough for every holiday',
        family: 'Chris and Amanda L.',
        teaser: 'Chris and Amanda had a floor plan within days of meeting Herman on their land. Before they signed anything, they had a full estimate built from 37 real trade bids.',
        headline: 'The founder on the land from the very first sketch.',
        facts: [
            { label: 'Size', value: '5,200 sq ft' },
            { label: 'Estimate', value: '$2,300,000' },
            { label: 'Ground breaks', value: 'Spring 2027' },
        ],
        photos: gallery('loveland-design', 1, [[0, 'Design rendering']]),
        story: [
            {
                heading: 'Who they are',
                body: [
                    "Chris and Amanda have three kids, and they host both sides of the family every Thanksgiving. Their house in Johnstown just couldn't hold everyone anymore.",
                ],
            },
            {
                heading: 'What they wanted',
                body: [
                    'They wanted a lodge-style home with dark siding, stone, and timber, set on a rise with a mountain view. Inside, they wanted a kitchen with two islands, a bunk room for the cousins, and a walkout for movie nights.',
                ],
            },
            {
                heading: 'How it went',
                body: [
                    'Herman met them on the land himself and sketched the house around the view and the slope. His office had a floor plan in their inbox within days. Then every trade bid the plan, and Chris and Amanda saw all 37 bids before they signed anything.',
                ],
            },
        ],
        openBook: [
            'Two framing bids came in $18,000 apart. Herman showed them both and explained why he would pick the higher one, since that crew has a better record of staying on schedule and passing inspections the first time.',
            'They agreed, and they made that choice with both numbers right in front of them.',
        ],
        numbers: [
            { label: 'Trade bids collected', value: '37' },
            { label: 'Framing bids compared', value: '$18,000 apart', note: 'They chose the crew with the better record' },
            { label: 'First estimate, built from real bids', value: '$2,300,000', strong: true },
            { label: 'Hidden markups', value: '$0' },
        ],
        numbersNote: 'Build cost only, not counting the land.',
        timeline: [
            { when: 'July 2026', what: 'Herman sketches the house on the land, and the floor plan follows within days' },
            { when: 'September 2026', what: 'All 37 trade bids collected and reviewed together' },
            { when: 'October 2026', what: 'Estimate signed and final drawings started' },
            { when: 'Spring 2027', what: 'Ground breaks', upcoming: true },
            { when: 'Summer 2028', what: 'Move-in day', upcoming: true },
        ],
        testimonial: {
            quote: "We had a floor plan within days of meeting Herman on our land. Then he sat down with us and went through all 37 bids. We've never felt so sure about spending this much money.",
            name: 'Chris and Amanda L.',
            detail: 'Breaking ground spring 2027',
        },
    },
];

export const HAS_SAMPLE_STORIES = CASE_STUDIES.some((study) => study.sample);
