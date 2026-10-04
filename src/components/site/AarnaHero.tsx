import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import {
  Sparkles,
  Zap,
  Palette,
  Rocket,
  TrendingUp,
  IndianRupee,
  type LucideIcon,
} from "lucide-react";

import { AARNA_MOTION } from "./aarnaMotion";
import { arnaTools } from "../../data/arnaTools";

const RINGS: OrbitRingDef[] = [
  {
    id: "inner",
    radius: 120,
    duration: 26,
    direction: 1,
    strokeGradientId: "gradInner",
    dashArray: "3 8",
    particles: [
      { id: "p-in-1", angleDeg: 90, size: 3.5, color: "#fc8d31" },
      { id: "p-in-2", angleDeg: 270, size: 3, color: "#febf15" },
    ],
    items: [
      {
        id: "passion",
        step: "01",
        title: "PASSION",
        tag: "Ignite",
        angleDeg: 0,
        icon: Sparkles,
        accentColor: "#fc8d31",
        glowColor: "rgba(252, 141, 49, 0.45)",
        badgeGradient: "from-[#fc8d31]/30 to-[#febf15]/10",
      },
      {
        id: "skills",
        step: "02",
        title: "SKILLS",
        tag: "Master",
        angleDeg: 180,
        icon: Zap,
        accentColor: "#f5b400",
        glowColor: "rgba(245, 180, 0, 0.45)",
        badgeGradient: "from-[#f5b400]/30 to-[#fc8d31]/10",
      },
    ],
  },
  {
    id: "middle",
    radius: 190,
    duration: 36,
    direction: -1, // counter-clockwise
    strokeGradientId: "gradMiddle",
    dashArray: "4 10",
    particles: [
      { id: "p-mid-1", angleDeg: 155, size: 3.5, color: "#fc4c37" },
      { id: "p-mid-2", angleDeg: 335, size: 4, color: "#dc0694" },
    ],
    items: [
      {
        id: "create",
        step: "03",
        title: "CREATE",
        tag: "Build",
        angleDeg: 65,
        icon: Palette,
        accentColor: "#fc4c37",
        glowColor: "rgba(252, 76, 55, 0.45)",
        badgeGradient: "from-[#fc4c37]/30 to-[#dc0694]/10",
      },
      {
        id: "opportunity",
        step: "04",
        title: "OPPORTUNITY",
        tag: "Unlock",
        angleDeg: 245,
        icon: Rocket,
        accentColor: "#dc0694",
        glowColor: "rgba(220, 6, 148, 0.45)",
        badgeGradient: "from-[#dc0694]/30 to-[#8b5cf6]/10",
      },
    ],
  },
  {
    id: "outer",
    radius: 260,
    duration: 48,
    direction: 1, // clockwise
    strokeGradientId: "gradOuter",
    dashArray: "5 12",
    particles: [
      { id: "p-out-1", angleDeg: 40, size: 3.5, color: "#a855f7" },
      { id: "p-out-2", angleDeg: 220, size: 4, color: "#febf15" },
    ],
    items: [
      {
        id: "income",
        step: "05",
        title: "INCOME",
        tag: "Scale",
        angleDeg: 130,
        icon: TrendingUp,
        accentColor: "#a855f7",
        glowColor: "rgba(168, 85, 247, 0.45)",
        badgeGradient: "from-[#a855f7]/30 to-[#10b981]/10",
      },
      {
        id: "money",
        step: "06",
        title: "₹ MONETIZE",
        tag: "Profit",
        angleDeg: 310,
        icon: IndianRupee,
        accentColor: "#febf15",
        glowColor: "rgba(254, 191, 21, 0.5)",
        badgeGradient: "from-[#febf15]/30 to-[#10b981]/15",
      },
    ],
  },
];

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
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // Scroll-driven transition using Framer Motion (native, seamless, zero library collisions)
  const { scrollY } = useScroll();
  // Hero scroll range: 0px to 350px
  const orbitOpacity = useTransform(scrollY, [0, 220], [1, 0]);
  const orbitScale = useTransform(scrollY, [0, 280], [1, 1.28]);
  const logoScrollY = useTransform(scrollY, [0, 320], [0, 110]);
  const logoScrollScale = useTransform(scrollY, [0, 320], [1, 0.85]);

  // Subtle Mouse Parallax Springs
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
    const logoWrap = stage.querySelector<HTMLElement>(".aarna-logo-wrap");
    if (!logoWrap) return;

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
          logoWrap,
          { opacity: 0, scale: 0.82 },
          { opacity: 1, scale: 1.035, duration: 0.5, ease: "back.out(2)" },
          "-=0.28",
        )
        .to(logoWrap, { scale: 1, duration: 0.35, ease: "power2.out" })
        .to(tiles, { opacity: 0.12, duration: 0.45 }, `+=${AARNA_MOTION.hold}`)
        .to(logoWrap, { opacity: 0.22, scale: 0.94, duration: 0.55, ease: "power2.in" });
    }, stage);

    return () => scope.revert();
  }, [reducedMotion, canStart]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width - 0.5) * AARNA_MOTION.parallax * 2);
    pointerY.set(((event.clientY - rect.top) / rect.height - 0.5) * AARNA_MOTION.parallax * 2);
  };

  const handlePointerLeave = () => {
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
        {/* Replace SVG A mark with aarna-logo.svg */}
        <div className="aarna-logo-wrap relative z-20 flex items-center justify-center">
          <img
            src="/icons/aarna-logo.svg"
            alt="Aarna"
            className="h-40 w-40 md:h-56 md:w-56 lg:h-64 lg:w-64 object-contain drop-shadow-[0_0_30px_rgba(245,180,0,0.3)] animate-float-soft"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  );
}
