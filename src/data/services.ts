/**
 * Services data — confirmed from GY Roadside Solutions LLC business card.
 * active: true = generates a static page at build time.
 * active: false = placeholder, no page generated.
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
  // ── CONFIRMED SERVICES (from business card) ────────────────
  {
    slug: "tire-change",
    slugEs: "cambio-de-neumaticos",
    title: {
      en: "Tire Change",
      es: "Cambio de Neumáticos",
    },
    shortDescription: {
      en: "Fast on-site tire change for commercial trucks and trailers — available 24/7.",
      es: "Cambio de neumáticos en sitio para camiones y tráilers comerciales — disponible las 24 horas.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides professional on-site tire change services for commercial trucks and trailers. Whether you have a blowout on the highway or a flat tire at a truck stop, our technicians come to you equipped to handle all commercial tire sizes. We service dual and single axle configurations and get you back on the road as fast as possible.",
      es: "GY Roadside Solutions LLC ofrece servicios profesionales de cambio de neumáticos en sitio para camiones y tráilers comerciales. Ya sea un reventón en la autopista o una llanta ponchada en una gasolinera, nuestros técnicos van hasta donde usted está con el equipo necesario para manejar todos los tamaños de llantas comerciales. Atendemos configuraciones de eje doble y sencillo para regresarlo a la carretera lo más rápido posible.",
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
          en: "How long does a commercial tire change take?",
          es: "¿Cuánto tiempo toma el cambio de llanta comercial?",
        },
        a: {
          en: "Service time varies depending on the truck configuration and location. Call us at (214) 302-7757 for an estimate.",
          es: "El tiempo de servicio varía según la configuración del camión y la ubicación. Llámenos al (214) 302-7757 para un estimado.",
        },
      },
    ],
  },
  {
    slug: "jump-start",
    slugEs: "arranque-de-emergencia",
    title: {
      en: "Jump Start",
      es: "Arranque de Emergencia",
    },
    shortDescription: {
      en: "Professional jump start service for commercial trucks — on-site, available 24/7.",
      es: "Servicio profesional de arranque de emergencia para camiones comerciales — en sitio, disponible las 24 horas.",
    },
    description: {
      en: "Dead battery on your commercial truck? GY Roadside Solutions LLC dispatches a technician to your location to provide a professional jump start. We carry heavy-duty equipment designed for commercial trucks, semi-trucks, and large diesel engines. Available 24 hours a day.",
      es: "¿Batería muerta en su camión comercial? GY Roadside Solutions LLC envía un técnico a su ubicación para brindar un arranque de emergencia profesional. Contamos con equipo de alto rendimiento diseñado para camiones comerciales, semirremolques y motores diésel grandes. Disponible las 24 horas.",
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
          en: "Yes. We carry heavy-duty commercial jump start equipment. Call us at (214) 302-7757.",
          es: "Sí. Contamos con equipo de arranque de uso comercial pesado. Llámenos al (214) 302-7757.",
        },
      },
    ],
  },
  {
    slug: "fuel-delivery",
    slugEs: "entrega-de-combustible",
    title: {
      en: "Fuel Delivery",
      es: "Entrega de Combustible",
    },
    shortDescription: {
      en: "Emergency diesel fuel delivery to stranded commercial trucks — 24/7 service.",
      es: "Entrega de combustible diésel de emergencia a camiones comerciales varados — servicio las 24 horas.",
    },
    description: {
      en: "Ran out of diesel on the road? GY Roadside Solutions LLC delivers emergency fuel directly to your commercial truck. We provide enough fuel to get you to the nearest truck stop or your destination. Available 24/7 to minimize downtime for your fleet.",
      es: "¿Se quedó sin diésel en la carretera? GY Roadside Solutions LLC entrega combustible de emergencia directamente a su camión comercial. Proveemos el combustible suficiente para llegar a la gasolinera más cercana o a su destino. Disponible las 24 horas para minimizar el tiempo inactivo de su flota.",
    },
    image: "/images/services/fuel-delivery.webp",
    imageWide: "/images/services/fuel-delivery-wide.webp",
    imageAlt: {
      en: "3D illustration of a fuel nozzle with a diesel drop for emergency fuel delivery",
      es: "Ilustración 3D de una boquilla de combustible con una gota de diésel para entrega de emergencia",
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
          en: "We deliver diesel fuel for commercial trucks. Call (214) 302-7757 to confirm availability in your area.",
          es: "Entregamos combustible diésel para camiones comerciales. Llame al (214) 302-7757 para confirmar disponibilidad en su área.",
        },
      },
    ],
  },
  {
    slug: "brake-service",
    slugEs: "servicio-de-frenos",
    title: {
      en: "Brake Service",
      es: "Servicio de Frenos",
    },
    shortDescription: {
      en: "Mobile brake inspection and repair for commercial trucks — safety first, 24/7.",
      es: "Inspección y reparación móvil de frenos para camiones comerciales — seguridad primero, las 24 horas.",
    },
    description: {
      en: "Brake issues on a commercial truck are a serious safety concern. GY Roadside Solutions LLC provides mobile brake inspection and repair services for commercial trucks and trailers. Our technicians can diagnose and address brake problems on-site to help you get back on the road safely. Available 24 hours a day.",
      es: "Los problemas de frenos en un camión comercial son una preocupación de seguridad grave. GY Roadside Solutions LLC ofrece servicios móviles de inspección y reparación de frenos para camiones y tráilers comerciales. Nuestros técnicos pueden diagnosticar y atender problemas de frenos en sitio para ayudarle a regresar a la carretera de forma segura. Disponible las 24 horas.",
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
  {
    slug: "reefer-maintenance",
    slugEs: "mantenimiento-de-refrigeracion",
    title: {
      en: "Reefer Maintenance",
      es: "Mantenimiento de Refrigeración (Reefer)",
    },
    shortDescription: {
      en: "Mobile reefer unit maintenance and repair for refrigerated commercial trucks.",
      es: "Mantenimiento y reparación móvil de unidades de refrigeración para camiones refrigerados.",
    },
    description: {
      en: "Keep your refrigerated cargo protected with GY Roadside Solutions LLC reefer maintenance services. We provide mobile maintenance and repair for refrigeration units on commercial trucks and trailers. A malfunctioning reefer unit can compromise your entire load — call us for fast on-site assistance.",
      es: "Mantenga su carga refrigerada protegida con los servicios de mantenimiento de refrigeración de GY Roadside Solutions LLC. Ofrecemos mantenimiento y reparación móvil de unidades de refrigeración en camiones y tráilers comerciales. Una unidad reefer defectuosa puede comprometer toda su carga — llámenos para asistencia rápida en sitio.",
    },
    image: "/images/services/reefer-maintenance.webp",
    imageWide: "/images/services/reefer-maintenance-wide.webp",
    imageAlt: {
      en: "3D illustration of a refrigeration unit with an ice crystal snowflake",
      es: "Ilustración 3D de una unidad de refrigeración con un copo de hielo",
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
  {
    slug: "oil-change-service",
    slugEs: "cambio-de-aceite",
    title: {
      en: "Oil Change Service",
      es: "Cambio de Aceite",
    },
    shortDescription: {
      en: "Mobile oil change service for commercial trucks — on-site convenience, 24/7.",
      es: "Servicio de cambio de aceite móvil para camiones comerciales — comodidad en sitio, las 24 horas.",
    },
    description: {
      en: "GY Roadside Solutions LLC provides mobile oil change services for commercial trucks. Skip the shop and get your oil changed on-site at your location — whether at a truck stop, warehouse, or on the road. We use commercial-grade oils and filters suitable for heavy-duty diesel engines. Available 24/7.",
      es: "GY Roadside Solutions LLC ofrece servicios de cambio de aceite móvil para camiones comerciales. Evite ir al taller y cambie su aceite en el lugar donde se encuentre — ya sea en una gasolinera, almacén o en la carretera. Utilizamos aceites y filtros de grado comercial adecuados para motores diésel de uso intensivo. Disponible las 24 horas.",
    },
    image: "/images/services/oil-change-service.webp",
    imageWide: "/images/services/oil-change-service-wide.webp",
    imageAlt: {
      en: "3D illustration of an oil jug with a wrench for a truck oil change",
      es: "Ilustración 3D de un bidón de aceite con una llave para cambio de aceite de camión",
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
];

export default services;

/** Only active services — used for page generation and display */
export const activeServices = services.filter((s) => s.active);

/** Featured services for homepage highlight */
export const featuredServices = services.filter((s) => s.active && s.featured);
