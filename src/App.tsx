import React, { useEffect, useMemo, useState } from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform?usp=sharing&ouid=104479175709144250534";

// Hidaayah store link for the Islamic pedagogy book
const HIDAAH_STORE_URL =
  "https://www.al-hidaayah.co.uk/products/a-beginners-guide-to-understanding-islamic-pedagogy-by-dr-mohammed-sabrin";

// Public PDFs (must exist in /public)
const PDFS = {
  curriculum: "/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf",
  calendar: "/Academic_Calendar_Andalus_Online_2026-2027.pdf",
  handbook: "/Student_Handbook_Andalus_Online_Y1.pdf",
  tuition: "/Tuition_and_Fees_Andalus_Online_Y1.pdf",
};

// Images (must exist in /public)
const IMAGES = {
  banner: "/andalus_banner_clean.png",
  founder: "/founder_headset.jpg", // put your black-background headset photo in /public with this exact name
};

function setMeta(title: string, description: string) {
  document.title = title;

  let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;
}

function useHashRoute() {
  const getRoute = () => {
    const raw = window.location.hash || "#/";
    // normalize: "#/about" -> "/about"
    const cleaned = raw.replace(/^#/, "");
    return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
  };

  const [route, setRoute] = useState<string>(getRoute());

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return route;
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
  eyebrow,
}: {
  id?: string;
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

function DownloadButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={
        "inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-100 " +
        className
      }
    >
      {children}
    </a>
  );
}

