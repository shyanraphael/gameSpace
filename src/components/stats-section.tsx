import { motion } from "motion/react";
import { games } from "@/data/games";

export function StatsSection() {
  const studios = new Set(games.map((g) => g.studio)).size;
  return (
    <section id="stats" className="relative border-t border-border py-28">
      <div className="container-wide">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <div>
            <span className="tag">§ 03 — Index</span>
            <h3 className="mt-6 font-display font-bold tracking-tight text-4xl">The shelf.</h3>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Quick index. Click a card to jump back to its section above.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((g, i) => (
            <motion.a
              key={g.id}
              href={`#${g.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-border bg-card hover:border-foreground/40 transition-all"
              style={{
                ["--game" as string]: `oklch(${g.theme.accent})`,
                ["--game-glow" as string]: `oklch(${g.theme.glow})`,
              }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={g.cover}
                  alt={g.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--game) 80%, transparent))" }}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-white/70">{String(i + 1).padStart(2, "0")} / {g.year}</div>
                  <div className="font-display font-bold text-white text-lg leading-tight mt-1">{g.title}</div>
                </div>
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ background: "var(--game)", boxShadow: "0 0 16px var(--game-glow)" }}
                />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs uppercase tracking-widest">
          {[
            { label: "Games logged", value: games.length.toString().padStart(2, "0") },
            { label: "Studios", value: studios.toString().padStart(2, "0") },
            { label: "Open worlds", value: "05" },
            { label: "Updated", value: "May 2026" },
          ].map((s) => (
            <div key={s.label} className="border border-border rounded-xl p-5">
              <div className="font-display text-3xl font-bold text-foreground">{s.value}</div>
              <div className="text-muted-foreground mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
