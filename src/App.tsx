import React from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3">
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

          {/* Only one Apply button */}
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

      <main id="top">
        {/* Simple, single-column hero */}
        <section id="overview" className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Andalus International School of Qur&apos;an &amp; AI
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700">
              A 100% online, live, synchronous school for serious practicing Muslim
              families globally. Launching August 2026 with Grades 1 to 5.
            </p>

            <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700">
              Qur&apos;an-centric Islamic formation anchored in Tafseer al-Qurtubi, with a
              Cambridge-aligned STEM pathway in English. Teachers remain the murabbīn.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Apply / Join Interest List
              </a>

              <a
                href="#downloads"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                View Downloads
              </a>
            </div>

            <p className="mt-6 text-xs text-slate-500">
              Andalus International School of Qur&apos;an &amp; AI is an online school project
              of Muslim Lens Institute, dedicated to Qur&apos;an-centric, Cambridge-rigorous
              Islamic education.
            </p>
          </div>
        </section>

        {/* Highlights (kept lightweight) */}
        <section id="highlights" className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-2xl font-bold">Highlights</h2>

            <ul className="mt-5 space-y-3 text-sm text-slate-700">
              <li>Live instruction from teachers (not self-paced videos)</li>
              <li>Small class sizes with regular feedback and reports</li>
              <li>Cambridge-aligned STEM track taught in English</li>
              <li>Orthodox Sunni formation grounded in Qur&apos;an-centric learning</li>
              <li>Well-mannered online companionship with hand-picked peers</li>
            </ul>
          </div>
        </section>

        {/* FAQ (short) */}
        <section id="faq" className="border-b">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-2xl font-bold">FAQ</h2>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">Is this self-paced?</div>
                <p className="mt-2 text-sm text-slate-700">
                  No. Andalus is live, synchronous instruction with guided practice built into lessons.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">How do we apply?</div>
                <p className="mt-2 text-sm text-slate-700">
                  Use the Apply / Join Interest List button. It opens a Google Form in a new tab.
                </p>
              </div>

              <div className="rounded-2xl border bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold">Questions?</div>
                <p className="mt-2 text-sm text-slate-700">
                  Email muslimlensinstitute@consultant.com. Applications are collected via the Google Form.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Links/Downloads at the bottom */}
        <section id="downloads">
          <div className="mx-auto max-w-5xl px-4 py-12">
            <h2 className="text-2xl font-bold">Downloads</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
              Public documents for families.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Curriculum Map (PDF)
              </a>

              <a
                href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Tuition &amp; Fees (PDF)
              </a>

              <a
                href="/Academic_Calendar_Andalus_Online_2026-2027.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Academic Calendar (PDF)
              </a>

              <a
                href="/Student_Handbook_Andalus_Online_Y1.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Student Handbook (PDF)
              </a>

              <a
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Apply / Join Interest List
              </a>
            </div>

            <footer className="mt-10 border-t pt-6 text-xs text-slate-500">
              Andalus International School of Qur&apos;an &amp; AI is an online school project of Muslim Lens Institute,
              dedicated to Qur&apos;an-centric, Cambridge-rigorous Islamic education.
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}
