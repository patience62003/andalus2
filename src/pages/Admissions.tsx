import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Section, ApplyButton } from "../components/ui";

export default function Admissions() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Admissions | Andalus International School of Qur&apos;an &amp; AI</title>
        <meta
          name="description"
          content="Admissions for Andalus International School of Qur’an & AI. Teacher-led live online learning for Grades 1–5. Apply via the interest list form."
        />
      </Helmet>

      <Navbar />

      <Section title="Admissions" eyebrow="Apply">
        <p className="text-sm text-slate-700">
          Andalus is designed for families seeking Qur&apos;an-centric formation and Cambridge-aligned academic rigor in a live online school model.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Application steps</p>
          <ol className="mt-3 space-y-2 text-sm text-slate-700">
            <li><span className="font-semibold">1)</span> Submit the Apply / Interest List form (one per family).</li>
            <li><span className="font-semibold">2)</span> We schedule a short call and a simple placement check.</li>
            <li><span className="font-semibold">3)</span> If accepted, you receive enrollment steps and onboarding instructions.</li>
          </ol>

          <div className="mt-5">
            <ApplyButton />
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">What helps pupils succeed</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Consistent daily routines and punctual attendance</li>
              <li>Quiet learning space and stable internet connection</li>
              <li>Willingness to participate respectfully in live lessons</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Parent partnership</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
              <li>Protecting learning time and limiting distractions</li>
              <li>Communicating early when support is needed</li>
              <li>Reinforcing calm adab and learning habits at home</li>
            </ul>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
