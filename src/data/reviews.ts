/**
 * Customer Reviews.
 * Do NOT invent reviews. Set confirmed: true only for verified real reviews.
 * If no reviews exist yet, leave this array empty — the UI handles the empty state.
 */

export interface Review {
  id: string;
  name: string;
  location: string;
  date: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: { en: string; es: string };
  source: "Google" | "Facebook" | "Yelp" | "Direct";
  url: string;
  confirmed: boolean;
}

const reviews: Review[] = [
  // ── Add real customer reviews here once provided by the client ──
  // Example structure (do NOT publish until confirmed):
  // {
  //   id: "review-001",
  //   name: "[CUSTOMER_NAME]",
  //   location: "[CITY, STATE]",
  //   date: "[DATE]",
  //   rating: 5,
  //   text: {
  //     en: "[REVIEW_TEXT_EN]",
  //     es: "[REVIEW_TEXT_ES]",
  //   },
  //   source: "Google",
  //   url: "[REVIEW_URL]",
  //   confirmed: false,
  // },
];

export default reviews;

/** Only confirmed reviews are displayed publicly */
export const confirmedReviews = reviews.filter((r) => r.confirmed);

/** Average rating — only calculated from confirmed reviews */
export function getAverageRating(): number | null {
  const confirmed = confirmedReviews;
  if (confirmed.length === 0) return null;
  const sum = confirmed.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / confirmed.length) * 10) / 10;
}
