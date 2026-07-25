import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Download, Share2, Sparkles, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { scoreBreakdown } from "@/lib/mock-data";

export const Route = createFileRoute("/_dashboard/reports")({
  head: () => ({ meta: [{ title: "AI Feedback — InterviewAI" }] }),
  component: ReportsPage,
});

const overall = 84;
const strengths = [
  "Clear STAR structure on behavioral answers",
  "Strong data structure vocabulary",
  "Explains tradeoffs when discussing architecture",
];
const weaknesses = [
  "Filler words (um, like) — 12 uses",
  "Rushed through system design constraints",
  "Missed clarifying questions on ambiguous prompts",
];
const topics = ["Distributed caching", "Event loop internals", "CAP theorem", "Consistent hashing"];
const suggested = [
  {
    q: "How would you design a URL shortener?",
    yours: "You focused on hashing but skipped capacity estimation.",
    better:
      "Start with functional and non-functional requirements, then capacity estimation (100M/day → ~1.2K rps). Discuss base62 encoding, DB schema, caching layer, and read/write ratios before diving into edge cases.",
  },
];

function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground">Interview report · Frontend Developer · Technical</p>
          <h1 className="mt-1 text-3xl font-bold tracking-tight md:text-4xl">AI Feedback</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="rounded-full glass border-white/10">
            <Share2 className="mr-2 h-4 w-4" /> Share
          </Button>
          <Button size="sm" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
        </div>
      </div>

      {/* Overall + radar */}
      <div className="grid gap-4 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="lg:col-span-1">
          <Card className="glass relative overflow-hidden border-primary/40 p-6 shadow-glow">
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/40 blur-3xl" />
            <div className="relative text-center">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Overall Score</p>
              <div className="mt-4 inline-flex items-baseline">
                <span className="text-7xl font-bold text-gradient">{overall}</span>
                <span className="ml-1 text-2xl text-muted-foreground">/100</span>
              </div>
              <Badge className="mt-3 rounded-full bg-primary/20 text-primary hover:bg-primary/20">Great performance</Badge>
              <div className="mt-6 space-y-3">
                {scoreBreakdown.map((s) => (
                  <div key={s.label} className="text-left">
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-semibold">{s.value}%</span>
                    </div>
                    <Progress value={s.value} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        <Card className="glass border-white/10 p-5 lg:col-span-2">
          <h2 className="mb-2 text-lg font-semibold">Skill breakdown</h2>
          <p className="mb-4 text-xs text-muted-foreground">Across the four evaluated dimensions</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={scoreBreakdown}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="label" tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }} />
                <Radar dataKey="value" stroke="oklch(0.68 0.22 295)" fill="oklch(0.68 0.22 295)" fillOpacity={0.35} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Strengths / Weaknesses */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="glass border-white/10 p-6">
          <div className="mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Strengths</h3>
          </div>
          <ul className="space-y-3">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {s}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="glass border-white/10 p-6">
          <div className="mb-3 flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-accent" />
            <h3 className="text-lg font-semibold">Areas to improve</h3>
          </div>
          <ul className="space-y-3">
            {weaknesses.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                {s}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Topics */}
      <Card className="glass border-white/10 p-6">
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">Recommended topics</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <Badge key={t} variant="outline" className="rounded-full border-primary/40 bg-primary/10 px-3 py-1 text-sm text-primary">
              {t}
            </Badge>
          ))}
        </div>
      </Card>

      {/* Suggested answers */}
      <Card className="glass border-white/10 p-6">
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold">AI-suggested better answers</h3>
        </div>
        <div className="space-y-6">
          {suggested.map((s, i) => (
            <div key={i} className="space-y-3">
              <p className="text-sm font-medium">Q: {s.q}</p>
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-4 text-sm">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-destructive">Your answer</p>
                <p className="text-muted-foreground">{s.yours}</p>
              </div>
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary">Model answer</p>
                <p>{s.better}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
