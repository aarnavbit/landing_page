import { useCallback, useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { AARNA_MOTION } from "./aarnaMotion";

const P = AARNA_MOTION.preloader;
const EASE_OUT = AARNA_MOTION.ease.out;

/* ─── Session guard — show preloader only on first visit ── */
const STORAGE_KEY = "aarna-preloader-seen";

export function hasSeenPreloader(): boolean {
  if (typeof window === "undefined") return false;
  
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("debug-preloader") === "true") {
      return false;
    }
  } catch {
    // ignore
  }

  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}
function markPreloaderSeen(): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* noop — storage may be unavailable */
  }
}

/* ─── Scroll lock helpers ────────────────────────────────── */
function lockScroll() {
  if (typeof document === "undefined") return;
  const scrollbarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
}
function unlockScroll() {
  if (typeof document === "undefined") return;
  document.body.style.overflow = "";
  document.body.style.paddingRight = "";
}

/* ─── Preloader component ────────────────────────────────── */
export function Preloader({
  onComplete,
}: {
  onComplete?: () => void;
}) {
  const reducedMotion = useReducedMotion();
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    "loading" | "completing" | "exiting" | "done"
  >("loading");
  const startTime = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const exitingRef = useRef(false);

  /* ── Skip entirely if already seen this session ── */
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    if (hasSeenPreloader()) {
      setShouldShow(false);
      setPhase("done");
      if (typeof window !== "undefined") {
        (window as any).__aarnaPreloaderDone = true;
        window.dispatchEvent(new CustomEvent("aarna:preloader-done"));
      }
    }
  }, []);

  /* ── Asset readiness check ── */
  const checkCriticalAssets = useCallback(() => {
    if (typeof document === "undefined") return false;
    const fonts = (document as any).fonts;
    if (fonts && typeof fonts.check === "function") {
      const sora = fonts.check("16px Sora");
      const manrope = fonts.check("16px Manrope");
      return sora && manrope;
    }
    return true; // can't check → assume ready
  }, []);

  /* ── Progress simulation driven by real asset loading ── */
  useEffect(() => {
    if (!shouldShow || phase !== "loading") return;

    lockScroll();

    const tick = () => {
      const elapsed = Date.now() - startTime.current;
      const assetsReady = checkCriticalAssets();
      const naturalProgress = Math.min(
        elapsed / P.minDuration,
        1,
      );

      // Progress accelerates once assets are ready
      let targetProgress: number;
      if (assetsReady && elapsed >= P.minDuration * 0.5) {
        // Assets ready — rush to 100
        const rushElapsed = elapsed - P.minDuration * 0.5;
        const rushDuration = P.minDuration * 0.5;
        targetProgress = Math.min(
          0.5 + (rushElapsed / rushDuration) * 0.5,
          1,
        );
      } else {
        // Ease progress — slow down around 60-80% to feel natural
        targetProgress =
          naturalProgress < 0.6
            ? naturalProgress
            : 0.6 + (naturalProgress - 0.6) * 0.7;
      }

      setProgress(Math.min(targetProgress, 1));

      const pastMinimum = elapsed >= P.minDuration;
      const pastMax = elapsed >= P.maxDuration;

      if ((pastMinimum && assetsReady) || pastMax) {
        setProgress(1);
        setPhase("completing");
        return; // stop RAF loop
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafRef.current);
    };
  }, [shouldShow, phase, checkCriticalAssets]);

  /* ── Completing → exiting ── */
  useEffect(() => {
    if (phase !== "completing") return;
    const delay = reducedMotion ? 100 : 350;
    const id = setTimeout(() => setPhase("exiting"), delay);
    return () => clearTimeout(id);
  }, [phase, reducedMotion]);

  /* ── Exiting → done ── */
  useEffect(() => {
    if (phase !== "exiting" || exitingRef.current) return;
    exitingRef.current = true;
    const duration = reducedMotion ? 200 : P.exitDuration * 1000 + 400;
    const id = setTimeout(() => {
      setPhase("done");
      unlockScroll();
      markPreloaderSeen();
      if (typeof window !== "undefined") {
        (window as any).__aarnaPreloaderDone = true;
        window.dispatchEvent(new CustomEvent("aarna:preloader-done"));
      }
      onComplete?.();
    }, duration);
    return () => clearTimeout(id);
  }, [phase, reducedMotion, onComplete]);

  /* ── Don't render if already seen or done ── */
  if (!shouldShow || phase === "done") return null;

  const pct = Math.round(progress * 100);
  const isExiting = phase === "exiting";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          className="aarna-preloader"
          aria-live="polite"
          aria-label="Loading AARNA experience"
          role="status"
          initial={{ opacity: 1 }}
          exit={
            reducedMotion
              ? { opacity: 0 }
              : {
                  clipPath: "inset(0 0 100% 0)",
                  transition: {
                    duration: P.exitDuration,
                    ease: EASE_OUT,
                  },
                }
          }
        >
          {/* ── Dark background layer ── */}
          <motion.div
            className="aarna-preloader__bg"
            animate={
              isExiting
                ? { opacity: 0 }
                : { opacity: 1 }
            }
            transition={{ duration: P.exitDuration, ease: EASE_OUT }}
          />

          {/* ── Content container ── */}
          <div className="aarna-preloader__content">
            {/* Micro identity: AARNA / 2026 */}
            <motion.p
              className="aarna-preloader__micro"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
              animate={{ opacity: isExiting ? 0 : 0.5, y: 0 }}
              transition={{
                duration: P.microIdentityDuration,
                delay: isExiting ? 0 : P.microIdentityDelay,
                ease: EASE_OUT,
              }}
            >
              AARNA / 2026
            </motion.p>

            {/* ARNA logo — white horizontal wordmark */}
            <motion.div
              className="aarna-preloader__logo-wrap"
              initial={
                reducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 0.94, filter: "blur(8px)" }
              }
              animate={
                isExiting
                  ? {
                      opacity: 0,
                      scale: 0.96,
                      y: -20,
                      transition: {
                        duration: P.exitDuration * 0.8,
                        ease: EASE_OUT,
                      },
                    }
                  : {
                      opacity: 1,
                      scale: 1,
                      filter: "blur(0px)",
                      transition: {
                        duration: P.markRevealDuration,
                        delay: P.markRevealDelay,
                        ease: EASE_OUT,
                      },
                    }
              }
            >
              <img
                src="/icons/arna-logo-white.svg"
                alt="AARNA"
                className="aarna-preloader__logo"
                width={708}
                height={152}
                draggable={false}
              />
              {/* Light sweep overlay */}
              {!reducedMotion && (
                <motion.div
                  className="aarna-preloader__sweep"
                  initial={{ x: "-100%" }}
                  animate={
                    isExiting
                      ? { x: "-100%" }
                      : { x: "200%" }
                  }
                  transition={{
                    duration: P.sweepDuration,
                    delay: P.sweepDelay,
                    ease: EASE_OUT,
                  }}
                />
              )}
            </motion.div>

            {/* Loading progress */}
            <motion.div
              className="aarna-preloader__progress"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0 }}
              animate={{ opacity: isExiting ? 0 : 0.4 }}
              transition={{
                duration: 0.3,
                delay: isExiting ? 0 : P.progressFadeIn,
                ease: EASE_OUT,
              }}
            >
              <span className="aarna-preloader__pct">{pct}%</span>
              <div className="aarna-preloader__bar">
                <motion.div
                  className="aarna-preloader__bar-fill"
                  style={{ width: `${pct}%` }}
                  transition={{ duration: 0.15, ease: "linear" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
