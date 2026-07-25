export const features = [
  { icon: "Sparkles", title: "AI Mock Interviews", desc: "Realistic interviews powered by frontier LLMs that adapt to your answers." },
  { icon: "Briefcase", title: "Role Based Questions", desc: "Curated question banks tailored to your target role and seniority." },
  { icon: "Code2", title: "Coding Interviews", desc: "Live coding challenges with AI evaluation of correctness and style." },
  { icon: "MessageSquare", title: "Behavioral Interviews", desc: "STAR-method coaching for behavioral and situational rounds." },
  { icon: "Mic", title: "Voice Interviews", desc: "Speak your answers — we transcribe and score delivery, pace, and clarity." },
  { icon: "LineChart", title: "Detailed AI Feedback", desc: "Per-question breakdown with model answers and improvement plans." },
  { icon: "TrendingUp", title: "Progress Tracking", desc: "Weekly streaks, mastery curves, and topic-level heatmaps." },
  { icon: "BarChart3", title: "Performance Analytics", desc: "Deep dashboards showing your growth across every skill dimension." },
  { icon: "FileText", title: "Resume Based Questions", desc: "Upload your resume — get questions rooted in your actual experience." },
  { icon: "Building2", title: "Company Specific Prep", desc: "Curated banks for FAANG, unicorns, and top startups." },
];

export const steps = [
  { n: "01", title: "Choose your role", desc: "Pick the target role, seniority, and interview type." },
  { n: "02", title: "Start AI Interview", desc: "Voice or text — the AI adapts to your seniority in real time." },
  { n: "03", title: "Answer Questions", desc: "Solve, explain, and reason. Skip or dive deeper anytime." },
  { n: "04", title: "Receive AI Feedback", desc: "Get scores, strengths, gaps, and model answers instantly." },
];

export const testimonials = [
  {
    name: "Priya Sharma",
    title: "SWE @ Stripe",
    quote:
      "InterviewAI is the closest thing to a real interviewer I've used. I landed offers from three FAANG companies within six weeks.",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    name: "Marcus Chen",
    title: "Data Scientist @ Netflix",
    quote:
      "The feedback quality is unreal. It catches the exact things human interviewers ding you for — filler words, missing tradeoffs, weak STAR structure.",
    avatar: "https://i.pravatar.cc/120?img=13",
  },
  {
    name: "Ana Rodríguez",
    title: "PM @ Airbnb",
    quote:
      "I practiced 40+ behavioral rounds here. The company-specific prep and analytics made prep feel like training, not guessing.",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
];

export const pricing = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    desc: "For casual prep and getting started.",
    features: ["5 AI interviews / month", "Text-based interviews", "Basic feedback", "Progress tracking"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ month",
    desc: "For serious job seekers.",
    features: [
      "Unlimited AI interviews",
      "Voice interviews",
      "Detailed feedback + model answers",
      "Company-specific prep",
      "Resume-based questions",
      "Advanced analytics",
    ],
    cta: "Get Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For bootcamps, universities & teams.",
    features: ["Everything in Pro", "Team dashboards", "Custom question banks", "SSO & SCIM", "Dedicated success manager"],
    cta: "Talk to sales",
    highlight: false,
  },
];

export const faqs = [
  { q: "Is InterviewAI free to try?", a: "Yes — the Free plan includes 5 full AI interviews every month, forever." },
  { q: "Which roles are supported?", a: "Engineering, data, design, security, and DevOps roles across Fresher to Senior levels." },
  { q: "Do you support voice?", a: "Yes. Speak your answers and we score delivery, pace, filler words, and clarity." },
  { q: "Can I upload my resume?", a: "Absolutely — Pro plans generate questions rooted in your real experience and projects." },
  { q: "How is my data handled?", a: "Your recordings and transcripts are private, encrypted at rest, and never used to train models." },
];

export const stats = [
  { label: "Total Interviews", value: 47, delta: "+8 this week", icon: "Sparkles" },
  { label: "Average Score", value: "82%", delta: "+4% vs last week", icon: "Target" },
  { label: "Current Streak", value: "12d", delta: "Personal best", icon: "Flame" },
  { label: "Hours Practiced", value: "36.5", delta: "+6.2h this week", icon: "Clock" },
];

export const weeklyPractice = [
  { day: "Mon", minutes: 45 },
  { day: "Tue", minutes: 30 },
  { day: "Wed", minutes: 75 },
  { day: "Thu", minutes: 20 },
  { day: "Fri", minutes: 90 },
  { day: "Sat", minutes: 60 },
  { day: "Sun", minutes: 55 },
];

export const performanceTrend = [
  { week: "W1", score: 62 },
  { week: "W2", score: 68 },
  { week: "W3", score: 71 },
  { week: "W4", score: 74 },
  { week: "W5", score: 78 },
  { week: "W6", score: 82 },
  { week: "W7", score: 85 },
];

export const recentInterviews = [
  { id: 1, role: "Frontend Developer", type: "Technical", score: 88, date: "Today", duration: "42m" },
  { id: 2, role: "Full Stack Developer", type: "System Design", score: 76, date: "Yesterday", duration: "58m" },
  { id: 3, role: "Data Scientist", type: "Behavioral", score: 91, date: "2 days ago", duration: "31m" },
  { id: 4, role: "Backend Developer", type: "Coding", score: 72, date: "4 days ago", duration: "55m" },
  { id: 5, role: "DevOps Engineer", type: "HR", score: 84, date: "1 week ago", duration: "28m" },
];

export const scoreBreakdown = [
  { label: "Technical", value: 88 },
  { label: "Communication", value: 82 },
  { label: "Confidence", value: 76 },
  { label: "Problem Solving", value: 85 },
];

export const interviewQuestions = [
  { q: "Walk me through how you would design a URL shortener that handles 100M requests per day.", topic: "System Design" },
  { q: "Explain the difference between debouncing and throttling. When would you use each?", topic: "Frontend" },
  { q: "Tell me about a time you disagreed with a teammate. How did you resolve it?", topic: "Behavioral" },
  { q: "How does React reconciliation work under the hood?", topic: "Frontend" },
  { q: "Given an array of integers, return indices of two numbers that add up to a target.", topic: "Coding" },
];

export const achievements = [
  { name: "First Steps", desc: "Completed your first interview", earned: true, icon: "Sparkles" },
  { name: "Streak Master", desc: "10 day streak", earned: true, icon: "Flame" },
  { name: "Perfectionist", desc: "Score above 90%", earned: true, icon: "Trophy" },
  { name: "Marathon", desc: "10 hours in a week", earned: false, icon: "Clock" },
  { name: "Polyglot", desc: "Interview in 5 roles", earned: false, icon: "Globe" },
  { name: "Interviewer", desc: "100 interviews completed", earned: false, icon: "Award" },
];
