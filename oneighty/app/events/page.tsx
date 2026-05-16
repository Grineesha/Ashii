"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bookmark, CalendarDays, MapPin, Share2, Sparkles, Users } from "lucide-react";
import { events } from "@/lib/data";

const ease = [0.4, 0, 0.2, 1] as const;

export default function EventsPage() {
  return (
    <div className="space-y-8">
      <section className="glass-card relative overflow-hidden rounded-[2.4rem] p-6 sm:p-10">
        <div className="gradient-orb right-12 top-8 bg-indigo-400" />
        <div className="gradient-orb bottom-0 left-16 bg-teal-300" />
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.34, ease }} className="relative">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-xs font900 text-indigo-700">
            <CalendarDays className="h-3.5 w-3.5" /> Events Hub
          </div>
          <h1 className="mt-4 section-title max-w-4xl">
            Discover events that <span className="text-gradient">shape your future.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Join hackathons, workshops, webinars, tech talks, networking sessions, and career fairs built for IT students.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#trending-events" className="hero-button">
              Explore Events <ArrowRight className="h-4 w-4" />
            </a>
            <button className="hero-button hero-button-secondary">Create Event</button>
          </div>
        </motion.div>
      </section>

      <section className="stat-grid">
        {[
          ["2,140 XP", "Your activity points"],
          ["14 days", "Learning streak"],
          ["86%", "Profile completion"],
          ["Level 12", "Builder badge"],
        ].map(([value, label], index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, ease, delay: index * 0.05 }}
            className="glass-card rounded-3xl p-5"
          >
            <div className="font-display text-2xl font-black">{value}</div>
            <div className="text-sm font700 text-slate-500">{label}</div>
          </motion.div>
        ))}
      </section>

      <section id="trending-events">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font900 uppercase tracking-[0.22em] text-indigo-600">Trending</p>
            <h2 className="font-display text-3xl font-black tracking-tight">Live event opportunities</h2>
          </div>
          <Link href="/explore" className="text-sm font900 text-indigo-700 hover:text-indigo-950">
            Back to Explore
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.article
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true }}
              transition={{ duration: 0.32, ease, delay: index * 0.06 }}
              className="event-card"
            >
              <div className={`relative min-h-40 bg-gradient-to-br ${event.accent} p-5 text-white`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.36),transparent_12rem)]" />
                <div className="relative flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font900 uppercase tracking-[0.18em] text-white/70">{event.organizer}</div>
                    <h3 className="mt-2 font-display text-2xl font-black leading-tight">{event.title}</h3>
                  </div>
                  <button aria-label={`Save ${event.title}`} className="grid h-10 w-10 place-items-center rounded-2xl bg-white/15 backdrop-blur transition hover:bg-white/25">
                    <Bookmark className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-6 text-slate-600">{event.description}</p>
                <div className="mt-4 space-y-2 text-sm font700 text-slate-600">
                  <div className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-indigo-600" /> {event.date} · {event.time}</div>
                  <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-600" /> {event.location} · {event.mode}</div>
                  <div className="flex items-center gap-2"><Users className="h-4 w-4 text-indigo-600" /> {event.people}</div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font900 text-indigo-700">{tag}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <Link href={`/events/${event.id}`} className="hero-button min-h-11 flex-1 text-sm">
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button aria-label={`Share ${event.title}`} className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition hover:text-indigo-600">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
