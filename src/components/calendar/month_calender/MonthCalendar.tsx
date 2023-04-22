import dayjs, { Dayjs } from "dayjs";
import weekdayPlugin from "dayjs/plugin/weekday";
import isTodayPlugin from "dayjs/plugin/isToday";
dayjs.extend(weekdayPlugin);
dayjs.extend(isTodayPlugin);
import { Fragment, useEffect, useState } from "react";
import {
  IAllDays,
  IFormattedObj,
  formatDateObjectToOrig,
  getAllDays,
  isSameDate,
} from "../../../lib/date_utils/dateUtils";
import { now, selectedDateAtom } from "../../../lib/atoms/globalAtoms";
import { useAtom } from "jotai";

interface ICalenderProps {
  fullScreen?: boolean;
  currentMonthData: Dayjs;
  setCurrentMonthData: React.Dispatch<React.SetStateAction<Dayjs>>;
  currentOtherMonthData: Dayjs;
  setCurrentOtherMonthData: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const MonthCalendar = ({
  fullScreen = true,
  currentMonthData,
  setCurrentMonthData,
  currentOtherMonthData,
  setCurrentOtherMonthData,
}: ICalenderProps) => {
  const [allDays, setAllDays] = useState<IAllDays[] | null>(null);
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);

  useEffect(() => {
    const allDays = getAllDays(currentMonthData);
    setAllDays(allDays);
  }, [currentMonthData]);

  function handleSelection(d: IFormattedObj) {
    const date = d.origFormat;
    setSelectedDate(date);
    setCurrentOtherMonthData(date);
    setCurrentMonthData(date);
  }

  /* create NAMES OF DAYS */
  const renderNameOfDays = () => {
    const dateFormat = "dddd";
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className={` ${
            fullScreen ? "text-center text-2xl px-2" : "text-sm text-center"
          }`}
        >
          <span>
            {fullScreen
              ? now.weekday(i).format(dateFormat).slice(0, 3)
              : now.weekday(i).format(dateFormat).charAt(0)}
          </span>
        </div>
      );
    }
    return <>{days}</>;
  };

  /* create ARRAY OF NUMBERED DAYS */
  const renderAllDays = () => {
    const rows = new Array();
    let days_7 = new Array();
    if (allDays === null) return;
    allDays.forEach((week, idx) => {
      week.dates.forEach((d, i) => {
        days_7.push(
          <div
            key={i}
            /* select a date */
            onClick={() => handleSelection(d)}
            className={`hover:cursor-pointer ${
              fullScreen
                ? "px-2 py-1 border-t border-l border-light-gray"
                : "my-1"
            } ${
              fullScreen && d.isCurrentDay && "shadow-highlight shadow-purple"
            } ${
              fullScreen &&
              selectedDate?.isSame(d.origFormat) &&
              "shadow-highlight shadow-light-purple"
            }`}
          >
            <span
              className={`${
                !d.isCurrentMonth ? "disabled" : d.isCurrentDay ? "today" : ""
              } ${selectedDate?.isSame(d.origFormat) && "selected"}
              `}
            >
              {d.day}
            </span>
          </div>
        );
      });
      rows.push(<Fragment key={idx}>{days_7}</Fragment>);
      days_7 = [];
    });
    return <>{rows}</>;
  };

  return (
    <>
      <div
        className={`text-lg grid grid-cols-7 grid-flow-row ${
          fullScreen
            ? "h-10 items-center bg-gradient-to-r from-light-purple to-lightest-purple rounded-t-lg"
            : "my-1 bg-gradient-to-r from-light-purple to-lightest-purple rounded-md"
        }`}
      >
        {renderNameOfDays()}
      </div>
      <div
        className={`text-lg grid grid-cols-7 ${
          fullScreen
            ? "min-h-[calc(100%-2.5rem)] border-r border-b border-light-gray text-right"
            : "text-center text-xs"
        }`}
      >
        {renderAllDays()}
      </div>
    </>
  );
};

export default MonthCalendar;
