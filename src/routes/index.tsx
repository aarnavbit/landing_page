import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
  ChevronDown,
} from "lucide-react";

import { AarnaHeroVisual } from "../components/site/AarnaHero";
import { Reveal, RevealWords } from "../components/site/Reveal";
import { EVENTS, OBJECTIVES, SKILLS, OFFERINGS } from "../data/aarna";
import { JoinModal } from "../components/site/JoinModal";
import { TiltCard } from "../components/site/TiltCard";
import { IshanyaPopup } from "../components/site/IshanyaPopup";

gsap.registerPlugin(ScrollTrigger);

const SKILL_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Palette,
  Video,
  Camera,
  Megaphone,
  PenTool,
  Code,
  Briefcase,
  TrendingUp,
};

const OFFERING_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass,
  Zap,
  Briefcase,
  Users,
  FolderCheck,
  DollarSign,
  Coins,
};

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

const MARQUEE = [
  "Design",
  "Video Editing",
  "Photography",
  "Marketing",
  "Freelancing",
  "Content",
  "Code",
  "Branding",
];

function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const [activeSkillId, setActiveSkillId] = useState(SKILLS[0]?.id || "designing");
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  const selectedSkill = SKILLS.find((s) => s.id === activeSkillId) || SKILLS[0];

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !visualRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=50%",
          scrub: 0.8,
        },
      });

      // 1. Hero text smoothly fades out and moves up
      tl.to(
        textRef.current,
        {
          opacity: 0,
          y: -40,
          duration: 0.6,
          ease: "power2.out",
        },
        0
      );

      // 2. Scroll indicator fades out immediately as scroll begins
      tl.to(
        ".aarna-scroll-indicator",
        {
          opacity: 0,
          y: 18,
          duration: 0.25,
          ease: "power2.out",
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
      <IshanyaPopup />
      <section ref={containerRef} className="relative isolate overflow-hidden border-b border-border bg-background">
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center px-5 py-10 sm:py-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] lg:gap-8">
          <div ref={textRef} className="relative z-10 pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 border-l border-primary pl-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
          >
            VBIT · Student-led creative commerce
          </motion.div>

          <motion.div
            className="mt-7 max-w-md"
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="aarna-title-lockup">
              <img
                src="/icons/aarna-preloader.svg"
                alt="AARNA"
                className="h-20 w-auto sm:h-24 lg:h-28 object-contain"
                draggable={false}
              />
            </div>
          </motion.div>
          <p className="mt-3 max-w-lg font-display text-xl font-semibold text-primary md:text-2xl">Turning Passions into Profits.</p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Earning is a mindset. Aarna is the platform where ambitious students turn the skill
            they already have into an income stream — while they're still studying.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:-translate-y-0.5"
            >
              What is Aarna
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/events"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
            >
              See our events
            </Link>
          </motion.div>
        </div>
          <div ref={visualRef} className="relative min-h-[22rem] lg:min-h-[36rem] flex items-center justify-center w-full">
            <AarnaHeroVisual />
          </div>
        </div>

        {/* Minimal Scroll to explore indicator */}
        <div className="aarna-scroll-indicator absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 pointer-events-none">
          <div className="flex h-7 w-4.5 items-start justify-center rounded-full border border-border/80 bg-surface/60 p-1 shadow-[0_0_12px_rgba(245,180,0,0.15)] backdrop-blur-md">
            <div className="h-1.5 w-1 rounded-full bg-primary aarna-scroll-dot" />
          </div>
          <div className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80 animate-pulse-glow">
            <span>Scroll to explore</span>
            <ChevronDown className="h-3 w-3 animate-bounce text-primary" />
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
                className="group block h-full overflow-hidden rounded-2xl surface-panel p-8 transition-all hover:-translate-y-2 hover:border-primary/60"
              >
                <div className="flex items-center justify-between transition-transform duration-300 group-hover:translate-x-1">
                  <span className="text-xs uppercase tracking-wide text-primary">{e.tag}</span>
                  {e.status === "upcoming" && (
                    <span className="animate-pulse-glow rounded-full border border-primary/40 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                      Loading
                    </span>
                  )}
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold transition-transform duration-300 group-hover:translate-x-1">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">{e.summary}</p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                  Open details
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5 — AARNA PHILOSOPHY */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <TiltCard>
            <div className="relative isolate overflow-hidden rounded-3xl surface-panel px-8 py-16 text-center border border-border/50 bg-surface/30 backdrop-blur-md shadow-2xl">
              <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold md:text-5xl">
                Every talent holds the potential for <span className="text-flow">success.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
                Coder, writer, designer, marketer — or still figuring it out. Aarna is where you find
                out what your skill is worth.
              </p>
              <Link
                to="/agenda"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-flow)] px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 shadow-[0_0_20px_rgba(245,180,0,0.3)]"
              >
                Our plans this tenure
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </TiltCard>
        </Reveal>
      </section>

      {/* JOIN MODAL */}
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
