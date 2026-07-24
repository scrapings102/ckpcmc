import React from "react";
import { Mail, Check, Quote, Award } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function HodsMessage() {
  const currentHod = {
    name: "Mr. Hitesh B Vora",
    role: "Head of Department (HOD)",
    credentials: "Ph.D. (Pursuing), MCA, NET",
    email: "hv.ckpcmc@gmail.com",
    photo: "https://ckpcmc.org/images/HV.jpeg",
    message: "Welcome to C.K. Pithawalla College of Commerce & Management. As Head of Department, my commitment is to deliver an empowering academic environment across our B.Com, BBA, and BCA programs. We bridge foundational theory with cutting-edge practical skills, industry internships, and ethical leadership to shape high-caliber graduates ready for top university ranks and rewarding careers.",
    goals: [
      "Integrated skill development bootcamps, industry guest sessions, and career readiness workshops.",
      "Comprehensive syllabus delivery with continuous laboratory practice and real-world project work.",
      "Dedicated student academic counseling, university examination preparation, and placement support."
    ]
  };

  return (
    <SubPageLayout
      title="HOD's Message"
      subtitle="Academic address and departmental direction from our Head of Department, Mr. Hitesh B Vora."
      category="about"
      activeItemLabel="HOD's Message"
    >
      <div className="space-y-10 text-[#3B3131]">
        
        {/* HOD CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* HOD Profile Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF8F3] border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-lg relative overflow-hidden group">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37] p-2 bg-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={currentHod.photo} 
                  alt={currentHod.name} 
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 leading-tight">{currentHod.name}</h3>
                <p className="text-sm text-[#D4AF37] font-mono uppercase tracking-widest mt-2 font-black">{currentHod.role}</p>
                <p className="text-xs text-slate-500 font-sans block mt-1 font-medium">{currentHod.credentials}</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4 text-left text-xs space-y-3 text-slate-600 font-sans bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate font-mono font-semibold">{currentHod.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">Academic Leadership & Department Management</span>
                </div>
              </div>
            </div>
          </div>

          {/* HOD Address Letter - 7 cols */}
          <div className="lg:col-span-7 space-y-6 relative bg-[#FAF8F3] border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            <Quote className="absolute top-6 right-6 text-slate-200/80 shrink-0 pointer-events-none -z-0" size={72} />
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-black block">
                Departmental Leadership Message:
              </span>
              
              <p className="font-serif italic text-slate-800 text-base sm:text-lg leading-relaxed border-l-4 border-[#D4AF37] pl-4 py-1">
                "{currentHod.message}"
              </p>
              
              {/* Departmental Direct Action Goals */}
              <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/30 space-y-3 shadow-sm">
                <h4 className="font-serif font-bold text-base text-slate-900">Key Departmental Goals:</h4>
                <div className="grid gap-3 text-xs sm:text-sm text-slate-700 font-sans">
                  {currentHod.goals.map((goal, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start">
                      <Check size={16} className="text-[#D4AF37] mt-0.5 shrink-0" />
                      <span>{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase">Head of Department, CKPCMC</span>
                <span className="font-serif font-black text-slate-900">{currentHod.name}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
