import React from "react";
import { Landmark, Building, Check, Award, ShieldCheck, Sparkles } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function Trust() {
  const institutes = [
    { 
      name: "C.K. Pithawalla College of Commerce, Management & Computer Application", 
      type: "Commerce, Business Admin & BCA", 
      location: "Surat Campus",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "C.K. Pithawalla College of Engineering & Technology (CKPCET)", 
      type: "Degree Engineering & Technology", 
      location: "Surat Campus",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Navyug Science College", 
      type: "Pure & Applied Sciences", 
      location: "Rander Road Campus",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Navyug Commerce College", 
      type: "Commerce & Accountancy", 
      location: "Rander Road Campus",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    },
    { 
      name: "Navyug Arts College", 
      type: "Humanities & Languages", 
      location: "Rander Road Campus",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <SubPageLayout
      title="Navyug Vidyabhavan Trust"
      subtitle="The parent governing educational board behind C.K. Pithawalla and Navyug institutions since 1965."
      category="about"
      activeItemLabel="About Trust"
    >
      <div className="space-y-12 text-[#3B3131]">
        
        {/* HERO IMAGE FOCUS BANNER */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200/80 shadow-xl group">
          <div className="aspect-[16/7] md:aspect-[21/8] w-full relative bg-slate-900 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1600&auto=format&fit=crop" 
              alt="Navyug Vidyabhavan Trust Campus" 
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 opacity-80"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515] via-[#1B1515]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1B1515]/90 via-transparent to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-mono font-bold tracking-widest uppercase mb-3 w-fit">
                <Landmark size={14} />
                <span>Established 1965</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white tracking-tight max-w-2xl leading-tight">
                Over 55 Years of Educational Service & Governance
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm font-sans mt-2 max-w-xl leading-relaxed">
                Governing premier higher education colleges across South Gujarat with merit-based guidelines, updated infrastructure, and civic dedication.
              </p>
            </div>
          </div>
        </div>

        {/* NARRATIVE SECTION */}
        <section className="bg-[#FAF8F3] border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
          <h2 className="text-2xl font-serif font-bold text-[#7E1B1F] tracking-tight">Genesis of Navyug Trust</h2>
          <div className="h-1 w-16 bg-[#D4AF37] rounded-full" />
          
          <div className="text-slate-700 leading-relaxed font-sans text-sm sm:text-base space-y-4">
            <p>
              The <strong>Navyug Vidyabhavan Trust</strong> was established in the year 1965 with the noble goal of democratizing higher education opportunities in South Gujarat. Founded by prominent visionaries, industrialists, and social leaders of the region, the trust began its journey by establishing premier colleges on spacious campuses to serve students from diverse socioeconomic backgrounds.
            </p>
            <p>
              Over the decades, the trust has earned immense respect for its democratic, merit-based admission guidelines, premium infrastructure setup, and dedication to social welfare. By collaborating with active donors, most notably the benevolent <strong>Pithawalla Family</strong>, the trust has continuously expanded its campuses and modern academic courses.
            </p>
            <p>
              Under its expert governing board, the trust ensures that all affiliate colleges maintain high academic compliance with Veer Narmad South Gujarat University (VNSGU) and state standards.
            </p>
          </div>
        </section>

        {/* SISTER INSTITUTIONS WITH CAMPUS IMAGES */}
        <section className="space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#7E1B1F] font-mono text-xs font-bold uppercase tracking-widest">Educational Hub</span>
            <h3 className="text-2xl font-serif font-bold text-slate-800">Sister & Associated Academies</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {institutes.map((inst, idx) => (
              <div key={idx} className="bg-[#FAF8F3] border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                  <img 
                    src={inst.image} 
                    alt={inst.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 right-3 text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-[#1B1515]/80 text-[#D4AF37] border border-[#D4AF37]/30 backdrop-blur-md">
                    {inst.location}
                  </span>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-base text-slate-800 leading-snug">{inst.name}</h4>
                    <p className="text-xs text-slate-500 mt-2 font-sans font-medium">{inst.type}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 text-xs font-mono font-bold text-[#7E1B1F] uppercase flex items-center gap-1.5">
                    <Building size={14} />
                    <span>Navyug Trust Affiliated</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
