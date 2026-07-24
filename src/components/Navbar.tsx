import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, LayoutGroup } from 'motion/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, Phone, Home, Mail, MapPin,
  BookOpen, Cpu, Info, Library, GraduationCap, Users, HeartHandshake, 
  Briefcase, FileText, Settings, Trophy, Sparkles, Network, ArrowRight,
  Palette, Calendar, Target, FolderClosed, Shield, UserCheck, Home as HomeIcon,
  Coffee, Laptop, Image, Newspaper, Award, Search, Building2
} from 'lucide-react';
import CkpcmcLogo from './CkpcmcLogo';
import { useLenis } from '../context/LenisContext';

const keyToHashSegment: Record<string, string> = {
  "About Us": "about/overview",
  "Vision and Mission": "about/vision-mission",
  "Mission": "about/mission",
  "Founder": "about/founder",
  "About Trust": "about/trust",
  "Trustee": "about/trustees",
  "Director's Message": "about/directors-message",
  "Principal's Message": "about/principals-message",
  "HOD's Message": "about/hods-message",
  
  "B.Com. (Eng. Med.)": "courses/bcom",
  "BBA": "courses/bba",
  "BCA": "courses/bca",
  
  "Anti-Ragging Committee": "committees/anti-ragging",
  "ST-SC Cell": "committees/st-sc-cell",
  "Sexual Harassment Committee": "committees/sexual-harassment",
  
  "About IQAC": "iqac/about",
  "IQAC Objectives": "iqac/objectives",
  "Minutes & ATR": "iqac/minutes",
  
  "Teaching Staff": "staff/teaching",
  "Non-Teaching Staff": "staff/non-teaching",
  
  "Hostel": "campus-life/hostel",
  "Canteen": "campus-life/canteen",
  "Classrooms": "campus-life/classrooms",
  "Library": "campus-life/library",
  
  "Sports": "student-corner/sports",
  "Inter-College Achievements": "student-corner/inter-college",
  "Competitions": "student-corner/competitions",
  "Gallery": "student-corner/gallery",
  "Media Appreciation": "student-corner/media-appreciation",
  
  "News": "activities/news",
  "Achievements": "activities/achievements",
  "Events": "activities/events"
};

const leftNavItems = [
  { name: 'About', id: 'about', dropdown: ['About Us', 'Vision and Mission', 'Mission', 'Founder', 'About Trust', 'Trustee', 'Director\'s Message', 'Principal\'s Message', 'HOD\'s Message'], align: 'left' },
  { name: 'Courses', id: 'courses', dropdown: ['B.Com. (Eng. Med.)', 'BBA', 'BCA'], align: 'left' },
  { name: 'Staff', id: 'staff', dropdown: ['Teaching Staff', 'Non-Teaching Staff'], align: 'left' },
  { name: 'Committees', id: 'committees', dropdown: ['Anti-Ragging Committee', 'ST-SC Cell', 'Sexual Harassment Committee'], align: 'right' },
  { name: 'IQAC', id: 'iqac', dropdown: ['About IQAC', 'IQAC Objectives', 'Minutes & ATR'], align: 'right' },
];

const rightNavItems = [
  { name: 'Campus Life', id: 'campus-life', dropdown: ['Hostel', 'Canteen', 'Classrooms', 'Library'], align: 'left' },
  { name: 'Student Corner', id: 'student-corner', dropdown: ['Sports', 'Inter-College Achievements', 'Competitions', 'Gallery', 'Media Appreciation'], align: 'right' },
  { name: 'Activities', id: 'activities', dropdown: ['News', 'Achievements', 'Events'], align: 'right' },
];

// Single combined row — used by the new left-logo / center-links / right-actions desktop layout
const navItems = [...leftNavItems, ...rightNavItems];

function useSmoothScrollTo() {
  const lenis = useLenis();

  const navigate = useNavigate();
  const location = useLocation();
  
  return (targetId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: targetId } });
      return;
    }

    if (targetId === 'home') {
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        if (lenis) {
          lenis.resize();
          lenis.scrollTo(el, { offset: -80 });
        } else {
          const rect = el.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          window.scrollTo({ top: rect.top + scrollTop - 80, behavior: 'smooth' });
        }
      }
    }
  };
}

const bottomNavItems = [
  { name: 'Home', id: 'home' },
  { name: 'About Us', id: 'about' },
  { name: 'Courses', id: 'courses' },
  { name: 'Committees', id: 'committees' },
  { name: 'IQAC', id: 'iqac' },
  { name: 'Staff', id: 'staff' },
  { name: 'Campus Life', id: 'campus-life' },
  { name: 'Student Corner', id: 'student-corner' },
  { name: 'Activities', id: 'activities' },
];

const landingNavItems = [
  { name: 'About Us', id: 'about', icon: Info },
  { name: 'News & Events', id: 'university-gazette', icon: Newspaper },
  { name: 'Principal\'s Message', id: 'principal-message', icon: FileText },
  { name: 'Courses', id: 'courses', icon: BookOpen },
  { name: 'Campus Life', id: 'campus-life', icon: Building2 },
  { name: 'Faculty', id: 'faculty', icon: Users },
  { name: 'Blog & Magazine', id: 'blogs-magazine', icon: Library },
  { name: 'Admissions', id: 'admissions', icon: GraduationCap },
];

const dropdownDetails: Record<string, { desc: string; icon: React.ComponentType<{ size?: number; className?: string }> }> = {
  'About Us': { desc: 'Milestones and legacy of CKPCMC', icon: Info },
  'Vision and Mission': { desc: 'Our foundational pillars and goals', icon: Target },
  'Mission': { desc: 'Our immediate execution plans', icon: Target },
  'Founder': { desc: 'Honoring Shri Chhotubhai Pithawalla', icon: Award },
  'About Trust': { desc: 'Navyug Vidyabhavan Trust history', icon: HeartHandshake },
  'Trustee': { desc: 'Visionaries guiding Navyug Trust', icon: Users },
  'Director\'s Message': { desc: 'Message from the Director', icon: FileText },
  'Principal\'s Message': { desc: 'Message from the Principal', icon: FileText },
  'HOD\'s Message': { desc: 'Message from our department heads', icon: FileText },
  'B.Com. (Eng. Med.)': { desc: 'Bachelor of Commerce Program', icon: Library },
  'BBA': { desc: 'Bachelor of Business Administration', icon: Briefcase },
  'BCA': { desc: 'Bachelor of Computer Applications', icon: Cpu },
  'Anti-Ragging Committee': { desc: 'Zero-tolerance safety protocols', icon: Shield },
  'ST-SC Cell': { desc: 'Equal opportunities & welfare resources', icon: UserCheck },
  'Sexual Harassment Committee': { desc: 'POSH compliance & women cell', icon: Shield },
  'About IQAC': { desc: 'Quality assurance cell overview', icon: Shield },
  'IQAC Objectives': { desc: 'Quality assurance standards', icon: Shield },
  'Minutes & ATR': { desc: 'Meetings and action audits', icon: FileText },
  'Teaching Staff': { desc: 'Our qualified academic guides', icon: Users },
  'Non-Teaching Staff': { desc: 'Lab assistants and library admins', icon: Users },
  'Sports': { desc: 'Indoor-outdoor games & gymkhana', icon: Trophy },
  'Hostel': { desc: 'Secure residential boarding facilities', icon: Building2 },
  'Canteen': { desc: 'Hygienic vegetarian cafeteria', icon: Coffee },
  'Classrooms': { desc: 'Digitized smart lecture theaters', icon: Laptop },
  'Library': { desc: 'Central collection of books and journals', icon: BookOpen },
  'Inter-College Achievements': { desc: 'Championship representation records', icon: Trophy },
  'Competitions': { desc: 'Fests, hackathons, and commerce quizzes', icon: Palette },
  'Gallery': { desc: 'Moments of convocations & campus life', icon: Image },
  'Media Appreciation': { desc: 'Official press releases & clippings', icon: Newspaper },
  'News': { desc: 'Live notices and campus bulletins', icon: Newspaper },
  'Achievements': { desc: 'Celebrations of rankers & medalists', icon: Trophy },
  'Events': { desc: 'Conclaves, webinars, and tech hackathons', icon: Calendar },
};

