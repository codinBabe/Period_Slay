/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary500:'#ba0000',
        primary400:'#de9f9f'
      },
      fontFamily: {
        DmSerif: ["DM Serif Display", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
}

