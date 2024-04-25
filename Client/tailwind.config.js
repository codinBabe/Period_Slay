/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary50: "#FFC5C5",
        primary200: "#FF6666",
        primary500: "#ba0000",
        primary400: "#de9f9f",
        neutral: "#EDEDED",
        neutralNeutral: "#666666",
        neutral200: "#D7D6D6",
        neutral700: "#8D8C8C",
        neutral800: "#7D7D7D",
        neutral1000: "#585656",
        success500: "#0C9900",
      },
      fontFamily: {
        DmSerif: ["DM Serif Display", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
