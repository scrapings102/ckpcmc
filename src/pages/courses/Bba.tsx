import React, { useState } from "react";
import { 
  Briefcase, BookOpen, ShieldCheck, Award, Users, 
  TrendingUp, BarChart2, CheckCircle2, ChevronDown, Compass, Globe 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SubPageLayout from "../../components/SubPageLayout";

export default function Bba() {
  const [activeSem, setActiveSem] = useState<number | null>(0);

  const bbaStats = [
    { label: "Duration", val: "3 Years", desc: "6 Full-time Semesters" },
    { label: "Pedagogy", val: "Case Studies", desc: "Interactive Group Work" },
    { label: "Affiliation", val: "VNSGU, Surat", desc: "Veer Narmad SG University" }
  ];

  const executiveCompetencies = [
    { 
      name: "Strategic Brand Management", 
      icon: TrendingUp,
      desc: "Formulate market positioning, consumer insight frameworks, digital advertising blueprints, and product life-cycle vectors." 
    },
    { 
      name: "Financial Auditing & Analytics", 
      icon: BarChart2,
      desc: "Understand corporate balance sheets, master ratio analysis, leverage cost accounting mechanisms, and study cash flow models." 
    },
    { 
      name: "Organizational Leadership", 
      icon: Users,
      desc: "Develop executive communications, peer conflict management, human resource architectures, and strategic negotiation tools." 
    },
    { 
      name: "Global Trade & Economics", 
      icon: Globe,
      desc: "Analyze macro-economic trends, foreign direct investments, tariff frameworks, and international commercial policies." 
    }
  ];

  const curriculum = [
    { 
      sem: "Semester I & II (First Year)", 
      subjects: [
        "Principles of Management",
        "Business Communication Skills I & II",
        "Micro Economics Theory",
        "Macro Economics Policy",
        "Business Mathematics & Statistics",
        "Elements of Corporate Bookkeeping",
        "Office Automation & IT Applications",
        "Organizational Behavior Foundations"
      ] 
    },
    { 
      sem: "Semester III & IV (Second Year)", 
      subjects: [
        "Human Resource Management",
        "Production & Operations Management",
        "Legal Frameworks of Commerce",
        "Cost & Management Accounting",
        "Global Business Environment",
        "Information Technology in Management",
        "Corporate Financial Management",
        "Marketing Management Principles"
      ] 
    },
    { 
      sem: "Semester V & VI (Third Year)", 
      subjects: [
        "Strategic Business Policy",
        "Entrepreneurship Development Models",
        "Consumer Behavior & Sales Management",
        "Advertising & Media Selection",
        "Direct & Indirect Taxes (GST)",
        "Service Operations Management",
        "Business Ethics & Corporate CSR",
        "Live Market Fieldwork Project"
      ] 
    }
  ];

  const careerPlacements = [
    { role: "Management Trainee", company: "Retailers & Corporate Offices", avg: "₹4.0 - ₹6.8 LPA" },
    { role: "HR Executive Admin", company: "Commercial Establishments", avg: "₹3.6 - ₹5.0 LPA" },
    { role: "Marketing & Sales lead", company: "Consumer Brand Sectors", avg: "₹4.2 - ₹7.5 LPA" },
    { role: "Financial Advisor Associate", company: "Wealth Units & Brokerages", avg: "₹3.8 - ₹6.0 LPA" }
  ];

  return (
    <SubPageLayout
      title="BBA (Bachelor of Business Administration)"
      subtitle="Preparing dynamic business leaders, strategic brand operators, and highly visionary entrepreneurs in Surat."
      category="courses"
      activeItemLabel="BBA"
    >
      <div className="space-y-12 text-[#3B3131]">
        
        {/* ── SECTION 1: HERO OVERVIEW WITH SPLIT CONTENT & PREMIUM IMAGES ── */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Department of Management</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 leading-tight">
              Shaping Future Corporate & Startup Architects
            </h2>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
              The <strong>Bachelor of Business Administration (BBA)</strong> program at C.K. Pithawalla College of Commerce, Management & Computer Application provides a rigorous academic platform. Affiliated with Veer Narmad South Gujarat University (VNSGU), our methodology blends case studies, business simulator workshops, and continuous industry interfaces.
            </p>
            <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed">
              Students analyze actual case studies from global corporate domains, master real-time executive presentation styles, and lead team projects. By exposing candidates to the major pillars of modern enterprise—finance, marketing, human relations, and international trade—we ensure they graduate with supreme corporate readiness.
            </p>
          </div>

          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-3xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            <div className="overflow-hidden rounded-3xl border-2 border-slate-200/60 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e0ee26cf661?auto=format&fit=crop&q=80&w=800" 
                alt="Corporate Business Presentation" 
                className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700 filter saturate-[110%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider">
              CKPCMC Executive Seminar Room
            </div>
          </div>
        </section>

        {/* ── SECTION 2: METRICS GRID (At a Glance) ── */}
        <section className="bg-slate-50 border border-slate-150 rounded-3xl p-6 md:p-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-xs font-mono font-bold uppercase text-[#D4AF37] tracking-[0.2em] mb-1">PROGRAM DETAILS</h3>
            <p className="text-lg font-serif font-black text-slate-800">Enrollment & Academic Blueprint</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {bbaStats.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm text-center space-y-1 hover:border-[#D4AF37]/30 transition-colors">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block">{stat.label}</span>
                <span className="text-lg font-serif font-black text-slate-800 block">{stat.val}</span>
                <span className="text-[11px] text-slate-500 block font-medium">{stat.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: CORE EXECUTIVE COMPETENCIES ── */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase tracking-wider block">EXECUTIVE FOCUS</span>
            <h3 className="text-xl md:text-2xl font-serif font-black text-slate-800">Core Competency Blueprint</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {executiveCompetencies.map((comp, i) => {
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

        {/* ── SECTION 4: CURRICULUM ACCORDION & INDUSTRIAL INTERFACE ── */}
        <section className="grid md:grid-cols-12 gap-8 pt-6 border-t border-slate-100">
          
          {/* Industrial Interface on Left */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="text-lg font-serif font-black text-slate-800">Operational Industrial Alliances</h3>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              We leverage Surat's prominent positions in logistics, maritime shipping, textiles, and diamond manufacturing. Students undergo a compulsory summer internship, working under certified managers to audit actual commercial systems.
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Students Collaboration" 
                className="w-full h-[180px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#D4AF37]/15 flex gap-3">
              <ShieldCheck className="text-[#D4AF37] shrink-0 stroke-[2.5]" size={18} />
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-xs text-slate-800">Admission Criteria</h4>
                <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">
                  Requires passing HSC (10+2) in General/Commerce/Science stream with English as a compulsory subject from GSHEB, CBSE or other recognized equivalent boards.
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
              An exhaustive managerial syllabus focusing on operations, cost-ratio analytics, consumer demographics, and strategic execution.
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
            <h3 className="text-xl font-serif font-black text-slate-800">Placement & Executive Job Demographics</h3>
            <p className="text-xs text-slate-500 font-sans max-w-2xl leading-relaxed">
              We empower students to secure jobs with regional, national, and multinational brands, or launch independent businesses with our institutional guidance:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {careerPlacements.map((p, idx) => (
              <div key={idx} className="bg-white border border-slate-150 p-4 rounded-xl shadow-sm space-y-2 hover:border-[#D4AF37]/35 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="p-1.5 bg-[#D4AF37]/10 text-[#D4AF37] rounded-md">
                    <Briefcase size={12} />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">Avg Package</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-serif font-bold text-sm text-slate-800 leading-tight">{p.role}</h4>
                  <p className="text-[10px] text-slate-400 font-medium font-mono">{p.company}</p>
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
