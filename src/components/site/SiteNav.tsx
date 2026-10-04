import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Button } from "../ui/button";
import { JoinModal } from "./JoinModal";

const mark = { url: "/aarna-transparent.png" };

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/agenda", label: "Agenda" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const routerState = useRouterState();

  useMotionValueEvent(scrollY, "change", (y) => {
    const diff = y - lastYRef.current;
    if (diff > 50 && y > 100 && !open) {
      setHidden(true);
    } else if (diff < -10) {
      setHidden(false);
    }
    lastYRef.current = y;
  });

  useEffect(() => {
    const stored = localStorage.getItem("aarna-theme");
    const next = stored ? stored === "dark" : true;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("aarna-theme", next ? "dark" : "light");
  };

  return (
    <>
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-17 max-w-6xl items-center justify-center gap-3 px-5">
        {/* Centered nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map(l => {
            const isActive = l.to === "/" ? routerState.location.pathname === "/" : routerState.location.pathname.startsWith(l.to);
            return (
              <Link key={l.to} to={l.to} className={`nav-link group relative px-4 py-2 text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
                {/* Hover underline animation */}
                <motion.span
                  className="absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-primary"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "60%", opacity: 1 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
              </Link>
            );
          })}
        </div>
        {/* Theme toggle switch + mobile menu - positioned absolute right */}
        <div className="absolute right-5 flex items-center gap-2">
          {/* Theme switch */}
          <button
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
            className="relative flex h-8 w-16 items-center rounded-full border border-border bg-surface-2 p-1 transition-colors duration-300"
          >
            <motion.div
              className="flex h-6 w-6 items-center justify-center rounded-full bg-primary shadow-md"
              animate={{ x: dark ? 0 : 30 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              {dark ? <Moon className="h-3.5 w-3.5 text-primary-foreground" /> : <Sun className="h-3.5 w-3.5 text-primary-foreground" />}
            </motion.div>
            {/* Background icons */}
            <Sun className="absolute right-2 h-3 w-3 text-muted-foreground/40" />
            <Moon className="absolute left-2 h-3 w-3 text-muted-foreground/40" />
          </button>
          <Button variant="outline" size="icon" onClick={() => setOpen(true)} aria-label="Open menu" className="lg:hidden">
            <Menu />
          </Button>
        </div>
      </nav>
    </motion.header>
    
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-background px-5 py-6 lg:hidden"
        >
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu" className="absolute right-5 top-5">
            <X className="h-6 w-6" />
          </Button>
          <div className="flex flex-col items-center gap-6">
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="font-display text-4xl font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
