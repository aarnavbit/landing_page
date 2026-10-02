import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const stored = localStorage.getItem("aarna-theme");
    const next = stored ? stored === "dark" : true;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("aarna-theme", next ? "dark" : "light");
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-sm"
            : "border-b border-border/60 bg-background/70 backdrop-blur-lg"
        }`}
      >
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
          aria-label="Main navigation"
        >
          {/* Logo & Brand */}
          <Link
            to="/"
            className="group flex shrink-0 items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg p-1"
            onClick={() => setOpen(false)}
          >
            <img
              src={mark.url}
              alt="AARNA Club Logo"
              className="h-9 w-9 object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                AARNA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:inline-block">
                VBIT
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => {
              const isActive =
                l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md ${
                    isActive ? "text-primary font-semibold" : "text-muted-foreground"
                  }`}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Header Controls & Action Button */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Switch to light mode" : "Switch to dark mode"}
              className="rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-2"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            {/* CTA Button: Join AARNA */}
            <Button
              onClick={() => setIsJoinOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-105 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Join AARNA
            </Button>

            {/* Mobile Menu Toggle Button */}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="lg:hidden rounded-lg border-border"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {open && (
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-background/95 backdrop-blur-2xl border-t border-border px-6 py-6 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {LINKS.map((l) => {
                const isActive =
                  l.to === "/" ? location.pathname === "/" : location.pathname.startsWith(l.to);
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary font-semibold"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    <span>{l.label}</span>
                    {isActive && <span className="h-2 w-2 rounded-full bg-primary" />}
                  </Link>
                );
              })}
            </div>

            <div className="mt-8 border-t border-border pt-6 flex flex-col gap-4">
              <Button
                onClick={() => {
                  setOpen(false);
                  setIsJoinOpen(true);
                }}
                className="w-full justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground shadow-md"
              >
                <Sparkles className="h-4 w-4" />
                Join AARNA Club
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                VIGNANA BHARATHI INSTITUTE OF TECHNOLOGY
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Join AARNA Modal */}
      <JoinModal isOpen={isJoinOpen} onClose={() => setIsJoinOpen(false)} />
    </>
  );
}
