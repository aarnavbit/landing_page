import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { AarnaMark } from "./AarnaMark";
import { AARNA_MOTION } from "./aarnaMotion";
import { arnaTools } from "../../data/arnaTools";

const PIXELS = [
  [11, 1], [10, 2], [11, 2], [12, 2], [9, 3], [10, 3], [11, 3], [12, 3], [13, 3],
  [9, 4], [10, 4], [12, 4], [13, 4], [8, 5], [9, 5], [13, 5], [14, 5],
  [8, 6], [9, 6], [14, 6], [15, 6], [7, 7], [8, 7], [15, 7], [16, 7],
  [7, 8], [8, 8], [16, 8], [17, 8], [6, 9], [7, 9], [17, 9], [18, 9],
  [6, 10], [7, 10], [8, 10], [9, 10], [10, 10], [11, 10], [12, 10], [13, 10], [14, 10], [15, 10], [16, 10], [17, 10], [18, 10],
  [5, 11], [6, 11], [18, 11], [19, 11], [5, 12], [6, 12], [19, 12], [20, 12],
  [4, 13], [5, 13], [20, 13], [21, 13], [4, 14], [5, 14], [21, 14], [22, 14],
] as const;

const ORBIT_VARIANTS = {
  inner: { radius: 120, duration: 30, direction: 1 },
  middle: { radius: 180, duration: 45, direction: -1 },
  outer: { radius: 240, duration: 60, direction: 1 },
};

function OrbitRing({ layer, tools }: { layer: "inner" | "middle" | "outer"; tools: typeof arnaTools }) {
  const config = ORBIT_VARIANTS[layer];
  const count = tools.length;
  
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
      <div 
        className="absolute top-1/2 left-1/2 rounded-full border border-primary/5"
        style={{ 
          width: config.radius * 2, 
          height: config.radius * 2,
          transform: 'translate(-50%, -50%)'
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2"
        animate={{ rotate: 360 * config.direction }}
        transition={{ duration: config.duration, ease: "linear", repeat: Infinity }}
      >
        {tools.map((tool, i) => {
          const angle = (i / count) * Math.PI * 2;
          const x = Math.cos(angle) * config.radius;
          const y = Math.sin(angle) * config.radius;
          
          return (
            <div
              key={tool.id}
              className="absolute pointer-events-auto"
              style={{
                top: y,
                left: x,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <motion.div
                className="group relative flex h-[42px] w-[42px] md:h-12 md:w-12 items-center justify-center rounded-full bg-surface-2 border border-border/50 shadow-[0_0_15px_rgba(0,0,0,0.5)] backdrop-blur-sm transition-colors hover:border-primary hover:bg-surface"
                animate={{ rotate: -360 * config.direction }}
                transition={{ duration: config.duration, ease: "linear", repeat: Infinity }}
                whileHover={{ scale: 1.15 }}
              >
                <img src={tool.iconUrl} alt={tool.name} className="h-5 w-5 md:h-6 md:w-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap bg-surface-2 border border-border px-2 py-1 rounded text-[10px] font-medium tracking-wide">
                  <span className="block text-primary">{tool.name.toUpperCase()}</span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function AarnaHeroVisual() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, AARNA_MOTION.spring);
  const y = useSpring(pointerY, AARNA_MOTION.spring);

  // Sync hero animation with preloader exit
  const [canStart, setCanStart] = useState(() => {
    if (typeof window === "undefined") return true;
    try {
      return sessionStorage.getItem("aarna-preloader-seen") === "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (canStart) return;
    const handler = () => setCanStart(true);
    window.addEventListener("aarna-preloader-exit", handler);
    return () => window.removeEventListener("aarna-preloader-exit", handler);
  }, [canStart]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || reducedMotion || !canStart) return;

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
  }, [reducedMotion, canStart]);

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
      className="aarna-hero-visual relative flex h-[500px] w-full items-center justify-center overflow-visible"
      onPointerMove={onPointerMove}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <motion.div ref={stageRef} style={{ x, y }} className="aarna-hero-stage relative flex items-center justify-center">
        {/* Orbit Rings */}
        {!reducedMotion && (
          <>
            <OrbitRing layer="outer" tools={arnaTools.filter(t => t.orbitLayer === "outer")} />
            <OrbitRing layer="middle" tools={arnaTools.filter(t => t.orbitLayer === "middle")} />
            <OrbitRing layer="inner" tools={arnaTools.filter(t => t.orbitLayer === "inner")} />
          </>
        )}

        <div className="aarna-pixel-grid absolute">
          {PIXELS.map(([column, row]) => (
            <span
              key={`${column}-${row}`}
              className="aarna-assembly-tile"
              style={{ "--tile-x": column, "--tile-y": row } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="aarna-mark-wrap relative z-20">
          <AarnaMark />
        </div>
      </motion.div>
    </div>
  );
}
