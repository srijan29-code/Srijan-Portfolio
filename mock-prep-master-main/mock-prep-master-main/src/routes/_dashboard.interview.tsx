import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mic, SkipForward, ArrowRight, Square, Sparkles, Timer } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { interviewQuestions } from "@/lib/mock-data";

export const Route = createFileRoute("/_dashboard/interview")({
  head: () => ({ meta: [{ title: "Interview session — InterviewAI" }] }),
  component: InterviewSession,
});

function fmt(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

function InterviewSession() {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const [answer, setAnswer] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [recording, setRecording] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const q = interviewQuestions[i];
  const progress = ((i + 1) / interviewQuestions.length) * 100;
  const isLast = i === interviewQuestions.length - 1;

  const next = () => {
    if (isLast) navigate({ to: "/reports" });
    else {
      setI(i + 1);
      setAnswer("");
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      {/* Top bar */}
      <Card className="glass flex flex-wrap items-center gap-4 border-white/10 p-4">
        <div className="flex items-center gap-2 text-sm">
          <Timer className="h-4 w-4 text-primary" />
          <span className="font-mono font-semibold">{fmt(elapsed)}</span>
        </div>
        <div className="flex-1">
          <div className="mb-1.5 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Question {i + 1} of {interviewQuestions.length}</span>
            <span className="text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
        <Button variant="outline" size="sm" className="rounded-full border-destructive/40 text-destructive hover:bg-destructive/10" onClick={() => navigate({ to: "/reports" })}>
          <Square className="mr-1.5 h-3.5 w-3.5" /> End
        </Button>
      </Card>

      {/* AI question */}
      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-start gap-3">
          <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-gradient-primary shadow-glow">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
          <Card className="glass flex-1 border-white/10 p-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">AI Interviewer · {q.topic}</p>
            <p className="mt-2 text-lg font-medium leading-relaxed">{q.q}</p>
          </Card>
        </div>
      </motion.div>

      {/* Answer */}
      <div className="flex items-start gap-3">
        <Card className="glass ml-auto flex-1 border-white/10 p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Your answer</p>
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer, or press the mic to speak..."
            className="mt-2 min-h-40 resize-none border-0 bg-transparent p-0 text-base shadow-none focus-visible:ring-0"
          />
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setRecording(!recording)}
              className={`rounded-full ${recording ? "border-destructive/60 bg-destructive/10 text-destructive" : "glass border-white/10"}`}
            >
              <Mic className={`mr-2 h-4 w-4 ${recording ? "animate-pulse" : ""}`} />
              {recording ? "Recording..." : "Voice answer"}
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={next} className="rounded-full">
                <SkipForward className="mr-1.5 h-3.5 w-3.5" /> Skip
              </Button>
              <Button size="sm" onClick={next} className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                {isLast ? "Finish" : "Next question"} <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
