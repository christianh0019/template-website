// What the /apply form hands the thank-you page. Kept in session storage, not
// the URL, so names and call times never ride along in referrers or pixels.

const RESULT_KEY = 'apply_result';
const SCHEDULE_KEY = 'apply_schedule_pending';

export interface ApplyResult {
    firstName: string;
    /** ISO start of the picked call, empty when no time was picked. */
    startTime: string;
    timezone: string;
    booked: boolean;
}

export function saveApplyResult(result: ApplyResult): void {
    try {
        sessionStorage.setItem(RESULT_KEY, JSON.stringify(result));
        sessionStorage.setItem(SCHEDULE_KEY, '1');
    } catch {
        // Storage blocked. The thank-you page falls back to router state.
    }
}

export function readApplyResult(): ApplyResult | null {
    try {
        const raw = sessionStorage.getItem(RESULT_KEY);
        return raw ? (JSON.parse(raw) as ApplyResult) : null;
    } catch {
        return null;
    }
}

/** True once per finished application, so a refresh or a direct visit never fires a second Schedule. */
export function takeSchedulePending(): boolean {
    try {
        const pending = sessionStorage.getItem(SCHEDULE_KEY) === '1';
        sessionStorage.removeItem(SCHEDULE_KEY);
        return pending;
    } catch {
        return false;
    }
}
