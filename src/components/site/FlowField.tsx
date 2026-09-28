import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useReducedMotion } from "motion/react";
import pixelMark from "../../assets/aarna-orange-pixel.png";

// The grid traces the silhouette of the supplied pixelated Aarna mark.
const SHAPE = [
  "000000000000000000000000000000000000",
  "000000000000000000000000000000000000",
  "000000000000000000000000000000000000",
  "000000000000000000000000000000000000",
  "000000000000000000000000000000000000",
  "000000000000000000000000000000000000",
  "000000000000000001100000000000000000",
  "000000000000000001100000000000000000",
  "000000000000000011110000000000000000",
  "000000000000000111111000000000000000",
  "000000000000000111111000000000000000",
  "000000000000000111111000000000000000",
  "000000000000001111111100000000000000",
  "000000000000001111111100000000000000",
  "000000000000011111111110000000000000",
  "000000000000111110011111000000000000",
  "000000000000111110011111100000000000",
  "000000000001111100001111100000000000",
  "000000000011111100000111110000000000",
  "000000000011111000000111110000000000",
  "000000000111111111111111111000000000",
  "000000000111110111111011111000000000",
  "000000001111110111111001111100000000",
  "000000001111111000111111111100000000",
  "000000011111110111110001111110000000",
  "000000011111000111100000011111000000",
  "000000111100000110000000001111000000",
  "000001100110011011100110001001100000",
  "000000000110011001110010011000000000",
  "000000000000000000100000000000000000",
];

const TILES = SHAPE.flatMap((row, y) =>
  [...row].flatMap((cell, x) => cell === "1" ? [{ x, y }] : []),
);

export function FlowField() {
  const stage = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion || !stage.current) return;
    const scope = gsap.context(() => {
      const tiles = gsap.utils.toArray<HTMLElement>(".aarna-tile");
      const logo = stage.current?.querySelector<HTMLElement>(".aarna-pixel-logo");
      if (!logo) return;
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.55 });
      timeline
        .fromTo(tiles, { opacity: 0, scale: 0.1, rotation: -90, x: (_, el) => (Number((el as HTMLElement).dataset['x']) - 18) * 2, y: -22 },
          { opacity: 0.92, scale: 1, rotation: 0, x: 0, y: 0, duration: 0.65, stagger: { each: 0.012, from: "center", grid: "auto" }, ease: "back.out(1.8)" })
        .fromTo(logo, { opacity: 0.12, scale: 0.78 }, { opacity: 0.68, scale: 1.04, duration: 0.45, ease: "back.out(2)" }, "-=0.3")
        .to(logo, { scale: 1, duration: 0.35, ease: "power2.out" })
        .to(tiles, { opacity: 0, scale: 0.75, rotation: 90, duration: 0.4, stagger: { each: 0.004, from: "edges" }, ease: "power2.in" }, "+=1.3")
        .to(logo, { opacity: 0.12, scale: 0.88, duration: 0.5 }, "-=0.2");
    }, stage);
    return () => scope.revert();
  }, [reducedMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        ref={stage}
        className="absolute bottom-2 right-[-5%] aspect-square w-[min(80vw,320px)] sm:bottom-auto sm:right-[-4%] sm:top-1/2 sm:w-[min(85vw,620px)] sm:-translate-y-1/2 lg:right-[2%]"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={pixelMark} alt="" className="aarna-pixel-logo absolute inset-0 h-full w-full object-contain opacity-60" />
        <div className="absolute inset-0">
          {TILES.map(({ x, y }) => (
            <span
              key={`${x}-${y}`}
              data-x={x}
              className="aarna-tile absolute block aspect-square bg-accent/90"
              style={{ left: `${x / 36 * 100}%`, top: `${y / 36 * 100}%`, width: `${100 / 36}%` }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}