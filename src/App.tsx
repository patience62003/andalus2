import React, { useState, useEffect } from "react";

type ButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
};

function Button({ label, href, onClick, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors";
  const styles: Record<string, string> = {
    primary: `${base} bg-slate-900 text-white hover:bg-slate-800`,
    secondary: `${base} bg-emerald-600 text-white hover:bg-emerald-500`,
    outline: `${base} border border-slate-300 text-slate-800 bg-white hover:bg-slate-50`,
  };

  if (href) {
    return (
      <a className={styles[variant]} href={href} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
  }

  return (
    <button className={styles[variant]} onClick={onClick}>
      {label}
    </button>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">
      ● {text}
    </span>
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
    <section id={id} className="max-w-5xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-3 text-slate-900">{title}</h2>
      {intro && <p className="text-sm text-slate-700 mb-5">{intro}</p>}
      {children}
    </section>
  );
}

export default function App() {
  const APPLY_LINK =
    "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform?usp=sharing&ouid=104479175709144250534";

  const [showLeadModal, setShowLeadModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLeadModal(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  const handleLeadClick = () => {
    window.open(APPLY_LINK, "_blank", "noopener,noreferrer");
    setShowLeadModal(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900" id="top">
      {/* Sticky top nav */}
      <nav className="sticky top-0 z-20 backdrop-blur bg-white/90 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#top" className="font-extrabold tracking-tight text-slate-900">
            Andalus
          </a>
          <div className="flex items-center gap-3 text-sm">
            <a href="#overview" className="px-3 py-1 rounded hover:bg-slate-100">
              Overview
            </a>
            <a href="#highlights" className="px-3 py-1 rounded hover:bg-slate-100">
              Highlights
            </a>
            <a href="#curriculum" className="px-3 py-1 rounded hover:bg-slate-100">
              Curriculum
            </a>
            <a href="#tuition" className="px-3 py-1 rounded hover:bg-slate-100">
              Tuition
            </a>
            {/* Removed the old text "Apply" link here */}
            <Button label="APPLY" href={APPLY_LINK} variant="secondary" />
          </div>
        </div>
      </nav>

      {/* HERO / OVERVIEW */}
      <header id="overview" className="max-w-5xl mx-auto px-6 py-10">
        <p className="text-xs tracking-wide text-slate-500 mb-2">
          ONLINE BILINGUAL ISLAMIC SCHOOL · OPENING AUGUST 2026
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          Andalus International School of Qur&apos;an &amp; AI
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge text="Qur'an & Tafseer al-Qurtubi as the spine" />
          <Badge text="Cambridge Primary (Grades 1–5)" />
          <Badge text="Bilingual Arabic / English" />
        </div>
        <p className="mt-4 text-sm text-amber-700 font-semibold">
          For the inaugural year (August 2026), Andalus is accepting applications for{" "}
          <span className="underline">Grades 1–5 only</span>.
        </p>
        <p className="mt-4 max-w-3xl text-slate-700 text-sm md:text-base">
          Andalus is a Qur&apos;an-centric online school for practicing Muslim families. Pupils memorise
          the Qur&apos;an, study Tafseer al-Qurtubi in Arabic for identity formation, and follow the
          Cambridge Primary pathway in English for mathematics, science, computing, and global
          perspectives. AI is used carefully to support practice and projects, while teachers remain
          the murabbīn.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button label="Apply / Join Interest List" href={APPLY_LINK} variant="secondary" />
          <Button
            label="Tuition & Fees (PDF)"
            href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
            variant="outline"
          />
        </div>
      </header>

      {/* HIGHLIGHTS */}
      <Section
        id="highlights"
        title="Why Families Choose Andalus"
        intro="A focused online environment designed for serious Muslim families who want Qur’an, character, and academic excellence together."
      >
        <ul className="grid gap-3 md:grid-cols-2 text-sm text-slate-700">
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ <b>Live instruction from teachers</b> – daily live sessions rather than self-paced videos.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ <b>Hand-picked peers</b> from around the world, providing well-mannered online companionship
            in daily lessons.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ <b>Qualified Cambridge subject teachers</b> for English, Mathematics, Science, Global
            Perspectives, and Computing.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ <b>Certified Islamic studies teachers</b> (Qur&apos;an, Fiqh, Hadith, Arabic) grounded in
            orthodox Sunni scholarship.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ <b>Small class sizes</b> with deliberate sectioning to preserve focus, akhlāq, and interaction.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ <b>Regular feedback, assessments, and reports</b> so parents can see progress clearly across
            both Islamic and Cambridge subjects.
          </li>
          <li className="rounded-xl border border-slate-200 bg-white p-4">
            ✅ <b>College and career counseling</b> as pupils grow, helping families plan pathways through
            IGCSE, A-Levels, and beyond.
          </li>
        </ul>
      </Section>

      {/* CURRICULUM */}
      <Section
        id="curriculum"
        title="Curriculum Snapshot (Grades 1–5)"
        intro="Four Islamic core teachers (Qur'an, Fiqh, Hadith, Arabic) and Cambridge academics designed together."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Islamic Core" emoji="🕋">
            Qur&apos;an (memorisation, tajwīd, Tafseer al-Qurtubi), Fiqh (with usūl and qawā‘id as
            age-appropriate), Hadith (with usūl al-hadith and rijāl basics), and Arabic language.
            Sīrah and adab are woven into these subjects rather than taught separately.
          </Card>
          <Card title="Cambridge Primary Core" emoji="🔬">
            Cambridge Primary English, Mathematics, Science, Global Perspectives, and Computing,
            preparing pupils for later Cambridge assessments.
          </Card>
          <Card title="Language Development" emoji="💬">
            Arabic (fuṣḥā) for Qur&apos;an and Islamic texts; English for reading, writing, and discussion in
            Cambridge classes. Support for pupils entering with different backgrounds.
          </Card>
          <Card title="AI in Practice" emoji="🤖">
            AI tools are used to visualise concepts, give feedback, and support projects — always under
            teacher supervision and within clear Islamic ethical boundaries.
          </Card>
        </div>

        <div className="mt-5">
          <Button
            label="Curriculum Maps (Grades 1–5, PDF)"
            href="/Curriculum_Maps_Andalus_Online_Cambridge_1-5.pdf"
          />
        </div>
      </Section>

      {/* TUITION */}
      <Section
        id="tuition"
        title="Tuition & Fees – Year 1"
        intro="Simple, transparent fees for the first year of operation (Grades 1–5 only)."
      >
        <ul className="text-sm text-slate-700 space-y-2">
          <li>
            • Annual tuition per pupil (Grades 1–5): <b>4,500 USD</b>.
          </li>
          <li>• Same tuition for each grade level in Year 1.</li>
          <li>
            • Example payment plan: one payment of 4,500 USD, or 10 monthly payments of 450 USD.
          </li>
          <li>
            • <b>Refundable enrollment deposit:</b> 500 USD per pupil after a conditional offer is
            made. Credited towards tuition.
          </li>
          <li>
            • Deposit fully refundable until 30 days before term start; normally non-refundable after
            that except documented hardship cases at the school&apos;s discretion.
          </li>
          <li>
            • Tuition is all-inclusive for core learning: live classes, Islamic studies, and online
            subscriptions to STEM and literacy apps used in lessons.
          </li>
        </ul>

        <div className="mt-4">
          <Button
            label="Download Tuition & Fees (PDF)"
            href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
            variant="outline"
          />
        </div>
      </Section>

      {/* APPLY SECTION */}
      <Section
        id="apply"
        title="How to Apply"
        intro="Applications for the first cohort (Grades 1–5, August 2026) are now open."
      >
        <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2">
          <li>
            Fill out the online application / interest form (one per family). Provide basic details:
            parent contact, child&apos;s age, requested grade, location, and Qur&apos;an background.
          </li>
          <li>
            If there is a potential fit, the school will invite you to a short online info call and a
            simple placement check.
          </li>
          <li>
            If an offer is made and you wish to accept, you will be asked to pay the refundable
            enrollment deposit (500 USD) to secure the place.
          </li>
        </ol>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button label="Apply / Join Interest List" href={APPLY_LINK} variant="secondary" />
          <Button
            label="Download Tuition & Fees"
            href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
            variant="outline"
          />
        </div>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact"
        intro="For questions about admissions, teaching roles, or partnerships."
      >
        <div className="space-y-2 text-sm text-slate-700">
          <p>📧 Email: muslimlensinstitute@consultant.com</p>
          <p>🌐 Applications are accepted only through LinkedIn and the online apply form.</p>
          <p>
            If you email, please include your name, country, child&apos;s current or intended grade, and
            whether you are asking as a parent, teacher, or partner.
          </p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-6 py-10 text-xs text-slate-500">
        <p>Andalus International School of Qur&apos;an &amp; AI – Online, Grades 1–5 (opening August 2026).</p>
        <p className="mt-1">
          Curriculum: Qur&apos;an & Tafseer al-Qurtubi (Islamic core) · Cambridge Primary (English, Maths,
          Science, Global Perspectives, Computing).
        </p>
      </footer>

      {/* LEAD POPUP → SIMPLE LINK TO GOOGLE FORM */}
      {showLeadModal && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40">
          <div className="max-w-md w-full rounded-2xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Get updates about Andalus (Grades 1–5)
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              Andalus International School of Qur&apos;an &amp; AI is planning to open its online primary
              programme in August 2026, in shā&apos; Allāh. If you would like to receive updates and
              admissions information, please fill out our short application / interest form.
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              <Button
                label="Open application / interest form"
                onClick={handleLeadClick}
                variant="secondary"
              />
              <button
                className="text-xs text-slate-500 hover:underline"
                onClick={() => setShowLeadModal(false)}
              >
                Not now
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
