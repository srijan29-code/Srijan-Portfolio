import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { stats, weeklyPractice, performanceTrend, recentInterviews } from "@/lib/mock-data";

export const Route = createFileRoute("/_dashboard/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — InterviewAI" }, { name: "description", content: "Your interview performance at a glance." }] }),
  component: DashboardPage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Sparkles;
  return <C className={className} />;
}

function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back,</p>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Alex Johnson 👋</h1>
        <p className="mt-1 text-muted-foreground">Here's how your interview prep is shaping up this week.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
            <Card className="glass border-white/10 p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</p>
                  <p className="mt-2 text-2xl font-bold">{s.value}</p>
                  <p className="mt-1 text-xs text-primary">{s.delta}</p>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-glow">
                  <Icon name={s.icon} className="h-5 w-5 text-primary-foreground" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="glass border-white/10 p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">Weekly practice</h2>
              <p className="text-xs text-muted-foreground">Minutes practiced per day</p>
            </div>
            <Badge variant="outline" className="border-primary/40 text-primary">+18%</Badge>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyPractice}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(268 20% 12%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Bar dataKey="minutes" fill="oklch(0.68 0.22 295)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass border-white/10 p-5">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">Performance trend</h2>
            <p className="text-xs text-muted-foreground">Score over past weeks</p>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceTrend}>
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.68 0.22 295)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.68 0.22 295)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="week" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(268 20% 12%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="score" stroke="oklch(0.68 0.22 295)" strokeWidth={2} fill="url(#grad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Recent + reminder */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="glass border-white/10 p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent interviews</h2>
            <Button asChild variant="ghost" size="sm" className="rounded-full">
              <Link to="/reports">View all <ArrowRight className="ml-1 h-3.5 w-3.5" /></Link>
            </Button>
          </div>
          <div className="overflow-hidden rounded-xl border border-border/60">
            <table className="w-full text-sm">
              <thead className="bg-card/60 text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">Role</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  <th className="px-4 py-3 text-left">Duration</th>
                  <th className="px-4 py-3 text-right">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {recentInterviews.map((r) => (
                  <tr key={r.id} className="hover:bg-white/5">
                    <td className="px-4 py-3">
                      <p className="font-medium">{r.role}</p>
                      <p className="text-xs text-muted-foreground">{r.date}</p>
                    </td>
                    <td className="px-4 py-3"><Badge variant="outline" className="border-border">{r.type}</Badge></td>
                    <td className="px-4 py-3 text-muted-foreground">{r.duration}</td>
                    <td className="px-4 py-3 text-right">
                      <span className={`font-semibold ${r.score >= 85 ? "text-primary" : r.score >= 70 ? "text-accent" : "text-destructive"}`}>
                        {r.score}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card className="glass relative overflow-hidden border-primary/30 p-5">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <Calendar className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Upcoming</p>
            <h3 className="mt-1 text-lg font-semibold">Google Frontend Mock</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tomorrow · 4:00 PM · 60 min</p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> System design focus
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Senior level
              </div>
            </div>
            <Button asChild className="mt-5 w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <Link to="/interviews">Start now</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
