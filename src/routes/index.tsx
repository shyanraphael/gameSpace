import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/hero-section";
import { GameSection } from "@/components/game-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { StatsSection } from "@/components/stats-section";
import { SiteFooter } from "@/components/site-footer";
import { games } from "@/data/games";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Run/Played — Worlds I've been through" },
      {
        name: "description",
        content:
          "A personal logbook of single-player games — Cyberpunk 2077, GTA V, RDR2, Ghost of Tsushima, Hitman WoA and Uncharted — each in its own colour.",
      },
      { property: "og:title", content: "Run/Played — Game logbook" },
      { property: "og:description", content: "Six worlds, six palettes. Wander with me." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <HeroSection />
      <section id="library" className="relative">
        <div className="container-wide pt-24 pb-8">
          <span className="tag">§ 01 — Library</span>
          <h2 className="mt-6 font-display font-bold tracking-tighter text-balance text-[clamp(2rem,5vw,4rem)] leading-[0.92]">
            Six worlds.<br />
            <span className="italic font-light text-muted-foreground">Six palettes.</span>
          </h2>
        </div>
        {games.map((g, i) => (
          <GameSection key={g.id} game={g} index={i} />
        ))}
      </section>
      <ManifestoSection />
      <StatsSection />
      <SiteFooter />
    </main>
  );
}
