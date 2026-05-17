import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm tracking-widest">
          <span className="h-6 w-6 rounded-md bg-foreground text-background grid place-items-center font-bold">▮</span>
          <span className="uppercase">Run/Played</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <a href="#library" className="hover:text-foreground transition-colors">Library</a>
          <a href="#manifesto" className="hover:text-foreground transition-colors">Manifesto</a>
          <a href="#stats" className="hover:text-foreground transition-colors">Stats</a>
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline tag">06 / Logged</span>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
