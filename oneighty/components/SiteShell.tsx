"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bell, ChevronRight, MessageCircle, Moon, Plus, Search, UserRound } from "lucide-react";
import { navItems } from "@/lib/data";

const ease = [0.4, 0, 0.2, 1] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-hidden bg-page text-slate-950">
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-80 w-80 rounded-full bg-indigo-300/35 blur-3xl" />
        <div className="absolute right-[-8%] top-[12%] h-96 w-96 rounded-full bg-teal-200/45 blur-3xl" />
        <div className="absolute bottom-[-18%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-violet-200/45 blur-3xl" />
      </div>

      <aside className="fixed inset-y-4 left-4 z-30 hidden w-72 flex-col rounded-[2rem] border border-white/70 bg-white/70 p-4 shadow-2xl shadow-indigo-950/10 backdrop-blur-2xl lg:flex">
        <Link href="/" className="flex items-center gap-3 px-2">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-500 to-fuchsia-500 font-display text-lg font-black text-white shadow-lg shadow-indigo-500/25">
            180
          </div>
          <div>
            <div className="font-display text-2xl font-black tracking-tight">oneighty</div>
            <div className="text-xs font-semibold text-slate-500">Your Tech Turning Point</div>
          </div>
        </Link>

        <div className="mt-5 flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white/70 px-3 py-2 text-sm text-slate-500">
          <Search className="h-4 w-4" />
          Search anything
          <span className="ml-auto rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-bold">⌘K</span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button className="soft-button">
            <Plus className="h-4 w-4" /> Post
          </button>
          <Link href="/projects/start" className="soft-button justify-center bg-slate-950 text-white hover:bg-indigo-700">
            Project
          </Link>
        </div>

        <nav className="mt-5 space-y-1">
          {navItems.map((item, index) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <motion.div
                key={item.href}
                initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.22, delay: reduceMotion ? 0 : index * 0.025, ease }}
              >
                <Link
                  href={item.href}
                  className={`group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font700 transition ${
                    active ? "text-indigo-950" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-sidebar-pill"
                      className="absolute inset-0 rounded-2xl bg-indigo-50 shadow-sm"
                      transition={{ duration: 0.28, ease }}
                    />
                  )}
                  <span className={`relative grid h-9 w-9 place-items-center rounded-xl ${active ? "bg-white text-indigo-600" : "bg-white/70 text-slate-500 group-hover:text-indigo-600"}`}>
                    <item.icon className="h-4 w-4" />
                  </span>
                  <span className="relative flex-1">{item.label}</span>
                  {item.badge && <span className="relative rounded-full bg-indigo-600 px-2 py-0.5 text-[10px] font-black text-white">{item.badge}</span>}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        <div className="mt-auto rounded-3xl border border-slate-200 bg-white/70 p-3">
          <div className="flex items-center gap-3">
            <div className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-400 to-indigo-500 text-white">
              A
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font800">Alex Morgan</div>
              <div className="text-xs text-slate-500">Student · Lvl 12</div>
            </div>
            <Moon className="ml-auto h-4 w-4 text-slate-400" />
          </div>
        </div>
      </aside>

      <main className="lg:pl-80">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease }}
          className="sticky top-0 z-20 mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8"
        >
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-black lg:hidden">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-600 text-xs text-white">180</span>
            oneighty
          </Link>
          <div className="ml-auto hidden min-w-0 flex-1 max-w-xl items-center gap-2 rounded-2xl border border-white/70 bg-white/70 px-3 py-2 text-sm text-slate-500 shadow-sm sm:flex">
            <Search className="h-4 w-4" />
            Search events, projects, mentors...
          </div>
          <TopButton icon={<MessageCircle className="h-4 w-4" />} label="Messages" />
          <TopButton icon={<Bell className="h-4 w-4" />} label="Notifications" dot />
          <TopButton icon={<UserRound className="h-4 w-4" />} label="Profile" />
        </motion.header>

        <motion.div
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease }}
          className="mx-auto max-w-7xl px-4 pb-12 pt-2 sm:px-6 lg:px-8"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}

function TopButton({ icon, label, dot }: { icon: ReactNode; label: string; dot?: boolean }) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.18, ease }}
      aria-label={label}
      className="relative grid h-11 w-11 place-items-center rounded-2xl border border-white/70 bg-white/80 text-slate-600 shadow-sm backdrop-blur transition hover:text-indigo-600"
    >
      {icon}
      {dot && <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />}
    </motion.button>
  );
}

export function HeroButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <motion.div whileHover={{ y: -2, scale: 1.015 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.18, ease }}>
      <Link href={href} className={`hero-button ${variant === "secondary" ? "hero-button-secondary" : ""}`}>
        {children}
        <ChevronRight className="h-4 w-4" />
      </Link>
    </motion.div>
  );
}
