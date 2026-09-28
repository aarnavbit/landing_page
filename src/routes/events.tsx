import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CalendarDays, MapPin, X } from "lucide-react";

import { Reveal, RevealWords } from "../components/site/Reveal";
import { PhotoSlot } from "../components/site/PhotoSlot";
import { EVENTS, type AarnaEvent } from "../data/aarna";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — AARNA Club, VBIT" },
      {
        name: "description",
        content:
          "Skill Quest and ISHANYA'26 — the events AARNA has conducted and what's coming next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Events — AARNA Club" },
      {
        property: "og:description",
        content: "Skill Quest at Alanda Auditorium, and ISHANYA'26 loading soon.",
      },
    ],
  }),
  component: Events,
});

function Events() {
  const [active, setActive] = useState<AarnaEvent | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div>
      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">Events</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
            <RevealWords text="What we've conducted." />
          </h1>
          <p className="mt-5 max-w-lg text-muted-foreground">
            Tap a card to open the full story of the event.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {EVENTS.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.1}>
              <motion.button
                layoutId={`card-${e.id}`}
                onClick={() => setActive(e)}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="grain-noise block w-full overflow-hidden rounded-3xl surface-panel p-7 text-left"
              >
                <motion.div layoutId={`media-${e.id}`}>
                  <PhotoSlot label={`${e.title} poster`} ratio="aspect-[16/9]" />
                </motion.div>
                <div className="mt-6 flex items-center justify-between">
                  <motion.span
                    layoutId={`tag-${e.id}`}
                    className="text-xs uppercase tracking-[0.2em] text-primary"
                  >
                    {e.tag}
                  </motion.span>
                  {e.status === "upcoming" && (
                    <span className="animate-pulse-glow rounded-full border border-primary/40 px-3 py-1 text-[10px] uppercase tracking-widest text-primary">
                      Upcoming · loading
                    </span>
                  )}
                </div>
                <motion.h2
                  layoutId={`title-${e.id}`}
                  className="mt-3 font-display text-3xl font-semibold"
                >
                  {e.title}
                </motion.h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {e.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {e.venue}
                  </span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[60] grid place-items-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />
            <motion.div
              layoutId={`card-${active.id}`}
              className="relative max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-3xl surface-panel p-8"
            >
              <button
                onClick={() => setActive(null)}
                aria-label="Close"
                className="absolute right-5 top-5 rounded-full border border-border bg-surface p-2 transition-colors hover:bg-surface-2"
              >
                <X className="h-4 w-4" />
              </button>

              <motion.div layoutId={`media-${active.id}`}>
                <PhotoSlot label={`${active.title} poster`} ratio="aspect-[16/9]" />
              </motion.div>

              <motion.span
                layoutId={`tag-${active.id}`}
                className="mt-6 block text-xs uppercase tracking-[0.2em] text-primary"
              >
                {active.tag}
              </motion.span>
              <motion.h2
                layoutId={`title-${active.id}`}
                className="mt-2 font-display text-4xl font-semibold"
              >
                {active.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.45 }}
              >
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {active.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {active.venue}
                  </span>
                </div>

                {active.details.map((d, i) => (
                  <p key={i} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {d}
                  </p>
                ))}

                <h3 className="mt-8 font-display text-lg font-semibold">Outcome</h3>
                <ul className="mt-3 space-y-2">
                  {active.outcomes.map((o, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
