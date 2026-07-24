import React from 'react';
import { ArrowRight, Award, GraduationCap, Building2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

export const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] overflow-hidden relative" id="about">
      {/* Background soft glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#2B2323]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 text-left"
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-[#2B2323] text-[#D4AF37] text-[11px] font-mono tracking-[0.2em] uppercase font-bold rounded-full mb-6 border border-[#D4AF37]/30 shadow-sm">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              <span>Established 2005 • VNSGU Affiliated</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2B2323] font-bold leading-[1.18] mb-6">
              Pioneering Academic Excellence & <br className="hidden sm:inline" />
              <span className="text-[#C19A20] relative inline-block">
                Modern Professional Vision
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-[#D4AF37]/40 rounded-full" />
              </span>
            </h2>

            <div className="space-y-4 text-[#4A3E3E] leading-relaxed font-sans text-sm md:text-base font-normal mb-8">
              <p>
                <strong className="text-[#2B2323] font-semibold">C. K. Pithawalla College of Commerce, Management & Computer Application</strong> is a premier higher education institution in Surat, Gujarat. Managed by the esteemed <span className="text-[#2B2323] font-semibold">Navyug Vidyabhavan Trust</span>, our campus is dedicated to nurturing future business leaders, finance experts, and computer software innovators.
              </p>
              <p className="text-sm text-[#5C4F4F]">
                Situated along Dumas Road near Malvan Mandir, our institution blends rigorous academic curricula with hands-on skill development, modern smart classrooms, digital computer laboratories, and comprehensive placement support.
              </p>
            </div>

            {/* Key Value Highlight Grid */}
            <div className="grid grid-cols-2 gap-4 mb-9">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#2B2323]/8 shadow-sm">
                <div className="p-2 rounded-xl bg-[#2B2323] text-[#D4AF37] shrink-0">
                  <Award size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-[#2B2323] uppercase tracking-wide">Legacy Trust</h4>
                  <p className="font-sans text-[11px] text-[#6E5E5E] leading-tight mt-0.5">Navyug Vidyabhavan Trust leadership</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#2B2323]/8 shadow-sm">
                <div className="p-2 rounded-xl bg-[#2B2323] text-[#D4AF37] shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-[#2B2323] uppercase tracking-wide">3 Core Programs</h4>
                  <p className="font-sans text-[11px] text-[#6E5E5E] leading-tight mt-0.5">B.Com, BBA & BCA degrees</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#2B2323]/8 shadow-sm">
                <div className="p-2 rounded-xl bg-[#2B2323] text-[#D4AF37] shrink-0">
                  <Building2 size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-[#2B2323] uppercase tracking-wide">Smart Campus</h4>
                  <p className="font-sans text-[11px] text-[#6E5E5E] leading-tight mt-0.5">Digitized IT labs & library</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-[#2B2323]/8 shadow-sm">
                <div className="p-2 rounded-xl bg-[#2B2323] text-[#D4AF37] shrink-0">
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-xs text-[#2B2323] uppercase tracking-wide">Placement Cell</h4>
                  <p className="font-sans text-[11px] text-[#6E5E5E] leading-tight mt-0.5">Active industry recruitment</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => navigate('/about/overview')}
                className="px-7 py-3.5 bg-[#2B2323] text-white rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#1D1616] transition-all flex items-center gap-2.5 group shadow-lg shadow-[#2B2323]/20 cursor-pointer select-none active:scale-95"
              >
                <span>Read Full Overview</span>
                <ArrowRight size={15} className="text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => navigate('/about/vision-mission')}
                className="px-6 py-3.5 bg-white text-[#2B2323] border border-[#2B2323]/20 hover:border-[#2B2323] rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-white/80 transition-all flex items-center gap-2 cursor-pointer select-none active:scale-95"
              >
                <Sparkles size={14} className="text-[#C19A20]" />
                <span>Vision & Mission</span>
              </button>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.18)] border border-[#2B2323]/10 bg-[#2B2323]">
              <img 
                src="https://ckpcet.ac.in/img/home-page/slider/si-01.jpg" 
                alt="CKPCMC Campus Surat" 
                className="w-full h-[360px] sm:h-[460px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
                <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-mono font-bold tracking-widest uppercase mb-1">
                  <Building2 size={13} />
                  <span>Dumas Road, Surat Campus</span>
                </div>
                <h3 className="text-white font-serif font-bold text-lg sm:text-xl">
                  C. K. Pithawalla Educational Complex
                </h3>
                <p className="text-white/70 font-sans text-xs mt-1">
                  Empowering students with knowledge, integrity, and future-ready skills.
                </p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-5 -left-2 sm:top-6 sm:-left-4 z-20 bg-white/95 backdrop-blur-xl border border-[#2B2323]/15 shadow-xl rounded-2xl p-4 flex items-center gap-3.5 max-w-[240px]">
              <div className="w-10 h-10 rounded-xl bg-[#2B2323] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-sm">
                <Award size={20} />
              </div>
              <div>
                <p className="font-sans font-bold text-xs text-[#2B2323] leading-snug">VNSGU Affiliated</p>
                <p className="font-sans text-[10px] text-[#6E5E5E] leading-tight">Accredited higher education degrees</p>
              </div>
            </div>

            {/* Decorative background glows */}
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-8 -left-8 w-56 h-56 bg-[#2B2323]/15 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

