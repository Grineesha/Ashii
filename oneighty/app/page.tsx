"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck2, Sparkles, UsersRound } from "lucide-react";
import { HeroButton } from "@/components/SiteShell";
import { exploreCards, stats } from "@/lib/data";

const ease = [0.4, 0, 0.2, 1] as const;

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="glass-card relative overflow-hidden rounded-[2.4rem] p-6 sm:p-10 lg:p-14">
        <div className="gradient-orb left-10 top-10 bg-indigo-400" />
        <div className="gradient-orb bottom-4 right-20 bg-teal-300" />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.42, ease }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-xs font900 text-indigo-700">
              <Sparkles className="h-3.5 w-3.5" /> AI-powered student ecosystem
            </div>
            <h1 className="section-title">
              Empowering Students. <span className="text-gradient">Building Solutions.</span> Creating Impact.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              oneighty helps students learn, network, join events, build real-world projects, and create portfolio-ready proof of work.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <HeroButton href="/explore">Explore Platform</HeroButton>
              <HeroButton href="/events" variant="secondary">Explore Events</HeroButton>
              <HeroButton href="/mentors" variant="secondary">Become a Mentor</HeroButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.42, ease, delay: 0.08 }}
            className="relative rounded-[2rem] border border-white/70 bg-slate-950 p-5 text-white shadow-2xl shadow-indigo-950/20"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_20%_10%,rgba(139,127,255,0.42),transparent_16rem)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font900">Today on oneighty</div>
                  <div className="text-xs text-indigo-100/70">Smart recommendations</div>
                </div>
                <CalendarCheck2 className="h-5 w-5 text-teal-200" />
              </div>
              <div className="mt-5 grid gap-3">
                {["AI Hackathon team needs 2 Python builders", "AWS workshop starts in 3 hours", "Resume score improved to 94%"].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, ease, delay: 0.16 + index * 0.08 }}
                    className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/15 text-xs font900">{index + 1}</span>
                      <span className="text-sm font700">{item}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="stat-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.28, ease, delay: index * 0.05 }}
            className="glass-card rounded-3xl p-5"
          >
            <div className="font-display text-3xl font-black tracking-tight text-slate-950">{stat.value}</div>
            <div className="mt-1 text-sm font700 text-slate-500">{stat.label}</div>
          </motion.div>
        ))}
      </section>

      <section>
        <div className="mb-4 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font900 uppercase tracking-[0.22em] text-indigo-600">Explore</p>
            <h2 className="font-display text-3xl font-black tracking-tight">Choose your next move</h2>
          </div>
          <UsersRound className="hidden h-8 w-8 text-indigo-500 sm:block" />
        </div>
        <div className="card-grid">
          {exploreCards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease, delay: index * 0.06 }}
              className="event-card group p-5"
            >
              <div className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg shadow-indigo-500/20`}>
                <card.icon className="h-5 w-5" />
              </div>
              <p className="text-xs font900 uppercase tracking-[0.18em] text-indigo-600">{card.kicker}</p>
              <h3 className="mt-2 font-display text-2xl font-black tracking-tight">{card.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600">{card.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font900 text-indigo-700">{card.stat}</span>
                <span className="inline-flex items-center gap-1 text-sm font900 text-slate-950 group-hover:text-indigo-600">
                  {card.cta} <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}
