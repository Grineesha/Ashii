import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ComingSoonPage({ title, description }: { title: string; description: string }) {
  return (
    <section className="glass-card rounded-[2.4rem] p-6 sm:p-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1.5 text-xs font900 text-indigo-700">
        <Sparkles className="h-3.5 w-3.5" /> oneighty preview
      </div>
      <h1 className="mt-4 section-title max-w-4xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{description}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link href="/explore" className="hero-button">
          Open Explore <ArrowRight className="h-4 w-4" />
        </Link>
        <Link href="/events" className="hero-button hero-button-secondary">
          Explore Events <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
