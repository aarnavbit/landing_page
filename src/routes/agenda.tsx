import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Sparkles, Calendar, CheckCircle2, Flag, Target } from "lucide-react";

import { Reveal, RevealWords } from "../components/site/Reveal";

export const Route = createFileRoute("/agenda")({
  head: () => ({
    meta: [
      { title: "Agenda — AARNA's plans for this tenure" },
      {
        name: "description",
        content:
          "Our main agenda for this tenure: skill-to-income pipelines, real client work, brand-led events and portfolios that open doors.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Agenda — AARNA this tenure" },
      {
        property: "og:description",
        content: "What we want to do this year and how we plan to get there.",
      },
    ],
  }),
  component: Agenda,
});

const AGENDA = [
  {
    step: "01",
    title: "Make the skill-to-income path obvious",
    body: "Every member should be able to answer one question by the end of the year: how does my skill earn? We run sessions, teardowns and pricing clinics until that answer is concrete.",
    tag: "Core Objective",
  },
  {
    step: "02",
    title: "Put students on real client work",
    body: "Not mock projects. We bring in briefs from actual brands and businesses, and members deliver them with the club backing the quality.",
    tag: "Practical Execution",
  },
  {
    step: "03",
    title: "ISHANYA'26",
    body: "Our brand-led flagship in the designing and video editing tracks — practical execution, time-bound briefs, real judgement of creative work.",
    tag: "Flagship Event",
  },
  {
    step: "04",
    title: "अनवया",
    body: "Anvaya is Aarna’s biggest planned event. Through brand and design-led work and conversations with the people who join us, we want every Aarna member to leave with a particular outcome they can carry forward.",
    tag: "Major Milestone",
  },
  {
    step: "05",
    title: "e-Summit",
    body: "We plan to welcome professionals to our college to share what is happening in their industries, how the work is changing and what students can learn from the people doing it now.",
    tag: "Industry Connection",
  },
  {
    step: "06",
    title: "Build portfolios that open doors",
    body: "Every event, every brief, every deliverable becomes a portfolio piece. By the end of the tenure, members have work to show, not just certificates.",
    tag: "Career Asset",
  },
  {
    step: "07",
    title: "Grow the freelancing ecosystem",
    body: "Technical and non-technical members get the same platform. Connections, networks and a pipeline that outlives our tenure.",
    tag: "Long-term Vision",
  },
];

export function Agenda() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

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
            Tenure Roadmap · VBIT
          </motion.div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl tracking-tight">
            <RevealWords text="Our agenda for the year." />
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground text-base">
            The plan is not more events. The plan is more earners.
          </p>
        </div>
      </section>

      {/* TIMELINE ROADMAP */}
      <section ref={ref} className="mx-auto max-w-4xl px-5 py-20">
        <div className="relative pl-8 sm:pl-12">
          {/* Static Background Line */}
          <div className="absolute left-3 sm:left-4 top-3 bottom-3 w-0.5 bg-border" />

          {/* Animated Flow Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-3 sm:left-4 top-3 bottom-3 w-0.5 bg-primary"
          />

          <div className="space-y-12">
            {AGENDA.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.05} className="relative">
                {/* Node Icon Circle */}
                <span className="absolute -left-[29px] sm:-left-[41px] top-1.5 grid h-7 w-7 place-items-center rounded-full border border-primary/60 bg-surface shadow-sm text-primary">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </span>

                {/* Card Container */}
                <div className="grain-noise rounded-3xl surface-panel p-6 sm:p-8 border border-border">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-display text-xs font-bold text-primary">
                      STEP {a.step}
                    </span>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                      {a.tag}
                    </span>
                  </div>

                  <h2 className="mt-3 font-display text-xl font-bold sm:text-2xl">{a.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
