import { atom } from "jotai";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en-gb";
import { CalendarApi } from "@fullcalendar/core/index.js";

/* -------- set up calendar locale --------- */
export const now = dayjs().locale({
  ...locale,
});

export const currentSideMonthAtom = atom<Dayjs>(now);
export const currentMainMonthAtom = atom<Dayjs>(now);
export const selectedDateAtom = atom<Dayjs | null>(null);
export const calendarAPIAtom = atom<CalendarApi | null>(null);

//export const eventsAtom = atom<IEvents[]>(EVENTS);
