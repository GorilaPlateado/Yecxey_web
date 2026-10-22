/**
 * Service Areas data — confirmed by the client in the 2026-10 revision document.
 * These five Dallas-Fort Worth cities are the agreed service area.
 * They feed the "Área de Servicio" page box and stay consistent with
 * the homepage coverage section and both embedded Google Maps (business.googleMapsUrl).
 */

export interface ServiceArea {
  city: string;
  county?: string;
  state: string;
  stateCode: string;
  slug: string;
  description: { en: string; es: string };
  confirmed: boolean;
}

const serviceAreas: ServiceArea[] = [
  {
    city: "Dallas",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "dallas",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Dallas, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Dallas, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Irving",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "irving",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Irving, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Irving, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Addison",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "addison",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Addison, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Addison, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Carrollton",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "carrollton",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Carrollton, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Carrollton, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Farmers Branch",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "farmers-branch",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Farmers Branch, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Farmers Branch, Texas.",
    },
    confirmed: true,
  },
];

export default serviceAreas;

/** Only confirmed areas used for strong coverage claims */
export const confirmedAreas = serviceAreas.filter((a) => a.confirmed);
