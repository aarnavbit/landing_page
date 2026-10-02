import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { X, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";

const PHOTOS = Array.from({ length: 26 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return { asset_id: `photo-${n}`, url: `/gallery/photo-${n}.webp` };
});

const COLUMNS = [
  PHOTOS.filter((_, index) => index % 3 === 0),
  PHOTOS.filter((_, index) => index % 3 === 1),
  PHOTOS.filter((_, index) => index % 3 === 2),
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — AARNA Club, VBIT" },
      {
        name: "description",
        content: "Scenes from AARNA's Skill Quest: students, speakers, and creative work at VBIT.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Gallery — AARNA Club" },
      {
        property: "og:description",
        content: "Explore photographs from AARNA's Skill Quest event at VBIT.",
      },
    ],
  }),
  component: Gallery,
});

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const firstY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -36]);
  const secondY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 28]);
  const thirdY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -20]);

  const columnOffsets = [firstY, secondY, thirdY] as const;

  const handleNext = useCallback(() => {
    setSelected((prev) => (prev !== null ? (prev + 1) % PHOTOS.length : null));
  }, []);

  const handlePrev = useCallback(() => {
    setSelected((prev) => (prev !== null ? (prev - 1 + PHOTOS.length) % PHOTOS.length : null));
  }, []);

  useEffect(() => {
    if (selected === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") handleNext();
      if (event.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, handleNext, handlePrev]);

  return (
    <div className="relative overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Skill Quest · VBIT
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl tracking-tight">
            The Gallery.
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
            Skill Quest through the eyes of the students, mentors, and speakers who made it happen
            at VBIT.
          </p>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="mx-auto max-w-6xl px-3 py-10 sm:px-5 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 items-start gap-2.5 sm:gap-4 md:gap-5">
          {COLUMNS.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              style={{ y: columnOffsets[columnIndex] ?? firstY }}
              className={`grid gap-2.5 sm:gap-4 md:gap-5 ${
                columnIndex === 2 ? "hidden md:grid" : ""
              }`}
            >
              {column.map((photo, rowIndex) => {
                const photoIndex = PHOTOS.findIndex(
                  (candidate) => candidate.asset_id === photo.asset_id,
                );
                return (
                  <motion.div
                    key={photo.asset_id}
                    initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: Math.min(rowIndex * 0.04, 0.2) }}
                  >
                    <button
                      onClick={() => setSelected(photoIndex)}
                      aria-label={`Open Skill Quest photo ${photoIndex + 1}`}
                      className={`group relative h-auto w-full overflow-hidden rounded-xl border border-border bg-surface shadow-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                        photoIndex % 5 === 0 ? "aspect-[3/4]" : "aspect-[4/5]"
                      }`}
                    >
                      <img
                        src={photo.url}
                        alt={`Skill Quest event photograph ${photoIndex + 1}`}
                        loading={photoIndex < 6 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                        <span className="text-xs font-semibold text-white">
                          Skill Quest #{photoIndex + 1}
                        </span>
                      </div>
                    </button>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-md p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Skill Quest photo ${selected + 1} of ${PHOTOS.length}`}
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSelected(null)}
            aria-label="Close photo lightbox"
            className="absolute right-4 top-4 z-20 rounded-full border-border bg-surface text-foreground hover:bg-surface-2"
          >
            <X className="h-5 w-5" />
          </Button>

          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous photograph"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full border-border bg-surface text-foreground hover:bg-surface-2 h-11 w-11"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next photograph"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full border-border bg-surface text-foreground hover:bg-surface-2 h-11 w-11"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Container */}
          <div
            className="relative max-h-[82vh] max-w-4xl overflow-hidden rounded-2xl border border-border shadow-2xl bg-black flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={PHOTOS[selected]?.url}
              alt={`Skill Quest event photograph ${selected + 1}`}
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Footer Counter & Details */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 rounded-full border border-border bg-surface/80 px-4 py-1.5 backdrop-blur-md text-xs font-semibold text-foreground shadow-md"
            onClick={(e) => e.stopPropagation()}
          >
            Photo {selected + 1} of {PHOTOS.length}
          </div>
        </div>
      )}
    </div>
  );
}