function PageShell({
  children,
  active,
}: {
  children: React.ReactNode;
  active: "home" | "admissions" | "tuition" | "about";
}) {
  const nav = useMemo(
    () => [
      { href: "#/", label: "Home", key: "home" as const },
      { href: "#/admissions", label: "Admissions", key: "admissions" as const },
      { href: "#/tuition", label: "Tuition", key: "tuition" as const },
      { href: "#/about", label: "About", key: "about" as const },
    ],
    []
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-0">
          <a href="#/" className="text-base font-extrabold tracking-tight text-slate-900">
            Andalus
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            {nav.map((n) => (
              <a
                key={n.key}
                href={n.href}
                className={
                  "hover:text-slate-900 hover:underline " +
                  (active === n.key ? "text-slate-900 underline" : "text-slate-700")
                }
              >
                {n.label}
              </a>
            ))}
            <ApplyButton />
          </div>

          {/* Mobile nav */}
          <div className="md:hidden">
            <ApplyButton />
          </div>
        </div>
      </nav>

      {children}

      {/* FOOTER: Downloads always at bottom */}
      <section className="bg-slate-50 pb-12 pt-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">
          <div className="mt-6 border-t border-slate-200 pt-6">
            <p className="text-sm font-semibold text-slate-900">Downloads</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <DownloadButton href={PDFS.curriculum}>Curriculum Map (PDF)</DownloadButton>
              <DownloadButton href={PDFS.calendar}>Academic Calendar (PDF)</DownloadButton>
              <DownloadButton href={PDFS.handbook}>Student Handbook (PDF)</DownloadButton>
              <DownloadButton href={PDFS.tuition}>Tuition &amp; Fees (PDF)</DownloadButton>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-200 pt-4 text-xs text-slate-600">
            <p>
              Andalus International School of Qur&apos;an &amp; AI is an online school project of Muslim Lens Institute,
              dedicated to Qur&apos;an-centric, Cambridge-rigorous Islamic education.
            </p>
            <p className="mt-2">
              Email:{" "}
              <a
                href="mailto:muslimlensinstitute@consultant.com"
                className="font-semibold text-emerald-700 hover:underline"
              >
                muslimlensinstitute@consultant.com
              </a>{" "}
              · Career inquiries/applications are accepted only through LinkedIn.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------------- PAGES ---------------- */

function HomePage() {
  useEffect(() => {
    setMeta(
      "Andalus International School of Qur’an & AI",
      "Qur’an-centric, Cambridge-rigorous online (virtual) school for practicing Muslim families. Grades 1–5. Live, synchronous classes."
    );
  }, []);

  return (
    <>
      {/* HERO / OVERVIEW */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 pb-10 pt-6 sm:px-6 lg:px-0">
          <img
            src={IMAGES.banner}
            alt="Andalus International School of Qur'an & AI banner"
            className="mb-8 w-full rounded-3xl object-cover shadow-md"
          />

          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
            Online (virtual) bilingual Islamic school
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
            Andalus is a Qur&apos;an-centric online school for serious practicing Muslim families globally.
            Pupils study Qur&apos;an with deep understanding anchored in Tafseer al-Qurtubi, and follow a Cambridge-aligned
            pathway in English for Mathematics, Science, Computing, and Global Perspectives. AI supports practice and
            projects under clear boundaries, while teachers remain the murabbīn.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <ApplyButton />
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <Section title="Why Families Choose Andalus" eyebrow="Highlights">
        <p className="mb-4">
          A focused online environment designed for serious Muslim families who want Qur&apos;an, character, and academic excellence together.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <HighlightCard title="Live instruction from teachers">
            Daily live sessions rather than self-paced videos.
          </HighlightCard>
          <HighlightCard title="Cambridge-aligned STEM in English">
            English, Mathematics, Science, Computing, and Global Perspectives aligned to Cambridge expectations.
          </HighlightCard>
          <HighlightCard title="Qur’an-centric Islamic formation">
            Integrated Islamic learning anchored in Tafseer al-Qurtubi, with clear age-appropriate application.
          </HighlightCard>
          <HighlightCard title="Small class sizes">
            Deliberate sectioning to preserve focus, akhlāq, and interaction.
          </HighlightCard>
          <HighlightCard title="Regular feedback and reports">
            Parents can see progress clearly across both Islamic and Cambridge subjects.
          </HighlightCard>
          <HighlightCard title="Parent partnership">
            Clear routines, expectations, and communication for a strong home–school relationship.
          </HighlightCard>
        </div>
      </Section>

      {/* CURRICULUM (brief, parent-friendly) */}
      <Section title="Curriculum (Grades 1–5)" eyebrow="Curriculum">
        <p className="text-sm text-slate-700">
          The programme integrates Qur&apos;an-centric Islamic formation anchored in Tafseer al-Qurtubi with a Cambridge-aligned
          STEM pathway in English. For the full grade-by-grade map, download the Curriculum Map (PDF) in the Downloads section below.
        </p>
      </Section>

      {/* APPLY */}
      <Section title="How to Apply" eyebrow="Admissions">
        <ol className="space-y-2 text-sm">
          <li>
            <span className="font-semibold">1)</span> Complete the Apply / Interest List form (one per family).
          </li>
          <li>
            <span className="font-semibold">2)</span> If there is a potential fit, we schedule a short online call and a simple placement check.
          </li>
          <li>
            <span className="font-semibold">3)</span> Families receive next-step instructions and onboarding guidance.
          </li>
        </ol>

        <div className="mt-5">
          <ApplyButton />
        </div>
      </Section>
    </>
  );
}

function AdmissionsPage() {
  useEffect(() => {
    setMeta(
      "Admissions | Andalus International School of Qur’an & AI",
      "Admissions for Andalus International School of Qur’an & AI. Grades 1–5. Apply via the interest list form."
    );
  }, []);

  return (
    <Section title="Admissions" eyebrow="Apply">
      <p className="text-sm text-slate-700">
        Andalus serves serious practicing Muslim families seeking Qur&apos;an-centric formation and Cambridge-aligned academic rigor
        in a live online (virtual) school environment.
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

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">What helps families succeed online</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>Consistent daily routines and punctual attendance</li>
          <li>A quiet learning space and stable internet connection</li>
          <li>Strong home–school communication and parent partnership</li>
          <li>Alignment with a Qur&apos;an-centric, orthodox Sunni approach</li>
        </ul>
      </div>
    </Section>
  );
}

