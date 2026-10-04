export type AarnaEvent = {
  id: string;
  title: string;
  tag: string;
  status: "completed" | "upcoming";
  date: string;
  venue: string;
  summary: string;
  details: string[];
  outcomes: string[];
  imageUrl?: string;
};

export const EVENTS: AarnaEvent[] = [
  {
    id: "skill-quest",
    title: "Skill Quest",
    tag: "Flagship · Season 01",
    status: "completed",
    date: "One-day event",
    venue: "Alanda Auditorium, VBIT",
    summary:
      "An event built on one question — you already have a skill, so how do you make a profit from it?",
    details: [
      "Skill Quest was created around the idea of turning passions into profits. Students came in with graphic design, marketing, photography, videography and video editing skills.",
      "The whole day ran on the students' own skills. Instead of lectures, the sessions worked through the real question: how do you take what you already do well and convert it into income?",
      "It was conducted as a one-day event in the Alanda Auditorium and was structured so every participant left with a concrete idea of how their skill earns.",
    ],
    outcomes: [
      "Students stop relying only on academics to define their future.",
      "Skills are taken seriously as a source of income, not just a hobby.",
      "Participants understand how to go deeper into a craft and grow a business from it.",
    ],
  },
  {
    id: "ishanya-26",
    title: "ISHANYA'26",
    tag: "Visualize. Create. Inspire.",
    status: "upcoming",
    date: "Coming soon",
    venue: "To be announced",
    summary: "Brands. Real briefs. Real work. Details are still being locked in.",
    details: [
      "ISHANYA'26 is our next big one — we bring in brands and put students on real work.",
      "The full format is still being finalised, so treat everything here as loading.",
    ],
    outcomes: ["Announcement dropping soon."],
    imageUrl: "/icons/ishanya26.svg",
  },
];

export type TeamName =
  | "Designing"
  | "Documentation"
  | "SMB"
  | "Sponsorship"
  | "Hospitality"
  | "Marketing"
  | "Production"
  | "Technical";

export const TEAMS: { name: TeamName; blurb: string }[] = [
  { name: "Designing", blurb: "Every poster, identity and visual that carries the Aarna name." },
  { name: "Documentation", blurb: "Reports, records and the paperwork that keeps us official." },
  { name: "SMB", blurb: "Social media and brand presence across every platform." },
  { name: "Sponsorship", blurb: "Partnerships, outreach and the funding behind each event." },
  { name: "Hospitality", blurb: "Guests, speakers and participants looked after end to end." },
  { name: "Marketing", blurb: "Campaigns, reach and getting the right people in the room." },
  { name: "Production", blurb: "Stage, sound, capture and everything that makes a day run." },
  { name: "Technical", blurb: "Platforms, tooling and the tech that powers the club." },
];

export const LEADERSHIP = [
  {
    role: "Chair Person",
    name: "G Prashanth",
    rollNo: "24p61a3218",
    dept: "CSB",
    imageUrl: "/gallery/present_ternure/Prashanth-chair.jpeg",
  },
  {
    role: "Vice Chair Person",
    name: "V Manish Chary",
    rollNo: "24p61a3260",
    dept: "CSB",
  },
  {
    role: "Secretary",
    name: "G Karthikeya",
    rollNo: "24p61a3217",
    dept: "CSB",
    imageUrl: "/gallery/present_ternure/Karthikeya-secretary.jpeg",
  },
];

export const FACULTY = {
  role: "Faculty Coordinator",
  name: "K. Keerthana",
  detail: "Assistant Professor | CSBS",
  imageUrl: "/gallery/present_ternure/faculty_coordinator.jpg",
};

export const OBJECTIVES = [
  {
    title: "Empower Students",
    body: "Enable students to identify their talents and transform them into profitable ventures.",
  },
  {
    title: "Enhance Skills",
    body: "Provide opportunities to sharpen and expand both technical and non-technical skill sets.",
  },
  {
    title: "Build Connections",
    body: "Foster a community where students network with real-world clients and professionals.",
  },
  {
    title: "Create Success Stories",
    body: "Help students build portfolios impressive enough to open new doors.",
  },
];

