import dayjs, { Dayjs } from "dayjs";
import { IEvents } from "./eventsData";

const format = "YYYY-MM-DD";

/**
 * Function that creates a dayjs date from a formatted date string (see above), if not specified starting with hour & min 08:00.
 * @param date
 * @param hours
 * @returns dayjs date object
 */
export function getDateFromFormatted(
  date: Dayjs | null,
  hours: number[] = [8, 0]
): Dayjs | null {
  if (date === null) return null;
  const formatted = new Date(
    date.year(),
    date.month(),
    date.date(),
    hours[0],
    hours[1]
  );
  return dayjs(formatted);
}

/**
 * Function that will format the date into a specified format - needed as DB key.
 * @param date
 * @returns string in format "YYYY-MM-DD" - see above.
 */
export function getFormattedDate(
  date: Dayjs | null
): { date: string; hours: number[] } | null {
  if (date === null) return null;
  const formattedData = {
    date: dayjs(date).format(format),
    hours: [date.hour(), date.minute()],
  };
  return formattedData;
}

/* ------------------------------------------------------------------------------ */

export function getFormattedDateForDBInsertion(
  eventName: string,
  start: Dayjs,
  end: Dayjs,
  color: string,
  font: string
): IEvents {
  const formattedDataStart = getFormattedDate(start);
  const formattedDataEnd = getFormattedDate(end);
  const dataObj = {
    name: eventName,
    dateEnd: formattedDataEnd!.date,
    hourStart: formattedDataStart!.hours,
    hourEnd: formattedDataEnd!.hours,
    color: color,
    font: font,
  };
  return dataObj;
}
