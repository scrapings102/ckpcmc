import { cdn } from '../utils/image';
import principalImg from '../assets/images/principal.png';

export interface StaffMember {
  name: string;
  designation: string;
  qualification: string;
  experience: string;
  area_of_interest: string;
  email: string;
  image_url: string;
  isTeaching?: boolean;
}

export interface CommitteeMember {
  role?: string;
  committee_role?: string;
  name: string;
  designation?: string;
  contact?: string;
}

export interface AchievementItem {
  title: string;
  image_url: string;
  date: string;
  description: string;
  students: string;
  hashtags: string;
}

export interface EventItem {
  title: string;
  image_url: string;
  date: string;
  venue_description: string;
  coordinators: string;
  document_link?: string;
}

export interface NewsItem {
  title: string;
  description: string;
  link: string;
  icon_image?: string;
}

const _STAFF_MEMBERS: StaffMember[] = [
  {
    name: "Dr. Chaitanya Desai",
    designation: "Campus Director",
    qualification: "Ph.D (IIT Kanpur), M.E (Mechanical), B.E (Production)",
    experience: "22 years+",
    area_of_interest: "Experimental Stress Analysis, Mechanics of Composite materials, Dynamics of Rigid Bodies, Contact and Impact mechanics, Fracture Mechanics",
    email: "chaitanya.desai@ckpcet.ac.in",
    image_url: "https://ckpcmc.org/images/00%20Dr.Chaitanya%20Desai-%20Director.jpeg",
    isTeaching: true
  },
  {
    name: "Dr. Chetan Chhotubhai Patel",
    designation: "Principal",
    qualification: "PhD, NET, Mphil, Mcom, Bcom, B.ed",
    experience: "19 Years+",
    area_of_interest: "Financial Accounting, Managerial Accounting, Cost Management, Analysis of Financial statements, Banking sector",
    email: "principal_469@vnsgu.ac.in",
    image_url: principalImg,
    isTeaching: true
  },
  {
    name: "Dr. Marteenkumar H Patel",
    designation: "Assistant Professor",
    qualification: "B.COM, MBA (FIN), NET, PH.D",
    experience: "9 years Teaching & 7 years Industry experience",
    area_of_interest: "Management & Finance",
    email: "drmarteenpatel@gmail.com",
    image_url: "https://ckpcmc.org/images/MP.jpeg",
    isTeaching: true
  },
  {
    name: "Mr. Hitesh B Vora",
    designation: "Assistant Professor & Head of Department (HOD)",
    qualification: "Ph.D. (Pursuing), MCA, NET",
    experience: "4+ years Asst. Prof & 8+ years teaching",
    area_of_interest: "Bigdata Analytics, AI, ML, Cloud Computing, Image Processing",
    email: "hv.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/HV.jpeg",
    isTeaching: true
  },
  {
    name: "Mr. Gaurang A Joshi",
    designation: "Assistant Professor",
    qualification: "PhD Pursuing, NET, M.Sc.IT",
    experience: "15+ Years",
    area_of_interest: "Natural Language Processing, Machine Learning, Cyber Security",
    email: "gaurangjo@gmail.com",
    image_url: "https://ckpcmc.org/images/GJ.jpeg",
    isTeaching: true
  },
  {
    name: "Mrs. Jigisha S. Aacharya",
    designation: "Assistant Professor",
    qualification: "Ph.D. (Pursuing), GSET, MCA",
    experience: "14+ yrs.",
    area_of_interest: "Computer Applications & Systems",
    email: "jigisha.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/JA.jpeg",
    isTeaching: true
  },
  {
    name: "Dr. Ami S. Desai",
    designation: "Assistant Professor",
    qualification: "Ph.D., MCA, B.Sc",
    experience: "23+ years",
    area_of_interest: "Cyber security and Software Engineering",
    email: "drami.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/DC6CD013-211F-4AD4-9C47-C44508270F61.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Sneha Yashpal Nandwani",
    designation: "Assistant Professor",
    qualification: "PhD (Pursing), NET, MBA, PGDHRM, BBA",
    experience: "7+ years",
    area_of_interest: "Marketing Management",
    email: "snehanandwani56@gmail.com",
    image_url: "https://ckpcmc.org/images/SN.jpeg",
    isTeaching: true
  },
  {
    name: "Dr. Varsha D Gondaliya",
    designation: "Assistant Professor",
    qualification: "Ph. D, DIEM, MBA, BBA",
    experience: "15.01 years",
    area_of_interest: "Behavioural Finance",
    email: "gondaliya.varsha@gmail.com",
    image_url: "https://ckpcmc.org/images/VG.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Rashmi Dinesh Nayak",
    designation: "Assistant Professor",
    qualification: "MBA(Finance), GSET",
    experience: "2 years",
    area_of_interest: "Finance & Corporate Communication",
    email: "nayakrashmi021@gmail.com",
    image_url: "https://ckpcmc.org/images/RN.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Simran Shyamsunder Gangwani",
    designation: "Assistant Professor",
    qualification: "Ph.D (Pursuing), CFA(US), UGC NET, M.COM, B.COM",
    experience: "3+ years teaching, 1 yr Industry",
    area_of_interest: "Finance, Share Market, Behavioral Finance, Macroeconomics",
    email: "simranckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/SSG.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Krishna N. Khandwala",
    designation: "Assistant Professor",
    qualification: "Ph.D (Pursuing), NET, DBA, M.Sc.(I.T)",
    experience: "17+ Years",
    area_of_interest: "Information Technology & Web Systems",
    email: "krishna.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/KK.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Himisha Hemant Kawedia",
    designation: "Adhoc-Lecturer",
    qualification: "M.com (Financial accounting), Gset, PGDHRM, PGDRM",
    experience: "4+ years",
    area_of_interest: "Financial Accounting",
    email: "Jainy7503@gmail.com",
    image_url: "https://ckpcmc.org/images/HH.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Hetal Ketankumar Shrimali",
    designation: "Adhoc - Lecturer",
    qualification: "Ph.D(Pursuing), MCA, BCA",
    experience: "2 yrs",
    area_of_interest: "Networking, Web Designing, Software Engineering",
    email: "hetal.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/HS.jpeg",
    isTeaching: true
  },
  {
    name: "Mrs. Hetal Devesh Mehta",
    designation: "Adhoc-Lecturer",
    qualification: "M.Sc.IT, Ph.D(pursuing)",
    experience: "2 years",
    area_of_interest: "Information Technology",
    email: "mehtahetal1687@gmail.com",
    image_url: "https://ckpcmc.org/images/HM.jpeg",
    isTeaching: true
  },
  {
    name: "Mrs. Nimisha Sandeep Kumar Morker",
    designation: "Adhoc-Lecturer",
    qualification: "MCA, B.Ed, Ph.D(pursuing)",
    experience: "2 years",
    area_of_interest: "Computer Science",
    email: "nishamorker1512@gmail.com",
    image_url: "https://ckpcmc.org/images/NM.jpeg",
    isTeaching: true
  },
  {
    name: "Mr. Dipan Manaharlal Naik",
    designation: "Adhoc-Lecturer",
    qualification: "MCA, MCSA, Ph.D Pursuing",
    experience: "15 years",
    area_of_interest: "Computer Networks & Systems Administration",
    email: "dipannaik26@gmail.com",
    image_url: "https://ckpcmc.org/images/DN.jpeg",
    isTeaching: true
  },
  {
    name: "Mr. Kalpesh Ramavatar Gupta",
    designation: "Adhoc-Physical Instructor",
    qualification: "BCOM, B.P.ED., M.P.ED, C.Y.S., G-SET, Ph.D. Pursuing",
    experience: "6 years",
    area_of_interest: "Sports Management, Coaching - Yogasana, Basketball",
    email: "kalpesh.guptakooh@gmail.com",
    image_url: "https://ckpcmc.org/images/KG.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Apexa Sanketkumar Patel",
    designation: "Adhoc-Lecturer",
    qualification: "Ph.D (pursuing), B.Ed, M.A",
    experience: "13 years",
    area_of_interest: "Cultural events management, Communication, Personality Development",
    email: "pal.apexa@gmail.com",
    image_url: "https://ckpcmc.org/images/APX.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Khushi Miraj Bhajiwala",
    designation: "Adhoc-Lecturer",
    qualification: "PhD (Pursing), Baccalaureate (French), MA (Gold Medalist)",
    experience: "1 year 8 months",
    area_of_interest: "Literature, Comparative Literature, French Translation",
    email: "khushimbhajiwala@gmail.com",
    image_url: "https://ckpcmc.org/images/KB.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Ruchita Bharatbhai Lodaliya",
    designation: "Adhoc-Lecturer",
    qualification: "PhD. (Pursing), MBA (Finance)",
    experience: "3+ years",
    area_of_interest: "Financial Management, Economics, Investment Behaviour",
    email: "ruchita.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/RL.JPG",
    isTeaching: true
  },
  {
    name: "Mr. Ambuj Shmabhunath Mishra",
    designation: "Adhoc-Lecturer",
    qualification: "M.B.A (Finance), M.Com (Finance and Accounting)",
    experience: "1 year",
    area_of_interest: "Finance & Accounting",
    email: "AMBUJMISHTA1911@GMAIL.COM",
    image_url: "https://ckpcmc.org/images/AM.jpeg",
    isTeaching: true
  },
  {
    name: "Mr. Neel MukeshKumar Mali",
    designation: "Adhoc-Lecturer",
    qualification: "B.Com, M.Com, GSET, NET",
    experience: "6+ years",
    area_of_interest: "Financial & Management Accountancy",
    email: "neel.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/NNM.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Komal Shaileshbhai Vyas",
    designation: "Adhoc-Lecturer",
    qualification: "M.com (Financial accounting), GSET, NET",
    experience: "3 years",
    area_of_interest: "Financial Accounting",
    email: "komal.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/KV.jpeg",
    isTeaching: true
  },
  {
    name: "Mr. Dhruv J Desai",
    designation: "Adhoc-Lecturer",
    qualification: "M.com (Financial accounting), B.Com",
    experience: "1 year",
    area_of_interest: "Financial Accounting",
    email: "dhruvdesaid@gmail.com",
    image_url: "https://ckpcmc.org/images/DJD.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Kashish Nandkishor Gupta",
    designation: "Adhoc-Lecturer",
    qualification: "M.com (Financial accounting), B.com, NET",
    experience: "1 year",
    area_of_interest: "Financial Accounting",
    email: "gkashish1109@gmail.com",
    image_url: "https://ckpcmc.org/images/GNK.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Nisha Jayeshkumar Tollawala",
    designation: "Adhoc-Lecturer",
    qualification: "PhD pursuing, NET, M.B.A (Finance), B.Com",
    experience: "5 Years",
    area_of_interest: "Finance & Management",
    email: "nishatollawalackpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/NJT.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Unnati Sanjaybhai Patel",
    designation: "Adhoc-Lecturer",
    qualification: "M.com (Financial accounting), GSET, NET",
    experience: "2 years",
    area_of_interest: "Economics and Financial Accounting, Financial Management",
    email: "unnatickpcmc22@gmail.com",
    image_url: "https://ckpcmc.org/images/UP.jpeg",
    isTeaching: true
  },
  {
    name: "Ms. Simran Sunilbhai Bhagat",
    designation: "Adhoc-Librarian",
    qualification: "M.com, M.L.I.Sc",
    experience: "Library Management Specialist",
    area_of_interest: "Library Information Systems",
    email: "simranbhagat46@gmail.com",
    image_url: "https://ckpcmc.org/images/SB.jpeg",
    isTeaching: false
  },
  {
    name: "Mr. Pankaj Rajput",
    designation: "Head Clerk",
    qualification: "Administration Lead",
    experience: "10+ years",
    area_of_interest: "College Administration & Student Records",
    email: "pankaj.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/PR.jpeg",
    isTeaching: false
  },
  {
    name: "Mrs. Vaishali Rajkumar Patel",
    designation: "Jr. Clerk",
    qualification: "B.Com",
    experience: "2 years",
    area_of_interest: "Student Documentation & Verification",
    email: "rajkumar7877.rk@gmail.com",
    image_url: "https://ckpcmc.org/images/VR.jpeg",
    isTeaching: false
  },
  {
    name: "Mr. Sadanand Mishra",
    designation: "Jr. Clerk",
    qualification: "Administration",
    experience: "5+ years",
    area_of_interest: "Office Administration",
    email: "sadanand.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/SM.jpeg",
    isTeaching: false
  },
  {
    name: "Ms. Prapti Vinuskumar Patel",
    designation: "Clerk",
    qualification: "M.com",
    experience: "5 Years",
    area_of_interest: "Accounts & VNSGU Filings",
    email: "Praptipatel7781@gmail.com",
    image_url: "https://ckpcmc.org/images/PP.jpeg",
    isTeaching: false
  },
  {
    name: "Mr. Keyur Patel",
    designation: "Lab Assistant",
    qualification: "M.Com",
    experience: "4+ years",
    area_of_interest: "Computer Laboratory Operations",
    email: "keyur.ckpcmc@gmail.com",
    image_url: "https://ckpcmc.org/images/KP.jpeg",
    isTeaching: false
  },
  {
    name: "Mr. Regan Bhandari",
    designation: "Peon",
    qualification: "Support Staff",
    experience: "Support",
    area_of_interest: "Campus Support",
    email: "",
    image_url: "https://ckpcmc.org/images/RB.jpeg",
    isTeaching: false
  },
  {
    name: "Mr. Jesal Patel",
    designation: "Peon",
    qualification: "Support Staff",
    experience: "Support",
    area_of_interest: "Campus Support",
    email: "",
    image_url: "https://ckpcmc.org/images/09-Mr.Jesal%20Patel.jpeg",
    isTeaching: false
  },
  {
    name: "Mr. Janam Dhodiya",
    designation: "Peon",
    qualification: "Support Staff",
    experience: "Support",
    area_of_interest: "Campus Support",
    email: "",
    image_url: "https://ckpcmc.org/images/JD.jpeg",
    isTeaching: false
  },
  {
    name: "Mr. Jaimin S Dhodiya",
    designation: "Peon",
    qualification: "10th Pass",
    experience: "1 year",
    area_of_interest: "Campus Maintenance",
    email: "jaimindhodiya671@gmail.com",
    image_url: "https://ckpcmc.org/images/JSD.jpeg",
    isTeaching: false
  },
  {
    name: "Mrs. Pooja Patel",
    designation: "Peon",
    qualification: "Support Staff",
    experience: "Support",
    area_of_interest: "Campus Support",
    email: "",
    image_url: "https://ckpcmc.org/images/PUP.jpeg",
    isTeaching: false
  }
];

