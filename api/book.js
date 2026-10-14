// Finishes a /apply application. Books the picked time on Herman's
// GoHighLevel calendar, then forwards the whole application to the same
// GoHighLevel inbound webhook the /application funnel uses, with the call
// time and whether it booked.
//
// Booking needs GHL_PRIVATE_TOKEN (a Private Integration token from the
// Homestead sub-account with contacts and calendar event write scopes).
// Without it nothing is booked: the requested time still travels on the
// webhook so the office can put it on the calendar by hand.

const LOCATION_ID = 'cG3cesDKIajoyQPNPYZK';
const CALENDAR_ID = 'xPaYSZulboJxxCpHa9dY';
const CALL_MINUTES = 30;
const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/cG3cesDKIajoyQPNPYZK/webhook-trigger/61e5d2ad-bff6-4dda-afe3-89b988885e8a';
const GHL_API = 'https://services.leadconnectorhq.com';
const TOKEN = process.env.GHL_PRIVATE_TOKEN;

async function ghl(path, version, body) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);
    try {
        const res = await fetch(`${GHL_API}${path}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${TOKEN}`,
                Version: version,
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(body),
            signal: controller.signal,
        });
        const text = await res.text();
        let data;
        try { data = JSON.parse(text); } catch { data = { message: text }; }
        return { ok: res.ok, status: res.status, data };
    } finally {
        clearTimeout(timeoutId);
    }
}

function noteFor(name, app, call) {
    const lines = [
        `Application from ${name} (/apply VSL funnel)`,
        `Project: ${app.projectType || 'Not given'}`,
        `Land: ${app.landStatus || 'Not given'}`,
        `Location: ${app.location || 'Not given'}`,
        `Timeline: ${app.timeline || 'Not given'}`,
        `Budget: ${app.budget || 'Not given'}`,
        `What matters most: ${app.priorities || 'Not given'}`,
    ];
    if (call) lines.push(`Requested call: ${call}`);
    return lines.join('\n');
}

async function book(contact, app, startTime, callLabel) {
    if (!TOKEN) return { booked: false, reason: 'no_token' };

    const name = `${contact.firstName} ${contact.lastName}`.trim();
    const upsert = await ghl('/contacts/upsert', '2021-07-28', {
        locationId: LOCATION_ID,
        firstName: contact.firstName,
        lastName: contact.lastName,
        name,
        email: contact.email,
        phone: contact.phone,
        source: 'VSL Application',
        tags: ['vsl application'],
    });
    const contactId = upsert.data?.contact?.id;
    if (!upsert.ok || !contactId) {
        return { booked: false, reason: upsert.status === 401 || upsert.status === 403 ? 'auth' : 'contact_failed' };
    }

    const endTime = new Date(new Date(startTime).getTime() + CALL_MINUTES * 60 * 1000).toISOString();
    const appointment = await ghl('/calendars/events/appointments', '2021-04-15', {
        calendarId: CALENDAR_ID,
        locationId: LOCATION_ID,
        contactId,
        startTime,
        endTime,
        title: `Phone Call With ${name} | Homestead Home Builders`,
        appointmentStatus: 'new',
        toNotify: true,
    });

    if (!appointment.ok) {
        const status = appointment.status;
        if (status === 401 || status === 403) return { booked: false, reason: 'auth', contactId };
        // Only a "no longer available" answer sends the visitor back to pick
        // again. Any other refusal falls through as a request so the lead
        // isn't stuck on a time that can never book.
        const message = JSON.stringify(appointment.data || '').toLowerCase();
        const taken = /slot|available|booked/.test(message);
        return { booked: false, reason: taken ? 'slot_taken' : 'book_failed', contactId };
    }

    // The note is a convenience for the office. A failure here never undoes the booking.
    await ghl(`/contacts/${contactId}/notes`, '2021-07-28', { body: noteFor(name, app, callLabel) }).catch(() => null);

    return { booked: true, appointmentId: appointment.data?.id || appointment.data?.appointment?.id, contactId };
}

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

    let body;
    try {
        body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    } catch {
        return res.status(400).json({ error: 'Invalid JSON' });
    }

    const contact = body?.contact || {};
    const app = body?.application || {};
    const startTime = typeof body?.startTime === 'string' && !Number.isNaN(Date.parse(body.startTime)) ? body.startTime : '';
    const timezone = typeof body?.timezone === 'string' ? body.timezone : 'America/Denver';
    const callLabel = typeof body?.callLabel === 'string' ? body.callLabel : '';

    if (!contact.email || !contact.phone || !contact.firstName) {
        return res.status(400).json({ error: 'Missing contact details' });
    }

    let result = { booked: false, reason: startTime ? 'no_token' : 'no_time' };
    if (startTime) {
        try {
            result = await book(contact, app, startTime, callLabel);
        } catch (error) {
            result = { booked: false, reason: 'error', details: error.message };
        }
    }

    // A taken slot goes back to the page so the visitor can pick again,
    // before anything reaches the webhook.
    if (result.reason === 'slot_taken') {
        return res.status(409).json({ booked: false, reason: result.reason });
    }

    const name = `${contact.firstName} ${contact.lastName || ''}`.trim();
    const salesNote = noteFor(name, app, callLabel);
    const payload = {
        client: 'Herman Boonstra - Homestead Home Builders',
        source: 'VSL Application',
        timestamp: new Date().toISOString(),
        is_qualified: true,
        quality_tier: 'Qualified',
        contact: { name, email: contact.email, phone: contact.phone, agreedToTerms: true },
        sales_note: salesNote,
        project: {
            city: app.location || 'Northern Colorado',
            totalBudget: app.budgetValue || 0,
            landOwned: app.landStatus === 'Yes, we own the land',
            timeline: app.timeline,
            type: app.projectType,
        },
        application: app,
        call: {
            requested_start: startTime || null,
            requested_label: callLabel || null,
            timezone,
            booked: result.booked,
            booking_status: result.booked ? 'booked' : result.reason,
            appointment_id: result.appointmentId || null,
        },
        headers: body?.headers || {},
        ...(body?.attribution && typeof body.attribution === 'object' ? body.attribution : {}),
    };

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000);
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            signal: controller.signal,
        });
        clearTimeout(timeoutId);
    } catch {
        // The booking already stands. BluBuilder has the lead from the page.
    }

    return res.status(200).json({ booked: result.booked, reason: result.reason });
}
