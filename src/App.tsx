import React, { useState } from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform?usp=sharing";

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">
      ● {text}
    </span>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">
      ● {text}
    </span>
  );
}

function ButtonPrimary({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-colors"
    >
      {label}
    </a>
  );
}

function Section({
  id,
  title,
  intro,
  children,
}: {
  id: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
        {title}
      </h2>
      {intro && (
        <p className="text-sm md:text-base text-slate-700 mb-6">{intro}</p>
      )}
      {children}
    </section>
  );
}

function Card({
  title,
  children,
  emoji,
}: {
  title: string;
  children: React.ReactNode;
  emoji?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-2 flex items-center gap-2 text-slate-800">
        {emoji && <span className="text-lg">{emoji}</span>}
        <span className="text-sm font-semibold">{title}</span>
      </div>
      <div className="text-sm text-slate-700">{children}</div>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-20 backdrop-blur bg-white/90 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="font-extrabold tracking-tight text-slate-900">
            Andalus
          </a>
          <button
            className="md:hidden px-3 py-2 rounded border text-sm"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#overview" className="hover:underline">
              Overview
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
            <a href="#faq" className="hover:underline">
              FAQ
            </a>
            <ButtonPrimary label="Apply / Join Interest List" href={APPLY_URL} />
          </div>
        </div>
        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-2 text-sm">
            <a href="#overview" onClick={() => setOpen(false)}>
              Overview
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
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <ButtonPrimary
              label="Apply / Join Interest List"
              href={APPLY_URL}
            />
          </div>
        )}
      </nav>

      {/* HERO + BANNER */}
      <section id="overview" className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 pt-10 pb-12">
          {/* Banner image */}
          <div className="rounded-3xl overflow-hidden mb-10">
            <img
              src="/andalus_banner.png"
              alt="Andalus International School of Qur'an & AI – Qur'an-centric, Cambridge Primary, Online, Bilingual Arabic/English"
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <p className="text-xs tracking-wide text-emerald-700 font-semibold mb-2">
            ONLINE BILINGUAL ISLAMIC SCHOOL · OPENING AUGUST 2026
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Andalus International School of Qur&apos;an &amp; AI
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill text="Qur'an & Tafseer al-Qurtubi as the spine" />
            <Pill text="AI-first STEM (Science, Technology, Engineering & Mathematics)" />
            <Pill text="Cambridge Primary (Grades 1–5)" />
            <Pill text="Bilingual Arabic / English" />
          </div>

          <p className="mt-5 max-w-3xl text-sm md:text-base text-slate-700">
            For the inaugural year (August 2026), Andalus is accepting
            applications for <span className="font-semibold">Grades 1–5 only</span>.
            Pupils memorise the Qur&apos;an, study Tafseer al-Qurtubi in Arabic for
            identity formation, and follow an{" "}
            <span className="font-semibold">
              AI-first, Cambridge-aligned STEM pathway
            </span>{" "}
            in English for mathematics, science, computing, and global
            perspectives. AI is used carefully to support practice and projects,
            while teachers remain the <em>murabbīn</em>.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <ButtonPrimary
              label="Apply / Join Interest List"
              href={APPLY_URL}
            />
          </div>
        </div>
      </section>

      {/* WHY FAMILIES CHOOSE ANDALUS */}
      <Section
        id="highlights"
        title="Why Families Choose Andalus"
        intro="A focused online environment designed for serious Muslim families who want Qur’an, character, and academic excellence together."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Qur'an-Centric Formation" emoji="📖">
            Pupils complete a structured hifz program while reading and
            discussing Tafseer al-Qurtubi in Arabic, connecting aqeedah, fiqh,
            seerah, and akhlaq through one coherent spine.
          </Card>
          <Card title="AI-first STEM, Not Screens Only" emoji="🤖">
            Cambridge Primary standards in English with strong emphasis on
            mathematics, science, computing, and project-based learning. AI is
            used as a tool, not a teacher.
          </Card>
          <Card title="Live Instruction & Curated Peers" emoji="🧑‍🏫">
            Daily live instruction from qualified Cambridge subject teachers and
            certified Islamic studies teachers. Peers are hand-selected to build
            a well-mannered online learning community.
          </Card>
          <Card title="Small Classes & Clear Feedback" emoji="📊">
            Small class sizes, regular feedback, assessments, and reporting for
            families. College and career counseling begins early for long-term
            planning.
          </Card>
        </div>
      </Section>

      {/* CURRICULUM */}
      <Section
        id="curriculum"
        title="Curriculum Overview"
        intro="Two tightly integrated halves: Qur’an/Qurtubi in Arabic (with humanities embedded) and Cambridge-aligned STEM in English."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Qur'an & Qurtubi Track" emoji="🕋">
            Daily Qur’an class includes hifz, tajwīd, and tafseer using
            al-Qurtubi as the central text. Fiqh (including uṣūl and qawāʿid),
            ḥadīth (including uṣūl al-ḥadīth and rijāl), and adab are woven into
            the tafseer sequence rather than taught as isolated subjects.
          </Card>
          <Card title="Cambridge STEM & Languages" emoji="🧬">
            Cambridge Primary (Grades 1–5) in English language, mathematics,
            science, and computing. English is taught to support STEM
            comprehension. Arabic (fusha) is taught as a language of revelation
            and scholarship.
          </Card>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold text-slate-900 mb-2">
            Download Curriculum Map
          </h3>
          <p className="text-sm text-slate-700 mb-3">
            A detailed, grade-by-grade overview of Qur&apos;an/Qurtubi and
            Cambridge Primary subjects (Grades 1–5).
          </p>
          <a
            href="/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-50"
          >
            Download Curriculum Map (PDF)
          </a>
        </div>
      </Section>

      {/* TUITION */}
      <Section
        id="tuition"
        title="Tuition & Fees"
        intro="Simple, transparent fees for the inaugural cohort (Grades 1–5, online)."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Annual Tuition" emoji="💳">
            <p className="text-sm text-slate-700">
              Tuition is <span className="font-semibold">$4,500 USD per year</span>{" "}
              per pupil. This includes:
            </p>
            <ul className="mt-2 list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>Daily live instruction in all subjects</li>
              <li>Access to required online STEM apps and platforms</li>
              <li>Learning management system and reporting</li>
              <li>College/career counseling as pupils advance</li>
            </ul>
          </Card>
          <Card title="Deposit & Schedule" emoji="📅">
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
              <li>
                <span className="font-semibold">$500 USD deposit</span> due upon
                acceptance. This reserves the seat and is applied toward annual
                tuition.
              </li>
              <li>
                Remaining tuition can be paid in instalments. Details are shared
                with accepted families.
              </li>
              <li>
                Tuition is the same for Grades 1–5 for the inaugural year
                (August 2026 start).
              </li>
            </ul>
          </Card>
        </div>
        <div className="mt-6">
          <ButtonPrimary
            label="Apply / Join Interest List"
            href={APPLY_URL}
          />
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" title="FAQ">
        <div className="space-y-4 text-sm text-slate-700">
          <div>
            <h3 className="font-semibold text-slate-900">
              Where are classes based?
            </h3>
            <p>
              Andalus is a fully online school serving practicing Muslim families
              globally. Live classes are scheduled with consideration for time
              zones where most families enroll.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">
              How do families apply?
            </h3>
            <p>
              Families complete the online interest/application form via the
              &quot;Apply / Join Interest List&quot; button. Accepted families
              then receive enrollment and payment instructions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">
              How do teachers apply to work at Andalus?
            </h3>
            <p>
              Career inquiries/applications are accepted only through LinkedIn.
              Please search for Andalus International School of Qur&apos;an &amp;
              AI on LinkedIn and apply to the relevant posting.
            </p>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-slate-600 space-y-2">
          <p>
            Andalus International School of Qur&apos;an &amp; AI is an online
            school project of <span className="font-semibold">Muslim Lens Institute</span>,
            dedicated to Qur&apos;an-centric, Cambridge-rigorous Islamic
            education.
          </p>
          <p>
            For admissions questions, please use the Apply / Join Interest List
            form. For general inquiries: muslimlensinstitute@consultant.com
          </p>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Andalus International School of Qur&apos;an
            &amp; AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
