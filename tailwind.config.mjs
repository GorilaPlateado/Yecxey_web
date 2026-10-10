/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0D1B2E",   // dark navy — header, hero, footer bg
          light:   "#1A2F4A",
          dark:    "#070F1A",
        },
        secondary: {
          DEFAULT: "#C8102E",   // red — logo accent
          light:   "#E8253F",
          dark:    "#A00C24",
        },
        accent: {
          DEFAULT: "#F5C518",   // yellow-gold — CTAs, highlights
          light:   "#FFD740",
          dark:    "#D4A800",
        },
        blue: {
          brand:   "#1B3A8C",   // logo blue
        },
        dark:    "#0D1B2E",
        light:   "#F8FAFC",
        muted:   "#94A3B8",
        border:  "#E2E8F0",
        success: "#16A34A",
        error:   "#DC2626",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      boxShadow: {
        card:       "0 2px 12px 0 rgba(0,0,0,0.08)",
        "card-hover":"0 8px 30px 0 rgba(0,0,0,0.15)",
        cta:        "0 4px 20px 0 rgba(245,197,24,0.4)",
      },
    },
  },
  plugins: [],
};
