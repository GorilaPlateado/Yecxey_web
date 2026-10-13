/**
 * Google Business Profile — Reviews configuration
 * ------------------------------------------------
 * This site displays customer reviews sourced EXCLUSIVELY from the business's
 * verified Google Business Profile. No hardcoded / sample / fictional reviews
 * are used anywhere.
 *
 * This file is the single, easy-to-find place to wire up the real links once
 * the client provides their verified Google Business Profile.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  TODO — CLIENT HANDOFF                                                    │
 * │  1. Replace GOOGLE_BUSINESS_PROFILE_URL with the client's verified       │
 * │     Google Business Profile URL (where reviews are shown).               │
 * │  2. Replace GOOGLE_REVIEW_LINK with the client's direct                  │
 * │     "Write a review" URL (https://g.page/r/.../review or similar).       │
 * │                                                                          │
 * │  Until then both stay as "#" — the buttons render but do not navigate,   │
 * │  and the pages automatically show a "coming soon" placeholder state.     │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

// TODO: Replace with client's Google Business Profile URL (e.g. "https://www.google.com/maps/place/...")
export const GOOGLE_BUSINESS_PROFILE_URL = "#";

// TODO: Replace with client's Google Review URL (e.g. "https://g.page/r/XXXXXXXX/review")
export const GOOGLE_REVIEW_LINK = "#";

/** True only when a real http(s) profile URL has been set. */
export function isProfileConfigured(): boolean {
  return /^https?:\/\//i.test(GOOGLE_BUSINESS_PROFILE_URL);
}

/** True only when a real http(s) review URL has been set. */
export function isReviewLinkConfigured(): boolean {
  return /^https?:\/\//i.test(GOOGLE_REVIEW_LINK);
}
