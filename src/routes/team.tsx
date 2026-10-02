import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, Users, Award, ShieldCheck } from "lucide-react";

import { Reveal, RevealWords } from "../components/site/Reveal";
import { PhotoSlot } from "../components/site/PhotoSlot";
import { FACULTY, LEADERSHIP, TEAMS } from "../data/aarna";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team — AARNA Club, VBIT" },
      {
        name: "description",
        content:
          "The people behind AARNA: faculty coordinator, core leadership and our eight working teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Team — AARNA Club" },
      {
        property: "og:description",
        content: "Faculty coordinator, chair, vice chair, secretary and eight teams.",
      },
    ],
  }),
  component: Team,
});

export function Team() {
  return (
    <div className="relative overflow-x-hidden">
      {/* PAGE HERO */}
      <section className="relative isolate overflow-hidden border-b border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            AARNA Organization Structure
          </motion.div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl tracking-tight">
            <RevealWords text="The people behind AARNA." />
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground text-base">
            From our dedicated faculty mentor to student core leadership and eight operational
            domain teams.
          </p>
        </div>
      </section>

      {/* HIERARCHY SECTION */}
      <section className="mx-auto max-w-5xl px-5 py-20">
        {/* LEVEL 1: FACULTY COORDINATOR */}
        <Reveal>
          <div className="text-center mb-4">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Faculty Leadership
            </span>
          </div>
          <div className="mx-auto max-w-sm">
            <PersonCard role={FACULTY.role} name={FACULTY.name} detail={FACULTY.detail} lead />
          </div>
        </Reveal>

        <Connector />

        {/* LEVEL 2: CORE LEADERSHIP */}
        <Reveal>
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Core Executive Leadership
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {LEADERSHIP.map((p, i) => (
              <Reveal key={p.role} delay={i * 0.1}>
                <PersonCard role={p.role} name={p.name} />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Connector />

        {/* LEVEL 3: EIGHT WORKING TEAMS */}
        <Reveal>
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Operational Divisions
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-4xl">
              Eight teams. One club.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto">
              Our working divisions driving design, documentation, branding, outreach, tech, and
              event execution.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAMS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="grain-noise h-full rounded-2xl surface-panel p-5 border border-border flex flex-col justify-between"
              >
                <div>
                  <PhotoSlot label={t.name} ratio="aspect-[4/3]" />
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="font-display text-lg font-bold">{t.name}</h3>
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.blurb}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

function Connector() {
  return (
    <div aria-hidden="true" className="my-10 flex flex-col items-center gap-1">
      <span className="h-10 w-px bg-gradient-to-b from-transparent to-primary" />
      <span className="h-2.5 w-2.5 rounded-full bg-primary shadow-sm" />
      <span className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
    </div>
  );
}

function PersonCard({
  role,
  name,
  detail,
  lead = false,
}: {
  role: string;
  name: string;
  detail?: string;
  lead?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`grain-noise h-full rounded-3xl surface-panel p-6 text-center border border-border ${
        lead ? "ring-2 ring-primary/60 shadow-lg" : ""
      }`}
    >
      <PhotoSlot label={role} ratio={lead ? "aspect-[4/3]" : "aspect-[4/5]"} />

      <span className="mt-5 inline-block rounded-full bg-primary px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-xs">
        {role}
      </span>

      <h3 className="mt-3 font-display text-xl font-bold">{name}</h3>

      {detail && <p className="mt-1 text-xs text-muted-foreground font-medium">{detail}</p>}
    </motion.div>
  );
}
