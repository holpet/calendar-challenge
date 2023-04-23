import { atom } from "jotai";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en-gb";
//import { EVENTS } from "../db/eventsData";

/* -------- set up calendar locale --------- */
dayjs.tz.setDefault("Europe/Prague");
export const now = dayjs()
  .locale({
    ...locale,
  })
  .utc(true);

export const currentSideMonthAtom = atom<Dayjs>(now);
export const currentMainMonthAtom = atom<Dayjs>(now);
export const selectedDateAtom = atom<Dayjs | null>(null);

//export const eventsAtom = atom<IEvents[]>(EVENTS);
