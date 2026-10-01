/**
 * AARNA Motion System — centralized motion tokens.
 *
 * All animation durations, easings and spring configs live here so
 * the preloader, hero and future components share a coherent feel.
 */

/* ─── Durations (seconds) ───────────────────────────────── */
const DURATION = {
  /** Micro interactions — hover, focus, icon swap */
  fast: 0.2,
  /** Standard UI transitions */
  normal: 0.45,
  /** Section reveals, heavy transitions */
  slow: 0.75,
} as const;

/* ─── Easings ───────────────────────────────────────────── */
const EASE = {
  /** Default UI ease — fast start, gentle settle */
  out: [0.22, 1, 0.36, 1] as const,
  /** Entrance ease — smooth deceleration */
  outQuart: [0.25, 1, 0.5, 1] as const,
  /** Exit ease — gentle acceleration */
  inQuart: [0.5, 0, 0.75, 0] as const,
  /** Natural ease-in-out for breathing / glow */
  smooth: [0.4, 0, 0.2, 1] as const,
} as const;

/* ─── Spring (Motion / Framer Motion) ───────────────────── */
const SPRING = {
  /** Default interactive spring (pointer parallax, cards) */
  stiffness: 115,
  damping: 20,
  mass: 0.6,
} as const;

/* ─── Hero pixel assembly (GSAP) ────────────────────────── */
const HERO = {
  tileDuration: 0.72,
  tileStagger: 0.009,
  hold: 2.1,
} as const;

/* ─── Preloader timeline ────────────────────────────────── */
const PRELOADER = {
  /** Minimum ms the preloader stays visible (prevents flash on fast loads) */
  minDuration: 1800,
  /** Maximum ms before auto-dismissing regardless of assets */
  maxDuration: 4000,

  /* Phase durations (seconds) */
  microIdentityDelay: 0.1,
  microIdentityDuration: 0.4,

  markRevealDelay: 0.2,
  markRevealDuration: 0.9,

  logoTransitionDelay: 0.9,
  logoTransitionDuration: 0.5,

  sweepDelay: 1.3,
  sweepDuration: 0.4,

  progressFadeIn: 0.3,

  /** Exit animation — preloader retracts to reveal hero */
  exitDuration: 0.65,
  exitStagger: 0.08,

  /** Spring for the logo settle on exit */
  exitSpring: { stiffness: 120, damping: 22, mass: 0.7 },
} as const;

/* ─── Public export ─────────────────────────────────────── */
export const AARNA_MOTION = {
  duration: DURATION,
  ease: EASE,
  spring: SPRING,
  hero: HERO,
  preloader: PRELOADER,

  /* Legacy aliases used by AarnaHero — keeps existing code working */
  parallax: 8,
  tileDuration: HERO.tileDuration,
  tileStagger: HERO.tileStagger,
  hold: HERO.hold,
} as const;