export const COMMITTEES_DATA = {
  anti_ragging: [
    { role: "I/C Principal", name: "Dr. Marteenkumar Patel", contact: "7383804620" },
    { role: "Civil Administration Rep.", name: "Member-Civil Administration", contact: "0261-2665800" },
    { role: "Police In-Charge Rep.", name: "Member-Police Administrative", contact: "0261-2251010" },
    { role: "Local Media Rep.", name: "Mr. Mihir Pathak", contact: "9327511695" },
    { role: "N.G.O Representative", name: "Ms. Janhvi Shah", contact: "9998776909" },
    { role: "Faculty Representatives", name: "Gaurang Joshi, Dr. Varsha Gondaliya, Dipan Naik, Krishna Khandwala, Khushi Bhajiwala", contact: "9106016234 / 9714679796 / 9429473536" },
    { role: "Parents Representative", name: "Pintubhai", contact: "7383804620" },
    { role: "Non-Teaching Rep.", name: "Mr. Pankaj Rajput", contact: "8460101665" },
    { role: "Student Representatives", name: "Patel Heer, Patel Richa", contact: "7043633921 / 9313243088" }
  ],
  st_sc_cell: [
    { name: "Prof. Jigisha Acharya", designation: "Asst. Professor" },
    { name: "Dr. Ami Desai", designation: "Asst. Professor" },
    { name: "Ambuj Mishra", designation: "Asst. Professor" },
    { name: "Pankaj Rajput", designation: "Head Clerk" },
    { name: "Vaishali Patel", designation: "Jr. Clerk" }
  ],
  sexual_harassment: [
    { name: "Prof. Gaurang Joshi", committee_role: "Member", designation: "Asst. Prof." },
    { name: "Dr. Ami Desai", committee_role: "Member", designation: "Asst. Prof." },
    { name: "Reshma D. Patel", committee_role: "Member", designation: "Asst. Prof." },
    { name: "Apexa S. Patel", committee_role: "Member", designation: "Asst. Prof." }
  ]
};

