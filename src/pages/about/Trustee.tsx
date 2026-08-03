import React from "react";
import { Award, Building, ChevronRight, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import SubPageLayout from "../../components/SubPageLayout";

interface TrusteeEntry {
  name: string;
  role: string;
  image: string;
}

const TRUSTEES: TrusteeEntry[] = [
  { name: "Shri Maheshbhai C. Pithawalla", role: "President", image: "https://ckpipsr.ac.in/images/trustees/mahesh-c-p.jpg" },
  { name: "Shri Ajitbhai C. Pithawalla", role: "Trustee", image: "https://ckpipsr.ac.in/images/trustees/ajit-c-p.jpg" },
  { name: "Shri Rameshchandra A. Mistry", role: "Trustee / Secretary", image: "https://ckpipsr.ac.in/images/trustees/ramesh-a-m.jpg" },
  { name: "Shri Birenbhai M. Pithawalla", role: "Trustee", image: "https://ckpipsr.ac.in/images/trustees/biren-m-p.jpg" },
  { name: "Shri Rahulbhai A. Pithawalla", role: "Trustee", image: "https://ckpipsr.ac.in/images/trustees/rahul-a-p.jpg" },
];

function getInitials(name: string) {
  const clean = name.replace(/^Shri\s+/i, "");
  return clean.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function Trustee() {
  return (
    <SubPageLayout
      title="Board of Trustees"
      subtitle="The governing leadership guiding Navyug Vidyabhavan Trust with integrity and forward-looking vision."
      category="about"
      activeItemLabel="Trustee"
    >
      <div className="space-y-12 text-[#3B3131]">
        <section className="space-y-6">
          <div className="text-center md:text-left space-y-1">
            <span className="text-[#7E1B1F] font-mono text-xs font-bold uppercase tracking-widest">
              Board Leadership
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-800">
              Members of the Governing Board
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUSTEES.map((tr, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-[#FAF8F3] border-2 border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-[#7E1B1F]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img
                        src={tr.image}
                        alt={tr.name}
                        className="w-20 h-20 rounded-2xl object-cover object-top shadow-md bg-white border border-slate-200 group-hover:border-[#7E1B1F] transition-colors"
                        loading="lazy"
                        decoding="async"
                        width={80}
                        height={80}
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(getInitials(tr.name))}&background=7E1B1F&color=D4AF37&size=256&bold=true`;
                        }}
                      />
                      <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 bg-white rounded-md shadow border border-slate-100 flex items-center justify-center text-[#D4AF37]">
                        <Award size={12} />
                      </div>
                    </div>

                    <div className="space-y-1 min-w-0">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#7E1B1F]/10 text-[#7E1B1F] font-mono text-[10px] uppercase tracking-wider font-bold">
                        <ShieldCheck size={11} />
                        {tr.role}
                      </span>
                      <h4 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug break-words">
                        {tr.name}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="border-t border-slate-200 mt-5 pt-4 flex items-center justify-between text-[10px] font-mono text-slate-500 uppercase font-bold">
                  <span className="flex items-center gap-1.5">
                    <Building size={13} className="text-[#D4AF37]" />
                    Navyug Vidyabhavan Trust
                  </span>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-[#7E1B1F] transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </SubPageLayout>
  );
}