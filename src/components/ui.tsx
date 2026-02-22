import React from "react";

export const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform?usp=sharing&ouid=104479175709144250534";

export const PDFS = {
  curriculum: "/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf",
  calendar: "/Academic_Calendar_Andalus_Online_2026-2027.pdf",
  handbook: "/Student_Handbook_Andalus_Online_Y1.pdf",
  tuition: "/Tuition_and_Fees_Andalus_Online_Y1.pdf",
};

export const IMAGES = {
  banner: "/andalus_banner_clean.png",
  founder: "/founder.jpg", // <-- only new repo change you want
};

export const HIDAAH_STORE_URL =
  "https://www.al-hidaayah.co.uk/products/a-beginners-guide-to-understanding-islamic-pedagogy-by-dr-mohammed-sabrin";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
      ● {children}
    </span>
  );
}

export function Section({
  id,
  title,
  children,
  eyebrow,
}: {
  id?: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-0">
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 text-sm text-slate-700">{children}</div>
      </div>
    </section>
  );
}

export function HighlightCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-1 text-base font-semibold text-slate-900">{title}</p>
      <p className="text-sm text-slate-700">{children}</p>
    </div>
  );
}

export function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <button
      onClick={() => window.open(APPLY_URL, "_blank")}
      className={
        "inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 " +
        className
      }
    >
      Apply / Join Interest List
    </button>
  );
}

export function DownloadButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100 " +
        className
      }
    >
      {children}
    </a>
  );
}