const _GALLERY_IMAGES: Record<string, string[]> = {
  sports: [
    "https://ckpcmc.org/images/sport_01.jpeg",
    "https://ckpcmc.org/images/sport_02.jpeg",
    "https://ckpcmc.org/images/sport_03.jpeg",
    "https://ckpcmc.org/images/sport_04.jpeg",
    "https://ckpcmc.org/images/sport_05.jpeg",
    "https://ckpcmc.org/images/sport_06.jpeg",
    "https://ckpcmc.org/images/sport_07.jpeg",
    "https://ckpcmc.org/images/sport_08.jpeg",
    "https://ckpcmc.org/images/sport_09.jpeg",
    "https://ckpcmc.org/images/sport_10.jpeg",
    "https://ckpcmc.org/images/sport_11.jpeg"
  ],
  hostel: [
    "https://ckpcmc.org/images/stationary.jpg",
    "https://ckpcmc.org/images/stationary2.jpg"
  ],
  canteen: [
    "https://ckpcmc.org/images/canteen.jpg"
  ],
  classrooms: [
    "https://ckpcmc.org/images/classroom2.jpg",
    "https://ckpcmc.org/images/classrooms.jpg"
  ],
  "inter-college": [
    "https://ckpcmc.org/images/inter_01.jpeg",
    "https://ckpcmc.org/images/inter_02.jpeg",
    "https://ckpcmc.org/images/inter_03.jpeg",
    "https://ckpcmc.org/images/inter_04.jpeg",
    "https://ckpcmc.org/images/inter_05.jpeg",
    "https://ckpcmc.org/images/inter_06.jpeg",
    "https://ckpcmc.org/images/inter_07.jpeg",
    "https://ckpcmc.org/images/inter_08.jpeg",
    "https://ckpcmc.org/images/inter_09.jpeg",
    "https://ckpcmc.org/images/inter_10.jpeg",
    "https://ckpcmc.org/images/inter_11.jpeg",
    "https://ckpcmc.org/images/inter_12.jpeg",
    "https://ckpcmc.org/images/inter_13.jpeg",
    "https://ckpcmc.org/images/inter_14.jpeg",
    "https://ckpcmc.org/images/inter_15.jpeg",
    "https://ckpcmc.org/images/inter_16.jpeg"
  ],
  competitions: [
    "https://ckpcmc.org/images/comp_01.jpeg",
    "https://ckpcmc.org/images/comp_02.jpeg",
    "https://ckpcmc.org/images/comp_03.jpeg",
    "https://ckpcmc.org/images/comp_04.jpeg",
    "https://ckpcmc.org/images/comp_05.jpeg",
    "https://ckpcmc.org/images/comp_06.jpeg",
    "https://ckpcmc.org/images/comp_07.jpeg",
    "https://ckpcmc.org/images/comp_08.jpeg",
    "https://ckpcmc.org/images/comp_09.jpeg",
    "https://ckpcmc.org/images/comp_10.jpeg",
    "https://ckpcmc.org/images/comp_11.jpeg",
    "https://ckpcmc.org/images/comp_12.jpeg",
    "https://ckpcmc.org/images/comp_13.jpeg",
    "https://ckpcmc.org/images/comp_14.jpeg",
    "https://ckpcmc.org/images/comp_15.jpeg"
  ],
  gallery: [
    "https://ckpcmc.org/images/gal_01.jpeg",
    "https://ckpcmc.org/images/gal_02.jpeg",
    "https://ckpcmc.org/images/gal_03.jpeg",
    "https://ckpcmc.org/images/gal_04.jpeg",
    "https://ckpcmc.org/images/gal_05.jpeg",
    "https://ckpcmc.org/images/gal_06.jpeg",
    "https://ckpcmc.org/images/gal_07.jpeg",
    "https://ckpcmc.org/images/gal_08.jpeg",
    "https://ckpcmc.org/images/gal_09.jpeg",
    "https://ckpcmc.org/images/gal_10.jpeg",
    "https://ckpcmc.org/images/gal_11.jpeg",
    "https://ckpcmc.org/images/gal_12.jpeg",
    "https://ckpcmc.org/images/gal_13.jpeg",
    "https://ckpcmc.org/images/gal_14.jpeg",
    "https://ckpcmc.org/images/gal_15.jpeg"
  ],
  "media-appreciation": [
    "https://ckpcmc.org/images/med_01.jpeg",
    "https://ckpcmc.org/images/med_02.jpeg",
    "https://ckpcmc.org/images/med_03.jpeg",
    "https://ckpcmc.org/images/med_04.jpeg",
    "https://ckpcmc.org/images/med_05.jpeg",
    "https://ckpcmc.org/images/med_06.jpeg",
    "https://ckpcmc.org/images/med_07.jpeg",
    "https://ckpcmc.org/images/med_08.jpeg",
    "https://ckpcmc.org/images/med_09.jpeg",
    "https://ckpcmc.org/images/med_10.jpeg",
    "https://ckpcmc.org/images/med_11.jpeg",
    "https://ckpcmc.org/images/med_12.jpeg",
    "https://ckpcmc.org/images/med_13.jpeg",
    "https://ckpcmc.org/images/med_14.jpeg"
  ]
};

