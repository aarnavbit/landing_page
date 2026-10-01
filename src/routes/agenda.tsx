import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

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
    title: "Make the skill-to-income path obvious",
    body: "Every member should be able to answer one question by the end of the year: how does my skill earn? We run sessions, teardowns and pricing clinics until that answer is concrete.",
  },
  {
    title: "Put students on real client work",
    body: "Not mock projects. We bring in briefs from actual brands and businesses, and members deliver them with the club backing the quality.",
  },
  {
    title: "ISHANYA'26",
    body: "Our brand-led flagship in the designing and video editing tracks — practical execution, time-bound briefs, real judgement of creative work.",
  },
  {
    title: "अनवया",
    body: "Anvaya is Aarna’s biggest planned event. Through brand and design-led work and conversations with the people who join us, we want every Aarna member to leave with a particular outcome they can carry forward.",
  },
  {
    title: "e-Summit",
    body: "We plan to welcome professionals to our college to share what is happening in their industries, how the work is changing and what students can learn from the people doing it now.",
  },
  {
    title: "Build portfolios that open doors",
    body: "Every event, every brief, every deliverable becomes a portfolio piece. By the end of the tenure, members have work to show, not just certificates.",
  },
  {
    title: "Grow the freelancing ecosystem",
    body: "Technical and non-technical members get the same platform. Connections, networks and a pipeline that outlives our tenure.",
  },
];

function Agenda() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "end 0.4"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">This tenure</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            <RevealWords text="Our agenda for the year." />
          </h1>
          <p className="mt-5 max-w-xl text-muted-foreground">
            The plan is not more events. The plan is more earners.
          </p>
        </div>
      </section>

      <section ref={ref} className="mx-auto max-w-3xl px-5 py-20">
        <div className="relative pl-10 md:pl-16">
          <div className="absolute left-[11px] md:left-[19px] top-2 h-full w-px bg-border" />
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[11px] md:left-[19px] top-2 h-full w-px bg-[image:var(--gradient-flow)]"
          />

          {AGENDA.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05} className="relative pb-16 last:pb-0">
              <span className="absolute -left-10 md:-left-16 top-1.5 grid h-6 w-6 md:h-8 md:w-8 place-items-center rounded-full border border-border bg-surface transition-colors hover:border-primary">
                <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-primary" />
              </span>
              <h2 className="font-display text-xl font-semibold md:text-2xl transition-colors hover:text-primary">{a.title}</h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">{a.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
