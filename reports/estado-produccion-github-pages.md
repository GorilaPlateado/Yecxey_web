# Reporte — Estado general de producción para GitHub Pages

**Fecha:** 16 de octubre de 2026
**Proyecto:** GY Roadside Solutions LLC (Astro 4.16 + Tailwind, sitio estático bilingüe)
**Objetivo:** dejar el código de producción completo y de calidad superior para desplegar en **GitHub Pages** con dominio `gyroadsidesolutions.com`.

---

## 1. Veredicto general

**El sitio está muy cerca de producción.** Todo el core funcional y de SEO está en verde y verificado con ejecuciones reales; lo que falta es **infraestructura de despliegue para GitHub Pages** (workflows, dominio, .nojekyll) y **3-4 arreglos de calidad menores**. No hay deudas técnicas grandes ni código roto.

---

## 2. Verificado en verde (con evidencia)

| Área | Verificación | Resultado |
|---|---|---|
| Build | `npm run build` | ✅ exit 0 — 28 páginas, `dist/` 4.9 MB |
| Tipos | `npx tsc --noEmit` | ✅ exit 0 |
| Enlaces internos | `node scripts/check-links.mjs` | ✅ 28 páginas, **973 enlaces, 0 rotos** |
| Sitemap | diff `public/sitemap-0.xml` vs rutas de `dist/` | ✅ 26/26 URLs existen; solo `/` (redirect) excluido — correcto |
| Assets case-sensitivity | 24 referencias (`_astro|images|icons`) vs disco | ✅ **0 mismatch de mayúsculas** (crítico: Windows no distingue, GitHub Pages sí) |
| Redirect raíz `/` | `src/pages/index.astro` | ✅ meta-refresh + JS — funciona en hosts estáticos, sin server redirects |
| Página 404 | `dist/404.html` | ✅ generado (GH Pages lo sirve en cualquier ruta) |
| SEO técnico | canonical, hreflang EN/ES + x-default, JSON-LD LocalBusiness + `sameAs` (incl. GBP de Google) | ✅ |
| robots.txt | apunta al sitemap con dominio correcto | ✅ |
| Formulario | Web3Forms con access key **real**, prueba E2E documentada en `reports/prueba-envio-real.md` | ✅ 100% compatible con hosting estático |
| Analytics | deshabilitado por diseño (env-driven, sin requests a terceros) | ✅ — pendiente solo de los IDs del cliente |
| Secrets | sin credenciales en código (la access key de Web3Forms es pública por diseño); `.env.example` documentado | ✅ |
| Dominio en config | `site.ts` + `astro.config.mjs` = `https://gyroadsidesolutions.com` | ✅ coherente con sitemap/robots/canonical |
| Lockfile | `package-lock.json` presente | ✅ permite `npm ci` en CI |
| Imágenes | WebP, `loading="lazy"`, hero `fetchpriority`; 3.8 MB totales | ✅ |

---

## 3. BLOQUEADORES para GitHub Pages (hay que hacerlos)

### 3.1 No existe pipeline de despliegue — falta `.github/workflows/deploy.yml`
GitHub Pages moderno se despliega con **Actions** (no por rama). Falta el workflow con:
`actions/checkout` → `actions/setup-node` (Node 20) → `npm ci` → `npm run build` → **check-links como gate** → `actions/upload-pages-artifact` (`dist/`) → `actions/deploy-pages`.
Requiere `permissions: pages: write, id-token: write` y el *environment* `github-pages`.
En el repo hay que poner **Settings → Pages → Source: GitHub Actions**.

### 3.2 Dominio personalizado — falta `public/CNAME` + DNS
El sitio está diseñado con **rutas absolutas** (`/en/...`, `/es/...`, `hreflang`, sitemap…), lo cual solo funciona en la **raíz de un dominio**:
- **Recomendado:** desplegar en `gyroadsidesolutions.com` → crear `public/CNAME` con el dominio, y en el DNS del registrador:
  - Apex `@` → A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - `www` → CNAME: `<usuario>.github.io`
  - Tras verificar: **Enforce HTTPS** en Pages.
- **No recomendado (sin dominio):** desplegar en `usuario.github.io/Yecxey_web/` exige `base: "/Yecxey_web/"` y **rompe las ~973 rutas absolutas** (links, imágenes, hreflang, sitemap) → refactor mayor.

### 3.3 Falta `public/.nojekyll`
Evita que GitHub procese los archivos con Jekyll (protege `_astro/`). Defensa estándar, coste cero: agregar el archivo vacío.

### 3.4 El repo debe ser **público** (plan gratuito)
GitHub Pages gratis solo publica desde repositorios públicos (o con GitHub Pro/Team en privado). **No se pudo verificar** desde aquí (`gh` CLI no disponible) — revisarlo en GitHub antes de empezar.

