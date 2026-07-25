import { Logo } from "./logo";
import { Github, Linkedin, Twitter } from "lucide-react";

export function LandingFooter() {
  return (
    <footer id="contact" className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">
              AI-powered interview prep that helps you land your dream job.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10" aria-label="GitHub"><Github className="h-4 w-4" /></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="grid h-9 w-9 place-items-center rounded-full glass hover:bg-white/10" aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground">Pricing</a></li>
              <li><a href="#how" className="hover:text-foreground">How it works</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">About</a></li>
              <li><a href="#" className="hover:text-foreground">Careers</a></li>
              <li><a href="#" className="hover:text-foreground">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms</a></li>
              <li><a href="#" className="hover:text-foreground">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} InterviewAI. All rights reserved.</p>
          <p>Crafted for job seekers worldwide.</p>
        </div>
      </div>
    </footer>
  );
}
