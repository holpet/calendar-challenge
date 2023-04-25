import { COLORS, FONTS } from "../themeHardcoded";

export const INIT_MODAL_DATA = {
  title: "",
  color: COLORS.purple,
  font: FONTS.global,
};

export function populateModal() {}

export function getTextClass(activeColor: string) {
  return LEGEND_COLORS.filter((color) => {
    return color.name === activeColor;
  })[0].colorTextClass;
}

export const LEGEND_COLOR_NAMES = {
  orange: "orange",
  green: "green",
  pink: "pink",
  white: "white",
  purple: "purple",
};

export const LEGEND_COLORS = [
  {
    name: LEGEND_COLOR_NAMES.orange,
    meaning: "High Priority",
    colorClass: "bg-orange",
    colorLineClass: "bg-orange",
    colorTextClass: "text-orange",
  },
  {
    name: LEGEND_COLOR_NAMES.green,
    meaning: "Mid Priority",
    colorClass: "bg-green",
    colorLineClass: "bg-green",
    colorTextClass: "text-green",
  },
  {
    name: LEGEND_COLOR_NAMES.pink,
    meaning: "Special Event",
    colorClass: "bg-pink",
    colorLineClass: "bg-pink",
    colorTextClass: "text-pink",
  },
  {
    name: LEGEND_COLOR_NAMES.purple,
    meaning: "Standard Event",
    colorClass: "bg-purple",
    colorLineClass: "bg-purple",
    colorTextClass: "text-purple",
  },
  {
    name: LEGEND_COLOR_NAMES.white,
    meaning: "?",
    colorClass: "bg-white border border-light-gray",
    colorLineClass: "bg-white",
  },
];
