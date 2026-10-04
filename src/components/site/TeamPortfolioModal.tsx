import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, User } from "lucide-react";
import type { PortfolioTeam } from "../../data/portfolioTeams";

interface TeamPortfolioModalProps {
  team: PortfolioTeam | null;
  onClose: () => void;
}

export function TeamPortfolioModal({ team, onClose }: TeamPortfolioModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (team) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [team, onClose]);

  return (
    <AnimatePresence>
      {team && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-6 overflow-y-auto">
          {/* Backdrop with soft blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 bg-[#090909]/95 p-5 sm:p-8 shadow-[0_0_50px_-10px_rgba(245,180,0,0.25),0_0_80px_-20px_rgba(168,85,247,0.2),0_25px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl text-foreground"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
          >
            {/* Subtle ambient multi-glow behind modal */}
            <div
              className="pointer-events-none absolute -top-28 -left-28 h-72 w-72 rounded-full bg-gradient-to-br from-[#f5b400]/20 via-[#ff7a00]/15 to-transparent blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-gradient-to-tl from-[#a855f7]/20 via-[#ec4899]/15 to-transparent blur-3xl"
              aria-hidden="true"
            />

            {/* Top Close Button */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-primary">
                <Sparkles className="h-3 w-3" />
                <span>AARNA 2026–27</span>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="group -mr-1 -mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:border-white/25 hover:bg-white/10 hover:text-foreground transition-all duration-200 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Modal Header */}
            <div className="relative z-10 mt-3 text-center">
              <h2
                id="portfolio-modal-title"
                className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground uppercase"
              >
                {team.title}
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary uppercase mt-0.5">
                Team Members
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                {team.blurb}
              </p>
            </div>

            {/* Lead Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="relative z-10 mt-6 flex flex-col items-center text-center"
            >
              <div className="group relative h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-2xl border-2 border-primary/60 bg-surface shadow-[0_0_25px_rgba(245,180,0,0.3)]">
                {team.lead.image ? (
                  <img
                    src={team.lead.image}
                    alt={team.lead.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-surface-2 text-muted-foreground">
                    <User className="h-10 w-10 text-primary/60" />
                  </div>
                )}
              </div>

              <div className="mt-3">
                <span className="inline-block rounded-full bg-[image:var(--gradient-flow)] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-sm">
                  {team.lead.role}
                </span>
                <h3 className="mt-1.5 font-display text-lg sm:text-xl font-bold text-foreground">
                  {team.lead.name}
                </h3>
                {(team.lead.dept || team.lead.rollNo) && (
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    {team.lead.dept} {team.lead.rollNo ? `· ${team.lead.rollNo}` : ""}
                  </p>
                )}
              </div>
            </motion.div>

            {/* Glowing Divider */}
            <div className="relative z-10 my-7 flex items-center justify-center">
              <span className="h-px w-full max-w-sm bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
            </div>

            {/* Team Members Grid */}
            <div className="relative z-10">
              <h4 className="text-center font-display text-xs sm:text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                Team Members & Co-Leads
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {team.members.map((member, index) => (
                  <motion.div
                    key={`${member.name}-${index}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.15 + index * 0.05,
                      duration: 0.28,
                    }}
                    className="group relative flex flex-col items-center rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-center transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.04]"
                  >
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-xl border border-white/10 bg-surface">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-surface-2 text-muted-foreground">
                          <User className="h-7 w-7 text-muted-foreground/60" />
                        </div>
                      )}
                    </div>

                    <h5 className="mt-2.5 font-display text-xs sm:text-sm font-semibold text-foreground line-clamp-1">
                      {member.name}
                    </h5>

                    <span className="mt-0.5 text-[11px] font-medium text-primary">
                      {member.role}
                    </span>

                    {(member.dept || member.rollNo) && (
                      <span className="mt-0.5 text-[10px] text-muted-foreground/80 font-mono">
                        {member.dept}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
