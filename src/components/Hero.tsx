import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  loaded?: boolean;
  onQuotesComplete?: () => void;
  onAnimationComplete?: () => void;
  isSubPage?: boolean;
  onOpenAdmissions?: () => void;
}

const HERO_IMAGES = [
  "https://wsrv.nl/?url=ckpcmc.org/images/drama_youth_Dec_2024.jpeg&w=2400&output=webp&q=95",
  "https://wsrv.nl/?url=ckpcmc.org/images/group_dance_Youth_dec_2024.jpeg&w=2400&output=webp&q=95",
  "https://wsrv.nl/?url=ckpcmc.org/images/Kala_yatra_Youth_dec_2024.jpeg&w=2400&output=webp&q=95",
  "https://wsrv.nl/?url=ckpcmc.org/images/group_song_youth_dec_2024.jpeg&w=2400&output=webp&q=95",
  "https://wsrv.nl/?url=ckpcet.ac.in/img/home-page/slider/si-01.jpg&w=2400&output=webp&q=95",
  "https://wsrv.nl/?url=ckpcmc.org/images/inter_01.jpeg&w=2400&output=webp&q=95",
  "https://wsrv.nl/?url=ckpcmc.org/images/gal_01.jpeg&w=2400&output=webp&q=95",
];

// Tablet and mobile band — covers all touch/mobile/tablet screens.
const TABLET_MEDIA_QUERY = "(max-width: 1024px)";

/**
 * Splits an element's text content into individual letter <span>s for
 * GSAP letter-by-letter stagger animation, while keeping it accessible:
 * the original text is preserved via aria-label on the parent, and each
 * letter span is aria-hidden so screen readers read the real sentence,
 * not individual characters.
 */
function splitToLetters(el: HTMLElement | null): HTMLSpanElement[] {
  if (!el) return [];
  const text = el.textContent || "";
  el.setAttribute("aria-label", text);
  el.innerHTML = "";

  const letters: HTMLSpanElement[] = [];
  [...text].forEach((char) => {
    const span = document.createElement("span");
    span.className = "letter inline-block";
    span.textContent = char === " " ? "\u00A0" : char;
    span.setAttribute("aria-hidden", "true");
    el.appendChild(span);
    letters.push(span);
  });
  return letters;
}

