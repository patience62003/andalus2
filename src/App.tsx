import React, { useState } from "react";

type ButtonProps = {
  label: string;
  href?: string;
  variant?: "primary" | "secondary";
};

function Button({ label, href, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-emerald-600 text-white hover:bg-emerald-700"
      : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50";

  if (!href) {
    return (
      <button className={`${base} ${styles}`} disabled>
        {label}
      </button>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      className={`${base} ${styles}`}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

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
  intro,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  intro?: string;
}) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-3">{title}</h2>
      {intro && <p className="text-sm text-slate-700 mb-5">{intro}</p>}
      {children}
    </section>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  const googleFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo – requires /andalus_logo_en_300.png in /public */}
            <img
              src="/andalus_logo_en_300.png"
              alt="Andalus International School of Qur'an & AI logo"
              className="h-9 w-9 rounded-full object-cover"
            />
            <a href="#overview" className="font-extrabold tracking-tight text-sm">
              Andalus International School of Qur&apos;an &amp; AI
            </a>
          </div>

          <button
            className="md:hidden px-3 py-2 rounded border border-slate-300 text-xs"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>

          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="#overview" className="hover:underline">
              Andalus
            </a>
            <a href="#highlights" className="hover:underline">
              Highlights
            </a>
            <a href="#curriculum" className="hover:underline">
              Curriculum
            </a>
            <a href="#tuition" className="hover:underline">
              Tuition
            </a>
            <Button
              label="APPLY"
              href={googleFormUrl}
              variant="primary"
            />
          </div>
        </div>

        {open && (
          <div className="md:hidden px-4 pb-3 flex flex-col gap-2 text-sm border-t border-slate-200 bg-white">
            <a href="#overview" onClick={() => setOpen(false)}>
              Andalus
            </a>
            <a href="#highlights" onClick={() => setOpen(false)}>
              Highlights
            </a>
            <a href="#curriculum" onClick={() => setOpen(false)}>
              Curriculum
            </a>
            <a href="#tuition" onClick={() => setOpen(false)}>
              Tuition
            </a>
            <Button
              label="APPLY"
              href={googleFormUrl}
              variant="primary"
            />
          </div>
        )}
      </nav>

      {/* HERO / OVERVIEW */}
      <header
        id="overview"
        className="max-w-5xl mx-auto px-4 pt-8 pb-10 flex flex-col gap-6"
      >
        <p className="text-xs tracking-wide text-slate-500">
          ONLINE BILINGUAL ISLAMIC SCHOOL · OPENING AUGUST 2026
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Andalus International School of Qur&apos;an &amp; AI
        </h1>

        <div className="flex flex-wrap gap-2">
          <Pill>Qur&apos;an &amp; Tafseer al-Qurtubi as the spine</Pill>
          <Pill>Cambridge Primary (Grades 1–5)</Pill>
          <Pill>Bilingual Arabic / English</Pill>
        </div>

        <p className="text-sm md:text-base text-slate-700 max-w-3xl">
          For the inaugural year (August 2026), Andalus is accepting applications
          for <span className="font-semibold">Grades 1–5 only</span>. Pupils
          memorise the Qur&apos;an, study Tafseer al-Qurtubi in Arabic for identity
          formation, and follow the Cambridge Primary pathway in English for
          mathematics, science, computing, and global perspectives. AI is used
          carefully to support practice and projects, while teachers remain the{" "}
          <em>murabbīn</em>.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button
            label="Apply / Join Interest List"
            href={googleFormUrl}
            variant="primary"
          />
          <Button
            label="Tuition &amp; Fees (PDF)"
            href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
            variant="secondary"
          />
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <Section
        id="highlights"
        title="Why Families Choose Andalus"
        intro="A focused online environment for serious Muslim families who want Qur'an, character, and academic excellence together."
      >
        <ul className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ Live instruction from teachers with peers hand-selected from around
            the world to provide well-mannered online companionship.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ Qualified Cambridge subject teachers for English, Maths, Science,
            and Global Perspectives.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ Certified Islamic studies teachers for Qur&apos;an/Tafseer,
            Fiqh, Hadith, and Arabic.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ Small class sizes with regular feedback, assessments, written
            reports, and college/career counseling as pupils advance.
          </li>
        </ul>
      </Section>

      {/* CURRICULUM */}
      <Section
        id="curriculum"
        title="Curriculum Overview"
        intro="Two intertwined halves: Qur'an/Qurtubi for identity and Cambridge Primary for empirical subjects."
      >
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-700">
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold mb-2">Qur&apos;an &amp; Islamic Studies</h3>
            <p className="mb-2">
              Daily Qur&apos;an class with memorisation, Tajwīd, and Tafseer
              al-Qurtubi as the curricular spine. Fiqh (with uṣūl and qawā‘id),
              Hadith (with uṣūl al-ḥadīth and rijāl at age-appropriate levels),
              and Arabic language are integrated across the week.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <h3 className="font-semibold mb-2">Cambridge Primary (Grades 1–5)</h3>
            <p className="mb-2">
              English, Mathematics, Science, Computing, and Global Perspectives
              follow the Cambridge Primary framework. Instruction is in English,
              with Arabic used strategically to support bilingual development.
            </p>
            <Button
              label="Curriculum Map (Cambridge, Gr 1–5)"
              href="/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf"
              variant="secondary"
            />
          </div>
        </div>
      </Section>

      {/* TUITION */}
      <Section
        id="tuition"
        title="Tuition & Fees"
        intro="For the first year of operation (Grades 1–5), tuition is the same across all primary grades."
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700 space-y-2">
          <p>
            Annual tuition: <strong>$4,500 USD</strong> per pupil.
          </p>
          <p>
            Deposit: <strong>$500 USD</strong> (refundable under the conditions
            described in the Tuition &amp; Fees document).
          </p>
          <p>
            Tuition covers all core instructional time plus required online
            subscriptions for STEM tools and learning platforms.
          </p>
          <Button
            label="Download Tuition &amp; Fees (PDF)"
            href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
            variant="primary"
          />
        </div>
      </Section>

      {/* SIMPLE APPLY SECTION (just reuses the same form link) */}
      <Section
        id="apply"
        title="How to Apply"
        intro="Step 1: Complete the online interest/application form. Step 2: We schedule a short family conversation and placement review."
      >
        <div className="space-y-3 text-sm text-slate-700">
          <p>
            Use the form below to express interest or begin an application. Seats
            are limited, and classes are capped to maintain small group sizes.
          </p>
          <Button
            label="Apply / Join Interest List (Google Form)"
            href={googleFormUrl}
            variant="primary"
          />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 mt-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8 text-xs text-slate-600 space-y-2">
          <p>
            Andalus International School of Qur&apos;an &amp; AI is an online
            school project of <span className="font-semibold">Muslim Lens Institute</span>,
            dedicated to Qur&apos;an-centric, Cambridge-rigorous Islamic education.
          </p>
          <p>
            Career inquiries/applications are accepted only through LinkedIn.
          </p>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Andalus International School of
            Qur&apos;an &amp; AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
