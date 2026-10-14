import { useEffect, useState } from 'react';
import { Loader2, Phone } from 'lucide-react';
import { APPLY_FUNNEL } from '../../config/applyFunnel';
import { dayParts, formatCall, formatTime, timezoneLabel } from '../../utils/callTime';

interface Day {
    date: string;
    slots: string[];
}

interface TimePickerProps {
    timezone: string;
    /** Bumped by the parent to reload open times, e.g. after a time was taken. */
    refreshKey: number;
    submitting: boolean;
    error: string;
    onConfirm: (slot: string) => void;
    /** Finish without a time when the calendar has nothing open. */
    onNoTimes: () => void;
}

const TimePicker = ({ timezone, refreshKey, submitting, error, onConfirm, onNoTimes }: TimePickerProps) => {
    const [attempt, setAttempt] = useState(0);
    const [pickedDate, setDate] = useState('');
    const [pickedSlot, setSlot] = useState('');

    // Each load is tagged with the request it answers, so a reload shows the
    // spinner again until its own answer arrives.
    const requestKey = `${timezone}|${refreshKey}|${attempt}`;
    const [loaded, setLoaded] = useState<{ key: string; days: Day[] | null; failed: boolean }>({ key: '', days: null, failed: false });

    useEffect(() => {
        let cancelled = false;
        fetch(`/api/slots?timezone=${encodeURIComponent(timezone)}`)
            .then((res) => (res.ok ? res.json() : Promise.reject(new Error(String(res.status)))))
            .then((data: { days: Day[] }) => {
                if (!cancelled) setLoaded({ key: requestKey, days: Array.isArray(data.days) ? data.days : [], failed: false });
            })
            .catch(() => {
                if (!cancelled) setLoaded({ key: requestKey, days: null, failed: true });
            });
        return () => {
            cancelled = true;
        };
    }, [requestKey, timezone]);

    const current = loaded.key === requestKey ? loaded : null;
    const days = current?.days ?? null;
    const loadFailed = current?.failed ?? false;
    const date = days?.some((d) => d.date === pickedDate) ? pickedDate : days?.[0]?.date || '';
    const selectedDay = days?.find((d) => d.date === date);
    // A time that vanished on reload (someone took it) drops out of the selection.
    const slot = selectedDay?.slots.includes(pickedSlot) ? pickedSlot : '';

    if (loadFailed) {
        return (
            <div className="text-center py-6">
                <p className="text-slate-700">We couldn't load the calendar just now.</p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                        type="button"
                        onClick={() => setAttempt((n) => n + 1)}
                        className="px-5 py-3 rounded-lg bg-[#0F172A] text-white font-semibold hover:bg-[#2B70B6] transition-colors"
                    >
                        Try again
                    </button>
                    <button
                        type="button"
                        onClick={onNoTimes}
                        disabled={submitting}
                        className="px-5 py-3 rounded-lg border border-[#DCD5C8] text-slate-700 font-semibold hover:border-[#2B70B6] transition-colors disabled:opacity-50"
                    >
                        Send my application, call me to schedule
                    </button>
                </div>
            </div>
        );
    }

    if (!days) {
        return (
            <div className="py-12 flex flex-col items-center gap-3 text-slate-500">
                <Loader2 className="animate-spin text-[#2B70B6]" size={26} />
                <span className="text-sm">Loading open times</span>
            </div>
        );
    }

    if (days.length === 0) {
        return (
            <div className="text-center py-6">
                <p className="text-slate-700 leading-relaxed">
                    Our calendar is full for the next few days. Send your application and we'll reach out to set up a time with you.
                </p>
                <button
                    type="button"
                    onClick={onNoTimes}
                    disabled={submitting}
                    className="mt-6 px-6 py-3.5 rounded-lg bg-[#0F172A] text-white font-semibold hover:bg-[#2B70B6] transition-colors disabled:opacity-50 inline-flex items-center gap-2"
                >
                    {submitting && <Loader2 className="animate-spin" size={18} />}
                    Send my application
                </button>
                <p className="mt-5 text-sm text-slate-500">
                    Or call us at <a href={APPLY_FUNNEL.phoneHref} className="text-[#2B70B6] font-medium">{APPLY_FUNNEL.phone}</a>.
                </p>
            </div>
        );
    }

    return (
        <div>
            <p className="text-sm text-slate-500">Times are shown in {timezoneLabel(timezone)}.</p>

            {/* Days */}
            <div className="mt-4 -mx-1 px-1 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
                {days.map((d) => {
                    const { weekday, day } = dayParts(d.date);
                    const active = d.date === date;
                    return (
                        <button
                            key={d.date}
                            type="button"
                            onClick={() => {
                                setDate(d.date);
                                setSlot('');
                            }}
                            aria-pressed={active}
                            className={
                                'flex-shrink-0 min-w-[76px] rounded-lg border px-3 py-2.5 text-center transition-colors ' +
                                (active
                                    ? 'bg-[#0F172A] border-[#0F172A] text-white'
                                    : 'bg-white border-[#DCD5C8] text-slate-700 hover:border-[#2B70B6]')
                            }
                        >
                            <span className={'block text-[11px] font-semibold uppercase tracking-wider ' + (active ? 'text-white/70' : 'text-slate-400')}>
                                {weekday}
                            </span>
                            <span className="block mt-0.5 text-sm font-semibold">{day}</span>
                        </button>
                    );
                })}
            </div>

            {/* Times */}
            <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 gap-2">
                {selectedDay?.slots.map((s) => {
                    const active = s === slot;
                    return (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setSlot(s)}
                            aria-pressed={active}
                            className={
                                'rounded-lg border py-2.5 text-sm font-semibold transition-colors ' +
                                (active
                                    ? 'bg-[#2B70B6] border-[#2B70B6] text-white'
                                    : 'bg-white border-[#DCD5C8] text-slate-700 hover:border-[#2B70B6] hover:text-[#2B70B6]')
                            }
                        >
                            {formatTime(s, timezone)}
                        </button>
                    );
                })}
            </div>

            {error && (
                <p className="mt-4 text-sm text-red-600" role="alert">{error}</p>
            )}

            <button
                type="button"
                disabled={!slot || submitting}
                onClick={() => onConfirm(slot)}
                className="mt-6 w-full rounded-lg bg-[#0F172A] text-white font-semibold py-4 px-4 hover:bg-[#2B70B6] transition-colors disabled:opacity-40 disabled:hover:bg-[#0F172A] disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
            >
                {submitting && <Loader2 className="animate-spin" size={18} />}
                {slot ? `Confirm my call for ${formatCall(slot, timezone)}` : 'Pick a time above'}
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                <Phone size={13} />
                A {APPLY_FUNNEL.callLengthMinutes}-minute phone call with our team.
            </p>
        </div>
    );
};

export default TimePicker;
