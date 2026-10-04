import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { hasSeenPreloader } from "./Preloader";

const ISHANYA_URL = "https://aarna-dy9.pages.dev/ishanya";

export function IshanyaPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // Check if preloader is already done
    const checkDoneAndTrigger = () => {
      const alreadyDone =
        typeof window !== "undefined" &&
        ((window as any).__aarnaPreloaderDone ||
          (hasSeenPreloader() &&
            !window.location.search.includes("debug-preloader=true")));

      if (alreadyDone) {
        // Small delay to let the homepage hero settle smoothly
        const timer = setTimeout(() => {
          setIsOpen(true);
          setHasTriggered(true);
        }, 550);
        return () => clearTimeout(timer);
      } else {
        // Listen for preloader completion event
        const handlePreloaderDone = () => {
          const timer = setTimeout(() => {
            setIsOpen(true);
            setHasTriggered(true);
          }, 450);
          return () => clearTimeout(timer);
        };

        window.addEventListener("aarna:preloader-done", handlePreloaderDone, {
          once: true,
        });
        return () => {
          window.removeEventListener(
            "aarna:preloader-done",
            handlePreloaderDone
          );
        };
      }
    };

    const cleanup = checkDoneAndTrigger();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <>
      {/* ── Main Centered Modal ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop with soft blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsOpen(false)}
            />

            {/* Popup Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#090909]/95 p-6 sm:p-8 shadow-[0_0_50px_-10px_rgba(245,180,0,0.25),0_0_80px_-20px_rgba(168,85,247,0.2),0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-foreground"
              role="dialog"
              aria-modal="true"
              aria-labelledby="ishanya-popup-title"
            >
              {/* Subtle multi-color ambient glow behind content */}
              <div
                className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-[#f5b400]/20 via-[#ff7a00]/15 to-transparent blur-3xl ishanya-ambient-glow"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tl from-[#a855f7]/20 via-[#ec4899]/15 to-transparent blur-3xl ishanya-ambient-glow"
                aria-hidden="true"
              />

              {/* Top row: Badge and Close button */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-primary uppercase shadow-[0_0_12px_rgba(245,180,0,0.2)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                  </span>
                  UPCOMING EVENT
                </div>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="group -mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:border-white/25 hover:bg-white/10 hover:text-foreground transition-all duration-200"
                  aria-label="Close popup"
                >
                  <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
                </button>
              </div>

              {/* Main Content */}
              <div className="relative z-10 mt-5 text-center">
                <h2
                  id="ishanya-popup-title"
                  className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight ishanya-title-glow bg-gradient-to-r from-[#ffe58f] via-[#f5b400] to-[#ff9e2c] bg-clip-text text-transparent"
                >
                  ISHANYA’26
                </h2>

                <p className="mt-2 text-xs sm:text-sm font-semibold tracking-wide text-primary/90 uppercase">
                  Creativity • Technology • Competition
                </p>

                {/* Date & Venue */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-medium text-foreground backdrop-blur-md shadow-inner">
                    <span className="text-base">📅</span>
                    <span>09 October 2026</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-1.5 font-medium text-foreground backdrop-blur-md shadow-inner">
                    <span className="text-base">📍</span>
                    <span>VBIT Campus</span>
                  </div>
                </div>

                {/* Description Quote */}
                <div className="mt-5 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center sm:px-5">
                  <p className="text-xs sm:text-sm italic leading-relaxed text-muted-foreground">
                    “A creative design and media challenge where creativity,
                    technology, and competition come together.”
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex flex-col items-center gap-3">
                  <motion.a
                    href={ISHANYA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.025,
                      boxShadow: "0 0 35px rgba(245, 180, 0, 0.55)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#ffd426] via-[#f5b400] to-[#e69800] px-6 py-3.5 font-display text-sm sm:text-base font-bold text-black shadow-[0_0_20px_rgba(245,180,0,0.35)] transition-all duration-300"
                  >
                    <span>REGISTER FOR ISHANYA’26</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </motion.a>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-xs sm:text-sm font-medium text-muted-foreground/80 hover:text-foreground transition-colors py-1 cursor-pointer"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Persistent Floating Badge at Bottom-Right ── */}
      <AnimatePresence>
        {!isOpen && hasTriggered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-5 z-40 max-w-[calc(100vw-2.5rem)]"
          >
            <div className="group relative flex items-center gap-2.5 rounded-full border border-primary/50 bg-[#080808]/90 py-2 px-4 shadow-[0_0_25px_rgba(245,180,0,0.25),0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:border-primary hover:shadow-[0_0_35px_rgba(245,180,0,0.45)]">
              {/* Click label to view popup */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 text-left cursor-pointer transition-opacity hover:opacity-90"
                title="View Ishanya'26 details"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span className="font-display text-xs sm:text-sm font-bold tracking-tight text-primary ishanya-title-glow">
                  ISHANYA’26
                </span>
              </button>

              <span className="text-muted-foreground/50 text-xs">•</span>

              {/* Direct register link */}
              <a
                href={ISHANYA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-foreground hover:text-primary transition-colors"
              >
                <span>Register</span>
                <ArrowRight className="h-3.5 w-3.5 text-primary transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
