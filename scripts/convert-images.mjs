/**
 * convert-images.mjs — Converts source images from the client folder to
 * optimized WebP files inside public/images/.
 *
 * Usage:
 *   node scripts/convert-images.mjs ["C:/Users/Admin/Desktop/imagenes yecsey web"]
 *
 * Source files expected in the source folder:
 *   - "Logo.jpg"        → public/images/logo.webp
 *   - "imagen Hero.jpg" → public/images/hero/hero-truck.webp
 *                         → public/images/og-default.webp (1200×630 social card)
 *
 * Also rasterizes the branded SVG placeholders (service photos, about photo)
 * into real .webp files so browsers can decode them (MIME-safe).
 * Delete a placeholder file reference once the client delivers the real photo.
 */
import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = process.argv[2] || "C:/Users/Admin/Desktop/imagenes yecsey web";
const PUBLIC = path.resolve("public/images");

async function exists(p) {
  try { await readFile(p); return true; } catch { return false; }
}

// ── 1. Logo ────────────────────────────────────────────────
const logoSrc = path.join(SRC, "Logo.jpg");
if (await exists(logoSrc)) {
  await sharp(logoSrc)
    .resize({ width: 640, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(PUBLIC, "logo.webp.tmp"));
  await rename(path.join(PUBLIC, "logo.webp.tmp"), path.join(PUBLIC, "logo.webp"));
  console.log("✓ logo.webp");
} else {
  console.log("✗ Logo.jpg not found — keeping current logo");
}

// ── 2. Hero + OG image ─────────────────────────────────────
const heroSrc = path.join(SRC, "imagen Hero.jpg");
if (await exists(heroSrc)) {
  await sharp(heroSrc)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(path.join(PUBLIC, "hero/hero-truck.webp.tmp"));
  await rename(path.join(PUBLIC, "hero/hero-truck.webp.tmp"), path.join(PUBLIC, "hero/hero-truck.webp"));
  console.log("✓ hero/hero-truck.webp");

  await sharp(heroSrc)
    .resize(1200, 630, { fit: "cover", position: "attention" })
    .webp({ quality: 85 })
    .toFile(path.join(PUBLIC, "og-default.webp.tmp"));
  await rename(path.join(PUBLIC, "og-default.webp.tmp"), path.join(PUBLIC, "og-default.webp"));
  console.log("✓ og-default.webp");
} else {
  console.log("✗ imagen Hero.jpg not found — keeping current hero");
}

// ── 3. Rasterize branded SVG placeholders → real WebP ─────
const placeholders = [
  ...["tire-change", "jump-start", "fuel-delivery", "brake-service", "reefer-maintenance", "oil-change-service"]
    .map((s) => `services/${s}.webp`),
  "services/placeholder.webp",
  "about/about-us.webp",
];

for (const rel of placeholders) {
  const file = path.join(PUBLIC, rel);
  let svg = "";
  try {
    svg = await readFile(file, "utf8");
  } catch {
    console.log(`– ${rel}: missing — will generate placeholder`);
  }
  if (svg && !svg.trimStart().startsWith("<svg")) {
    console.log(`– ${rel}: already a binary image, skipped`);
    continue;
  }
  // Empty or missing file → generate a branded placeholder so the page never
  // renders a broken image. Marked clearly for replacement by the client.
  if (!svg.trim()) {
    const isAbout = rel.startsWith("about/");
    const w = isAbout ? 800 : 480;
    const h = isAbout ? 533 : 270;
    const label = isAbout ? "Company photo" : "Photo pending";
    svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="#0D1B2E"/>
  <rect x="1" y="1" width="${w - 2}" height="${h - 2}" fill="none" stroke="#F5C518" stroke-width="3" stroke-dasharray="10,5"/>
  <text x="${w / 2}" y="${h / 2 - 8}" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="bold" fill="white">${label}</text>
  <text x="${w / 2}" y="${h / 2 + 20}" text-anchor="middle" font-family="Arial,sans-serif" font-size="12" fill="rgba(255,255,255,0.6)">Replace with client photo</text>
</svg>`;
    await writeFile(file, svg);
    console.log(`✓ ${rel}: placeholder generated`);
  }
  // Infer dimensions from the SVG attributes for the about photo (landscape 3:2)
  const wMatch = svg.match(/width="(\d+)"/);
  const hMatch = svg.match(/height="(\d+)"/);
  const width = Number(wMatch?.[1] || 480);
  const height = Number(hMatch?.[1] || 270);
  await sharp(Buffer.from(svg), { density: 96 })
    .resize(width, height)
    .webp({ quality: 85 })
    .toFile(file + ".tmp");
  await rename(file + ".tmp", file);
  console.log(`✓ ${rel} (SVG → WebP)`);
}

async function rename(from, to) {
  const { rename } = await import("node:fs/promises");
  await rename(from, to);
}