const menuSubmaps: Record<string, string[]> = {
  'About Us': ['About Us', 'Vision and Mission', 'Mission', 'Founder', 'About Trust', 'Trustee', 'Director\'s Message', 'Principal\'s Message', 'HOD\'s Message'],
  'Courses': ['B.Com. (Eng. Med.)', 'BBA', 'BCA'],
  'Committees': ['Anti-Ragging Committee', 'ST-SC Cell', 'Sexual Harassment Committee'],
  'IQAC': ['About IQAC', 'IQAC Objectives', 'Minutes & ATR'],
  'Staff': ['Teaching Staff', 'Non-Teaching Staff'],
  'Campus Life': ['Hostel', 'Canteen', 'Classrooms', 'Library'],
  'Student Corner': ['Sports', 'Inter-College Achievements', 'Competitions', 'Gallery', 'Media Appreciation'],
  'Activities': ['News', 'Achievements', 'Events']
};

/* ═══════════════════════════════════════════════════════════════
   MEGA MENU CONFIG — Code 1's big two-column + image-collage style,
   rebuilt to cover all 8 of Code 2's nav categories.
   Item descriptions/icons are pulled from dropdownDetails above,
   so there's only one source of truth for that text.
═══════════════════════════════════════════════════════════════ */
interface MegaMenuColumn {
  title: string;
  items: string[];
}

interface MegaMenuConfig {
  columns: MegaMenuColumn[];
  images: {
    tall1: { url: string; caption: string };
    tall2: { url: string; caption: string };
    landscape: { url: string; caption: string; tag: string };
  };
  accentText: string;
}

