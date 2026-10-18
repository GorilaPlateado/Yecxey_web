// Post-build link checker: verifies every internal href in dist/**/index.html
// resolves to a real file. Exits non-zero listing broken links (404s).
import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join, resolve } from "node:path";

const DIST = resolve("dist");
const pages = [];

(function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (name.endsWith(".html")) pages.push(p);
  }
})(DIST);

const broken = [];
let checked = 0;

function targetExists(urlPath) {
  // "/" → /index.html ; "/en/" → /en/index.html ; "/x/" → /x/index.html
  const clean = urlPath.split(/[?#]/)[0];
  const abs = join(DIST, clean);
  if (existsSync(abs) && statSync(abs).isDirectory()) return existsSync(join(abs, "index.html"));
  if (existsSync(abs)) return true;
  if (existsSync(abs + ".html")) return true;
  return false;
}

for (const page of pages) {
  const html = readFileSync(page, "utf8");
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (!href.startsWith("/") || href.startsWith("//")) continue; // external, anchors, tel:
    if (/^\/(images|icons|favicon|robots|sitemap|_)/.test(href)) continue; // static assets
    checked++;
    if (!targetExists(href)) {
      broken.push(`${page.replace(DIST, "dist")} → ${href}`);
    }
  }
}

console.log(`Pages scanned: ${pages.length}`);
console.log(`Internal links checked: ${checked}`);
if (broken.length) {
  console.log(`\nBROKEN (${broken.length}):`);
  for (const b of [...new Set(broken)]) console.log("  " + b);
  process.exit(1);
}
console.log("\nOK — every internal link resolves. No 404s.");
