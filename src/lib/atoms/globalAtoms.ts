import { atom } from "jotai";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en-gb";
import { CalendarApi, EventInput } from "@fullcalendar/core/index.js";
import { EVENTS } from "../db/eventsData";

/* -------- set up calendar locale --------- */
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
