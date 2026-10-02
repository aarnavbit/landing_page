import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import { AarnaHeroVisual } from "../components/site/AarnaHero";
import { Reveal, RevealWords } from "../components/site/Reveal";
import { TiltCard } from "../components/site/TiltCard";
import { EVENTS, OBJECTIVES } from "../data/aarna";

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

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current || !visualRef.current) return;
    
    // Check if preloader is active. If so, don't break animations right away.
    // (GSAP ScrollTrigger can be set up immediately but we wait for it to be visible).

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        },
      });

      tl.to(textRef.current, { opacity: 0, y: -50, duration: 1 }, 0)
        .to(visualRef.current, { scale: 50, opacity: 0, duration: 2, ease: "power2.in" }, 0.5);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative">
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
          <div ref={visualRef} className="relative min-h-[20rem] lg:min-h-[36rem]">
            <AarnaHeroVisual />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-border bg-surface/40 py-4">
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="font-display text-sm uppercase tracking-wide text-muted-foreground"
            >
              {m}
              <span className="ml-10 text-primary">◆</span>
            </span>
          ))}
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-wide text-primary">Why we exist</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold md:text-4xl">
            Four objectives we hold ourselves to.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="grain-noise h-full overflow-hidden rounded-2xl surface-panel p-7"
              >
                <span className="font-display text-sm text-primary">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-semibold">{o.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{o.body}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENT TEASER */}
      <section className="mx-auto max-w-6xl px-5 pb-8">
        <div className="grid gap-5 md:grid-cols-2">
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

      {/* CTA */}
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
    </div>
  );
}
