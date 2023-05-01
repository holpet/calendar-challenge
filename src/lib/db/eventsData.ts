import { v4 as uuidv4 } from "uuid";
import { EventInput } from "@fullcalendar/core";
import { TO_HEX_COLORS, FONTS } from "../constants/themeHardcoded";
import dayjs from "dayjs";

/**
 * This is a MOCK database obj with initial data.
 * */

const style = [""];

export const EVENTS: EventInput[] = [
  {
    id: uuidv4(),
    title: "Celine Dion still hasn't come.",
    start: "2023-05-05" + "T12:00:00",
    end: "2023-05-05" + "T13:00:00",
    color: TO_HEX_COLORS.purple,
    font: FONTS.global,
    classNames: [
      ...style,
      "border-none border-purple bg-purple-300 hover:bg-purple-500",
    ],
  },
  {
    id: uuidv4(),
    title: "Fun with @fc tentacles.",
    start: "2023-05-16" + "T12:00:00",
    end: "2023-05-16" + "T13:00:00",
    color: TO_HEX_COLORS.purple,
    font: FONTS.global,
    classNames: [...style, "bg-purple-300 hover:bg-purple-500"],
  },
  {
    id: uuidv4(),
    title: "Time zones suck.",
    start: "2023-05-16" + "T13:00:00",
    end: "2023-05-16" + "T14:00:00",
    color: TO_HEX_COLORS.green,
    font: FONTS.handwritten,
    classNames: [...style, "bg-green-300 hover:bg-green-500"],
  },
  {
    id: uuidv4(),
    title: "Hug a Pug a Day.",
    start: dayjs().format(),
    end: dayjs().add(1, "hour").format(),
    color: TO_HEX_COLORS.pink,
    font: FONTS.global,
    classNames: [...style, "bg-pink-300 hover:bg-pink-500"],
  },
  {
    id: uuidv4(),
    title: "Rock for people :).",
    start: "2023-05-13" + "T19:00:00",
    end: "2023-05-13" + "T20:00:00",
    color: TO_HEX_COLORS.green,
    font: FONTS.global,
    classNames: [...style, "bg-green-300 hover:bg-green-500"],
  },
  {
    id: uuidv4(),
    title: "Zombie Apocalypse No.1",
    start: "2023-06-09" + "T18:00:00",
    end: "2023-06-10" + "T22:00:00",
    color: TO_HEX_COLORS.green,
    font: FONTS.global,
    classNames: [...style, "bg-green-300 hover:bg-green-500"],
  },
  {
    id: uuidv4(),
    title: "April fools' is gone, but I'm still here.",
    start: "2023-05-19" + "T18:00:00",
    end: "2023-05-19" + "T19:00:00",
    color: TO_HEX_COLORS.pink,
    font: FONTS.handwritten,
    classNames: [...style, "bg-pink-300 hover:bg-pink-500"],
  },
  {
    id: uuidv4(),
    title: "A series of Unfortunate Events.",
    start: "2023-05-10" + "T18:52:02",
    end: "2023-05-11" + "T12:52:00",
    color: TO_HEX_COLORS.green,
    font: FONTS.global,
    classNames: style,
  },
  {
    id: uuidv4(),
    title: "Quidditch World Cup, watch and wonder.",
    start: "2023-05-09" + "T20:05:02",
    end: "2023-05-10" + "T13:00:00",
    color: TO_HEX_COLORS.pink,
    font: FONTS.global,
    classNames: style,
  },
  {
    id: uuidv4(),
    title: "Pineapple belongs on a pizza.",
    start: "2023-05-24" + "T19:15:00",
    end: "2023-05-26" + "T05:10:00",
    color: TO_HEX_COLORS.purple,
    font: FONTS.handwritten,
    classNames: style,
  },
  {
    id: uuidv4(),
    title: "Please, don't have bugs, I've suffered enough.",
    start: "2023-05-25" + "T15:00:25",
    end: "2023-05-30" + "T16:15:25",
    color: TO_HEX_COLORS.pink,
    font: FONTS.global,
    classNames: style,
  },
];