### 3.5 Cambios sin commitear
4 archivos modificados pendientes (`es/index.astro`, `en/index.astro`, `CoverageStrip.astro`, `ServiceCard.astro` — arreglo del botón CTA, scroll horizontal y borde de cards). Commitear y pushear **antes** de configurar el deploy.

---

## 4. Calidad de producción — debería corregirse

| # | Hallazgo | Impacto | Acción |
|---|---|---|---|
| 1 | `BaseLayout` referencia `/icons/apple-touch-icon.png` que **no existe** (`public/icons/` solo tiene `services/`) | 404 en iOS al agregar a inicio | Generar PNG 180×180 desde el logo y colocarlo en `public/icons/` |
| 2 | `npx astro check` **cuelga**: `@astrojs/check` no es dependencia, aunque AGENTS.md lo documenta | El typecheck documentado no funciona | `npm i -D @astrojs/check` + script `"check": "astro check"` |
| 3 | `scripts/check-links.mjs` existe pero **no está conectado** a `package.json` | El gate de enlaces no corre en build/CI | `"postbuild": "node scripts/check-links.mjs"` y correrlo en el workflow |
| 4 | Sitemap es un **XML manual** (`public/sitemap-0.xml`) | Hoy está perfecto (26/26), pero se desincroniza al añadir páginas | Opción A: guard en CI (diff sitemap vs rutas); Opción B: usar `@astrojs/sitemap` ya instalado |
| 5 | Dependencia muerta: `@astrojs/sitemap` en `dependencies` pero no usada | Ruido/peso en instalación | Quitarla o pasar a usarla (ver 4) |
| 6 | Config muerta: `site.form.netlifyName` no se usa en ningún componente | Confusión | Eliminar |
| 7 | Comentario obsoleto en `contact.ts` ("Replace YOUR_WEB3FORMS_ACCESS_KEY…") cuando la key ya está real | Confusión | Actualizar comentario |
| 8 | El dominio vive en **3 sitios**: `site.ts` (`url`), `astro.config.mjs` (`site`), `business.ts` (env `PUBLIC_SITE_URL` con fallback) | Cambio de dominio = tocar 3 lugares | Unificar (leer todo de una fuente) |
| 9 | `netlify.toml` define headers de seguridad (X-Frame-Options, etc.) que **GH Pages ignora** | Se pierden esos headers | Aceptar (GH Pages no permite headers custom) o poner Cloudflare delante; documentar |
| 10 | `netlify.toml` / `_redirects` / `vercel.json` | Inofensivos en GH Pages | Mantener solo si se quiere multi-host; documentar que GH Pages usa el redirect de `index.astro` |
| 11 | `public/images/about/gallery/` — 844 KB **sin referenciar** en ningún componente | Peso muerto en el repo | Eliminar o usar (los `about-N.webp` ya son los recortes en uso) |
| 12 | Sin linter (ESLint/Prettier) ni CI de calidad | Deuda para "calidad superior" | Opcional: añadir + correr en el workflow |
| 13 | QA pendiente del reporte anterior: la barra fija inferior puede tapar el botón del formulario en móvil ~540px | UX en móvil | `scroll-padding-bottom` en el formulario |

---

## 5. Plan de acción sugerido (orden)

1. **Commit + push** de los 4 cambios pendientes.
2. **Arreglos rápidos de archivo:** `apple-touch-icon.png`, `public/.nojekyll`, `public/CNAME`.
3. **`package.json`:** instalar `@astrojs/check`, scripts `check` y `postbuild` (check-links).
4. **Crear `.github/workflows/deploy.yml`** (build + check-links + deploy-pages, Node 20, `npm ci`).
5. **Repo público** + Settings → Pages → Source: **GitHub Actions**.
6. **DNS del dominio** (A/CNAME) + CNAME + Enforce HTTPS.
7. **Limpieza** (sección 4, items 5-8) — puede ir después del primer deploy.
8. **Verificación post-deploy:** home EN/ES, HTTPS, 404, formulario E2E en dominio real, enlaces de Google Review, Search Console (si el cliente da el ID), GA/GTM si se proveen.

---

## 6. Checks que no se pudieron correr

- `npx astro check` — depende de instalar `@astrojs/check` (hallazgo #2).
- Visibilidad del repo y config de Pages — requieren acceso a GitHub (`gh` no disponible).
- `npm run dev`/build sin `.env` — funciona (todos los `PUBLIC_*` tienen fallback en código), pero `PUBLIC_SITE_URL` afecta a `business.website` en build si se define.
