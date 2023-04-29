import { Dayjs } from "dayjs";
import { default as CL } from "@mui/icons-material/ChevronLeft";
import { default as CR } from "@mui/icons-material/ChevronRight";

interface ICalendarHeaderProps {
  currentMonthData: Dayjs;
  setCurrentMonthData: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const CalendarHeader = ({
  currentMonthData,
  setCurrentMonthData,
}: ICalendarHeaderProps) => {
  /* ----- Handle previous and next month changes ----- */
  const nextMonth = () => {
    const plus = currentMonthData.add(1, "month");
    setCurrentMonthData(plus);
  };
  const prevMonth = () => {
    const minus = currentMonthData.subtract(1, "month");
    setCurrentMonthData(minus);
  };

  const chavet = (side: string) => {
    return (
      <button
        onClick={() => (side === "left" ? prevMonth() : nextMonth())}
        className="hover:bg-lightest-gray rounded-full flex flex-col text-gray transition-colors"
      >
        {side === "left" ? <CL /> : <CR />}
      </button>
    );
  };

  return (
    <div className="flex items-center justify-between my-3">
      {chavet("left")}
      <p className="text-purple font-bold text-sm text-center w-28">
        {currentMonthData.format("MMM")}&nbsp;
        <span className="text-gray font-thin">
          {currentMonthData.format("YYYY")}
        </span>
      </p>
      {chavet("right")}
    </div>
  );
};

export default CalendarHeader;