const _ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: "Chess Competition Victory",
    image_url: "https://ckpcmc.org/images/ch.jpg",
    date: "2024-09-03",
    description: "Organized in C. K. Pithawalla College of Commerce-Management-Computer Application for B.C.A, B.B.A, B.COM students.",
    students: "SHLOK SARANG, PATEL VATSAL, GOSWAMI NILESH, JIKADRA JEMISH, SNEH VASANI, VED THUMMER",
    hashtags: "#Chess #ckpcmc #Achievement #Competition #VNSGU"
  },
  {
    title: "Aluna Competition — Tattoo Art",
    image_url: "https://ckpcmc.org/images/WhatsApp%20Image%202024-07-19%20at%208.55.10%20AM%20(3).jpeg",
    date: "2024-09-03",
    description: "Traditional tattoo design competition organized in D4 Building on campus.",
    students: "Dhalaria Pranav (TYBBA)",
    hashtags: "#Tattoo #traditional #aluna #ckpcmc #achievement"
  },
  {
    title: "Aluna Competition — Nail Art",
    image_url: "https://ckpcmc.org/images/WhatsApp%20Image%202024-07-19%20at%208.55.12%20AM%20(1).jpeg",
    date: "2024-09-03",
    description: "Creative nail art showcase held during campus cultural festival.",
    students: "Dakhara Yami (TYBCA), Mithusu Sorathiya (FY), Palak Deladia (FY)",
    hashtags: "#NailArt #traditional #aluna #ckpcmc #achievement"
  },
  {
    title: "Aluna Competition — Traditional Wear",
    image_url: "https://ckpcmc.org/images/WhatsApp%20Image%202024-07-19%20at%208.55.11%20AM.jpeg",
    date: "2024-09-03",
    description: "Cultural traditional attire contest celebrating regional heritage.",
    students: "Tejas Solanki (TYBBA), Jariwala Jenisha (SYBCA), Payal Singh (SYBCA), Kabrawala Krishna (FYBBA)",
    hashtags: "#traditional #aluna #ckpcmc #achievement"
  },
  {
    title: "Aluna Competition — Mehendi",
    image_url: "https://ckpcmc.org/images/winer.jpg",
    date: "2024-09-03",
    description: "Traditional Mehendi artistry competition across all course batches.",
    students: "Patel Priya (FYBCA), Dakhara Yami (TYBCA), Kapadiya Khushi (FYBBA)",
    hashtags: "#mehendi #aluna #ckpcmc #winners"
  }
];

