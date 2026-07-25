import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Mail } from "lucide-react";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — InterviewAI" },
      { name: "description", content: "Log in to your InterviewAI account and continue practicing." },
      { property: "og:title", content: "Login — InterviewAI" },
      { property: "og:description", content: "Sign in to your InterviewAI dashboard." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Log in to continue your interview prep."
      footer={<>New here? <Link to="/register" className="font-medium text-primary hover:underline">Create an account</Link></>}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          setTimeout(() => navigate({ to: "/dashboard" }), 400);
        }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" required className="bg-background/60" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
          </div>
          <Input id="password" type="password" placeholder="••••••••" required className="bg-background/60" />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-sm text-muted-foreground">Remember me for 30 days</Label>
        </div>
        <Button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
          {loading ? "Signing in..." : "Sign in"}
        </Button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs uppercase tracking-wider text-muted-foreground">or continue with</span>
        <Separator className="flex-1" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="outline" className="rounded-full glass border-white/10">
          <Mail className="mr-2 h-4 w-4" /> Google
        </Button>
        <Button variant="outline" className="rounded-full glass border-white/10">
          <Github className="mr-2 h-4 w-4" /> GitHub
        </Button>
      </div>
    </AuthShell>
  );
}
