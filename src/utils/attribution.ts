// Captures ad attribution (UTMs, click ids, landing page, referrer) so lead
// payloads can carry it. Contacts created through an inbound webhook don't
// inherit browser attribution, so it has to travel with the payload itself.

const STORAGE_KEY = 'lead_attribution';

const PARAM_KEYS = [
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'gclid',
    'fbclid',
] as const;

export type Attribution = Partial<Record<(typeof PARAM_KEYS)[number] | 'landing_url' | 'referrer', string>>;

function readStored(): Attribution {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Attribution) : {};
    } catch {
        return {};
    }
}

/**
 * Call once on app load. A visit carrying any UTM or click id overwrites the
 * stored set (last non-direct touch wins). A bare visit only fills in
 * landing_url and referrer if nothing is stored yet, so paid attribution is
 * never clobbered by a later direct visit.
 */
export function captureAttribution(): void {
    try {
        const params = new URLSearchParams(window.location.search);
        const fromUrl: Attribution = {};
        for (const key of PARAM_KEYS) {
            const value = params.get(key);
            if (value) fromUrl[key] = value;
        }

        const stored = readStored();
        if (Object.keys(fromUrl).length > 0) {
            fromUrl.landing_url = window.location.href;
            if (document.referrer) fromUrl.referrer = document.referrer;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
        } else if (Object.keys(stored).length === 0) {
            const firstTouch: Attribution = { landing_url: window.location.href };
            if (document.referrer) firstTouch.referrer = document.referrer;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(firstTouch));
        }
    } catch {
        // Storage unavailable (private mode, blocked cookies). Leads still submit without attribution.
    }
}

/** Flat attribution fields, ready to spread into a lead payload. */
export function getAttribution(): Attribution {
    return readStored();
}
