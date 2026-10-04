import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, Users, Award, ShieldCheck } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

import { Reveal, RevealWords } from "../components/site/Reveal";
import { PhotoSlot } from "../components/site/PhotoSlot";
import { TeamPortfolioModal } from "../components/site/TeamPortfolioModal";
import { FACULTY, LEADERSHIP, TEAMS } from "../data/aarna";
import { PORTFOLIO_TEAMS, type PortfolioTeam } from "../data/portfolioTeams";

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

function Team() {
  const [selectedTeam, setSelectedTeam] = useState<PortfolioTeam | null>(null);

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
            <PersonCard
              role={FACULTY.role}
              name={FACULTY.name}
              detail={FACULTY.detail}
              imageUrl={FACULTY.imageUrl}
              lead
            />
          </div>
        </Reveal>

        <Connector />

        <div className="grid gap-5 sm:grid-cols-3">
          {LEADERSHIP.map((p, i) => (
            <Reveal key={p.role} delay={i * 0.1}>
              <PersonCard
                role={p.role}
                name={p.name}
                imageUrl={p.imageUrl}
              />
            </Reveal>
          ))}
        </div>

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

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAMS.map((t, i) => {
            const teamData = PORTFOLIO_TEAMS[t.name];
            return (
              <Reveal key={t.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  onClick={() => teamData && setSelectedTeam(teamData)}
                  className="group grain-noise h-full rounded-2xl surface-panel p-4 cursor-pointer transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(245,180,0,0.18)]"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      teamData && setSelectedTeam(teamData);
                    }
                  }}
                  aria-label={`View ${t.name} team members`}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <div className="transition-all duration-700 group-hover:scale-105 group-hover:opacity-80">
                      <PhotoSlot
                        label={t.name}
                        ratio="aspect-[4/5]"
                        imageUrl={teamData?.cardImage}
                      />
                    </div>
                    <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/85 via-black/20 to-transparent">
                      <span className="self-end rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 px-2 py-0.5 text-[10px] font-semibold text-primary uppercase">
                        View Team →
                      </span>
                      {teamData && (
                        <div>
                          <span className="block font-display font-semibold text-white text-sm">
                            {teamData.lead.name}
                          </span>
                          <span className="block text-xs text-primary/90">
                            {teamData.lead.role}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:text-primary flex items-center justify-between">
                    <span>{t.name}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground transition-transform duration-300 group-hover:translate-y-[-2px]">
                    {t.blurb}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Team Portfolio Modal */}
      <TeamPortfolioModal
        team={selectedTeam}
        onClose={() => setSelectedTeam(null)}
      />
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
  imageUrl,
  lead = false,
}: {
  role: string;
  name: string;
  detail?: string;
  imageUrl?: string;
  lead?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`group grain-noise h-full rounded-2xl surface-panel p-5 text-center ${
        lead ? "glow-ring" : ""
      }`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="transition-all duration-700 group-hover:scale-105 group-hover:opacity-60">
          <PhotoSlot
            label={role}
            ratio={lead ? "aspect-[4/4]" : "aspect-[4/5]"}
            imageUrl={imageUrl}
          />
        </div>
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          <span className="text-center font-display font-semibold text-primary/90 text-sm">{name}</span>
          <span className="text-center text-xs text-foreground">{role}</span>
        </div>
      </div>
      <span className="mt-4 inline-block rounded-full bg-[image:var(--gradient-flow)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
        {role}
      </span>
      <h3 className="mt-3 font-display text-xl font-semibold transition-transform duration-300 group-hover:translate-y-[-2px]">{name}</h3>
      {detail && <p className="mt-1 text-xs text-muted-foreground transition-transform duration-300 group-hover:translate-y-[-2px]">{detail}</p>}
    </motion.div>
  );
}
