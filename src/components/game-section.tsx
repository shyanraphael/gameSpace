import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import type { Game } from "@/data/games";

export function GameSection({ game, index }: { game: Game; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const titleX = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const reverse = index % 2 === 1;

  const themeStyle = {
    "--game": `oklch(${game.theme.accent})`,
    "--game-foreground": `oklch(${game.theme.accentFg})`,
    "--game-glow": `oklch(${game.theme.glow})`,
    "--section-bg": `oklch(${game.theme.bg})`,
    "--section-fg": `oklch(${game.theme.fg})`,
  } as React.CSSProperties;

  return (
    <section
      ref={ref}
      id={game.id}
      style={themeStyle}
      className="relative isolate overflow-hidden border-t border-border"
    >
      {/* themed backdrop — only shows in dark mode for vibe; subtle in light */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-90 dark:opacity-100"
        style={{
          background: `radial-gradient(60% 50% at 50% 0%, color-mix(in oklab, var(--game) 35%, transparent), transparent 70%), var(--section-bg)`,
        }}
      />
      <div className="absolute inset-0 -z-10 grid-bg opacity-30" />

      <div className="container-wide py-28 md:py-36">
        <div className={`grid gap-12 md:gap-16 items-center md:grid-cols-12 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
          {/* Image */}
          <motion.div style={{ y: imgY }} className="md:col-span-7 relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 glow">
              <img
                src={game.hero}
                alt={`${game.title} key art`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = game.cover;
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 50%, color-mix(in oklab, var(--section-bg) 90%, transparent))`,
                }}
              />
              {/* HUD */}
              <div className="absolute top-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/80">
                <span>ID/{String(index + 1).padStart(3, "0")}</span>
                <span>{game.year}</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-white/80">
                <span>{game.platforms.join(" / ")}</span>
                <span style={{ color: "var(--game)" }}>● live</span>
              </div>
            </div>

            {/* small cover thumbnail */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="hidden md:block absolute -bottom-10 -right-6 w-40 aspect-[2/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <img src={game.cover} alt="" className="h-full w-full object-cover" loading="lazy" />
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="md:col-span-5" style={{ color: "var(--section-fg)" }}>
            <div className="flex items-center gap-3 mb-6 font-mono text-xs uppercase tracking-widest" style={{ color: "color-mix(in oklab, var(--section-fg) 60%, transparent)" }}>
              <span className="h-px w-8" style={{ background: "var(--game)" }} />
              {game.genre} · {game.studio}
            </div>

            <motion.h2
              style={{ x: titleX }}
              className="font-display font-bold tracking-tighter text-balance leading-[0.92] text-[clamp(2rem,5vw,4rem)]"
            >
              {game.title}
            </motion.h2>

            <p
              className="mt-4 italic font-light text-lg"
              style={{ color: "var(--game)" }}
            >
              "{game.tagline}"
            </p>

            <p className="mt-6 leading-relaxed text-balance" style={{ color: "color-mix(in oklab, var(--section-fg) 75%, transparent)" }}>
              {game.description}
            </p>

            <div className="mt-8 grid grid-cols-3 gap-3">
              {game.stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-lg border p-3"
                  style={{
                    borderColor: "color-mix(in oklab, var(--section-fg) 15%, transparent)",
                    background: "color-mix(in oklab, var(--section-fg) 4%, transparent)",
                  }}
                >
                  <div className="font-display text-2xl font-bold" style={{ color: "var(--game)" }}>{s.value}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest opacity-70 mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <a
              href={game.link}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition hover:scale-[1.02]"
              style={{ background: "var(--game)", color: "var(--game-foreground)" }}
            >
              Visit official site
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* big watermark numeral */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 right-4 font-display font-bold leading-none select-none"
        style={{
          fontSize: "clamp(8rem, 22vw, 22rem)",
          color: "color-mix(in oklab, var(--game) 18%, transparent)",
          letterSpacing: "-0.05em",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </section>
  );
}
