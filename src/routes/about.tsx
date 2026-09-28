import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Compass, Target } from "lucide-react";

import { Reveal, RevealWords } from "../components/site/Reveal";
import { OBJECTIVES, FACULTY } from "../data/aarna";

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

function About() {
  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">About</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            <RevealWords text="What is Aarna?" />
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Aarna is more than just a college club — it's a dynamic platform for ambitious students
            to transform their skills into opportunities and their passions into profit. Here, we
            embrace earning as a mindset and believe every talent holds the potential for success,
            and every dream deserves the chance to flourish.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            With our guiding motto,{" "}
            <span className="text-flow font-semibold">"Turning Passions into Profits,"</span> Aarna
            empowers you to explore your unique talents, refine your craft, and create a
            sustainable stream of income — all while pursuing your studies. Whether you're a coder
            with a knack for problem-solving, a writer with stories to share, a designer with a
            vision, a marketer with big ideas, or someone eager to uncover hidden talents, Aarna is
            here to help you unlock your full potential.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid gap-5 md:grid-cols-2">
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
                className="grain-noise h-full rounded-2xl surface-panel p-8"
              >
                <span className="inline-grid h-11 w-11 place-items-center rounded-xl bg-[image:var(--gradient-flow)] text-primary-foreground">
                  <c.icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold">{c.label}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Reveal>
          <h2 className="text-3xl font-semibold md:text-4xl">Objectives</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <span className="font-display text-xs text-primary">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap items-center gap-4 rounded-2xl border border-border bg-surface p-6">
            <span className="rounded-full bg-[image:var(--gradient-flow)] px-4 py-1.5 text-xs font-semibold text-primary-foreground">
              {FACULTY.role}
            </span>
            <p className="text-sm">
              <span className="font-semibold">{FACULTY.name}</span>
              <span className="text-muted-foreground"> — {FACULTY.detail}</span>
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
