import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import {
  Sparkles,
  Play,
  ArrowRight,
  Check,
  Star,
  Zap,
} from "lucide-react";
import { LandingNav } from "@/components/landing-nav";
import { LandingFooter } from "@/components/landing-footer";
import { Section, SectionHeader } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { features, steps, testimonials, pricing, faqs } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InterviewAI — Master Your Next Interview with AI" },
      {
        name: "description",
        content:
          "Practice technical and HR interviews, get instant AI feedback, and land your dream job with InterviewAI.",
      },
      { property: "og:title", content: "InterviewAI — Master Your Next Interview with AI" },
      {
        property: "og:description",
        content: "AI-powered mock interviews, voice practice, and analytics to help you get hired.",
      },
    ],
  }),
  component: LandingPage,
});

function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Sparkles;
  return <C className={className} />;
}

function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <LandingNav />

      {/* HERO */}
      <Section className="pt-14 md:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium">
              <Zap className="h-3.5 w-3.5 text-primary" />
              New — Voice interviews now in beta
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Master Your Next<br />
              <span className="text-gradient">Interview with AI</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Practice technical and HR interviews, receive instant AI feedback, improve your communication, and land your dream job.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90">
                <Link to="/register">
                  Start Free <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full glass border-white/10">
                <Play className="mr-2 h-4 w-4" /> Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex -space-x-2">
                {[47, 32, 13, 8].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="h-8 w-8 rounded-full border-2 border-background" alt="" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />)}
                </div>
                <p className="mt-0.5">Trusted by 20,000+ candidates</p>
              </div>
            </div>
          </motion.div>

          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
            <div className="glass-strong relative rounded-3xl p-4 shadow-elegant">
              <div className="flex items-center gap-1.5 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-3/70" />
                <span className="ml-2 text-xs text-muted-foreground">interviewai.app / dashboard</span>
              </div>
              <div className="rounded-2xl bg-background/60 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Welcome back, Alex</p>
                    <p className="text-sm font-semibold">Your interview performance</p>
                  </div>
                  <span className="rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-primary-foreground">Pro</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Interviews", value: "47" },
                    { label: "Avg. Score", value: "82%" },
                    { label: "Streak", value: "12d" },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl border border-border bg-card/60 p-3">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
                      <p className="mt-1 text-lg font-bold">{s.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-3 rounded-xl border border-border bg-card/60 p-3">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">Weekly progress</span>
                    <span className="text-primary">+18%</span>
                  </div>
                  <div className="flex h-24 items-end gap-1.5">
                    {[40, 65, 30, 80, 55, 90, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 0.6 }}
                        className="flex-1 rounded-md bg-gradient-primary"
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-xl border border-border bg-card/60 p-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary">
                    <Sparkles className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">Frontend Developer — Technical</p>
                    <p className="text-xs text-muted-foreground">42 min · Score 88%</p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">Passed</span>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -left-6 top-16 hidden rounded-2xl p-3 shadow-elegant md:block"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent/20">
                  <Icons.LineChart className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Communication</p>
                  <p className="text-sm font-semibold">+12% ↑</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="glass absolute -right-4 bottom-10 hidden rounded-2xl p-3 shadow-elegant md:block"
            >
              <div className="flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-primary/20">
                  <Icons.Flame className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Streak</p>
                  <p className="text-sm font-semibold">12 days</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* FEATURES */}
      <Section id="features">
        <SectionHeader eyebrow="Features" title="Everything you need to ace interviews" subtitle="A complete AI-powered training ground built with candidates in mind." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Card className="group relative h-full overflow-hidden border-border/60 bg-card/60 p-6 transition hover:border-primary/40 hover:shadow-glow">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                  <Icon name={f.icon} className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how">
        <SectionHeader eyebrow="How it works" title="Go from anxious to prepared in 4 steps" subtitle="A guided workflow that adapts to your role, level, and goals." />
        <div className="relative">
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          <div className="grid gap-4 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card className="relative h-full border-border/60 bg-card/60 p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-primary text-sm font-bold text-primary-foreground shadow-glow">
                    {s.n}
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <SectionHeader eyebrow="Testimonials" title="Loved by candidates worldwide" />
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="h-full border-border/60 bg-card/60 p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={t.avatar} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing">
        <SectionHeader eyebrow="Pricing" title="Simple, transparent pricing" subtitle="Start free. Upgrade when you're ready to go all-in." />
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className={`relative flex h-full flex-col border-border/60 bg-card/60 p-8 ${p.highlight ? "border-primary/60 shadow-glow" : ""}`}>
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-primary px-3 py-1 text-xs font-medium text-primary-foreground">Most Popular</span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">{p.price}</span>
                  <span className="text-sm text-muted-foreground">{p.period}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 w-full rounded-full ${p.highlight ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90" : ""}`}
                  variant={p.highlight ? "default" : "outline"}
                >
                  <Link to="/register">{p.cta}</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeader eyebrow="FAQ" title="Frequently asked questions" />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="glass rounded-2xl px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`} className="border-b-border/60 last:border-0">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-primary p-10 text-center shadow-glow md:p-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,white,transparent_60%)] opacity-10" />
          <h2 className="relative text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
            Your next offer is one interview away.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Join thousands practicing daily. Start free — no credit card required.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-background text-foreground hover:bg-background/90">
              <Link to="/register">Start Free <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      <LandingFooter />
    </div>
  );
}
