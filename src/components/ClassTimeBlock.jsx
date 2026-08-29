import React from "react";

export default function ClassTimeBlock() {
  const locations = [
    {
      label: "Makkah (Saudi Arabia)",
      time: "3:00 pm to 7:00 pm",
    },
    {
      label: "United Arab Emirates",
      time: "4:00 pm to 8:00 pm",
    },
    {
      label: "Oman",
      time: "4:00 pm to 8:00 pm",
    },
    {
      label: "Pakistan",
      time: "5:00 pm to 9:00 pm",
    },
    {
      label: "Kuwait",
      time: "3:00 pm to 7:00 pm",
    },
    {
      label: "Qatar",
      time: "3:00 pm to 7:00 pm",
    },
    {
      label: "Bahrain",
      time: "3:00 pm to 7:00 pm",
    },
    {
      label: "Jordan",
      time: "3:00 pm to 7:00 pm",
    },
    {
      label: "Turkey",
      time: "3:00 pm to 7:00 pm",
    },
    {
      label: "United Kingdom",
      time: "1:00 pm to 5:00 pm (BST)",
      note: "12:00 pm to 4:00 pm during GMT",
    },
    {
      label: "Ireland",
      time: "1:00 pm to 5:00 pm (summer)",
      note: "12:00 pm to 4:00 pm during winter",
    },
    {
      label: "Egypt",
      time: "3:00 pm to 7:00 pm (summer)",
      note: "2:00 pm to 6:00 pm during standard time",
    },
    {
      label: "Morocco",
      time: "1:00 pm to 5:00 pm (most of the year)",
      note: "May shift to 12:00 pm to 4:00 pm during the Ramadan clock change",
    },
    {
      label: "South Africa",
      time: "2:00 pm to 6:00 pm",
    },
    {
      label: "Bangladesh",
      time: "6:00 pm to 10:00 pm",
    },
    {
      label: "Indonesia (Jakarta)",
      time: "7:00 pm to 11:00 pm",
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
      <h3 className="text-base font-semibold text-slate-900">
        Schedule and Time Zones
      </h3>

      <p className="mt-1 text-sm text-slate-700">
        Daily live classes run{" "}
        <span className="font-semibold">
          Sunday through Thursday
        </span>
        ,{" "}
        <span className="font-semibold">
          3:00 pm to 7:00 pm
        </span>{" "}
        in <span className="font-semibold">Makkah time</span>.
      </p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {locations.map((loc) => (
          <div
            key={loc.label}
            className="rounded-xl bg-slate-50 px-4 py-3"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="text-sm font-medium text-slate-900">
                {loc.label}
              </div>

              <div className="text-right text-sm text-slate-700">
                {loc.time}
              </div>
            </div>

            {loc.note && (
              <div className="mt-1 text-right text-xs text-slate-500">
                {loc.note}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-600">
        Makkah time remains fixed at UTC+3. Countries that use seasonal
        clock changes may shift by one hour during part of the year.
      </p>

      <p className="mt-2 text-xs text-slate-600">
        If these times do not work in your country, still join the
        Interest List. We use demand to open additional cohorts.
      </p>
    </div>
  );
}
