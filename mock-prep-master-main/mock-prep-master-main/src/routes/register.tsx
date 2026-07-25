import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AuthShell } from "@/components/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create account — InterviewAI" },
      { name: "description", content: "Create your free InterviewAI account and start practicing today." },
      { property: "og:title", content: "Create account — InterviewAI" },
      { property: "og:description", content: "Sign up in seconds and start your AI interview prep." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  return (
    <AuthShell
      title="Create your account"
      subtitle="Start with 5 free AI interviews every month."
      footer={<>Already have an account? <Link to="/login" className="font-medium text-primary hover:underline">Log in</Link></>}
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
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Alex Johnson" required className="bg-background/60" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" required className="bg-background/60" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required className="bg-background/60" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm">Confirm</Label>
            <Input id="confirm" type="password" required className="bg-background/60" />
          </div>
        </div>
        <p className="text-xs text-muted-foreground">By continuing you agree to our Terms and Privacy Policy.</p>
        <Button type="submit" disabled={loading} className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
          {loading ? "Creating..." : "Create account"}
        </Button>
      </form>
    </AuthShell>
  );
}
