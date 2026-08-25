import Link from "next/link";
import { ClaimStatusBadge } from "@/components/timelines/ClaimStatusBadge";

export function TimelineSpotlightSection() {
  return (
    <section className="mx-auto max-w-screen-2xl px-6 pb-24">
      <Link
        href="/timelines"
        className="group relative block overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[#09090f] p-8 transition-colors hover:border-cyan-300/35 sm:p-12 lg:p-16"
      >
        <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl transition-transform duration-700 group-hover:scale-125" aria-hidden="true" />
        <div className="relative grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_430px]">
          <div>
            <p className="micro-label text-cyan-300">NEW · BIBLE TIMELINES</p>
            <h2 className="mt-4 max-w-4xl text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl" style={{ fontFamily: "var(--homepage-font-display)" }}>
              The Bible,<br /><span className="italic text-cyan-200">placed in time.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/60">
              Trace Genesis to the conquest, then inspect the manuscript evidence, archaeology and calculations behind every contested date.
            </p>
            <span className="mt-8 inline-flex min-h-12 items-center font-semibold text-cyan-200">
              Explore the timeline <span className="ml-2 transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </span>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/10 bg-black/25 p-6">
            {[
              { date: "c. 3000 BC", label: "Flood in the longer chronology", status: "derived" as const },
              { date: "215 or 430", label: "Israel's sojourn in Egypt", status: "disputed" as const },
              { date: "Avaris", label: "Was the Asiatic dignitary Joseph?", status: "hypothesis" as const },
            ].map((item) => (
              <div key={item.label} className="grid grid-cols-[92px_1fr] gap-4 border-b border-white/8 py-4 last:border-0">
                <span className="text-sm font-semibold text-white/55">{item.date}</span>
                <div><p className="mb-2 text-sm font-medium text-white">{item.label}</p><ClaimStatusBadge status={item.status} /></div>
              </div>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
}
