import en from "./en";
import es from "./es";
import { activeServices } from "@/data/services";

export type Lang = "en" | "es";
export type Translations = typeof en;

export const translations = { en, es } as const;

export function t(lang: Lang): Translations {
  return translations[lang] as unknown as Translations;
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang === "es") return "es";
  return "en";
}

/**
 * Static page slug mapping — the two locales use DIFFERENT slugs:
 *   /en/about-us/ ↔ /es/nosotros/, /en/contact-us/ ↔ /es/contacto/, etc.
 */
const PAGE_SLUG_EN_TO_ES: Record<string, string> = {
  "about-us": "nosotros",
  "contact-us": "contacto",
  "service-area": "area-de-servicio",
  "reviews": "resenas",
  "privacy-policy": "politica-de-privacidad",
  "terms-of-use": "terminos-de-uso",
  "accessibility": "accesibilidad",
  "services": "servicios",
};
const PAGE_SLUG_ES_TO_EN: Record<string, string> = Object.fromEntries(
  Object.entries(PAGE_SLUG_EN_TO_ES).map(([en, es]) => [es, en])
);

/** Service detail slugs also differ per language (tire-change ↔ cambio-de-neumaticos). */
const SERVICE_SLUG_EN_TO_ES: Record<string, string> = {};
const SERVICE_SLUG_ES_TO_EN: Record<string, string> = {};
for (const s of activeServices) {
  SERVICE_SLUG_EN_TO_ES[s.slug] = s.slugEs;
  SERVICE_SLUG_ES_TO_EN[s.slugEs] = s.slug;
}

/**
 * Returns the equivalent path in the other language, translating
 * page and service slugs. Never returns a nonexistent route: unknown
 * paths fall back to the target language's home (or services index).
 */
export function getAlternatePath(currentPath: string, currentLang: Lang): string {
  const targetLang: Lang = currentLang === "en" ? "es" : "en";
  const segments = currentPath.split("/").filter(Boolean);

  // Not under /en or /es → target home
  if (segments[0] !== "en" && segments[0] !== "es") {
    return `/${targetLang}/`;
  }

  const sourceLang = segments[0] as Lang;
  const rest = segments.slice(1);

  // Locale home → locale home
  if (rest.length === 0) return `/${targetLang}/`;

  const [head, ...tail] = rest;

  // ── Service index + detail (slug translated via services data) ──
  if (head === "services" || head === "servicios") {
    const indexPath = targetLang === "en" ? "/en/services/" : "/es/servicios/";
    if (tail.length === 0) return indexPath;

    const slugMap = sourceLang === "en" ? SERVICE_SLUG_EN_TO_ES : SERVICE_SLUG_ES_TO_EN;
    const mapped = slugMap[tail[0]];
    if (!mapped) return indexPath; // unknown service → services index, never 404

    return targetLang === "en"
      ? `/en/services/${mapped}/`
      : `/es/servicios/${mapped}/`;
  }

  // ── Static pages ──
  const mapped = (sourceLang === "en" ? PAGE_SLUG_EN_TO_ES : PAGE_SLUG_ES_TO_EN)[head];
  if (!mapped) return `/${targetLang}/`; // unknown page → home, never 404

  return `/${targetLang}/${mapped}/`;
}
