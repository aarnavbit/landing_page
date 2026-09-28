import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-17 max-w-6xl items-center justify-between gap-3 px-5">
        <Link to="/" className="flex shrink-0 items-center gap-2" onClick={() => setOpen(false)}>
          <img src={mark.url} alt="" className="h-10 w-10 object-contain" />
          <span className="font-display text-lg font-semibold">AARNA</span>
        </Link>
        <div className="hidden items-center gap-0.5 lg:flex">
          {LINKS.map(l => <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} className="px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-primary" >{l.label}</Link>)}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
            {dark ? <Sun /> : <Moon />}
          </Button>
          <Button variant="outline" size="icon" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} className="lg:hidden">
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>
      {open && <div className="grid grid-cols-2 gap-1 border-t border-border bg-background px-5 py-4 lg:hidden">
        {LINKS.map(l => <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm text-muted-foreground data-[status=active]:bg-secondary data-[status=active]:text-foreground">{l.label}</Link>)}
      </div>}
    </header>
  );
}
