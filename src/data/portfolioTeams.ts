export interface PortfolioMember {
  name: string;
  role: string;
  dept?: string;
  rollNo?: string;
  image?: string;
}

export interface PortfolioTeam {
  id: string;
  title: string;
  blurb: string;
  cardImage: string;
  lead: PortfolioMember;
  members: PortfolioMember[];
}

export const PORTFOLIO_TEAMS: Record<string, PortfolioTeam> = {
  Designing: {
    id: "designing",
    title: "Designing",
    blurb: "Every poster, identity and visual that carries the Aarna name.",
    cardImage: "/gallery/present_ternure/Ravi Teja Designing Lead.jpeg",
    lead: {
      name: "D Ravi Teja",
      role: "Designing Lead",
      dept: "CSB",
      rollNo: "24p61a3249",
      image: "/gallery/present_ternure/Ravi Teja Designing Lead.jpeg",
    },
    members: [
      {
        name: "E Likkitha",
        role: "Designing Co-Lead",
        dept: "CSD",
        rollNo: "24P61A6754",
        image: "/gallery/present_ternure/likkitha Designing Co-Lead.jpeg",
      },
      {
        name: "Dharma Vardhan",
        role: "Designing Coordinator",
        dept: "CSM",
        rollNo: "25p65a6615",
        image: "/gallery/present_ternure/Dharma Vardhan-Designing coordinator.jpeg",
      },
      {
        name: "Satwik E",
        role: "Designing OC",
        dept: "CSC A",
        rollNo: "25p61a6232",
        image: "/gallery/present_ternure/Sathwik_Design.png",
      },
      {
        name: "K. Meghana",
        role: "Designing OC",
        dept: "CSD B",
        rollNo: "25p61a6780",
        image: "/gallery/present_ternure/meghana designing oc.jpeg",
      },
      {
        name: "Sai Jesvanth",
        role: "Designing OC",
        dept: "CSB A",
        rollNo: "25p61a3229",
        image: "/gallery/present_ternure/SaiJesvanth-Designing.jpeg",
      },
    ],
  },

  Documentation: {
    id: "documentation",
    title: "Documentation",
    blurb: "Reports, records and the paperwork that keeps us official.",
    cardImage: "/gallery/present_ternure/naveen-documentation lead.jpeg",
    lead: {
      name: "D Naveen Raj",
      role: "Documentation Lead",
      dept: "CSM",
      rollNo: "24p61a6647",
      image: "/gallery/present_ternure/naveen-documentation lead.jpeg",
    },
    members: [
      {
        name: "Deekshitha",
        role: "Documentation Co-Lead",
        dept: "CSD",
        rollNo: "24P61A67I0",
        image: "/gallery/present_ternure/Deekshitha - Documentation Co lead.jpg",
      },
      {
        name: "Darshan D",
        role: "Documentation OC",
        dept: "CSB A",
        rollNo: "25p61a3211",
        image: "/gallery/present_ternure/Darshan-Documentation.jpg",
      },
      {
        name: "Abhinav",
        role: "Documentation OC",
        dept: "CSC A",
        rollNo: "25p61a6243",
        image: "/gallery/present_ternure/J_Abhinav-Documentation.jpg",
      },
      {
        name: "Pallavi",
        role: "Documentation OC",
        dept: "IT B",
        rollNo: "25p61a1291",
        image: "/gallery/present_ternure/Pallavi-Documentation.jpg",
      },
      {
        name: "Sharanya B",
        role: "Documentation OC",
        dept: "CSC B",
        rollNo: "25p61a6297",
        image: "/gallery/present_ternure/Sharanya Baranwal - Documentation.png",
      },
    ],
  },

  SMB: {
    id: "smb",
    title: "SMB",
    blurb: "Social media and brand presence across every platform.",
    cardImage: "/gallery/present_ternure/A.KALYAN - SMP CO-LEAD.jpg",
    lead: {
      name: "A Kalyan",
      role: "SMP Co-Lead",
      dept: "CSB",
      rollNo: "24p61a3203",
      image: "/gallery/present_ternure/A.KALYAN - SMP CO-LEAD.jpg",
    },
    members: [
      {
        name: "B Rejoy",
        role: "SMP Lead",
        dept: "CSB",
        rollNo: "24p61a3251",
      },
      {
        name: "Isaac Tony",
        role: "SMP OC",
        dept: "CSE A",
        rollNo: "25p61a0524",
        image: "/gallery/present_ternure/Isaac-SMP.jpg",
      },
      {
        name: "Sisera",
        role: "SMP OC",
        dept: "CSD C",
        rollNo: "25p61a67G3",
        image: "/gallery/present_ternure/Sisera - SMP.jpg",
      },
      {
        name: "Alekhya A",
        role: "SMP OC",
        dept: "CSD A",
        rollNo: "25p61a6707",
        image: "/gallery/present_ternure/Alekhya Ankani_SMP.jpg",
      },
    ],
  },

  Sponsorship: {
    id: "sponsorship",
    title: "Sponsorship",
    blurb: "Partnerships, outreach and the funding behind each event.",
    cardImage: "/gallery/present_ternure/Kruthi-sponsershiplead.jpeg",
    lead: {
      name: "K Kruthi",
      role: "Sponsorship Lead",
      dept: "CSB",
      rollNo: "24p61a3231",
      image: "/gallery/present_ternure/Kruthi-sponsershiplead.jpeg",
    },
    members: [
      {
        name: "K Jyothsna",
        role: "Sponsorship Co-Lead",
        dept: "CSD",
        rollNo: "24p61a6789",
        image: "/gallery/present_ternure/Jyothsna_ Sponsorship.jpg",
      },
      {
        name: "Mithun",
        role: "Sponsorship OC",
        dept: "CSB A",
        rollNo: "25p61a3201",
        image: "/gallery/present_ternure/Mithun teja(sponsorship).jpg",
      },
      {
        name: "Rohan",
        role: "Sponsorship OC",
        dept: "CSB A",
        rollNo: "25p61a3210",
        image: "/gallery/present_ternure/Rohan-Sponsorship-oc.jpeg",
      },
    ],
  },

  Hospitality: {
    id: "hospitality",
    title: "Hospitality",
    blurb: "Guests, speakers and participants looked after end to end.",
    cardImage: "/gallery/present_ternure/Varsha Priya Hospitality Lead.jpeg",
    lead: {
      name: "Varsha Priya",
      role: "Hospitality Lead",
      dept: "CSB",
      rollNo: "24p61a3212",
      image: "/gallery/present_ternure/Varsha Priya Hospitality Lead.jpeg",
    },
    members: [
      {
        name: "Kripa Patel",
        role: "Hospitality Co-Lead",
        dept: "CSD",
        rollNo: "24P61A67A4",
        image: "/gallery/present_ternure/Kripa Patel - Hospitality Co-Lead.jpg",
      },
      {
        name: "Rutvika",
        role: "Hospitality Coordinator",
        dept: "CSD",
        rollNo: "24p61a67d7",
        image: "/gallery/present_ternure/M. Rutvika- Hospitality Coordinator.jpg",
      },
      {
        name: "Navya Sahithi",
        role: "Hospitality OC",
        dept: "ECE A",
        rollNo: "25p61a0424",
        image: "/gallery/present_ternure/NAVYA SAHITHI-HOSPITALITY.jpg",
      },
      {
        name: "Anushka B",
        role: "Hospitality OC",
        dept: "ECE A",
        rollNo: "25p61a0407",
        image: "/gallery/present_ternure/ANUSHKA BHUVAKAR -HOSPITALITY.jpg",
      },
      {
        name: "Harsha Teja",
        role: "Hospitality OC",
        dept: "CSM C",
        rollNo: "25p61a66D5",
        image: "/gallery/present_ternure/p.harsha Teja -hospatality.png",
      },
    ],
  },

  Marketing: {
    id: "marketing",
    title: "Marketing",
    blurb: "Campaigns, reach and getting the right people in the room.",
    cardImage: "/gallery/present_ternure/yashaswini_marketing.jpg",
    lead: {
      name: "Yashaswini",
      role: "Marketing Lead",
      dept: "CSB",
      rollNo: "24p61a3213",
      image: "/gallery/present_ternure/yashaswini_marketing.jpg",
    },
    members: [
      {
        name: "Sri Laxmi",
        role: "Marketing Co-Lead",
        dept: "CSD",
        rollNo: "24p61a6774",
        image: "/gallery/present_ternure/srilaxmi reddy gujjula-marketing.jpeg",
      },
      {
        name: "Shruti K",
        role: "Marketing OC",
        dept: "CSE D",
        rollNo: "25p61a05i8",
        image: "/gallery/present_ternure/Shruti - Marketing.jpg",
      },
      {
        name: "Revathi A",
        role: "Marketing OC",
        dept: "CSD A",
        rollNo: "25p61a6706",
        image: "/gallery/present_ternure/REVATHI-MARKETING.png",
      },
      {
        name: "Sreemayi",
        role: "Marketing OC",
        dept: "IT B",
        rollNo: "25p61a1288",
        image: "/gallery/present_ternure/sreemayi reddy - marketing.jpeg",
      },
      {
        name: "Amogh P",
        role: "Marketing OC",
        dept: "CSE A",
        rollNo: "25p61a0517",
        image: "/gallery/present_ternure/Amogh-Marketing.png",
      },
    ],
  },

  Production: {
    id: "production",
    title: "Production",
    blurb: "Stage, sound, capture and everything that makes a day run.",
    cardImage: "/gallery/present_ternure/Harshith production.jpeg",
    lead: {
      name: "R Harshith",
      role: "Production Co-Lead",
      dept: "CSM",
      rollNo: "24P61A66E7",
      image: "/gallery/present_ternure/Harshith production.jpeg",
    },
    members: [
      {
        name: "E Pawan",
        role: "Production Lead",
        dept: "CSB",
        rollNo: "24p61a3216",
      },
      {
        name: "Ashwin",
        role: "Production OC",
        dept: "CSE A",
        rollNo: "25p61a0516",
        image: "/gallery/present_ternure/ASHWIN REDDY-PRODUTION.jpg",
      },
      {
        name: "Deekshith",
        role: "Production OC",
        dept: "CSB A",
        rollNo: "25p61a3207",
        image: "/gallery/present_ternure/Deekshith Production OC.jpeg",
      },
    ],
  },

  Technical: {
    id: "technical",
    title: "Technical",
    blurb: "Platforms, tooling and the tech that powers the club.",
    cardImage: "/gallery/present_ternure/Shiva sai- Technical Lead.jpeg",
    lead: {
      name: "B Shiva Sai",
      role: "Technical Lead",
      dept: "CSB",
      rollNo: "24p61a3211",
      image: "/gallery/present_ternure/Shiva sai- Technical Lead.jpeg",
    },
    members: [
      {
        name: "Naseer",
        role: "Technical Co-Lead",
        dept: "CSB",
        rollNo: "24p61a3251",
        image: "/gallery/present_ternure/Naseer--colead Techinical.jpg",
      },
      {
        name: "Adhithya M",
        role: "Technical OC",
        dept: "CSM B",
        rollNo: "25p61a66B8",
        image: "/gallery/present_ternure/Adhithya-Technical.jpg",
      },
      {
        name: "Amurtha Varshini",
        role: "Technical OC",
        dept: "CSE F",
        rollNo: "25p61a05Q5",
        image: "/gallery/present_ternure/Amruthavarshini Veldi_Tech.jpg",
      },
      {
        name: "Karthik M",
        role: "Technical OC",
        dept: "CSM B",
        rollNo: "25p61a66B4",
        image: "/gallery/present_ternure/karthik-Technical.jpg",
      },
    ],
  },
};
