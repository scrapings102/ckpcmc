import React, { useState } from "react";
import { 
  Code, BookOpen, ShieldCheck, Terminal, Database, 
  Cpu, Monitor, Award, Layout, Briefcase, CheckCircle2, ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SubPageLayout from "../../components/SubPageLayout";

export default function Bca() {
  const [activeSem, setActiveSem] = useState<number | null>(0);

  const bcaStats = [
    { label: "Duration", val: "3 Years", desc: "6 Full-time Semesters" },
    { label: "Lab Facility", val: "3 Coding Labs", desc: "High-speed Fiber & UPS" },
    { label: "Affiliation", val: "VNSGU, Surat", desc: "Veer Narmad SG University" }
  ];

  const tracks = [
    { 
      name: "Software & Web Engineering", 
      icon: Code,
      desc: "Comprehensive command of frontend libraries, state managers, backend server APIs, and modern logical frameworks." 
    },
    { 
      name: "Relational Databases & SQL", 
      icon: Database,
      desc: "Advanced training in relational database management systems (RDBMS), structural query writing, and transaction control." 
    },
    { 
      name: "Object-Oriented Logic", 
      icon: Terminal,
      desc: "Deep algorithmic problem solving using structured high-level programming languages including C, C++, Java, and Python." 
    },
    { 
      name: "Cloud Computing & Networks", 
      icon: Cpu,
      desc: "Command of computer networking paradigms, Internet protocols, cloud server deployments, and information security." 
    }
  ];

  const curriculum = [
    { 
      sem: "Semester I & II (First Year)", 
      subjects: [
        "Communication Skills & English",
        "Computer Fundamentals & Emerging Tech",
        "Introduction to Programming (C Language)",
        "Database Management System (DBMS)",
        "Relational Database Management (RDBMS)",
        "Computerized Financial Accounting",
        "Web Designing (HTML5/CSS3/JS)",
        "Core Programming & Database Labs"
      ] 
    },
    { 
      sem: "Semester III & IV (Second Year)", 
      subjects: [
        "Statistical Methods & Mathematics",
        "Software Engineering Principles",
        "Object-Oriented Programming (C++)",
        "Data Structures & Algorithms in C++",
        "Java Programming (Core & Advanced)",
        "Web Development (PHP / ASP.NET)",
        "Operating System Concepts",
        "Advanced Practical Coding Labs"
      ] 
    },
    { 
      sem: "Semester V & VI (Third Year)", 
      subjects: [
        "Python Scripting & Analytics",
        "Advanced Web Designing Frameworks",
        "Software Testing & Quality Assurance",
        "Mobile App Development (Android)",
        "Cyber Security & Cryptography",
        "Cloud Computing Foundations",
        "E-Commerce & Digital Trends",
        "Final Capstone Industrial Project"
      ] 
    }
  ];

  const corePlacements = [
    { role: "Full Stack Developer", company: "Local IT Hubs & MNCs", avg: "₹3.6 - ₹6.5 LPA" },
    { role: "Database Administrator", company: "Banking & Retail Sectors", avg: "₹4.0 - ₹5.8 LPA" },
    { role: "Systems Analyst", company: "Corporate Support Units", avg: "₹3.8 - ₹5.2 LPA" },
    { role: "Mobile Application Expert", company: "SaaS Startup Ecosystems", avg: "₹4.2 - ₹7.0 LPA" }
  ];

  return (
    <SubPageLayout
      title="BCA (Bachelor of Computer Applications)"
      subtitle="Fostering cutting-edge computer scientists, software engineers, and web architects with real-world programming expertise."
      category="courses"
      activeItemLabel="BCA"
    >
      <div className="space-y-12 text-[#3B3131]">
        
        {/* ── SECTION 1: HERO OVERVIEW WITH SPLIT CONTENT & PREMIUM IMAGES ── */}
        <section className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-[#D4AF37] font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Department of Computer Science</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 leading-tight">
              Bridge Theory with Advanced Practical Code
            </h2>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
              The <strong>Bachelor of Computer Applications (BCA)</strong> at C.K. Pithawalla College of Commerce, Management & Computer Application is an elite, tech-focused undergraduate program. Highly aligned with Veer Narmad South Gujarat University (VNSGU), the curriculum is structured to mold students into agile technical leaders, systems developers, and database managers.
            </p>
            <p className="text-slate-500 font-sans text-xs md:text-sm leading-relaxed">
              Students spend over 60% of their learning hours inside our state-of-the-art programming laboratories, translating conceptual algorithms into compiled execution. Regular coding hackathons, software exhibition camps, and live client projects prepare graduates for immediate industry deployment.
            </p>
          </div>

          <div className="md:col-span-5 relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/10 rounded-3xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            <div className="overflow-hidden rounded-3xl border-2 border-slate-200/60 shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                alt="Modern Software Coding Lab" 
                className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700 filter saturate-[110%]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-slate-900/90 text-white px-4 py-2 rounded-xl backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider">
              CKPCMC Coding Terminal
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
            {bcaStats.map((stat, i) => (
              <div key={i} className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm text-center space-y-1 hover:border-[#D4AF37]/30 transition-colors">
                <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider block">{stat.label}</span>
                <span className="text-lg font-serif font-black text-slate-800 block">{stat.val}</span>
                <span className="text-[11px] text-slate-500 block font-medium">{stat.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: CORE SPECIALIZATIONS (Bento Style) ── */}
        <section className="space-y-6">
          <div className="space-y-1.5">
            <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase tracking-wider block">LEARNING PARADIGMS</span>
            <h3 className="text-xl md:text-2xl font-serif font-black text-slate-800">Technical Specialization Tracks</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tracks.map((track, i) => {
              const TrackIcon = track.icon;
              return (
                <div key={i} className="p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm hover:border-[#D4AF37]/35 transition-colors flex gap-4 items-start">
                  <div className="p-3 bg-[#FAF8F3] border border-[#D4AF37]/15 rounded-xl text-[#D4AF37] shrink-0">
                    <TrackIcon size={18} className="stroke-[2.5]" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-sm text-slate-800">{track.name}</h4>
                    <p className="text-xs text-slate-500 font-sans leading-relaxed">{track.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SECTION 4: DOUBLE-COLUMN CURRICULUM ACCORDION & LABS ── */}
        <section className="grid md:grid-cols-12 gap-8 pt-6 border-t border-slate-100">
          
          {/* Labs and Infrastructure on Left */}
          <div className="md:col-span-5 space-y-5">
            <h3 className="text-lg font-serif font-black text-slate-800">Advanced Digital Lab Infrastructure</h3>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              We operate three modern coding laboratories, fully air-conditioned and fitted with high-specification intel workstations. Every terminal is configured with standard compiling software, database environments, and software testing tools.
            </p>
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800" 
                alt="Programming lab workstation" 
                className="w-full h-[180px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#FAF8F3] p-5 rounded-2xl border border-[#D4AF37]/15 flex gap-3">
              <ShieldCheck className="text-[#D4AF37] shrink-0 stroke-[2.5]" size={18} />
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-xs text-slate-800">Official Admission Eligibility</h4>
                <p className="text-[10.5px] text-slate-500 font-sans leading-relaxed">
                  Candidates must have passed HSC (10+2) in Science or General / Commerce stream from GSHEB/CBSE or equivalent boards with English as a compulsory subject.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Syllabus Accordion on Right */}
          <div className="md:col-span-7 space-y-4">
            <h3 className="text-lg font-serif font-black text-slate-800 flex items-center gap-2">
              <BookOpen size={18} className="text-[#D4AF37]" /> Comprehensive Syllabus (VNSGU)
            </h3>
            <p className="text-xs text-slate-500 font-sans leading-relaxed">
              A highly curated roadmap covering modern computing architectures, object models, web script writing, and real-time enterprise database structures.
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

        {/* ── SECTION 5: CAREER PATHWAYS & RECRUITERS ── */}
        <section className="pt-6 border-t border-slate-100 space-y-6">
          <div className="space-y-1.5">
            <span className="text-[#D4AF37] font-mono text-[10px] font-bold uppercase tracking-wider block">GRADUATE PLACEMENT</span>
            <h3 className="text-xl font-serif font-black text-slate-800">Placement Pathways & Job Markets</h3>
            <p className="text-xs text-slate-500 font-sans max-w-2xl leading-relaxed">
              Our training and placement cell conducts continuous logical, soft-skills, and technical grooming workshops. Graduates transition successfully into diverse commercial environments:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePlacements.map((p, idx) => (
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
