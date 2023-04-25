/* These values serve for components that have to be customized with inline styles to override out their initial styling */

export interface ICOLORS {
  orange: string;
  purple: string;
  lightPurple: string;
  gray: string;
  lightGray: string;
  green: string;
  pink: string;
}

// same can be found in tailwind.config.js
export const COLORS = {
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
  "pink-300": "#fac7e5",
  "pink-100": "#fef0f8",
  gray: "#8f98aa",
  lightGray: "#d9dce2",
};

// saved as tailwind classes
export const FONTS = {
  global: "text-global",
  handwritten: "text-handwritten",
};
