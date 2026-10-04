import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CalendarDays, MapPin, X, Sparkles, CheckCircle2, ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal, RevealWords } from "../components/site/Reveal";
import { PhotoSlot } from "../components/site/PhotoSlot";
import { EVENTS, type AarnaEvent } from "../data/aarna";
import { Button } from "../components/ui/button";

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

export function Events() {
  const [active, setActive] = useState<AarnaEvent | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

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
            AARNA Events & Initiatives
          </motion.div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl tracking-tight">
            <RevealWords text="What we've conducted." />
          </h1>
          <p className="mt-4 max-w-lg text-muted-foreground text-base">
            Explore our flagship skill workshops, brand competitions, and upcoming club initiatives.
            Select an event card to read full details.
          </p>
        </div>
      </section>

      {/* EVENT LISTING */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {EVENTS.map((e, i) => (
            <Reveal key={e.id} delay={i * 0.1}>
              <motion.button
                layoutId={`card-${e.id}`}
                onClick={() => setActive(e)}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="group grain-noise block w-full overflow-hidden rounded-3xl surface-panel p-7 text-left"
              >
                <motion.div layoutId={`media-${e.id}`}>
                  <PhotoSlot label={`${e.title} poster`} ratio="aspect-[16/9]" imageUrl={e.imageUrl} />
                </motion.div>
                <div className="mt-6 flex items-center justify-between transition-transform duration-300 group-hover:translate-x-1">
                  <motion.span
                    layoutId={`tag-${e.id}`}
                    className="text-xs uppercase tracking-widest text-primary font-semibold"
                  >
                    {e.tag}
                  </motion.span>
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

                <motion.h2
                  layoutId={`title-${e.id}`}
                  className="mt-3 font-display text-3xl font-semibold transition-transform duration-300 group-hover:translate-x-1"
                >
                  {e.title}
                </motion.h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">{e.summary}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground transition-transform duration-300 group-hover:translate-x-1">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5 text-primary" />
                    {e.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    {e.venue}
                  </span>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-transform duration-300 group-hover:translate-x-1">
                  View full event
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EVENT DETAIL MODAL */}
      <AnimatePresence>
        {active && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`dialog-title-${active.id}`}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="absolute inset-0 bg-background/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              layoutId={`card-${active.id}`}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl surface-panel p-6 sm:p-8 border border-border shadow-2xl z-10"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setActive(null)}
                aria-label="Close modal dialog"
                className="absolute right-5 top-5 z-20 rounded-full border-border bg-surface text-foreground hover:bg-surface-2"
              >
                <X className="h-4 w-4" />
              </Button>

              <motion.div layoutId={`media-${active.id}`}>
                <PhotoSlot label={`${active.title} poster`} ratio="aspect-[16/9]" imageUrl={active.imageUrl} />
              </motion.div>

              <div className="mt-6 flex items-center justify-between">
                <motion.span
                  layoutId={`tag-${active.id}`}
                  className="text-xs uppercase tracking-widest text-primary font-semibold"
                >
                  {active.tag}
                </motion.span>
                {active.status === "upcoming" ? (
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-widest text-primary font-semibold">
                    Upcoming Event
                  </span>
                ) : (
                  <span className="rounded-full border border-border bg-surface px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    Completed Event
                  </span>
                )}
              </div>

              <motion.h2
                id={`dialog-title-${active.id}`}
                layoutId={`title-${active.id}`}
                className="mt-2 font-display text-3xl font-bold sm:text-4xl"
              >
                {active.title}
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-medium text-muted-foreground border-y border-border/60 py-3">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-primary" />
                    {active.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-primary" />
                    {active.venue}
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {active.details.map((d, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground">
                      {d}
                    </p>
                  ))}
                </div>

                <div className="mt-8 border-t border-border pt-6">
                  <h3 className="font-display text-base font-bold text-foreground">
                    Key Event Outcomes & Impact
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {active.outcomes.map((o, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
