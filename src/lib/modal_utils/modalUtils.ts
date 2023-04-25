import { EventInput } from "@fullcalendar/core/index.js";
import { COLORS, FONTS } from "../themeHardcoded";
import { v4 as uuidv4 } from "uuid";

export const INIT_MODAL_DATA = {
  title: "",
  color: "purple",
  font: "bg-global",
};

export function createNewEvent(start: Date, end: Date) {
  return {
    id: uuidv4(),
    title: "",
    start: start,
    end: end,
    color: COLORS.purple,
    font: FONTS.global,
  };
}

export function populateModal(event: EventInput) {}

export const LEGEND_COLORS = {
  orange: {
    meaning: "High Priority",
    colorClass: "bg-orange",
    colorLineClass: "bg-orange",
    colorTextClass: "text-orange",
  },
  green: {
    meaning: "Mid Priority",
    colorClass: "bg-green",
    colorLineClass: "bg-green",
    colorTextClass: "text-green",
  },
  pink: {
    meaning: "Special Event",
    colorClass: "bg-pink",
    colorLineClass: "bg-pink",
    colorTextClass: "text-pink",
  },
  purple: {
    meaning: "Standard Event",
    colorClass: "bg-purple",
    colorLineClass: "bg-purple",
    colorTextClass: "text-purple",
  },
  white: {
    meaning: "?",
    colorClass: "bg-white border border-light-gray",
    colorLineClass: "bg-white",
  },
};
