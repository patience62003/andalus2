import React, { useState } from "react";

/** ---------- UI PRIMITIVES ---------- */
function Button({
  label,
  href,
  comingSoon = false,
}: {
  label: string;
  href?: string;
  comingSoon?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors bg-slate-900 text-white hover:bg-slate-800";
  if (comingSoon || !href) {
    return (
      <button
        onClick={() => alert("This file will be uploaded soon.")}
        className={base}
      >
        {label} <span className="ml-2 opacity-70">(coming soon)</span>
      </button>
    );
  }
  return (
    <a className={base} href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
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
    <section id={id} className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold mb-3 text-slate-900">{title}</h2>
      {intro && <p className="text-sm text-slate-700 mb-6">{intro}</p>}
      {children}
    </section>
  );
}

/** ---------- APP ---------- */
export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAV */}
      <nav className="sticky top-0 z-20 backdrop-blur bg-white/85 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight">
            Andalus
          </a>
          <button
            className="md:hidden px-3 py-2 rounded border"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="#qurtubi" className="hover:underline">
              Why Qurtubi
            </a>
            <a href="#cambridge" className="hover:underline">
              Cambridge Pathway
            </a>
            <a href="#curriculum" className="hover:underline">
              Curriculum
            </a>
            <a href="#online" className="hover:underline">
              Online Learning
            </a>
            <a href="#downloads" className="hover:underline">
              Downloads
            </a>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-2 text-sm">
            <a href="#qurtubi" onClick={() => setOpen(false)}>
              Why Qurtubi
            </a>
            <a href="#cambridge" onClick={() => setOpen(false)}>
              Cambridge Pathway
            </a>
            <a href="#curriculum" onClick={() => setOpen(false)}>
              Curriculum
            </a>
            <a href="#online" onClick={() => setOpen(false)}>
              Online Learning
            </a>
            <a href="#downloads" onClick={() => setOpen(false)}>
              Downloads
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-xs tracking-wide text-slate-500 mb-2">
          ONLINE BILINGUAL (ARABIC/ENGLISH)
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Andalus International School of Qur&apos;an &amp; AI
        </h1>
        <p className="mt-5 max-w-3xl text-slate-700">
          100% online, bilingual (Arabic/English) Islamic school. Students
          complete Qur&apos;an study with al-Qurtubi&apos;s tafsir while
          mastering Cambridge IGCSE and A-Level subjects. No separate homework
          during live term time; independent practice is scheduled inside the
          school day. Arabic-from-zero placement supported.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button label="Prospectus (PDF)" comingSoon />
          <Button label="Fees (Online, PDF)" comingSoon />
        </div>
      </header>

      {/* KEY CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-4">
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Qur'an & Qurtubi (Online Seminars)" emoji="📜">
            Line-by-line tafsir with integrated fiqh, hadith, sira, and balagha.
            Arabic acquisition through usage; Arabic-from-zero pathway
            available. Humanities and arts are embedded within tafsir seminars.
          </Card>
          <Card title="Cambridge IGCSE / A-Level" emoji="🎓">
            Full Cambridge pathway delivered online in English. Subject choices
            are sequenced for university entry; Arabic/Islamic Studies offered
            in Arabic or English with bilingual supports.
          </Card>
          <Card title="AI-Forward STEM (Online)" emoji="💻">
            Computing, data literacy, and responsible AI aligned to Cambridge
            syllabi. Project-based work with weekly live labs and office hours.
          </Card>
          <Card title="Global Timetable & Safeguarding" emoji="🌍">
            Time-zoned live sessions plus recorded catch-up. Proctoring,
            attendance, and safeguarding policies designed for online delivery.
          </Card>
        </div>
      </section>

      {/* WHY QURTUBI */}
      <Section
        id="qurtubi"
        title="Why a Qurtubi School?"
        intro="Classical Andalus integration of revelation and reason, adapted for modern online learning."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Integrated Theology" emoji="🧭">
            Aqida, ahkam, sira, and hadith are interwoven as tafsir progresses
            so students see the whole din in one curriculum.
          </Card>
          <Card title="Arabic by Usage" emoji="🗣️">
            No Arabic required at entry; Arabic grows naturally through Qur&apos;an,
            poetry, and daily seminar practice. Arabic-from-zero placement.
          </Card>
          <Card title="Andalus Ethos" emoji="🏛️">
            Craft, geometry, prosody, and logic inform modern computing and data
            projects, reinforcing clarity and discipline of thought.
          </Card>
        </div>
      </Section>

      {/* CAMBRIDGE */}
      <Section
        id="cambridge"
        title="Cambridge Pathway (IGCSE / A-Level)"
        intro="Internationally recognized exams, fully compatible with online delivery."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Card title="Lower Secondary Bridge" emoji="🧩">
            Core foundations in English, Maths, Science, and Computing; Arabic
            literacy ramps from beginner if needed.
          </Card>
          <Card title="IGCSE (Grades 9–10)" emoji="🧪">
            Typical set: English, Maths, Sciences, Computer Science, plus
            electives. Optional Arabic as First/Second Language.
          </Card>
          <Card title="A-Level (Grades 11–12)" emoji="🎯">
            Depth in subjects such as Mathematics, Physics, Computer Science,
            and additional options per cohort demand; capstone research projects.
          </Card>
        </div>
      </Section>

      {/* CURRICULUM OVERVIEW */}
      <Section
        id="curriculum"
        title="Curriculum Overview"
        intro="Two equal halves: Qur'an/Qurtubi (humanities embedded) and Cambridge academics with AI-forward STEM."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Qur'an & Qurtubi" emoji="📚">
            Daily hifz and tafsir seminars; fiqh, hadith, balagha, and prosody
            integrated. Language arts outcomes met through scholarly reading and
            argumentation.
          </Card>
          <Card title="STEM & AI" emoji="🤖">
            Cambridge-aligned Maths/Science plus Computing and data projects.
            Responsible AI practice, model evaluation, and applied coding.
          </Card>
        </div>
      </Section>

      {/* ONLINE MODEL */}
      <Section
        id="online"
        title="Online Learning Model"
        intro="Live classes + guided independent work; everything designed for fully online schooling."
      >
        <ul className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            🗓️ Timetable: time-zoned live sessions and daily independent study
            blocks (no separate homework).
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            🛠️ Tools: LMS, video classroom, e-assessment, and
            plagiarism/proctoring systems.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            🗣️ Bilingual: Arabic and English tracks with language supports and
            Arabic-from-zero placement.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            🎓 Credentials: Cambridge IGCSE and A-Level preparation with
            supervised mocks and exam registration guidance.
          </li>
        </ul>
      </Section>

      {/* DOWNLOADS */}
      <Section id="downloads" title="Downloads">
        <div className="flex flex-wrap gap-3">
          {/* Use these placeholders now; swap comingSoon for hrefs once files are uploaded to /public */}
          <Button label="Prospectus (PDF)" comingSoon />
          <Button label="Fee Schedule (Online, PDF)" comingSoon />
          <Button label="Cambridge Pathway (IGCSE/A-Level, PDF)" comingSoon />
          <Button label="Technology & Timetable Guide (PDF)" comingSoon />
          <Button label="Safeguarding & Attendance (PDF)" comingSoon />
          <Button label="Admissions Guide (PDF)" comingSoon />
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-6 py-12 text-sm text-slate-600">
        <h4 className="font-semibold">School Names</h4>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          <li>Andalus International School of Qur&apos;an &amp; AI</li>
          <li>Cordoba Qurtubi Academy</li>
          <li>Qurtubi School of Qur&apos;an, Law &amp; AI</li>
        </ol>
        <p className="mt-6 text-xs text-slate-500">
          Online bilingual Islamic school. Cambridge IGCSE / A-Level pathway.
        </p>
      </footer>
    </main>
  );
}
