import React, { useState } from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform";
const CURRICULUM_URL =
  "/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf";

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  intro?: string;
};

const Section: React.FC<SectionProps> = ({ id, title, children, intro }) => (
  <section id={id} className="max-w-5xl mx-auto px-4 py-10">
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-3">
      {title}
    </h2>
    {intro && (
      <p className="text-sm md:text-base text-slate-700 mb-5">{intro}</p>
    )}
    {children}
  </section>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold mr-2 mb-2">
    ● {children}
  </span>
);

const NavLink: React.FC<{ href: string; label: string }> = ({
  href,
  label,
}) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-700 hover:text-slate-900"
  >
    {label}
  </a>
);

const PrimaryButton: React.FC<
  { href: string; children: React.ReactNode } & React.ComponentProps<"a">
> = ({ href, children, ...rest }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
    {...rest}
  >
    {children}
  </a>
);

const OutlineButton: React.FC<
  { href: string; children: React.ReactNode } & React.ComponentProps<"a">
> = ({ href, children, ...rest }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
    {...rest}
  >
    {children}
  </a>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900" id="top">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-base md:text-lg font-extrabold tracking-tight text-slate-900">
              Andalus
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <NavLink href="#overview" label="Overview" />
            <NavLink href="#highlights" label="Highlights" />
            <NavLink href="#curriculum" label="Curriculum" />
            <NavLink href="#tuition" label="Tuition" />
            <NavLink href="#faq" label="FAQ" />
            {/* THE ONLY APPLY BUTTON */}
            <PrimaryButton href={APPLY_URL}>
              Apply / Join Interest List
            </PrimaryButton>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-1 text-sm"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pb-4 space-y-2">
            <NavLink href="#overview" label="Overview" />
            <NavLink href="#highlights" label="Highlights" />
            <NavLink href="#curriculum" label="Curriculum" />
            <NavLink href="#tuition" label="Tuition" />
            <NavLink href="#faq" label="FAQ" />
            <div className="pt-2">
              <PrimaryButton href={APPLY_URL}>
                Apply / Join Interest List
              </PrimaryButton>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <header className="mx-auto max-w-5xl px-4 py-10">
        <p className="text-xs font-semibold tracking-wide text-emerald-700 mb-1">
          ONLINE BILINGUAL ISLAMIC SCHOOL · OPENING AUGUST 2026
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          Andalus International School of Qur&apos;an &amp; AI
        </h1>

        <div className="mb-4">
          <Tag>Qur&apos;an &amp; Tafseer al-Qurtubi as the spine</Tag>
          <Tag>Cambridge Primary (Grades 1–5)</Tag>
          <Tag>Bilingual Arabic / English</Tag>
        </div>

        <p className="max-w-3xl text-sm md:text-base text-slate-700">
          For the inaugural year (August 2026), Andalus is accepting applications
          for <span className="font-semibold">Grades 1–5 only</span>. Pupils
          memorise the Qur&apos;an, study Tafseer al-Qurtubi in Arabic for
          identity formation, and follow the Cambridge Primary pathway in English
          for mathematics, science, computing, and global perspectives. AI is
          used carefully to support practice and projects, while teachers remain
          the murabbīn.
        </p>
      </header>

      {/* OVERVIEW */}
      <Section
        id="overview"
        title="Why Families Choose Andalus"
        intro="A focused online environment designed for serious Muslim families who want Qur’an, character, and academic excellence together."
      >
        <ul className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>Live instruction from teachers.</strong> Small groups, live
            teaching, and structured discussion—not just self-paced videos.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>Hand-picked peers worldwide.</strong> Pupils learn with
            carefully selected classmates who share Islamic manners and goals.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>Qualified Cambridge subject teachers.</strong> English,
            maths, science, and computing are taught by teachers familiar with
            Cambridge Primary.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>Certified Islamic studies teachers.</strong> Qur&apos;an,
            Tafseer al-Qurtubi, fiqh, hadith, and Arabic are delivered by
            teachers grounded in orthodox Sunni scholarship.
          </li>
        </ul>
      </Section>

      {/* HIGHLIGHTS */}
      <Section id="highlights" title="School Highlights">
        <ul className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>Integrated Islamic &amp; Cambridge curriculum.</strong>{" "}
            Tafseer al-Qurtubi anchors Qur’an, fiqh, hadith and Arabic, while
            Cambridge Primary structures the empirical subjects.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>Small class sizes.</strong> Limited seats to protect quality
            of interaction and attention for each child.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>Regular feedback &amp; reports.</strong> Families receive
            consistent updates, assessment feedback, and termly reports.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            <strong>College &amp; career awareness.</strong> Guidance gradually
            prepares pupils for IGCSE/A-Level and future study and work aligned
            with Islamic values.
          </li>
        </ul>
      </Section>

      {/* CURRICULUM */}
      <Section
        id="curriculum"
        title="Curriculum Snapshot (Grades 1–5)"
        intro="Two intertwined strands: Islamic studies in Arabic with Tafseer al-Qurtubi as the spine, and Cambridge Primary in English for empirical subjects."
      >
        <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-700">
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold mb-2">
              Islamic Studies (Arabic Medium)
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Qur’an &amp; Tafseer:</strong> daily memorisation and
                tafseer from Tafseer al-Qurtubi (adapted for age).
              </li>
              <li>
                <strong>Fiqh:</strong> worship &amp; daily life, with gradual
                introduction to uṣūl al-fiqh and qawāʿid fiqhiyya in upper
                primary.
              </li>
              <li>
                <strong>Hadith:</strong> thematic aḥādīth on creed, worship and
                adab, plus age-appropriate basics of uṣūl al-ḥadīth / rijāl.
              </li>
              <li>
                <strong>Arabic:</strong> fuṣḥā literacy, grammar, and writing to
                access Qur’an and classical texts.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-4">
            <h3 className="text-sm font-semibold mb-2">
              Cambridge Primary (English Medium)
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>English: reading, writing, speaking &amp; listening.</li>
              <li>Mathematics: number, operations, geometry, measures, data.</li>
              <li>Science: biology, chemistry, physics through inquiry.</li>
              <li>Computing: digital literacy, coding, and online safety.</li>
              <li>
                Global Perspectives: community, history, geography, and Muslim
                contributions to civilisation.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <OutlineButton href={CURRICULUM_URL}>
            Download Full Curriculum Map (PDF)
          </OutlineButton>
        </div>
      </Section>

      {/* TUITION – ONLY MENTION OF TUITION */}
      <Section
        id="tuition"
        title="Tuition &amp; Fees"
        intro="Simple, transparent fees for the inaugural year of operation (Grades 1–5 only)."
      >
        <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700 space-y-2">
          <p>
            <strong>Annual tuition:</strong>{" "}
            <span className="font-semibold">$4,500 USD per child</span>.
          </p>
          <p>
            <strong>Enrollment deposit:</strong> $500 USD per child, paid after
            acceptance to secure a seat. The deposit is counted toward the total
            tuition.
          </p>
          <p>
            <strong>What tuition covers:</strong> live classes, teacher planning
            and grading time, learning management platform, and required online
            STEM/learning subscriptions used in class.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Families will receive a detailed payment schedule and policies at
            the offer-of-admission stage.
          </p>
        </div>
      </Section>

      {/* FAQ / APPLY INFO (NO EXTRA BUTTON) */}
      <Section
        id="faq"
        title="How to Apply"
        intro="Andalus is opening with limited seats for serious families committed to a Qur’an-centric upbringing."
      >
        <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2 mb-4">
          <li>Review the overview, curriculum, and tuition information.</li>
          <li>
            Use the{" "}
            <span className="font-semibold">
              “Apply / Join Interest List”
            </span>{" "}
            button in the top navigation bar.
          </li>
          <li>
            Complete the Google Form with your family details. You will receive
            a confirmation message after submission.
          </li>
          <li>
            If selected for the next step, you&apos;ll be contacted to schedule
            a parent conversation and placement discussion.
          </li>
        </ol>
        <p className="mt-4 text-xs text-slate-500">
          Career inquiries/applications are accepted only through LinkedIn.
        </p>
      </Section>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white mt-10">
        <div className="max-w-5xl mx-auto px-4 py-6 text-xs text-slate-500 space-y-2">
          <p>
            Andalus International School of Qur’an &amp; AI is an online school
            project of <span className="font-semibold">Muslim Lens Institute</span>,
            dedicated to Qur’an-centric, Cambridge-rigorous Islamic education.
          </p>
          <p>
            Careers: Career inquiries/applications are accepted only through
            LinkedIn.
          </p>
          <p>
            © {new Date().getFullYear()} Andalus International School of Qur&apos;an
            &amp; AI.
          </p>
        </div>
      </footer>
    </main>
  );
}
