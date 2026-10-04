/**
 * Official Aarna 2026-27 Team Roster
 * Source: Core, Executive & Organizing Committee of Aarna 26-27 (VBIT)
 */

export interface TeamMember {
  name: string;
  portfolio: string;
  role: "Chair Person" | "Vice Chair Person" | "Secretary" | "Lead" | "Co-Lead" | "Coordinator" | "OC";
  rollNo: string;
  department: string;
  photoUrl?: string;
}

export const CORE_LEADERSHIP: TeamMember[] = [
  {
    name: "G Prashanth",
    portfolio: "Core Leadership",
    role: "Chair Person",
    rollNo: "24p61a3218",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/Prashanth-chair.jpeg",
  },
  {
    name: "V Manish Chary",
    portfolio: "Core Leadership",
    role: "Vice Chair Person",
    rollNo: "24p61a3260",
    department: "CSB",
  },
  {
    name: "G Karthikeya",
    portfolio: "Core Leadership",
    role: "Secretary",
    rollNo: "24p61a3217",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/Karthikeya-secretary.jpeg",
  },
];

export const EXECUTIVE_TEAM: TeamMember[] = [
  // Marketing
  {
    name: "Yashaswini",
    portfolio: "Marketing",
    role: "Lead",
    rollNo: "24p61a3213",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/yashaswini_marketing.jpg",
  },
  {
    name: "Sri Laxmi",
    portfolio: "Marketing",
    role: "Co-Lead",
    rollNo: "24p61a6774",
    department: "CSD",
    photoUrl: "/gallery/present_ternure/srilaxmi reddy gujjula-marketing.jpeg",
  },
  // Documentation
  {
    name: "D Naveen Raj",
    portfolio: "Documentation",
    role: "Lead",
    rollNo: "24p61a6647",
    department: "CSM",
    photoUrl: "/gallery/present_ternure/naveen-documentation lead.jpeg",
  },
  {
    name: "Deekshitha",
    portfolio: "Documentation",
    role: "Co-Lead",
    rollNo: "24P61A67I0",
    department: "CSD",
    photoUrl: "/gallery/present_ternure/Deekshitha - Documentation Co lead.jpg",
  },
  // Designing
  {
    name: "D Ravi Teja",
    portfolio: "Designing",
    role: "Lead",
    rollNo: "24p61a3249",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/Ravi Teja Designing Lead.jpeg",
  },
  {
    name: "E Likkitha",
    portfolio: "Designing",
    role: "Co-Lead",
    rollNo: "24P61A6754",
    department: "CSD",
    photoUrl: "/gallery/present_ternure/likkitha Designing Co-Lead.jpeg",
  },
  {
    name: "Dharma Vardhan",
    portfolio: "Designing",
    role: "Coordinator",
    rollNo: "25p65a6615",
    department: "CSM",
    photoUrl: "/gallery/present_ternure/Dharma Vardhan-Designing coordinator.jpeg",
  },
  // Hospitality
  {
    name: "Varsha Priya",
    portfolio: "Hospitality",
    role: "Lead",
    rollNo: "24p61a3212",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/Varsha Priya Hospitality Lead.jpeg",
  },
  {
    name: "Kripa Patel",
    portfolio: "Hospitality",
    role: "Co-Lead",
    rollNo: "24P61A67A4",
    department: "CSD",
    photoUrl: "/gallery/present_ternure/Kripa Patel - Hospitality Co-Lead.jpg",
  },
  {
    name: "Rutvika",
    portfolio: "Hospitality",
    role: "Coordinator",
    rollNo: "24p61a67d7",
    department: "CSD",
    photoUrl: "/gallery/present_ternure/M. Rutvika- Hospitality Coordinator.jpg",
  },
  // Sponsorship
  {
    name: "K Kruthi",
    portfolio: "Sponsorship",
    role: "Lead",
    rollNo: "24p61a3231",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/Kruthi-sponsershiplead.jpeg",
  },
  {
    name: "K Jyothsna",
    portfolio: "Sponsorship",
    role: "Co-Lead",
    rollNo: "24p61a6789",
    department: "CSD",
    photoUrl: "/gallery/present_ternure/Jyothsna_ Sponsorship.jpg",
  },
  // Production
  {
    name: "E Pawan",
    portfolio: "Production",
    role: "Lead",
    rollNo: "24p61a3216",
    department: "CSB",
  },
  {
    name: "R Harshith",
    portfolio: "Production",
    role: "Co-Lead",
    rollNo: "24P61A66E7",
    department: "CSM",
    photoUrl: "/gallery/present_ternure/Harshith production.jpeg",
  },
  // Technical
  {
    name: "B Shiva Sai",
    portfolio: "Technical",
    role: "Lead",
    rollNo: "24p61a3211",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/Shiva sai- Technical Lead.jpeg",
  },
  {
    name: "Naseer",
    portfolio: "Technical",
    role: "Co-Lead",
    rollNo: "24p61a3251",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/Naseer--colead Techinical.jpg",
  },
  // SMP
  {
    name: "B Rejoy",
    portfolio: "SMP",
    role: "Lead",
    rollNo: "24p61a3251",
    department: "CSB",
  },
  {
    name: "A Kalyan",
    portfolio: "SMP",
    role: "Co-Lead",
    rollNo: "24p61a3203",
    department: "CSB",
    photoUrl: "/gallery/present_ternure/A.KALYAN - SMP CO-LEAD.jpg",
  },
];

