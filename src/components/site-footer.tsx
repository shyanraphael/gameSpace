export function SiteFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container-wide flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <div>© 2026 — Run/Played logbook</div>
        <div className="flex gap-6">
          <span>Built with care.</span>
          <span>Game art © respective studios.</span>
        </div>
      </div>
    </footer>
  );
}