const megaMenuConfigs: Record<string, MegaMenuConfig> = {
  'About': {
    columns: [
      { title: 'Who We Are', items: ['About Us', 'Vision and Mission', 'Mission', 'Founder'] },
      { title: 'Leadership & Trust', items: ['About Trust', 'Trustee', 'Director\'s Message', 'Principal\'s Message', 'HOD\'s Message'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop', caption: 'Founder Vision' },
      tall2: { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop', caption: 'Director\'s Desk' },
      landscape: { url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop', caption: 'CKPCMC Main Campus Facade', tag: 'Est. 1991' }
    },
    accentText: 'A Legacy of 30+ Years of Academic Excellence'
  },
  'Courses': {
    columns: [
      { title: 'Undergraduate Programs', items: ['B.Com. (Eng. Med.)', 'BBA', 'BCA'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=400&auto=format&fit=crop', caption: 'IT Labs' },
      tall2: { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=400&auto=format&fit=crop', caption: 'Business Studio' },
      landscape: { url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop', caption: 'Smart Classroom Lecturing', tag: 'VNSGU Approved' }
    },
    accentText: 'Empowering Careers via Modern Specializations'
  },
  'Staff': {
    columns: [
      { title: 'Our People', items: ['Teaching Staff', 'Non-Teaching Staff'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400&auto=format&fit=crop', caption: 'Academic Mentors' },
      tall2: { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop', caption: 'Faculty Meet' },
      landscape: { url: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600&auto=format&fit=crop', caption: 'Dedicated Teaching Faculty', tag: 'Expert Educators' }
    },
    accentText: 'Guided by Passionate and Qualified Educators'
  },
  'Committees': {
    columns: [
      { title: 'Student Safety & Support', items: ['Anti-Ragging Committee', 'ST-SC Cell', 'Sexual Harassment Committee'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop', caption: 'Inclusion Cell' },
      tall2: { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop', caption: 'Compliance Panel' },
      landscape: { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop', caption: 'Academic Audit Meeting', tag: 'A Grade Standard' }
    },
    accentText: 'A Secure, Transparent and Inclusive Learning Campus'
  },
  'IQAC': {
    columns: [
      { title: 'Quality Assurance', items: ['About IQAC', 'IQAC Objectives', 'Minutes & ATR'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop', caption: 'Quality Cell' },
      tall2: { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=400&auto=format&fit=crop', caption: 'Audit Records' },
      landscape: { url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop', caption: 'Continuous Improvement Framework', tag: 'NAAC Ready' }
    },
    accentText: 'Committed to Continuous Quality Enhancement'
  },
  'Campus Life': {
    columns: [
      { title: 'Residential & Dining', items: ['Hostel', 'Canteen'] },
      { title: 'Academic Spaces', items: ['Classrooms', 'Library'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400&auto=format&fit=crop', caption: 'Library Portal' },
      tall2: { url: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=400&auto=format&fit=crop', caption: 'Study Spaces' },
      landscape: { url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=600&auto=format&fit=crop', caption: 'Central Library & Reading Hall', tag: '24/7 Digital Hub' }
    },
    accentText: 'Comfortable Spaces to Live, Eat and Learn'
  },
  'Student Corner': {
    columns: [
      { title: 'Sports & Competitions', items: ['Sports', 'Inter-College Achievements', 'Competitions'] },
      { title: 'Media & Memories', items: ['Gallery', 'Media Appreciation'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400&auto=format&fit=crop', caption: 'Sports Track' },
      tall2: { url: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=400&auto=format&fit=crop', caption: 'Student Lounge' },
      landscape: { url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop', caption: 'Annual Fest & Sports Meet', tag: 'Vibrant Campus Life' }
    },
    accentText: 'Fostering Lifelong Memories and Boundless Potential'
  },
  'Activities': {
    columns: [
      { title: 'Dynamic Bulletins', items: ['News', 'Achievements', 'Events'] }
    ],
    images: {
      tall1: { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=400&auto=format&fit=crop', caption: 'Guest Seminar' },
      tall2: { url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=400&auto=format&fit=crop', caption: 'Student Award' },
      landscape: { url: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=600&auto=format&fit=crop', caption: 'Major Academic Seminars', tag: 'Stay Updated' }
    },
    accentText: 'A Continuous Hub of Learning, Innovation and Joy'
  }
};

/* ═══════════════════════════════════════════════════════════════
   DESKTOP NAV ITEM — Code 1's mega-menu visual, wired to Code 2's
   router-based navigation. Open/close state is lifted to Navbar
   (activeMegaMenu) so the full-page backdrop blur can react to it.
═══════════════════════════════════════════════════════════════ */
interface NavItemDesktopProps {
  key?: string;
  item: {
    name: string;
    id: string;
    dropdown: string[];
    align: string;
  };
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggle: () => void;
}

function NavItemDesktop({ item, isActive, onMouseEnter, onMouseLeave, onToggle }: NavItemDesktopProps) {
  const config = megaMenuConfigs[item.name];
  const navigate = useNavigate();

  return (
    <div
      className="group h-full flex items-center static"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={(e) => {
          if (item.dropdown.length > 0) {
            e.preventDefault();
            onToggle();
          }
        }}
        className={`flex items-center gap-1 text-[10px] min-[1320px]:text-[11px] min-[1400px]:text-[12.5px] 2xl:text-[14.5px] font-sans font-extrabold py-2 px-0.5 min-[1320px]:px-1 min-[1400px]:px-2 transition-all duration-200 relative whitespace-nowrap cursor-pointer hover:scale-[1.02] active:scale-[0.98] shrink-0 ${
          isActive ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
        }`}
      >
        <span>{item.name}</span>
        {item.dropdown.length > 0 && (
          <ChevronDown size={13} className={`transition-transform duration-200 ${isActive ? 'rotate-180 text-[#D4AF37]' : 'text-white/60 group-hover:text-[#D4AF37]'}`} />
        )}
      </button>

      {item.dropdown.length > 0 && config && (
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.985, transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1] } },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 pointer-events-auto"
            >
              <div className="w-[92vw] max-w-[1020px] max-h-[82vh] overflow-y-auto overscroll-contain touch-pan-y border border-white/20 rounded-[2rem] shadow-[0_35px_80px_rgba(0,0,0,0.55)] p-6 md:p-8 bg-[#2D2424]/95 backdrop-blur-xl text-left relative" data-lenis-prevent="true">
                {/* Invisible mouse hover bridge */}
                <div className="absolute inset-x-0 -top-8 h-10 bg-transparent" />

                <div className="grid grid-cols-12 gap-8 items-stretch">
                  {/* Left side: Link Columns */}
                  <div className={`${config.images ? 'col-span-12 lg:col-span-7' : 'col-span-12'} flex flex-col justify-between`}>
                    <div className={`grid gap-x-6 gap-y-4 ${config.columns.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                      {config.columns.map((col) => (
                        <div key={col.title} className="flex flex-col">
                          <div className="mb-3 flex items-center justify-between border-b border-white/15 pb-2">
                            <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-black">
                              {col.title}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {col.items.map((subItemName) => {
                              const detail = dropdownDetails[subItemName] || { desc: '', icon: Sparkles };
                              return (
                                <button
                                  key={subItemName}
                                  onClick={() => {
                                    onMouseLeave();
                                    const segment = keyToHashSegment[subItemName];
                                    if (segment) navigate(`/${segment}`);
                                  }}
                                  className="group/menu-item text-left flex flex-col gap-0.5 py-1.5 px-3 -mx-3 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-200 w-full cursor-pointer"
                                >
                                  <span className="font-sans font-extrabold text-[13px] text-white group-hover/menu-item:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                                    <span>{subItemName}</span>
                                    <ArrowRight size={11} className="opacity-0 -translate-x-1 group-hover/menu-item:opacity-100 group-hover/menu-item:translate-x-0 transition-all duration-200 text-[#D4AF37]" />
                                  </span>
                                  <span className="font-sans text-[11px] text-white/70 group-hover/menu-item:text-white/90 transition-colors leading-tight font-medium">
                                    {detail.desc}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {config.accentText && (
                      <div className="pt-4 border-t border-white/15 flex items-center gap-2 text-white/60 font-sans text-xs font-semibold mt-4">
                        <Sparkles size={13} className="text-[#D4AF37]" />
                        <span>{config.accentText}</span>
                      </div>
                    )}
                  </div>

                  {/* Right side: Image collage */}
                  {config.images && (
                    <div className="hidden lg:flex col-span-5 gap-3 h-[220px] items-stretch pl-4 border-l border-white/10">
                      <div className="w-[90px] h-full rounded-[1.25rem] overflow-hidden shadow-sm relative group/item-img shrink-0 border border-white/10">
                        <img
                          src={config.images.tall1.url}
                          alt={config.images.tall1.caption}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item-img:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[9.5px] font-bold text-white leading-tight font-sans">
                            {config.images.tall1.caption}
                          </span>
                        </div>
                      </div>

                      <div className="w-[90px] h-full rounded-[1.25rem] overflow-hidden shadow-sm relative group/item-img shrink-0 border border-white/10">
                        <img
                          src={config.images.tall2.url}
                          alt={config.images.tall2.caption}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item-img:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[9.5px] font-bold text-white leading-tight font-sans">
                            {config.images.tall2.caption}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 h-full rounded-[1.25rem] overflow-hidden shadow-md relative group/item-img border border-white/10">
                        <img
                          src={config.images.landscape.url}
                          alt={config.images.landscape.caption}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/item-img:scale-105"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                          <span className="text-[8.5px] font-mono font-extrabold uppercase tracking-widest text-[#D4AF37] mb-0.5">
                            {config.images.landscape.tag}
                          </span>
                          <h4 className="text-white text-[11px] font-bold leading-tight font-sans">
                            {config.images.landscape.caption}
                          </h4>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function NavContent({
  menuOpen,
  setMenuOpen,
  isScrolled,
  activeMegaMenu,
  setActiveMegaMenu
}: {
  menuOpen: boolean;
  setMenuOpen: any;
  isScrolled: boolean;
  activeMegaMenu: string | null;
  setActiveMegaMenu: (name: string | null) => void;
}) {
  const scrollToId = useSmoothScrollTo();

  return (
    <>
      {/* ── DESKTOP: logo-left / links-center / actions-right (Code 1 layout) ── */}
      <div className={`hidden lg:flex items-center justify-between w-full px-3 sm:px-5 lg:px-6 2xl:px-9 transition-all duration-300 relative z-30 ${isScrolled ? 'h-[43px]' : 'h-[54px]'}`}>
        {/* Left: Logo + Title */}
        <div
          className="flex items-center gap-2 cursor-pointer group/logo select-none shrink-0"
          onClick={() => scrollToId('home')}
        >
          <div className={`rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center p-0.5 shadow-md transition-all duration-300 group-hover/logo:scale-[1.06] shrink-0 ${isScrolled ? 'w-7.5 h-7.5 2xl:w-8.5 2xl:h-8.5' : 'w-9.5 h-9.5 2xl:w-[42px] 2xl:h-[42px]'}`}>
            <CkpcmcLogo className="w-full h-full" showText={false} />
          </div>
          <div className="flex flex-col text-left justify-center">
            <span className="font-sans font-black tracking-[0.05em] text-white leading-none text-[12.5px] xl:text-[13.5px] 2xl:text-[14.5px] uppercase">
              C. K. PITHAWALLA
            </span>
            <div className="flex flex-col tracking-[0.05em] uppercase text-[#D4AF37] font-sans font-extrabold text-[7px] xl:text-[7.5px] 2xl:text-[8.2px] leading-[1.1] mt-0.5 opacity-95">
              <span>COMMERCE - MANAGEMENT</span>
              <span>COMPUTER APPLICATION</span>
            </div>
          </div>
        </div>

        {/* Center: Nav items */}
        <div className="flex-1 flex items-center justify-center gap-x-0 min-[1320px]:gap-x-1 min-[1400px]:gap-x-2.5 2xl:gap-x-4 min-w-0 mx-1 overflow-visible">
          {navItems.map((item) => (
            <NavItemDesktop
              key={item.name}
              item={item}
              isActive={activeMegaMenu === item.name}
              onMouseEnter={() => setActiveMegaMenu(item.name)}
              onMouseLeave={() => setActiveMegaMenu(null)}
              onToggle={() => setActiveMegaMenu(activeMegaMenu === item.name ? null : item.name)}
            />
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-x-1.5 shrink-0">
          <button
            onClick={() => scrollToId('admissions')}
            className="group/btn flex items-center gap-1.5 px-2.5 lg:px-4 py-1.5 rounded-full text-[9px] lg:text-[9.5px] font-black uppercase tracking-wider transition-all duration-300 bg-[#D4AF37] hover:bg-[#C9A227] text-[#1a1208] hover:shadow-[0_4px_18px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 shadow-md cursor-pointer whitespace-nowrap select-none"
          >
            <span>APPLY NOW</span>
            <ArrowRight size={10} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 stroke-[3]" />
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1.5 px-2 lg:px-3 py-1.5 rounded-full text-[9px] lg:text-[9.5px] font-black uppercase tracking-wider transition-all duration-300 bg-white/10 hover:bg-white/18 border border-white/18 hover:border-white/30 text-white active:scale-95 cursor-pointer whitespace-nowrap select-none"
          >
            <Menu size={12} className="shrink-0 stroke-[2.5]" />
            <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </div>

      {/* ── MOBILE / TABLET header — optimized for small viewports & zero overlap ── */}
      <div className={`lg:hidden flex items-center justify-between w-full px-3 min-[380px]:px-4 py-1 sm:px-5 transition-all duration-300 ${isScrolled ? 'h-[44px] sm:h-[48px]' : 'h-[52px] sm:h-[58px]'}`}>
        <div
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 cursor-pointer group/logo justify-start select-none min-w-0 max-w-[65%] sm:max-w-none"
          onClick={() => scrollToId('home')}
        >
          <div className={`rounded-full bg-white border-2 border-[#D4AF37] flex items-center justify-center p-0.5 shadow-md transition-all duration-300 group-hover/logo:scale-[1.05] active:scale-95 shrink-0 ${
            isScrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9.5 h-9.5 min-[380px]:w-[42px] min-[380px]:h-[42px] sm:w-[44px] sm:h-[44px]'
          }`}>
            <CkpcmcLogo className="w-full h-full" showText={false} />
          </div>
          <div className="flex flex-col text-left justify-center select-none min-w-0">
            <span className={`font-sans font-black tracking-[0.05em] text-white leading-none whitespace-nowrap ${isScrolled ? 'text-[11px] sm:text-[13px]' : 'text-[12.5px] min-[360px]:text-[13.5px] sm:text-[15px]'}`}>
              C. K. PITHAWALLA
            </span>
            <div className={`tracking-[0.05em] uppercase text-[#D4AF37] font-sans font-extrabold leading-[1.1] mt-0.5 whitespace-nowrap flex flex-col ${isScrolled ? 'text-[6.2px] sm:text-[7.5px]' : 'text-[7px] min-[360px]:text-[7.8px] sm:text-[8.5px]'}`}>
              <span>COMMERCE - MANAGEMENT</span>
              <span>COMPUTER APPLICATION</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => scrollToId('admissions')}
            className="px-3 min-[380px]:px-3.5 sm:px-4 py-1.5 rounded-full text-[9px] min-[380px]:text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-[#D4AF37] hover:bg-[#C19A20] text-[#1a1208] transition-all duration-300 active:scale-95 shadow-md cursor-pointer select-none min-h-[28px] sm:min-h-[32px] flex items-center justify-center shrink-0 whitespace-nowrap"
          >
            <span>APPLY</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="text-white px-2.5 min-[380px]:px-3 sm:px-3.5 py-1.5 bg-white/10 hover:bg-white/20 active:bg-white/10 rounded-full border border-white/20 transition-all duration-300 flex items-center gap-1.5 text-[9px] min-[380px]:text-[10px] sm:text-[11px] font-black uppercase tracking-wider cursor-pointer select-none min-h-[28px] sm:min-h-[32px] shrink-0 whitespace-nowrap"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu size={12} className="text-white shrink-0 stroke-[2.5] sm:w-[13px] sm:h-[13px]" />
            <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
          </motion.button>
        </div>
      </div>
    </>
  );
}

interface NavProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onItemClick?: (name: string, id: string) => void;
}

function BottomNavItem({
  item,
  isActive,
  onItemClick
}: {
  key?: string;
  item: { name: string; id: string };
  isActive: boolean;
  onItemClick: (name: string, id: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const subItems = menuSubmaps[item.name] || [];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        onClick={() => {
          if (subItems.length === 0) onItemClick(item.name, item.id);
          else setIsOpen(!isOpen);
        }}
        className={`relative px-4 sm:px-5 py-2.5 mx-0.5 text-[9.5px] sm:text-[11px] xl:text-[12px] uppercase tracking-wider font-extrabold transition-all duration-300 rounded-2xl overflow-visible hover:scale-105 active:scale-95 cursor-pointer select-none flex items-center gap-1 ${
          'text-white'
        }`}
      >
        {isActive && (
          <motion.div
            layoutId="bottomNavIndicator"
            className="absolute inset-0 bg-[#2D2424] rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.15)]"
            transition={{ type: "spring", stiffness: 700, damping: 35, mass: 0.6 }}
          />
        )}
        <span className="relative z-10 whitespace-nowrap">{item.name}</span>
        {subItems.length > 0 && (
          <ChevronDown size={11} className="relative z-10 text-white rotate-180 transition-transform duration-200" />
        )}
      </button>

      {subItems.length > 0 && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
              className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 min-w-[230px] max-h-[70vh] overflow-y-auto overscroll-contain touch-pan-y bg-[#2D2424]/95 backdrop-blur-xl border border-white/20 rounded-2xl p-2 shadow-[0_-15px_40px_rgba(0,0,0,0.45)] z-50 flex flex-col gap-0.5"
              data-lenis-prevent="true"
            >
              <div className="absolute w-full h-4 bg-transparent left-0 bottom-[-16px]" />
              <div className="px-2.5 py-1.5 border-b border-white/15 mb-1 flex items-center justify-between">
                <span className="text-[8.5px] font-mono tracking-[0.2em] text-[#D4AF37] uppercase font-bold">Explore {item.name}</span>
                <div className="w-1 h-1 rounded-full bg-[#D4AF37] animate-pulse" />
              </div>
              {subItems.map((subItem) => {
                const detail = dropdownDetails[subItem] || { desc: '', icon: Sparkles };
                const SubIcon = detail.icon;
                return (
                  <button
                    key={subItem}
                    onClick={() => {
                      const segment = keyToHashSegment[subItem];
                      if (segment) { navigate(`/${segment}`); setIsOpen(false); }
                    }}
                    className="group/item flex items-center justify-between px-2.5 py-1.5 rounded-xl text-left text-white/90 hover:bg-white/10 border border-transparent hover:border-white/15 transition-all duration-200 cursor-pointer w-full hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded bg-white/10 text-[#D4AF37] group-hover/item:bg-[#D4AF37] group-hover/item:text-[#2D2424] transition-colors shrink-0">
                        <SubIcon size={12} />
                      </div>
                      <span className="font-sans font-bold text-[11px] text-white group-hover/item:text-[#D4AF37] transition-colors whitespace-nowrap">
                        {subItem}
                      </span>
                    </div>
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}

function getActiveCategory(pathname: string): string {
  if (pathname.startsWith('/about/')) return 'About Us';
  if (pathname.startsWith('/courses/') || pathname.startsWith('/academics/')) return 'Courses';
  if (pathname.startsWith('/committees/')) return 'Committees';
  if (pathname.startsWith('/iqac/')) return 'IQAC';
  if (pathname.startsWith('/staff/')) return 'Staff';
  if (pathname.startsWith('/campus-life/')) return 'Campus Life';
  if (pathname.startsWith('/student-corner/')) return 'Student Corner';
  if (pathname.startsWith('/activities/')) return 'Activities';
  return 'About Us';
}

const getShortName = (name: string): string => {
  const shortNames: Record<string, string> = {
    'About Us': 'About', 'Vision and Mission': 'Vision', 'Mission': 'Mission',
    'Founder': 'Founder', 'About Trust': 'Trust', 'Trustee': 'Trustees',
    'Director\'s Message': 'Director', 'Principal\'s Message': 'Principal', 'HOD\'s Message': 'HOD',
    'B.Com. (Eng. Med.)': 'B.Com', 'BBA': 'BBA', 'BCA': 'BCA',
    'Anti-Ragging Committee': 'Anti-Ragging', 'ST-SC Cell': 'ST-SC',
    'Sexual Harassment Committee': 'POSH Cell',
    'About IQAC': 'About IQAC', 'IQAC Objectives': 'Objectives', 'Minutes & ATR': 'Minutes',
    'Teaching Staff': 'Teachers', 'Non-Teaching Staff': 'Staff',
    'Sports': 'Sports', 'Hostel': 'Hostel', 'Canteen': 'Canteen',
    'Classrooms': 'Classrooms', 'Library': 'Library',
    'Inter-College Achievements': 'Achievements', 'Competitions': 'Comps',
    'Gallery': 'Gallery', 'Media Appreciation': 'Media',
    'News': 'News', 'Events': 'Events', 'Achievements': 'Rankers',
    'News & Events': 'News',
    'Campus Life': 'Campus', 'Faculty': 'Faculty', 'Admissions': 'Admissions',
  };
  return shortNames[name] || name;
};

// ─── Apple-grade glassmorphic dock track ──────────
const GlassDock = ({ children, activeValue }: { children: React.ReactNode; activeValue?: string | boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const hasMovedRef = useRef(false);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const inertiaRafRef = useRef<number | null>(null);

  // Auto-scroll active button into view when activeValue changes
  useEffect(() => {
    if (!containerRef.current) return;
    const activeBtn = containerRef.current.querySelector('[data-active="true"]') as HTMLElement;
    if (activeBtn) {
      activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeValue]);

  const stopInertia = () => {
    if (inertiaRafRef.current) {
      cancelAnimationFrame(inertiaRafRef.current);
      inertiaRafRef.current = null;
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    stopInertia();

    isDownRef.current = true;
    hasMovedRef.current = false;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;

    if (containerRef.current) {
      scrollLeftRef.current = containerRef.current.scrollLeft;
      containerRef.current.style.scrollBehavior = 'auto';
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDownRef.current || !containerRef.current) return;
    const dx = e.clientX - startXRef.current;

    if (Math.abs(dx) > 4) {
      hasMovedRef.current = true;
    }

    if (hasMovedRef.current) {
      const now = performance.now();
      const dt = Math.max(1, now - lastTimeRef.current);
      const moveDx = e.clientX - lastXRef.current;
      velocityRef.current = moveDx / dt;

      lastXRef.current = e.clientX;
      lastTimeRef.current = now;

      containerRef.current.scrollLeft = scrollLeftRef.current - dx;
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    isDownRef.current = false;

    if (hasMovedRef.current && containerRef.current) {
      let currentVelocity = velocityRef.current * 16; // px per frame
      if (Math.abs(currentVelocity) > 0.5) {
        const step = () => {
          if (!containerRef.current || Math.abs(currentVelocity) < 0.2) {
            stopInertia();
            if (containerRef.current) containerRef.current.style.scrollBehavior = '';
            return;
          }
          containerRef.current.scrollLeft -= currentVelocity;
          currentVelocity *= 0.93; // smooth exponential decay
          inertiaRafRef.current = requestAnimationFrame(step);
        };
        inertiaRafRef.current = requestAnimationFrame(step);
      } else {
        if (containerRef.current) containerRef.current.style.scrollBehavior = '';
      }
    } else {
      if (containerRef.current) containerRef.current.style.scrollBehavior = '';
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    stopInertia();
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (delta !== 0) {
      containerRef.current.scrollLeft += delta;
    }
  };

  const handleClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hasMovedRef.current) {
      e.stopPropagation();
      e.preventDefault();
      hasMovedRef.current = false;
    }
  };

  return (
    <div className="relative group/dock max-w-full w-full min-w-0">
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        onClickCapture={handleClickCapture}
        className={[
          'relative flex items-center max-w-full w-full min-w-0 overflow-x-auto no-scrollbar',
          'bg-white/[0.08] dark:bg-slate-950/[0.35] backdrop-blur-md',
          'px-1.5 sm:px-3 md:px-2 lg:px-3.5 py-1 sm:py-2 md:py-1.5 lg:py-2 rounded-[18px] sm:rounded-2xl',
          'border border-white/35',
          'shadow-[0_10px_36px_rgba(0,0,0,0.18),inset_0_1px_1px_rgba(255,255,255,0.25)]',
          'touch-pan-x select-none cursor-grab active:cursor-grabbing',
        ].join(' ')}
      >
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-[linear-gradient(135deg,rgba(255,255,255,0.18)_0%,transparent_60%)] z-10" />
        <div className="relative flex items-center flex-nowrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 shrink-0 z-20">
          {children}
        </div>
      </div>
    </div>
  );
};

// ─── Single pill button ──────
function GlassPillBtn({
  label,
  value,
  icon: Icon,
  isActive,
  layoutPrefix,
  onClick,
}: {
  key?: string;
  label: string;
  value: string;
  icon?: React.ComponentType<{ className?: string }> | any;
  isActive: boolean;
  layoutPrefix: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      data-pill
      data-value={value}
      data-active={isActive ? "true" : "false"}
      onClick={onClick}
      className={[
        'relative flex items-center gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2',
        'px-2.5 sm:px-2.5 md:px-2 lg:px-3 py-1.5 sm:py-1.5 md:py-1 lg:py-1.5',
        'rounded-xl sm:rounded-2xl',
        'text-[8px] min-[380px]:text-[9.5px] sm:text-[10.5px] md:text-[9.5px] lg:text-[10.5px] xl:text-[11.5px] font-bold uppercase tracking-tight sm:tracking-normal md:tracking-normal lg:tracking-[0.1em]',
        'transition-all duration-200 cursor-pointer select-none shrink-0',
        'active:scale-95',
        isActive ? 'text-white font-extrabold' : 'text-white/70 hover:text-white hover:bg-white/10',
      ].join(' ')}
    >
      {isActive && (
        <motion.div
          layoutId={`${layoutPrefix}-active-capsule`}
          className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/40 bg-gradient-to-b from-white/30 via-white/10 to-white/5 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3),inset_0_1px_1px_rgba(255,255,255,0.6)] z-0 pointer-events-none"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <div className="absolute bottom-[2px] left-3 right-3 h-[2px] rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
        </motion.div>
      )}

      {Icon && (
        <span className={`relative z-10 transition-colors duration-200 ${isActive ? 'text-[#D4AF37]' : 'text-white/70'}`}>
          <Icon className="w-[17.5px] h-[17.5px] sm:w-[15px] sm:h-[15px] md:w-[13.5px] md:h-[13.5px] lg:w-4 lg:h-4" />
        </span>
      )}

      <span className="relative z-10 whitespace-nowrap hidden sm:inline drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
        {label}
      </span>
    </button>
  );
}

function BottomScrollNav({ activeSection, setActiveSection, onItemClick }: NavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const isSubPage = location.pathname !== '/';
  const activeCategory = getActiveCategory(location.pathname);
  const subItems = isSubPage ? (menuSubmaps[activeCategory] || []) : [];

  return (
    <div className="flex items-center justify-center w-full max-w-full lg:max-w-5xl xl:max-w-6xl mx-auto px-1 sm:px-2">
      <AnimatePresence mode="wait" initial={false}>
        {isSubPage ? (
          <motion.div
            key="subpage-dock"
            className="w-full max-w-full flex justify-center"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
            exit={{ opacity: 0, y: 10, scale: 0.97, transition: { duration: 0.16, ease: [0.7, 0, 0.84, 0] } }}
          >
            <GlassDock activeValue={location.pathname}>
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-1 px-3 sm:px-3 py-2 sm:py-2 rounded-[12px] sm:rounded-[14px] text-[8.5px] sm:text-[10px] font-black uppercase tracking-[0.12em] text-white hover:text-[#D4AF37] hover:bg-white/8 transition-all duration-200 cursor-pointer shrink-0 active:scale-95"
              >
                <HomeIcon className="w-[15.5px] h-[15.5px] sm:w-[13px] sm:h-[13px]" />
                <span className="hidden sm:inline">Home</span>
              </button>

              <span className="text-white/10 font-thin select-none shrink-0 text-sm px-0.5">|</span>

              <LayoutGroup id="subpage-nav">
                {subItems.map((subItem) => {
                  const segment = keyToHashSegment[subItem];
                  const isActive = segment ? location.pathname === `/${segment}` || location.pathname.endsWith(segment) : false;
                  const detail = dropdownDetails[subItem] || { icon: Sparkles };
                  const SubIcon = detail.icon;
                  return (
                    <GlassPillBtn
                      key={subItem}
                      label={getShortName(subItem)}
                      value={segment ? `/${segment}` : ''}
                      icon={SubIcon}
                      isActive={isActive}
                      layoutPrefix="subpage"
                      onClick={() => { if (segment) navigate(`/${segment}`); }}
                    />
                  );
                })}
              </LayoutGroup>
            </GlassDock>
          </motion.div>
        ) : (
          <motion.div
            key="landing-dock"
            className="w-full max-w-full flex justify-center"
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, ease: [0.25, 1, 0.5, 1] } }}
            exit={{ opacity: 0, y: 10, scale: 0.97, transition: { duration: 0.16, ease: [0.7, 0, 0.84, 0] } }}
          >
            <GlassDock activeValue={activeSection}>
              <LayoutGroup id="landing-nav">
                {landingNavItems.map((item) => {
                  const isActive = activeSection === item.name;
                  return (
                    <GlassPillBtn
                      key={item.name}
                      label={getShortName(item.name)}
                      value={item.name}
                      icon={item.icon}
                      isActive={isActive}
                      layoutPrefix="landing"
                      onClick={() => {
                        if (onItemClick) onItemClick(item.name, item.id);
                        else setActiveSection(item.name);
                      }}
                    />
                  );
                })}
              </LayoutGroup>
            </GlassDock>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface NavbarProps {
  isReady?: boolean;
  onOpenAdmissions?: () => void;
}

export default function Navbar({ isReady = true, onOpenAdmissions }: NavbarProps) {
  const scrollToId = useSmoothScrollTo();
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const location = useLocation();
  const isSubPage = location.pathname !== '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [visible, setVisible] = useState(() => {
    if (isSubPage) return false;
    return typeof window !== 'undefined' ? window.scrollY <= 450 : true;
  });
  const [menuOpen, setMenuOpen] = useState(false);


  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [timeStr, setTimeStr] = useState<string>('');
  const [activeSection, setActiveSection] = useState(bottomNavItems[0].name);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(typeof window !== 'undefined' && window.innerWidth < 1280);

  // ── Sync mobile/tablet viewport flag ──
  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth < 1280);
    };
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lenis = useLenis();

  useEffect(() => {
    if (menuOpen) lenis?.stop();
    else lenis?.start();
    return () => lenis?.start();
  }, [menuOpen, lenis]);

  // ── Smooth cross-page navigation scroll handling ──
  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const targetId = location.state.scrollTo;
      window.history.replaceState({}, document.title);

      const timer = setTimeout(() => {
        if (targetId === 'home') {
          if (lenis) {
            lenis.scrollTo(0, { immediate: true });
          } else {
            window.scrollTo(0, 0);
          }
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            if (lenis) {
              lenis.resize();
              lenis.scrollTo(el, {
                offset: -80,
                immediate: true
              });
            } else {
              const rect = el.getBoundingClientRect();
              const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
              window.scrollTo({ top: rect.top + scrollTop - 80 });
            }
          }
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state, lenis]);

  // ── sync active section from URL ──
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') return;
    if (path.startsWith('/about/')) setActiveSection('About Us');
    else if (path.startsWith('/courses/') || path.startsWith('/academics/')) setActiveSection('Courses');
    else if (path.startsWith('/committees/')) setActiveSection('Committees');
    else if (path.startsWith('/iqac/')) setActiveSection('IQAC');
    else if (path.startsWith('/staff/')) setActiveSection('Staff');
    else if (path.startsWith('/campus-life/')) setActiveSection('Campus Life');
    else if (path.startsWith('/student-corner/')) setActiveSection('Student Corner');
    else if (path.startsWith('/activities/')) setActiveSection('Activities');
  }, [location.pathname]);

  const isScrollingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const handleItemClick = (name: string, id: string) => {
    setActiveSection(name);
    isScrollingRef.current = true;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    scrollToId(id);
    timeoutRef.current = setTimeout(() => { isScrollingRef.current = false; }, 1400);
  };

  const [showBottomNav, setShowBottomNav] = useState(() => {
    if (isSubPage) return true;
    return typeof window !== 'undefined' ? window.scrollY > 450 : false;
  });

  // Subpages: header never shows, bottom nav always shows. No scroll math needed —
  // this alone guarantees the header can never appear on a subpage on any device.
  useEffect(() => {
    if (isSubPage) {
      setVisible(false);
      setShowBottomNav(true);
    }
  }, [isSubPage, location.pathname]);

  const lastScrollYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);
  const activeSectionRef = useRef(activeSection);
  useEffect(() => {
    activeSectionRef.current = activeSection;
  }, [activeSection]);

  // ── Unified scroll handler — ZONE-based (position only, no direction/delta math).
  // This is what makes the behavior identical and reliable across desktop, mobile,
  // and tablet: instead of guessing "did the user scroll up or down" from noisy
  // frame-to-frame deltas (which break under tablet momentum/rubber-band scrolling),
  // every frame simply asks "where is the hero, where is the footer, right now" and
  // derives visibility purely from that. There is nothing left to desync.
  useEffect(() => {
    let rafId: number | null = null;
    const HIDE_THRESHOLD = 150;          // announcement bar collapse point
    const HERO_FALLBACK_THRESHOLD = 450; // used only if #home isn't found in DOM
    const FOOTER_REVEAL_FRACTION = 0.5;  // footer counts as "reached" once its top crosses 50% of viewport
    const HERO_EL_ID = 'home';
    const FOOTER_EL_ID = 'footer';

    const getClampedScrollY = () => {
      const raw = window.scrollY;
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      return Math.max(0, Math.min(raw, maxScroll));
    };

    // Three mutually exclusive zones. Exactly one visibility outcome per zone,
    // so both navbars being visible at once is structurally impossible.
    const computeZone = (scrollYVal: number): 'hero' | 'footer' | 'body' => {
      const heroEl = document.getElementById(HERO_EL_ID);
      const inHero = heroEl
        ? heroEl.getBoundingClientRect().bottom > window.innerHeight * 0.3
        : scrollYVal <= HERO_FALLBACK_THRESHOLD;

      if (inHero) return 'hero';

      const footerEl = document.getElementById(FOOTER_EL_ID);
      if (footerEl) {
        const rect = footerEl.getBoundingClientRect();
        if (rect.top <= window.innerHeight * FOOTER_REVEAL_FRACTION) return 'footer';
      }

      return 'body';
    };

    const handleAllScroll = () => {
      const scrollYVal = getClampedScrollY();

      // Announcement bar collapse styling
      setIsScrolled(scrollYVal > HIDE_THRESHOLD);

      if (isSubPage) {
        // Subpages: header never shows, bottom nav always shows — regardless of
        // scroll position or direction.
        setVisible(false);
        setShowBottomNav(true);
      } else {
        const zone = computeZone(scrollYVal);
        if (zone === 'hero') {
          // Hero visible: header only.
          setVisible(true);
          setShowBottomNav(false);
        } else if (zone === 'footer') {
          // Footer reached: both navbars hidden.
          setVisible(false);
          setShowBottomNav(false);
        } else {
          // Everywhere else (including scrolling back up from the footer through
          // Admissions etc, on any device): bottom nav only.
          setVisible(false);
          setShowBottomNav(true);
        }
      }

      lastScrollYRef.current = scrollYVal;

      // ── Active-section highlight (unchanged — already purely position-based) ──
      if (!isScrollingRef.current) {
        const targetItems = isSubPage ? bottomNavItems : landingNavItems;
        const sections = targetItems.map(item => ({ name: item.name, el: document.getElementById(item.id) })).filter(s => s.el);
        if (sections.length > 0) {
          if (scrollYVal < 120) {
            setActiveSection(targetItems[0].name);
          } else {
            const isAtBottom = (window.innerHeight + scrollYVal) >= document.documentElement.scrollHeight - 60;
            if (isAtBottom) {
              setActiveSection(targetItems[targetItems.length - 1].name);
            } else {
              const targetY = window.innerHeight * 0.38;
              let foundActive = false;
              for (const section of sections) {
                if (section.el) {
                  const rect = section.el.getBoundingClientRect();
                  if (rect.top <= targetY && rect.bottom >= targetY) {
                    setActiveSection(section.name);
                    foundActive = true;
                    break;
                  }
                }
              }
              if (!foundActive) {
                let closestSection = activeSectionRef.current;
                let minDistance = Infinity;
                for (const section of sections) {
                  if (section.el) {
                    const rect = section.el.getBoundingClientRect();
                    const distance = Math.min(Math.abs(rect.top - targetY), Math.abs(rect.bottom - targetY));
                    if (distance < minDistance) {
                      minDistance = distance;
                      closestSection = section.name;
                    }
                  }
                }
                setActiveSection(closestSection);
              }
            }
          }
        }
      }
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        handleAllScroll();
        rafId = null;
      });
    };

    const handleResize = () => {
      handleScroll();
    };

    handleAllScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    // Lenis intercepts real scrolling (often via transform), so on some
    // touch/tablet + iframe-preview combinations the native window 'scroll'
    // event can fire late or not at all. Lenis' own scroll event is the
    // authoritative "the page actually moved" signal — listen to it too.
    lenis?.on('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      lenis?.off('scroll', handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [isSubPage, location.pathname, lenis]);

  // ── clock ──
  useEffect(() => {
    const updateTime = () => setTimeStr(new Date().toLocaleTimeString('en-US', { hour12: false }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => { clearInterval(interval); if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, []);

  return (
    <>
      {/* ── Mega-menu full-page backdrop blur (Code 1 behavior, closes on hover-out) ── */}
      <AnimatePresence>
        {activeMegaMenu && (
          <motion.div
            key="mega-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 bg-black/45 backdrop-blur-md z-40 pointer-events-auto"
            onMouseEnter={() => setActiveMegaMenu(null)}
          />
        )}
      </AnimatePresence>

      {/* ── TOP NAV — Floating iPhone notch style ── */}
      {!isSubPage && (
        <motion.nav
          key="top-nav"
          initial={{ y: -130 }}
          animate={{ y: (visible || menuOpen) ? 0 : -220 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 z-50 w-[98%] max-w-[1720px] pointer-events-auto"
        >
          <div className="w-full rounded-[26px] sm:rounded-[32px] bg-[#2b2323]/90 backdrop-blur-xl border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.4)] flex flex-col relative overflow-visible">
            {/* Announcement bar — collapses on scroll */}
            <div className={`bg-gradient-to-r from-[#1D1616] via-[#2F2121] to-[#1D1616] border-t-2 border-[#D4AF37] border-b border-[#D4AF37]/35 text-white/90 hidden xl:block relative z-10 w-full overflow-hidden transition-all duration-300 rounded-t-[26px] sm:rounded-t-[32px] ${
              isScrolled ? 'h-0 py-0 opacity-0 border-t-0 border-b-0' : 'h-[30px] py-1 px-6 sm:px-8 lg:px-12 opacity-100'
            }`}>
              <div className="w-full flex items-center justify-between font-sans text-[10px] xl:text-[11px] font-bold text-white/95 leading-normal select-none relative">
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center gap-1.5 font-black text-white tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    <span>NAVYUG VIDYABHAVAN TRUST</span>
                  </div>
                  <span className="text-white/20">|</span>
                  <span className="text-white/80 font-medium">Affiliated to Veer Narmad South Gujarat University (VNSGU)</span>
                </div>
                <div className="flex items-center gap-x-4">
                  <button
                    onClick={onOpenAdmissions}
                    className="font-extrabold text-[10px] uppercase text-[#D4AF37] hover:text-white border border-[#D4AF37]/50 hover:border-[#D4AF37] bg-[#D4AF37]/10 hover:bg-[#D4AF37]/30 px-2.5 py-0.5 rounded-md select-none tracking-wider cursor-pointer transition-all flex items-center gap-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                    <span>Admissions Open 2026-27</span>
                  </button>
                  <span className="text-white/20">|</span>
                  <a href="tel:+912612728282" className="flex items-center gap-1 hover:text-rose-200 transition-colors text-white/90">
                    <Phone size={11} className="text-white" />
                    <span>Enquiries: +91 261 2728282</span>
                  </a>
                  <span className="text-white/20">|</span>
                  <a href="mailto:info@ckpcmc.org" className="flex items-center gap-1 hover:text-rose-200 transition-colors text-white/90">
                    <Mail size={11} className="text-white" />
                    <span>info@ckpcmc.org</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Main nav row */}
            <div className="bg-transparent w-full relative z-30 overflow-visible">
              <NavContent
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                isScrolled={isScrolled}
                activeMegaMenu={activeMegaMenu}
                setActiveMegaMenu={setActiveMegaMenu}
              />
            </div>
          </div>
        </motion.nav>
      )}

      {/* ── BOTTOM FLOATING NAV — Appears strictly when reaching footer section ── */}
      <AnimatePresence>
        {showBottomNav && (
          <motion.nav
            key="bottom-nav"
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
            className="fixed bottom-3 sm:bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[98vw] md:w-[96vw] max-w-6xl flex justify-center items-center pointer-events-auto select-none px-1 sm:px-2"
          >
            <div className="max-w-full">
              <BottomScrollNav
                activeSection={activeSection}
                setActiveSection={setActiveSection}
                onItemClick={handleItemClick}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ── OVERLAY MENU — unchanged ── */}
      <AnimatePresence>
        {menuOpen && (
          <OverlayMenu
            setMenuOpen={setMenuOpen}
            navigate={navigate}
            scrollToId={scrollToId}
            timeStr={timeStr}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   OVERLAY MENU — unchanged from Code 2
═══════════════════════════════════════════════════════════════ */
const OVERLAY_TREE: { key: string; label: string }[] = [
  { key: 'About Us', label: 'About College' },
  { key: 'Courses', label: 'Courses' },
  { key: 'Student Corner', label: 'Student Corner' },
  { key: 'Activities', label: 'Activities' },
];

const overlaySectionMap: Record<string, string> = {
  'About Us': 'about',
  'Courses': 'courses',
  'Student Corner': 'campus-life',
  'Activities': 'university-gazette'
};

const POPULAR_TERMS = ['Admissions', 'B.Com.', 'BBA', 'BCA', 'Hostel', 'Gallery'];
const PROSPECTUS_IMG = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80';

function OverlayMenu({
  setMenuOpen,
  navigate,
  scrollToId,
  timeStr,
}: {
  setMenuOpen: (v: boolean) => void;
  navigate: (path: string) => void;
  scrollToId: (id: string) => void;
  timeStr: string;
}) {
  const [stack, setStack] = useState<string[]>([]);
  const [query, setQuery] = useState('');
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [note, setNote] = useState('');
  const searchRef = useRef<HTMLInputElement>(null);
  const autoTimer = useRef<ReturnType<typeof setTimeout>>();
  const current = stack[stack.length - 1] ?? null;

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => searchRef.current?.focus(), 420);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [setMenuOpen]);

  const runAuto = (val: string) => {
    setQuery(val);
    if (autoTimer.current) clearTimeout(autoTimer.current);
    const q = val.trim();
    if (q.length < 3) { setNote(q ? 'Keep typing…' : ''); return; }
    setNote('Searching…');
    autoTimer.current = setTimeout(() => {
      setMenuOpen(false);
      navigate(`/search?query=${encodeURIComponent(q)}`);
    }, 550);
  };
  const submit = () => {
    const q = query.trim();
    if (!q) return;
    if (autoTimer.current) clearTimeout(autoTimer.current);
    setMenuOpen(false);
    navigate(`/search?query=${encodeURIComponent(q)}`);
  };
  const goSub = (subItem: string) => {
    const segment = keyToHashSegment[subItem];
    setMenuOpen(false);
    if (segment) navigate(`/${segment}`);
  };

  const panelLeftVariants = {
    hidden: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1 },
    visible: { x: 0, y: 0, opacity: 1, transition: { ease: isMobile ? 'easeInOut' : [0.25, 1, 0.5, 1], duration: isMobile ? 0.5 : 0.65, delay: isMobile ? 0.01 : 0.05 } },
    exit: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1, transition: { ease: [0.7, 0, 0.84, 0], duration: isMobile ? 0.4 : 0.5, delay: 0.06 } }
  };
  const panelCtaVariants = {
    hidden: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1 },
    visible: { x: 0, y: 0, opacity: 1, transition: { ease: isMobile ? 'easeInOut' : [0.25, 1, 0.5, 1], duration: isMobile ? 0.5 : 0.65, delay: isMobile ? 0.04 : 0.12 } },
    exit: { x: isMobile ? 0 : '-102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1, transition: { ease: [0.7, 0, 0.84, 0], duration: isMobile ? 0.4 : 0.5, delay: 0 } }
  };
  const panelRightVariants = {
    hidden: { x: isMobile ? 0 : '102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1 },
    visible: { x: 0, y: 0, opacity: 1, transition: { ease: isMobile ? 'easeInOut' : [0.25, 1, 0.5, 1], duration: isMobile ? 0.5 : 0.65, delay: isMobile ? 0.02 : 0.02 } },
    exit: { x: isMobile ? 0 : '102%', y: isMobile ? '102%' : 0, opacity: isMobile ? 0 : 1, transition: { ease: [0.7, 0, 0.84, 0], duration: isMobile ? 0.4 : 0.5, delay: 0.12 } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.045, delayChildren: isMobile ? 0.12 : 0.22 } }
  };
  const itemVariants = {
    hidden: { y: 22, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', damping: 20, stiffness: 170 } }
  };
  const sublistVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.035, delayChildren: 0.06 } }
  };
  const subitemVariants = {
    hidden: { x: 18, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: 'spring', damping: 18, stiffness: 190 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, ease: 'easeOut' } }}
      exit={{ opacity: 0, transition: { duration: 0.25, ease: 'easeIn', delay: 0.35 } }}
      className="fixed inset-0 z-[60] flex flex-col md:flex-row bg-[#120F0F] overflow-y-auto md:overflow-hidden pointer-events-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Menu and search"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0" />

      <motion.button
        initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        exit={{ opacity: 0, scale: 0.8, rotate: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        onClick={() => setMenuOpen(false)}
        aria-label="Close menu"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-[80] flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2D2424] text-white hover:bg-[#D4AF37] hover:text-[#2D2424] border border-[#D4AF37]/50 hover:border-transparent transition-all duration-300 active:scale-95 cursor-pointer group/close shadow-[0_4px_25px_rgba(0,0,0,0.3)] backdrop-blur-md"
      >
        <span className="font-sans text-[10px] font-black uppercase tracking-[0.15em] transition-colors duration-300 text-white group-hover/close:text-[#2D2424]">Close</span>
        <X size={15} className="stroke-[3] transition-all duration-300 group-hover/close:rotate-90 text-[#D4AF37] group-hover/close:text-[#2D2424]" />
      </motion.button>

      <div className="order-2 md:order-1 hidden md:flex flex-col w-full md:w-2/5 relative z-10 h-full overflow-y-auto no-scrollbar">
        <motion.section
          variants={panelLeftVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative bg-white text-[#2D2424] overflow-hidden md:h-1/2 md:min-h-0 md:border-b-[10px] border-[#2D2424] p-4 md:p-12 flex flex-col justify-center shrink-0"
        >
          <div aria-hidden className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#D4AF37]/25 pointer-events-none" />
          <div className="relative z-10 max-w-xl">
            <label htmlFor="ckp-search" className="block font-serif font-bold text-xl md:text-3xl mb-2 md:mb-4">Search</label>
            <div className="flex items-center border-b-[3px] border-[#2D2424]">
              <input
                id="ckp-search"
                ref={searchRef}
                type="text"
                value={query}
                onChange={(e) => runAuto(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
                placeholder="Please enter a search term"
                autoComplete="off"
                className="flex-1 bg-transparent outline-none py-1.5 md:py-3 text-base md:text-xl placeholder:text-[#2D2424]/40"
              />
              <button onClick={submit} aria-label="Search" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#2D2424] hover:text-[#C19A20] transition-colors cursor-pointer shrink-0">
                <Search size={20} className="stroke-[2.5]" />
              </button>
            </div>
            <div className="mt-2 font-mono text-[10px] md:text-[11px] text-[#2D2424]/50 min-h-[16px]">{note}</div>
            <div className="mt-3 md:mt-6">
              <h4 className="font-mono text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-[#2D2424]/50 font-bold mb-2 md:mb-3">Popular search terms</h4>
              <div className="flex flex-wrap gap-x-3 md:gap-x-5 gap-y-1.5 md:gap-y-2">
                {POPULAR_TERMS.map((term) => (
                  <button
                    key={term}
                    onClick={() => { setQuery(term); runAuto(term); searchRef.current?.focus(); }}
                    className="relative font-sans font-semibold text-xs md:text-[15px] text-[#2D2424] cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:w-full after:h-0.5 after:bg-[#C19A20] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={panelCtaVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative hidden md:flex bg-[#2D2424] text-white overflow-hidden md:h-1/2 md:min-h-0 p-4 sm:p-6 md:p-8 flex-col items-center justify-center shrink-0 text-center select-none"
        >
          {/* Background Image of students & campus with rich overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop" 
              alt="Campus & Admissions" 
              className="w-full h-full object-cover opacity-50 transition-all duration-700 hover:scale-105"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1515]/95 via-[#1B1515]/80 to-[#1B1515]/65" />
          </div>

          <div aria-hidden className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-[#D4AF37]/10 pointer-events-none" />
          
          <div className="relative z-10 flex-1 min-w-0 max-w-md flex flex-col items-center justify-center text-center gap-2 md:gap-3.5 my-auto">
            <div className="space-y-1 lg:space-y-1.5 text-center">
              <span className="font-mono text-[8px] md:text-[9.5px] tracking-[0.2em] text-[#D4AF37] uppercase font-bold block text-center">2026 Admissions open</span>
              <h3 className="font-serif text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-tight text-center">Embark on Your Academic Journey</h3>
              <p className="text-[10px] md:text-xs text-white/70 leading-relaxed font-medium text-center line-clamp-2 md:line-clamp-none max-w-sm">Join Surat's premier institution for computer applications, business administration, and commerce studies. Apply online today.</p>
            </div>
            <button
              onClick={() => { setMenuOpen(false); scrollToId('admissions'); }}
              className="bg-[#D4AF37] hover:bg-[#C19A20] text-[#2D2424] font-sans font-black text-[10px] md:text-[11px] lg:text-[12px] tracking-wider uppercase py-2 px-5 md:py-2.5 md:px-6 transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_10px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] hover:scale-[1.02] mx-auto rounded-md"
            >
              Apply Now <ArrowRight size={13} className="stroke-[3] shrink-0" />
            </button>
          </div>
        </motion.section>
      </div>

      <motion.section
        variants={panelRightVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="order-1 md:order-2 relative flex-1 bg-white text-[#2D2424] overflow-hidden md:border-l-[10px] border-[#2D2424] min-h-[50vh] md:min-h-0"
      >
        <div aria-hidden className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-[#D4AF37]/12 pointer-events-none" />
        <div className="relative z-10 h-full w-full overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {current === null ? (
              <motion.nav
                key="root"
                variants={listVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative h-full w-full max-h-full min-h-[400px] md:absolute md:inset-0 overflow-y-auto overscroll-contain touch-pan-y no-scrollbar px-5 sm:px-8 md:px-12 pt-20 md:pt-24 pb-14"
                data-lenis-prevent="true"
              >
                <motion.div 
                  variants={itemVariants} 
                  className="flex items-center justify-between border-b-2 border-[#2D2424] pb-3 mb-4 min-h-[36px]"
                >
                  {showMobileSearch ? (
                    <div className="flex items-center w-full gap-2 text-[#2D2424]">
                      <Search size={14} className="stroke-[2.5] text-[#2D2424]/60" />
                      <input
                        type="text"
                        value={query}
                        onChange={(e) => runAuto(e.target.value)}
                        onKeyDown={(e) => { if (e.key === 'Enter') submit(); }}
                        placeholder="Search website..."
                        className="flex-1 bg-transparent text-sm font-sans font-semibold outline-none text-[#2D2424] placeholder:text-[#2D2424]/40 py-0.5"
                        autoFocus
                      />
                      {query && (
                        <button onClick={() => setQuery('')} className="p-1 text-[#2D2424]/40 hover:text-[#2D2424] cursor-pointer">
                          <X size={14} className="stroke-[2.5]" />
                        </button>
                      )}
                      <button 
                        onClick={() => { setShowMobileSearch(false); setQuery(''); }} 
                        className="text-[#2D2424]/60 hover:text-[#2D2424] p-1 cursor-pointer"
                        aria-label="Close search"
                      >
                        <X size={15} className="stroke-[2.5]" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[#2D2424]/45 font-bold">Main menu</span>
                      <button 
                        onClick={() => setShowMobileSearch(true)} 
                        className="md:hidden text-[#2D2424]/60 hover:text-[#C19A20] transition-colors p-1 -mr-1 cursor-pointer"
                        aria-label="Search website"
                      >
                        <Search size={15} className="stroke-[2.5]" />
                      </button>
                    </>
                  )}
                </motion.div>
                {OVERLAY_TREE.map((item, i) => {
                  return (
                    <motion.button
                      variants={itemVariants}
                      key={item.key}
                      onClick={() => setStack([item.key])}
                      className="group/row w-full flex items-center justify-between gap-4 py-4 border-b border-[#2D2424]/12 text-left cursor-pointer"
                    >
                      <span className="flex items-center gap-4">
                        <span className="font-mono text-[10px] font-black text-[#C19A20] bg-[#D4AF37]/12 rounded px-2 py-0.5">0{i + 1}</span>
                        <span className="relative font-serif font-semibold text-[22px] md:text-[26px] uppercase tracking-tight after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#C19A20] after:origin-left after:scale-x-0 group-hover/row:after:scale-x-100 after:transition-transform after:duration-300 group-hover/row:text-[#C19A20] transition-colors">
                          {item.label}
                        </span>
                      </span>
                      <span className="w-9 h-9 shrink-0 rounded-full bg-[#2D2424] text-white flex items-center justify-center transition-all duration-300 group-hover/row:bg-[#D4AF37] group-hover/row:text-[#2D2424] group-hover/row:translate-x-1">
                        <ArrowRight size={16} className="stroke-[2.5]" />
                      </span>
                    </motion.button>
                  );
                })}
                <motion.button
                  variants={itemVariants}
                  onClick={() => { setMenuOpen(false); scrollToId('admissions'); }}
                  className="group/row w-full flex items-center justify-between gap-4 py-4 border-b border-[#2D2424]/12 text-left cursor-pointer"
                >
                  <span className="font-serif font-semibold text-[22px] md:text-[26px] uppercase tracking-tight group-hover/row:text-[#C19A20] transition-colors">Contact &amp; Apply</span>
                </motion.button>
              </motion.nav>
            ) : (
              <motion.div
                key="sub"
                variants={sublistVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="relative h-full w-full max-h-full min-h-[400px] md:absolute md:inset-0 overflow-y-auto overscroll-contain touch-pan-y px-5 sm:px-8 md:px-10 lg:px-14 pt-20 md:pt-24 pb-16 flex flex-col pointer-events-auto"
                data-lenis-prevent="true"
              >
                <motion.button
                  variants={subitemVariants}
                  onClick={() => setStack((s) => s.slice(0, -1))}
                  className="group/back flex items-center gap-3 mb-5 cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-[#2D2424] text-white flex items-center justify-center transition-all duration-300 group-hover/back:bg-[#D4AF37] group-hover/back:text-[#2D2424] group-hover/back:-translate-x-1">
                    <ArrowRight size={16} className="stroke-[2.5] rotate-180" />
                  </span>
                  <span className="font-sans font-bold text-[15px]">Back</span>
                </motion.button>
                <motion.div variants={subitemVariants} className="font-serif font-bold text-[26px] md:text-[30px] uppercase tracking-tight border-b-2 border-[#2D2424] pb-3 mb-3">
                  {current}
                </motion.div>
                {(menuSubmaps[current] || []).map((subItem) => {
                  const detail = dropdownDetails[subItem] || { desc: '', icon: Sparkles };
                  const SubIcon = detail.icon;
                  return (
                    <motion.button
                      variants={subitemVariants}
                      key={subItem}
                      onClick={() => goSub(subItem)}
                      className="group/sub w-full flex items-center gap-4 py-3.5 border-b border-[#2D2424]/10 text-left cursor-pointer"
                    >
                      <span className="p-2 rounded-lg bg-[#2D2424]/5 text-[#2D2424]/50 group-hover/sub:bg-[#D4AF37]/20 group-hover/sub:text-[#C19A20] transition-colors shrink-0">
                        <SubIcon size={16} />
                      </span>
                      <span className="flex flex-col">
                        <span className="font-sans font-bold text-[16px] group-hover/sub:text-[#C19A20] transition-colors leading-tight">{subItem}</span>
                        {detail.desc && <span className="font-sans text-[11px] text-[#2D2424]/50 mt-0.5 leading-snug">{detail.desc}</span>}
                      </span>
                      <ArrowRight size={13} className="ml-auto text-[#C19A20] opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all shrink-0" />
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </motion.div>
  );
}
