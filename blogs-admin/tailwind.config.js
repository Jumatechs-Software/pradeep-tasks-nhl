/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        accent_lime_1: "#EEFAF4",
        accent_lime_2: "#325544",
        accent_yellow_1: "#F3C95F",
        accent_red_1: "#DE6868",
        text_lime_h: "#546E62",
        text_slate_p: "#5E5E5E",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      fontFamily: {
        public_sans: `"Public Sans", sans-serif;`,
      },
    },
  },

  plugins: [],
};