const _EVENTS_DATA: EventItem[] = [
  {
    title: "Poetry Recitation Competition",
    image_url: "https://ckpcmc.org/images/WhatsApp%20Image%202024-09-09%20at%209.58.07%20PM.jpeg",
    date: "2024-09-09",
    venue_description: "J.Z. Shah Arts & H.P. Desai Commerce College, Amroli",
    coordinators: "Ms. Krishna Khandwala, Ms. Hetal Shrimali, Ms. Apexa Patel, Ms. Rashmi Nayak",
    document_link: "https://drive.google.com/file/d/1unteCvAMBXIeob8YwzEjohm4e3SoQ7XW/view?usp=sharing"
  },
  {
    title: "Teacher's Day Celebration",
    image_url: "https://ckpcmc.org/images/Picture1.jpg",
    date: "2024-09-05",
    venue_description: "CKPCMC Seminar hall. Acknowledging and honoring faculty contributions to quality higher education.",
    coordinators: "Dr. Tanvi Patel, Ms. Payal Mehta, Ms. Hetal Mehta, Ms. Himisha Kawedia, Ms. Ruchita Lodaliya, Ms. Khushi",
    document_link: "https://drive.google.com/file/d/1niCj5zjus5so8uanayppsqm2tcHeyfLo/view?usp=sharing"
  },
  {
    title: "Inter-College Boxing Competition",
    image_url: "https://ckpcmc.org/images/IMG_20240902_104824.jpg",
    date: "2024-09-02",
    venue_description: "Organized by V.N.S.G.U. Platform for students to show boxing skills in men's tournament.",
    coordinators: "Mr. Kalpesh Gupta",
    document_link: "https://drive.google.com/file/d/1CNY_UHMTDssG1GHcd8FYNgVk3MW_HqZ7/view?usp=sharing"
  },
  {
    title: "Debate Competition",
    image_url: "https://ckpcmc.org/images/WhatsApp%20Image%202024-08-31%20at%202.54.48%20PM.jpeg",
    date: "2024-08-31",
    venue_description: "In Campus. Enhances critical thinking, public speaking, poise, and structured argumentation.",
    coordinators: "Dr. Tanvi Patel, Ms. Payal Mehta, Ms. Hetal Mehta, Ms. Himisha Kawedia, Ms. Ruchita Lodaliya",
    document_link: "https://drive.google.com/file/d/1OSbn6xjtZZ4VrQf3VcxW7Gt_OrYQ5FOG/view?usp=sharing"
  }
];

