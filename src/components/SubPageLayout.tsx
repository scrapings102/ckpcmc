import React, { useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SEO from './SEO';
import { 
  Compass, 
  Home, 
  ArrowLeft, 
  ChevronRight, 
  BookOpen, 
  Users, 
  Award, 
  Shield, 
  FileText, 
  Calendar, 
  Landmark, 
  GraduationCap,
  Image as ImageIcon,
  Trophy,
  Coffee,
  Library,
  Eye,
  Target,
  Building2,
  UserCheck,
  ShieldAlert,
  ShieldCheck,
  Heart,
  CheckCircle2,
  ClipboardList,
  UserCog
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SubPageLayoutProps {
  title: string;
  subtitle?: string;
  category: 'about' | 'courses' | 'committees' | 'iqac' | 'staff' | 'campus-life' | 'student-corner' | 'activities';
  activeItemLabel: string;
  children: React.ReactNode;
}

const CATEGORY_NAMES: Record<string, string> = {
  about: 'About Us',
  courses: 'Courses',
  committees: 'Committees',
  iqac: 'IQAC Cell',
  staff: 'Our Staff',
  'campus-life': 'Campus Life',
  'student-corner': 'Student Corner',
  activities: 'Activities',
};

// Map each category to its list of navigation links and their respective display names
const CATEGORY_LINKS: Record<string, { label: string; path: string }[]> = {
  about: [
    { label: 'About Us', path: '/about/overview' },
    { label: 'Vision and Mission', path: '/about/vision-mission' },
    { label: 'Mission', path: '/about/mission' },
    { label: 'Founder', path: '/about/founder' },
    { label: 'About Trust', path: '/about/trust' },
    { label: 'Trustees', path: '/about/trustees' },
    { label: "Director's Message", path: '/about/directors-message' },
    { label: "Principal's Message", path: '/about/principals-message' },
    { label: "HOD's Message", path: '/about/hods-message' },
  ],
  courses: [
    { label: 'B.Com. (Eng. Med.)', path: '/courses/bcom' },
    { label: 'BBA', path: '/courses/bba' },
    { label: 'BCA', path: '/courses/bca' },
  ],
  committees: [
    { label: 'Anti-Ragging Committee', path: '/committees/anti-ragging' },
    { label: 'ST-SC Cell', path: '/committees/st-sc-cell' },
    { label: 'Sexual Harassment Committee', path: '/committees/sexual-harassment' },
  ],
  iqac: [
    { label: 'About IQAC', path: '/iqac/about' },
    { label: 'IQAC Objectives', path: '/iqac/objectives' },
    { label: 'Minutes & ATR', path: '/iqac/minutes' },
  ],
  staff: [
    { label: 'Teaching Staff', path: '/staff/teaching' },
    { label: 'Non-Teaching Staff', path: '/staff/non-teaching' },
  ],
  'campus-life': [
    { label: 'Hostel', path: '/campus-life/hostel' },
    { label: 'Canteen', path: '/campus-life/canteen' },
    { label: 'Classrooms', path: '/campus-life/classrooms' },
    { label: 'Library', path: '/campus-life/library' },
  ],
  'student-corner': [
    { label: 'Sports', path: '/student-corner/sports' },
    { label: 'Inter-College Achievements', path: '/student-corner/inter-college' },
    { label: 'Competitions', path: '/student-corner/competitions' },
    { label: 'Gallery', path: '/student-corner/gallery' },
    { label: 'Media Appreciation', path: '/student-corner/media-appreciation' },
  ],
  activities: [
    { label: 'News', path: '/activities/news' },
    { label: 'Achievements', path: '/activities/achievements' },
    { label: 'Events', path: '/activities/events' },
  ],
};

const PAGE_IMAGES: Record<string, string> = {
  // About Category
  'About Us': 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop',
  'Vision and Mission': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
  'Mission': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
  'Founder': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop',
  'About Trust': 'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1000&auto=format&fit=crop',
  'Trustees': 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1000&auto=format&fit=crop',
  "Director's Message": 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
  "Principal's Message": 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop',
  "HOD's Message": 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',

  // Courses
  'B.Com. (Eng. Med.)': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
  'BBA': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop',
  'BCA': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',

  // Committees
  'Anti-Ragging Committee': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
  'ST-SC Cell': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
  'Sexual Harassment Committee': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',

  // IQAC
  'About IQAC': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
  'IQAC Objectives': 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
  'Minutes & ATR': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',

  // Staff
  'Teaching Staff': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop',
  'Non-Teaching Staff': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',

  // Campus Life
  'Hostel': 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop',
  'Canteen': 'https://images.unsplash.com/photo-1567521464027-f127ff144346?q=80&w=1000&auto=format&fit=crop',
  'Classrooms': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  'Library': 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000&auto=format&fit=crop',

  // Student Corner
  'Sports': 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop',
  'Inter-College Achievements': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  'Competitions': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  'Gallery': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
  'Media Appreciation': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=1000&auto=format&fit=crop',

  // Activities
  'News': 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop',
  'Achievements': 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1000&auto=format&fit=crop',
  'Events': 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop'
};

function getImageForPage(activeItemLabel: string): string {
  if (PAGE_IMAGES[activeItemLabel]) return PAGE_IMAGES[activeItemLabel];
  return 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop';
}

function getIconForLabel(label: string) {
  const l = label.toLowerCase();
  if (l.includes('vision')) return Eye;
  if (l === 'mission') return Target;
  if (l.includes('founder')) return Award;
  if (l.includes('trustees')) return Users;
  if (l.includes('trust')) return Landmark;
  if (l.includes('director')) return UserCheck;
  if (l.includes('principal')) return GraduationCap;
  if (l.includes('hod')) return BookOpen;
  if (l.includes('about') || l.includes('overview')) return Building2;
  if (l.includes('non-teaching')) return UserCog;
  if (l.includes('teaching') || l.includes('staff')) return Users;
  if (l.includes('ragging')) return ShieldAlert;
  if (l.includes('harassment') || l.includes('posh')) return ShieldCheck;
  if (l.includes('cell')) return Heart;
  if (l.includes('message')) return FileText;
  if (l.includes('course') || l.includes('bba') || l.includes('bca') || l.includes('bcom')) return GraduationCap;
  if (l.includes('event') || l.includes('news')) return Calendar;
  if (l.includes('objectives')) return CheckCircle2;
  if (l.includes('minutes') || l.includes('atr')) return ClipboardList;
  if (l.includes('iqac')) return Landmark;
  if (l.includes('sports')) return Trophy;
  if (l.includes('gallery')) return ImageIcon;
  if (l.includes('canteen')) return Coffee;
  if (l.includes('library')) return Library;
  return ChevronRight;
}

export default function SubPageLayout({
  title,
  subtitle,
  category,
  activeItemLabel,
  children,
}: SubPageLayoutProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Just scroll to top on route change smoothly
    window.scrollTo({ top: 0, behavior: 'auto' });
    if (typeof window !== 'undefined' && (window as any).lenis) {
      (window as any).lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  const imageUrl = getImageForPage(activeItemLabel);
  const categoryDisplayName = CATEGORY_NAMES[category] || category;
  const links = CATEGORY_LINKS[category] || [];

  return (
    <div className="bg-[#FCFAF7] min-h-screen text-[#3B3131] font-sans pb-24 pt-0">
      <SEO 
        title={title} 
        subtitle={subtitle} 
        category={category} 
        activeItemLabel={activeItemLabel} 
        image={imageUrl} 
      />
      {/* ── BREADCRUMBS & TOP NAVIGATION SECTION ── */}
      <div className="bg-[#1B1515] text-white/50 text-[10px] md:text-xs py-2.5 border-b border-white/5">
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 select-none font-mono tracking-wider">
            <span className="cursor-pointer hover:text-white transition-colors" onClick={() => navigate('/')}>HOME</span>
            <span>/</span>
            <span className="text-[#D4AF37] font-black uppercase">{categoryDisplayName}</span>
            <span>/</span>
            <span className="text-white font-black uppercase truncate max-w-[160px] md:max-w-none">{activeItemLabel}</span>
          </div>
        </div>
      </div>

      {/* ── CLASSIC HEADER BANNER ("heading like before") ── */}
      <div className="bg-gradient-to-br from-[#1B1515] to-[#2D2424] text-white py-6 md:py-10 border-b border-[#D4AF37]/25 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.04)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 text-left">
          <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-[#D4AF37] uppercase font-black mb-3 block animate-pulse">
            {categoryDisplayName}
          </span>
          <h1 className="font-serif font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/75 font-sans text-xs sm:text-sm md:text-base max-w-4xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <div className="w-full max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-8 sm:py-10 md:py-12 lg:py-16">
        <main className="w-full bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 md:p-10 lg:p-12 min-h-[500px] shadow-sm overflow-visible relative">
          <AnimatePresence mode="wait">
            <motion.div
              ref={containerRef}
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="w-full relative"
            >
              {/* Back Link above subpage content */}
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-4">
                <button 
                  onClick={() => navigate('/')} 
                  className="flex items-center gap-2 font-sans font-black text-xs uppercase tracking-widest text-[#D4AF37] hover:text-[#2D2424] transition-colors cursor-pointer group"
                >
                  <ArrowLeft size={14} className="stroke-[3] transition-transform group-hover:-translate-x-1" />
                  Back to Home
                </button>
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
                  {categoryDisplayName} / {activeItemLabel}
                </span>
              </div>
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

