import React, { useRef, useState, useEffect } from 'react';
import { useLenis } from "../context/LenisContext";
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Palette, Trophy, Lightbulb, Users, Heart, Plus, ArrowUpRight, Footprints
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Pillar {
  id: string; num: string; category: string; title: string; headline: string; description: string;
  primaryImage: string; sideImage: string; icon: React.ReactNode; accent: string; locationTag: string;
  stats: { label: string; value: string }[];
}

const PILLARS: Pillar[] = [
  {
    id: "creative-arts", num: "01", category: "CREATIVE ARTS GUILD",
    title: "Self-Expression & Aesthetic Confidence",
    headline: "Where structural engineering marries cultural elegance.",
    description: "At C.K. Pithawalla, engineering meets organic artistic style. Our student-led creative guilds provide acoustic music suites, design exhibition halls, and dramatic street theater collectives.",
    primaryImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800",
    sideImage: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600",
    icon: <Palette className="w-5 h-5" />, accent: "#2D2424",
    locationTag: "Zone 01: Creative Quad & Open-Air Theatre",
    stats: [{ label: "Active Guilds", value: "8 Live Teams" }, { label: "Creative Portfolio", value: "150+ Registered" }]
  },
  {
    id: "house-culture", num: "02", category: "STUDENT HOUSES",
    title: "Interdisciplinary Fellowship",
    headline: "Cohesive multi-departmental support systems.",
    description: "Our campus operates as four vibrant student houses: Aryabhata, Ramanujan, Newton, and Curie — breaking departmental barriers during debate leagues, hackathons, and community work.",
    primaryImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800",
    sideImage: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600",
    icon: <Users className="w-5 h-5" />, accent: "#2D2424",
    locationTag: "Zone 02: Central Student House Commons",
    stats: [{ label: "Active Participation", value: "95% Student Pool" }, { label: "Scholarship Reward", value: "₹50,000 Award" }]
  },
  {
    id: "athletics", num: "03", category: "SPORTS VARSITY",
    title: "Physical Mastery & Mindfulness",
    headline: "Nurturing daily resilience, coordination, and focus.",
    description: "Across our green pitches and floodlit multi-courts, students compete inside the fiery 'Khelutsav' leagues, alongside peaceful morning yogic sessions and endurance training.",
    primaryImage: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800",
    sideImage: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600",
    icon: <Trophy className="w-5 h-5" />, accent: "#2D2424",
    locationTag: "Zone 03: Floodlit Turf Pitch & Sports Arena",
    stats: [{ label: "Varsity Turf Complex", value: "3.5 Green Acres" }, { label: "Tournament Count", value: "12 Seasonal Cups" }]
  },
  {
    id: "incubation", num: "04", category: "PRAYAS SANDBOX",
    title: "Real Innovation & Incubation Lab",
    headline: "Sowing seed grants for student prototypes.",
    description: "Operated with the Gujarat state SSIP Cell, our PRAYAS sandbox labs help students build physical prototypes, fighting robots, and automated IoT models into registered startups.",
    primaryImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
    sideImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600",
    icon: <Lightbulb className="w-5 h-5" />, accent: "#2D2424",
    locationTag: "Zone 04: SSIP Innovation Lab & Prototyping Bay",
    stats: [{ label: "Granted Capital", value: "₹15 Lakhs Seeded" }, { label: "Startup Launches", value: "8 Registered Firms" }]
  },
];

