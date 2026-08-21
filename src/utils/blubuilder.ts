import { getAttribution } from './attribution';

// Sends a lead straight from the page to BluBuilder through this site's own
// /api/lead function. GoHighLevel is not involved.
export async function sendLeadToBluBuilder(fields: Record<string, unknown>): Promise<boolean> {
    const email = typeof fields.email === 'string' ? fields.email.trim().toLowerCase() : '';

    const payload: Record<string, unknown> = {
        // BluBuilder dedupes on contact_id. Email is the one stable id we have
        // across the survey, the webinars and the calculator, so the same
        // person updates one lead instead of creating several.
        ...(email ? { contact_id: email } : {}),
        ...fields,
        ...getAttribution(),
    };

    try {
        const res = await fetch('/api/lead', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
        });
        return res.ok;
    } catch {
        return false;
    }
}
