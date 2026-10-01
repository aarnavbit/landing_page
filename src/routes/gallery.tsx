import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { X, ArrowUpRight } from "lucide-react";
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
const SOURCE = "https://drive.google.com/drive/folders/1Ke3aiMeFT-KGjbrtnXj6PJs2by4uUdoT";
export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Gallery — AARNA Skill Quest" },
    { name: "description", content: "Scenes from AARNA's Skill Quest: students, speakers, and creative work at VBIT." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { property: "og:title", content: "Gallery — AARNA Skill Quest" },
    { property: "og:description", content: "Explore photographs from AARNA's Skill Quest event at VBIT." },
  ] }),
  component: Gallery,
});

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const firstY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -46]);
  const secondY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : 34]);
  const thirdY = useTransform(scrollYProgress, [0, 1], [0, reducedMotion ? 0 : -28]);
  const columnOffsets = [firstY, secondY, thirdY] as const;
  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setSelected(null); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [selected]);
  return <div>
    <section className="border-b border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-5 pb-12 pt-16 md:pb-16 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">AARNA / In frames</p>
        <h1 className="mt-4 font-display text-4xl font-semibold md:text-6xl">The gallery.</h1>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">Skill Quest, through the eyes of the people who made it happen.</p>
          
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl overflow-hidden px-2 py-10 sm:px-5 md:py-16">
      <div className="grid grid-cols-3 items-start gap-1.5 sm:gap-3 md:gap-5">
        {COLUMNS.map((column, columnIndex) => <motion.div key={columnIndex} style={{ y: columnOffsets[columnIndex] ?? firstY }} className="grid gap-1.5 sm:gap-3 md:gap-5">
          {column.map((photo, rowIndex) => {
            const photoIndex = PHOTOS.findIndex(candidate => candidate.asset_id === photo.asset_id);
            return <motion.div
              key={photo.asset_id}
              initial={reducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: Math.min(rowIndex * 0.035, 0.18) }}
            >
              <Button variant="ghost" onClick={() => setSelected(photoIndex)} aria-label={`Open Skill Quest photo ${photoIndex + 1}`} className={`group relative h-auto w-full overflow-hidden rounded-sm p-0 shadow-none ${photoIndex % 7 === 0 || photoIndex % 7 === 4 ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
                <img src={photo.url} alt={`Skill Quest event photograph ${photoIndex + 1}`} loading={photoIndex < 6 ? "eager" : "lazy"} className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-60" />
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-4 md:p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-left font-display font-semibold text-primary/90 text-sm md:text-base">Skill Quest</span>
                  <span className="text-left text-xs md:text-sm text-foreground">In frames</span>
                </div>
              </Button>
            </motion.div>;
          })}
        </motion.div>)}
      </div>
    </section>
    {selected !== null && <div className="fixed inset-0 z-[70] flex items-center justify-center bg-background/95 p-3 backdrop-blur-md" role="dialog" aria-modal="true" aria-label={`Skill Quest photo ${selected + 1}`} onClick={() => setSelected(null)}>
      <Button variant="outline" size="icon" onClick={() => setSelected(null)} aria-label="Close photo" className="absolute right-4 top-4 z-10"><X /></Button>
       <img src={PHOTOS[selected]?.url} alt={`Skill Quest event photograph ${selected + 1}`} className="max-h-[85vh] max-w-full object-contain" onClick={e => e.stopPropagation()} />
      <span className="absolute bottom-4 text-xs text-muted-foreground">{selected + 1} / {PHOTOS.length}</span>
    </div>}
  </div>;
}
