import { atom } from "jotai";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en-gb";
import { EVENTS } from "../db/eventsData";

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

// testing
const date1 = now.format("YYYY-MM-DD");
const date2 = dayjs("2023-04-05");
const obj = dayjs(date1);
const obj2 = dayjs(date2);
console.log(obj);

const evData = {
  [date1]: { multi: [], single: [] },
};

const ev = new Map();
