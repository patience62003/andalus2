import React from "react";
import { DownloadButton, PDFS } from "./ui";

export default function Footer() {
  return (
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
  );
}
