import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/_dashboard/interviews")({
  head: () => ({ meta: [{ title: "Start interview — InterviewAI" }] }),
  component: StartInterviewPage,
});

const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Scientist", "DevOps Engineer", "UI/UX Designer", "Cyber Security"];
const levels = ["Fresher", "Junior", "Mid", "Senior"];
const difficulties = ["Easy", "Medium", "Hard"];
const types = ["Technical", "HR", "Behavioral", "Coding", "System Design"];
const durations = ["15 min", "30 min", "45 min", "60 min"];

function Pill({ options, value, onChange }: { options: readonly string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active
                ? "border-primary/60 bg-gradient-primary text-primary-foreground shadow-glow"
                : "border-border bg-card/60 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function StartInterviewPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState(roles[0]);
  const [level, setLevel] = useState(levels[1]);
  const [diff, setDiff] = useState(difficulties[1]);
  const [type, setType] = useState(types[0]);
  const [dur, setDur] = useState(durations[1]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Start a new interview</h1>
        <p className="mt-1 text-muted-foreground">Configure your session — the AI adapts to your choices in real time.</p>
      </div>

      <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
        <Card className="glass border-white/10 p-6 md:p-8">
          <div className="space-y-8">
            <div className="space-y-3">
              <Label className="text-base">Role</Label>
              <Pill options={roles} value={role} onChange={setRole} />
            </div>
            <div className="space-y-3">
              <Label className="text-base">Experience level</Label>
              <Pill options={levels} value={level} onChange={setLevel} />
            </div>
            <div className="space-y-3">
              <Label className="text-base">Difficulty</Label>
              <Pill options={difficulties} value={diff} onChange={setDiff} />
            </div>
            <div className="space-y-3">
              <Label className="text-base">Interview type</Label>
              <Pill options={types} value={type} onChange={setType} />
            </div>
            <div className="space-y-3">
              <Label className="text-base">Duration</Label>
              <Pill options={durations} value={dur} onChange={setDur} />
            </div>

            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-4 text-sm">
              <p className="text-muted-foreground">
                Session summary: <span className="font-medium text-foreground">{level} {role}</span> ·{" "}
                <span className="font-medium text-foreground">{type}</span> ·{" "}
                <span className="font-medium text-foreground">{diff}</span> ·{" "}
                <span className="font-medium text-foreground">{dur}</span>
              </p>
            </div>

            <Button
              size="lg"
              onClick={() => navigate({ to: "/interview" })}
              className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
            >
              <Play className="mr-2 h-4 w-4" /> Start Interview
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
