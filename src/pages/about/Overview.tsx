import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, BookOpen, Clock, Users, Building, GraduationCap, Check, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import SubPageLayout from "../../components/SubPageLayout";

const CAMPUS_IMAGES = [
  {
    url: "https://ckpcet.ac.in/img/home-page/slider/si-01.jpg",
    title: "Surat-Dumas Road Main Campus",
    subtitle: "C. K. Pithawalla Educational Complex",
  },
  {
    url: "https://ckpcmc.org/images/classrooms.jpg",
    title: "Digital Smart Classrooms",
    subtitle: "Interactive Learning & Multimedia Facilities",
  },
  {
    url: "https://ckpcmc.org/images/gal_01.jpeg",
    title: "College Auditorium & Seminar Hall",
    subtitle: "Host for National Conferences & Cultural Events",
  },
  {
    url: "https://ckpcmc.org/images/inter_01.jpeg",
    title: "Youth Fest & Inter-College Meets",
    subtitle: "VNSGU Cultural & Academic Competitions",
  },
  {
    url: "https://ckpcmc.org/images/canteen.jpg",
    title: "Campus Cafeteria & Student Hub",
    subtitle: "Hygienic Dining & Collaborative Spaces",
  },
  {
    url: "https://ckpcmc.org/images/sport_01.jpeg",
    title: "Sports & Fitness Infrastructure",
    subtitle: "Basketball, Volleyball & Indoor Sports Complex",
  },
  {
    url: "https://ckpcmc.org/images/drama_youth_Dec_2024.jpeg",
    title: "Cultural Arts & Drama Performances",
    subtitle: "Youth Festival Showcase & Talent Platform",
  },
];