const POLAROIDS = [
  { url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600", caption: "Sunset chats at central lawns", rotation: "hover:rotate-1 rotate-[-2deg]", tag: "Student Life" },
  { url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600", caption: "Shaam-E-Shaandar concert floor", rotation: "hover:rotate-[-1deg] rotate-[3deg]", tag: "Music Club" },
  { url: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=600", caption: "Creative arts guild oil studio", rotation: "hover:rotate-1 rotate-[-1deg]", tag: "Fine Arts" },
  { url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600", caption: "Night coding team sprint", rotation: "hover:rotate-[-2deg] rotate-[2deg]", tag: "Prayas Hub" },
  { url: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600", caption: "Warmups before Khelutsav cricket", rotation: "hover:rotate-2 rotate-[-3deg]", tag: "Varsity Sports" },
  { url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600", caption: "Senior-junior common room talks", rotation: "hover:rotate-[-1deg] rotate-[2deg]", tag: "Community" },
];

const LANE1_ITEMS = [
  ...POLAROIDS.slice(0, 3).map((p, idx) => ({ ...p, originalId: `0${idx + 1}` })),
  ...POLAROIDS.slice(0, 3).map((p, idx) => ({ ...p, originalId: `0${idx + 1}` })),
  ...POLAROIDS.slice(0, 3).map((p, idx) => ({ ...p, originalId: `0${idx + 1}` })),
];

const LANE2_ITEMS = [
  ...POLAROIDS.slice(3, 6).map((p, idx) => ({ ...p, originalId: `0${idx + 4}` })),
  ...POLAROIDS.slice(3, 6).map((p, idx) => ({ ...p, originalId: `0${idx + 4}` })),
  ...POLAROIDS.slice(3, 6).map((p, idx) => ({ ...p, originalId: `0${idx + 4}` })),
];

function PillarCard({
  pillar, index, registerRef,
}: { key?: string; pillar: Pillar; index: number; registerRef: (el: HTMLDivElement | null) => void }) {
  const localRef = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;
  const [selectedSide, setSelectedSide] = useState(false);

  useEffect(() => { registerRef(localRef.current); }, [registerRef]);

  return (
    <motion.div
      id={`pillar-${pillar.id}`}
      ref={localRef}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative grid grid-cols-1 md:grid-cols-12 gap-10 items-center"
    >
      <div className={`pillar-number-parallax absolute -z-10 font-black text-[7rem] sm:text-[12rem] lg:text-[15rem] text-slate-200/30 leading-none select-none pointer-events-none ${isEven ? '-right-2 sm:-right-6' : '-left-2 sm:-left-6'}`}>
        {pillar.num}
      </div>

      <div className={`md:col-span-6 space-y-5 ${!isEven ? 'md:order-2' : ''}`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl text-white flex items-center justify-center shadow-md" style={{ background: pillar.accent }}>
            {pillar.icon}
          </div>
          <span className="font-mono text-xs font-bold tracking-widest uppercase" style={{ color: pillar.accent }}>
            MAP STOP {pillar.num} // {pillar.category}
          </span>
        </div>

        <h3 className="font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.1] text-[#2D2424]">
          {pillar.title}
        </h3>
        <h4 className="text-base sm:text-lg font-semibold text-[#2D2424]">{pillar.headline}</h4>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{pillar.description}</p>
      </div>

      <div className={`md:col-span-6 ${!isEven ? 'md:order-1' : ''}`}>
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 group aspect-[4/3] bg-slate-50 max-w-[380px] md:max-w-none mx-auto">
          <img
            src={pillar.primaryImage} alt={pillar.title} referrerPolicy="no-referrer"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 flex justify-between items-end gap-3">
            <div className="bg-white/95 px-4 py-3 rounded-2xl border border-white/20 shadow-xl flex gap-5">
              {pillar.stats.map((s, i) => (
                <div key={i} className={i > 0 ? "border-l border-slate-200 pl-5" : ""}>
                  <span className="block font-mono text-[8px] text-slate-400 uppercase tracking-widest font-black mb-1">{s.label}</span>
                  <span className="block text-xs sm:text-sm font-black text-[#2D2424]">{s.value}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setSelectedSide(true)}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white transition-all shadow-xl flex items-center justify-center border border-white/25 hover:scale-110 active:scale-95 shrink-0"
              style={{ color: pillar.accent }}
              title="Reveal secondary perspective snapshot"
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedSide && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedSide(false)}
          >
            <motion.div
              initial={{ scale: 0.94, y: 15 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.94, y: 15 }}
              transition={{ duration: 0.18 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] bg-slate-200">
                <img src={pillar.sideImage} alt={pillar.title} className="w-full h-full object-cover" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                <button onClick={() => setSelectedSide(false)} className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full">
                  <Plus size={16} className="rotate-45" />
                </button>
              </div>
              <div className="p-6 bg-[#FAF9F5] border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[9px] font-bold tracking-wider block mb-1" style={{ color: pillar.accent }}>✦ ACCREDITED ARCHIVE</span>
                  <h4 className="font-extrabold text-base text-[#2D2424] uppercase tracking-tight">Experiential Highlights View</h4>
                </div>
                <button onClick={() => setSelectedSide(false)} className="px-4 py-2 text-white text-[11px] font-bold tracking-wider uppercase rounded-xl shrink-0" style={{ background: pillar.accent }}>
                  Close Photo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

type TrailPt = { x: number; y: number };
type GapMarker = { x: number; y: number; index: number };
type MobileSegment = { d: string; gStart: number; gEnd: number };

export default function CampusLife() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillarsWrapRef = useRef<HTMLDivElement>(null);

  // Desktop / tablet trail (>=768px)
  const svgRef = useRef<SVGSVGElement>(null);
  const guidePathRef = useRef<SVGPathElement>(null);
  const drawnPathRef = useRef<SVGPathElement>(null);

  // Mobile trail (<768px)
  const mobileSvgRef = useRef<SVGSVGElement>(null);
  const mobileGuidePathRef = useRef<SVGPathElement>(null);
  const mobileHaloPathRef = useRef<SVGPathElement>(null);
  const mobileSegmentRefs = useRef<(SVGPathElement | null)[]>([]);

  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const underlineRef = useRef<HTMLSpanElement>(null);
  const archiveHeadingRef = useRef<HTMLHeadingElement>(null);

  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);
  const lenis = useLenis();

  useEffect(() => {
    if (selectedGalleryImg) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = '';
    };
  }, [selectedGalleryImg, lenis]);

  const [containerWidth, setContainerWidth] = useState(1200);
  const [activeTrailPoint, setActiveTrailPoint] = useState(1);
  const [pathPts, setPathPts] = useState<TrailPt[]>([]);
  const [trailEnds, setTrailEnds] = useState({ startX: 0, startY: 0, endX: 0, endY: 0 });

  const [mobileMarkers, setMobileMarkers] = useState<GapMarker[]>([]);
  const [mobileEnds, setMobileEnds] = useState({ startX: 0, startY: 0, endX: 0, endY: 0 });
  const [mobileSegments, setMobileSegments] = useState<MobileSegment[]>([]);

  const registerStepRef = (i: number) => (el: HTMLDivElement | null) => { stepRefs.current[i] = el; };
  const registerMobileSegmentRef = (i: number) => (el: SVGPathElement | null) => { mobileSegmentRefs.current[i] = el; };

  // ---------------- GEOMETRY & SCROLL PASS ----------------
  useEffect(() => {
    const build = () => {
      const section = sectionRef.current;
      const container = pillarsWrapRef.current;
      const svgEl = svgRef.current;
      const guideEl = guidePathRef.current;
      const drawnEl = drawnPathRef.current;
      const underlineEl = underlineRef.current;
      const archiveEl = archiveHeadingRef.current;
      const mobileSvgEl = mobileSvgRef.current;
      const mobileGuideEl = mobileGuidePathRef.current;
      const mobileHaloEl = mobileHaloPathRef.current;
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!section || !container || !svgEl || !guideEl || !drawnEl || !underlineEl || !archiveEl ||
          !mobileSvgEl || !mobileGuideEl || !mobileHaloEl || steps.length === 0) return;

      const scrollY = window.scrollY;
      const sectionRect = section.getBoundingClientRect();
      const sectionAbsTop = sectionRect.top + scrollY;
      const W = container.getBoundingClientRect().width;
      setContainerWidth(W);

      const isStackedLayout = W < 768;

      const cardTops = steps.map(s => (s.getBoundingClientRect().top + scrollY) - sectionAbsTop);
      const cardBottoms = steps.map(s => (s.getBoundingClientRect().bottom + scrollY) - sectionAbsTop);
      const startY = (underlineEl.getBoundingClientRect().bottom + scrollY) - sectionAbsTop + 26;
      const endY = (archiveEl.getBoundingClientRect().top + scrollY) - sectionAbsTop - 24;

      // ---------------- DESKTOP / TABLET TRAIL (>=768px) ----------------
      if (isStackedLayout) {
        svgEl.style.display = 'none';
        setPathPts([]);
        gsap.killTweensOf(drawnEl);
        ScrollTrigger.getById('campusJourneyTrigger')?.kill();
      } else {
        svgEl.style.display = 'block';

        const pts = steps.map((step, i) => {
          const r = step.getBoundingClientRect();
          const y = (r.top + scrollY) - sectionAbsTop + r.height / 2;
          const x = i % 2 === 0 ? W * 0.68 : W * 0.32;
          return { x, y };
        });

        const H = Math.max(endY, pts[pts.length - 1].y + 60);
        const cx = W / 2;

        let d = `M ${cx} ${startY}`;
        pts.forEach((pt, i) => {
          if (i === 0) {
            const pull = (pt.y - startY) * 0.4;
            d += ` C ${cx} ${startY + pull}, ${pt.x} ${pt.y - pull}, ${pt.x} ${pt.y}`;
          } else {
            const prev = pts[i - 1];
            const pull = (pt.y - prev.y) * 0.4;
            d += ` C ${prev.x} ${prev.y + pull}, ${pt.x} ${pt.y - pull}, ${pt.x} ${pt.y}`;
          }
        });
        const last = pts[pts.length - 1];
        const tailPull = (H - last.y) * 0.5;
        d += ` C ${last.x} ${last.y + tailPull}, ${cx} ${H - tailPull * 0.4}, ${cx} ${H}`;

        svgEl.setAttribute('viewBox', `0 0 ${W} ${H}`);
        svgEl.style.height = `${H}px`;
        guideEl.setAttribute('d', d);
        drawnEl.setAttribute('d', d);

        setPathPts(prev => {
          if (prev.length === pts.length && prev.every((p, i) => Math.abs(p.x - pts[i].x) < 2 && Math.abs(p.y - pts[i].y) < 2)) return prev;
          return pts;
        });
        setTrailEnds(prev => {
          if (Math.abs(prev.startX - cx) < 2 && Math.abs(prev.startY - startY) < 2 && Math.abs(prev.endX - cx) < 2 && Math.abs(prev.endY - H) < 2) return prev;
          return { startX: cx, startY, endX: cx, endY: H };
        });

        const pathLen = drawnEl.getTotalLength();
        drawnEl.setAttribute('stroke-dasharray', `${pathLen}`);
        drawnEl.setAttribute('stroke-dashoffset', `${pathLen}`);

        gsap.killTweensOf(drawnEl);
        ScrollTrigger.getById('campusJourneyTrigger')?.kill();
        gsap.to(drawnEl, {
          attr: { 'stroke-dashoffset': 0 },
          ease: 'none',
          scrollTrigger: {
            id: 'campusJourneyTrigger',
            trigger: container,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 0.2,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const point = Math.min(PILLARS.length, Math.max(1, Math.ceil(self.progress * PILLARS.length) || 1));
              setActiveTrailPoint((prev) => (prev !== point ? point : prev));
            }
          }
        });
      }

      // ---------------- MOBILE TRAIL (<768px) ----------------
      if (isStackedLayout) {
        mobileSvgEl.style.display = 'block';

        const cx = W / 2;
        const amp = Math.min(70, W * 0.22);
        const n = PILLARS.length;
        const gapStarts = [startY, ...cardBottoms];
        const gapEnds = [...cardTops, endY];

        const segments: MobileSegment[] = [];
        const markers: GapMarker[] = [];
        let combinedGuideD = '';

        gapStarts.forEach((gStart, i) => {
          const gEnd = gapEnds[i];
          const gMid = (gStart + gEnd) / 2;
          const side = i % 2 === 0 ? 1 : -1;
          const peakX = cx + side * amp;

          const segD = `M ${cx} ${gStart} C ${cx} ${gStart + (gMid - gStart) * 0.5}, ${peakX} ${gMid - (gMid - gStart) * 0.5}, ${peakX} ${gMid} C ${peakX} ${gMid + (gEnd - gMid) * 0.5}, ${cx} ${gEnd - (gEnd - gMid) * 0.5}, ${cx} ${gEnd}`;

          segments.push({ d: segD, gStart, gEnd });
          combinedGuideD += ` ${segD}`;

          if (i < n) markers.push({ x: peakX, y: gMid, index: i });
        });

        const H = Math.max(endY, gapEnds[gapEnds.length - 1] + 40);
        mobileSvgEl.setAttribute('viewBox', `0 0 ${W} ${H}`);
        mobileSvgEl.style.height = `${H}px`;
        mobileGuideEl.setAttribute('d', combinedGuideD.trim());
        mobileHaloEl.setAttribute('d', combinedGuideD.trim());

        setMobileMarkers(prev => {
          if (prev.length === markers.length && prev.every((m, i) => Math.abs(m.x - markers[i].x) < 2 && Math.abs(m.y - markers[i].y) < 2)) return prev;
          return markers;
        });
        setMobileEnds(prev => {
          if (Math.abs(prev.startX - cx) < 2 && Math.abs(prev.startY - startY) < 2) return prev;
          return { startX: cx, startY, endX: cx, endY: gapEnds[gapEnds.length - 1] };
        });
        setMobileSegments(prev => {
          if (prev.length === segments.length && prev.every((s, i) => s.d === segments[i].d)) return prev;
          return segments;
        });

        const totalSpan = Math.max(1, gapEnds[gapEnds.length - 1] - startY);

        const updateMobileDraw = (progress: number) => {
          segments.forEach((seg, i) => {
            const el = mobileSegmentRefs.current[i];
            if (!el) return;
            const len = el.getTotalLength();
            if (!len) return;
            el.setAttribute('stroke-dasharray', `${len}`);
            const pStart = Math.max(0, (seg.gStart - startY) / totalSpan);
            const pEnd = Math.min(1, (seg.gEnd - startY) / totalSpan);
            let frac = 0;
            if (progress >= pEnd) frac = 1;
            else if (progress <= pStart) frac = 0;
            else frac = (progress - pStart) / Math.max(0.001, pEnd - pStart);
            el.setAttribute('stroke-dashoffset', `${len * (1 - frac)}`);
          });
        };

        ScrollTrigger.getById('mobileCampusJourneyTrigger')?.kill();
        updateMobileDraw(0);

        ScrollTrigger.create({
          id: 'mobileCampusJourneyTrigger',
          trigger: container,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 0.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            updateMobileDraw(self.progress);
            const point = Math.min(PILLARS.length, Math.max(1, Math.ceil(self.progress * PILLARS.length) || 1));
            setActiveTrailPoint((prev) => (prev !== point ? point : prev));
          },
          onRefresh: (self) => {
            updateMobileDraw(self.progress);
          }
        });
      } else {
        mobileSvgEl.style.display = 'none';
        setMobileMarkers([]);
        setMobileSegments([]);
        ScrollTrigger.getById('mobileCampusJourneyTrigger')?.kill();
      }
    };

    let timeoutId: number;
    const scheduledBuild = () => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(build, 100);
    };

    scheduledBuild();

    const imgs = pillarsWrapRef.current?.querySelectorAll('img') ?? [];
    imgs.forEach((img) => { if (!(img as HTMLImageElement).complete) img.addEventListener('load', scheduledBuild, { once: true }); });

    window.addEventListener('load', scheduledBuild);
    window.addEventListener('resize', scheduledBuild);
    const ro = new ResizeObserver(scheduledBuild);
    if (pillarsWrapRef.current) ro.observe(pillarsWrapRef.current);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('load', scheduledBuild);
      window.removeEventListener('resize', scheduledBuild);
      ro.disconnect();
      ScrollTrigger.getById('campusJourneyTrigger')?.kill();
      ScrollTrigger.getById('mobileCampusJourneyTrigger')?.kill();
    };
  }, []);

  useEffect(() => {
    const trigger = ScrollTrigger.getById('mobileCampusJourneyTrigger');
    if (trigger) {
      trigger.refresh();
    }
  }, [mobileSegments]);

  return (
    <section id="campus-life" ref={sectionRef} className="py-24 bg-[#FCFAF6] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="grid grid-cols-1 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2D2424]" />
              <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2D2424] flex items-center gap-2">
                <span>The Living Ecosystem</span>
                <span className="text-slate-300">|</span>
                <span className="flex items-center gap-1 font-bold"><Footprints className="w-3.5 h-3.5" /> Interactive Campus Trail</span>
              </div>
            </div>
            <h2 className="font-black text-4xl sm:text-6xl uppercase tracking-tight leading-[1.05] text-[#2D2424]">
              Life Outside <br />
              <span className="relative inline-block text-[#2D2424] pb-3">
                The Classroom
                <span
                  ref={underlineRef}
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-3.5"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 14'%3E%3Cpath d='M0 7 Q10 -1 20 7 T40 7' stroke='%232D2424' stroke-width='4' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat-x',
                    backgroundSize: '40px 14px',
                  }}
                />
              </span>
            </h2>
          </div>
        </div>
      </div>

      {/* Desktop / tablet scroll-drawn spine — unchanged, sits in the gap between text and image columns */}
      <div className="hidden md:block absolute top-0 left-0 right-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <svg ref={svgRef} className="w-full absolute top-0 left-0 overflow-visible" preserveAspectRatio="none">
            <defs>
              <linearGradient id="mapTrailGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="55%" stopColor="#B8933E" />
                <stop offset="100%" stopColor="#2D2424" />
              </linearGradient>
            </defs>

            <path ref={guidePathRef} stroke="#A88B74" strokeWidth="2.5" strokeDasharray="8 8" strokeOpacity="0.25" fill="none" vectorEffect="non-scaling-stroke" />
            <path stroke="#2D2424" strokeWidth="13" strokeOpacity="0.15" fill="none" vectorEffect="non-scaling-stroke" />
            <path ref={drawnPathRef} stroke="#2D2424" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" vectorEffect="non-scaling-stroke" />

            {pathPts.map((pt, i) => {
              const isActive = activeTrailPoint === i + 1;
              const pillar = PILLARS[i];
              const accentColor = pillar?.accent || "#D4AF37";
              const isRightSide = i % 2 === 0;
              const tagWidth = 110;
              const tagX = isRightSide ? 0 : -tagWidth;
              const tagOffset = isRightSide ? 32 : -32;

              return (
                <g key={i} transform={`translate(${pt.x}, ${pt.y})`} className="transition-all duration-300">
                  {isActive && (
                    <>
                      <circle r="28" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.5" className="animate-ping" />
                      <circle r="22" fill={accentColor} opacity="0.18" />
                    </>
                  )}
                  <circle
                    r={isActive ? "20" : "16"}
                    stroke={isActive ? accentColor : "#A88B74"}
                    strokeWidth={isActive ? "3" : "2"}
                    strokeDasharray={isActive ? "none" : "4 2"}
                    fill="#FCFAF6"
                    vectorEffect="non-scaling-stroke"
                    className="transition-all duration-300 shadow-md"
                  />
                  <circle r={isActive ? "12" : "8"} fill={isActive ? accentColor : "#2D2424"} className="transition-all duration-300" />
                  <text x="0" y="3.5" textAnchor="middle" fill="#ffffff" fontSize={isActive ? "10" : "8"} fontWeight="900" fontFamily="monospace" className="pointer-events-none select-none transition-all duration-300">
                    0{i + 1}
                  </text>
                  <g transform={`translate(${tagOffset}, 0)`}>
                    <rect x={tagX} y="-13" width={tagWidth} height="26" rx="13" fill={isActive ? "#2D2424" : "#ffffff"} stroke={isActive ? accentColor : "#E2E8F0"} strokeWidth="1.5" className="shadow-lg transition-all duration-300" />
                    <text x={isRightSide ? tagWidth / 2 : -tagWidth / 2} y="4" textAnchor="middle" fill={isActive ? "#ffffff" : "#2D2424"} fontSize="9.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="0.06em" className="pointer-events-none select-none uppercase tracking-wider">
                      {pillar?.category.split(' ')[0] || `Stop 0${i + 1}`}
                    </text>
                  </g>
                </g>
              );
            })}

            {trailEnds.startY > 0 && (
              <>
                <text x={trailEnds.startX} y={trailEnds.startY - 6} fontSize="26" textAnchor="middle" className="pointer-events-none select-none">🌟</text>
                <text x={trailEnds.endX} y={trailEnds.endY + 25} fontSize="26" textAnchor="middle" className="pointer-events-none select-none">🎉</text>
              </>
            )}
          </svg>
        </div>
      </div>

      {/* Mobile scroll-drawn spine — same style, one <path> per gap, each with
          its own ScrollTrigger so it fills exactly while that gap is on
          screen. Never touches text or images since it's absent everywhere
          else. */}
      <div className="md:hidden absolute top-0 left-0 right-0 pointer-events-none z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <svg ref={mobileSvgRef} className="w-full absolute top-0 left-0 overflow-visible" preserveAspectRatio="none">
            <path ref={mobileGuidePathRef} stroke="#A88B74" strokeWidth="2" strokeDasharray="7 7" strokeOpacity="0.25" fill="none" vectorEffect="non-scaling-stroke" />
            <path ref={mobileHaloPathRef} stroke="#2D2424" strokeWidth="10" strokeOpacity="0.15" fill="none" vectorEffect="non-scaling-stroke" />

            {mobileSegments.map((seg, i) => (
              <path
                key={i}
                ref={registerMobileSegmentRef(i)}
                d={seg.d}
                stroke="#2D2424"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {mobileMarkers.map((m) => {
              const isActive = activeTrailPoint === m.index + 1;
              const pillar = PILLARS[m.index];
              const accentColor = pillar?.accent || "#D4AF37";
              return (
                <g key={m.index} transform={`translate(${m.x}, ${m.y})`} className="transition-all duration-300">
                  {isActive && (
                    <>
                      <circle r="16" fill="none" stroke={accentColor} strokeWidth="1.5" opacity="0.5" className="animate-ping" />
                      <circle r="11" fill={accentColor} opacity="0.18" />
                    </>
                  )}
                  <circle
                    r={isActive ? "11" : "8"}
                    stroke={isActive ? accentColor : "#A88B74"}
                    strokeWidth={isActive ? "2.5" : "2"}
                    strokeDasharray={isActive ? "none" : "3 2"}
                    fill="#FCFAF6"
                    vectorEffect="non-scaling-stroke"
                    className="transition-all duration-300"
                  />
                  <circle r={isActive ? "6" : "4"} fill={isActive ? accentColor : "#2D2424"} className="transition-all duration-300" />
                  <text x="0" y={isActive ? "2.5" : "2"} textAnchor="middle" fill="#ffffff" fontSize={isActive ? "6.5" : "5.5"} fontWeight="900" fontFamily="monospace" className="pointer-events-none select-none transition-all duration-300">
                    0{m.index + 1}
                  </text>
                </g>
              );
            })}

            {mobileEnds.startY > 0 && (
              <>
                <text x={mobileEnds.startX} y={mobileEnds.startY - 4} fontSize="18" textAnchor="middle" className="pointer-events-none select-none">🌟</text>
                <text x={mobileEnds.endX} y={mobileEnds.endY + 16} fontSize="18" textAnchor="middle" className="pointer-events-none select-none">🎉</text>
              </>
            )}
          </svg>
        </div>
      </div>

      <div ref={pillarsWrapRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 mb-32 relative z-10">
        {PILLARS.map((p, i) => (
          <PillarCard key={p.id} pillar={p} index={i} registerRef={registerStepRef(i)} />
        ))}
      </div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 select-none">
            <h3 ref={archiveHeadingRef} className="font-montserrat text-3xl sm:text-4xl font-extrabold text-[#2D2424] tracking-tight uppercase">
              Campus Memory Archive
            </h3>
            <p className="font-montserrat text-sm text-slate-500 font-medium max-w-xl mx-auto mt-2">
              Real moments, real friendships, and unforgettable memories captured throughout our vibrant campus life.
            </p>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee-track-left {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          @keyframes marquee-track-right {
            0% { transform: translate3d(-50%, 0, 0); }
            100% { transform: translate3d(0, 0, 0); }
          }
          .animate-marquee-left {
            display: flex;
            width: max-content;
            animation: marquee-track-left 38s linear infinite;
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: marquee-track-right 38s linear infinite;
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }
          .lane-container:hover .animate-marquee-left,
          .lane-container:hover .animate-marquee-right {
            animation-play-state: paused;
          }
        ` }} />

        <div className="w-full space-y-6 py-6 overflow-hidden relative">
          <div className="relative w-full overflow-hidden lane-container">
            <div className="animate-marquee-left flex gap-6 px-3">
              {LANE1_ITEMS.map((p, idx) => (
                <div
                  key={`lane1-${idx}`}
                  className={`w-[165px] min-[360px]:w-[185px] sm:w-[310px] shrink-0 bg-white p-2.5 pb-4 sm:p-4 sm:pb-6 rounded-lg shadow-sm hover:shadow-lg border border-slate-200/50 flex flex-col justify-between transition-all duration-300 cursor-pointer ${p.rotation} select-none hover:scale-105 hover:-translate-y-2 hover:rotate-0`}
                  onClick={() => setSelectedGalleryImg(p.url)}
                >
                  <div className="relative aspect-[4/3] rounded bg-slate-100 overflow-hidden mb-2.5 sm:mb-4 border border-slate-100 select-none">
                    <img
                      src={p.url}
                      alt={p.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-slate-900/90 text-white font-mono text-[6.5px] sm:text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                      {p.tag}
                    </span>
                  </div>
                  <div className="text-left font-montserrat">
                    <p className="text-[10px] min-[360px]:text-[11px] sm:text-[13px] font-bold text-[#2D2424] tracking-tight truncate">
                      {p.caption}
                    </p>
                    <span className="font-mono text-[7.5px] sm:text-[9px] text-[#2D2424] block mt-0.5 sm:mt-1 tracking-tight font-medium">
                      ✦ Snap #{p.originalId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden lane-container mt-2">
            <div className="animate-marquee-right flex gap-6 px-3">
              {LANE2_ITEMS.map((p, idx) => (
                <div
                  key={`lane2-${idx}`}
                  className={`w-[165px] min-[360px]:w-[185px] sm:w-[310px] shrink-0 bg-white p-2.5 pb-4 sm:p-4 sm:pb-6 rounded-lg shadow-sm hover:shadow-lg border border-slate-200/50 flex flex-col justify-between transition-all duration-300 cursor-pointer ${p.rotation} select-none hover:scale-105 hover:-translate-y-2 hover:rotate-0`}
                  onClick={() => setSelectedGalleryImg(p.url)}
                >
                  <div className="relative aspect-[4/3] rounded bg-slate-100 overflow-hidden mb-2.5 sm:mb-4 border border-slate-100 select-none">
                    <img
                      src={p.url}
                      alt={p.caption}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-1.5 left-1.5 bg-slate-900/90 text-white font-mono text-[6.5px] sm:text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded">
                      {p.tag}
                    </span>
                  </div>
                  <div className="text-left font-montserrat">
                    <p className="text-[10px] min-[360px]:text-[11px] sm:text-[13px] font-bold text-[#2D2424] tracking-tight truncate">
                      {p.caption}
                    </p>
                    <span className="font-mono text-[7.5px] sm:text-[9px] text-[#2D2424] block mt-0.5 sm:mt-1 tracking-tight font-medium">
                      ✦ Snap #{p.originalId}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedGalleryImg && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedGalleryImg(null)}>
            <motion.div initial={{ scale: 0.93, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.93, y: 20 }}
              className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative aspect-[4/3] bg-slate-200">
                <img src={selectedGalleryImg} className="w-full h-full object-cover" loading="lazy" decoding="async" referrerPolicy="no-referrer" />
                <button onClick={() => setSelectedGalleryImg(null)} className="absolute top-4 right-4 bg-black/60 hover:bg-black/90 text-white p-2.5 rounded-full">
                  <Plus size={16} className="rotate-45" />
                </button>
              </div>
              <div className="p-6 bg-[#FAF9F5] border-t border-slate-100 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[9px] font-bold text-[#2D2424] tracking-wider block mb-1">✦ ACCREDITED COLLEGIAL ARCHIVE</span>
                  <h4 className="font-extrabold text-base text-[#2D2424] uppercase tracking-tight">Experiential Highlights View</h4>
                </div>
                <button onClick={() => setSelectedGalleryImg(null)} className="px-4 py-2 bg-[#2D2424] hover:bg-[#2D2424] text-white text-[11px] font-bold tracking-wider uppercase rounded-xl shrink-0">
                  Close Photo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
