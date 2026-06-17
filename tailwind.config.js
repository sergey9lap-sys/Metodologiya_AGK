/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        bg: "#F2E5C5",
        "bg-secondary": "#F7EBCF",
        "bg-accent": "#550B18",
        "text-primary": "#3A000C",
        "text-secondary": "#5A2730",
        "text-muted": "#76585C",

        orange: {
          1: "#550B18",
          2: "#75162E",
          3: "#3A000C",
          4: "#8E4B52",
          5: "#F2E5C5",
        },

        card: {
          bg: "#F8EDD2",
          border: "rgba(85, 11, 24, 0.18)",
        },
      },
      fontFamily: {
        heading: ["Times New Roman", "Times", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["clamp(58px, 9vw, 132px)", { lineHeight: "0.9", fontWeight: "800" }],
        h2: ["clamp(34px, 4vw, 58px)", { lineHeight: "1.04", fontWeight: "800" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "700" }],
        price: ["28px", { lineHeight: "1.1", fontWeight: "700" }],
        body: ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        small: ["14px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      borderRadius: {
        card: "16px",
        pill: "999px",
      },
      boxShadow: {
        card: "0 18px 48px rgba(58, 0, 12, 0.12)",
        "card-hover": "0 24px 64px rgba(85, 11, 24, 0.2)",
        button: "0 14px 32px rgba(85, 11, 24, 0.28)",
        "button-hover": "0 18px 42px rgba(85, 11, 24, 0.34)",
        "soft-glow": "0 0 42px rgba(117, 22, 46, 0.24)",
      },
      backdropBlur: {
        xs: "2px",
      },
      spacing: {
        safe: "env(safe-area-inset-bottom)",
      },
    },
  },
  plugins: [],
};
