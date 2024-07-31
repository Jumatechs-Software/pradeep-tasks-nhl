const tailwindConfig = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        fredoka: ["Fredoka One", "sans-serif"],
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        transparent: "transparent",
        white: "#ffffff", // Set default background color to white
      }),
    },
  },
  plugins: [require("daisyui")],
};

export default tailwindConfig;
