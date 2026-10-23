/**
 * Web3Forms configuration.
 *
 * The Access Key is defined in ONE place only: src/config/web3forms.js
 * (the single source of truth). That file reads the build-time environment
 * variable PUBLIC_WEB3FORMS_ACCESS_KEY when present and otherwise falls back
 * to the committed key, so the contact form can never become unconfigured.
 *
 * If you prefer to keep the key out of git entirely, set the env var per host:
 * - Netlify:  Site configuration → Environment variables → add
 *             PUBLIC_WEB3FORMS_ACCESS_KEY = <your key>  (then redeploy)
 * - Local:    copy .env.example to .env and set the value (.env is gitignored)
 *
 * See web3forms.js for security guidance (Captcha + Domain Restriction).
 */
import { web3FormsConfig } from "./web3forms.js";

// Single source of truth for the Web3Forms access key + endpoint.
const accessKey = web3FormsConfig.accessKey;

export const contactConfig = {
  accessKey,
  destinationEmail:
    (import.meta.env.PUBLIC_EMAIL as string | undefined) ?? "service@gyroadsidesolutions.com",
  web3FormsEndpoint: web3FormsConfig.endpoint,
  formName: "GY Roadside Solutions — Contact Form",
  redirectUrl: "", // optional: URL to redirect after successful submission
  /** True only when a real key was provided at build time. */
  get isConfigured(): boolean {
    return /^[0-9a-f-]{20,}$/i.test(accessKey);
  },
};
