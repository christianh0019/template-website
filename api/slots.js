// Open times on Herman's GoHighLevel "Discovery Phone Call" calendar, for the
// custom picker on /apply. With GHL_PRIVATE_TOKEN set it uses GoHighLevel's
// documented API. Without it, it reads the same public endpoint GoHighLevel's
// own booking widget reads, which needs no login.

const CALENDAR_ID = 'xPaYSZulboJxxCpHa9dY';
const TOKEN = process.env.GHL_PRIVATE_TOKEN;
const DAYS_AHEAD = 21;

function isTimezone(tz) {
    try {
        new Intl.DateTimeFormat('en-US', { timeZone: tz });
        return true;
    } catch {
        return false;
    }
}

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const requested = typeof req.query?.timezone === 'string' ? req.query.timezone : '';
    const timezone = requested && isTimezone(requested) ? requested : 'America/Denver';

    const start = Date.now();
    const end = start + DAYS_AHEAD * 24 * 60 * 60 * 1000;
    const query = `startDate=${start}&endDate=${end}&timezone=${encodeURIComponent(timezone)}`;

    const url = TOKEN
        ? `https://services.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots?${query}`
        : `https://backend.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots?${query}`;
    const headers = TOKEN
        ? { Authorization: `Bearer ${TOKEN}`, Version: '2021-04-15', Accept: 'application/json' }
        : { Accept: 'application/json' };

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000);
        const upstream = await fetch(url, { headers, signal: controller.signal });
        clearTimeout(timeoutId);

        if (!upstream.ok) {
            return res.status(502).json({ error: 'Could not load open times', status: upstream.status });
        }

        const data = await upstream.json();
        const days = Object.keys(data)
            .filter((key) => /^\d{4}-\d{2}-\d{2}$/.test(key) && Array.isArray(data[key]?.slots))
            .sort()
            .map((date) => ({ date, slots: data[date].slots }))
            .filter((day) => day.slots.length > 0);

        // Short cache so two visitors don't see a time that was just taken.
        res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=30');
        return res.status(200).json({ timezone, days });
    } catch (error) {
        return res.status(502).json({ error: 'Could not load open times', details: error.message });
    }
}
