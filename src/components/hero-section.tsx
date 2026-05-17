import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { games } from "@/data/games";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden grid-bg">
      {/* glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-foreground/10 blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[30rem] w-[30rem] rounded-full bg-foreground/5 blur-3xl" />
      </div>

      <motion.div style={{ y, opacity }} className="relative container-wide pt-40 pb-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="tag">Vol.01 — 2026 Drop</span>
          <span className="tag">Single-player Rotation</span>
        </div>

        <h1 className="font-display font-bold tracking-tighter text-balance leading-[0.86] text-[clamp(2.8rem,10vw,9rem)]">
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="block"
          >
            Worlds I've
          </motion.span>
          <motion.span
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
            className="block italic font-light"
          >
            been through.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-10 max-w-xl text-muted-foreground text-balance"
        >
          A logbook of single-player worlds I've lived in — from Night City's neon to the
          frostbitten ridges of Tsushima. Every entry has its own colour, its own pulse.
        </motion.p>

        <div className="mt-14 flex items-end justify-between gap-8 flex-wrap">
          <a
            href="#library"
            className="group inline-flex items-center gap-3 px-5 py-3 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-widest hover:bg-foreground/90 transition"
          >
            Enter library
            <ArrowDown className="h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground flex gap-8">
            <div>
              <div className="text-foreground text-3xl font-display font-bold">{games.length.toString().padStart(2, "0")}</div>
              <div>Logged</div>
            </div>
            <div>
              <div className="text-foreground text-3xl font-display font-bold">∞</div>
              <div>Hours sunk</div>
            </div>
            <div>
              <div className="text-foreground text-3xl font-display font-bold">06</div>
              <div>Studios</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* marquee */}
      <div className="absolute bottom-0 inset-x-0 border-y border-border bg-background/40 backdrop-blur-sm overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] whitespace-nowrap py-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 gap-12 px-6">
              {games.map((g) => (
                <span key={g.id} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-foreground" />
                  {g.title} — {g.studio}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