function TuitionPage() {
  useEffect(() => {
    setMeta(
      "Tuition & Fees | Andalus International School of Qur’an & AI",
      "Tuition and fee details for Andalus International School of Qur’an & AI. Download the official Tuition & Fees PDF."
    );
  }, []);

  return (
    <Section title="Tuition & Fees" eyebrow="Tuition">
      <p className="text-sm text-slate-700">
        Tuition, deposit, refund, and payment policy details are provided in the official Tuition &amp; Fees PDF.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <DownloadButton href={PDFS.tuition}>Download Tuition &amp; Fees (PDF)</DownloadButton>
        <ApplyButton />
      </div>
    </Section>
  );
}

function AboutPage() {
  useEffect(() => {
    setMeta(
      "About | Andalus International School of Qur’an & AI",
      "About Andalus: Qur’an-centric, Cambridge-rigorous online (virtual) school. Mission, founder bio, and parent-friendly teaching testimonials."
    );
  }, []);

  return (
    <Section title="About Andalus" eyebrow="Mission & Founder">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Our mission</p>
          <p className="mt-2 text-sm text-slate-700">
            Andalus exists to serve serious practicing Muslim families with a Qur&apos;an-centric education that is academically rigorous
            and globally legible. Islamic formation is anchored in Tafseer al-Qurtubi, and pupils follow a Cambridge-aligned pathway in
            English for STEM and core academics. AI supports practice and projects under clear ethical boundaries, while teachers remain
            the murabbīn.
          </p>

          <div className="mt-5">
            <ApplyButton />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-semibold text-slate-900">Founder</p>

          <img
            src={IMAGES.founder}
            alt="Mohammed Sabrin"
            className="mt-3 w-full rounded-2xl object-cover"
            onError={(e) => {
              // If you forgot to upload /public/founder_headset.jpg, this will avoid a broken icon
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />

          <p className="mt-3 text-sm text-slate-700">
            Mohammed Sabrin is a career educator with domestic and international experience in teaching, teacher development,
            and curriculum work across multiple contexts.
          </p>

          <p className="mt-3 text-sm text-slate-700">
            Islamic Pedagogy Book (Hidaayah Store):{" "}
            <a
              href={HIDAAH_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-emerald-700 hover:underline"
            >
              View on Al-Hidaayah
            </a>
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">
          Our founder is a career teacher. Here’s what learners have said about his teaching.
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <blockquote className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            “He demonstrates mastery of his subject matter and breaks difficult concepts into simple chunks.”
          </blockquote>

          <blockquote className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            “The instructor was a very lively person… I genuinely enjoyed his classes… he worked best for me, mashaa Allah.”
          </blockquote>

          <blockquote className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            “You have truly given a voice to my thoughts… jazakAllahu khayran for this wonderful eye opening piece.”
          </blockquote>

          <blockquote className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            “I have been listening to you when I walk, when I work, and when I drive… That’s the power of being a good teacher.”
          </blockquote>
        </div>

        <p className="mt-3 text-xs text-slate-600">
          (Testimonials excerpted from prior learner feedback and correspondence.)
        </p>
      </div>
    </Section>
  );
}

/* ---------------- APP ---------------- */

export default function App() {
  const route = useHashRoute();

  // route mapping
  const active =
    route.startsWith("/admissions") ? "admissions" :
    route.startsWith("/tuition") ? "tuition" :
    route.startsWith("/about") ? "about" :
    "home";

  return (
    <PageShell active={active}>
      {active === "home" && <HomePage />}
      {active === "admissions" && <AdmissionsPage />}
      {active === "tuition" && <TuitionPage />}
      {active === "about" && <AboutPage />}
    </PageShell>
  );
}
