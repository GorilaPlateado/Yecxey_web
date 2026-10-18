/**
 * Google Business Profile — Reviews configuration
 * ------------------------------------------------
 * This site displays customer reviews sourced EXCLUSIVELY from the business's
 * verified Google Business Profile. No hardcoded / sample / fictional reviews
 * are used anywhere.
 *
 * Links provided by the client (2026-10-16) — both resolve to the SAME
 * verified place ID 0x856c95d652d66a25:0x89fb99e8ac8030cd (GY Roadside
 * Solutions LLC), confirmed by following both URLs:
 *   - https://maps.app.goo.gl/S5onnHeCMHEaWCXi8?g_st=ic  (Maps short link)
 *   - https://g.page/r/Cc0wgKzomfuJEBM/review            (direct review link)
 *
 * The g.page/r/... short URLs are Google's official, stable Business Profile
 * links, so they are used below (the maps.app.goo.gl link is a user-generated
 * short link that can be regenerated).
 */

// Business Profile on Google Maps ("Read Our Google Reviews" / "Ver reseñas").
export const GOOGLE_BUSINESS_PROFILE_URL = "https://g.page/r/Cc0wgKzomfuJEBM";

// Direct "Write a review" entry point ("Leave a Review" / "Deja una Reseña").
export const GOOGLE_REVIEW_LINK = "https://g.page/r/Cc0wgKzomfuJEBM/review";

/** True only when a real http(s) profile URL has been set. */
export function isProfileConfigured(): boolean {
  return /^https?:\/\//i.test(GOOGLE_BUSINESS_PROFILE_URL);
}

/** True only when a real http(s) review URL has been set. */
export function isReviewLinkConfigured(): boolean {
  return /^https?:\/\//i.test(GOOGLE_REVIEW_LINK);
}
