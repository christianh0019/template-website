// Formatting and calendar links for the /apply call picker and thank-you page.

export function visitorTimezone(): string {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/Denver';
    } catch {
        return 'America/Denver';
    }
}

/** "Mountain Time" for America/Denver, falling back to the raw zone name. */
export function timezoneLabel(tz: string): string {
    try {
        const parts = new Intl.DateTimeFormat('en-US', {
            timeZone: tz,
            timeZoneName: 'longGeneric' as Intl.DateTimeFormatOptions['timeZoneName'],
        }).formatToParts(new Date());
        return parts.find((p) => p.type === 'timeZoneName')?.value || tz;
    } catch {
        return tz;
    }
}

/** A "2026-10-16" day key as { weekday: "Thu", day: "Oct 16" }. */
export function dayParts(dateKey: string): { weekday: string; day: string } {
    const [y, m, d] = dateKey.split('-').map(Number);
    const date = new Date(Date.UTC(y, m - 1, d, 12));
    return {
        weekday: date.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' }),
        day: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' }),
    };
}

export function formatTime(iso: string, tz: string): string {
    return new Date(iso).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', timeZone: tz });
}

/** "Thursday, October 16" */
export function formatCallDay(iso: string, tz: string): string {
    return new Date(iso).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', timeZone: tz });
}

/** "Thursday, October 16 at 9:00 AM" */
export function formatCall(iso: string, tz: string): string {
    return `${formatCallDay(iso, tz)} at ${formatTime(iso, tz)}`;
}

function stamp(date: Date): string {
    return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

export interface CallEvent {
    startIso: string;
    minutes: number;
    title: string;
    details: string;
}

export function googleCalendarUrl(event: CallEvent): string {
    const start = new Date(event.startIso);
    const end = new Date(start.getTime() + event.minutes * 60 * 1000);
    const params = new URLSearchParams({
        action: 'TEMPLATE',
        text: event.title,
        dates: `${stamp(start)}/${stamp(end)}`,
        details: event.details,
    });
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function icsFile(event: CallEvent): Blob {
    const start = new Date(event.startIso);
    const end = new Date(start.getTime() + event.minutes * 60 * 1000);
    const escape = (s: string) => s.replace(/\\/g, '\\\\').replace(/\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
    const lines = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Homestead Home Builders//Discovery Call//EN',
        'BEGIN:VEVENT',
        `UID:${stamp(start)}-${Math.random().toString(36).slice(2)}@homesteadhomebuilders.com`,
        `DTSTAMP:${stamp(new Date())}`,
        `DTSTART:${stamp(start)}`,
        `DTEND:${stamp(end)}`,
        `SUMMARY:${escape(event.title)}`,
        `DESCRIPTION:${escape(event.details)}`,
        'END:VEVENT',
        'END:VCALENDAR',
    ];
    return new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
}
