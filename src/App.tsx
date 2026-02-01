import React from "react";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd9j0FERdFhhw9Dfz26qJu1qypU521orgNrln49nkq9ZPhFlg/viewform";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#overview" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-slate-900" aria-hidden />
            <div className="leading-tight">
              <div className="text-sm font-semibold">
                Andalus International School of Qur&apos;an &amp; AI
              </div>
              <div className="text-xs text-slate-600">
                Qur&apos;an-centric, Cambridge-rigorous, Online
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a className="hover:text-slate-700" href="#overview">
              Overview
            </a>
            <a className="hover:text-slate-700" href="#highlights">
              Highlights
            </a>
            <a className="hover:text-slate-700" href="#curriculum">
              Curriculum
            </a>
            <a className="hover:text-slate-700" href="#tuition">
              Tuition
            </a>
            <a className="hover:text-slate-700" href="#downloads">
              Downloads
            </a>
            <a className="hover:text-slate-700" href="#faq">
              FAQ
            </a>
          </nav>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Apply / Join Interest List
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="overview" className="border-b">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Qur&apos;an-centric. Cambridge-rigorous. AI-informed.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              Andalus International School of Qur&apos;an &amp; AI is a 100% online, live,
              synchronous school project for serious practicing Muslim families globally.
              We open in <span className="font-semibold">August 2026</span> with
              <span className="font-semibold"> Grades 1 to 5</span>.
            </p>

            <p className="mt-4 text-base leading-relaxed text-slate-700">
              The program unites Qur&apos;an-centric Islamic formation anchored in
              <span className="font-semibold"> Tafseer al-Qurtubi</span> with a Cambridge-aligned STEM pathway in English.
              Teachers remain the murabbīn. AI supports practice and projects under clear boundaries.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Apply / Join Interest List
              </a>

              <a
                href="/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
              >
                Download Curriculum Map (PDF)
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Andalus International School of Qur&apos;an &amp; AI is an online school project of Muslim Lens Institute,
              dedicated to Qur&apos;an-centric, Cambridge-rigorous Islamic education.
            </p>
          </div>

          <div className="rounded-3xl border bg-slate-50 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">At-a-glance</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li>
                <span className="font-semibold">Mode:</span> 100% online, live classes (not self-paced videos)
              </li>
              <li>
                <span className="font-semibold">Grades at launch:</span> 1 to 5
              </li>
              <li>
                <span className="font-semibold">STEM emphasis:</span> Cambridge Primary aligned in English (Maths, Science, Computing, English, Global Perspectives)
              </li>
              <li>
                <span className="font-semibold">Islamic model:</span> one integrated daily Qur&apos;an spiral lesson anchored in Tafseer al-Qurtubi
              </li>
              <li>
                <span className="font-semibold">Teachers remain the murabbīn:</span> AI supports practice, not replacement
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-white p-4">
              <div className="text-sm font-semibold">Next step</div>
              <p className="mt-2 text-sm text-slate-700">
                Join the interest list and receive launch updates, sample schedules, and admissions instructions.
              </p>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Apply / Join Interest List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Highlights</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              "Live instruction from teachers (not self-paced videos)",
              "Small class sizes and regular feedback",
              "Cambridge-aligned STEM track with visible academic rigor",
              "Orthodox Sunni formation grounded in Qur'an-centric learning",
              "Well-mannered online companionship with hand-picked peers",
              "Long-term pathway support through Cambridge progression (IGCSE and beyond)",
            ].map((item) => (
              <div key={item} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-700">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Curriculum</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Integrated Islamic studies (weekly Qur&apos;an spiral)</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Pupils study a weekly set of Qur&apos;anic ayat (typically 13 to 20 per week).
                The instructor selects the exact number so topics remain coherent and lessons do not stop mid-topic,
                recognizing that Makkan ayat are often shorter than Madinan ayat.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Each day, pupils return to the same weekly ayat (spiral learning). In the daily lesson they work on:
                memorization with tajweed, key tafsir meanings, relevant fiqh applications, related ahadith, and Arabic language.
                Over approximately 40 instructional weeks per year, this model supports completion of Qur&apos;an memorization
                with integrated tafsir, hadith, fiqh, and Arabic development by Grade 12.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                Primary sequence begins from the back of the Qur&apos;an moving forward. By upper primary, the long-term plan transitions
                to foundational surahs at the beginning for stronger preparation entering adolescence.
              </p>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Cambridge-aligned STEM track</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                English, Mathematics, Science, Computing, and Global Perspectives in English, aligned to Cambridge Primary expectations.
                AI-supported activities are used for practice, feedback, and project iteration under teacher supervision.
              </p>
              <a
                href="/Curriculum_Maps_Andalus_Online_Cambridge_1-5_v3.pdf"
                className="mt-5 inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
              >
                Download Curriculum Map (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition */}
      <section id="tuition" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Tuition &amp; Fees</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            Tuition is all-inclusive for live instruction, Islamic studies, and online subscriptions used in lessons.
            Grades 1 to 5 share the same tuition in Year 1.
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border bg-white p-6 shadow-sm md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-xs font-semibold text-slate-600">Pay in full (annual)</div>
                  <div className="mt-2 text-3xl font-bold">$4,000</div>
                  <div className="mt-2 text-sm text-slate-700">
                    One-time payment for the full academic year
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <div className="text-xs font-semibold text-slate-600">Monthly plan</div>
                  <div className="mt-2 text-3xl font-bold">$450</div>
                  <div className="mt-2 text-sm text-slate-700">
                    10 monthly payments (total $4,500)
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 p-5">
                <div className="text-sm font-semibold">Enrollment deposit</div>
                <p className="mt-2 text-sm text-slate-700">
                  A <span className="font-semibold">$500 refundable enrollment deposit</span> is required per pupil and is credited toward tuition.
                  The deposit is fully refundable until 30 days before term start; after that it is normally non-refundable,
                  except hardship at the school’s discretion.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold hover:bg-slate-50"
                >
                  Download Tuition PDF
                </a>
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  Apply / Join Interest List
                </a>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">What&apos;s included</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                <li>Live online classes with teachers</li>
                <li>Integrated Islamic studies with weekly Qur&apos;an spiral model</li>
                <li>Cambridge-aligned STEM track in English</li>
                <li>Online subscriptions used during lessons</li>
                <li>Assessments, feedback, and reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">Downloads</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">
            Public documents for families. Additional materials are shared directly with enrolled families.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <a
              href="/Tuition_and_Fees_Andalus_Online_Y1.pdf"
              className="rounded-2xl border bg-white p-5 shadow-sm hover:bg-slate-50"
            >
              <div className="text-sm font-semibold">Tuition and Fees</div>
              <div className="mt-1 text-xs text-slate-600">PDF</div>
            </a>

            <a
              href="/Academic_Calendar_Andalus_Online_2026-2027.pdf"
              className="rounded-2xl border bg-white p-5 shadow-sm hover:bg-slate-50"
            >
              <div className="text-sm font-semibold">Academic Calendar</div>
              <div className="mt-1 text-xs text-slate-600">PDF</div>
            </a>

            <a
              href="/Student_Handbook_Andalus_Online_Y1.pdf"
              className="rounded-2xl border bg-white p-5 shadow-sm hover:bg-slate-50"
            >
              <div className="text-sm font-semibold">Student Handbook</div>
              <div className="mt-1 text-xs text-slate-600">PDF</div>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold">FAQ</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Is this self-paced?</div>
              <p className="mt-2 text-sm text-slate-700">
                No. Andalus is live, synchronous teaching with guided practice built into lessons.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">How is Islamic studies structured?</div>
              <p className="mt-2 text-sm text-slate-700">
                One integrated daily lesson anchored in a weekly set of ayat.
                Pupils spiral through the same ayat each day for deeper memorization, understanding, and application.
              </p>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">How do we apply?</div>
              <p className="mt-2 text-sm text-slate-700">
                Use the Apply / Join Interest List button. It opens a Google Form in a new tab.
              </p>
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Apply / Join Interest List
              </a>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold">Questions?</div>
              <p className="mt-2 text-sm text-slate-700">
                Email muslimlensinstitute@consultant.com. Applications are collected via the Google Form.
              </p>
            </div>
          </div>

          <footer className="mt-12 border-t pt-6 text-xs text-slate-500">
            Andalus International School of Qur&apos;an &amp; AI is an online school project of Muslim Lens Institute, dedicated to
            Qur&apos;an-centric, Cambridge-rigorous Islamic education.
          </footer>
        </div>
      </section>
    </div>
  );
}
