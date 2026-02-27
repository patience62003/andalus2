import React from "react";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function format12h(totalMinutes) {
  const mins = ((totalMinutes % 1440) + 1440) % 1440;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  const ampm = h >= 12 ? "pm" : "am";
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return `${h12}:${pad2(m)} ${ampm}`;
}

function toMinutes(hhmm) {
  const [hh, mm] = hhmm.split(":").map(Number);
  return hh * 60 + mm;
}

/**
 * Live block anchored in Makkah time (UTC+3).
 * Displays equivalents using fixed UTC offsets.
 * Includes countries that fall within 6:00 am to 10:00 pm local time for this cohort.
 */
export default function ClassTimeBlock({
  makkahStart = "14:00",
  makkahEnd = "18:00",
}) {
  const makkahOffset = 3; // UTC+3

  const startM = toMinutes(makkahStart);
  const endM = toMinutes(makkahEnd);

  // Convert Makkah-local minutes to UTC minutes
  const utcStart = startM - makkahOffset * 60;
  const utcEnd = endM - makkahOffset * 60;

  // Ranked by your priorities under this cohort timing.
  // Excludes places where this block would end after 10:00 pm local (e.g., Malaysia/Singapore/Brunei).
  const locations = [
    { label: "Makkah (Saudi Arabia)", offset: 3 },

    { label: "United Arab Emirates", offset: 4 },
    { label: "Oman", offset: 4 },

    { label: "Pakistan", offset: 5 },

    { label: "Kuwait", offset: 3 },
    { label: "Qatar", offset: 3 },
    { label: "Bahrain", offset: 3 },
    { label: "Jordan", offset: 3 },

    { label: "Turkey", offset: 3 },

    { label: "Egypt", offset: 2 },
    { label: "Morocco", offset: 1 },
    { label: "South Africa", offset: 2 },

    { label: "Bangladesh", offset: 6 },
    { label: "Indonesia (Jakarta)", offset: 7 },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <h3 className="text-base font-semibold text-slate-900">
        Schedule and Time Zones
      </h3>

      <p className="mt-1 text-sm text-slate-700">
        Daily live classes run{" "}
        <span className="font-semibold">
          {format12h(startM)} to {format12h(endM)}
        </span>{" "}
        in <span className="font-semibold">Makkah time</span>.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {locations.map((loc) => {
          const localStart = utcStart + loc.offset * 60;
          const localEnd = utcEnd + loc.offset * 60;

          return (
            <div
              key={loc.label}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
            >
              <div className="text-sm font-medium text-slate-900">
                {loc.label}
              </div>
              <div className="text-sm text-slate-700">
                {format12h(localStart)} to {format12h(localEnd)}
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-slate-600">
        If these times do not work in your country, still join the Interest List.
        We use demand to open additional cohorts.
      </p>
    </div>
  );
}