export type SkillArea = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  outcomes: string[];
  icon: string;
};

export const SKILLS: SkillArea[] = [
  {
    id: "designing",
    name: "Designing",
    tagline: "Visual identity & UI craft",
    description:
      "Graphic design, brand systems, layout engineering, poster creation, and UI/UX interfaces.",
    outcomes: ["Brand identity kits", "Client social assets", "UI mockups & design systems"],
    icon: "Palette",
  },
  {
    id: "video-editing",
    name: "Video Editing",
    tagline: "Motion & narrative production",
    description:
      "Timeline editing, color grading, sound design, event highlights, and social video reels.",
    outcomes: ["Commercial reels", "Event aftermath films", "Short-form video assets"],
    icon: "Video",
  },
  {
    id: "photography",
    name: "Photography",
    tagline: "Event, product & headshot capture",
    description: "Composition, lighting control, portraiture, event coverage, and photo retouches.",
    outcomes: ["Event galleries", "Product catalogs", "Professional headshots"],
    icon: "Camera",
  },
  {
    id: "marketing",
    name: "Marketing",
    tagline: "Campaigns & growth strategies",
    description:
      "Audience targeting, digital campaigns, event promotion, copy strategy, and analytics.",
    outcomes: ["Campaign roadmaps", "Audience growth", "Conversion copy"],
    icon: "Megaphone",
  },
  {
    id: "content",
    name: "Content",
    tagline: "Storytelling & copywriting",
    description:
      "Scriptwriting, article creation, newsletter publishing, and brand voice guidelines.",
    outcomes: ["Brand stories", "Content calendars", "Conversion copy"],
    icon: "PenTool",
  },
  {
    id: "coding",
    name: "Coding",
    tagline: "Web apps & technical solutions",
    description: "Full-stack web apps, frontend user interfaces, backend APIs, and digital tools.",
    outcomes: ["Production web apps", "Client sites", "Tooling automation"],
    icon: "Code",
  },
  {
    id: "branding",
    name: "Branding",
    tagline: "Strategy & market positioning",
    description: "Value propositions, visual guidelines, pitch decks, and commercial positioning.",
    outcomes: ["Brand pitch decks", "Strategy guides", "Market positioning"],
    icon: "Briefcase",
  },
  {
    id: "freelancing",
    name: "Freelancing",
    tagline: "Client management & pricing",
    description:
      "Proposal drafting, client negotiations, contract structures, pricing clinics, and invoicing.",
    outcomes: ["Client contracts", "Pricing models", "Sustainable retainer income"],
    icon: "TrendingUp",
  },
];

export const OFFERINGS = [
  {
    title: "Discover Skills",
    description: "Uncover your hidden strengths across design, tech, media, and marketing.",
    icon: "Compass",
  },
  {
    title: "Improve Craft",
    description: "Sharpen your execution through practical feedback, teardowns, and masterclasses.",
    icon: "Zap",
  },
  {
    title: "Real Projects",
    description: "Work on live briefs from actual brands and businesses with club backing.",
    icon: "Briefcase",
  },
  {
    title: "Client Connections",
    description: "Network directly with real-world clients, agencies, and industry leaders.",
    icon: "Users",
  },
  {
    title: "Portfolio Building",
    description: "Turn every event, brief, and project into proof of work that opens career doors.",
    icon: "FolderCheck",
  },
  {
    title: "Freelancing System",
    description: "Master pricing, proposal writing, contract management, and negotiation.",
    icon: "DollarSign",
  },
  {
    title: "Income Opportunities",
    description: "Convert your craft into recurring revenue while still completing your degree.",
    icon: "Coins",
  },
];

export const WHO_CAN_JOIN = [
  {
    title: "Creators & Designers",
    description:
      "Graphic artists, UI designers, video editors, photographers, and motion animators.",
  },
  {
    title: "Developers & Techies",
    description: "Web developers, coders, automation enthusiasts, and technical problem solvers.",
  },
  {
    title: "Marketers & Writers",
    description: "Storytellers, copywriters, social media managers, and brand strategists.",
  },
  {
    title: "Aspiring Freelancers",
    description: "Any student eager to turn their skills into income and build a portfolio.",
  },
];
