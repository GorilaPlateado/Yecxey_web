const site = {
  url: "https://gyroadsidesolutions.com",
  defaultLang: "en" as const,
  supportedLangs: ["en", "es"] as const,
  twitterHandle: "",
  ogImage: "/images/og-default.webp",
  themeColor: "#1B3A8C",

  analytics: {
    gaId:            import.meta.env.PUBLIC_GA_ID            ?? "",
    gtmId:           import.meta.env.PUBLIC_GTM_ID           ?? "",
    gscVerification: import.meta.env.PUBLIC_GSC_VERIFICATION ?? "",
  },

  form: {
    netlifyName: "contact-gy-roadside",
  },
};

export default site;