export const ORGANIZING_COMMITTEE: TeamMember[] = [
  // Marketing
  {
    name: "Shruti K",
    portfolio: "Marketing",
    role: "OC",
    rollNo: "25p61a05i8",
    department: "CSE D",
    photoUrl: "/gallery/present_ternure/Shruti - Marketing.jpg",
  },
  {
    name: "Revathi A",
    portfolio: "Marketing",
    role: "OC",
    rollNo: "25p61a6706",
    department: "CSD A",
    photoUrl: "/gallery/present_ternure/REVATHI-MARKETING.png",
  },
  {
    name: "Sreemayi",
    portfolio: "Marketing",
    role: "OC",
    rollNo: "25p61a1288",
    department: "IT B",
    photoUrl: "/gallery/present_ternure/sreemayi reddy - marketing.jpeg",
  },
  {
    name: "Amogh P",
    portfolio: "Marketing",
    role: "OC",
    rollNo: "25p61a0517",
    department: "CSE A",
    photoUrl: "/gallery/present_ternure/Amogh-Marketing.png",
  },
  // Documentation
  {
    name: "Pallavi",
    portfolio: "Documentation",
    role: "OC",
    rollNo: "25p61a1291",
    department: "IT B",
    photoUrl: "/gallery/present_ternure/Pallavi-Documentation.jpg",
  },
  {
    name: "Sharanya B",
    portfolio: "Documentation",
    role: "OC",
    rollNo: "25p61a6297",
    department: "CSC B",
    photoUrl: "/gallery/present_ternure/Sharanya Baranwal - Documentation.png",
  },
  {
    name: "Abhinav",
    portfolio: "Documentation",
    role: "OC",
    rollNo: "25p61a6243",
    department: "CSC A",
    photoUrl: "/gallery/present_ternure/J_Abhinav-Documentation.jpg",
  },
  {
    name: "Darshan D",
    portfolio: "Documentation",
    role: "OC",
    rollNo: "25p61a3211",
    department: "CSB A",
    photoUrl: "/gallery/present_ternure/Darshan-Documentation.jpg",
  },
  // Designing
  {
    name: "K. Meghana",
    portfolio: "Designing",
    role: "OC",
    rollNo: "25p61a6780",
    department: "CSD B",
    photoUrl: "/gallery/present_ternure/meghana designing oc.jpeg",
  },
  {
    name: "Satwik E",
    portfolio: "Designing",
    role: "OC",
    rollNo: "25p61a6232",
    department: "CSC A",
    photoUrl: "/gallery/present_ternure/Sathwik_Design.png",
  },
  {
    name: "Sai Jesvanth",
    portfolio: "Designing",
    role: "OC",
    rollNo: "25p61a3229",
    department: "CSB A",
    photoUrl: "/gallery/present_ternure/SaiJesvanth-Designing.jpeg",
  },
  // Sponsorship
  {
    name: "Rohan",
    portfolio: "Sponsorship",
    role: "OC",
    rollNo: "25p61a3210",
    department: "CSB A",
    photoUrl: "/gallery/present_ternure/Rohan-Sponsorship-oc.jpeg",
  },
  {
    name: "Mithun",
    portfolio: "Sponsorship",
    role: "OC",
    rollNo: "25p61a3201",
    department: "CSB A",
    photoUrl: "/gallery/present_ternure/Mithun teja(sponsorship).jpg",
  },
  // Hospitality
  {
    name: "Navya Sahithi",
    portfolio: "Hospitality",
    role: "OC",
    rollNo: "25p61a0424",
    department: "ECE A",
    photoUrl: "/gallery/present_ternure/NAVYA SAHITHI-HOSPITALITY.jpg",
  },
  {
    name: "Anushka B",
    portfolio: "Hospitality",
    role: "OC",
    rollNo: "25p61a0407",
    department: "ECE A",
    photoUrl: "/gallery/present_ternure/ANUSHKA BHUVAKAR -HOSPITALITY.jpg",
  },
  {
    name: "Harsha Teja",
    portfolio: "Hospitality",
    role: "OC",
    rollNo: "25p61a66D5",
    department: "CSM C",
    photoUrl: "/gallery/present_ternure/p.harsha Teja -hospatality.png",
  },
  // SMP
  {
    name: "Isaac Tony",
    portfolio: "SMP",
    role: "OC",
    rollNo: "25p61a0524",
    department: "CSE A",
    photoUrl: "/gallery/present_ternure/Isaac-SMP.jpg",
  },
  {
    name: "Sisera",
    portfolio: "SMP",
    role: "OC",
    rollNo: "25p61a67G3",
    department: "CSD C",
    photoUrl: "/gallery/present_ternure/Sisera - SMP.jpg",
  },
  {
    name: "Alekhya A",
    portfolio: "SMP",
    role: "OC",
    rollNo: "25p61a6707",
    department: "CSD A",
    photoUrl: "/gallery/present_ternure/Alekhya Ankani_SMP.jpg",
  },
  // Production
  {
    name: "Deekshith",
    portfolio: "Production",
    role: "OC",
    rollNo: "25p61a3207",
    department: "CSB A",
    photoUrl: "/gallery/present_ternure/Deekshith Production OC.jpeg",
  },
  {
    name: "Ashwin",
    portfolio: "Production",
    role: "OC",
    rollNo: "25p61a0516",
    department: "CSE A",
    photoUrl: "/gallery/present_ternure/ASHWIN REDDY-PRODUTION.jpg",
  },
  // Technical
  {
    name: "Amurtha Varshini",
    portfolio: "Technical",
    role: "OC",
    rollNo: "25p61a05Q5",
    department: "CSE F",
    photoUrl: "/gallery/present_ternure/Amruthavarshini Veldi_Tech.jpg",
  },
  {
    name: "Karthik M",
    portfolio: "Technical",
    role: "OC",
    rollNo: "25p61a66B4",
    department: "CSM B",
    photoUrl: "/gallery/present_ternure/karthik-Technical.jpg",
  },
  {
    name: "Adhithya M",
    portfolio: "Technical",
    role: "OC",
    rollNo: "25p61a66B8",
    department: "CSM B",
    photoUrl: "/gallery/present_ternure/Adhithya-Technical.jpg",
  },
];
