import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Compass, Target, Award, Users, Sparkles, ArrowUpRight, GraduationCap } from "lucide-react";
import { useState } from "react";

import { Reveal, RevealWords } from "../components/site/Reveal";
import { OBJECTIVES, FACULTY, WHO_CAN_JOIN } from "../data/aarna";
import { JoinModal } from "../components/site/JoinModal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AARNA — What we are, our vision and mission" },
      {
        name: "description",
        content:
          "Aarna is a platform for ambitious students to turn skills into opportunities. Read our vision, mission and objectives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "About AARNA" },
      {
        property: "og:description",
        content: "What is Aarna, our vision, our mission and the objectives we hold ourselves to.",
      },
    ],
  }),
  component: About,
});

export function About() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      {/* 1. PAGE HERO */}
      <section className="relative isolate overflow-hidden border-b border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary"
          >
            <Sparkles className="h-3.5 w-3.5" />
            About AARNA Club · VBIT
          </motion.div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl tracking-tight">
            <RevealWords text="What is AARNA?" />
          </h1>
          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            The student organization at Vignana Bharathi Institute of Technology dedicated to
            building financial independence through skill transformation.
          </p>
        </div>
      </section>

      {/* 2. WHAT IS AARNA STORY */}
      <section className="mx-auto max-w-4xl px-5 py-20">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl font-normal">
            AARNA is more than just a college club — it's a dynamic platform for ambitious students
            to transform their skills into opportunities and their passions into profit. Here, we
            embrace earning as a mindset and believe every talent holds the potential for success,
            and every dream deserves the chance to flourish.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl font-normal">
            With our guiding motto,{" "}
            <span className="text-flow font-bold">"Turning Passions into Profits,"</span> AARNA
            empowers you to explore your unique talents, refine your craft, and create a sustainable
            stream of income — all while pursuing your studies. Whether you're a coder with a knack
            for problem-solving, a writer with stories to share, a designer with a vision, a
            marketer with big ideas, or someone eager to uncover hidden talents, AARNA is here to
            help you unlock your full potential.
          </p>
        </Reveal>
      </section>

      {/* 3 & 4. MISSION & VISION */}
      <section className="mx-auto max-w-6xl px-5 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              label: "Mission",
              body: "Our mission is to empower students to harness their skills and passions, transforming them into thriving professional opportunities. We strive to inspire growth that is both personal and professional, paving the way for fulfilling careers and impactful contributions to the world.",
            },
            {
              icon: Compass,
              label: "Vision",
              body: "Our vision is to ignite the spark of potential in students, empowering them to embark on a journey toward financial independence. We cultivate a thriving ecosystem of innovation and freelancing, nurturing a culture where creativity and ambition flourish — offering both technical and non-technical enthusiasts an equal platform to turn aspirations into achievements.",
            },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="grain-noise h-full rounded-3xl surface-panel p-8 border border-border"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md">
                  <c.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-6 font-display text-2xl font-bold">{c.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. OBJECTIVES */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold">
              Core Pillars
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Our Objectives</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all hover:border-primary/50">
                <span className="font-display text-xs font-bold text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. WHO CAN BE PART OF AARNA? */}
      <section className="mx-auto max-w-6xl px-5 py-20 border-t border-border/60">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">
                Community
              </p>
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">Who can be part of AARNA?</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Every VBIT student with a drive to learn, create, or earn has a place in AARNA.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHO_CAN_JOIN.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-surface/60 p-6 flex flex-col justify-between">
                <div>
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. FACULTY COORDINATOR */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <Reveal>
          <div className="rounded-3xl border border-border surface-panel p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <GraduationCap className="h-8 w-8" />
            </span>
            <div>
              <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {FACULTY.role}
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold">{FACULTY.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {FACULTY.detail} · Vignana Bharathi Institute of Technology
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. CLOSING CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-24">
        <Reveal>
          <div className="rounded-3xl bg-surface border border-border p-10 text-center">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Want to see our goals for this academic tenure?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
              Check out the step-by-step roadmap we've set for student client work, events, and
              portfolio building.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                to="/agenda"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-transform hover:scale-105"
              >
                View Agenda Roadmap
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setIsJoinOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface-2"
              >
                Join AARNA
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </div>
  );
}
