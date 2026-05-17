import { motion } from "motion/react";

const lines = [
  "I don't speedrun.",
  "I wander. I pet the dog. I read every codex entry.",
  "Side-quests > main quests. Always.",
  "A good world deserves a slow walk.",
];

export function ManifestoSection() {
  return (
    <section id="manifesto" className="relative border-t border-border py-32">
      <div className="container-wide grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <span className="tag">§ 02 — Manifesto</span>
          <h3 className="mt-6 font-display font-bold text-balance text-4xl tracking-tight">
            How I play.
          </h3>
        </div>
        <div className="md:col-span-8 space-y-2">
          {lines.map((l, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="font-display font-light text-balance text-[clamp(1.5rem,3vw,2.4rem)] leading-tight"
            >
              <span className="font-mono text-xs text-muted-foreground mr-4 align-middle">
                0{i + 1}
              </span>
              {l}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
