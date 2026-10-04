import React, { useRef } from "react";
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

interface OrbitItem {
  id: string;
  step: string;
  title: string;
  tag: string;
  angleDeg: number;
  icon: LucideIcon;
  accentColor: string;
  glowColor: string;
  badgeGradient: string;
}

interface OrbitRingDef {
  id: string;
  radius: number; // in pixels at 100% scale
  duration: number; // in seconds
  direction: 1 | -1; // 1 = clockwise, -1 = counter-clockwise
  strokeGradientId: string;
  dashArray: string;
  particles: {
    id: string;
    angleDeg: number;
    size: number;
    color: string;
  }[];
  items: OrbitItem[];
}

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

  const springConfig = { stiffness: 85, damping: 20, mass: 0.5 };
  const smoothX = useSpring(pointerX, springConfig);
  const smoothY = useSpring(pointerY, springConfig);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch" || reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 36;
    const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 36;
    pointerX.set(nx);
    pointerY.set(ny);
  };

  const handlePointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className="aarna-hero-visual relative flex h-[380px] sm:h-[460px] md:h-[530px] lg:h-[600px] w-full items-center justify-center overflow-visible select-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-label="Aarna interactive orbital creative-commerce animation"
    >
      {/* Responsive Scaler: Scales the 580px coordinate stage cleanly across all screen sizes */}
      <div className="scale-[0.62] sm:scale-[0.8] md:scale-[0.92] lg:scale-100 origin-center transition-transform duration-300 flex items-center justify-center">
        {/* 580x580 Master Stage: Mathematical Center is strictly at (290, 290) */}
        <motion.div
          style={{ x: smoothX, y: smoothY }}
          className="relative w-[580px] h-[580px] flex items-center justify-center pointer-events-none"
        >
          {/* ── Layer 1: Ambient Volumetric Glow Behind Central Logo ── */}
          <div className="absolute inset-0 m-auto w-[360px] h-[360px] flex items-center justify-center pointer-events-none z-0">
            <div
              className="rounded-full blur-3xl opacity-75 animate-pulse-glow w-full h-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(252, 141, 49, 0.42) 0%, rgba(220, 6, 148, 0.28) 45%, rgba(139, 92, 246, 0.1) 75%, transparent 100%)",
              }}
            />
          </div>

          {/* ── Layer 2: Orbital System (SVG Tracks, Rotating Rings, Particles, Cards) ── */}
          {/* Reacts smoothly to scroll: expands and fades away */}
          <motion.div
            style={{ opacity: orbitOpacity, scale: orbitScale }}
            className="aarna-orbital-system absolute inset-0 m-auto w-[580px] h-[580px] flex items-center justify-center pointer-events-none z-10"
          >
            {/* SVG Concentric Orbit Tracks: Centered exactly at (290, 290) */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              viewBox="0 0 580 580"
            >
              <defs>
                <linearGradient id="gradInner" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fc8d31" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#febf15" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#fc8d31" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradMiddle" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fc4c37" stopOpacity="0.55" />
                  <stop offset="50%" stopColor="#dc0694" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="gradOuter" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#febf15" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.45" />
                </linearGradient>
                <filter id="ringGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 3 Concentric Orbit Rings Centered on (290, 290) */}
              {RINGS.map((ring) => (
                <g key={ring.id}>
                  {/* Subtle outer glow track */}
                  <circle
                    cx="290"
                    cy="290"
                    r={ring.radius}
                    fill="none"
                    stroke={`url(#${ring.strokeGradientId})`}
                    strokeWidth="1.8"
                    strokeDasharray={ring.dashArray}
                    filter="url(#ringGlow)"
                    opacity="0.65"
                  />
                  {/* Crisp inner track */}
                  <circle
                    cx="290"
                    cy="290"
                    r={ring.radius}
                    fill="none"
                    stroke={`url(#${ring.strokeGradientId})`}
                    strokeWidth="1.1"
                    strokeDasharray={ring.dashArray}
                    opacity="0.9"
                  />
                </g>
              ))}
            </svg>

            {/* ── Rotating Orbital Layers (Pure GPU-Accelerated CSS Animations) ── */}
            {/* Zero React re-renders! Constant smooth revolution */}
            {RINGS.map((ring) => {
              const ringAnimation = !reducedMotion
                ? ring.direction === 1
                  ? `aarna-spin-cw ${ring.duration}s linear infinite`
                  : `aarna-spin-ccw ${ring.duration}s linear infinite`
                : "none";

              const counterAnimation = !reducedMotion
                ? ring.direction === 1
                  ? `aarna-spin-ccw ${ring.duration}s linear infinite`
                  : `aarna-spin-cw ${ring.duration}s linear infinite`
                : "none";

              return (
                <div
                  key={ring.id}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    width: `${ring.radius * 2}px`,
                    height: `${ring.radius * 2}px`,
                    animation: ringAnimation,
                  }}
                >
                  {/* Glowing Particles on this ring */}
                  {!reducedMotion &&
                    ring.particles.map((p) => {
                      const rad = (p.angleDeg * Math.PI) / 180;
                      const px = ring.radius + Math.cos(rad) * ring.radius;
                      const py = ring.radius + Math.sin(rad) * ring.radius;

                      return (
                        <div
                          key={p.id}
                          className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ left: `${px}px`, top: `${py}px` }}
                        >
                          <div
                            className="aarna-particle-glow rounded-full"
                            style={{
                              width: `${p.size}px`,
                              height: `${p.size}px`,
                              backgroundColor: p.color,
                              boxShadow: `0 0 10px ${p.color}, 0 0 20px ${p.color}`,
                            }}
                          />
                        </div>
                      );
                    })}

                  {/* Floating Creative-Commerce Cards on this ring */}
                  {ring.items.map((item) => {
                    const rad = (item.angleDeg * Math.PI) / 180;
                    const itemX = ring.radius + Math.cos(rad) * ring.radius;
                    const itemY = ring.radius + Math.sin(rad) * ring.radius;

                    return (
                      <div
                        key={item.id}
                        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
                        style={{ left: `${itemX}px`, top: `${itemY}px` }}
                      >
                        {/* Counter-rotation to cancel out ring rotation: keeps cards 100% level and horizontal! */}
                        <div
                          style={{
                            animation: counterAnimation,
                          }}
                        >
                          {/* Card Badge UI */}
                          <motion.div
                            whileHover={{ scale: 1.15, y: -3 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 22,
                            }}
                            className="group relative flex items-center gap-2.5 rounded-full bg-[#0a0a10]/92 px-3 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-all duration-300 hover:bg-[#12121c]/95 cursor-pointer whitespace-nowrap"
                            style={{
                              border: `1px solid ${item.accentColor}50`,
                              boxShadow: `0 8px 24px rgba(0,0,0,0.65), 0 0 18px ${item.glowColor}`,
                            }}
                          >
                            {/* Glowing Icon Capsule */}
                            <div
                              className={`flex h-6.5 w-6.5 items-center justify-center rounded-full bg-gradient-to-br ${item.badgeGradient} border border-white/15 shadow-inner transition-transform duration-300 group-hover:scale-105`}
                            >
                              <item.icon
                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:scale-110"
                                style={{ color: item.accentColor }}
                              />
                            </div>

                            {/* Typography: Title + Step Tag */}
                            <div className="flex flex-col pr-1 text-left leading-none">
                              <span className="font-display text-[11px] font-bold tracking-wider text-foreground transition-colors group-hover:text-primary">
                                {item.title}
                              </span>
                              <span className="mt-0.5 text-[8.5px] font-semibold uppercase tracking-widest text-muted-foreground/80">
                                {item.step} · {item.tag}
                              </span>
                            </div>

                            {/* Pulsing Status Dot */}
                            <span
                              className="h-1.5 w-1.5 rounded-full"
                              style={{
                                backgroundColor: item.accentColor,
                                boxShadow: `0 0 8px ${item.accentColor}`,
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </motion.div>

          {/* ── Layer 3: Central Official Aarna Logo (Exact Center of All Orbits) ── */}
          {/* Stays at center at top; smoothly guides downward during scroll */}
          <motion.div
            style={{
              y: logoScrollY,
              scale: logoScrollScale,
            }}
            className="aarna-center-core absolute inset-0 m-auto w-fit h-fit z-20 flex items-center justify-center pointer-events-auto"
          >
            <div className="relative flex items-center justify-center">
              {/* Micro Concentric Energy Rings Around Logo */}
              <div
                className="absolute inset-[-18px] rounded-full border border-primary/25 pointer-events-none animate-pulse-glow"
                style={{ animationDuration: "4.5s" }}
              />
              <div className="absolute inset-[-32px] rounded-full border border-white/5 pointer-events-none" />

              {/* Central Official Logo Asset */}
              <div className="relative flex items-center justify-center p-4">
                <img
                  src="/aarna-transparent.png"
                  alt="AARNA"
                  className="aarna-core-logo h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-56 lg:w-56 object-contain select-none pointer-events-none drop-shadow-[0_0_35px_rgba(252,141,49,0.5)] drop-shadow-[0_0_75px_rgba(220,6,148,0.35)] transition-transform duration-300"
                  draggable={false}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.endsWith("aarna-logo.svg")) {
                      target.src = "/icons/aarna-logo.svg";
                    }
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
