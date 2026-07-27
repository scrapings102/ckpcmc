import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Routes, Route, useLocation } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { AboutSection } from "./components/About";
import { PrincipalMessage } from "./components/PrincipalMessage";
import Courses from "./components/Courses";
import CampusLife from "./components/CampusLife";
import Faculty from "./components/Faculty";
import BlogsAndMagazine from "./components/BlogsAndMagazine";
import Admissions from "./components/Admissions";
import Footer from "./components/Footer";
import NewsBlogs from "./components/NewsBlogs";
import ChatbotButton from "./components/ChatbotButton";
import AdmissionsPopup from "./components/AdmissionsPopup";

// Subpages
import Overview from "./pages/about/Overview";
import VisionMission from "./pages/about/VisionMission";
import Mission from "./pages/about/Mission";
import Founder from "./pages/about/Founder";
import Trust from "./pages/about/Trust";
import Trustee from "./pages/about/Trustee";
import DirectorsMessage from "./pages/about/DirectorsMessage";
import PrincipalsMessage from "./pages/about/PrincipalsMessage";
import HodsMessage from "./pages/about/HodsMessage";
import Bcom from "./pages/courses/Bcom";
import Bba from "./pages/courses/Bba";
import Bca from "./pages/courses/Bca";
import DynamicSubPage from "./pages/DynamicSubPage";

export default function App() {
  const location = useLocation();
  const isSubPage = location.pathname !== "/";

  const [navbarReady, setNavbarReady] = useState(isSubPage);
  const [showAdmissionsPopup, setShowAdmissionsPopup] = useState(false);
  const hasShownAutoPopupRef = useRef(false);

  const handleQuotesComplete = () => {
    // 1. Quotes come up -> Navbar appears
    setNavbarReady(true);

    // 2. Navbar drops in -> Popup opens after short delay ONLY ONCE
    if (!hasShownAutoPopupRef.current) {
      hasShownAutoPopupRef.current = true;
      setTimeout(() => {
        setShowAdmissionsPopup(true);
      }, 600);
    }
  };

  // Reset navbar visibility if switching back to subpages/home, and add safety timer for navbar + popup
  useEffect(() => {
    if (isSubPage) {
      setNavbarReady(true);
    } else {
      const timer = setTimeout(() => {
        setNavbarReady(true);
        if (!hasShownAutoPopupRef.current) {
          hasShownAutoPopupRef.current = true;
          setShowAdmissionsPopup(true);
        }
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isSubPage]);

  // Scroll to top on route change & recalculate scroll bounds (unless scrolling to target)
  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
      if (typeof window !== 'undefined' && (window as any).lenis) {
        const lenis = (window as any).lenis;
        lenis.scrollTo(0, { immediate: true });
      }
    }
    if (typeof window !== 'undefined' && (window as any).lenis) {
      const lenis = (window as any).lenis;
      const timer = setTimeout(() => {
        lenis.resize();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state]);

  return (
    <>
      <SmoothScroll>
        <ChatbotButton />

        {/* Header bar container with animations */}
        <Navbar isReady={navbarReady} onOpenAdmissions={() => setShowAdmissionsPopup(true)} />

        {!isSubPage ? (
          <>
            <Hero 
              loaded={true} 
              isSubPage={false} 
              onQuotesComplete={handleQuotesComplete}
              onOpenAdmissions={() => setShowAdmissionsPopup(true)}
            />
            <main>
              <AboutSection />
              <NewsBlogs />
              <PrincipalMessage />
              <Courses />
              <CampusLife />
              <Faculty />
              <BlogsAndMagazine />
              <Admissions onOpenAdmissions={() => setShowAdmissionsPopup(true)} />
            </main>
          </>
        ) : (
          <main className="pt-0 min-h-screen bg-[#FCFAF7]">
            <Routes>
              <Route path="/about/overview" element={<Overview />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/mission" element={<Mission />} />
              <Route path="/about/founder" element={<Founder />} />
              <Route path="/about/trust" element={<Trust />} />
              <Route path="/about/trustees" element={<Trustee />} />
              <Route path="/about/directors-message" element={<DirectorsMessage />} />
              <Route path="/about/principals-message" element={<PrincipalsMessage />} />
              <Route path="/about/hods-message" element={<HodsMessage />} />
              
              <Route path="/courses/bcom" element={<Bcom />} />
              <Route path="/courses/bba" element={<Bba />} />
              <Route path="/courses/bca" element={<Bca />} />
              
              {/* Fallback path wildcard */}
              <Route path="*" element={<DynamicSubPage />} />
            </Routes>
          </main>
        )}
        
        {/* Render Footer only on homepage */}
        {!isSubPage && <Footer />}
      </SmoothScroll>

      <AdmissionsPopup isOpen={showAdmissionsPopup} onClose={() => setShowAdmissionsPopup(false)} />
    </>
  );
}
