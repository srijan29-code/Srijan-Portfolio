import { createFileRoute } from "@tanstack/react-router";
import { Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/_dashboard/profile")({
  head: () => ({ meta: [{ title: "Profile — InterviewAI" }] }),
  component: ProfilePage,
});

const skills = ["React", "TypeScript", "Node.js", "PostgreSQL", "System Design", "AWS", "Docker"];

function ProfilePage() {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Profile</h1>
        <p className="mt-1 text-muted-foreground">Keep your details up to date to get sharper AI feedback.</p>
      </div>

      <Card className="glass border-white/10 p-6">
        <div className="flex flex-wrap items-center gap-6">
          <div className="relative">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://i.pravatar.cc/200?img=47" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <button className="absolute -bottom-1 -right-1 grid h-8 w-8 place-items-center rounded-full bg-gradient-primary shadow-glow">
              <Upload className="h-3.5 w-3.5 text-primary-foreground" />
            </button>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Alex Johnson</h2>
            <p className="text-sm text-muted-foreground">alex.johnson@example.com</p>
            <div className="mt-2 flex gap-2">
              <Badge className="rounded-full bg-gradient-primary text-primary-foreground">Pro</Badge>
              <Badge variant="outline" className="rounded-full">Frontend Developer</Badge>
            </div>
          </div>
        </div>
      </Card>

      <Card className="glass border-white/10 p-6">
        <h2 className="text-lg font-semibold">Personal information</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Full name</Label>
            <Input defaultValue="Alex Johnson" className="bg-background/60" />
          </div>
          <div className="space-y-2">
            <Label>Email</Label>
            <Input defaultValue="alex.johnson@example.com" className="bg-background/60" />
          </div>
          <div className="space-y-2">
            <Label>Target role</Label>
            <Input defaultValue="Senior Frontend Developer" className="bg-background/60" />
          </div>
          <div className="space-y-2">
            <Label>Experience</Label>
            <Input defaultValue="5 years" className="bg-background/60" />
          </div>
        </div>
        <div className="mt-6">
          <Label>Skills</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s} variant="outline" className="rounded-full border-primary/40 bg-primary/10 px-3 py-1 text-primary">{s}</Badge>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" className="rounded-full">Cancel</Button>
          <Button className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">Save changes</Button>
        </div>
      </Card>

      <Card className="glass border-dashed border-primary/40 p-6 text-center">
        <Upload className="mx-auto h-8 w-8 text-primary" />
        <p className="mt-2 font-semibold">Upload your resume</p>
        <p className="mt-1 text-sm text-muted-foreground">PDF or DOCX. We'll generate questions rooted in your real experience.</p>
        <Button className="mt-4 rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
          Choose file
        </Button>
      </Card>
    </div>
  );
}
