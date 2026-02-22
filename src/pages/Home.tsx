import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Pill, Section, HighlightCard, ApplyButton, IMAGES } from "../components/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Andalus International School of Qur&apos;an &amp; AI</title>
        <meta
          name="description"
          content="Qur’an-centric, Cambridge-rigorous online school for practicing Muslim families. Grades 1–5. Live, teacher-led classes with clear routines and parent partnership."
        />
      </Helmet>

      <Navbar />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6 lg:px-0">
          <img
            src={IMAGES.banner}
            alt="Andalus International School of Qur'an & AI banner"
            className="mb-8 w-full rounded-3xl object-cover shadow-md"
          />

          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Online bilingual Islamic school
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Andalus International School of Qur&apos;an &amp; AI
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Qur&apos;an-centric formation</Pill>
            <Pill>Tafseer al-Qurtubi as the spine</Pill>
            <Pill>Cambridge-aligned STEM in English</Pill>
            <Pill>Grades 1–5</Pill>
            <Pill>Live, teacher-led classes</Pill>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-700">
            Andalus is built for serious practicing Muslim families who want Qur&apos;an, character, and strong academics together.
            Pupils study Qur&apos;an with deep understanding anchored in Tafseer al-Qurtubi, while following a Cambridge-aligned pathway
            in English for Mathematics, Science, Computing, and Global Perspectives. AI supports practice and projects under clear boundaries,
            while teachers remain the murabbīn.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ApplyButton />
          </div>

          <p className="mt-4 text-xs text-slate-600">
            Not self-paced videos. Andalus is live, synchronous instruction with guided practice built into lessons.
          </p>
        </div>
      </section>

      <Section title="Why Families Choose Andalus" eyebrow="Highlights">
        <p className="mb-4">
          A calm, purposeful online environment designed for families who want excellent adab, clear routines, and measurable progress.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <HighlightCard title="Teacher-led live classes">
            Daily live instruction with guided practice during lesson time.
          </HighlightCard>

          <HighlightCard title="Qur’an-centric learning with depth">
            Qur&apos;an memorization and understanding together, anchored in Tafseer al-Qurtubi, with age-appropriate application.
          </HighlightCard>

          <HighlightCard title="Cambridge-aligned STEM in English">
            Mathematics, Science, Computing, and Global Perspectives aligned to Cambridge expectations, taught with academic rigor.
          </HighlightCard>

          <HighlightCard title="Small class sizes and strong routines">
            Deliberate sectioning to preserve focus, participation, and online classroom culture.
          </HighlightCard>

          <HighlightCard title="Assessment and reporting">
            Regular checks for understanding, feedback, and clear reporting so parents can see progress.
          </HighlightCard>

          <HighlightCard title="Parent partnership">
            Clear expectations, communication, and practical guidance so families can support routines at home.
          </HighlightCard>
        </div>
      </Section>

      <Section title="How to Apply" eyebrow="Admissions">
        <ol className="space-y-2 text-sm">
          <li><span className="font-semibold">1)</span> Complete the Apply / Interest List form (one per family).</li>
          <li><span className="font-semibold">2)</span> If there is a potential fit, we schedule a short call and a simple placement check.</li>
          <li><span className="font-semibold">3)</span> Families receive next-step instructions and onboarding guidance.</li>
        </ol>

        <div className="mt-5">
          <ApplyButton />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
