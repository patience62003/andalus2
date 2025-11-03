import React,{useState} from "react";
function Badge({text}:{text:string}){return <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-semibold">● {text}</span>;}
function Button({label,href,comingSoon=false}:{label:string;href?:string;comingSoon?:boolean;}){
 const base="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors bg-slate-900 text-white hover:bg-slate-800";
 if(comingSoon||!href){return <button onClick={()=>alert("This file will be uploaded soon.")} className={base}>{label} <span className="ml-2 opacity-70">(coming soon)</span></button>;}
 return <a className={base} href={href} target="_blank" rel="noreferrer">{label}</a>;
}
function Card({title,children,emoji}:{title:string;children:React.ReactNode;emoji?:string;}){
 return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
  <div className="mb-2 flex items-center gap-2 text-slate-800">{emoji&&<span className="text-lg">{emoji}</span>}<span className="text-sm font-semibold">{title}</span></div>
  <div className="text-sm text-slate-700">{children}</div></div>;
}
function Section({id,title,children,intro}:{id:string;title:string;children:React.ReactNode;intro?:string;}){
 return <section id={id} className="max-w-6xl mx-auto px-6 py-10"><h2 className="text-2xl font-bold mb-3 text-slate-900">{title}</h2>{intro&&<p className="text-sm text-slate-700 mb-6">{intro}</p>}{children}</section>;
}
export default function App(){
 const [open,setOpen]=useState(false);
 return <main className="min-h-screen bg-slate-50 text-slate-900">
  <nav className="sticky top-0 z-20 backdrop-blur bg-white/85 border-b border-slate-200">
   <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
    <a href="#" className="font-extrabold tracking-tight">Andalus</a>
    <button className="md:hidden px-3 py-2 rounded border" onClick={()=>setOpen(!open)}>Menu</button>
    <div className="hidden md:flex items-center gap-5 text-sm">
     <a href="#qurtubi" className="hover:underline">Why Qurtubi</a>
     <a href="#ai" className="hover:underline">AI-first STEM</a>
     <a href="#curriculum" className="hover:underline">Curriculum</a>
     <a href="#life" className="hover:underline">Daily Life</a>
     <a href="#downloads" className="hover:underline">Downloads</a>
    </div></div>
    {open&&<div className="md:hidden px-6 pb-4 flex flex-col gap-2 text-sm">
      <a href="#qurtubi" onClick={()=>setOpen(false)}>Why Qurtubi</a>
      <a href="#ai" onClick={()=>setOpen(false)}>AI-first STEM</a>
      <a href="#curriculum" onClick={()=>setOpen(false)}>Curriculum</a>
      <a href="#life" onClick={()=>setOpen(false)}>Daily Life</a>
      <a href="#downloads" onClick={()=>setOpen(false)}>Downloads</a>
    </div>}</nav>
  <header className="max-w-6xl mx-auto px-6 py-10">
   <p className="text-xs tracking-wide text-slate-500 mb-2">K-12 ISLAMIC SCHOOL</p>
   <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Andalus International School of Qur&apos;an &amp; AI</h1>
   <div className="mt-4"><Badge text="Nonprofit: in formation"/></div>
   <p className="mt-5 max-w-3xl text-slate-700">A mission-driven academy where students memorize the Qur&apos;an, study <span className="font-semibold">al-Qurtubi</span> line-by-line, and master world-class math, science, engineering, and computer science — with <span className="font-semibold">no homework</span>. No Arabic needed upon entry; placement supports Arabic-from-zero.</p>
   <div className="mt-6 flex flex-wrap items-center gap-3">
    <Button label="Download Brochure (PDF)" comingSoon/>
    <Button label="5-Year Financials" comingSoon/>
   </div>
  </header>
  <section className="max-w-6xl mx-auto px-6 pb-4"><div className="grid gap-6 md:grid-cols-2">
    <Card title="Full Hifz" emoji="🕋">Sab&apos;a-manazil rotation: students review the entire Qur&apos;an weekly and complete memorization with in-school practice only.</Card>
    <Card title="AI Core" emoji="🤖">From K-12 DLCS to HS pathways in ML, data science, robotics, and prompt engineering with ethical guardrails.</Card>
    <Card title="Qurtubi Focus" emoji="📜">Comparative fiqh and aḥkām through al-Qurtubi’s tafsir; maqāṣid and balāgha via classical poetry and language studies.</Card>
    <Card title="Standards & Accreditation" emoji="📑">STEM benchmarked to Massachusetts (STE 2016; Math 2017; DLCS 2016). English follows Maryland MCCR ELA across all grades. NEASC-friendly; MENPS-compatible.</Card>
  </div></section>
  <Section id="qurtubi" title="Why a Qurtubi School?" intro="Grounded in Mālikī heritage and Andalusian synthesis of dīn and science.">
    <div className="grid gap-6 md:grid-cols-3">
     <Card title="Integrated Theology" emoji="🧭">Aqīda, aḥkām, sīra, ḥadīth cross-referenced as the tafsīr progresses—students see the whole dīn in one curriculum.</Card>
     <Card title="Arabic by Usage" emoji="🗣️">No Arabic required at entry; we acquire Arabic through Qur&apos;an, poetry, and daily practice embedded in class.</Card>
     <Card title="Andalus Ethos" emoji="🏛️">Heritage of craftsmanship, geometry, prosody, and logic—applied in modern labs and design studios.</Card>
    </div>
  </Section>
  <Section id="ai" title="AI-first STEM" intro="Practical engineering from day one; HS pathways target ML, data science, robotics, and ethical AI.">
    <div className="grid gap-6 md:grid-cols-3">
     <Card title="K–5 Foundations" emoji="🧮">Computational thinking, sensors, maker skills; math taught for understanding with visual models.</Card>
     <Card title="Middle School" emoji="🧪">Data projects, Python notebooks, physical computing, and responsible AI use across subjects.</Card>
     <Card title="High School" emoji="🧠">Tracks in ML, data eng, and robotics; capstones serve community needs on the Casa–Kenitra–Tangier corridor.</Card>
    </div>
  </Section>
  <Section id="curriculum" title="Curriculum Overview" intro="Two equal halves: Qur’an/Qurtubi (humanities embedded) and AI-forward STEM in English.">
    <div className="grid gap-6 md:grid-cols-2">
     <Card title="Qur’an & Qurtubi" emoji="📚">Daily hifz + tafsir seminars; fiqh, ḥadīth, balāgha, prosody, and Andalus literature integrated. English class (MCCR ELA) supports STEM comprehension.</Card>
     <Card title="STEM Sequence" emoji="🧷">Benchmarked to MA STE/Math/DLCS; labs emphasize coding, data, and design. PE/martial arts is daily for all grades.</Card>
    </div>
  </Section>
  <Section id="life" title="Daily Life" intro="No homework. Practice happens in school. Healthy routines and clear structure.">
    <ul className="grid gap-4 md:grid-cols-2 text-sm text-slate-700">
     <li className="rounded-xl border border-slate-200 bg-white p-4">👨‍🏫 Staffing: <b>1 teacher + 1 aide per 30 students</b> (equivalent attention to 15:1).</li>
     <li className="rounded-xl border border-slate-200 bg-white p-4">🕘 Schedule: Drop-off 8:30–9:00 • Classes start 9:00 • Lunch + short breaks.</li>
     <li className="rounded-xl border border-slate-200 bg-white p-4">🥋 PE & Martial Arts: Daily for all grades; skills progression and conditioning.</li>
     <li className="rounded-xl border border-slate-200 bg-white p-4">🌍 Corridor: Families from Casablanca through Kenitra to Tangier (train corridor).</li>
    </ul>
  </Section>
  <Section id="admissions" title="Admissions" intro="Simple, family-friendly process.">
    <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2">
     <li>Inquiry form & campus conversation.</li>
     <li>Placement check (Arabic from zero is welcome).</li>
     <li>Decision & onboarding. Nonprofit association <em>in formation</em>.</li>
    </ol>
  </Section>
  <Section id="downloads" title="Downloads">
  <div className="flex flex-wrap gap-3">
    <Button label="Info Sheet (PDF)" href="/Andalus_Investor_Summary_v2.pdf" />
    <Button label="Investor Deck (2 pages)" href="/Andalus_Investor_Deck_2pg.pdf" />
    <Button label="Tuition & Fees (Year 1)" href="/Tuition_and_Fees_Y1_Public.pdf" />
    <Button label="Bell Schedules (v2)" href="/Bell-Schedules-v2.pdf" />
    <Button label="Curriculum Maps (v2, Excel)" href="/Andalus_Curriculum_Maps_v2.xlsx" />
    <Button label="NEASC One-Pager (v3)" href="/NEASC-Alignment-OnePager-v3.pdf" />
    <Button label="5-Year Financials (Scenarios, Excel)" href="/Andalus_5yr_Pro_Forma_SCENARIOS.xlsx" />
    <Button label="5-Year Financials (Max Class, Excel)" href="/Andalus_5yr_Pro_Forma_MAXCLASS.xlsx" />
    <Button label="Cost Model v2 (Karmod, PDF)" href="/Cost_Model_v2_Karmod.pdf" />
    <Button label="Karmod Cost Calculator (Excel)" href="/Karmod_Cost_Calculator_v2.xlsx" />
    <Button label="Nonprofit Roadmap (Morocco)" href="/Nonprofit-Roadmap-Morocco-v1.pdf" />
  </div>
  <p className="text-xs text-slate-500 mt-3">
    All files live in <code>/public</code>. If a link 404s, the filename (including CAPITALS) or extension doesn’t match exactly.
  </p>
</Section>

  <footer className="max-w-6xl mx-auto px-6 py-12 text-sm text-slate-600">
   <h4 className="font-semibold">School Names</h4>
   <ol className="list-decimal list-inside mt-2 space-y-1">
    <li>Andalus International School of Qur&apos;an &amp; AI</li>
    <li>Cordoba Qurtubi Academy</li>
    <li>Qurtubi School of Qur&apos;an, Law &amp; AI</li>
   </ol>
   <p className="mt-6 text-xs text-slate-500">Standards cited: Massachusetts STE 2016; Math 2017; DLCS 2016. English benchmark: Maryland MCCR ELA (K–12). Nonprofit association in formation; recognition filed before opening.</p>
  </footer></main>;
}
