export interface DropdownPageContent {
  title: string;
  category: string;
  subtitle: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
  keyHighlights: string[];
  image: string;
  extraDetails?: string;
  curriculumOrBody?: Array<{ title: string; desc: string }>;
}

export const dropdownPagesData: Record<string, DropdownPageContent> = {
  "Overview": {
    title: "Overview",
    category: "About Us",
    subtitle: "A Legacy of Intellectual & Academic Distinction",
    description: "Established in 1991 under the visionary leadership of Navyug Vidyabhavan Trust, C.K. Pithawalla College of Commerce has consistently redefined educational benchmarks in Surat and across Gujarat. We cultivate commerce pioneers through integrated curricula, industrial synergy, and standard-setting mentorship.",
    stats: [
      { label: "Founded Year", value: "1991" },
      { label: "Active Alumni", value: "8,500+" },
      { label: "VNSGU Ranking", value: "Top Tier" },
      { label: "Campus Strength", value: "2,200+" }
    ],
    keyHighlights: [
      "Highly qualified Ph.D. core faculty members and active industry consultants.",
      "Comprehensive digital library with access to premium global journals and resources.",
      "Vibrant environment centered around creative business ideation and practical learning.",
      "Modern infrastructure featuring tech-enabled smart lecture theaters."
    ],
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Our college emphasizes holistic growth, combining strict academic instruction with multi-disciplinary workshops and creative business incubators. We guide students from foundational knowledge to professional leadership readiness.",
  },
  "Management Trustees": {
    title: "Management Trustees",
    category: "About Us",
    subtitle: "Pioneering Visionaries & Educational Philanthropists",
    description: "The Navyug Vidyabhavan Trust operates as a pillar of educational excellence. Guided by esteemed philanthropists, industry leaders, and academic veterans, the trustees provide strategic governance and state-of-the-art resource provisioning to guarantee global compliance.",
    stats: [
      { label: "Trust Inception", value: "1965" },
      { label: "Total Institutions", value: "6+" },
      { label: "Governing Members", value: "14" },
      { label: "Trust Scholarship Fund", value: "₹25L+/Yr" }
    ],
    keyHighlights: [
      "Committed to accessible, top-quality education for all strata of society.",
      "Strategic guidance emphasizing digital innovation and modern campus labs.",
      "Industry-academia integration boards containing elite regional corporate chiefs.",
      "Continuous support for student start-ups and physical sports facilities."
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Under the trust's governance, the campus has received multiple infrastructure grants, leading to completely digitized computer centres, a multi-court sports complex, and professional-grade presentation halls.",
  },
  "Principal Message": {
    title: "Principal Message",
    category: "About Us",
    subtitle: "Cultivating Character, Competence, and Leadership",
    description: "Welcome to C.K. Pithawalla College of Commerce. In an era driven by global commerce, digital transition, and entrepreneurial vigor, we prepare our students to meet modern complex demands with utmost integrity, academic intelligence, and outstanding professional grit.",
    stats: [
      { label: "Principal's Experience", value: "25+ Yrs" },
      { label: "Research Papers", value: "45+" },
      { label: "Mentored Graduates", value: "10k+" }
    ],
    keyHighlights: [
      "Focus on industry-readiness through practical commerce projects.",
      "Encouraging young minds towards innovative start-ups via the SSIP cell.",
      "Strict compliance with UGC standards and NAAC quality mandates.",
      "Commitment to ethical development and socially responsible leadership."
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "“Education is not just acquiring degrees; it is about building a progressive mind, fine character, and resilient spirit. We invite you to embark on this beautiful learning experience with us.”"
  },
  "Mandatory Disclosures": {
    title: "Mandatory Disclosures",
    category: "About Us",
    subtitle: "UGC, VNSGU, & Government Statutory Compliance",
    description: "In compliance with Veer Narmad South Gujarat University (VNSGU) guidelines, UGC regulations, and state governance norms, we publish all mandatory institutional details, financial audit clearances, academic approvals, and staff designations transparently.",
    stats: [
      { label: "UGC Approved", value: "2(f) & 12(B)" },
      { label: "Audit Clearance", value: "100% Clean" },
      { label: "Faculty-Student Ratio", value: "1:35" }
    ],
    keyHighlights: [
      "Anti-Ragging and Women Empowerment Committees actively functioning.",
      "Complete transparency in fee structures approved by the State Fee Committee.",
      "Annual Academic Audits conducted by certified external agencies.",
      "Equal opportunity cell providing resources for specialized cohorts."
    ],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "All statutory data sheets, AISHE certificates, and VNSGU affiliation extension orders are fully archived and updated on our physical registers and digital board for public verification."
  },
  "BBA Department": {
    title: "BBA Department",
    category: "Academics",
    subtitle: "Bachelor of Business Administration (BBA)",
    description: "Our BBA department produces premium management professionals and future corporate leaders. Through case studies, dynamic mock boardrooms, and intensive internships, students acquire modern expertise in finance, human resources, and marketing analytics.",
    stats: [
      { label: "Annual Seats", value: "120" },
      { label: "Average Package", value: "₹4.5 LPA" },
      { label: "Corporate Partners", value: "45+" },
      { label: "Internship Placement", value: "100%" }
    ],
    keyHighlights: [
      "Weekly boardroom simulations, business pitch battles, and expert modules.",
      "Mandatory 6-week corporate internship with leading national brands.",
      "Specializations in Fintech, Global Marketing, and Talent Analytics.",
      "Active alumni circle mentoring students on real-world placement parameters."
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    curriculumOrBody: [
      { title: "Semester I & II", desc: "Principles of Management, Business Accounting, and Quantitative Business Methods." },
      { title: "Semester III & IV", desc: "Corporate Finance, Organizational Behavior, Marketing Strategies, and Consumer Behavior." },
      { title: "Semester V & VI", desc: "Strategic Management, Specialization Electives, and Capstone Business Project Presentation." }
    ],
    extraDetails: "Our BBA students are regularly chosen in premium management trainee programs at corporate groups like L&T, ICICI Bank, and Adani Group."
  },
  "BCA Department": {
    title: "BCA Department",
    category: "Academics",
    subtitle: "Bachelor of Computer Applications (BCA)",
    description: "The BCA department is a top center for tech education. Merging computer logic with business insights, we prepare students for high-growth roles in software engineering, cloud computing, database management, and mobile application development.",
    stats: [
      { label: "Lab Stations", value: "180+ High-End" },
      { label: "Highest Package", value: "₹8.2 LPA" },
      { label: "Coding Projects", value: "320+/Yr" },
      { label: "Active Hackathons", value: "4 Annually" }
    ],
    keyHighlights: [
      "State-of-the-art software laboratories equipped with high-speed fiber internet.",
      "Curriculum focused on Python, Full-Stack Web Dev, SQL, AI logic, and Swift.",
      "Expert training on cloud deployment architectures and modern cybersecurity.",
      "Consistent winning runs in state-level coding and software design challenges."
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    curriculumOrBody: [
      { title: "Foundational Tech", desc: "C programming, web development languages (HTML, CSS, JS), and Computer Architecture." },
      { title: "Advanced Logic", desc: "Data Structures, Database Management Systems (SQL), Java Programming, and Networking." },
      { title: "Emerging Fields", desc: "Cloud Computing, Python AI Basics, Mobile App Dev, and a massive Final Semester Live Project." }
    ],
    extraDetails: "The department conducts specialized workshops led by senior IT professionals from Ahmedabad and Pune tech parks."
  },
  "B.Com Department": {
    title: "B.Com Department",
    category: "Academics",
    subtitle: "Bachelor of Commerce (B.Com)",
    description: "As our foundational program, the B.Com department provides top-tier conceptual and practical training in Financial Accounting, Auditing, Corporate Law, and Taxation. It serves as a launchpad for Chartered Accountancy (CA), CS, and MBA aspirants.",
    stats: [
      { label: "Department Strength", value: "1,200+" },
      { label: "CA/CS Clearances", value: "240+ Alumni" },
      { label: "Specializations", value: "Advanced Accounts & Banking" },
      { label: "Tally Certifications", value: "100% Offered" }
    ],
    keyHighlights: [
      "Rigorous classroom schedules supplemented by professional CA study circles.",
      "Certified add-on training in GST compliance, Tally Prime, and Auditing suites.",
      "Renowned veteran finance professors with decades of academic depth.",
      "Interactive banking simulations and financial model presentations."
    ],
    image: "https://images.unsplash.com/photo-1448697138198-9fa6d036a457?auto=format&fit=crop&q=80&w=1200",
    curriculumOrBody: [
      { title: "Core Accounting", desc: "Financial Accounting, Corporate Accounting, and Cost & Management Audits." },
      { title: "Taxation & Law", desc: "Direct Tax Structures, GST Regulations, Corporate Law, and Business Ethics." },
      { title: "Banking & Economics", desc: "Macro/Micro Economics, International Banking Operations, and Insurance Markets." }
    ],
    extraDetails: "Our B.Com department has maintained a 90%+ pass rate under VNSGU university evaluations for several consecutive years."
  },
  "Research Projects": {
    title: "Research Projects",
    category: "Research & SSIP",
    subtitle: "Advancing Academic Frontiers & Practical Commerce Studies",
    description: "C.K. Pithawalla promotes a vibrant scientific environment. Our faculty members and postgraduates regularly secure grants, publish peer-reviewed research in leading Scopus/UGC CARE-listed journals, and author authoritative academic textbooks.",
    stats: [
      { label: "Published Papers", value: "150+" },
      { label: "Books Authored", value: "28" },
      { label: "Active Grants", value: "₹8 Lakhs" },
      { label: "Scopus Citations", value: "450+" }
    ],
    keyHighlights: [
      "Regular financial grants provided to students for presenting papers at conferences.",
      "Dedicated Research and Publication committee to mentor young paper writers.",
      "Focus areas: Digital Wallets, Rural Banking, E-commerce Logistics, and FinTech.",
      "Collaborative research drives alongside state universities and corporate labs."
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "We regularly organize UGC-sponsored National Seminars on Emerging Trends in Commerce and IT to bring leading thinkers and students onto a unified discussion platform."
  },
  "SSIP Startup Cell": {
    title: "SSIP Startup Cell",
    category: "Research & SSIP",
    subtitle: "Student Startup & Innovation Policy (SSIP) Government Cell",
    description: "As an officially approved SSIP cell by the Government of Gujarat, we support and fund student-led business ideas, technological prototypes, and innovative service concepts. We provide seed grants, mentoring, and legal guidance for Patent/IP filing.",
    stats: [
      { label: "Govt Funding Allocated", value: "₹10 Lakhs+" },
      { label: "Incubated Startups", value: "12" },
      { label: "Patents Filed", value: "2" },
      { label: "Mentors on Board", value: "8 Active" }
    ],
    keyHighlights: [
      "Direct seed funding up to ₹2 Lakhs per approved student prototype.",
      "Dedicated creative co-working spaces with high-speed internet and testing labs.",
      "Access to regional angel investors, venture capitalists, and legal lawyers.",
      "Bootcamps on business model canvas, digital branding, and pitching strategies."
    ],
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Our SSIP incubates have developed products ranging from hyper-local campus delivery apps to AI-based accounting software suites, winning multiple prizes at state level."
  },
  "Scholarship Assistance": {
    title: "Scholarship Assistance",
    category: "Student Corner",
    subtitle: "Unlocking Financial Freedom through Institutional Support",
    description: "We are committed to making education accessible. Our dedicated scholarship desk assists deserving candidates in applying for Government Schemes like MYSY, Digital Gujarat, SC/ST/OBC support packages, and private trust grants.",
    stats: [
      { label: "Annual Beneficiaries", value: "450+ Students" },
      { label: "Total Scholarships routed", value: "₹65 Lakhs+/Yr" },
      { label: "Desk Resolution", value: "100% Online" }
    ],
    keyHighlights: [
      "Dedicated administrative cell assisting students with online document verification.",
      "Fee concession programs for single-parent families and economically backward cohorts.",
      "Special Navyug Trust Merit awards for outstanding university rank holders.",
      "Hassle-free direct bank transfer integration with government portals."
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "No bright mind should be left behind due to financial constraints. Our team works proactively during the admission cycle to ensure all eligible students submit applications."
  },
  "Sports & Gymkhana": {
    title: "Sports & Gymkhana",
    category: "Student Corner",
    subtitle: "Nurturing Championship Grit & Healthy Competitiveness",
    description: "The Gymkhana committee promotes complete physical wellness, resilience, and teamwork. Students have access to state-of-the-art indoor and outdoor amenities, professional athletic coaches, and premium sports equipment.",
    stats: [
      { label: "Gym Station Capacity", value: "50+ Users" },
      { label: "VNSGU Gold Medals", value: "12" },
      { label: "Indoor-Outdoor Games", value: "15+" },
      { label: "State Level Athletes", value: "25+ Active" }
    ],
    keyHighlights: [
      "Modern indoor court supporting Table Tennis, Chess, Carrom, and Badminton.",
      "Large outdoor fields for Cricket, Football, Volleyball, and Athletics.",
      "Annual Inter-College tournaments hosted with participation from 40+ colleges.",
      "Special sports allowances and exam re-scheduling options for state players."
    ],
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Our Cricket and Athletics teams consistently rank in the top positions in VNSGU Inter-Zonal championships, producing elite players year after year."
  },
  "NSS & NCC Units": {
    title: "NSS & NCC Units",
    category: "Student Corner",
    subtitle: "Character, Discipline, and Direct Community Service",
    description: "Our National Service Scheme (NSS) and National Cadet Corps (NCC) wings inspire social responsibility, nation-building, and leadership. Cadets and volunteers participate in blood donation camps, digital literacy drives, and defense camps.",
    stats: [
      { label: "Active NSS Volunteers", value: "150+" },
      { label: "NCC Cadet Ranks", value: "50+ Enrolled" },
      { label: "Camps Organized", value: "10+/Yr" },
      { label: "Community Awards", value: "4 Regional" }
    ],
    keyHighlights: [
      "Annual 7-day rural immersion camp focusing on sanitation and financial literacy.",
      "NCC cadets selected for national Republic Day parade camps in New Delhi.",
      "Emergency disaster relief squads active during seasonal regional emergencies.",
      "Collaboration with Red Cross and local NGOs for blood donation drives."
    ],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Participating in NSS/NCC builds strong leadership values and offers vital reservation and credit benefits in defense and government careers."
  },
  "Cultural Fest": {
    title: "Cultural Fest",
    category: "Student Corner",
    subtitle: "The Annual Celebration of Youth and Artistic Genius",
    description: "C.K. Pithawalla's cultural guild is a dynamic hub for fine arts, theater, music, fashion, and classical dance. The annual inter-college youth festival, 'UDAAN', attracts massive talent from all over Gujarat, creating lifelong memories.",
    stats: [
      { label: "Annual Registrations", value: "1,500+" },
      { label: "Event Genres", value: "22+" },
      { label: "Celebrity Guests", value: "4 Annually" },
      { label: "Performance Stages", value: "3" }
    ],
    keyHighlights: [
      "Competitions in Street Plays, Classical Solo Vocals, Folk Dance, and Fine Arts.",
      "Dynamic modern lighting and concert setups managed entirely by students.",
      "Cash prizes, industry-grade certificates, and media coverage.",
      "A platform to get scouted for regional film, theater, and creative agency roles."
    ],
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Through cultural activities, students master vital organizational skills, budget management, event coordination, and large-scale public relations."
  },
  "NAAC Accreditation": {
    title: "NAAC Accreditation",
    category: "Benchmarks",
    subtitle: "Gold Standard Institutional Validation",
    description: "Our high scores in the National Assessment and Accreditation Council (NAAC) evaluations confirm our uncompromising focus on academic excellence, infrastructure capability, learning support systems, and progressive student outcomes.",
    stats: [
      { label: "Current Cycle", value: "Cycle 3" },
      { label: "Quality Grade", value: "A Rated Quality" },
      { label: "Teaching Index", value: "Excellent" },
      { label: "Feedback Compliance", value: "100%" }
    ],
    keyHighlights: [
      "Evaluated on student support services, learning outcomes, and research infrastructure.",
      "Excellent reviews for eco-friendly, green, and highly accessible campus layout.",
      "Robust curriculum development matching contemporary industrial transformations.",
      "Proactive action plan implementations addressing feedback loops."
    ],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "NAAC accreditation ensures our degrees carry top-tier global validity, giving our students distinct priorities in foreign university enrollments."
  },
  "IQAC Cell": {
    title: "IQAC Cell",
    category: "Benchmarks",
    subtitle: "Internal Quality Assurance Cell (IQAC)",
    description: "The IQAC serves as our central quality sentinel. Overseeing modern teaching methodologies, faculty development programs, educational audits, and feedback systems, IQAC ensures every classroom conforms to global academic standards.",
    stats: [
      { label: "Faculty Seminars", value: "12/Yr" },
      { label: "Feedback Handled", value: "2,000+" },
      { label: "Department Audits", value: "2 Annually" }
    ],
    keyHighlights: [
      "Formulation and implementation of innovative outcome-based education (OBE).",
      "Regular peer evaluations and professional skill improvement programs for teachers.",
      "Promoting paper-free digital classrooms and smart tech systems.",
      "Structured feedback loops collected from recruiters, parents, and graduates."
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "IQAC works in tandem with corporate recruiters to continuously inject practical skills into academic schedules, keeping students ahead of the curve."
  },
  "NIRF Rankings": {
    title: "NIRF Rankings",
    category: "Benchmarks",
    subtitle: "National Institutional Ranking Framework",
    description: "C.K. Pithawalla participates in the NIRF evaluations conducted by the Ministry of Education, Government of India. We track parameters including Teaching-Learning Resources (TLR), Graduation Outcomes (GO), and Outreach & Inclusivity (OI).",
    stats: [
      { label: "Participation Status", value: "Fully Submitted" },
      { label: "TLR Score", value: "Top Decile" },
      { label: "Regional Rank Range", value: "Top 20" }
    ],
    keyHighlights: [
      "Strict data compilation vetted by standard national ranking panels.",
      "Focus on enhancing research citations, patent filings, and professional practice.",
      "High scores in regional inclusivity, gender diversity, and socio-economic support.",
      "Annual roadmap planning designed by the core steering committee."
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "The NIRF ranking workflow helps us maintain critical benchmarking transparency, aligning our operations with tier-1 Indian universities."
  },
  "Business Seminars": {
    title: "Business Seminars",
    category: "Activities",
    subtitle: "Dynamic CEO Classrooms & Strategic Workshops",
    description: "Our business seminars bridge the distance between textbooks and executive boardrooms. Every month, top corporate leaders, investment bankers, and digital creators visit the campus to conduct high-impact interactive sessions.",
    stats: [
      { label: "Speakers Hosted", value: "35+ Elite" },
      { label: "Average Attendance", value: "300+" },
      { label: "Networking Success", value: "High Connection" },
      { label: "Global Topics Covered", value: "15+" }
    ],
    keyHighlights: [
      "Panels discussing AI in Accounting, FinTech disruption, and global trade.",
      "Live Q&A roundtables allowing students to receive direct business coaching.",
      "Networking slots helping students secure high-value summer internships.",
      "Practical case study solving competitions vetted by actual company CEOs."
    ],
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Seminars are filmed and catalogued in our digital archives, allowing students to review executive insights during their campus terms."
  },
  "Industrial Visits": {
    title: "Industrial Visits",
    category: "Activities",
    subtitle: "Live Practical Learning Tours at India's Top Corporates",
    description: "We believe in active on-site learning. The college organizes strategic field trips to massive manufacturing hubs, logistics centers, software parks, and financial houses like NSE, Hazira ports, and industrial complexes across Gujarat.",
    stats: [
      { label: "Annual Visits", value: "15+ Trips" },
      { label: "Sectors Covered", value: "8 Industries" },
      { label: "Students Routed", value: "600+/Yr" }
    ],
    keyHighlights: [
      "Guided site tours demonstrating large-scale supply chain and inventory flows.",
      "Interactions with plant managers, HR leaders, and production experts.",
      "On-field understanding of industrial health, safety, and energy audits.",
      "Post-visit research report presentations graded directly by academic panels."
    ],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Visits to organizations like Adani Port, Amul, and L&T Heavy Engineering provide students a robust understanding of operational commerce."
  },
  "Academic Calendar": {
    title: "Academic Calendar",
    category: "Activities",
    subtitle: "A Structured Blueprint for Academic Success",
    description: "The Academic Calendar details the semester schedules, mid-term examinations, university evaluations, cultural fests, expert lectures, and designated public holidays. It allows students to manage their terms seamlessly.",
    stats: [
      { label: "Semester Weeks", value: "15-18 Weeks" },
      { label: "Continuous Evaluation", value: "Fully Tracked" },
      { label: "Revision Sessions", value: "2 Weeks" }
    ],
    keyHighlights: [
      "Clearly charted slots for mid-semester internal and university final examinations.",
      "Dedicated preparation times and project review presentation windows.",
      "Stated schedule of sports weeks and youth festival dates.",
      "Instant real-time integration with VNSGU university notification circles."
    ],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200",
    extraDetails: "Our system guarantees that students are never caught off guard, providing balanced schedules for academics, events, and family vacations."
  }
};
