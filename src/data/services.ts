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
      en: "We repair tires on commercial trucks and other vehicles when it is viable, or replace them, helping you resolve the problem and get back on the road as quickly as possible.",
      es: "Ofrecemos reparación de neumáticos a camiones comerciales y otros vehículos cuando sea viable, o los reemplazamos, ayudándole a resolver el problema y volver a la carretera lo antes posible.",
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
      en: "We perform emergency repairs and light maintenance on commercial truck refrigeration (reefer) units, including repair or replacement of damaged lines, refrigerant recharge, oil and filter changes, belt replacement, and cleaning of the components. Our goal is to help you keep your equipment running and protect your cargo.",
      es: "Realizamos reparaciones de emergencia y mantenimiento ligero de unidades refrigeradas de camiones comerciales, incluyendo reparación o reemplazo de tuberías dañadas, recarga de refrigerante, cambio de aceite y filtros, reemplazo de correas y limpieza de los componentes. Nuestro objetivo es ayudarle a mantener su equipo funcionando y proteger su carga.",
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
      en: "We deliver up to 30 gallons of diesel or 5 gallons of gasoline directly to your location to help you continue your trip to a service station.",
      es: "Entregamos hasta 30 galones de diésel o 5 galones de gasolina directamente en su ubicación para ayudarle a continuar su viaje hasta una estación de servicio.",
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
      en: "We inspect the braking system to identify damaged components and replace them as needed, right where you are broken down.",
      es: "Inspeccionamos el sistema de frenos para identificar componentes dañados y realizamos su reemplazo según las necesidades, directamente donde se encuentre averiado.",
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
      en: "We provide oil change service for commercial trucks and other vehicles right where they are located. We use oil and filters compatible with manufacturer specifications.",
      es: "Brindamos servicio de cambio de aceite para camiones comerciales y otros vehículos directamente donde se encuentren. Utilizamos aceite y filtros compatibles con las especificaciones del fabricante.",
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
      en: "We provide jump start assistance or battery replacement for all types of vehicles, helping you regain your mobility and continue your trip.",
      es: "Proporcionamos asistencia de arranque o reemplazo de baterías a todo tipo de vehículos, ayudándole a recuperar su movilidad y continuar su viaje.",
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
