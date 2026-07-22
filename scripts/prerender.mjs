/**
 * prerender.mjs — Post-build static pre-render for local.biermanautism.com
 *
 * Runs after `vite build` to generate per-route index.html files in dist/public/
 * with correct canonical, og:url, og:image, title, and description baked in as
 * static HTML — so social crawlers (Facebook, Twitter, LinkedIn, Slack) and
 * search engine bots that don't execute JavaScript see the right meta tags.
 *
 * No puppeteer, no headless browser. Pure Node.js reading from location data.
 *
 * Routes generated:
 *   /                                          → NJ Hub
 *   /locations/nj/berkeley-heights/
 *   /locations/nj/cranford/
 *   /locations/nj/eatontown/
 *   /locations/nj/moorestown/
 *   /locations/nj/parsippany/
 *   /locations/nj/piscataway/
 *   /locations/nj/princeton/
 *   /locations/nj/ramsey/
 *   /locations/nj/roseland/
 *   /locations/nj/west-orange/
 *   /locations/nj/                             → alias (same as hub)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.resolve(ROOT, "dist/public");
const BASE_URL = "https://local.biermanautism.com";

// ── Route definitions ──────────────────────────────────────────────────────
// Each entry: { route, title, description, ogImage, canonical }
// ogImage paths are the /manus-storage/ paths from the location data files.

const routes = [
  // NJ Hub
  {
    route: "/",
    title: "ABA Therapy New Jersey | Bierman Autism Centers | NJ Hub",
    description:
      "Comprehensive autism services near you in New Jersey — ABA therapy, speech, OT & diagnostics at 10 locations. BCBA-supervised care. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-new-jersey-og_a336c1c3.jpg`,
    canonical: `${BASE_URL}/`,
  },
  // NJ alias (same content as hub)
  {
    route: "/locations/nj/",
    title: "ABA Therapy New Jersey | Bierman Autism Centers | NJ Hub",
    description:
      "Comprehensive autism services near you in New Jersey — ABA therapy, speech, OT & diagnostics at 10 locations. BCBA-supervised care. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-new-jersey-og_a336c1c3.jpg`,
    canonical: `${BASE_URL}/`,
  },
  // Berkeley Heights
  {
    route: "/locations/nj/berkeley-heights/",
    title: "ABA Therapy Near Me | Berkeley Heights, NJ | Bierman Centers",
    description:
      "BCBA-supervised ABA therapy near Berkeley Heights, NJ. Bierman Autism Centers serves Union County families with evidence-based autism care. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-berkeley-heights-nj-og_56cfcce2.jpg`,
    canonical: `${BASE_URL}/locations/nj/berkeley-heights/`,
  },
  // Cranford
  {
    route: "/locations/nj/cranford/",
    title: "ABA Therapy Near Me | Cranford, NJ | Bierman Autism Centers",
    description:
      "ABA therapy, speech-language therapy & occupational therapy near Cranford, NJ. Bierman Autism Centers serves Union County families. Evidence-based care.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-cranford-nj-og_b1945716.jpg`,
    canonical: `${BASE_URL}/locations/nj/cranford/`,
  },
  // Eatontown
  {
    route: "/locations/nj/eatontown/",
    title: "ABA Therapy Near Me | Eatontown, NJ | Bierman Autism Centers",
    description:
      "BCBA-supervised ABA therapy near Eatontown, NJ. Bierman Autism Centers serves Monmouth County families with evidence-based autism care. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-eatontown-nj-og_3172aa18.jpg`,
    canonical: `${BASE_URL}/locations/nj/eatontown/`,
  },
  // Moorestown
  {
    route: "/locations/nj/moorestown/",
    title: "ABA Therapy Near Me | Moorestown, NJ | Bierman Autism Centers",
    description:
      "ABA therapy, speech, OT & diagnostics coming to Moorestown, NJ — Fall 2026. Pre-register now for Burlington County families. Bierman Autism Centers.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-moorestown-nj-og_66014183.jpg`,
    canonical: `${BASE_URL}/locations/nj/moorestown/`,
  },
  // Parsippany
  {
    route: "/locations/nj/parsippany/",
    title: "ABA Therapy Near Me | Parsippany, NJ | Bierman Autism Centers",
    description:
      "ABA therapy, speech-language therapy, occupational therapy, and autism diagnostic evaluations in Parsippany, NJ. Explore evidence-based autism services from Bierman Autism Centers.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-parsippany-nj-og_8c376c7b.jpg`,
    canonical: `${BASE_URL}/locations/nj/parsippany/`,
  },
  // Piscataway
  {
    route: "/locations/nj/piscataway/",
    title: "ABA Therapy Near Me | Piscataway, NJ | Bierman Autism Centers",
    description:
      "BCBA-supervised ABA therapy near Piscataway, NJ. Bierman Autism Centers serves Middlesex County children with evidence-based autism care. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-piscataway-nj-og_ee8c6f4f.jpg`,
    canonical: `${BASE_URL}/locations/nj/piscataway/`,
  },
  // Princeton
  {
    route: "/locations/nj/princeton/",
    title: "ABA Therapy Near Me | Princeton, NJ | Bierman Autism Centers",
    description:
      "BCBA-supervised ABA therapy near Princeton, NJ. Bierman Autism Centers serves Mercer County children with evidence-based autism care. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-princeton-nj-og_eceea8ab.jpg`,
    canonical: `${BASE_URL}/locations/nj/princeton/`,
  },
  // Ramsey
  {
    route: "/locations/nj/ramsey/",
    title: "ABA Therapy Near Me | Ramsey, NJ | Bierman Autism Centers",
    description:
      "ABA therapy, speech therapy, occupational therapy & autism diagnostics near Ramsey, NJ. Bierman Autism Centers serves Bergen County families. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-ramsey-nj-og_731760d9.jpg`,
    canonical: `${BASE_URL}/locations/nj/ramsey/`,
  },
  // Roseland
  {
    route: "/locations/nj/roseland/",
    title: "ABA Therapy Near Me | Roseland, NJ | Bierman Autism Centers",
    description:
      "ABA therapy, speech, OT & diagnostics coming to Roseland, NJ — Fall 2026. Pre-register now for Essex County families. Bierman Autism Centers.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-roseland-nj-og_c920a51d.jpg`,
    canonical: `${BASE_URL}/locations/nj/roseland/`,
  },
  // West Orange
  {
    route: "/locations/nj/west-orange/",
    title: "ABA Therapy Near Me | West Orange, NJ | Bierman Autism Centers",
    description:
      "BCBA-supervised ABA therapy near West Orange, NJ. Bierman Autism Centers serves Essex County families with evidence-based autism care. Insurance accepted.",
    ogImage: `${BASE_URL}/manus-storage/bierman-autism-centers-aba-therapy-west-orange-nj-og_93fb6c98.jpg`,
    canonical: `${BASE_URL}/locations/nj/west-orange/`,
  },
];

// ── Read the base index.html from dist/public ──────────────────────────────
const baseHtmlPath = path.join(DIST, "index.html");
if (!fs.existsSync(baseHtmlPath)) {
  console.error(`ERROR: ${baseHtmlPath} not found. Run vite build first.`);
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, "utf-8");

// ── Helper: inject per-route meta tags into the base HTML ──────────────────
function buildRouteHtml(route) {
  let html = baseHtml;

  // 1. Replace <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${escapeHtml(route.title)}</title>`
  );

  // 2. Replace meta description
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${escapeHtml(route.description)}" />`
  );

  // 3. Replace canonical href
  html = html.replace(
    /<link\s+id="link-canonical"\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
    `<link id="link-canonical" rel="canonical" href="${route.canonical}" />`
  );

  // 4. Replace og:title
  html = html.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${escapeHtml(route.title)}" />`
  );

  // 5. Replace og:description
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${escapeHtml(route.description)}" />`
  );

  // 6. Replace og:url (both the id="og-url" version and any plain version)
  html = html.replace(
    /<meta\s+(?:id="og-url"\s+)?property="og:url"\s+content="[^"]*"\s*\/?>/,
    `<meta id="og-url" property="og:url" content="${route.canonical}" />`
  );

  // 7. Replace og:image (first occurrence — the main OG image)
  html = html.replace(
    /<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:image" content="${route.ogImage}" />`
  );

  // 8. Replace twitter:image
  html = html.replace(
    /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:image" content="${route.ogImage}" />`
  );

  // 9. Replace twitter:title
  html = html.replace(
    /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${escapeHtml(route.title)}" />`
  );

  // 10. Replace twitter:description
  html = html.replace(
    /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${escapeHtml(route.description)}" />`
  );

  // 11. Replace hreflang self-referencing URLs
  html = html.replace(
    /<link\s+rel="alternate"\s+hreflang="en-us"\s+href="[^"]*"\s*\/?>/,
    `<link rel="alternate" hreflang="en-us" href="${route.canonical}" />`
  );

  // 12. Remove the JS canonical override script (no longer needed — it's baked in)
  html = html.replace(
    /\s*<script>\s*\(function\(\)\s*\{[\s\S]*?var baseUrl[\s\S]*?\}\)\(\);\s*<\/script>/,
    ""
  );

  return html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// ── Write per-route index.html files ──────────────────────────────────────
let generated = 0;
let errors = 0;

for (const route of routes) {
  const routeDir = path.join(DIST, route.route === "/" ? "" : route.route);
  const outputPath = path.join(routeDir, "index.html");

  try {
    // Create directory if it doesn't exist
    fs.mkdirSync(routeDir, { recursive: true });

    const html = buildRouteHtml(route);
    fs.writeFileSync(outputPath, html, "utf-8");

    console.log(`✓ ${route.route} → ${path.relative(ROOT, outputPath)}`);
    generated++;
  } catch (err) {
    console.error(`✗ ${route.route} — ERROR: ${err.message}`);
    errors++;
  }
}

console.log(`\nPre-render complete: ${generated} routes generated, ${errors} errors.`);
if (errors > 0) {
  process.exit(1);
}
