import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, CheckCircle2, MapPin, Users } from "lucide-react";
import { events } from "@/lib/data";

export function generateStaticParams() {
  return events.map((event) => ({ id: event.id }));
}

export default async function EventDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = events.find((item) => item.id === id);

  if (!event) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <Link href="/events" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font900 text-slate-600 transition hover:text-indigo-700">
        <ArrowLeft className="h-4 w-4" /> Back to events
      </Link>

      <section className={`relative overflow-hidden rounded-[2.4rem] bg-gradient-to-br ${event.accent} p-6 text-white shadow-2xl shadow-indigo-950/20 sm:p-10`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.34),transparent_16rem)]" />
        <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font900 uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <CheckCircle2 className="h-3.5 w-3.5" /> Registration open
          </div>
          <h1 className="mt-4 font-display text-4xl font-black tracking-tight sm:text-6xl">{event.title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/85">{event.description}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="hero-button bg-white text-indigo-700">Register Now</button>
            <Link href="/explore" className="hero-button hero-button-secondary bg-white/15 text-white">
              Explore more
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.78fr]">
        <div className="glass-card rounded-[2rem] p-6">
          <p className="text-sm font900 uppercase tracking-[0.18em] text-indigo-600">Schedule</p>
          <h2 className="mt-2 font-display text-3xl font-black">What happens inside</h2>
          <div className="mt-5 space-y-3">
            {["Opening keynote and team matching", "Guided build sprint with mentor check-ins", "Demo showcase, feedback, certificates"].map((item, index) => (
              <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white/80 p-4">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-indigo-50 text-sm font900 text-indigo-700">{index + 1}</span>
                <div>
                  <div className="font900">{item}</div>
                  <div className="text-sm text-slate-500">Designed to be beginner-friendly and portfolio-ready.</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside className="glass-card rounded-[2rem] p-6">
          <p className="text-sm font900 uppercase tracking-[0.18em] text-indigo-600">Event details</p>
          <div className="mt-5 space-y-4 text-sm font700 text-slate-600">
            <div className="flex items-center gap-3"><CalendarDays className="h-5 w-5 text-indigo-600" /> {event.date} · {event.time}</div>
            <div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-indigo-600" /> {event.location}</div>
            <div className="flex items-center gap-3"><Users className="h-5 w-5 text-indigo-600" /> {event.people}</div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {event.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font900 text-indigo-700">{tag}</span>
            ))}
          </div>
        </aside>
      </section>
    </div>
  );
}
