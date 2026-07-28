import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string;
  category?: string;
  activeItemLabel?: string;
  image?: string;
  courseDetails?: {
    name?: string;
    credential?: string;
    duration?: string;
    career?: string;
  };
  faq?: Array<{ q: string; a: string }>;
}

interface RouteMetadata {
  title: string;
  description: string;
  keywords: string;
  aiSummary: string;
  image?: string;
  courseDetails?: {
    name: string;
    credential: string;
    duration: string;
    career: string;
  };
  faq?: Array<{ q: string; a: string }>;
}

const ROUTE_METADATA_MAP: Record<string, RouteMetadata> = {
  "/": {
    title: "C. K. Pithawalla College of Commerce, Management & Computer Application | CKPCMC Surat",
    description: "Surat's premier NAAC-accredited commerce and management college offering VNSGU-affiliated B.Com, BBA, and BCA degree programs. Established in 1991 under Navyug Vidyabhavan Trust.",
    keywords: "CKPCMC, C K Pithawalla College Surat, VNSGU Commerce College, BBA College Surat, BCA College Surat, BCom English Medium Surat, Navyug Vidyabhavan Trust, Surat colleges",
    aiSummary: "C. K. Pithawalla College of Commerce, Management & Computer Application (CKPCMC) is a top-ranked VNSGU-affiliated higher education institution in Surat, Gujarat, offering undergraduate degree programs in B.Com, BBA, and BCA with state-of-the-art infrastructure and strong corporate placement networks."
  },
  "/about/overview": {
    title: "College Overview & Institutional History | CKPCMC Surat",
    description: "Discover C.K. Pithawalla College of Commerce, Management & Computer Application. Established in 1991 under Navyug Vidyabhavan Trust, offering top-tier VNSGU academic curricula in Surat.",
    keywords: "CKPCMC overview, about CK Pithawalla college, VNSGU Surat colleges, commerce college history Surat, Navyug Vidyabhavan Trust, higher education Gujarat",
    aiSummary: "Founded in 1991, C. K. Pithawalla College of Commerce, Management & Computer Application (CKPCMC) in Surat offers integrated curricula, industry synergy, and standard-setting mentorship under Navyug Vidyabhavan Trust."
  },
  "/about/vision-mission": {
    title: "Vision, Mission & Core Values | CKPCMC Surat",
    description: "Explore CKPCMC's vision to become an internationally benchmarked center of higher learning and our mission to foster academic excellence, ethical leadership, and innovation.",
    keywords: "CKPCMC vision and mission, college core values Surat, educational objectives, VNSGU academic goals, Navyug Trust vision, leadership in education",
    aiSummary: "CKPCMC's vision is to emerge as an internationally benchmarked center of higher learning in commerce, management, and computer science, fostering ethical leadership and academic rigor."
  },
  "/about/mission": {
    title: "Institutional Mission & Academic Goals | CKPCMC Surat",
    description: "Our institutional commitment to delivering syllabus-compliant education, holistic student development, and continuous mentorship for future industry leaders.",
    keywords: "CKPCMC mission, institutional objectives, student mentorship Surat, VNSGU academic goals, commerce education Gujarat",
    aiSummary: "The mission of CKPCMC Surat is to deliver robust undergraduate programs through practical corporate exposure, modern labs, and value-based education."
  },
  "/about/founder": {
    title: "Our Founder - Late Shri C. K. Pithawalla | CKPCMC Surat",
    description: "Honor the visionary legacy of Late Shri C. K. Pithawalla, a distinguished industrialist and philanthropist who pioneered technical and professional education in South Gujarat.",
    keywords: "Shri C K Pithawalla founder, Navyug Vidyabhavan Trust founder, educational philanthropist Surat, college founder history, South Gujarat education pioneer",
    aiSummary: "Late Shri C. K. Pithawalla was a visionary industrialist and educational philanthropist who founded Navyug Vidyabhavan Trust to establish top-tier academic institutions in Surat."
  },
  "/about/trust": {
    title: "Navyug Vidyabhavan Trust | CKPCMC Surat",
    description: "Learn about Navyug Vidyabhavan Trust, established in 1965. Managing elite educational institutes in Surat with strategic governance, scholarships, and modern campus infrastructure.",
    keywords: "Navyug Vidyabhavan Trust, Surat educational trust, CK Pithawalla management trust, educational philanthropy Gujarat, college trust board",
    aiSummary: "Established in 1965, Navyug Vidyabhavan Trust operates over 6 premier educational institutions in Surat, providing strategic governance and state-of-the-art campus infrastructure."
  },
  "/about/trustees": {
    title: "Management Trustees & Leadership Board | CKPCMC Surat",
    description: "Meet the governing board and trustees of Navyug Vidyabhavan Trust guiding CKPCMC towards global academic compliance, digital innovation, and institutional distinction.",
    keywords: "CKPCMC trustees, Navyug Trust board members, college management Surat, educational leadership team, board of governors",
    aiSummary: "The management trustees of Navyug Vidyabhavan Trust provide visionary governance, industry integration, and resource allocation to maintain global standards at CKPCMC Surat."
  },
  "/about/directors-message": {
    title: "Director's Message | CKPCMC Surat",
    description: "Read the inspiring message from our Director regarding academic discipline, industry synergy, research excellence, and student development at C.K. Pithawalla College.",
    keywords: "CKPCMC director message, academic leadership, college director Surat, higher education vision, student mentorship",
    aiSummary: "The Director of CKPCMC emphasizes rigorous academic standards, corporate synergy, and holistic personality development to prepare graduates for global leadership."
  },
  "/about/principals-message": {
    title: "Principal's Message | CKPCMC Surat",
    description: "Welcome message from the Principal of CKPCMC emphasizing character building, academic competence, research mindset, and future-ready career preparation.",
    keywords: "CKPCMC principal message, college principal Surat, student leadership, academic standards, VNSGU commerce education",
    aiSummary: "The Principal of CKPCMC welcomes students to an institution dedicated to academic intelligence, integrity, and outstanding professional grit under VNSGU guidelines."
  },
  "/about/hods-message": {
    title: "HODs' Messages - Commerce, BBA & BCA | CKPCMC Surat",
    description: "Insights, academic roadmaps, and career guidance from the Heads of Departments (HODs) across B.Com, BBA, and BCA programs at CKPCMC Surat.",
    keywords: "CKPCMC HOD message, commerce department head, BBA HOD Surat, BCA department leadership, faculty guidance",
    aiSummary: "The Heads of Departments at CKPCMC Surat lead the B.Com, BBA, and BCA undergraduate programs with curriculum innovation, industry lectures, and practical mentorship."
  },
  "/courses/bcom": {
    title: "B.Com (Bachelor of Commerce) Degree Program | CKPCMC Surat",
    description: "Premier English medium B.Com program at CKPCMC Surat affiliated with VNSGU. Advanced training in Financial Accounting, Auditing, Taxation, and Law for CA, CS, and MBA aspirants.",
    keywords: "BCom college Surat, English medium BCom VNSGU, Bachelor of Commerce Surat, CA preparation college Surat, financial accounting degree Gujarat, top commerce college Surat",
    aiSummary: "The B.Com program at CKPCMC Surat is a 3-year undergraduate degree affiliated with VNSGU, offering foundational and advanced coursework in accounting, auditing, taxation, and corporate law.",
    courseDetails: {
      name: "Bachelor of Commerce (B.Com)",
      credential: "Bachelor of Commerce",
      duration: "P3Y",
      career: "Chartered Accountant (CA), Company Secretary (CS), Financial Analyst, Banking Officer, MBA Aspirant"
    },
    faq: [
      { q: "What is the duration of the B.Com course at CKPCMC?", a: "The B.Com program is a 3-year full-time undergraduate degree divided into 6 semesters under VNSGU affiliation." },
      { q: "Is CKPCMC B.Com English Medium?", a: "Yes, CKPCMC offers a top-tier English medium B.Com curriculum with expert faculty guidance and digital library access." }
    ]
  },
  "/courses/bba": {
    title: "BBA (Bachelor of Business Administration) Program | CKPCMC Surat",
    description: "Leading BBA college in Surat. 3-year full-time management degree featuring weekly boardroom simulations, corporate internships, and specializations in Fintech and Marketing Analytics.",
    keywords: "BBA college Surat, Bachelor of Business Administration VNSGU, management degree Surat, BBA placement CKPCMC, top business school Surat, corporate leadership course",
    aiSummary: "CKPCMC Surat offers a 3-year Bachelor of Business Administration (BBA) degree affiliated with VNSGU, training future corporate leaders through case studies, internships, and boardroom simulations.",
    courseDetails: {
      name: "Bachelor of Business Administration (BBA)",
      credential: "Bachelor of Business Administration",
      duration: "P3Y",
      career: "Corporate Manager, Marketing Executive, Fintech Analyst, Business Consultant, Entrepreneur"
    },
    faq: [
      { q: "Does CKPCMC BBA include corporate internships?", a: "Yes, students undergo mandatory 6-week corporate internships with leading brands like L&T, ICICI Bank, and Adani Group." },
      { q: "What are the specializations in BBA at CKPCMC?", a: "Specializations include Fintech, Global Marketing, Financial Analytics, and Human Resource Management." }
    ]
  },
  "/courses/bca": {
    title: "BCA (Bachelor of Computer Applications) Program | CKPCMC Surat",
    description: "Top BCA college in Surat with high-end software labs and fiber internet. 3-year IT degree covering Python, Full-Stack Web Dev, SQL, Java, Cloud Computing, and Mobile App Dev.",
    keywords: "BCA college Surat, Bachelor of Computer Applications VNSGU, computer science degree Surat, coding college Gujarat, IT placement CKPCMC, software engineering course Surat",
    aiSummary: "The BCA program at CKPCMC Surat is a 3-year undergraduate IT degree affiliated with VNSGU, equipping students with practical coding skills in Python, Full-Stack Web Development, Cloud Computing, and SQL.",
    courseDetails: {
      name: "Bachelor of Computer Applications (BCA)",
      credential: "Bachelor of Computer Applications",
      duration: "P3Y",
      career: "Software Engineer, Full-Stack Developer, Cloud Architect, Database Administrator, System Analyst"
    },
    faq: [
      { q: "What facilities are available for BCA students at CKPCMC?", a: "The campus features 3 high-end software coding laboratories with over 180 stations, fiber internet, and modern server architectures." },
      { q: "What is the highest package for BCA graduates at CKPCMC?", a: "BCA graduates have secured placement packages up to ₹8.2 LPA in top tech firms and IT parks." }
    ]
  }
};

