import type { TimelineVisual as TimelineVisualData } from "@/lib/timelines-data";

export function TimelineVisual({ visual }: { visual: TimelineVisualData }) {
  const lanes = [visual.left, visual.right];

  return (
    <figure className="overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b12] shadow-[0_32px_100px_rgba(0,0,0,0.35)]">
      <figcaption className="border-b border-white/10 px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-300">
        {visual.eyebrow}
      </figcaption>
      <div className="relative grid gap-px bg-white/10 md:grid-cols-2">
        {lanes.map((lane) => (
          <div
            key={lane.label}
            className={`relative min-h-64 bg-[#08080e] p-7 sm:p-10 ${
              lane.emphasis ? "before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-cyan-300" : ""
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">{lane.label}</p>
            <p
              className={`mt-7 text-4xl font-semibold sm:text-5xl ${lane.emphasis ? "text-cyan-200" : "text-white"}`}
              style={{ fontFamily: "var(--font-display)" }}
            >
              {lane.date}
            </p>
            <div className="my-7 flex items-center gap-3" aria-hidden="true">
              <span className={`h-3 w-3 rounded-full ${lane.emphasis ? "bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.75)]" : "bg-white/45"}`} />
              <span className={`h-px flex-1 ${lane.emphasis ? "bg-cyan-300/65" : "bg-white/20"}`} />
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/70">{lane.description}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 border-t border-white/10 bg-cyan-300/[0.05] px-6 py-6 sm:grid-cols-[1fr_2fr] sm:px-10">
        <p className="text-sm font-semibold text-cyan-200">{visual.pivot}</p>
        <p className="text-sm leading-relaxed text-white/65">{visual.note}</p>
      </div>
    </figure>
  );
}
