import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Section, ApplyButton, IMAGES, HIDAAH_STORE_URL } from "../components/ui";

export default function About() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>About | Andalus International School of Qur&apos;an &amp; AI</title>
        <meta
          name="description"
          content="About Andalus: mission, founder Dr. Mohammed Sabrin, and our Qur’an-centric, Cambridge-rigorous approach."
        />
      </Helmet>

      <Navbar />

      <Section title="About Andalus" eyebrow="Mission & Founder">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Our mission</p>
            <p className="mt-2 text-sm text-slate-700">
              Andalus serves serious practicing Muslim families with a Qur&apos;an-centric education that is academically rigorous
              and globally legible. Islamic formation is anchored in Tafseer al-Qurtubi, and pupils follow a Cambridge-aligned pathway
              in English for STEM and core academics. AI supports practice and projects under clear ethical boundaries, while teachers
              remain the murabbīn.
            </p>

            <div className="mt-5">
              <ApplyButton />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">Founder</p>

            <img
              src={IMAGES.founder}
              alt="Dr. Mohammed Sabrin"
              className="mt-3 w-full rounded-2xl object-cover"
            />

            <p className="mt-3 text-sm font-semibold text-slate-900">Dr. Mohammed Sabrin</p>

            <p className="mt-3 text-sm text-slate-700">
              Multilingual education leader and author of the first English book on Islamic pedagogy, with 10+ years of experience in
              Head of School–level, academic leadership, and faculty development roles across K–12 and higher education in the U.S., Gulf,
              and Africa.
            </p>

            <p className="mt-3 text-sm text-slate-700">
              My work sits at the intersection of Islamic pedagogy, Qur’an-centric schooling, and STEM / AI education. I help institutions
              design learning environments where sound creed, fiqh, and adab are integrated with rigorous empirical study, rather than
              treated as a separate track.
            </p>

            <p className="mt-3 text-sm text-slate-700">
              I have led and advised schools, universities, and ministries on:
            </p>
            <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
              <li>Teaching and learning leadership and instructional improvement</li>
              <li>Faculty development and professional learning systems</li>
              <li>Academic program design and evaluation</li>
              <li>International education policy and accreditation-aligned reform</li>
            </ul>

            <p className="mt-4 text-sm text-slate-700">
              <span className="font-semibold">Book:</span>{" "}
              <a
                href={HIDAAH_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-emerald-700 hover:underline"
              >
                A Beginner’s Guide to Understanding Islamic Pedagogy (Hidaayah Store)
              </a>
            </p>

            <blockquote className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              Dr. Sabrin’s book, <span className="italic">A Beginner’s Guide to Understanding Islamic Pedagogy</span>, offers much needed
              clarity regarding the perpetuation of misknowledge of Islam broadly, and Islamic Pedagogy specifically in Western academic realms.
              Dr. Sabrin is unapologetic in his defense of Islamic Pedagogy. He points to the importance of the relationship between teacher and
              student as central to the enactment of Islamic Pedagogy, refuting notions that Islamic Pedagogy is simply rote memorization.
              Dr. Sabrin argues that for Muslim students, educators, and scholars, Islamic Pedagogy is a pathway to pursue Allah’s teachings of
              social justice, moral integrity, and ethical care for one another.
              <div className="mt-3 text-xs font-semibold text-slate-600">
                ~Dr. Saba Khan Vlach, Assistant Professor of Elementary Literacy Education, The University of Iowa
              </div>
            </blockquote>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
