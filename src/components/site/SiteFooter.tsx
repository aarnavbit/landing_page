import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "../ui/button";

const CONTACTS = [
  {
    href: "https://www.instagram.com/aarna.vbit/",
    label: "Instagram",
    handle: "@aarna.vbit",
    icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/in/aarna-vbit-b025b4432/",
    label: "LinkedIn",
    handle: "aarna-vbit",
    icon: Linkedin,
  },
  {
    href: "mailto:aarnavbit@gmail.com",
    label: "Email",
    handle: "aarnavbit@gmail.com",
    icon: Mail,
  },
];

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Team" },
  { to: "/agenda", label: "Agenda" },
];

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/aarna-transparent.png"
                alt="AARNA Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="font-display text-xl font-bold">AARNA</span>
            </div>
            <p className="mt-3 font-display text-xl font-semibold">
              <span className="text-flow">Turning Passions into Profits.</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              AARNA is the student creative commerce club at Vignana Bharathi Institute of
              Technology (VBIT) enabling ambitious students to turn their skills into income,
              portfolios, and real commercial opportunities.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {CONTACTS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={`${c.label} — ${c.handle}`}
                  title={`${c.label} — ${c.handle}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-muted-foreground transition-all hover:border-primary/60 hover:text-foreground hover:bg-surface-2"
                >
                  <c.icon className="h-4 w-4 text-primary" />
                  <span>{c.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation & Back to Top */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row lg:flex-col lg:items-end">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-primary font-semibold">
                Navigation
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2.5 text-sm text-muted-foreground lg:justify-end">
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="transition-colors hover:text-foreground">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 rounded-full border-border bg-surface text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-surface-2 self-start sm:self-auto"
            >
              <span>Back to top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} AARNA Club, VBIT. All rights reserved.</p>
          <p>Vignana Bharathi Institute of Technology · Student-led Organization</p>
        </div>
      </div>
    </footer>
  );
}
