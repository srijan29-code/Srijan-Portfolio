import { createFileRoute } from "@tanstack/react-router";
import { Line, LineChart, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend } from "recharts";
import { Card } from "@/components/ui/card";
import { performanceTrend } from "@/lib/mock-data";

export const Route = createFileRoute("/_dashboard/analytics")({
  head: () => ({ meta: [{ title: "Analytics — InterviewAI" }] }),
  component: AnalyticsPage,
});

const typeMix = [
  { name: "Technical", value: 18 },
  { name: "Behavioral", value: 12 },
  { name: "Coding", value: 10 },
  { name: "System Design", value: 7 },
];
const colors = ["oklch(0.68 0.22 295)", "oklch(0.7 0.2 220)", "oklch(0.75 0.18 165)", "oklch(0.78 0.18 60)"];

function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Analytics</h1>
        <p className="mt-1 text-muted-foreground">Deep insight into your interview performance over time.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="glass border-white/10 p-5 lg:col-span-2">
          <h2 className="mb-4 text-lg font-semibold">Score progression</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                <XAxis dataKey="week" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <Tooltip contentStyle={{ background: "hsl(268 20% 12%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Line type="monotone" dataKey="score" stroke="oklch(0.68 0.22 295)" strokeWidth={3} dot={{ fill: "oklch(0.68 0.22 295)", r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card className="glass border-white/10 p-5">
          <h2 className="mb-4 text-lg font-semibold">Interview mix</h2>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={typeMix} dataKey="value" nameKey="name" outerRadius={90} innerRadius={55} paddingAngle={4}>
                  {typeMix.map((_, i) => <Cell key={i} fill={colors[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: "hsl(268 20% 12%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12 }} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { label: "Best topic", value: "Data Structures", note: "94% avg" },
          { label: "Needs work", value: "System Design", note: "68% avg" },
          { label: "Total time", value: "36.5 hrs", note: "Last 30 days" },
        ].map((c) => (
          <Card key={c.label} className="glass border-white/10 p-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
            <p className="mt-2 text-2xl font-bold">{c.value}</p>
            <p className="mt-1 text-xs text-primary">{c.note}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
