import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Section, DownloadButton, ApplyButton, PDFS } from "../components/ui";

export default function Tuition() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Helmet>
        <title>Tuition &amp; Fees | Andalus International School of Qur&apos;an &amp; AI</title>
        <meta
          name="description"
          content="Tuition and fee details for Andalus International School of Qur’an & AI. Download the official Tuition & Fees PDF."
        />
      </Helmet>

      <Navbar />

      <Section title="Tuition &amp; Fees" eyebrow="Tuition">
        <p className="text-sm text-slate-700">
          Tuition, deposit, refund, and payment policy details are provided in the official Tuition &amp; Fees PDF.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <DownloadButton href={PDFS.tuition}>Download Tuition &amp; Fees (PDF)</DownloadButton>
          <ApplyButton />
        </div>
      </Section>

      <Footer />
    </main>
  );
}
