import React from "react";
import { motion } from "motion/react";
import { Eye, Rocket, Heart, Compass, ShieldCheck, Sparkles, Award } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function VisionMission() {
  const coreValues = [
    { name: "Academic Integrity", icon: ShieldCheck, desc: "Upholding the highest moral and ethical standards in all educational activities, examinations, research work, and social interactions." },
    { name: "Student Empowerment", icon: Rocket, desc: "Enabling students with robust computing, corporate, and manager skills, fostering independence and confidence." },
    { name: "Inclusivity & Equity", icon: Heart, desc: "Embracing diverse cultural and economic student backgrounds, nurturing an unbiased, supportive community." },
    { name: "Continuous Innovation", icon: Compass, desc: "Staying updated with industrial trends by regularly modernizing facilities, learning media, and training techniques." }
  ];

  return (
    <SubPageLayout
      title="Vision & Mission"
      subtitle="Guiding our academic directives, student governance, and daily campus endeavors."
      category="about"
      activeItemLabel="Vision and Mission"
    >
      <div className="space-y-12 text-[#3B3131]">
        
        {/* HERO IMAGE FOCUS BANNER */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
          <div className="aspect-[16/7] md:aspect-[21/8] w-full relative bg-slate-900 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop" 
              alt="CKPCMC Vision and Mission" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515] via-[#1B1515]/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1515]/80 via-transparent to-transparent" />
            
            {/* Overlay badge & headline */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase mb-3 w-fit">
                <Sparkles size={14} />
                <span>Institutional Charter</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight max-w-2xl leading-tight">
                Empowering Minds, Shaping Ethics, Leading Innovation
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-xl leading-relaxed">
                Since 2005, C.K. Pithawalla College has nurtured commerce leaders, management experts, and tech innovators in Surat.
              </p>
            </div>
          </div>
        </div>

        {/* VISION & MISSION SPLIT WITH FEATURED IMAGES */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Vision Box */}
          <div className="bg-[#FAF8F3] border border-[#D4AF37]/40 rounded-3xl overflow-hidden shadow-md flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Vision" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#1B1515]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] flex items-center gap-2.5">
                <Eye size={22} />
                <span className="font-serif font-bold text-sm text-white tracking-wider uppercase">Our Vision</span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <p className="font-serif text-slate-800 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#D4AF37] pl-4">
                "To emerge as a nationally recognized center of educational excellence, producing versatile managers, commerce experts, and computer professionals endowed with strong moral character and exceptional intellectual competence to elevate society."
              </p>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C19A20] uppercase tracking-wider pt-2">
                <Award size={16} />
                <span>National Educational Standard</span>
              </div>
            </div>
          </div>

          {/* Mission Box */}
          <div className="bg-[#FAF8F3] border border-[#7E1B1F]/20 rounded-3xl overflow-hidden shadow-md flex flex-col group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" 
                alt="Our Mission" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515] via-transparent to-transparent opacity-80" />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-[#1B1515]/80 backdrop-blur-md border border-[#7E1B1F]/40 text-[#7E1B1F] flex items-center gap-2.5">
                <Rocket size={22} className="text-[#D4AF37]" />
                <span className="font-serif font-bold text-sm text-white tracking-wider uppercase">Our Mission</span>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <p className="font-serif text-slate-800 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#7E1B1F] pl-4">
                "To empower our students with industry-centric computer applications, practical business administration skills, robust academic rigor, and moral standards, preparing them for excellent corporate and entrepreneurial avenues globally."
              </p>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7E1B1F] uppercase tracking-wider pt-2">
                <Award size={16} />
                <span>Industry-Centric Empowerment</span>
              </div>
            </div>
          </div>

        </div>

        {/* SECONDARY PHOTO GALLERY SHOWCASE */}
        <section className="bg-gradient-to-r from-[#1B1515] to-[#2D2424] text-white rounded-3xl p-6 sm:p-8 md:p-10 border border-[#D4AF37]/30 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid md:grid-cols-3 gap-6 items-center relative z-10">
            <div className="space-y-3 md:col-span-1">
              <span className="text-[#D4AF37] font-mono text-xs font-bold uppercase tracking-widest block">Campus Atmosphere</span>
              <h3 className="font-serif font-bold text-2xl text-white">Where Learning Meets Purpose</h3>
              <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed">
                Our lush green campus on Dumas Road provides state-of-the-art computer labs, spacious seminar halls, and a vibrant community atmosphere.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop" 
                  alt="Student Collaboration" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-md group">
                <img 
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop" 
                  alt="Academic Excellence" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CORE VALUES SECTION */}
        <section className="pt-6 space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#7E1B1F] font-mono text-xs font-bold uppercase tracking-widest">Values We Practice</span>
            <h3 className="text-2xl font-serif font-bold text-slate-800">Our Core Institutional Values</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#FAF8F3] border border-slate-200/80 hover:border-[#D4AF37] transition-all duration-300 shadow-sm flex flex-col justify-between group">
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-[#1B1515] text-[#D4AF37] w-12 h-12 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-serif font-bold text-slate-800 text-base">{val.name}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