export default function Overview() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + CAMPUS_IMAGES.length) % CAMPUS_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CAMPUS_IMAGES.length);
  };

  const milestones = [
    { year: "1998", title: "Foundational Vision", desc: "Established under the Navyug Vidyabhavan Trust to meet the growing need for high-quality professional commerce and management education in Surat." },
    { year: "2003", title: "Expansion of Commerce Wing", desc: "Launched our premier B.Com. program in English Medium, offering VNSGU curriculum aligned with national business standards." },
    { year: "2007", title: "Inception of BBA", desc: "Introduced the professional Bachelor of Business Administration to nurture global leadership and modern corporate governance." },
    { year: "2012", title: "Technology Integration", desc: "Inaugurated the Bachelor of Computer Applications (BCA) program, creating fully-equipped modern programming and network laboratories." },
    { year: "2022", title: "Silver Jubilee Celebration", desc: "Marked 25 years of educational distinction, having nurtured over 10,000 corporate professionals, technologists, and entrepreneurs." }
  ];

  return (
    <SubPageLayout
      title="About the College"
      subtitle="Fostering academic distinction, innovation, and ethical leadership in Surat for over 25 years."
      category="about"
      activeItemLabel="About Us"
    >
      <div className="space-y-10">
        
        {/* Editorial introduction with dropcap */}
        <section className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-serif font-black text-[#1B1515] tracking-tight">
            Institutional Legacy & Character
          </h2>
          <div className="h-1 w-16 bg-[#D4AF37] rounded-full" />
          
          <div className="text-[#3B3131]/90 leading-relaxed font-sans text-sm md:text-base space-y-4">
            <p>
              <span className="float-left text-6xl font-serif font-black text-[#D4AF37] mr-3 mt-1 leading-[0.8]">E</span>
              stablished in the year 1998, <strong>C. K. Pithawalla College of Commerce, Management & Computer Application (CKPCMC)</strong> is managed by the Navyug Vidyabhavan Trust. Over the past two and a half decades, the college has established itself as one of Surat’s elite hubs for undergraduate education, providing a launching pad for thousands of careers.
            </p>
            <p>
              Affiliated with the prestigious <strong>Veer Narmad South Gujarat University (VNSGU)</strong>, the college offers highly sought-after professional courses: B.Com. (Bachelor of Commerce - English Medium), BBA (Bachelor of Business Administration), and BCA (Bachelor of Computer Applications).
            </p>
            <p>
              Welcome to C. K. Pithawalla College of Commerce – Management – Computer Application, where academic excellence and vibrant campus life coexist. Our institution provides a wide variety of programs which are aimed at preparing students for the professional world.

At C. K. Pithawalla College of Commerce – Management – Computer Application, we take pride in building a community that supports and includes students in their academic and personal growth. Our faculty is a team of experts in their fields who offer mentorship and guidance to students to help them achieve their greatest potential.

With the latest equipment and the most advanced tools, including Library, Advanced Computer Lab, students have everything they need to succeed in their studies. Whether by means of research in our well-equipped labs, practical learning experiences, or collaborative projects, students are ready to face the challenges of today's dynamic world.
            </p>
          </div>
        </section>

        {/* Auto-scrolling Real College Campus Image Gallery */}
        <section 
          className="relative rounded-2xl overflow-hidden border border-slate-200 group shadow-md bg-[#FAF8F3]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative overflow-hidden bg-slate-950">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={CAMPUS_IMAGES[currentImageIndex].url}
                alt={CAMPUS_IMAGES[currentImageIndex].title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://ckpcet.ac.in/img/home-page/slider/si-01.jpg";
                }}
              />
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Top Badge & Controls */}
            <div className="absolute top-3 left-4 right-4 flex items-center justify-between z-10 pointer-events-auto">
              <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-mono tracking-wider text-[#D4AF37] uppercase font-bold border border-[#D4AF37]/30">
                Live Campus Showcase ({currentImageIndex + 1}/{CAMPUS_IMAGES.length})
              </span>
              
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="p-1.5 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white/90 hover:text-white transition-all border border-white/20"
                title={isPaused ? "Resume auto-play" : "Pause auto-play"}
              >
                {isPaused ? <Play size={14} /> : <Pause size={14} />}
              </button>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white border border-white/20 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/75 backdrop-blur-md text-white border border-white/20 transition-all opacity-80 group-hover:opacity-100 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>

            {/* Caption & Title */}
            <div className="absolute bottom-4 left-4 right-4 text-white z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <h4 className="font-serif font-bold text-base md:text-xl leading-tight text-white drop-shadow-md">
                    {CAMPUS_IMAGES[currentImageIndex].title}
                  </h4>
                  <p className="text-xs md:text-sm text-slate-200/90 font-sans mt-0.5 font-medium drop-shadow-sm">
                    {CAMPUS_IMAGES[currentImageIndex].subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10">
              {CAMPUS_IMAGES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? "w-6 bg-[#D4AF37]" : "w-1.5 bg-white/50 hover:bg-white/80"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="p-3.5 text-xs font-sans text-[#3B3131]/80 bg-white border-t border-slate-100 flex items-center justify-between">
            <span className="font-semibold text-slate-700">C. K. Pithawalla College of Commerce, Management & Computer Application</span>
            <span className="text-[#D4AF37] font-bold shrink-0">Est. 1998</span>
          </div>
        </section>

        {/* Key Features / Facets */}
        <section className="grid sm:grid-cols-2 gap-6 pt-4">
          <div className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
              <GraduationCap size={20} />
            </div>
            <h4 className="font-serif font-black text-slate-800 text-[16px]">VNSGU Standard Curriculum</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Strict compliance with VNSGU academic guidelines, continuously updated syllabus parameters, regular continuous internal evaluation (CIE), and expert university-approved faculty.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8F3] border border-[#D4AF37]/20 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center shrink-0">
              <Building size={20} />
            </div>
            <h4 className="font-serif font-black text-slate-800 text-[16px]">Excellent Infrastructure</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-sans">
              Fully digitized smart lecture theaters, sophisticated computer programming laboratories with fiber broadband, centralized student library, and indoor-outdoor sports grounds.
            </p>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="pt-6 border-t border-slate-100 space-y-6">
          <h3 className="text-xl font-serif font-black text-slate-800">Our Journey of Excellence</h3>
          <p className="text-xs text-slate-500 font-sans leading-relaxed">
            The steady evolution of CKPCMC from a newly founded institute into one of VNSGU's top-tier affiliated self-financed colleges.
          </p>

          <div className="relative border-l-2 border-[#D4AF37]/20 ml-3 pl-6 space-y-8 py-2">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#D4AF37] ring-4 ring-white shadow-sm transition-transform duration-300 group-hover:scale-125" />
                
                <div className="space-y-1">
                  <span className="font-serif text-base font-black text-[#D4AF37]">{item.year}</span>
                  <h4 className="font-serif font-bold text-[#3B3131]">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-2xl font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </SubPageLayout>
  );
}
