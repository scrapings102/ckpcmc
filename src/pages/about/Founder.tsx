import React from "react";
import { Award, Heart, CheckCircle, BookOpen, Star, Sparkles, Quote } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function Founder() {
  const contributions = [
    { year: "1930s", title: "Early Life & Values", desc: "Born into a modest environment, developing a lifelong passion for social welfare and educational upliftment." },
    { year: "1960s", title: "Industrial Leadership", desc: "Recognized that Gujarat's rapid industrialization required ethically grounded commerce, tech, and administrative professionals." },
    { year: "1970s", title: "Trust Endowments", desc: "Began supporting the Navyug Vidyabhavan Trust with prime land endowments and funds to build higher educational colleges." },
    { year: "1998", title: "CKPCMC Inception", desc: "Donated prime Dumas Road land and capital to establish C.K. Pithawalla College of Commerce, Management & Computer Application." }
  ];

  return (
    <SubPageLayout
      title="Our Visionary Founder"
      subtitle="Late Shri Chhotubhai Pithawalla — the benevolent industrialist and reformer behind C.K. Pithawalla institutions."
      category="about"
      activeItemLabel="Founder"
    >
      <div className="space-y-12 text-[#3B3131]">
        
        {/* HERO FOUNDER PORTRAIT & BIOGRAPHY */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#FAF8F3] border border-[#D4AF37]/30 rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg relative overflow-hidden">
          
          {/* Main Portrait Frame - Takes prominent 5 cols with much larger portrait */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative p-3 bg-white border-2 border-[#D4AF37]/50 shadow-2xl rounded-3xl group max-w-sm mx-auto lg:max-w-none">
              <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#D4AF37] z-20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#1B1515] z-20 pointer-events-none" />
              
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000&h=1200" 
                  alt="Late Shri Chhotubhai Pithawalla" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#1B1515]/90 backdrop-blur-md border border-[#D4AF37]/40 text-center">
                  <span className="font-serif font-black text-white text-lg block">Late Shri Chhotubhai Pithawalla</span>
                  <span className="font-mono text-xs tracking-widest text-[#D4AF37] uppercase font-bold block mt-1">Visionary Founder & Benefactor</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 text-center shadow-sm max-w-sm mx-auto lg:max-w-none">
              <span className="font-mono text-[10px] tracking-widest text-[#D4AF37] uppercase font-black block">Philanthropic Motto</span>
              <p className="text-xs text-slate-700 italic mt-1 font-serif leading-relaxed">
                "Education is the highest form of service to humanity and nation building."
              </p>
            </div>
          </div>

          {/* Biography & Vision */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7E1B1F]/10 border border-[#7E1B1F]/20 text-[#7E1B1F] text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles size={14} />
              <span>A Legacy of Philanthropy</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-[#1B1515] leading-tight">
              A Life Dedicated to Educational Upliftment in South Gujarat
            </h2>

            <div className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base space-y-4">
              <p>
                <span className="float-left text-6xl font-serif font-black text-[#D4AF37] mr-3 mt-1 leading-[0.8]">S</span>
                hri Chhotubhai Pithawalla was an exceptional industrialist, philanthropist, and visionary educational reformer. Born into a modest family, he went on to build prominent industrial business lines in Gujarat, but his heart remained dedicated to social welfare and educational upliftment.
              </p>
              <p>
                He firmly believed that sustainable regional progress begins in classrooms. Guided by this principle, he channeled substantial parts of his wealth, assets, and time into supporting the <strong>Navyug Vidyabhavan Trust</strong>, Surat, establishing world-class educational institutions.
              </p>
              <p>
                In 1998, Shri Chhotubhai played a pivotal role in establishing <strong>C.K. Pithawalla College of Commerce, Management & Computer Application</strong>, providing prime educational infrastructure on the Surat-Dumas Road.
              </p>
            </div>

            <div className="border-l-4 border-[#D4AF37] bg-white p-5 rounded-r-2xl italic font-serif text-sm sm:text-base leading-relaxed text-slate-800 shadow-sm">
              "To sow the seeds of an educational institution under whose shade future generations may thrive is the noble legacy one can leave behind."
            </div>
          </div>

        </div>

        {/* HISTORICAL TIMELINE */}
        <section className="pt-6 border-t border-slate-200 space-y-6">
          <h3 className="text-xl font-serif font-black text-slate-800">Key Historical Highlights</h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contributions.map((item, idx) => (
              <div key={idx} className="bg-[#FAF8F3] border border-slate-200 p-6 rounded-2xl relative flex flex-col justify-between hover:border-[#D4AF37] transition-colors shadow-sm">
                <div>
                  <span className="font-serif text-2xl font-black text-[#D4AF37] block mb-1">{item.year}</span>
                  <h4 className="font-serif font-bold text-slate-800 text-base leading-tight">{item.title}</h4>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
