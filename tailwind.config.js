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
        bg: "#FFFFFF",
        "bg-secondary": "#FFFFFF",
        "bg-accent": "#FFA700",
        "text-primary": "#1A1A1A",
        "text-secondary": "#333333",
        "text-muted": "#666666",

        orange: {
          1: "#FFA700",
          2: "#E58A00",
          3: "#FFA700",
          4: "#FFA700",
          5: "#FFA700",
        },

        card: {
          bg: "#FFFFFF",
          border: "#E8E8E8",
        },
      },
      fontFamily: {
        heading: ["Times New Roman", "Times", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        h1: ["180px", { lineHeight: "0.9", fontWeight: "800" }],
        h2: ["48px", { lineHeight: "1.1", fontWeight: "800" }],
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
        card: "0 8px 30px rgba(0, 0, 0, 0.12)",
        "card-hover": "0 16px 40px rgba(255, 167, 0, 0.22)",
        button: "0 4px 15px rgba(255, 167, 0, 0.4)",
        "button-hover": "0 6px 25px rgba(255, 167, 0, 0.5)",
        "soft-glow": "0 0 40px rgba(255, 167, 0, 0.28)",
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
