import {
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Compass,
  GraduationCap,
  Handshake,
  Network,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Dashboard", href: "/", icon: Compass },
  { label: "Explore", href: "/explore", icon: Sparkles },
  { label: "Learn & Build", href: "/learn", icon: GraduationCap },
  { label: "Projects", href: "/projects", icon: Code2 },
  { label: "Events", href: "/events", icon: CalendarDays, badge: "12" },
  { label: "Networking", href: "/networking", icon: Network },
  { label: "Mentors", href: "/mentors", icon: Handshake },
  { label: "Jobs", href: "/jobs", icon: BriefcaseBusiness },
  { label: "AI Assistant", href: "/ai", icon: Bot },
];

export const exploreCards = [
  {
    title: "Explore Events",
    href: "/events",
    kicker: "Hackathons, workshops, webinars",
    description:
      "Discover live learning events, group competitions, mentor sessions, and community meetups matched to your goals.",
    stat: "12 live",
    cta: "Explore Events",
    icon: CalendarDays,
    gradient: "from-indigo-500 via-violet-500 to-fuchsia-500",
  },
  {
    title: "Explore Projects",
    href: "/projects",
    kicker: "Build with teams",
    description:
      "Find real-world student projects, open roles, and AI-scored teams that need your skills right now.",
    stat: "38 teams",
    cta: "Find Projects",
    icon: Rocket,
    gradient: "from-cyan-500 via-teal-500 to-emerald-500",
  },
  {
    title: "Explore Communities",
    href: "/networking",
    kicker: "Connect with builders",
    description:
      "Join beginner-friendly tech circles, university clubs, founders, open-source maintainers, and mentors.",
    stat: "5.2K members",
    cta: "Meet People",
    icon: Users,
    gradient: "from-sky-500 via-blue-500 to-indigo-500",
  },
];

export const events = [
  {
    id: "ai-innovation-hack-2026",
    title: "AI Innovation Hackathon 2026",
    organizer: "oneighty Labs x GDG",
    date: "June 12, 2026",
    time: "9:00 AM GMT+5:30",
    mode: "Hybrid",
    location: "Colombo + Online",
    people: "1,284 registered",
    tags: ["AI", "Python", "Startups"],
    description:
      "A 36-hour build sprint for students creating responsible AI products with mentor reviews, live demos, and partner prizes.",
    accent: "from-indigo-600 via-violet-600 to-fuchsia-600",
  },
  {
    id: "aws-cloud-workshop",
    title: "AWS Cloud Workshop",
    organizer: "AWS Community Builders",
    date: "June 18, 2026",
    time: "6:30 PM GMT+5:30",
    mode: "Online",
    location: "Live stream",
    people: "742 registered",
    tags: ["AWS", "Cloud", "DevOps"],
    description:
      "Hands-on deployment workshop covering Docker, serverless APIs, monitoring, and production-ready cloud habits.",
    accent: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    id: "cybersecurity-challenge",
    title: "Cybersecurity Challenge",
    organizer: "oneighty Security Guild",
    date: "July 02, 2026",
    time: "7:00 PM GMT+5:30",
    mode: "Online",
    location: "Discord Arena",
    people: "536 registered",
    tags: ["Security", "CTF", "Networking"],
    description:
      "Beginner-to-intermediate CTF missions with guided debriefs, write-up templates, and mentor feedback.",
    accent: "from-rose-600 via-red-500 to-indigo-600",
  },
];

export const stats = [
  { label: "Active students", value: "5,284" },
  { label: "Events hosted", value: "120+" },
  { label: "Projects building", value: "38" },
  { label: "Mentors online", value: "84" },
];
