import { atom } from "jotai";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en-gb";
import { CalendarApi, EventInput } from "@fullcalendar/core/index.js";
import { EVENTS } from "../db/eventsData";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

/* dayjs config */
dayjs.extend(utc);
dayjs.extend(timezone);
/* -------- set up calendar locale --------- */
dayjs.tz.setDefault("Europe/Prague");
export const now = dayjs().locale({
  ...locale,
});

/* current small side panel calendar date */
export const currentSideMonthAtom = atom<Dayjs>(now);

/* event date that is selected by either the small or the full calendar -> date for active event */
export const selectedDatesAtom = atom<{
  start: Dayjs | null;
  end: Dayjs | null;
}>({ start: null, end: null });

/* calendar ref that calls @fullcalendar API */
export const calendarAPIAtom = atom<CalendarApi | null>(null);

/* next/prev button clicked on the calendar -> check whether the year on the side panel needs to change accordingly */
export const viewSwitchedAtom = atom<boolean>(false);

/* EVENTS "mock" db object, where all our events are stored */
export const eventsAtom = atom<EventInput[]>(EVENTS);

/* currently edited event */
export const activeEventAtom = atom<EventInput | null>(null);
