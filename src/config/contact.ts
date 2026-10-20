/**
 * Web3Forms configuration.
 *
 * SECURITY: the Access Key is NOT hardcoded here. It is injected at build time
 * from the environment variable PUBLIC_WEB3FORMS_ACCESS_KEY so the real key
 * never lives in the git repository.
 *
 * How to set the key (per host):
 * - Netlify:  Site configuration → Environment variables → add
 *             PUBLIC_WEB3FORMS_ACCESS_KEY = <your key>  (then redeploy)
 * - Local:    copy .env.example to .env and set the value (.env is gitignored)
 *
 * IMPORTANT: Web3Forms keys are sent from the browser, so they are always
 * public at runtime no matter where they are stored. Protect a key by opening
 * the Web3Forms dashboard → your form → enabling:
 *   • "Captcha Protection"
 *   • "Domain Restriction" / allowed domains → gyroadsidesolutions.com
 *   • (optional) an auto-responder / email confirmation
 */

// Vite replaces `import.meta.env.PUBLIC_*` with the build-time environment value.
// Trim to ensure no leading/trailing whitespace breaks the isConfigured regex
const accessKey = (import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim() ?? "";

export const contactConfig = {
  accessKey,
  destinationEmail:
    (import.meta.env.PUBLIC_EMAIL as string | undefined) ?? "service@gyroadsidesolutions.com",
  web3FormsEndpoint: "https://api.web3forms.com/submit",
  formName: "GY Roadside Solutions — Contact Form",
  redirectUrl: "", // optional: URL to redirect after successful submission
  /** True only when a real key was provided at build time. */
  get isConfigured(): boolean {
    return /^[0-9a-f-]{20,}$/i.test(accessKey);
  },
};
