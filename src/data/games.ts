export type Game = {
  id: string;
  title: string;
  studio: string;
  year: string;
  genre: string;
  platforms: string[];
  tagline: string;
  description: string;
  cover: string;
  hero: string;
  logo?: string;
  link: string;
  // Theme tokens (oklch values, no `oklch(...)` wrapper)
  theme: {
    bg: string;
    fg: string;
    accent: string;
    accentFg: string;
    glow: string; // accent with alpha
  };
  stats: { label: string; value: string }[];
};

const STEAM = (id: string, kind: "library_hero" | "header" | "library_600x900") =>
  `https://cdn.cloudflare.steamstatic.com/steam/apps/${id}/${kind}.jpg`;

export const games: Game[] = [
  {
    id: "cyberpunk-2077",
    title: "Cyberpunk 2077",
    studio: "CD Projekt Red",
    year: "2020",
    genre: "Open-world RPG",
    platforms: ["PC", "PS5", "Xbox Series"],
    tagline: "Wake the f*** up, Samurai.",
    description:
      "Night City is an open-world megalopolis obsessed with power, glamour and body modification. You play V — a mercenary outlaw chasing a one-of-a-kind implant that holds the key to immortality.",
    cover: STEAM("1091500", "library_600x900"),
    hero: STEAM("1091500", "library_hero"),
    link: "https://www.cyberpunk.net",
    theme: {
      bg: "0.16 0.05 95",
      fg: "0.98 0.02 95",
      accent: "0.88 0.22 95",
      accentFg: "0.14 0.05 95",
      glow: "0.88 0.22 95 / 0.55",
    },
    stats: [
      { label: "Districts", value: "06" },
      { label: "Endings", value: "5+" },
      { label: "Year", value: "2077" },
    ],
  },
  {
    id: "gta-v",
    title: "Grand Theft Auto V",
    studio: "Rockstar Games",
    year: "2013",
    genre: "Action-adventure",
    platforms: ["PC", "PS5", "Xbox Series"],
    tagline: "Three lives. One city. Endless chaos.",
    description:
      "Switch between Michael, Trevor and Franklin as their lives collide in Los Santos — a satirical, sun-bleached take on Los Angeles where every heist, chase and side hustle pulls them deeper into trouble.",
    cover: STEAM("271590", "library_600x900"),
    hero: STEAM("271590", "library_hero"),
    link: "https://www.rockstargames.com/gta-v",
    theme: {
      bg: "0.18 0.06 145",
      fg: "0.98 0.02 145",
      accent: "0.78 0.18 145",
      accentFg: "0.12 0.04 145",
      glow: "0.78 0.18 145 / 0.5",
    },
    stats: [
      { label: "Protagonists", value: "03" },
      { label: "Map (mi²)", value: "49" },
      { label: "Online", value: "GTAO" },
    ],
  },
  {
    id: "rdr2",
    title: "Red Dead Redemption 2",
    studio: "Rockstar Games",
    year: "2018",
    genre: "Western action-adventure",
    platforms: ["PC", "PS4", "Xbox One"],
    tagline: "An outlaw for life.",
    description:
      "America, 1899. The Van der Linde gang is on the run. As Arthur Morgan, you live the slow death of the Old West — riding through frostbitten mountains, swamps and sun-burnt plains while loyalty quietly tears the gang apart.",
    cover: STEAM("1174180", "library_600x900"),
    hero: STEAM("1174180", "library_hero"),
    link: "https://www.rockstargames.com/reddeadredemption2",
    theme: {
      bg: "0.18 0.06 45",
      fg: "0.98 0.02 80",
      accent: "0.74 0.19 45",
      accentFg: "0.12 0.04 40",
      glow: "0.74 0.19 45 / 0.55",
    },
    stats: [
      { label: "Chapters", value: "06" },
      { label: "Honor", value: "±" },
      { label: "Era", value: "1899" },
    ],
  },
  {
    id: "ghost-of-tsushima",
    title: "Ghost of Tsushima",
    studio: "Sucker Punch",
    year: "2020",
    genre: "Open-world action",
    platforms: ["PC", "PS5", "PS4"],
    tagline: "Forge a new path. Wage an unconventional war.",
    description:
      "Tsushima Island, 1274. The Mongol Empire has razed entire civilizations and you, Jin Sakai, are one of the last surviving samurai. Abandon the samurai code to forge a new way of fighting — the way of the Ghost.",
    cover: STEAM("2215430", "library_600x900"),
    hero: STEAM("2215430", "library_hero"),
    link: "https://www.suckerpunch.com/games/ghost-of-tsushima",
    theme: {
      bg: "0.18 0.04 25",
      fg: "0.98 0.02 80",
      accent: "0.72 0.21 28",
      accentFg: "0.14 0.04 25",
      glow: "0.72 0.21 28 / 0.55",
    },
    stats: [
      { label: "Acts", value: "03" },
      { label: "Stances", value: "04" },
      { label: "Era", value: "1274" },
    ],
  },
  {
    id: "hitman-woa",
    title: "Hitman: World of Assassination",
    studio: "IO Interactive",
    year: "2021",
    genre: "Stealth sandbox",
    platforms: ["PC", "PS5", "Xbox Series"],
    tagline: "Become the world's ultimate assassin.",
    description:
      "Step into the polished shoes of Agent 47 across a global network of sandbox locations. Disguise, improvise, eliminate — every level is a clockwork puzzle box of opportunities, exits and very unlucky targets.",
    cover: STEAM("1659040", "library_600x900"),
    hero: STEAM("1659040", "library_hero"),
    link: "https://ioi.dk/hitman-world-of-assassination",
    theme: {
      bg: "0.16 0.01 260",
      fg: "0.98 0.005 260",
      accent: "0.72 0.18 25",
      accentFg: "0.98 0.01 260",
      glow: "0.72 0.18 25 / 0.55",
    },
    stats: [
      { label: "Locations", value: "20+" },
      { label: "Agent", value: "47" },
      { label: "Targets", value: "∞" },
    ],
  },
  {
    id: "uncharted",
    title: "Uncharted: Legacy of Thieves",
    studio: "Naughty Dog",
    year: "2022",
    genre: "Cinematic action-adventure",
    platforms: ["PC", "PS5"],
    tagline: "Fortune favors the bold.",
    description:
      "Two of the greatest Uncharted adventures in one collection. Race Nathan Drake and Chloe Frazer across cliff-edges, lost cities and exploding convoys in pursuit of treasures the world was never meant to find.",
    cover: STEAM("1659420", "library_600x900"),
    hero: STEAM("1659420", "library_hero"),
    link: "https://www.naughtydog.com/games/uncharted_legacy_of_thieves_collection",
    theme: {
      bg: "0.18 0.05 200",
      fg: "0.98 0.02 200",
      accent: "0.78 0.16 210",
      accentFg: "0.12 0.04 220",
      glow: "0.78 0.16 210 / 0.55",
    },
    stats: [
      { label: "Adventures", value: "02" },
      { label: "Heroes", value: "Drake/Chloe" },
      { label: "Treasures", value: "∞" },
    ],
  },
];
