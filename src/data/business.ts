/**
 * GY Roadside Solutions LLC — Central Business Configuration
 *
 * Edit this file to update all contact info, hours, and links site-wide.
 * Placeholders are marked [CONFIRM WITH CLIENT].
 */

const business = {
  name: "GY Roadside Solutions LLC",
  legalName: "GY Roadside Solutions LLC",

  // ── Contact ─────────────────────────────────────────────
  /** E.164 format: +1XXXXXXXXXX — used in tel: links */
  phone: import.meta.env.PUBLIC_PHONE || "+12143027757",
  /** Human-readable display format */
  phoneDisplay: "(214) 302-7757",
  email: import.meta.env.PUBLIC_EMAIL || "service@gyroadsidesolutions.com",
  website: import.meta.env.PUBLIC_SITE_URL || "https://gyroadsidesolutions.com",

  // ── Location ─────────────────────────────────────────────
  address: "14500 Dallas Parkway",
  city: "Dallas",
  state: "Texas",
  stateCode: "TX",
  zipCode: "75254",
  country: "US",
  /** Coordinates from the client-provided Google Maps location link */
  latitude: 32.9460607,
  longitude: -96.8216914,

  // ── Maps & Profiles ──────────────────────────────────────
  /** Embeddable map URL (used as iframe src on Service Area pages) */
  googleMapsUrl:
    import.meta.env.PUBLIC_GOOGLE_MAPS_URL ||
    "https://www.google.com/maps?q=32.9460607,-96.8216914&output=embed",
  /** Canonical human-facing Google Maps link (directions / hasMap) */
  googleMapsLink:
    "https://www.google.com/maps/search/?api=1&query=32.9460607,-96.8216914",
  googleBusinessProfileUrl:
    import.meta.env.PUBLIC_GOOGLE_BUSINESS_PROFILE_URL || "",
  /** Leave empty until confirmed; will hide WhatsApp button */
  whatsappNumber: "",
  /** Leave empty until confirmed; will hide SMS button */
  smsNumber: "",

  // ── Hours ────────────────────────────────────────────────
  // 24/7 confirmed per business card
  hours: {
    monday:    "24 hours",
    tuesday:   "24 hours",
    wednesday: "24 hours",
    thursday:  "24 hours",
    friday:    "24 hours",
    saturday:  "24 hours",
    sunday:    "24 hours",
  },
  available24h: true,

  // ── Social ───────────────────────────────────────────────
  social: {
    facebook:  "https://www.facebook.com/GYRoadsideSolutionsLLC",
    instagram: "https://www.instagram.com/gyroadsidesolutions",
    tiktok:    "https://www.tiktok.com/@gy.roadside.solutions",
    linkedin:  "",
  },

  // ── SEO ──────────────────────────────────────────────────
  /** Main keyword used in default meta titles */
  primaryKeyword: {
    en: "Commercial Truck Roadside Assistance",
    es: "Asistencia en Carretera para Camiones Comerciales",
  },
  /** Short tagline */
  tagline: {
    en: "Reliable Roadside Assistance for Commercial Trucks",
    es: "Asistencia en Carretera Confiable para Camiones Comerciales",
  },
  description: {
    en: "GY Roadside Solutions LLC provides professional roadside assistance and mobile repair services for commercial trucks across the United States.",
    es: "GY Roadside Solutions LLC ofrece asistencia en carretera profesional y servicios de reparación móvil para camiones comerciales en todo Estados Unidos.",
  },
} as const;

export default business;
export type BusinessConfig = typeof business;
