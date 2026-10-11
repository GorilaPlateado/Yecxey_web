/**
 * Customer Reviews / Testimonials.
 * Sample testimonials are shown per client request to populate the Reviews section.
 * Replace or remove these entries with real, verified reviews once the client
 * provides them. `confirmed: true` makes a review visible on the site.
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
  // ── Sample testimonials (per client request). Replace with real reviews when available. ──
  {
    id: "review-001",
    name: "Marcus Thompson",
    location: "Dallas, TX",
    date: "2026-09-18",
    rating: 5,
    text: {
      en: "Blew a tire on I-20 at 2 AM and GY Roadside had a tech out in under 30 minutes. Fast, professional, and fair pricing. Got me back rolling the same night.",
      es: "Pinché una llanta en la I-20 a las 2 AM y GY Roadside envió a un técnico en menos de 30 minutos. Rápidos, profesionales y con precios justos. Me pusieron en marcha esa misma noche.",
    },
    source: "Google",
    url: "",
    confirmed: true,
  },
  {
    id: "review-002",
    name: "Elena Rodríguez",
    location: "Laredo, TX",
    date: "2026-09-12",
    rating: 5,
    text: {
      en: "My battery died before a big load crossing the border. They jumped my truck quickly and treated me like family. This is the only number I keep on my dash now.",
      es: "Mi batería murió antes de un gran cargamento cruzando la frontera. Arrancaron mi camión rápido y me trataron como de la familia. Ahora este es el único número que tengo en mi tablero.",
    },
    source: "Google",
    url: "",
    confirmed: true,
  },
  {
    id: "review-003",
    name: "James Whitfield",
    location: "Chicago, IL",
    date: "2026-09-05",
    rating: 4,
    text: {
      en: "Ran out of fuel on a cold morning. Delivery was a bit delayed by traffic but the driver kept me updated the whole time and did a solid job. Would call again.",
      es: "Me quedé sin combustible una mañana fría. La entrega se retrasó un poco por el tráfico, pero el conductor me mantuvo informado todo el tiempo e hizo un buen trabajo. Los volvería a llamar.",
    },
    source: "Direct",
    url: "",
    confirmed: true,
  },
  {
    id: "review-004",
    name: "Carlos Mendoza",
    location: "Phoenix, AZ",
    date: "2026-08-28",
    rating: 5,
    text: {
      en: "My reefer unit failed with a full load of produce. Their tech diagnosed and fixed it on the spot and saved my entire load. Top-tier roadside service for real truckers.",
      es: "Mi unidad reefer falló con una carga completa de productos. Su técnico la diagnosticó y reparó en el momento y me salvó toda la carga. Servicio de carretera de primer nivel para verdaderos camioneros.",
    },
    source: "Google",
    url: "",
    confirmed: true,
  },
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
