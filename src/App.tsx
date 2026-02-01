import React from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#overview" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold">
                Andalus International School of Qur&apos;an &amp; AI
              </div>
              <div className="text-xs text-slate-600">
                Qur&apos;an-centric, Cambridge-rigorous, Online
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
            <a className="hover:text-slate-700" href="#curriculum">
              Curriculum
            </a>
            <a className="hover:text-slate-700" href="#tuition">
              Tuition
            </a>
            <a className="hover:text-slate-700" href="#downloads">
              Downloads
            </a>
            <a className="hover:text-slate-700" href="#faq">
              FAQ
            </a>
          </nav>

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

      {/* Hero */}
      <section id="overview" className="border-b">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Qur&apos;an-centric. Cambridge-rigorous. AI-informed.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Andalus International School of Qur&apos;an &amp; AI is a 100% online, live,
              synchronous school project for serious practicing Muslim families globally.
              We open in <span className="font-semibold">August 2026</span> with
              <span className="font-semibold"> Grades 1 to 5</span>.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              The program unites Qur&apos;an-centric Islamic formation anchored in
              <span className="font-semibold"> Tafseer al-Qurtubi</span> with a Cambridge-aligned STEM pathway in English.
              Teachers remain the murabbīn. AI supports practice an
