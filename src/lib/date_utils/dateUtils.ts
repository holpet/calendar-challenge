import dayjs, { Dayjs } from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
import objectPlugin from "dayjs/plugin/toObject";
import isTodayPlugin from "dayjs/plugin/isToday";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

/* dayjs config */
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekdayPlugin);
dayjs.extend(objectPlugin);
dayjs.extend(isTodayPlugin);

export interface IFormattedObj {
  day: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isCurrentDay: boolean;
  origFormat: Dayjs;
}

/**
 * Function that will format the date object for easier manipulation during grid preparation.
 * @param date
 * @returns see interface above.
 */
const formatDateObject = (
  date: Dayjs,
  currentMonthData: Dayjs
): IFormattedObj => {
  const clonedObj = { ...date.toObject() };
  const formattedObject = {
    day: clonedObj.date,
    month: clonedObj.months,
    year: clonedObj.years,
    isCurrentMonth: clonedObj.months === currentMonthData.month(),
    isCurrentDay: date.isToday(),
    origFormat: date,
  };
  return formattedObject;
};

export interface IAllDays {
  dates: IFormattedObj[];
}

/**
 * Function that creates an array of weeks in a current month.
 * 7 days in 5-6 rows, starting with Monday.
 * @param currentMonthData
 * @returns see interface above.
 */
export const getAllDays = (
  currentMonthData: Dayjs
): React.SetStateAction<IAllDays[] | null> => {
  let currentDate = currentMonthData.startOf("month").weekday(0);
  const nextMonth = currentMonthData.add(1, "month").month();
  let allDates = [];
  let weekDates = [];
  let weekCounter = 1;
  while (currentDate.weekday(0).toObject().months !== nextMonth) {
    const formatted = formatDateObject(currentDate, currentMonthData);
    weekDates.push(formatted);
    if (weekCounter === 7) {
      allDates.push({ dates: weekDates });
      weekDates = [];
      weekCounter = 0;
    }
    weekCounter++;
    currentDate = currentDate.add(1, "day");
  }
  return allDates;
};
