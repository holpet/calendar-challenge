import { atom } from "jotai";
import dayjs, { Dayjs } from "dayjs";
import locale from "dayjs/locale/en-gb";

/* -------- set up calendar locale --------- */
export const now = dayjs().locale({
  ...locale,
});

export const currentSideMonthAtom = atom<Dayjs>(now);
export const currentMainMonthAtom = atom<Dayjs>(now);
export const selectedDateAtom = atom<Dayjs | null>(null);