export default function Hero({ loaded = true, onQuotesComplete, onAnimationComplete, isSubPage, onOpenAdmissions }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const overlayRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const quoteTextRef = useRef<HTMLParagraphElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // If we're rendering directly on a college subpage (e.g. after a
  // reload), skip waiting for the full hero intro animation and let
  // the subpage overlay show immediately.
  useEffect(() => {
    if (isSubPage) {
      onAnimationComplete?.();
      onQuotesComplete?.();
    }
  }, [isSubPage]);

  useEffect(() => {
    // Preload all hero images into browser memory immediately for instant slide transitions
    HERO_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // ---------- Preloader intro: left-to-right image wipe reveal ----------
  useEffect(() => {
    if (!loaded) return;
    if (isSubPage) return; // Skip the intro animation entirely on subpages
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const quoteLetters = splitToLetters(quoteTextRef.current);

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: () => {
          onAnimationComplete?.();
          onQuotesComplete?.();
        },
      });

      // ---------- 1. LEFT-TO-RIGHT IMAGE WIPE REVEAL ----------
      // The whole image stack is clipped to nothing on load, then the
      // clip-path opens left -> right, like a curtain drawing back.
      tl.set(imageWrapRef.current, {
        clipPath: "inset(0% 100% 0% 0%)",
      }).to(imageWrapRef.current, {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.1,
        ease: "power4.inOut",
      });

      // First image gets a gentle settle (scale + blur easing off) that
      // plays underneath the wipe.
      if (imagesRef.current[0]) {
        tl.fromTo(
          imagesRef.current[0],
          { scale: 1.3, filter: "blur(10px) brightness(0.5)" },
          {
            scale: 1.05,
            filter: "blur(0px) brightness(1)",
            duration: 1.7,
            ease: "power3.out",
          },
          0, // start at the same time as the wipe
        );
      }

      tl.fromTo(
        overlayRef.current,
        { opacity: 1 },
        { opacity: 0.6, duration: 1.1 },
        0.1,
      ).fromTo(
        gridRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 0.3, scale: 1, duration: 1.1 },
        0.1,
      );

      // ---------- 2. QUOTE TEXT (starts once wipe is ~80% done) ----------
      const QUOTE_START = 0.8;

      tl.fromTo(
        quoteRef.current,
        { opacity: 1 }, // parent stays visible; letters carry the reveal
        { opacity: 1, duration: 0.01 },
        QUOTE_START,
      );

      if (quoteLetters.length) {
        tl.fromTo(
          quoteLetters,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
            stagger: 0.008,
          },
          QUOTE_START,
        );
      }

      // ---------- 3. SCROLL INDICATOR (last) ----------
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.75, ease: "power3.out" },
        ">-0.15",
      );

      // ---------- Continuous slow zoom for all images ----------
      imagesRef.current.forEach((img) => {
        if (!img) return;
        gsap.to(img, {
          scale: 1.08,
          duration: 20,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      });

      // ---------- Mouse parallax effect (desktop only) ----------
      const isTablet = window.matchMedia(TABLET_MEDIA_QUERY).matches;
      if (!isTablet) {
        const handleMouseMove = (e: MouseEvent) => {
          if (!containerRef.current) return;
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;

          const xPos = (clientX / innerWidth - 0.5) * 20;
          const yPos = (clientY / innerHeight - 0.5) * 20;

          imagesRef.current.forEach((img) => {
            if (!img) return;
            gsap.to(img, {
              x: xPos,
              y: yPos,
              duration: 1.5,
              ease: "power2.out",
            });
          });

          gsap.to(gridRef.current, {
            x: -xPos * 0.5,
            y: -yPos * 0.5,
            duration: 1.5,
            ease: "power2.out",
          });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, containerRef);

    return () => ctx.revert();
  }, [loaded, isSubPage]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-[100dvh] max-h-[100dvh] w-full overflow-hidden bg-navy"
    >
      {/* Main Hero Background Stack */}
      <div
        ref={imageWrapRef}
        className="absolute inset-0 z-0 overflow-hidden flex items-center justify-center bg-black"
      >
        {HERO_IMAGES.map((src, index) => (
          <img
            key={src}
            ref={(el) => (imagesRef.current[index] = el)}
            src={src}
            alt={`Hero Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-[1500ms] ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "low"}
            decoding="async"
            referrerPolicy="no-referrer"
          />
        ))}
        {/* Translucent overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-b from-navy/65 via-transparent to-navy/85"
        />

        {/* Tech Grid Overlay */}
        <div
          ref={gridRef}
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "4rem 4rem",
            maskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(circle at center, black 30%, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 h-full w-full flex flex-col justify-between items-center text-center px-3 sm:px-4 pt-20 sm:pt-24 md:pt-20 lg:pt-32 pb-3 sm:pb-4 md:pb-3 lg:pb-6">
        <div className="flex-grow min-h-[40px]" />

        {/* Bottom content: Quote & Scroll Indicator */}
        <div className="flex flex-col items-center w-full pt-4 pb-1 sm:pb-2">
          <div
            ref={quoteRef}
            className="mb-2 sm:mb-3 md:mb-2 lg:mb-4 max-w-[92vw] md:max-w-2xl lg:max-w-4xl px-2 sm:px-4 pointer-events-none select-none"
          >
            <p
              ref={quoteTextRef}
              className="text-[11.5px] min-[360px]:text-[12.5px] sm:text-sm md:text-sm lg:text-base font-sans font-medium text-white/95 italic leading-relaxed tracking-wide text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            >
              "A legacy of academic and professional excellence in Surat. Shaping the next generation of commerce leaders, management experts, and tech innovators since 2005."
            </p>
          </div>

          <div
            ref={scrollIndicatorRef}
            className="flex flex-col items-center gap-1 sm:gap-1.5 pointer-events-none select-none"
          >
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-white/70 font-sans font-semibold drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] animate-pulse">
              Scroll to explore
            </span>
            <div className="w-[1px] h-4 sm:h-6 md:h-5 lg:h-7 bg-gradient-to-b from-[#D4AF37]/90 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}