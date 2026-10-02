import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowUpRight,
  Palette,
  Video,
  Camera,
  Megaphone,
  PenTool,
  Code,
  Briefcase,
  TrendingUp,
  Compass,
  Zap,
  Users,
  FolderCheck,
  DollarSign,
  Coins,
  CheckCircle2,
  Sparkles,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { AarnaHeroVisual } from "../components/site/AarnaHero";
import { Reveal, RevealWords } from "../components/site/Reveal";
import { EVENTS, OBJECTIVES, SKILLS, OFFERINGS } from "../data/aarna";
import { JoinModal } from "../components/site/JoinModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AARNA — Turning Passions into Profits" },
      {
        name: "description",
        content:
          "AARNA is the student club at Vignana Bharathi Institute of Technology that turns student skills into income, portfolios and real opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "AARNA — Turning Passions into Profits" },
      {
        property: "og:description",
        content: "The VBIT club where every talent becomes a source of income.",
      },
    ],
  }),
  component: Landing,
});

const SKILL_ICONS: Record<string, typeof Palette> = {
  Palette,
  Video,
  Camera,
  Megaphone,
  PenTool,
  Code,
  Briefcase,
  TrendingUp,
};

const OFFERING_ICONS: Record<string, typeof Compass> = {
  Compass,
  Zap,
  Briefcase,
  Users,
  FolderCheck,
  DollarSign,
  Coins,
};

export function Landing() {
  const [activeSkillId, setActiveSkillId] = useState<string>("designing");
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const selectedSkill = SKILLS.find((s) => s.id === activeSkillId) || SKILLS[0];

  return (
    <div className="relative overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative isolate border-b border-border bg-background">
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center px-5 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(26rem,1.05fr)] lg:gap-8">
          <div className="relative z-10 pt-4 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              VBIT · Student-led creative commerce
            </motion.div>

            <h1 className="mt-6 max-w-4xl font-title text-6xl font-normal leading-none sm:text-7xl lg:text-8xl tracking-tight">
              <RevealWords text="AARNA" />
            </h1>
            <p className="mt-3 max-w-lg font-display text-xl font-bold text-primary md:text-2xl">
              Turning Passions into Profits.
            </p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Earning is a mindset. Aarna is the platform at Vignana Bharathi Institute of
              Technology where ambitious students turn the skills they already have into an income
              stream — while pursuing their studies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Explore AARNA
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-surface-2 hover:border-primary/50"
              >
                View Events
              </Link>
            </motion.div>
          </div>

          <div className="relative min-h-[22rem] lg:min-h-[36rem]">
            <AarnaHeroVisual />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section
        className="overflow-hidden border-y border-border bg-surface/50 py-4"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...SKILLS, ...SKILLS].map((s, i) => (
            <span
              key={`${s.id}-${i}`}
              className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-3"
            >
              <span>{s.name}</span>
              <span className="text-primary text-xs">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* SECTION 1 — SKILLS / AREAS (Interactive Presentation) */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                Explore Your Domain
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                Skills you can turn into income.
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Select any domain below to see what craft you can refine and the real-world client
              outcomes you will produce with AARNA.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Skill Selector List */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-2">
            {SKILLS.map((skill) => {
              const IconComp = SKILL_ICONS[skill.icon] || Palette;
              const isSelected = skill.id === activeSkillId;
              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkillId(skill.id)}
                  className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                    isSelected
                      ? "border-primary bg-primary/10 shadow-md text-foreground"
                      : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:bg-surface-2 hover:text-foreground"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-surface-2 text-muted-foreground"
                    }`}
                  >
                    <IconComp className="h-5 w-5" />
                  </span>
                  <div className="overflow-hidden">
                    <p className="text-sm font-semibold truncate">{skill.name}</p>
                    <p className="text-[11px] text-muted-foreground truncate hidden sm:block">
                      {skill.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Skill Showcase Detail Card */}
          {selectedSkill && (
            <Reveal key={selectedSkill.id}>
              <div className="grain-noise h-full rounded-3xl surface-panel p-8 flex flex-col justify-between border border-border">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      {selectedSkill.tagline}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      AARNA Track
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-3xl font-bold">{selectedSkill.name}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {selectedSkill.description}
                  </p>

                  <div className="mt-8 border-t border-border/80 pt-6">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Real Work Outcomes
                    </h4>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {selectedSkill.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-sm font-medium">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 pt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    Ready to practice this track?
                  </span>
                  <button
                    onClick={() => setIsJoinOpen(true)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Join this track
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* SECTION 2 — WHY AARNA EXISTS */}
      <section className="mx-auto max-w-6xl px-5 py-20 border-t border-border/60">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">
            Why We Exist
          </p>
          <h2 className="mt-2 max-w-2xl text-3xl font-bold md:text-4xl">
            Four objectives we hold ourselves to.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="grain-noise h-full overflow-hidden rounded-2xl surface-panel p-7 border border-border"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-bold text-primary">0{i + 1}</span>
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
                <h3 className="mt-4 text-xl font-bold">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3 — WHAT AARNA OFFERS */}
      <section className="mx-auto max-w-6xl px-5 py-24 border-t border-border/60">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">
              The Value Proposition
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              What AARNA brings to every member.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              We bridges the gap between campus learning and real commercial opportunity.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFERINGS.map((offering, i) => {
            const IconComp = OFFERING_ICONS[offering.icon] || Compass;
            return (
              <Reveal key={offering.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/50 hover:bg-surface-2">
                  <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <IconComp className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{offering.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {offering.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — EVENTS */}
      <section className="mx-auto max-w-6xl px-5 py-20 border-t border-border/60">
        <Reveal>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                Our Events
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Featured club initiatives.</h2>
            </div>
            <Link
              to="/events"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              View all events
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {EVENTS.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.1}>
              <Link
                to="/events"
                className="group block h-full overflow-hidden rounded-3xl surface-panel p-8 border border-border transition-colors hover:border-primary/60"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    {e.tag}
                  </span>
                  {e.status === "upcoming" ? (
                    <span className="animate-pulse-glow rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-widest text-primary font-semibold">
                      Upcoming · Loading
                    </span>
                  ) : (
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      Completed
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold group-hover:text-primary transition-colors">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>

                <div className="mt-6 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {e.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {e.venue}
                  </span>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
                    View event details
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5 — AARNA PHILOSOPHY */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl surface-panel border border-border px-8 py-20 text-center shadow-lg">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              The AARNA Philosophy
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold md:text-5xl leading-tight">
              "Every talent holds the potential for <span className="text-flow">success."</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground leading-relaxed">
              Coder, writer, designer, marketer, videographer, or still figuring it out — AARNA is
              where you find out what your skill is worth and turn it into real financial
              opportunities.
            </p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 6 — FINAL CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <div className="rounded-3xl border border-primary/40 bg-gradient-to-br from-surface to-surface-2 p-8 sm:p-14 text-center">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold md:text-4xl">
              Ready to turn your skill into something bigger?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
              Join the VBIT community of student creators, developers, marketers, and freelancers
              building their path to financial independence.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setIsJoinOpen(true)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                <Sparkles className="h-4 w-4" />
                Explore AARNA
              </button>
              <Link
                to="/agenda"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold transition-colors hover:bg-surface"
              >
                View Our Agenda
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* JOIN MODAL */}
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