const _NEWS_DATA: NewsItem[] = [
  {
    title: "Sanklan : Inter College Competition",
    description: "Inter College Competition event details & guidelines for participating teams.",
    link: "https://drive.google.com/file/d/1E5I625kpoGE0KNTlcV5G23pRlq8aBDqV/view?usp=sharing",
    icon_image: "https://ckpcmc.org/images/new.gif"
  },
  {
    title: "Application Form For Associate Professor",
    description: "Official recruitment notice and downloadable application form for Associate Professor positions.",
    link: "https://drive.google.com/file/d/1O7w1G-sUqDUZkg4NF5sSkxVyBLbWAJ1S/view",
    icon_image: "https://ckpcmc.org/images/new.gif"
  },
  {
    title: "Application Form for Assistant Professor",
    description: "Official recruitment notice and downloadable application form for Assistant Professor positions.",
    link: "https://drive.google.com/file/d/1T5bdugIxF3l5L1SqXJO24x-CBJBX7X9y/view",
    icon_image: "https://ckpcmc.org/images/new.gif"
  }
];

export const STAFF_MEMBERS: StaffMember[] = _STAFF_MEMBERS.map((member) => ({
  ...member,
  image_url: cdn(member.image_url, 800, 90),
}));

export const GALLERY_IMAGES: Record<string, string[]> = Object.fromEntries(
  Object.entries(_GALLERY_IMAGES).map(([key, urls]) => [
    key,
    urls.map((url) => cdn(url, 1000, 90)),
  ])
);

export const ACHIEVEMENTS_DATA: AchievementItem[] = _ACHIEVEMENTS_DATA.map((item) => ({
  ...item,
  image_url: cdn(item.image_url, 800, 90),
}));

export const EVENTS_DATA: EventItem[] = _EVENTS_DATA.map((item) => ({
  ...item,
  image_url: cdn(item.image_url, 800, 90),
}));

export const NEWS_DATA: NewsItem[] = _NEWS_DATA.map((item) => ({
  ...item,
  icon_image: item.icon_image ? cdn(item.icon_image, 200, 90) : undefined,
}));

