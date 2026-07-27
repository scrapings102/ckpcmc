import React, { useState } from "react";

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  imageUrl: string;
}

interface AccordionItemProps {
  key?: number;
  item: AccordionItemData;
  isActive: boolean;
  onSelect: () => void;
}

// --- Data for the image accordion ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: "B.Com",
    subtitle: "Bachelor of Commerce",
    desc: "A program designed to build strong foundations in accounting, finance, taxation, auditing, and corporate laws, empowering students with critical business and financial skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "BBA",
    subtitle: "Bachelor of Business Administration",
    desc: "Focused on shaping the next generation of business leaders. Empower your management skillsets with corporate case studies, entrepreneurship pitches, and financial analytics.",
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    desc: "Dive into contemporary software engineering, full stack development, database administration, and application design, built to address high-demand technological fields.",
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
  },
];

// --- Accordion Item Component ---
const AccordionItem = ({ item, isActive, onSelect }: AccordionItemProps) => {
  return (
    <div
      className={`
        relative w-full rounded-2xl overflow-hidden cursor-pointer md:shrink-0
        transition-all duration-700 ease-in-out
        ${isActive 
          ? "h-[220px] sm:h-[260px] md:h-[450px] md:w-[220px] lg:w-[320px] xl:w-[400px]" 
          : "h-[70px] sm:h-[80px] md:h-[450px] md:w-[60px] lg:w-[70px] xl:w-[80px]"
        }
      `}
      onMouseEnter={onSelect}
      onClick={onSelect}
    >
      {/* Background Image */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop";
        }}
      />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Caption Text */}
      <span
        className={`
          absolute text-white text-base md:text-lg font-semibold whitespace-nowrap
          transition-all duration-500 ease-in-out
          ${
            isActive
              ? "bottom-6 left-6 rotate-0 translate-x-0 translate-y-0"
              : "left-6 rotate-0 bottom-1/2 translate-y-1/2 md:rotate-90 md:bottom-24 md:left-1/2 md:-translate-x-1/2 md:translate-y-0"
          }
        `}
      >
        {item.title}
      </span>
    </div>
  );
};

// --- Main App Component ---
export default function Courses() {
  const [activeIndex, setActiveIndex] = useState(2); // Default to BCA (index 2)

  const handleItemHover = (index: number) => {
    setActiveIndex(index);
  };

  const activeItem = accordionItems[activeIndex] || accordionItems[0];

  return (
    <div className="bg-white font-sans" id="courses">
      <section className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Left Side: Text Content */}
          <div className="w-full md:w-[45%] text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2D2424]/5 text-[#2D2424] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
              Offered Courses
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#2D2424] font-bold leading-tight mb-8">
              Academic Programmes
            </h2>
            
            {/* Dynamic Card for Active Course */}
            <div className="min-h-[160px] flex flex-col justify-start transition-all duration-500 ease-in-out">
              <h3 className="text-2xl md:text-3xl font-serif text-[#6F4E37] font-bold mb-3 transition-colors duration-300">
                {activeItem.title} - <span className="text-[#2D2424]">{activeItem.subtitle}</span>
              </h3>
              <p className="text-[#2D2424]/80 leading-relaxed font-sans text-sm md:text-base font-medium transition-opacity duration-300">
                {activeItem.desc}
              </p>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => {
                  const el = document.getElementById("admissions");
                  if (el) {
                    if ((window as any).lenis) {
                      (window as any).lenis.start();
                      (window as any).lenis.scrollTo(el, { offset: -80, duration: 1.2 });
                    } else {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="px-8 py-4 bg-[#D4AF37] hover:bg-[#2D2424] text-[#2D2424] hover:text-white font-sans font-bold text-sm uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center gap-2 group shadow-xl shadow-[#D4AF37]/25 cursor-pointer select-none active:scale-95"
              >
                Apply for Admission
              </button>
            </div>
          </div>

          {/* Right Side: Image Accordion */}
          <div className="w-full md:w-[55%] flex justify-center">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 p-4 w-full">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onSelect={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
