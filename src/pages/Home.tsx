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
          content="Qur’an-centric, Cambridge-rigorous online school for practicing Muslim families. Grades 1–5. Live, teacher-led classes."
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
            <Pill>Qur&apos;an &amp; Tafseer al-Qurtubi as the spine</Pill>
            <Pill>Cambridge-aligned STEM</Pill>
            <Pill>Grades 1–5</Pill>
            <Pill>Bilingual Arabic / English</Pill>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-700">
            Andalus is a Qur&apos;an-centric online school for serious practicing Muslim families globally. Pupils study Qur&apos;an with
            deep understanding anchored in Tafseer al-Qurtubi, and follow a Cambridge-aligned pathway in English for Mathematics, Science,
            Computing, and Global Perspectives. AI supports practice and projects under clear boundaries, while teachers remain the murabbīn.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ApplyButton />
          </div>
        </div>
      </section>

      <Section title="Why Families Choose Andalus" eyebrow="Highlights">
        <p className="mb-4">
          A focused online environment designed for serious Muslim families who want Qur&apos;an, character, and academic excellence together.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <HighlightCard title="Live instruction from teachers">
            Daily live sessions rather than self-paced videos.
          </HighlightCard>
          <HighlightCard title="Hand-picked peers">
            Peers from around the world, supporting well-mannered online companionship.
          </HighlightCard>
          <HighlightCard title="Cambridge-aligned STEM">
            English, Mathematics, Science, Computing, and Global Perspectives aligned to Cambridge expectations.
          </HighlightCard>
          <HighlightCard title="Orthodox Sunni formation">
            Qur&apos;an-centric learning grounded in orthodox Sunni scholarship.
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
