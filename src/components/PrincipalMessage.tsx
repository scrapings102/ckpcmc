import React from 'react';
import { Quote, FileText, ArrowUpRight, Award, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { cdn } from '../utils/image';

export const PrincipalMessage = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = scrollTop / (scrollHeight - clientHeight);
      setScrollProgress(isNaN(progress) ? 0 : progress);
    }
  };

  return (
    <section id="principal-message" className="py-28 bg-[#FAF8F5] relative overflow-hidden">
      {/* Editorial Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-gold/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-accent/3 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle background graticule pattern for academic gravitas */}
      <div className="absolute inset-0 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: Premium Editorial Portrait & Official Insignia (lg:col-span-5) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              
              {/* Portrait Frame */}
              <div className="relative w-full max-w-[340px] select-none group">
                
                {/* Mathematical double-border with elegant alignment */}
                <div className="absolute -inset-4 rounded-3xl border border-gold/25 pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
                <div className="absolute -inset-2 rounded-2xl border border-gold/15 pointer-events-none" />
                
                {/* Main image container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF8F5] shadow-[0_24px_48px_-12px_rgba(59,49,49,0.12)] border border-slate-200">
                  <img 
                    src={cdn("https://ckpcmc.org/images/WhatsApp%20Image%202025-08-25%20at%2013.09.22.jpeg", 800, 90)} 
                    alt="Dr. Chetan Chhotubhai Patel - Principal" 
                    className="w-full h-full object-cover scale-102 group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle editorial vignette gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3B3131]/30 via-transparent to-transparent opacity-80" />
                </div>

                {/* Overlapping Luxury Badge with gold-like accent */}
                <div className="absolute -bottom-4 -right-4 bg-[#3B3131] text-amber-400 p-4 rounded-xl shadow-[0_12px_24px_rgba(0,0,0,0.15)] border border-white/10 flex items-center justify-center transition-transform duration-300 hover:scale-110">
                  <Quote className="fill-amber-400 text-amber-400" size={18} />
                </div>
              </div>

              {/* Official Credentials & Seal */}
              <div className="w-full max-w-[340px] mt-8 text-center lg:text-left space-y-4">
                <div className="border-b border-slate-200 pb-4">
                  <h4 className="font-serif text-[#3B3131] font-extrabold text-xl tracking-tight leading-tight">
                    Dr. Chetan Chhotubhai Patel
                  </h4>
                  <p className="text-[#D4AF37] font-mono text-[10px] font-extrabold uppercase tracking-[0.2em] mt-1.5">
                    Principal & Academic Dean
                  </p>
                  <p className="text-slate-450 text-xs font-serif italic mt-1">
                    Ph.D. in Computer Engineering, VNSGU
                  </p>
                </div>


              </div>

            </div>

            {/* RIGHT COLUMN: The Academic Open Letter (lg:col-span-7) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Header Title with fine lines */}
              <div className="space-y-2 text-center lg:text-left">
                <span className="text-[#D4AF37] font-mono text-[11px] font-black uppercase tracking-[0.3em] block">
                  Leadership Address
                </span>
                <h3 className="text-[#3B3131] font-serif text-3xl sm:text-4xl font-black uppercase tracking-tight leading-none">
                  Message from the Principal
                </h3>
                <div className="h-[1px] w-16 bg-[#D4AF37] mx-auto lg:mx-0 mt-4" />
              </div>

              {/* Unique Scrollable Editorial Reader Pane */}
              <div className="relative border border-slate-200/80 bg-white rounded-2xl shadow-[0_16px_32px_rgba(59,49,49,0.02)] p-6 md:p-8 overflow-hidden">
                
                {/* Visual Reading progress line thread on the left margin */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-100">
                  <div 
                    className="w-full bg-[#D4AF37] transition-all duration-100 ease-out"
                    style={{ height: `${scrollProgress * 100}%` }}
                  />
                </div>

                {/* Top/Bottom gradient fade masks to hint at scrollability */}
                <div className="pointer-events-none absolute left-[3px] right-0 top-0 h-10 bg-gradient-to-b from-white to-transparent z-10 opacity-90" />
                <div className="pointer-events-none absolute left-[3px] right-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent z-10 opacity-90" />

                <div 
                  ref={scrollRef}
                  onScroll={handleScroll}
                  data-lenis-prevent="true"
                  className="h-[280px] md:h-[320px] overflow-y-auto pr-2 space-y-6 text-slate-600 font-sans text-[14.5px] sm:text-[15.5px] leading-relaxed antialiased font-normal text-justify select-text no-scrollbar scroll-smooth"
                >
                  <p>
                    <span className="float-left text-6xl font-serif font-extrabold text-[#3B3131] mr-3 mt-1.5 leading-none select-none">
                      I
                    </span>
                    t is with immense pride and a deep sense of responsibility that I welcome you to our distinguished academic community. Our institution has stood as a beacon of academic rigor, dedicated to fostering not only scientific and technical competence but also the ethical grounding and holistic resilience required to navigate and lead in an ever-evolving global society.
                  </p>

                  <p>
                    In today's fast-paced and interconnected landscape, higher education must transcend traditional instruction. We strive to cultivate a vibrant ecosystem of continuous inquiry, experimental learning, and technological literacy. By bridging industry-aligned core skills with a solid foundation in human values, we empower our students to transform complex challenges into pathways of monumental societal impact.
                  </p>

                  {/* Pull-Quote block for high typographic design value */}
                  <div className="my-6 py-6 px-6 sm:px-8 border-l-2 border-[#D4AF37] bg-slate-50 rounded-r-2xl shadow-[0_4px_12px_rgba(59,49,49,0.01)]">
                    <p className="font-serif italic text-base sm:text-lg text-[#3B3131] font-semibold leading-relaxed">
                      "We do not merely educate the intellect; we inspire the character, refine the vision, and nurture the creative spirit to build a better tomorrow."
                    </p>
                  </div>

                  <p>
                    Whether you are a prospective student embarking on a transformative path, an alumnus looking back at your foundation, or a partner seeking collaborative innovation, we invite you to engage with us. Together, let us continue to push boundaries, honor our rich legacy of excellence, and shape a future defined by knowledge and integrity.
                  </p>
                </div>
              </div>

              {/* Call-to-actions (CTA) panel */}
              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => alert("Opening Academic Vision Prospectus...")}
                  className="w-full sm:w-auto px-6 py-3 bg-[#3B3131] hover:bg-[#D4AF37] text-white hover:text-[#3B3131] rounded-xl font-sans font-black text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer select-none shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-transparent"
                >
                  <Award size={14} />
                  <span>Academic Vision</span>
                  <ArrowUpRight size={14} />
                </button>

                <button 
                  onClick={() => alert("Loading Institutional Annual Report...")}
                  className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-50 text-[#3B3131] border-2 border-slate-200 hover:border-slate-300 rounded-xl font-sans font-black text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer select-none shadow-sm flex items-center justify-center gap-2"
                >
                  <FileText size={14} className="text-[#D4AF37]" />
                  <span>Annual Report</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

