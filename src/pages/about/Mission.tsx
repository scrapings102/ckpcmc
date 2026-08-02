import React from "react";
import { Target, CheckCircle, Rocket, Award, ShieldCheck, Compass, Sparkles } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function Mission() {
  const missionPoints = [
    {
      title: "Technological Assimilation",
      desc: "To consistently deploy computer application frameworks and digital learning structures, preparing students for an automated workplace.",
      badge: "Tech & Science",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      bg: "bg-[#7E1B1F]/10 text-[#7E1B1F]",
      border: "border-[#7E1B1F]/20"
    },
    {
      title: "Academic Pedagogy",
      desc: "To deliver standard commerce curricula backed by case studies, live industry feedback, and collaborative peer seminars.",
      badge: "Commerce Wing",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
      bg: "bg-[#D4AF37]/10 text-[#C19A20]",
      border: "border-[#D4AF37]/30"
    },
    {
      title: "Corporate Preparedness",
      desc: "To bridge classroom instruction and market realities via internships, live company projects, and soft skill grooming bootcamps.",
      badge: "Management",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
      bg: "bg-blue-50 text-blue-800",
      border: "border-blue-200"
    },
    {
      title: "Ethical Integration",
      desc: "To embed moral guidelines, local civic sense, and national integrity inside daily student interaction, campus operations, and guest talks.",
      badge: "Civic Core",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
      bg: "bg-emerald-50 text-emerald-800",
      border: "border-emerald-200"
    }
  ];

  const strategicGoals = [
    "To achieve a 100% digital-literacy baseline among students across all departments.",
    "To introduce active entrepreneurship incubations and start-up advisory workshops.",
    "To establish partnerships with regional industrial boards to streamline job selections.",
    "To secure top academic rankings consistently within the VNSGU university cohort."
  ];

  return (
    <SubPageLayout
      title="Mission Objectives"
      subtitle="Our concrete action pathways, departmental execution frameworks, and quality standards."
      category="about"
      activeItemLabel="Mission"
    >
      <div className="space-y-12 text-[#3B3131]">
        
        {/* HERO IMAGE FOCUS BANNER */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
          <div className="aspect-[16/7] md:aspect-[21/8] w-full relative bg-slate-900 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop" 
              alt="CKPCMC Mission Showcase" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515] via-[#1B1515]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1515]/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase mb-3 w-fit">
                <Target size={14} />
                <span>Strategic Intent</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight max-w-2xl leading-tight">
                Translating Educational Vision into Daily Excellence
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-xl leading-relaxed">
                Our mission is defined by practical execution — combining rigorous university coursework with real-world industry application.
              </p>
            </div>
          </div>
        </div>

        {/* EXECUTION SPHERES WITH RICH IMAGERY */}
        <section className="space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#7E1B1F] font-mono text-xs font-bold uppercase tracking-widest">Execution Spheres</span>
            <h3 className="text-2xl font-serif font-bold text-slate-800">Four Pillars of Institutional Action</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {missionPoints.map((item, index) => (
              <div
                key={index}
                className={`rounded-3xl bg-[#FAF8F3] border ${item.border} overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group`}
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515] via-transparent to-transparent opacity-70" />
                  <span className={`absolute top-4 left-4 text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full backdrop-blur-md shadow-sm ${item.bg}`}>
                    {item.badge}
                  </span>
                </div>
                
                <div className="p-6 sm:p-8 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-serif font-bold text-[#1B1515] mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* STRATEGIC MILESTONES WITH BACKGROUND PHOTO */}
        <section className="bg-gradient-to-br from-[#1B1515] to-[#2D2424] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/30 shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <span className="text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-widest block">Quality Benchmark</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">Strategic Five-Year Milestones</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {strategicGoals.map((goal, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:border-[#D4AF37]/50 transition-colors"
                >
                  <CheckCircle className="text-[#D4AF37] shrink-0 mt-0.5" size={20} />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-medium">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
