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
      blue: "#4f40bf",
      transparent: "transparent",
      error: "red",

      // primary shades -> color gradiants
      "light-purple": "#b8afec",
      "lightest-purple": "#d6d1f4",
      "white-purple": "#e8e5f9",
      "mid-purple": "#905fe0",
      "light-pink": "#f552b1",

      // 50 shades of gray
      "dark-gray": "#5b6578",
      "light-gray": "#d9dce2",
      "lightest-gray": "#f1f2f4",
      "white-gray": "#f7f8f9",

      // complementary shades
      orange: "#ff7f00",
      "orange-500": "#ffd7b0",
      "orange-300": "#ffe5cb",
      "orange-100": "#fff5ec",
      //purple: "#7e45db",
      "purple-700": "#6627cc",
      "purple-500": "#d6d0f4",
      "purple-300": "#e8e5f9",
      "purple-100": "#f3f1fc",
      green: "#57b914",
      "green-700": "#469610",
      "green-500": "#bbf494",
      "green-300": "#d6f8be",
      "green-100": "#eefce4",
      pink: "#de148b",
      "pink-700": "#af106e",
      "pink-500": "#fab6dd",
      "pink-300": "#fcd6ec",
      "pink-100": "#fef0f8",
    },
    fontFamily: {
      global: ["Inter", "sans-serif"],
      handwritten: ["Permanent Marker", "cursive"],
      special: ["Sanchez", "serif"],
      inherit: "inherit",
    },
    extend: {
      minWidth: {
        "icon-big": "70px",
        "icon-small": "50px",
        "side-panel": "14rem",
      },
      height: {
        "18": "4.5rem",
      },
      gridTemplateColumns: {
        // Simple 7 column grid
        "7": "repeat(7, minmax(0, 1fr))",
      },
      boxShadow: {
        highlight: "inset 0px -6px 0px 0px rgb(0 0 0 / 0.1)",
      },
      animation: {
        "fly-in": "flyin",
      },
      keyframes: {
        flyin: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [],
};
