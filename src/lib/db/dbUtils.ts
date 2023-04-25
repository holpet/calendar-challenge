import dayjs, { Dayjs } from "dayjs";

/* FORMATTER  */
/* ------------------------------------------------------------------------------ */

const format = "YYYY-MM-DD";

/**
 * Function that creates a dayjs date from a formatted date string (see above), if not specified starting with hour & min 08:00.
 * @param date
 * @param hours
 * @returns a new "dayjs" object
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
 * Function that will turn the "dayjs" object into a string in specified format + separate hours & minute in an array.
 * @param date
 * @returns object with #1: "string" in a format "YYYY-MM-DD", #2 an "array" with 2 numbers (hours & minutes)
 */
export function getFormattedDateData(
  date: Dayjs | null
): { date: string; hours: number[] } | null {
  if (date === null) return null;
  const formattedData = {
    date: dayjs(date).format(format),
    hours: [date.hour(), date.minute()],
  };
  return formattedData;
}
