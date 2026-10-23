/**
 * Services data — updated per client revision document (2026-10).
 * Order follows the client's "Servicio 1–6" listing.
 * active: true = generates a static page at build time.
 * active: false = placeholder, no page generated.
 * Scope: mobile service in the Dallas-Fort Worth, Texas area — at the
 * vehicle's location or at the customer's facilities. No availability promises.
 */

export interface ServiceFAQ {
  q: { en: string; es: string };
  a: { en: string; es: string };
}

export interface Service {
  slug: string;
  slugEs: string;
  title: { en: string; es: string };
  shortDescription: { en: string; es: string };
  description: { en: string; es: string };
  image: string;
  imageWide: string;
  imageAlt: { en: string; es: string };
  icon: string;
  active: boolean;
  featured: boolean;
  price: null | string;
  relatedSlugs: string[];
  faq: ServiceFAQ[];
}

const services: Service[] = [
  // ── Servicio 1: Cambio y Reparación de Neumáticos ─────────
  {
    slug: "tire-change",
    slugEs: "cambio-de-neumaticos",
    title: {
      en: "Tire Change & Repair",
      es: "Cambio y Reparación de Neumáticos",
    },
    shortDescription: {
      en: "Mobile tire change and repair service for commercial trucks and other vehicles, right at the vehicle's location or at the customer's facilities.",
      es: "Servicio móvil de cambio y reparación de neumáticos para camiones comerciales y otros vehículos, directamente en el lugar donde se encuentre o en las instalaciones del cliente.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides mobile tire change and repair service for commercial trucks and trailers in the Dallas-Fort Worth, Texas area. We come directly to where your vehicle is located — highway, parking lot, or loading yard — or to the customer's facilities, with the tools and equipment needed to service commercial tire sizes. Contact us with your location and the situation to coordinate the requested service.",
      es: "GY Roadside Solutions LLC ofrece servicio móvil de cambio y reparación de neumáticos para camiones comerciales y tráileres en el área de Dallas-Fort Worth, Texas. Nos desplazamos directamente a donde se encuentre el vehículo — carretera, estacionamiento o patio de carga — o a las instalaciones del cliente, con las herramientas y el equipo necesarios para atender neumáticos comerciales. Contáctenos con su ubicación y la situación para coordinar el servicio solicitado.",
    },
    image: "/images/services/tire-change.webp",
    imageWide: "/images/services/tire-change-wide.webp",
    imageAlt: {
      en: "3D illustration of a commercial truck tire mounted with an impact wrench",
      es: "Ilustración 3D de una llanta de camión con un impacto para cambio de neumáticos",
    },
    icon: "🔧",
    active: true,
    featured: true,
    price: null,
    relatedSlugs: ["jump-start", "fuel-delivery", "brake-service"],
    faq: [
      {
        q: {
          en: "Do you carry spare tires for commercial trucks?",
          es: "¿Cargan llantas de repuesto para camiones comerciales?",
        },
        a: {
          en: "Contact us at (214) 302-7757 to confirm tire availability for your specific truck configuration.",
          es: "Contáctenos al (214) 302-7757 para confirmar disponibilidad de llantas para la configuración específica de su camión.",
        },
      },
      {
        q: {
          en: "What does a commercial tire change service include?",
          es: "¿Qué incluye el servicio de cambio de neumáticos comerciales?",
        },
        a: {
          en: "Service details vary by situation. Call us at (214) 302-7757, describe the problem, and we will coordinate the mobile service.",
          es: "Los detalles del servicio varían según la situación. Llámenos al (214) 302-7757, describa el problema y coordinamos el servicio móvil.",
        },
      },
    ],
  },
  // ── Servicio 2: Mantenimiento y Reparación de Unidades Refrigeradas ──
  {
    slug: "reefer-maintenance",
    slugEs: "mantenimiento-de-refrigeracion",
    title: {
      en: "Refrigeration Unit (Reefer) Maintenance & Repair",
      es: "Mantenimiento y Reparación de Unidades Refrigeradas",
    },
    shortDescription: {
      en: "Mobile diagnosis, maintenance, and repair of refrigeration units on refrigerated trailers, right at their location or at the customer's facilities.",
      es: "Servicio móvil de diagnóstico, mantenimiento y reparación de unidades en tráileres refrigerados, directamente en el lugar donde se encuentren o en las instalaciones del cliente.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides mobile diagnosis, maintenance, and repair of refrigeration units on refrigerated trailers in the Dallas-Fort Worth, Texas area. We go directly to where your vehicle is located or to the customer's facilities to service the reefer unit and help protect your refrigerated cargo. Contact us to describe the issue and coordinate the service.",
      es: "GY Roadside Solutions LLC ofrece servicio móvil de diagnóstico, mantenimiento y reparación de unidades en tráileres refrigerados en el área de Dallas-Fort Worth, Texas. Vamos directamente a donde se encuentre el vehículo o a las instalaciones del cliente para atender la unidad refrigerada y ayudar a proteger su carga. Contáctenos para describir el problema y coordinar el servicio.",
    },
    image: "/images/services/reefer-maintenance.webp",
    imageWide: "/images/services/reefer-maintenance-wide.webp",
    imageAlt: {
      en: "Technician servicing a refrigerated truck unit with gauges and a refrigerant tank at sunset",
      es: "Técnico dando servicio a una unidad de refrigeración de camión con manómetros y un tanque de refrigerante al atardecer",
    },
    icon: "❄️",
    active: true,
    featured: true,
    price: null,
    relatedSlugs: ["fuel-delivery", "brake-service", "oil-change-service"],
    faq: [
      {
        q: {
          en: "Do you service Thermo King and Carrier reefer units?",
          es: "¿Hacen servicio a unidades Thermo King y Carrier?",
        },
        a: {
          en: "Call us at (214) 302-7757 to describe your reefer unit and issue — we'll confirm if we can assist.",
          es: "Llámenos al (214) 302-7757 para describir su unidad y el problema — confirmaremos si podemos asistirle.",
        },
      },
    ],
  },
  // ── Servicio 3: Entrega de Combustible ────────────────────
  {
    slug: "fuel-delivery",
    slugEs: "entrega-de-combustible",
    title: {
      en: "Fuel Delivery",
      es: "Entrega de Combustible",
    },
    shortDescription: {
      en: "Mobile diesel or gasoline delivery service for commercial trucks and other vehicles, right where they are located.",
      es: "Servicio móvil de entrega de diésel o gasolina para camiones comerciales y otros vehículos, directamente donde se encuentren ubicados.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides mobile diesel or gasoline delivery for commercial trucks and other vehicles in the Dallas-Fort Worth, Texas area. We bring fuel directly to where your vehicle is located so you can continue your route or reach the nearest fueling point. Contact us with your location and fuel needs to coordinate the delivery.",
      es: "GY Roadside Solutions LLC ofrece servicio móvil de entrega de diésel o gasolina para camiones comerciales y otros vehículos en el área de Dallas-Fort Worth, Texas. Llevamos combustible directamente a donde se encuentre su vehículo para que pueda continuar su ruta o llegar al punto de abastecimiento más cercano. Contáctenos con su ubicación y sus necesidades de combustible para coordinar la entrega.",
    },
    image: "/images/services/fuel-delivery.webp",
    imageWide: "/images/services/fuel-delivery-wide.webp",
    imageAlt: {
      en: "GY Roadside fuel delivery truck pumping diesel into a commercial truck at sunset",
      es: "Camión de entrega de combustible GY Roadside surtiendo diésel a un camión comercial al atardecer",
    },
    icon: "⛽",
    active: true,
    featured: true,
    price: null,
    relatedSlugs: ["jump-start", "tire-change", "reefer-maintenance"],
    faq: [
      {
        q: {
          en: "What type of fuel do you deliver?",
          es: "¿Qué tipo de combustible entregan?",
        },
        a: {
          en: "We deliver diesel and gasoline for commercial trucks and other vehicles. Call (214) 302-7757 to confirm availability in your area.",
          es: "Entregamos diésel y gasolina para camiones comerciales y otros vehículos. Llame al (214) 302-7757 para confirmar disponibilidad en su área.",
        },
      },
    ],
  },
  // ── Servicio 4: Inspección y Reparación de Frenos ─────────
  {
    slug: "brake-service",
    slugEs: "servicio-de-frenos",
    title: {
      en: "Brake Inspection & Repair",
      es: "Inspección y Reparación de Frenos",
    },
    shortDescription: {
      en: "Mobile brake inspection, diagnosis, and repair service for commercial trucks and other vehicles, right at the vehicle's location or at the customer's facilities.",
      es: "Servicio móvil de inspección, diagnóstico y reparación de frenos para camiones comerciales y otros vehículos, directamente en el lugar donde se encuentre o en las instalaciones del cliente.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides mobile brake inspection, diagnosis, and repair for commercial trucks and trailers in the Dallas-Fort Worth, Texas area. We go directly to where your vehicle is located or to the customer's facilities to assess the braking system and perform the requested service, helping you resume your route with peace of mind. Contact us to describe the issue and coordinate the service.",
      es: "GY Roadside Solutions LLC ofrece servicio móvil de inspección, diagnóstico y reparación de frenos para camiones comerciales y tráileres en el área de Dallas-Fort Worth, Texas. Vamos directamente a donde se encuentre el vehículo o a las instalaciones del cliente para evaluar el sistema de frenos y realizar el servicio solicitado, ayudándole a retomar su ruta con tranquilidad. Contáctenos para describir el problema y coordinar el servicio.",
    },
    image: "/images/services/brake-service.webp",
    imageWide: "/images/services/brake-service-wide.webp",
    imageAlt: {
      en: "3D illustration of a ventilated brake disc with caliper",
      es: "Ilustración 3D de un disco de freno ventilado con pinza",
    },
    icon: "🛑",
    active: true,
    featured: false,
    price: null,
    relatedSlugs: ["tire-change", "jump-start", "oil-change-service"],
    faq: [
      {
        q: {
          en: "Can you service air brakes on semi-trucks?",
          es: "¿Pueden dar servicio a los frenos de aire en semirremolques?",
        },
        a: {
          en: "Call us at (214) 302-7757 to describe the issue and we'll confirm if we can assist at your location.",
          es: "Llámenos al (214) 302-7757 para describir el problema y confirmaremos si podemos asistirle en su ubicación.",
        },
      },
    ],
  },
  // ── Servicio 5: Cambio de Aceite ──────────────────────────
  {
    slug: "oil-change-service",
    slugEs: "cambio-de-aceite",
    title: {
      en: "Oil Change",
      es: "Cambio de Aceite",
    },
    shortDescription: {
      en: "Mobile oil change service for commercial trucks and other vehicles, right at the vehicle's location or at the customer's facilities.",
      es: "Servicio móvil de cambio de aceite para camiones comerciales y otros vehículos, directamente en el lugar donde se encuentre o en las instalaciones del cliente.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides mobile oil change service for commercial trucks and other vehicles in the Dallas-Fort Worth, Texas area. We come directly to where your vehicle is located or to the customer's facilities to perform the oil change with commercial-grade oils and filters suitable for heavy-duty diesel engines. Contact us to coordinate the service.",
      es: "GY Roadside Solutions LLC ofrece servicio móvil de cambio de aceite para camiones comerciales y otros vehículos en el área de Dallas-Fort Worth, Texas. Vamos directamente a donde se encuentre el vehículo o a las instalaciones del cliente para realizar el cambio de aceite con productos y filtros de grado comercial adecuados para motores diésel de uso intensivo. Contáctenos para coordinar el servicio.",
    },
    image: "/images/services/oil-change-service.webp",
    imageWide: "/images/services/oil-change-service-wide.webp",
    imageAlt: {
      en: "Technician kneeling beside a commercial truck using an air compressor at sunset",
      es: "Técnico arrodillado junto a un camión comercial usando un compresor de aire al atardecer",
    },
    icon: "🛢️",
    active: true,
    featured: false,
    price: null,
    relatedSlugs: ["brake-service", "reefer-maintenance", "jump-start"],
    faq: [
      {
        q: {
          en: "What oil grades do you use for commercial trucks?",
          es: "¿Qué grados de aceite usan para camiones comerciales?",
        },
        a: {
          en: "We use commercial-grade oils appropriate for your engine. Call (214) 302-7757 for details.",
          es: "Usamos aceites de grado comercial apropiados para su motor. Llame al (214) 302-7757 para más detalles.",
        },
      },
    ],
  },
  // ── Servicio 6: Arranque de Emergencia y Reemplazo de Baterías ──
  {
    slug: "jump-start",
    slugEs: "arranque-de-emergencia",
    title: {
      en: "Emergency Jump Start & Battery Replacement",
      es: "Arranque de Emergencia y Reemplazo de Baterías",
    },
    shortDescription: {
      en: "Mobile emergency jump start and battery replacement service for commercial trucks and other vehicles, right at the vehicle's location or at the customer's facilities.",
      es: "Servicio móvil de arranque de emergencia y reemplazo de baterías para camiones comerciales y otros vehículos, directamente en el lugar donde se encuentre o en las instalaciones del cliente.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides mobile emergency jump start and battery replacement for commercial trucks and other vehicles in the Dallas-Fort Worth, Texas area. We come directly to where your vehicle is located or to the customer's facilities with heavy-duty equipment designed for commercial vehicles. Contact us to describe the situation and coordinate the service.",
      es: "GY Roadside Solutions LLC ofrece servicio móvil de arranque de emergencia y reemplazo de baterías para camiones comerciales y otros vehículos en el área de Dallas-Fort Worth, Texas. Vamos directamente a donde se encuentre el vehículo o a las instalaciones del cliente con equipo de alto rendimiento diseñado para vehículos comerciales. Contáctenos para describir la situación y coordinar el servicio.",
    },
    image: "/images/services/jump-start.webp",
    imageWide: "/images/services/jump-start-wide.webp",
    imageAlt: {
      en: "3D illustration of a truck battery with jumper cable clamps for a jump start",
      es: "Ilustración 3D de una batería de camión con pinzas de cables para arranque de emergencia",
    },
    icon: "⚡",
    active: true,
    featured: true,
    price: null,
    relatedSlugs: ["tire-change", "fuel-delivery", "brake-service"],
    faq: [
      {
        q: {
          en: "Can you jump start a large diesel semi-truck?",
          es: "¿Pueden arrancar un semirremolque diésel grande?",
        },
        a: {
          en: "We carry heavy-duty commercial jump start equipment. Call us at (214) 302-7757 to confirm we can assist with your vehicle.",
          es: "Contamos con equipo de arranque de uso comercial pesado. Llámenos al (214) 302-7757 para confirmar si podemos asistir su vehículo.",
        },
      },
    ],
  },
];

export default services;

/** Only active services — used for page generation and display */
export const activeServices = services.filter((s) => s.active);

/** Featured services for homepage highlight */
export const featuredServices = services.filter((s) => s.active && s.featured);
