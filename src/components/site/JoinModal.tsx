import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { X, Instagram, Linkedin, Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

type JoinModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function JoinModal({ isOpen, onClose }: JoinModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="join-modal-title"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl surface-panel p-6 sm:p-8"
          >
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 rounded-full border border-border text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>

            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" />
              Join AARNA Club · VBIT
            </div>

            <h2 id="join-modal-title" className="mt-4 font-display text-2xl font-bold sm:text-3xl">
              Turn your passion into profit.
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              AARNA welcomes students from all years and departments across VBIT — whether you
              specialize in design, editing, code, content, marketing, or are looking to discover
              your skill.
            </p>

            <div className="mt-6 space-y-3">
              <h3 className="text-xs uppercase tracking-wider text-primary font-semibold">
                How to get involved
              </h3>

              <a
                href="https://www.instagram.com/aarna.vbit/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/60 hover:bg-surface-2 group"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Instagram className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Instagram Updates & Orientations</p>
                    <p className="text-xs text-muted-foreground">
                      @aarna.vbit — Watch for recruitment calls & event announcements
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="mailto:aarnavbit@gmail.com"
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/60 hover:bg-surface-2 group"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">Direct Membership Inquiry</p>
                    <p className="text-xs text-muted-foreground">
                      aarnavbit@gmail.com — Reach out directly to team leaders
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="https://www.linkedin.com/in/aarna-vbit-b025b4432/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-primary/60 hover:bg-surface-2 group"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">LinkedIn Community</p>
                    <p className="text-xs text-muted-foreground">
                      aarna-vbit — Connect with student leaders & alumni
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <div className="mt-6 border-t border-border pt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Vignana Bharathi Institute of Technology (VBIT) · Student Organization
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
