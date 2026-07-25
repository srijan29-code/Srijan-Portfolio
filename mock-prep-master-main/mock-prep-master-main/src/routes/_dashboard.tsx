import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  BarChart3,
  Trophy,
  Settings,
  User as UserIcon,
  LogOut,
  Bell,
  Search,
  Play,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Route = createFileRoute("/_dashboard")({
  component: DashboardLayout,
});

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/interviews", label: "Interviews", icon: MessageSquare },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/achievements", label: "Achievements", icon: Trophy },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/profile", label: "Profile", icon: UserIcon },
] as const;

function DashboardLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="relative flex min-h-screen w-full">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/3 h-[500px] w-[700px] rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[500px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 flex-col border-r border-border/60 bg-sidebar/60 backdrop-blur-xl md:flex">
        <div className="p-5">
          <Logo />
        </div>
        <nav className="flex-1 space-y-1 px-3">
          {navItems.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                  active
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border/60 p-3">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
          >
            <LogOut className="h-4 w-4" /> Logout
          </Link>
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-border/60 bg-card/60 p-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://i.pravatar.cc/80?img=47" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Alex Johnson</p>
              <p className="truncate text-xs text-muted-foreground">Pro Plan</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border/60 bg-background/70 px-4 py-3 backdrop-blur-xl md:px-8">
          <div className="relative hidden max-w-md flex-1 md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search interviews, reports..." className="bg-card/60 pl-9" />
          </div>
          <div className="flex-1 md:hidden">
            <Logo />
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
              <Link to="/interviews"><Play className="mr-1.5 h-3.5 w-3.5" /> Start Interview</Link>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-4 w-4" />
            </Button>
            <Avatar className="h-9 w-9 md:hidden">
              <AvatarImage src="https://i.pravatar.cc/80?img=47" />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Mobile nav strip */}
        <div className="scrollbar-none flex gap-1 overflow-x-auto border-b border-border/60 px-3 py-2 md:hidden">
          {navItems.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`inline-flex flex-shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
                  active ? "bg-gradient-primary text-primary-foreground" : "bg-card/60 text-muted-foreground"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <main className="min-h-0 flex-1 p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
