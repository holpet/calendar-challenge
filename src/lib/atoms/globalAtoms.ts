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

export const currentSideMonthAtom = atom<Dayjs>(now);
export const currentMainMonthAtom = atom<Dayjs>(now);
export const selectedDatesAtom = atom<{
  start: Dayjs | null;
  end: Dayjs | null;
}>({ start: null, end: null });
export const calendarAPIAtom = atom<CalendarApi | null>(null);
export const eventsAtom = atom<EventInput[]>(EVENTS);
export const activeEventAtom = atom<EventInput | null>(null);
