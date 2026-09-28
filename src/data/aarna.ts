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
  { role: "Chair", name: "Prashant" },
  { role: "Vice Chair", name: "Manish Chari" },
  { role: "Secretary", name: "Prathikya" },
];

export const FACULTY = {
  role: "Faculty Coordinator",
  name: "K. Keerthana",
  detail: "Assistant Professor | CSBS",
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
