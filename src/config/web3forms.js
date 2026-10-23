/**
 * Web3Forms Access Key — SINGLE SOURCE OF TRUTH.
 *
 * Why this file exists:
 * The access key used to live ONLY in the build-time environment variable
 * (PUBLIC_WEB3FORMS_ACCESS_KEY). Whenever that variable was missing (local
 * dev, a fresh deploy, or after code edits) the contact form would silently
 * become "unconfigured". This file guarantees the form always has a valid key,
 * while still allowing an environment override.
 *
 * Resolution order (first non-empty wins):
 *   1. import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY  (build-time override)
 *   2. WEB3FORMS_ACCESS_KEY below                    (committed fallback)
 *
 * IMPORTANT — keep this file safe:
 * • Web3Forms keys are sent from the browser, so they are ALWAYS public at
 *   runtime no matter where they are stored. The key being committed here does
 *   NOT increase exposure.
 * • Protect the key in the Web3Forms dashboard, NOT by hiding it:
 *     - enable "Captcha Protection"
 *     - enable "Domain Restriction" → allowed domains:
 *         gyroadsidesolutions.com, www.gyroadsidesolutions.com,
 *         localhost (for testing)
 * • When you get a NEW key, change it in ONE place only: the constant below
 *   (or set the env var). Do not edit ContactForm.astro.
 */

// The real Web3Forms Access Key for GY Roadside Solutions LLC.
// Committed on purpose so the form never loses its configuration.
const WEB3FORMS_ACCESS_KEY = "22fb9b70-8402-4251-a0ac-c2ac7f88d8c1";

// Endpoint is constant across all Web3Forms projects.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

/**
 * Returns the effective access key: env override if present, otherwise the
 * committed fallback. Whitespace is trimmed so stray spaces can't break it.
 */
function resolveAccessKey() {
  const fromEnv = import.meta.env?.PUBLIC_WEB3FORMS_ACCESS_KEY;
  const envValue = typeof fromEnv === "string" ? fromEnv.trim() : "";
  return envValue || WEB3FORMS_ACCESS_KEY.trim();
}

export const web3FormsConfig = {
  accessKey: resolveAccessKey(),
  endpoint: WEB3FORMS_ENDPOINT,
};

export default web3FormsConfig;
