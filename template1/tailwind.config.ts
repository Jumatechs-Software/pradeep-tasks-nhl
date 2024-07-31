import type { Config } from "tailwindcss";

import plugin from "tailwindcss/plugin";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        accent_maroon: "#442727",
        accent_maroon_deep: "#382020",
        accent_pink: "#895D5D",
        accent_yellow: "#EEBE42",
        accent_yellow_light: "#FFE6A7",
        accent_white: "#FFFFFF",
        accent_slate: "#5E5E5E",
      },
      fontFamily: {
        poppins: "var(--font_poppins)",
        gilroy: "var(--font_gilroy)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text_title": {
          "&-1": {
            "@apply main_text_h1": {},
          },
          "&-2": {
            "@apply main_text_h2": {},
          },
          "&-3": {
            "@apply main_text_h3": {},
          },
          "&-4": {
            "@apply main_text_h4": {},
          },
          "&-p": {
            "@apply main_text_p": {},
          },
        },
        ".bg-wrapper": {
          "&-1": {
            "@apply main_bg_wrapper_1": {},
          },
        },
      });
    }),
  ],
} satisfies Config;

export default config;
