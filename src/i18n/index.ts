import en from "./en";
import es from "./es";

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

export function getAlternatePath(currentPath: string, currentLang: Lang): string {
  const targetLang: Lang = currentLang === "en" ? "es" : "en";
  if (currentLang === "en") {
    // /en/... → /es/...
    return currentPath.replace(/^\/en/, `/${targetLang}`);
  } else {
    // /es/... → /en/...
    return currentPath.replace(/^\/es/, `/${targetLang}`);
  }
}
