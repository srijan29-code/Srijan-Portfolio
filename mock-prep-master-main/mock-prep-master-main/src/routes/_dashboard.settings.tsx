import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Route = createFileRoute("/_dashboard/settings")({
  head: () => ({ meta: [{ title: "Settings — InterviewAI" }] }),
  component: SettingsPage,
});

function Row({ title, desc, children }: { title: string; desc: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/60 py-5 last:border-0">
      <div className="max-w-md">
        <p className="font-medium">{title}</p>
        <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
      </div>
      {children}
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your account preferences, security, and notifications.</p>
      </div>

      <Card className="glass border-white/10 px-6">
        <Row title="Dark mode" desc="Use the dark theme across InterviewAI.">
          <Switch defaultChecked />
        </Row>
        <Row title="Email notifications" desc="Get notified about weekly reports and reminders.">
          <Switch defaultChecked />
        </Row>
        <Row title="Practice reminders" desc="A daily nudge to keep your streak alive.">
          <Switch />
        </Row>
        <Row title="Language" desc="Interview language and UI.">
          <Select defaultValue="en">
            <SelectTrigger className="w-40 bg-background/60"><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="fr">French</SelectItem>
              <SelectItem value="de">German</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
            </SelectContent>
          </Select>
        </Row>
      </Card>

      <Card className="glass border-white/10 p-6">
        <h2 className="text-lg font-semibold">Security</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label>Current password</Label>
            <Input type="password" className="bg-background/60" />
          </div>
          <div className="space-y-2">
            <Label>New password</Label>
            <Input type="password" className="bg-background/60" />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">Update password</Button>
        </div>
      </Card>

      <Card className="glass border-destructive/40 p-6">
        <h2 className="text-lg font-semibold text-destructive">Danger zone</h2>
        <p className="mt-1 text-sm text-muted-foreground">Permanently delete your account and all associated data.</p>
        <Button variant="outline" className="mt-4 rounded-full border-destructive/60 text-destructive hover:bg-destructive/10">
          Delete account
        </Button>
      </Card>
    </div>
  );
}
