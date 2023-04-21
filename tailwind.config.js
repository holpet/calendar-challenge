/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,jsx,ts,tsx}'",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // primary
      white: "#ffffff",
      black: "#020204",
      gray: "#8f98aa",
      purple: "#7e45db",
      pink: "#de148b",
      transparent: "transparent",

      // primary shades -> color gradiants
      "light-purple": "#b8afec",
      "lightest-purple": "#d6d1f4",
      "mid-purple": "#905fe0",
      "light-pink": "#f552b1",

      // additional to primary
      "dark-gray": "#5b6578",
      "light-gray": "#d9dce2",
      "lightest-gray": "#f1f2f4",
      "dark-blue": "#1b1351",
      "mid-blue": "#26196a",

      // complementary shades
      orange: "#f89b18",
      green: "#a2db45",
      "dark-green": "#45db7e",
      yellow: "#ffc82c",

      // triadic shades
      "tri-purple": "#7E45DB",
      "tri-orange": "#DB7E45",
      "tri-green": "#45DB7E",

      // analogous shades
      "ana-purple": "#7E45DB",
      "ana-blue": "#4557DB",
      "ana-pink": "#4557DB",
    },
    fontFamily: {
      general: ["Arial", "serif"],
      handwritten: ["Great Vibes", "cursive"],
      special: ["Sanchez", "serif"],
    },
    extend: {
      minWidth: {
        "icon-big": "70px",
        "icon-small": "50px",
      },
      gridTemplateColumns: {
        // Simple 7 column grid
        "7": "repeat(7, minmax(0, 1fr))",
      },
    },
  },
  plugins: [],
};
