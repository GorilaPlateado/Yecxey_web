/**
 * Service Areas data — updated per the client's service-zone revision (2026-10).
 * These Dallas-Fort Worth cities are the agreed service area.
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
    city: "Arlington",
    county: "Tarrant County",
    state: "Texas",
    stateCode: "TX",
    slug: "arlington",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Arlington, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Arlington, Texas.",
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
    city: "Coppell",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "coppell",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Coppell, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Coppell, Texas.",
    },
    confirmed: true,
  },
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
    city: "DeSoto",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "desoto",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in DeSoto, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en DeSoto, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Euless",
    county: "Tarrant County",
    state: "Texas",
    stateCode: "TX",
    slug: "euless",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Euless, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Euless, Texas.",
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
  {
    city: "Fort Worth",
    county: "Tarrant County",
    state: "Texas",
    stateCode: "TX",
    slug: "fort-worth",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Fort Worth, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Fort Worth, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Frisco",
    county: "Collin County",
    state: "Texas",
    stateCode: "TX",
    slug: "frisco",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Frisco, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Frisco, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Garland",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "garland",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Garland, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Garland, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Grand Prairie",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "grand-prairie",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Grand Prairie, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Grand Prairie, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Grapevine",
    county: "Tarrant County",
    state: "Texas",
    stateCode: "TX",
    slug: "grapevine",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Grapevine, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Grapevine, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Hutchins",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "hutchins",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Hutchins, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Hutchins, Texas.",
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
    city: "Lancaster",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "lancaster",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Lancaster, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Lancaster, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Lewisville",
    county: "Denton County",
    state: "Texas",
    stateCode: "TX",
    slug: "lewisville",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Lewisville, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Lewisville, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Mesquite",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "mesquite",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Mesquite, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Mesquite, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Plano",
    county: "Collin County",
    state: "Texas",
    stateCode: "TX",
    slug: "plano",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Plano, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Plano, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Richardson",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "richardson",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Richardson, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Richardson, Texas.",
    },
    confirmed: true,
  },
  {
    city: "Wilmer",
    county: "Dallas County",
    state: "Texas",
    stateCode: "TX",
    slug: "wilmer",
    description: {
      en: "Mobile roadside assistance for commercial trucks and other vehicles in Wilmer, Texas.",
      es: "Asistencia móvil en carretera para camiones comerciales y otros vehículos en Wilmer, Texas.",
    },
    confirmed: true,
  },
];

export default serviceAreas;

/** Only confirmed areas used for strong coverage claims */
export const confirmedAreas = serviceAreas.filter((a) => a.confirmed);
