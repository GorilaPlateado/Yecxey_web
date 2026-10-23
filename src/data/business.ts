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
    import.meta.env.PUBLIC_GOOGLE_BUSINESS_PROFILE_URL ||
    "https://g.page/r/Cc0wgKzomfuJEBM",
  /** Leave empty until confirmed; will hide WhatsApp button */
  whatsappNumber: "",
  /** Leave empty until confirmed; will hide SMS button */
  smsNumber: "",

  // ── Hours ────────────────────────────────────────────────
  // No fixed-hours / 24/7 promise (client revision 2026-10). Availability
  // depends on the schedule and the conditions of each request.
  hours: {
    monday:    "By request",
    tuesday:   "By request",
    wednesday: "By request",
    thursday:  "By request",
    friday:    "By request",
    saturday:  "By request",
    sunday:    "By request",
  },
  available24h: false,

  // ── Social ───────────────────────────────────────────────
  social: {
    // Verified live pages (2026-10-11). Facebook uses the numeric /p/ URL because
    // the vanity "GYRoadsideSolutionsLLC" is not claimed and does not resolve.
    facebook:  "https://www.facebook.com/p/GY-Roadside-Solutions-LLC-61590469525945/",
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
    en: "GY Roadside Solutions LLC provides mobile roadside assistance for commercial trucks and other vehicles in the Dallas-Fort Worth, Texas area, right where you are located.",
    es: "GY Roadside Solutions LLC ofrece asistencia móvil en carretera para camiones comerciales y otros vehículos en el área de Dallas-Fort Worth, Texas, directamente donde se encuentren ubicados.",
  },
} as const;

export default business;
export type BusinessConfig = typeof business;
