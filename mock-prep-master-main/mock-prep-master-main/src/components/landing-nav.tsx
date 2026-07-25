import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./ui/button";

const links = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function LandingNav() {
  const [open, setOpen] = useState(false);
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="mx-auto mt-3 max-w-6xl px-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 shadow-elegant">
          <Logo />
          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {open && (
          <div className="glass-strong mt-2 flex flex-col gap-1 rounded-2xl p-3 md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-sm hover:bg-white/5" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1 rounded-full">
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild size="sm" className="flex-1 rounded-full bg-gradient-primary text-primary-foreground">
                <Link to="/register">Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
}
