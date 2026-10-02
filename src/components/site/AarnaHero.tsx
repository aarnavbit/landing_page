import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";

import { AarnaMark } from "./AarnaMark";
import { AARNA_MOTION } from "./aarnaMotion";

const PIXELS = [
  [11, 1],
  [10, 2],
  [11, 2],
  [12, 2],
  [9, 3],
  [10, 3],
  [11, 3],
  [12, 3],
  [13, 3],
  [9, 4],
  [10, 4],
  [12, 4],
  [13, 4],
  [8, 5],
  [9, 5],
  [13, 5],
  [14, 5],
  [8, 6],
  [9, 6],
  [14, 6],
  [15, 6],
  [7, 7],
  [8, 7],
  [15, 7],
  [16, 7],
  [7, 8],
  [8, 8],
  [16, 8],
  [17, 8],
  [6, 9],
  [7, 9],
  [17, 9],
  [18, 9],
  [6, 10],
  [7, 10],
  [8, 10],
  [9, 10],
  [10, 10],
  [11, 10],
  [12, 10],
  [13, 10],
  [14, 10],
  [15, 10],
  [16, 10],
  [17, 10],
  [18, 10],
  [5, 11],
  [6, 11],
  [18, 11],
  [19, 11],
  [5, 12],
  [6, 12],
  [19, 12],
  [20, 12],
  [4, 13],
  [5, 13],
  [20, 13],
  [21, 13],
  [4, 14],
  [5, 14],
  [21, 14],
  [22, 14],
] as const;

export function AarnaHeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, AARNA_MOTION.spring);
  const y = useSpring(pointerY, AARNA_MOTION.spring);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion) return;

    const tiles = stage.querySelectorAll<HTMLElement>(".aarna-assembly-tile");
    const mark = stage.querySelector<HTMLElement>(".aarna-mark-wrap");
    if (!mark) return;

    const scope = gsap.context(() => {
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.8 });
      timeline
        .fromTo(
          tiles,
          { opacity: 0, scale: 0.15, rotate: -120, y: -18 },
          {
            opacity: 0.9,
            scale: 1,
            rotate: 0,
            y: 0,
            duration: AARNA_MOTION.tileDuration,
            stagger: { each: AARNA_MOTION.tileStagger, from: "center" },
            ease: "back.out(1.6)",
          },
        )
        .fromTo(
          mark,
          { opacity: 0, scale: 0.82 },
          { opacity: 1, scale: 1.035, duration: 0.5, ease: "back.out(2)" },
          "-=0.28",
        )
        .to(mark, { scale: 1, duration: 0.35, ease: "power2.out" })
        .to(tiles, { opacity: 0.12, duration: 0.45 }, `+=${AARNA_MOTION.hold}`)
        .to(mark, { opacity: 0.22, scale: 0.94, duration: 0.55, ease: "power2.in" });
    }, stage);

    return () => scope.revert();
  }, [reducedMotion]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * AARNA_MOTION.parallax * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * AARNA_MOTION.parallax * 2);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      className="aarna-hero-visual"
      onPointerMove={onPointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <motion.div ref={stageRef} style={{ x, y }} className="aarna-hero-stage">
        <div className="aarna-pixel-grid">
          {PIXELS.map(([column, row]) => (
            <span
              key={`${column}-${row}`}
              className="aarna-assembly-tile"
              style={{ "--tile-x": column, "--tile-y": row } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="aarna-mark-wrap">
          <AarnaMark />
        </div>
      </motion.div>
    </div>
  );
}
