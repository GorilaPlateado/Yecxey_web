/**
 * service-icons.mjs — Download permissive (MIT) Tabler icons via Iconify API and
 * generate high-quality, web-optimized WebP service card images (16:9) plus
 * standalone SVG icons for each service.
 *
 * Icons licensed under MIT (Tabler Icons) — safe for commercial use.
 *
 * Output:
 *   public/icons/services/<name>.svg      (crisp vector icon, brand-colored)
 *   public/images/services/<name>.webp    (1200×675 card image, gradient bg)
 *
 * Usage: node scripts/service-icons.mjs
 */

import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const ICON_DIR = path.join(ROOT, "public", "icons", "services");
const IMG_DIR = path.join(ROOT, "public", "images", "services");

// Brand palette (match tailwind.config.mjs)
const NAVY = "#1B2A5B";
const NAVY_LIGHT = "#243a7d";
const YELLOW = "#F5B301";

/** service slug -> Tabler icon name (verified to exist on api.iconify.design) */
const ICONS = {
  "tire-change": "wheel",
  "jump-start": "bolt",
  "fuel-delivery": "gas-station",
  "brake-service": "car-garage",
  "reefer-maintenance": "snowflake",
  "oil-change-service": "droplet",
  "placeholder": "tool",
};

/** Fetch a Tabler icon SVG, recolored to the brand yellow. */
async function fetchIcon(name) {
  const url = `https://api.iconify.design/tabler/${name}.svg?color=${encodeURIComponent(YELLOW)}&width=512&height=512`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Iconify ${res.status} for ${name}`);
  return await res.text();
}

/** Build an SVG card (1200×675): navy gradient + subtle grid + centered icon. */
function cardSvg(iconInner) {
  // Tabler icons use stroke="currentColor"; strip color attr, embed as-is.
  const icon = iconInner.replace(/currentColor/g, YELLOW);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${NAVY_LIGHT}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.45" r="0.6">
      <stop offset="0" stop-color="${YELLOW}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${YELLOW}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <rect width="1200" height="675" fill="url(#grid)"/>
  <circle cx="600" cy="315" r="300" fill="url(#glow)"/>
  <g transform="translate(600 315) scale(1.12) translate(-256 -256)" opacity="0.95">
    ${icon}
  </g>
  <rect x="0" y="651" width="1200" height="6" fill="${YELLOW}" opacity="0.85"/>
</svg>`;
}

/** Illustration for the About page (placeholder until client photo arrives). */
async function aboutIllustration() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1B2A5B"/>
      <stop offset="0.65" stop-color="#2C4A9E"/>
      <stop offset="1" stop-color="#F5B301"/>
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#232D4A"/>
      <stop offset="1" stop-color="#141B33"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#sky)"/>
  <circle cx="930" cy="430" r="90" fill="#F5B301" opacity="0.9"/>
  <circle cx="930" cy="430" r="140" fill="#F5B301" opacity="0.25"/>
  <!-- distant hills -->
  <path d="M0 470 L200 400 L420 460 L640 390 L900 470 L1200 420 L1200 500 L0 500 Z" fill="#16224A"/>
  <!-- road -->
  <rect y="500" width="1200" height="300" fill="url(#road)"/>
  <rect y="496" width="1200" height="8" fill="#F5B301" opacity="0.65"/>
  <g fill="#F5B301" opacity="0.8">
    <rect x="60" y="640" width="120" height="14" rx="7"/>
    <rect x="280" y="640" width="120" height="14" rx="7"/>
    <rect x="500" y="640" width="120" height="14" rx="7"/>
    <rect x="720" y="640" width="120" height="14" rx="7"/>
    <rect x="940" y="640" width="120" height="14" rx="7"/>
  </g>
  <!-- service truck silhouette -->
  <g transform="translate(230 340)">
    <!-- cab -->
    <path d="M40 120 L40 40 L110 40 L150 90 L150 120 Z" fill="#0F1730"/>
    <rect x="52" y="52" width="46" height="34" rx="4" fill="#F5B301" opacity="0.85"/>
    <!-- box body -->
    <rect x="150" y="20" width="260" height="100" rx="6" fill="#0F1730"/>
    <rect x="150" y="20" width="260" height="10" fill="#F5B301"/>
    <!-- light bar -->
    <rect x="120" y="8" width="90" height="12" rx="6" fill="#F5B301"/>
    <!-- wheels -->
    <circle cx="90" cy="130" r="30" fill="#0B1122" stroke="#2C4A9E" stroke-width="8"/>
    <circle cx="330" cy="130" r="30" fill="#0B1122" stroke="#2C4A9E" stroke-width="8"/>
    <circle cx="390" cy="130" r="30" fill="#0B1122" stroke="#2C4A9E" stroke-width="8"/>
  </g>
  <!-- warning triangle -->
  <g transform="translate(840 520)">
    <path d="M60 0 L120 100 L0 100 Z" fill="#F5B301" stroke="#0F1730" stroke-width="8" stroke-linejoin="round"/>
    <rect x="53" y="34" width="14" height="34" rx="4" fill="#0F1730"/>
    <circle cx="60" cy="82" r="7" fill="#0F1730"/>
  </g>
</svg>`;
  await sharp(Buffer.from(svg))
    .resize(1200, 800)
    .webp({ quality: 82, effort: 6 })
    .toFile(path.join(IMG_DIR_PARENT, "about", "about-us.webp"));
  console.log("✓ about-us illustration");
}

const IMG_DIR_PARENT = path.join(ROOT, "public", "images");

async function main() {
  await mkdir(ICON_DIR, { recursive: true });
  await mkdir(IMG_DIR, { recursive: true });

  // Client photos own the service cards (see client-photos.mjs). A "<slug>-wide.webp"
  // sibling marks a client-owned card: only its SVG icon is refreshed, never the WebP.
  const exists = (p) => access(p).then(() => true, () => false);

  for (const [slug, iconName] of Object.entries(ICONS)) {
    const svg = await fetchIcon(iconName);

    // Save standalone brand-colored SVG icon
    const iconSvg = svg.replace(/currentColor/g, YELLOW);
    await writeFile(path.join(ICON_DIR, `${slug}.svg`), iconSvg, "utf8");

    const clientOwned = await exists(path.join(IMG_DIR, `${slug}-wide.webp`));
    if (clientOwned) {
      console.log(`↷ ${slug}  (icon refreshed, card owned by client-photos.mjs)`);
      continue;
    }

    // Render 16:9 card WebP (quality 82, sharp default compression)
    const card = cardSvg(svg);
    await sharp(Buffer.from(card))
      .resize(1200, 675)
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(IMG_DIR, `${slug}.webp`));

    console.log(`✓ ${slug}  (icon: ${iconName})`);
  }

  await aboutIllustration();

  console.log("\nDone. Icons → public/icons/services, cards → public/images/services");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
