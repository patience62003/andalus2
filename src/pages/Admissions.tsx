import React from "react";
import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Section, ApplyButton } from "../components/ui";
import ClassTimeBlock from "../components/ClassTimeBlock";

export default function Admissions() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>
          Admissions | Andalus International School of Qur&apos;an &amp; AI
        </title>

        <meta
          name="description"
          content="Admissions for Andalus International School of Qur’an & AI. Grades 1–5. Apply via the interest list form."
        />
      </Helmet>

      <Navbar />

      <Section title="Admissions" eyebrow="Apply">
        <p className="text-sm text-slate-700">
          Andalus serves serious practicing Muslim families seeking
          Qur&apos;an-centric formation and Cambridge-aligned academic rigor
          in a live online school environment.
        </p>

        <div className="mt-6">
          <ClassTimeBlock />
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">
            2026–2027 Academic Year
          </p>

          <p className="mt-3 text-sm text-slate-700">
            <strong>
              Live instruction begins Sunday, August 30, 2026.
            </strong>
          </p>

          <p className="mt-2 text-sm text-slate-700">
            Late enrollment may be considered after the start of the
            academic year where places remain available.
          </p>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">
            Application steps
          </p>

          <ol className="mt-3 space-y-2 text-sm text-slate-700">
            <li>
              <span className="font-semibold">1)</span> Submit the Apply /
              Interest List form (one per family).
            </li>

            <li>
              <span className="font-semibold">2)</span> We schedule a short
              call and a simple placement check.
            </li>

            <li>
              <span className="font-semibold">3)</span> If accepted, you
              receive enrollment steps and onboarding instructions.
            </li>
          </ol>

          <div className="mt-5">
            <ApplyButton />
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
