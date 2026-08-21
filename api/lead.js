// Forwards lead payloads from the site to BluBuilder. Runs server-side on
// Vercel so the API key never ships in the browser bundle and the browser
// never depends on BluBuilder's CORS setup.

const BLUBUILDER_URL = 'https://blubuilder.com/api/public/webhooks/leads/4ab02756-2995-4659-9fc2-597d04e60ca5';
const BLUBUILDER_KEY = process.env.BLUBUILDER_KEY || '4913046dfd570348a8b7c90480d53069db105653e2bd9127';

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
        if (!payload || typeof payload !== 'object') {
            return res.status(400).json({ error: 'Missing payload' });
        }

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000);

        const upstream = await fetch(BLUBUILDER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-BluBuilder-Key': BLUBUILDER_KEY
            },
            body: JSON.stringify(payload),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        const text = await upstream.text();
        let data;
        try { data = JSON.parse(text); } catch { data = { message: text }; }

        return res.status(upstream.status).json(data);
    } catch (error) {
        return res.status(502).json({ error: 'Lead forwarding failed', details: error.message });
    }
}
