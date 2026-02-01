import React, { useState } from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform?usp=sharing&ouid=104479175709144250534";

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
  eyebrow,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-0">
        {eyebrow && (
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-emerald-700">
            {eyebrow}
          </p>
        )}
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-4 text-sm text-slate-700">{children}</div>
      </div>
    </section>
  );
}

function HighlightCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-1 text-base font-semibold text-slate-900">{title}</p>
      <p className="text-sm text-slate-700">{children}</p>
    </div>
  );
}

function ApplyButton({ className = "" }: { className?: string }) {
  return (
    <button
      onClick={() => window.open(APPLY_URL, "_blank")}
      className={
        "inline-flex items-center justify-center rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 " +
        className
      }
    >
      Apply / Join Interest List
    </button>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "overview", label: "Overview" },
    { id: "highlights", label: "Highlights" },
    { id: "curriculum", label: "Curriculum" },
    { id: "tuition", label: "Tuition" },
    { id: "faq", label: "FAQ" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-0">
          <button
            onClick={() => scrollTo("overview")}
            className="text-base font-extrabold tracking-tight text-slate-900"
          >
            Andalus
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="hover:text-slate-900 hover:underline"
              >
                {item.label}
              </button>
            ))}
            <ApplyButton />
          </div>

          {/* Mobile nav toggle */}
          <button
            className="inline-flex items-center rounded-md border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
          >
            Menu
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 text-sm md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-slate-700 hover:text-slate-900"
                >
                  {item.label}
                </button>
              ))}
              <ApplyButton className="mt-2 w-full justify-center" />
            </div>
          </div>
        )}
      </nav>

      {/* HERO / OVERVIEW */}
      <section id="overview" className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6 lg:px-0">
          {/* Banner */}
          <img
            src="/andalus_banner_clean.png"
            alt="Andalus International School of Qur'an & AI banner"
            className="mb-8 w-full rounded-3xl object-cover shadow-md"
          />

          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Online bilingual Islamic school · Opening August 2026
          </p>

          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Andalus International School of Qur&apos;an &amp; AI
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>Qur&apos;an &amp; Tafseer al-Qurtubi as the spine</Pill>
            <Pill>AI-first STEM (Science, Technology, Engineering &amp; Maths)</Pill>
            <Pill>Cambridge Primary (Grades 1–5)</Pill>
            <Pill>Bilingual Arabic / English</Pill>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-slate-700">
            For the inaugural year (August 2026), Andalus is accepting applications
            for <span className="font-semibold">Grades 1–5 only.</span> Andalus
            is a Qur&apos;an-centric online school for practicing Muslim families.
            Pupils memorise the Qur&apos;an, study Tafseer al-Qurtubi in Arabic for
            identity formation, and follow the Cambridge-aligned{" "}
            <span className="font-semibold">STEM pathway</span> in English for
            mathematics, science, computing, and global perspectives. AI is used
            carefully to support practice and projects, while teachers remain the
            murabbīn.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ApplyButton />
            <button
              onClick={() =>
                scrollTo("tuition")
              }
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100"
            >
              View Tuition &amp; Fees
            </button>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <Section
        id="highlights"
        title="Why Families Choose Andalus"
        eyebrow="Highlights"
      >
        <p className="mb-4">
          A focused online environment designed for serious Muslim families who
          want Qur&apos;an, character, and academic excellence together.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <HighlightCard title="Live instruction from teachers">
            Daily live sessions rather than self-paced videos.
          </HighlightCard>
          <HighlightCard title="Hand-picked peers">
            Peers from around the world, providing well-mannered online
            companionship in daily lessons.
          </HighlightCard>
          <HighlightCard title="Qualified Cambridge subject teachers">
            Teachers for English, Mathematics, Science, Global Perspectives, and
            Computing with Cambridge-aligned experience.
          </HighlightCard>
          <HighlightCard title="Certified Islamic studies teachers">
            Qur&apos;an, Fiqh, Hadith, and Arabic teachers grounded in orthodox
            Sunni scholarship.
          </HighlightCard>
          <HighlightCard title="Small class sizes">
            Deliberate sectioning to preserve focus, akhlāq, and interaction.
          </HighlightCard>
          <HighlightCard title="Regular feedback, assessments, and reports">
            Parents can see progress clearly across both Islamic and Cambridge
            subjects.
          </HighlightCard>
          <HighlightCard title="College and career counseling">
            As pupils grow, families receive guidance for IGCSE, A-Levels, and
            beyond.
          </HighlightCard>
        </div>
      </Section>

      {/* CURRICULUM */}
      <Section
        id="curriculum"
        title="Curriculum Overview (Grades 1–5)"
        eyebrow="Curriculum"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">
              Islamic Core (in Arabic)
            </h3>
            <ul className="list-disc pl-5 text-sm">
              <li>Qur&apos;an memorisation, tajwīd, and daily tilāwah</li>
              <li>Tafseer al-Qurtubi as the spine across the school</li>
              <li>
                Fiqh (with uṣūl al-fiqh &amp; qawāʿid as age-appropriate)
              </li>
              <li>
                Hadith (with basics of uṣūl al-ḥadīth &amp; rijāl as pupils
                mature)
              </li>
              <li>
                Arabic: reading, writing, and expression built around Qur&apos;an
                and classical texts
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-900">
              Cambridge Primary (STEM &amp; Humanities)
            </h3>
            <ul className="list-disc pl-5 text-sm">
              <li>English (language, literature, and composition)</li>
              <li>Mathematics (Cambridge Primary Maths)</li>
              <li>Science (inquiry-based, lab-simulation rich)</li>
              <li>Computing &amp; foundational coding</li>
              <li>Global Perspectives &amp; project-based learning</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm font-semibold text-slate-900">
            Detailed curriculum map
          </p>
          <p className="mb-3 text-sm text-slate-700">
            A full grade-by-grade map is available for parents who want to see
            how Qur&apos;an, Arabic, Islamic studies, and Cambridge subjects fit
            together.
          </p>
          <a
            href="/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100"
          >
            Download Curriculum Map (PDF)
          </a>
        </div>
      </Section>

      {/* TUITION */}
      <Section id="tuition" title="Tuition &amp; Fees" eyebrow="Tuition">
        <ul className="space-y-2 text-sm">
          <li>
            <span className="font-semibold">
              Annual tuition per pupil (Grades 1–5):
            </span>{" "}
            4,500 USD.
          </li>
          <li>
            Example payment plan: one payment of 4,500 USD, or 10 monthly
            payments of 450 USD.
          </li>
          <li>
            <span className="font-semibold">Refundable enrollment deposit:</span>{" "}
            500 USD per pupil after a conditional offer is made, credited toward
            tuition.
          </li>
          <li>
            Deposit fully refundable until 30 days before term start; normally
            non-refundable after that except documented hardship cases at the
            school&apos;s discretion.
          </li>
          <li>
            Tuition is all-inclusive for core learning: live classes, Islamic
            studies, and online subscriptions to STEM and literacy apps used in
            lessons.
          </li>
        </ul>
      </Section>

      {/* HOW TO APPLY / FAQ */}
      <Section
        id="faq"
        title="How to Apply"
        eyebrow="FAQ"
      >
        <ol className="space-y-2 text-sm">
          <li>
            <span className="font-semibold">1.</span> Fill out the online
            application / interest form (one per family). Provide basic details:
            parent contact, child&apos;s age, requested grade, location, and
            Qur&apos;an background.
          </li>
          <li>
            <span className="font-semibold">2.</span> If there is a potential
            fit, the school will invite you to a short online info call and a
            simple placement check.
          </li>
          <li>
            <span className="font-semibold">3.</span> If an offer is made and
            you wish to accept, you will be asked to pay the refundable
            enrollment deposit (500 USD) to secure the place.
          </li>
        </ol>

        <div className="mt-5">
          <ApplyButton />
        </div>
      </Section>

      {/* CONTACT + FOOTER */}
      <section className="bg-slate-50 pb-12 pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-900">
            Contact
          </h2>
          <p className="mt-2 text-sm text-slate-700">
            For questions about admissions, teaching roles, or partnerships.
          </p>

          <div className="mt-4 space-y-2 text-sm text-slate-700">
            <p>
              ✉️ Email:{" "}
              <a
                href="mailto:muslimlensinstitute@consultant.com"
                className="font-semibold text-emerald-700 hover:underline"
              >
                muslimlensinstitute@consultant.com
              </a>
            </p>
            <p>
              🌐{" "}
              <span className="font-semibold">
                Career inquiries / applications are accepted only through
                LinkedIn.
              </span>
            </p>
            <p>
              If you email, please include your name, country, child&apos;s
              current or intended grade, and whether you are asking as a parent,
              teacher, or partner.
            </p>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-600">
            <p>
              Andalus International School of Qur&apos;an &amp; AI – Online,
              Grades 1–5 (opening August 2026).
            </p>
            <p className="mt-1">
              Curriculum: Qur&apos;an &amp; Tafseer al-Qurtubi (Islamic core) ·
              Cambridge Primary (English, Maths, Science, Global Perspectives,
              Computing).
            </p>
            <p className="mt-1">
              Andalus International School of Qur&apos;an &amp; AI is an online
              school project of Muslim Lens Institute, dedicated to
              Qur&apos;an-centric, Cambridge-rigorous Islamic education.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
