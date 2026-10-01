import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
const mark = { url: "/aarna-transparent.png" };
import { Button } from "../ui/button";

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
      <nav className="mx-auto flex h-17 max-w-6xl items-center justify-between gap-3 px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={mark.url} alt="" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-semibold">AARNA</span>
        </Link>
        <div className="hidden items-center gap-2 lg:flex">
          {LINKS.map(l => {
            const isActive = l.to === "/" ? routerState.location.pathname === "/" : routerState.location.pathname.startsWith(l.to);
            return (
              <Link key={l.to} to={l.to} className={`relative px-4 py-2 text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`} >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{l.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
            {dark ? <Sun /> : <Moon />}
          </Button>
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
          className="fixed inset-0 z-[60] flex flex-col bg-background px-5 py-6 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <img src={mark.url} alt="" className="h-10 w-10 object-contain" />
              <span className="font-display text-lg font-semibold">AARNA</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-12 flex flex-col gap-6 px-4">
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
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
