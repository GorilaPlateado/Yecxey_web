const en = {
  lang: "en",
  langLabel: "English",
  altLang: "es",
  altLangLabel: "Español",
  altLangPath: "/es/",

  // ── Navigation ───────────────────────────────────────────
  nav: {
    home: "Home",
    services: "Services",
    aboutUs: "About Us",
    serviceArea: "Service Area",
    reviews: "Reviews",
    contact: "Contact",
    callNow: "Call Now",
  },

  // ── Hero ─────────────────────────────────────────────────
  hero: {
    headline: "Commercial Truck Roadside Assistance",
    subheadline: "Professional Mobile Repair Services Across the United States",
    description:
      "Stranded on the road? GY Roadside Solutions LLC dispatches experienced technicians to get your commercial truck back on the road fast.",
    ctaCall: "Call Now",
    ctaContact: "Request Roadside Assistance",
    trustedBy: "Trusted by commercial truck drivers across the US",
  },

  // ── Services ─────────────────────────────────────────────
  services: {
    title: "Our Services",
    subtitle: "Professional roadside assistance and mobile repair for commercial trucks",
    viewAll: "View All Services",
    viewDetails: "View Details",
    learnMore: "Learn More",
    callForService: "Call for This Service",
    requestService: "Request This Service",
    relatedServices: "Related Services",
  },

  // ── Service Areas ─────────────────────────────────────────
  serviceArea: {
    title: "Service Area",
    subtitle: "Areas We Serve",
    description:
      "GY Roadside Solutions LLC provides commercial truck roadside assistance across multiple states. Contact us to confirm coverage in your specific location.",
    confirmCoverage: "Confirm Coverage in Your Area",
    getDirections: "Get Directions",
    callUs: "Call Us",
  },

  // ── About ─────────────────────────────────────────────────
  about: {
    title: "About GY Roadside Solutions LLC",
    subtitle: "Your Trusted Partner for Commercial Truck Assistance",
    ourMission: "Our Mission",
    ourValues: "Our Values",
    whyChooseUs: "Why Choose Us",
    ourTeam: "Our Team",
    contentPlaceholder: "[CONTENT TO BE PROVIDED BY CLIENT]",
  },

  // ── Reviews ───────────────────────────────────────────────
  reviews: {
    title: "Customer Reviews",
    subtitle: "What Our Customers Say",
    noReviews: "Customer reviews will appear here soon.",
    leaveReview: "Leave a Review",
    verifiedReview: "Verified Review",
    readMore: "Read more",
    sourceGoogle: "Google Review",
    sourceFacebook: "Facebook Review",
    sourceYelp: "Yelp Review",
  },

  // ── Contact ───────────────────────────────────────────────
  contact: {
    title: "Contact Us",
    subtitle: "Get Roadside Assistance",
    description:
      "Fill out the form below or call us directly for immediate roadside assistance.",
    callUs: "Call Us",
    emailUs: "Email Us",
    followUs: "Follow Us",
    form: {
      fullName: "Full Name",
      fullNamePlaceholder: "Your full name",
      phone: "Phone Number",
      phonePlaceholder: "Your phone number",
      email: "Email Address",
      emailPlaceholder: "your@email.com",
      serviceType: "Service Needed",
      serviceTypePlaceholder: "Select a service",
      location: "Current City / Location",
      locationPlaceholder: "City or highway location",
      state: "State",
      statePlaceholder: "Select your state",
      truckInfo: "Truck / Vehicle Information",
      truckInfoPlaceholder: "Make, model, year, license plate (optional)",
      problemDescription: "Describe the Problem",
      problemDescriptionPlaceholder: "Describe what happened and current situation",
      contactPreference: "Preferred Contact Method",
      contactPreferencePhone: "Phone Call",
      contactPreferenceText: "Text Message",
      contactPreferenceEmail: "Email",
      privacyConsent:
        "I agree to the Privacy Policy and consent to being contacted regarding my request.",
      submit: "Send Request",
      submitting: "Sending...",
      successTitle: "Request Sent Successfully",
      successMessage:
        "We received your request. A technician will contact you shortly.",
      errorTitle: "Submission Error",
      errorMessage:
        "There was a problem sending your request. Please try again or call us directly.",
      required: "Required",
      privacyLink: "Privacy Policy",
    },
  },

  // ── Footer ────────────────────────────────────────────────
  footer: {
    tagline: "Reliable Roadside Assistance for Commercial Trucks",
    quickLinks: "Quick Links",
    ourServices: "Our Services",
    contactInfo: "Contact Information",
    followUs: "Follow Us",
    rights: "All rights reserved.",
    privacyPolicy: "Privacy Policy",
    builtWith: "Built for performance and reliability.",
  },

  // ── Mobile Action Bar ─────────────────────────────────────
  mobileBar: {
    call: "Call Now",
    request: "Request Help",
  },

  // ── Breadcrumbs ───────────────────────────────────────────
  breadcrumbs: {
    home: "Home",
    services: "Services",
    serviceArea: "Service Area",
    aboutUs: "About Us",
    reviews: "Reviews",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
  },

  // ── 404 ───────────────────────────────────────────────────
  notFound: {
    title: "Page Not Found",
    heading: "404 — Page Not Found",
    description:
      "The page you're looking for doesn't exist or has been moved.",
    goHome: "Go to Homepage",
    callUs: "Call Us for Help",
  },

  // ── Privacy ───────────────────────────────────────────────
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated",
    content: "[PRIVACY POLICY CONTENT — review with legal counsel before publishing]",
  },

  // ── General ───────────────────────────────────────────────
  general: {
    loading: "Loading...",
    close: "Close",
    open: "Open",
    menu: "Menu",
    skipToContent: "Skip to main content",
    openInMaps: "Open in Google Maps",
    callPhone: "Call",
    sendEmail: "Send Email",
  },

  // ── Trust signals ─────────────────────────────────────────
  trust: {
    fastResponse: "Fast Response",
    fastResponseDesc: "[CONFIRM WITH CLIENT — response time]",
    licensed: "Licensed & Insured",
    licensedDesc: "[CONFIRM WITH CLIENT — license details]",
    experienced: "Experienced Technicians",
    experiencedDesc: "[CONFIRM WITH CLIENT — experience details]",
    nationwide: "Nationwide Coverage",
    nationwideDesc: "[CONFIRM WITH CLIENT — coverage details]",
  },
} as const;

export default en;
export type Translations = typeof en;
