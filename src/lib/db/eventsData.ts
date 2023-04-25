import { v4 as uuidv4 } from "uuid";
import { EventInput } from "@fullcalendar/core";
import { COLORS, FONTS } from "../themeHardcoded";

/**
 * This is a MOCK database obj with initial data.
 * */

export const EVENTS: EventInput[] = [
  {
    id: uuidv4(),
    title: "Celine Dion still hasn't come.",
    start: "2023-03-30" + "T12:00:00",
    color: COLORS.orange,
  },
  {
    id: uuidv4(),
    title: "Well, this was interesting.",
    start: "2023-04-11" + "T12:00:00",
    color: COLORS.purple,
  },
  {
    id: uuidv4(),
    title: "Time zones suck.",
    start: "2023-04-11" + "T13:00:00",
    color: COLORS.green,
  },
  {
    id: uuidv4(),
    title: "Another anti-government protest?",
    start: "2023-04-11" + "T14:00:00",
    color: COLORS.pink,
  },
  {
    id: uuidv4(),
    title: "April fools' is gone, but I'm still here.",
    start: "2023-04-14" + "T18:00:00",
    color: COLORS.green,
  },
  {
    id: uuidv4(),
    title: "Even though, this was a pre-made component :'O.",
    start: "2023-04-05" + "T18:52:02",
    end: "2023-04-06" + "T12:52:00",
    color: COLORS.green,
    font: FONTS.handwritten,
  },
  {
    id: uuidv4(),
    title: "Getting this all to work was harder than it seems.",
    start: "2023-04-04" + "T20:05:02",
    end: "2023-04-05" + "T13:00:00",
    color: COLORS.orange,
    font: FONTS.global,
  },
  {
    id: uuidv4(),
    title: "Does this color fit or not, I can't decide.",
    start: "2023-04-19" + "T19:15:00",
    end: "2023-04-20" + "T05:10:00",
    color: COLORS.pink,
  },
  {
    id: uuidv4(),
    title: "Please, don't have bugs, I've suffered enough.",
    start: "2023-04-20" + "T15:00:25",
    end: "2023-04-25" + "T16:15:25",
    color: COLORS.purple,
    font: FONTS.handwritten,
  },
];
