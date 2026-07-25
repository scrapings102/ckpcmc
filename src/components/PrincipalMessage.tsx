import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { cdn } from '../utils/image';

export const PrincipalMessage = () => {
  return (
    <section id="principal-message" className="py-24 bg-[#FAF8F5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-[#e8e3e3] rounded-2xl border border-navy/15 p-8 md:p-12 shadow-sm max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-gold" />
          
          <div className="relative shrink-0">
            <img 
              src={cdn("https://ckpcmc.org/images/WhatsApp%20Image%202025-08-25%20at%2013.09.22.jpeg", 800, 90)} 
              alt="Dr. Chetan Chhotubhai Patel - Principal" 
              className="w-48 h-48 rounded-full border-4 border-white object-cover shadow-lg"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 bg-gold text-white p-3 rounded-xl shadow-lg border-2 border-white">
              <Quote className="fill-white text-white" size={24} />
            </div>
          </div>

          <div className="flex-grow">
            <h2 className="text-gold font-sans font-black uppercase tracking-[0.2em] text-xs mb-4">Message from the Principal</h2>
            <p className="font-sans text-xl md:text-2xl text-charcoal italic font-medium leading-relaxed mb-8">
              "Welcome to our college, where we nurture young minds with knowledge, skills, and values for a dynamic future, focusing on excellence, innovation, and overall development."
            </p>
            <div>
              <h3 className="text-navy font-bold text-2xl mb-1 font-serif">Dr. Chetan Chhotubhai Patel</h3>
              <p className="text-charcoal/60 font-bold uppercase tracking-widest text-xs font-sans">Principal</p>
            </div>
            
            <button className="mt-8 px-6 py-2 border-2 border-gold text-gold hover:bg-gold hover:text-white rounded-lg font-bold text-xs uppercase tracking-widest transition-all cursor-pointer select-none">
              Read Annual Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
