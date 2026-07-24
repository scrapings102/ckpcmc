import React from "react";
import { Shield, Mail, Phone, Users, Sparkles, Award } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

export default function Trustee() {
  const trustees = [
    {
      name: "Shri Mukeshbhai Pithawalla",
      role: "Managing Trustee",
      quote: "Our primary objective is to integrate practical, industry-oriented expertise into our students' learning lifecycles.",
      field: "Distinguished Industrialist & Educationalist",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600"
    },
    {
      name: "Smt. Amritaben Pithawalla",
      role: "Executive Trustee",
      quote: "Academic credentials achieve real value only when paired with sound character, personal responsibility, and civic ethics.",
      field: "Humanitarian, Activist & Philanthropist",
      photo: "https://images.unsplash.com/photo-1580894732444-8fecef2271ff?auto=format&fit=crop&q=80&w=600&h=600"
    },
    {
      name: "Dr. R. J. Shah",
      role: "Trust Member (Academics)",
      quote: "By maintaining rigorous academic guidelines, continuous evaluation, and expert faculty panels, we remain Surat's education leader.",
      field: "Veteran Academic Advisor",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=600"
    },
    {
      name: "Shri Kiritbhai Patel",
      role: "Trust Secretary",
      quote: "Providing our students with updated computer networks, smart classrooms, and central library volumes is our constant endeavor.",
      field: "Chartered Administrator",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600&h=600"
    }
  ];

  return (
    <SubPageLayout
      title="Board of Trustees"
      subtitle="The governing leadership guiding Navyug Vidyabhavan Trust with integrity and forward-looking vision."
      category="about"
      activeItemLabel="Trustees"
    >
      <div className="space-y-12 text-[#3B3131]">

        {/* TRUSTEES GRID WITH PROMINENT PORTRAITS */}
        <section className="space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#7E1B1F] font-mono text-xs font-bold uppercase tracking-widest">Board Leadership</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-slate-800">Members of the Governing Board</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {trustees.map((tr, idx) => (
              <div 
                key={idx} 
                className="bg-[#FAF8F3] border-2 border-slate-200/80 rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between group hover:border-[#D4AF37] transition-all shadow-md overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Large High-Focus Portrait */}
                  <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-2xl overflow-hidden shrink-0 border-4 border-[#D4AF37] bg-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={tr.photo} 
                        alt={tr.name} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-2 min-w-0">
                      <span className="inline-block px-3 py-1 rounded-md bg-[#D4AF37]/20 text-[#8F6F10] font-mono text-xs uppercase tracking-wider font-bold">
                        {tr.role}
                      </span>
                      <h4 className="text-xl sm:text-2xl font-serif font-black text-slate-900 leading-tight">{tr.name}</h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-sans font-medium">{tr.field}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 font-sans italic leading-relaxed border-l-4 border-[#D4AF37] pl-4 py-2 bg-white p-4 rounded-r-2xl shadow-sm">
                    "{tr.quote}"
                  </p>
                </div>
                
                <div className="border-t border-slate-200 mt-6 pt-4 flex items-center justify-between text-xs font-mono text-slate-500 uppercase font-bold">
                  <span>Navyug Vidyabhavan Trust</span>
                  <Award size={18} className="text-[#D4AF37]" />
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
