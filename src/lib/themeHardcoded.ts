/* These values serve for components that have to be customized with inline styles to override out their initial styling */

import { INIT_MODAL_DATA } from "./modal_utils/modalUtils";

// same can be found in tailwind.config.js
export const TO_HEX_COLORS = {
  orange: "#ff7f00",
  "orange-300": "#ffe5cb",
  "orange-100": "#fff5ec",
  purple: "#7e45db",
  "purple-300": "#e8e5f9",
  "purple-100": "#f3f1fc",
  green: "#57b914",
  "green-300": "#d6f8be",
  "green-100": "#eefce4",
  pink: "#de148b",
  "pink-300": "#fcd6ec",
  "pink-100": "#fde5f3",
  gray: "#8f98aa",
  lightGray: "#d9dce2",
};

// saved as tailwind classes
export const FONTS = {
  global: "text-global",
  handwritten: "text-handwritten",
};

export function getColorNameFromHex(hex: string) {
  const name = Object.keys(TO_HEX_COLORS).find(
    (key) => TO_HEX_COLORS[key as keyof typeof TO_HEX_COLORS] === hex
  );
  if (!name) return INIT_MODAL_DATA.color;
  return name;
}
