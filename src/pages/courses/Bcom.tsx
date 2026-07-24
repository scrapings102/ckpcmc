import React, { useState } from "react";
import { 
  Calculator, BookOpen, ShieldCheck, Award, TrendingUp, 
  Coins, FileText, CheckCircle2, ChevronDown, Landmark, Receipt 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SubPageLayout from "../../components/SubPageLayout";

export default function Bcom() {
  const [activeSem, setActiveSem] = useState<number | null>(0);

  const bcomStats = [
    { label: "Intake Capacity", val: "150 Seats", desc: "English Medium co-education" },
    { label: "Duration", val: "3 Years", desc: "6 Full-time Semesters" },
    { label: "Specialty", val: "Advanced Accountancy", desc: "Core Auditing & Taxation" },
    { label: "Affiliation", val: "VNSGU, Surat", desc: "Veer Narmad SG University" }
  ];

  const financialCompetencies = [
    { 
      name: "Corporate & Cost Accounting", 
      icon: Calculator,
      desc: "Analyze corporate balance sheets, master double-entry ledgers, and compute cost allocations and production margins." 
    },
    { 
      name: "Taxation & Indian Tax Code", 
      icon: Receipt,
      desc: "Comprehensive study of direct income tax acts, corporate filing protocols, and indirect tax systems (GST)." 
    },
    { 
      name: "Auditing & Financial Vigilance", 
      icon: ShieldCheck,
      desc: "Study legal audit standards, risk assessment methodologies, documentation verification, and internal control audits." 
    },
    { 
      name: "Banking & Financial Markets", 
      icon: Landmark,
      desc: "Explore mercantile laws, commercial banking operations, central bank monetary policy, and equity stock structures." 
    }
  ];

  const curriculum = [
    { 
      sem: "Semester I & II (First Year)", 
      subjects: [
        "Financial Accounting I & II",
        "Business Economics Fundamentals",
        "Business Communication Skills",
        "Elements of Modern Banking",
        "Introduction to Marine & Life Insurance",
        "Principles of Business Administration",
        "Environmental Studies",
        "Co-operation Theory & Practices I"
      ] 
    },
    { 
      sem: "Semester III & IV (Second Year)", 
      subjects: [
        "Corporate Accounting Practices I & II",
        "Cost Accounting Principles I & II",
        "Income Tax Laws & Computations",
        "Business Statistics & Research I & II",
        "Macro Economics Theories",
        "Commercial Communication",
        "Introduction to Marketing Systems",
        "Corporate Law & Administration"
      ] 
    },
    { 
      sem: "Semester V & VI (Third Year)", 
      subjects: [
        "Auditing & Assurance Standards I & II",
        "Management Accounting Decisions I & II",
        "Mercantile & Industrial Law I & II",
        "Advanced Financial Management",
        "GST Law & Return Filing Practical",
        "Indian Economic Structure & Issues",
        "Commercial Communication & Drafting",
        "Comprehensive Industrial Viva-Voce"
      ] 
    }
  ];

  const careerPlacements = [
    { role: "Chartered Accountant (CA) Articled Assistant", company: "Local & National Audit Firms", avg: "₹3.6 - ₹5.5 LPA" },
    { role: "Accounts Executive / Manager", company: "Retailers, Dealers & Manufacturing Hubs", avg: "₹4.0 - ₹6.0 LPA" },
    { role: "Tax Consultant Specialist", company: "Consultancies & Independent Practices", avg: "₹3.8 - ₹5.8 LPA" },
    { role: "Financial Analyst Associate", company: "Banking Sector & Brokerage Houses", avg: "₹4.2 - ₹6.5 LPA" }
  ];

  return (
    <SubPageLayout
      title="B.Com (Bachelor of Commerce)"
      subtitle="Building stellar financial experts, cost accountants, tax advisors, and banking leaders since 2005."
      category="courses"
      activeItemLabel="B.Com"
    >
      <div className="space-y-12 text-[#3B3131]">
        
        {/* ── SECTION 1: HERO OVERVIEW WITH SPLIT CONTENT & PREMIUM IMAGES ── */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Department of Commerce</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 leading-tight">
              A Legacy of Financial & Mercantile Rigor
            </h2>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
              The <strong>Bachelor of Commerce (B.Com)</strong> program at C.K. Pithawalla College of Commerce, Management & Computer Application is highly esteemed. Aligned with Veer Narmad South Gujarat University (VNSGU), our English Medium program trains students in accounting standards, Indian taxation laws, corporate audit protocols, and global banking frameworks.
            </p>
            <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed">
              We provide a structured path for candidates aiming to pursue professional courses like CA, CS, CMA, and MBA. Our program is enhanced by computational accounting modules, intensive GST workshops, and live corporate financial audit simulations.
            </p>
          </div>

          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-3xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            <div className="overflow-hidden rounded-3xl border-2 border-slate-200/60 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                alt="Financial Chart Auditing" 
                className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700 filter saturate-[110%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider">
              CKPCMC Finance Research Cell
            </div>
          </div>
        </section>

        {/* ── SECTION 2: METRICS GRID (At a Glance) ── */}
        <section className="bg-slate-50 border border-slate-150 rounded-3xl p-6 md:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xs font-mono font-bold uppercase text-[#D4AF37] tracking-[0.2em] mb-1">PROGRAM DETAILS</h3>
            <p className="text-lg font-serif font-black text-slate-800">Enrollment & Academic Blueprint</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {bcomStats.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm text-center space-y-1 hover:border-[#D4AF37]/30 transition-colors">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block">{stat.label}</span>
                <span className="text-lg font-serif font-black text-slate-800 block">{stat.val}</span>
                <span className="text-[11px] text-slate-500 block font-medium">{stat.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: CORE FINANCIAL COMPETENCIES ── */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase tracking-wider block">COMMERCE FOUNDATION</span>
            <h3 className="text-xl md:text-2xl font-serif font-black text-slate-800">Core Financial & Auditing Tracks</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {financialCompetencies.map((comp, i) => {
              const CompIcon = comp.icon;
              return (
                <div key={i} className="p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:border-[#D4AF37]/35 transition-colors flex gap-4 items-start">
                  <div className="p-3 bg-[#FAF8F3] border border-[#D4AF37]/15 rounded-xl text-[#D4AF37] shrink-0">
                    <CompIcon size={18} className="stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm text-slate-800">{comp.name}</h4>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">{comp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 4: CURRICULUM ACCORDION & REAL PRACTICAL TRADING ── */}
        <section className="grid md:grid-cols-12 gap-8 pt-6 border-t border-slate-100">
          
          {/* Practical Audit Simulation on Left */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="text-lg font-serif font-black text-slate-800">Computational Audit Laboratories</h3>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              We leverage modern banking software simulators and computerized taxation setups. Students learn to handle actual Tally ERP configurations, analyze digital GST filing portals, and participate in corporate stock-trading simulation camps.
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?auto=format&fit=crop&q=80&w=800" 
                alt="Corporate Balance Sheets" 
                className="w-full h-[180px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#D4AF37]/15 flex gap-3">
              <ShieldCheck className="text-[#D4AF37] shrink-0 stroke-[2.5]" size={18} />
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-xs text-slate-800">Admission Criteria</h4>
                <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">
                  Requires passing HSC (10+2) in General (Commerce) stream with English and Elements of Bookkeeping / Accountancy as compulsory subjects.
                </p>
              </div>
            </div>
          </div>

          {/* Syllabus Accordion on Right */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-lg font-serif font-black text-slate-800 flex items-center gap-2">
              <BookOpen size={18} className="text-[#D4AF37]" /> Structured Curriculum (VNSGU)
            </h3>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              An exhaustive financial commerce syllabus focusing on accounting principles, banking frameworks, tax planning, and corporate regulations.
            </p>

            <div className="space-y-3">
              {curriculum.map((sem, i) => (
                <div 
                  key={i} 
                  className={`border rounded-xl transition-all ${
                    activeSem === i ? "border-[#D4AF37] bg-[#FAF8F3]/30" : "border-slate-200 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setActiveSem(activeSem === i ? null : i)}
                    className="w-full flex items-center justify-between p-4 font-serif font-bold text-xs text-slate-800 select-none text-left"
                  >
                    <span>{sem.sem}</span>
                    <ChevronDown 
                      size={14} 
                      className={`text-[#D4AF37] transition-transform duration-300 ${activeSem === i ? "rotate-180" : ""}`} 
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeSem === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1 grid sm:grid-cols-2 gap-2 border-t border-dashed border-slate-150">
                          {sem.subjects.map((sub, sIdx) => (
                            <div key={sIdx} className="text-[11px] text-slate-600 font-sans flex items-center gap-2">
                              <CheckCircle2 size={11} className="text-[#D4AF37] shrink-0" />
                              <span className="truncate">{sub}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* ── SECTION 5: PLACEMENT & JOBS ── */}
        <section className="pt-6 border-t border-slate-100 space-y-6">
          <div className="space-y-1.5">
            <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase tracking-wider block">GRADUATE PLACEMENT</span>
            <h3 className="text-xl font-serif font-black text-slate-800">Placement & Financial Audit Careers</h3>
            <p className="text-xs text-slate-500 font-sans max-w-2xl leading-relaxed">
              We empower students to secure jobs with prominent accounting hubs, banking corporations, tax consultancies, and corporate business segments:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerPlacements.map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-150 p-4 rounded-xl shadow-sm space-y-2 hover:border-[#D4AF37]/35 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="p-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-md">
                    <Calculator size={12} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Avg Package</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-slate-800 leading-tight">{p.role}</h4>
                  <p className="text-[10px] text-[#A29A9A] font-medium font-mono">{p.company}</p>
                </div>
                <div className="text-[11px] font-bold text-[#D4AF37] font-mono pt-1 border-t border-slate-100">
                  {p.avg}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
