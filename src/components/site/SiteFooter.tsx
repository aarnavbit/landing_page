import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Mail } from "lucide-react";

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

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold">
              <span className="text-flow">Turning Passions into Profits.</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              AARNA — the student club at Vignana Bharathi Institute of Technology building
              earners, not just learners.
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
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
                >
                  <c.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{c.handle}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground">
              About
            </Link>
            <Link to="/events" className="hover:text-foreground">
              Events
            </Link>
            <Link to="/gallery" className="hover:text-foreground">Gallery</Link>
             <Link to="/team" className="hover:text-foreground">
              Team
            </Link>
            <Link to="/agenda" className="hover:text-foreground">
              Agenda
            </Link>
          </div>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} AARNA Club, VBIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
