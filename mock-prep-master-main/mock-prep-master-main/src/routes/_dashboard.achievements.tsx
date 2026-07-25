import { createFileRoute } from "@tanstack/react-router";
import * as Icons from "lucide-react";
import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { achievements } from "@/lib/mock-data";

export const Route = createFileRoute("/_dashboard/achievements")({
  head: () => ({ meta: [{ title: "Achievements — InterviewAI" }] }),
  component: AchievementsPage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Sparkles;
  return <C className={className} />;
}

function AchievementsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Achievements</h1>
        <p className="mt-1 text-muted-foreground">Milestones you've unlocked (and ones to chase next).</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <Card
            key={a.name}
            className={`glass border-white/10 p-6 ${a.earned ? "border-primary/40 shadow-glow" : "opacity-60"}`}
          >
            <div className={`mb-3 grid h-12 w-12 place-items-center rounded-2xl ${a.earned ? "bg-gradient-primary shadow-glow" : "bg-muted"}`}>
              <Icon name={a.icon} className={`h-6 w-6 ${a.earned ? "text-primary-foreground" : "text-muted-foreground"}`} />
            </div>
            <h3 className="text-lg font-semibold">{a.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
            <p className={`mt-3 text-xs font-medium ${a.earned ? "text-primary" : "text-muted-foreground"}`}>
              {a.earned ? "Unlocked" : "Locked"}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
