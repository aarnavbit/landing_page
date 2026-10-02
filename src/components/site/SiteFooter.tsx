import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const CONTACTS = [
  {
    href: "https://www.instagram.com/aarna.vbit/",
    label: "Instagram",
    handle: "@aarna.vbit",
    icon: Instagram,
    color: "hover:border-pink-500/60 hover:shadow-pink-500/10",
  },
  {
    href: "https://www.linkedin.com/in/aarna-vbit-b025b4432/",
    label: "LinkedIn",
    handle: "aarna-vbit",
    icon: Linkedin,
    color: "hover:border-blue-500/60 hover:shadow-blue-500/10",
  },
  {
    href: "https://github.com/aarnavbit",
    label: "GitHub",
    handle: "aarnavbit",
    icon: Github,
    color: "hover:border-purple-500/60 hover:shadow-purple-500/10",
  },
  {
    href: "mailto:aarnavbit@gmail.com",
    label: "Email",
    handle: "aarnavbit@gmail.com",
    icon: Mail,
    color: "hover:border-primary/60 hover:shadow-primary/10",
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
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/events" className="hover:text-foreground transition-colors">Events</Link>
            <Link to="/gallery" className="hover:text-foreground transition-colors">Gallery</Link>
            <Link to="/team" className="hover:text-foreground transition-colors">Team</Link>
            <Link to="/agenda" className="hover:text-foreground transition-colors">Agenda</Link>
          </div>
        </div>

        {/* Social Cards */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={`${c.label} — ${c.handle}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className={`group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-surface/50 px-5 py-6 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl ${c.color}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 transition-colors group-hover:bg-primary/10">
                <c.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm font-semibold text-foreground">{c.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{c.handle}</p>
              </div>
              <ArrowUpRight className="absolute right-3 top-3 h-3.5 w-3.5 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.a>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AARNA Club, VBIT. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
