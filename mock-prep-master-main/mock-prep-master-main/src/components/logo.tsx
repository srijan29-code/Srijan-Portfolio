import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-primary shadow-glow">
        <Sparkles className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
      </span>
      <span className="text-lg font-bold tracking-tight">
        Interview<span className="text-gradient">AI</span>
      </span>
    </Link>
  );
}
