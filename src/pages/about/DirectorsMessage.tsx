import React from "react";
import { Quote, Mail, Clock, Award, Sparkles, GraduationCap } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function DirectorsMessage() {
  return (
    <SubPageLayout
      title="Director's Message"
      subtitle="A message from our Campus Director, Dr. Chaitanya K. Desai."
      category="about"
      activeItemLabel="Director's Message"
    >
      <div className="space-y-12 text-[#3B3131]">

        {/* MAIN DIRECTOR PROFILE & MESSAGE */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Director Portrait Column - 5 cols with much bigger profile picture */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#FAF8F3] border-2 border-[#D4AF37]/40 rounded-3xl p-6 sm:p-8 text-center space-y-6 shadow-lg relative overflow-hidden group">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 mx-auto rounded-full overflow-hidden border-4 border-[#D4AF37] p-2 bg-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://ckpcmc.org/images/00%20Dr.Chaitanya%20Desai-%20Director.jpeg" 
                  alt="Dr. Chaitanya K. Desai" 
                  className="w-full h-full object-cover rounded-full"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=800";
                  }}
                />
              </div>

              <div>
                <h3 className="font-serif font-black text-2xl sm:text-3xl text-slate-900 leading-tight">Dr. Chaitanya K. Desai</h3>
                <p className="text-sm text-[#D4AF37] font-mono uppercase tracking-widest mt-2 font-black">Campus Director</p>
                <p className="text-xs text-slate-500 font-sans block mt-1 font-medium">PhD in Business Governance & Administration</p>
              </div>
              
              <div className="border-t border-slate-200 pt-4 text-left text-xs space-y-3 text-slate-600 font-sans bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="truncate font-mono font-semibold">director@ckpcmc.org</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">Office: 10:00 AM – 4:00 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={16} className="text-[#D4AF37] shrink-0" />
                  <span className="font-semibold">Veer Narmad South Gujarat University</span>
                </div>
              </div>
            </div>
          </div>

          {/* Director Letter - 7 cols */}
          <div className="lg:col-span-7 space-y-6 relative bg-[#FAF8F3] border border-slate-200 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm">
            <Quote className="absolute top-6 right-6 text-slate-200/80 shrink-0 pointer-events-none -z-0" size={72} />
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-black block">
                Dear Students, Parents & Stakeholders,
              </span>
              
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-slate-900 leading-snug">
                Building Professional Mastery in Commerce, Management & Computer Science
              </h2>
              
              <div className="h-1 w-20 bg-[#D4AF37] rounded-full" />
              
              <div className="space-y-4 text-slate-700 leading-relaxed font-sans text-sm sm:text-base">
                <p>
                  In today's highly dynamic economic and computing systems, those who command the intersection of business, finance, and digital tools hold the keys to professional progress. Our central target at CKPCMC is to ensure that our students do not simply memorize syllabus concepts, but actively grasp how markets react, how algorithms solve problems, and how professional groups collaborate.
                </p>
                <p>
                  Under the unified stewardship of the Navyug Vidyabhavan Trust, we continuously invest in state-of-the-art computer labs, smart projection class tools, and comprehensive library books. We are committed to fostering an inclusive, welcoming campus for every ambitious young mind.
                </p>
                <p>
                  I invite you to actively participate in our corporate internship programs, commerce clubs, and software coding seminars. Your progress is our signature of success.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col items-end">
                <span className="font-serif font-black text-xl text-[#1B1515]">Dr. Chaitanya K. Desai</span>
                <span className="text-xs text-slate-500 font-sans uppercase tracking-widest mt-1 font-bold">Campus Director, CKPCMC</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </SubPageLayout>
  );
}