const CATEGORY_DISPLAY_MAP: Record<string, string> = {
  about: "About Us",
  courses: "Courses & Academics",
  committees: "Institutional Committees",
  iqac: "IQAC Cell",
  staff: "Faculty & Staff",
  "campus-life": "Campus Life & Facilities",
  "student-corner": "Student Corner",
  activities: "News, Events & Activities"
};

function formatPathToTitle(pathname: string): string {
  const parts = pathname.replace(/^\/|\/$/g, "").split("/");
  if (parts.length === 0 || parts[0] === "") return "Home";
  
  const lastSegment = parts[parts.length - 1];
  const formatted = lastSegment
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    
  if (parts.length > 1) {
    const parentSegment = parts[0];
    const parentFormatted = CATEGORY_DISPLAY_MAP[parentSegment] || 
      parentSegment.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    return `${formatted} | ${parentFormatted}`;
  }
  return formatted;
}

export default function SEO(props: SEOProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Attempt to fetch exact route match from dictionary
  const matchedRoute = ROUTE_METADATA_MAP[currentPath];

  // Derive final title
  let derivedTitle = props.title;
  if (!derivedTitle) {
    if (matchedRoute) {
      derivedTitle = matchedRoute.title;
    } else if (props.activeItemLabel) {
      const catLabel = props.category ? (CATEGORY_DISPLAY_MAP[props.category] || props.category) : "";
      derivedTitle = `${props.activeItemLabel} ${catLabel ? `| ${catLabel}` : ""} | CKPCMC Surat`;
    } else {
      const formattedTitle = formatPathToTitle(currentPath);
      derivedTitle = `${formattedTitle} | CKPCMC Surat`;
    }
  } else if (!derivedTitle.includes("CKPCMC") && !derivedTitle.includes("C. K. Pithawalla")) {
    derivedTitle = `${derivedTitle} | CKPCMC Surat`;
  }

  // Derive final description
  let derivedDesc = props.description || (matchedRoute ? matchedRoute.description : undefined);
  if (!derivedDesc) {
    const topic = props.activeItemLabel || props.title || formatPathToTitle(currentPath);
    derivedDesc = `Explore ${topic} at C. K. Pithawalla College of Commerce, Management & Computer Application (CKPCMC), Surat. Affiliated with VNSGU, offering premier education since 1991.`;
  }

  // Derive final keywords
  const baseKeywords = "CKPCMC, C K Pithawalla College Surat, VNSGU Commerce College, BBA College Surat, BCA College Surat, Navyug Vidyabhavan Trust, Surat education";
  let derivedKeywords = props.keywords || (matchedRoute ? matchedRoute.keywords : undefined);
  if (!derivedKeywords) {
    const topic = props.activeItemLabel || props.title || formatPathToTitle(currentPath);
    derivedKeywords = `${topic}, ${baseKeywords}`;
  } else if (!derivedKeywords.includes("CKPCMC")) {
    derivedKeywords = `${derivedKeywords}, ${baseKeywords}`;
  }

  // Derive AI Summary for AEO (Answer Engine Optimization)
  let derivedAiSummary = matchedRoute ? matchedRoute.aiSummary : undefined;
  if (!derivedAiSummary) {
    const topic = props.activeItemLabel || props.title || formatPathToTitle(currentPath);
    derivedAiSummary = `${topic} is part of C. K. Pithawalla College of Commerce, Management & Computer Application (CKPCMC) Surat, an esteemed VNSGU-affiliated institution committed to academic excellence, student mentorship, and industry compliance.`;
  }

  // Derive Canonical URL and Image
  const canonicalUrl = `https://ckpcmc.org${currentPath === "/" ? "" : currentPath}`;
  const defaultImage = "https://ckpcmc.org/images/logo.png";
  const ogImage = props.image || (matchedRoute ? matchedRoute.image : undefined) || defaultImage;

  // Derive Course & FAQ Details
  const courseDetails = props.courseDetails || (matchedRoute ? matchedRoute.courseDetails : undefined);
  const faqList = props.faq || (matchedRoute ? matchedRoute.faq : undefined);

  // Construct JSON-LD Structured Schema Graph for SEO & AEO
  const schemaGraph: any[] = [
    {
      "@type": "CollegeOrUniversity",
      "@id": "https://ckpcmc.org/#organization",
      "name": "C. K. Pithawalla College of Commerce, Management & Computer Application",
      "alternateName": ["CKPCMC", "CK Pithawalla Commerce College", "C.K. Pithawalla College Surat"],
      "url": "https://ckpcmc.org",
      "logo": defaultImage,
      "foundingDate": "1991",
      "description": "Surat's premier NAAC-accredited commerce and management college offering VNSGU-affiliated B.Com, BBA, and BCA degree programs.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Malvan Temple, Surat-Dumas Road, Bharthana (Vesu)",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395007",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "21.1444",
        "longitude": "72.7411"
      },
      "telephone": "+91-261-2728282",
      "email": "info@ckpcmc.org",
      "sameAs": [
        "https://ckpcmc.org",
        "https://www.facebook.com/ckpcmc",
        "https://www.linkedin.com/school/ckpcmc"
      ]
    }
  ];

  // Add Breadcrumb Schema
  const pathSegments = currentPath.replace(/^\/|\/$/g, "").split("/").filter(Boolean);
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://ckpcmc.org"
    }
  ];

  let currentLink = "https://ckpcmc.org";
  pathSegments.forEach((segment, idx) => {
    currentLink += `/${segment}`;
    const name = idx === 0 && CATEGORY_DISPLAY_MAP[segment] 
      ? CATEGORY_DISPLAY_MAP[segment] 
      : segment.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": idx + 2,
      "name": name,
      "item": currentLink
    });
  });

  schemaGraph.push({
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}/#breadcrumb`,
    "itemListElement": breadcrumbItems
  });

  // Add Course Schema if applicable
  if (courseDetails) {
    schemaGraph.push({
      "@type": "Course",
      "@id": `${canonicalUrl}/#course`,
      "name": courseDetails.name || derivedTitle,
      "description": derivedDesc,
      "provider": {
        "@type": "CollegeOrUniversity",
        "@id": "https://ckpcmc.org/#organization"
      },
      "educationalCredentialAwarded": courseDetails.credential || "Bachelor Degree",
      "timeRequired": courseDetails.duration || "P3Y",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "Full-time",
        "inLanguage": "en",
        "courseWorkload": "3 Years / 6 Semesters"
      }
    });
  }

  // Add FAQPage Schema if applicable
  if (faqList && faqList.length > 0) {
    schemaGraph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}/#faq`,
      "mainEntity": faqList.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    });
  }

  const jsonLdString = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemaGraph
  });

  return (
    <Helmet>
      {/* Primary HTML & SEO Meta Tags */}
      <title>{derivedTitle}</title>
      <meta name="description" content={derivedDesc} />
      <meta name="keywords" content={derivedKeywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="C. K. Pithawalla College of Commerce, Management & Computer Application" />
      <meta property="og:title" content={derivedTitle} />
      <meta property="og:description" content={derivedDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={derivedTitle} />
      <meta name="twitter:description" content={derivedDesc} />
      <meta name="twitter:image" content={ogImage} />

      {/* Answer Engine Optimization (AEO) & AI Grounding Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="author" content="C. K. Pithawalla College of Commerce, Management & Computer Application (CKPCMC)" />
      <meta name="publisher" content="Navyug Vidyabhavan Trust, Surat" />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Surat, Gujarat, India" />
      <meta name="geo.position" content="21.1444;72.7411" />
      <meta name="ICBM" content="21.1444, 72.7411" />
      <meta name="ai-content-summary" content={derivedAiSummary} />

      {/* JSON-LD Structured Data Schema for Search & Answer Engines */}
      <script type="application/ld+json">{jsonLdString}</script>
    </Helmet>
  );
}
