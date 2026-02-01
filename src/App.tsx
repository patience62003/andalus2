import React from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#overview" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold">
                Andalus International School of Qur&apos;an &amp; AI
              </div>
              <div className="text-xs text-slate-600">
                Qur&apos;an-centric · Cambridge Primary · Online
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-slate-700" href="#overview">
              Overview
            </a>
            <a className="hover:text-slate-700" href="#highlights">
              Highlights
            </a>
            <a className="hover:text-slate-700" href="#faq">
              FAQ
            </a>
            <a className="hover:text-slate-700" href="#downloads">
              Downloads
            </a>
          </nav>

          {/* Only ONE Apply button on the entire site */}
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Apply / Join Interest List
          </a>
        </div>
      </header>

      {/* HERO with color + banner feel (single-column) */}
      <section id="overview" className="border-b">
        {/* Colored background */}
        <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            {/* Banner card */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-sm">
