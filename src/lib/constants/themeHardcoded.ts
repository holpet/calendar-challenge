import { INIT_MODAL_DATA } from "./valuesHardcoded";

/* These values serve for components that have to be customized with inline styles to override their initial styling */

// same can be found in tailwind.config.js
export const TO_HEX_COLORS = {
  white: "#ffffff",
  black: "#020204",
  blue: "#4f40bf",
  red: "#ff0000",

  // gray
  gray: "#8f98aa",
  lightGray: "#d9dce2",
  lightestGray: "#f1f2f4",
  darkGray: "#5b6578",
  "gray-100": "#f7f8f9",

  // purple
  purple: "#7e45db",
  "purple-500": "#d6d0f4",
  "purple-300": "#e8e5f9",
  "purple-100": "#f3f1fc",
  midPurple: "#905fe0",
  lightPurple: "#b8afec",
  lightestPurple: "#d6d1f4",

  // pink
  pink: "#de148b",
  "pink-500": "#fab6dd",
  "pink-300": "#fcd6ec",
  "pink-100": "#fde5f3",

  // green
  green: "#57b914",
  "green-500": "#bbf494",
  "green-300": "#d6f8be",
  "green-100": "#eefce4",
};

// saved as tailwind classes
export const FONTS = {
  global: "font-global",
  handwritten: "font-handwritten",
};

export function getColorNameFromHex(hex: string) {
  const name = Object.keys(TO_HEX_COLORS).find(
    (key) => TO_HEX_COLORS[key as keyof typeof TO_HEX_COLORS] === hex
  );
  if (!name) return INIT_MODAL_DATA.color;
  return name;
}

export const METRICS = {
  fillHeaderHeight: "h-[40px]",
  bodyEdgePadding: 24, //px
};
