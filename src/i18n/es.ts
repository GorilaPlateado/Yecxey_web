const es = {
  lang: "es",
  langLabel: "Español",
  altLang: "en",
  altLangLabel: "English",
  altLangPath: "/en/",

  nav: {
    home: "Inicio",
    services: "Servicios",
    aboutUs: "Nosotros",
    serviceArea: "Área de Servicio",
    reviews: "Reseñas",
    contact: "Contacto",
    callNow: "Llamar Ahora",
  },

  // Título/subtítulo/descripción están en línea en Hero.astro (revisión del cliente 2026-10).
  hero: {
    ctaCall: "Llamar Ahora",
  },

  services: {
    title: "Nuestros Servicios",
    subtitle: "Asistencia en carretera profesional y reparación móvil para camiones comerciales",
    viewAll: "Ver Todos los Servicios",
    viewDetails: "Ver Detalles",
    learnMore: "Más Información",
    callForService: "Llamar para Este Servicio",
    requestService: "Solicitar Este Servicio",
    relatedServices: "Servicios Relacionados",
  },

  reviews: {
    title: "Reseñas de Clientes",
    subtitle: "Lo que Dicen Nuestros Clientes",
    noReviews: "Las reseñas de nuestros clientes aparecerán aquí próximamente.",
    leaveReview: "Dejar una Reseña",
    verifiedReview: "Reseña Verificada",
    readMore: "Leer más",
    sourceGoogle: "Reseña de Google",
    sourceFacebook: "Reseña de Facebook",
    sourceYelp: "Reseña de Yelp",
  },

  contact: {
    title: "Contáctenos",
    subtitle: "Solicitar Asistencia en Carretera",
    description:
      "Complete el formulario o llámenos directamente para asistencia inmediata en carretera.",
    callUs: "Llámenos",
    emailUs: "Envíenos un Correo",
    followUs: "Síguenos",
    form: {
      fullName: "Nombre Completo",
      fullNamePlaceholder: "Su nombre completo",
      phone: "Número de Teléfono",
      phonePlaceholder: "Su número de teléfono",
      email: "Correo Electrónico",
      emailPlaceholder: "su@correo.com",
      serviceType: "Servicio Necesario",
      serviceTypePlaceholder: "Seleccione un servicio",
      location: "Ciudad / Ubicación Actual",
      locationPlaceholder: "Ciudad o ubicación en la carretera",
      serviceArea: "Zona de Servicio (Ciudad / Condado)",
      serviceAreaPlaceholder: "Seleccione su ciudad",
      truckInfo: "Información del Camión / Vehículo",
      truckInfoPlaceholder: "Marca, modelo, año, placa (opcional)",
      problemDescription: "Describa el Problema",
      problemDescriptionPlaceholder: "Describa qué ocurrió y la situación actual",
      contactPreference: "Método de Contacto Preferido",
      contactPreferencePhone: "Llamada Telefónica",
      contactPreferenceText: "Mensaje de Texto",
      contactPreferenceEmail: "Correo Electrónico",
      privacyConsent:
        "Acepto la Política de Privacidad y doy mi consentimiento para ser contactado sobre mi solicitud.",
      submit: "Enviar Solicitud",
      submitting: "Enviando...",
      successTitle: "Solicitud Enviada Exitosamente",
      successMessage:
        "Recibimos su solicitud. Un técnico se comunicará con usted en breve.",
      errorTitle: "Error al Enviar",
      errorMessage:
        "Hubo un problema al enviar su solicitud. Intente de nuevo o llámenos directamente.",
      required: "Requerido",
      privacyLink: "Política de Privacidad",
    },
  },

  footer: {
    tagline: "Asistencia en Carretera Confiable para Camiones Comerciales",
    quickLinks: "Enlaces Rápidos",
    ourServices: "Nuestros Servicios",
    contactInfo: "Información de Contacto",
    followUs: "Síguenos",
    rights: "Todos los derechos reservados.",
    privacyPolicy: "Política de Privacidad",
    builtWith: "Construido para rendimiento y confiabilidad.",
  },

  mobileBar: {
    call: "Llamar Ahora",
    request: "Solicitar Ayuda",
  },

  breadcrumbs: {
    home: "Inicio",
    services: "Servicios",
    serviceArea: "Área de Servicio",
    aboutUs: "Nosotros",
    reviews: "Reseñas",
    contact: "Contacto",
    privacyPolicy: "Política de Privacidad",
  },

  notFound: {
    title: "Página No Encontrada",
    heading: "404 — Página No Encontrada",
    description: "La página que busca no existe o ha sido movida.",
    goHome: "Ir al Inicio",
    callUs: "Llámenos para Ayuda",
  },

  privacy: {
    title: "Política de Privacidad",
    lastUpdated: "Última Actualización",
    content: "[CONTENIDO DE POLÍTICA DE PRIVACIDAD — revisar con asesor legal antes de publicar]",
  },

  general: {
    loading: "Cargando...",
    close: "Cerrar",
    open: "Abrir",
    menu: "Menú",
    skipToContent: "Ir al contenido principal",
    openInMaps: "Abrir en Google Maps",
    callPhone: "Llamar",
    sendEmail: "Enviar Correo",
  },
} as const;

export default es;
