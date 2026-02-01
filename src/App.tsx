import React, { useState } from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform?usp=sharing&ouid=104479175709144250534";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
      ● {children}
    </span>
  );
}

function Section({
  id,
  title,
  children,
  eyebrow,
}: {
  id: string;
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

function HighlightCard({
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

function ApplyButton({ className = "" }: { className?: string }) {
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

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "curriculum", label: "Curriculum" },
    { id: "tuition", label: "Tuition" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div cla
