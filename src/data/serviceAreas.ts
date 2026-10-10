/**
 * Service Areas data.
 * Set confirmed: true only after the client verifies coverage.
 * Unconfirmed areas are displayed generically without specific claims.
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
    city: "[CITY_NAME_1]",
    state: "[STATE_1]",
    stateCode: "[STATE_CODE_1]",
    slug: "[CITY_SLUG_1]",
    description: {
      en: "[CONFIRM WITH CLIENT — describe coverage in this area]",
      es: "[CONFIRMAR CON CLIENTE — describir cobertura en esta área]",
    },
    confirmed: false,
  },
  {
    city: "[CITY_NAME_2]",
    state: "[STATE_2]",
    stateCode: "[STATE_CODE_2]",
    slug: "[CITY_SLUG_2]",
    description: {
      en: "[CONFIRM WITH CLIENT — describe coverage in this area]",
      es: "[CONFIRMAR CON CLIENTE — describir cobertura en esta área]",
    },
    confirmed: false,
  },
  {
    city: "[CITY_NAME_3]",
    state: "[STATE_3]",
    stateCode: "[STATE_CODE_3]",
    slug: "[CITY_SLUG_3]",
    description: {
      en: "[CONFIRM WITH CLIENT — describe coverage in this area]",
      es: "[CONFIRMAR CON CLIENTE — describir cobertura en esta área]",
    },
    confirmed: false,
  },
];

export default serviceAreas;

/** Only confirmed areas used for strong coverage claims */
export const confirmedAreas = serviceAreas.filter((a) => a.confirmed);
