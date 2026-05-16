"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, CheckCircle2, Search, Sparkles } from "lucide-react";
import { exploreCards, events } from "@/lib/data";

const ease = [0.4, 0, 0.2, 1] as const;

export default function ExplorePage() {
  return (
    <div className="space-y-8">
      <section className="glass-card rounded-[2.4rem] p-6 sm:p-10">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34, ease }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-xs font900 text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" /> Explore oneighty
          </div>
          <h1 className="mt-4 section-title max-w-4xl">
            Find the right <span className="text-gradient">events, teams, people,</span> and pathways.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            This page is your launchpad. The Explore Events action below now routes directly to the live events hub.
          </p>
          <div className="mt-6 flex max-w-2xl items-center gap-2 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-500">
            <Search className="h-4 w-4" />
            <span className="text-sm">Search hackathons, workshops, projects, mentors...</span>
          </div>
        </motion.div>
      </section>

      <section className="card-grid">
        {exploreCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease, delay: index * 0.06 }}
            className="event-card p-5"
          >
            <div className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white`}>
              <card.icon className="h-6 w-6" />
            </div>
            <div className="mt-5 text-xs font900 uppercase tracking-[0.18em] text-indigo-600">{card.kicker}</div>
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{card.description}</p>
            <div className="mt-6 flex items-center justify-between gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font900 text-slate-600">{card.stat}</span>
              <motion.div whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.18, ease }}>
                <Link
                  href={card.href}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-slate-950 px-4 text-sm font900 text-white transition hover:bg-indigo-700"
                >
                  {card.cta} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="glass-card rounded-[2rem] p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font900 uppercase tracking-[0.18em] text-indigo-600">Featured event route</p>
            <h2 className="font-display text-2xl font-black">Explore Events preview</h2>
          </div>
          <Link href="/events" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2.5 text-sm font900 text-white">
            Open full Events Hub <CalendarDays className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-5 grid gap-3 lg:grid-cols-3">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.id}`} className="rounded-3xl border border-slate-200 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-indigo-200">
              <div className="flex items-center gap-2 text-xs font900 text-emerald-600">
                <CheckCircle2 className="h-3.5 w-3.5" /> Working event link
              </div>
              <h3 className="mt-2 font-display text-xl font-black">{event.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{event.date} · {event.mode}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
