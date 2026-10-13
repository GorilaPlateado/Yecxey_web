/**
 * Reviews data
 * ------------
 * All sample / fictional / hardcoded reviews have been REMOVED. This site
 * shows customer feedback exclusively from the verified Google Business
 * Profile — see `src/config/reviews.ts` for the profile & review links.
 *
 * The `Review` interface and the (empty) `reviews` array below are kept only
 * as the data shape for a possible future integration that renders real,
 * fetched Google reviews as cards. No fake data is stored here.
 */

export interface Review {
  name: string;
  location: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: { en: string; es: string };
  source: "Google" | "Facebook" | "Yelp" | "Direct";
  url?: string;
  service?: string;
}

/** Intentionally empty — reviews come from Google Business Profile, not code. */
export const reviews: Review[] = [];
