import React from "react";
import { Quote, Mail, GraduationCap, Check, Sparkles, Award } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function PrincipalsMessage() {
  const priorities = [
    "Continuous, holistic internal assessment beyond university exam hours.",
    "Active encouragement of sports, national fests, and cultural achievements.",
    "Strong integration of computing and data analytics inside commerce curriculums.",
    "Zero-tolerance safety guidelines via Active Anti-Ragging and POSH committees."
  ];

  return (
    <SubPageLayout
      title="Principal's Message"
      subtitle="Academic address and greetings from our Principal, Dr. Chetan Chhotubhai Patel."
      category="about"
      activeItemLabel="Principal's Message"
    >
      <div className="space-y-12 text-[#3B3131]">

        {/* MAIN PRINCIPAL PROFILE & MESSAGE */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Principal Portrait Column - 5 cols with much bigger portrait */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF8F3] border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-lg relative overflow-hidden group">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37] p-2 bg-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://ckpcmc.org/images/WhatsApp%20Image%202025-08-25%20at%2013.09.22.jpeg" 
                  alt="Dr. Chetan Chhotubhai Patel" 
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800&h=800";
                  }}
                />
              </div>

              <div>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 leading-tight">Dr. Chetan Chhotubhai Patel</h3>
                <p className="text-sm text-[#D4AF37] font-mono uppercase tracking-widest mt-2 font-black">Principal</p>
                <p className="text-xs text-slate-500 font-sans block mt-1 font-medium">PhD, NET, M.Phil, M.Com, B.Com, B.Ed</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4 text-left text-xs space-y-3 text-slate-600 font-sans bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate font-mono font-semibold">principal_469@vnsgu.ac.in</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">19+ Years in Higher Academics</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">Veer Narmad South Gujarat University</span>
                </div>
              </div>
            </div>
          </div>

          {/* Principal Letter - 7 cols */}
          <div className="lg:col-span-7 space-y-6 relative bg-[#FAF8F3] border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            <Quote className="absolute top-6 right-6 text-slate-200/80 shrink-0 pointer-events-none -z-0" size={72} />
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-black block">
                Warm Greetings to All Students & Visitors,
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 leading-snug">
                Fostering Critical Inquiry, Character & Technical Fluency
              </h2>
              
              <div className="h-1 w-20 bg-[#D4AF37] rounded-full" />
              
              <div className="space-y-4 text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                <p>
                  At C.K. Pithawalla College of Commerce, Management & Computer Application, we believe that real education is not a mechanical process of filling an empty vessel, but rather of igniting a lifelong passion for inquiry, technology, and administration. When our students walk through our corridors, we expect them to be proactive, analytical, and socially conscious actors.
                </p>
                <p>
                  Our lecture blocks and computer rooms are designed to cultivate high academic standards, teamwork, and critical problem-solving. Along with our dedicated faculty, we work hard to ensure that students receive syllabus-compliant help, continuous placement guidance, and mentorship.
                </p>
              </div>

              {/* Priorities Box */}
              <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3 shadow-sm">
                <h4 className="font-serif font-bold text-base text-slate-900">Key Academic Priorities:</h4>
                <div className="grid gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                  {priorities.map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <Check size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col items-end">
                <span className="font-serif font-black text-xl text-[#1B1515]">Dr. Chetan Chhotubhai Patel</span>
                <span className="text-xs text-slate-500 font-sans uppercase tracking-widest mt-1 font-bold">Principal, CKPCMC</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
