import { atom } from "jotai";
import dayjs from "dayjs";
import locale from "dayjs/locale/en-gb";

/* -------- set up calendar locale --------- */
export const now = dayjs().locale({
  ...locale,
});

export const currentSideMonthAtom = atom(now);
export const currentMainMonthAtom = atom(now);
