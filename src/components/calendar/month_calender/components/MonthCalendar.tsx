import dayjs, { Dayjs } from "dayjs";
import { Fragment, useEffect, useState } from "react";
import {
  IAllDays,
  IFormattedObj,
  getAllDays,
} from "../../../../lib/date_utils/dateUtils";
import {
  calendarAPIAtom,
  now,
  selectedDatesAtom,
  viewSwitchedAtom,
} from "../../../../lib/atoms/globalAtoms";
import { useAtom } from "jotai";

interface ICalenderProps {
  currentMonthData: Dayjs;
  setCurrentMonthData: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const MonthCalendar = ({
  currentMonthData,
  setCurrentMonthData,
}: ICalenderProps) => {
  const [allDays, setAllDays] = useState<IAllDays[] | null>(null);
  const [selectedDates, setSelectedDates] = useAtom(selectedDatesAtom);
  const [calendarAPI] = useAtom(calendarAPIAtom);
  const [, setViewSwitched] = useAtom(viewSwitchedAtom);

  useEffect(() => {
    const allDays = getAllDays(currentMonthData);
    setAllDays(allDays);
  }, [currentMonthData]);

  /* GO TO FULL CALENDAR DATE */
  function handleSelection(d: IFormattedObj) {
    const date = dayjs(d.origFormat);
    setSelectedDates({
      start: dayjs(date).startOf("day"),
      end: dayjs(date).add(1, "day").startOf("day"),
    });
    calendarAPI?.gotoDate(date.format());
    setViewSwitched(true);
    setCurrentMonthData(date);
  }

  /* FIRST ROW: create names of days */
  const renderNameOfDays = () => {
    const dateFormat = "dddd";
    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-sm text-center">
          <span>{now.weekday(i).format(dateFormat).charAt(0)}</span>
        </div>
      );
    }
    return <>{days}</>;
  };

  /* NEXT 5-6 ROWS: create numbered days */
  const renderAllDays = () => {
    const rows = new Array();
    let days_7 = new Array();
    if (allDays === null) return;
    allDays.forEach((week, idx) => {
      week.dates.forEach((d, i) => {
        days_7.push(
          <div
            key={i}
            /* handle color selections */
            onClick={() => handleSelection(d)}
            className="hover:cursor-pointer my-1"
          >
            <span
              className={`${
                !d.isCurrentMonth
                  ? "disabled"
                  : d.isCurrentDay
                  ? "highlighted bg-purple"
                  : ""
              } ${
                selectedDates.start?.isSame(d.origFormat) &&
                "highlighted bg-light-purple"
              }
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
        className={`text-xs font-semibold grid grid-cols-7 my-1 bg-light-gray rounded-sm`}
      >
        {renderNameOfDays()}
      </div>
      <div className={`grid grid-cols-7 text-center text-xs`}>
        {renderAllDays()}
      </div>
    </>
  );
};

export default MonthCalendar;
