import { Dayjs } from "dayjs";
import { default as CL } from "@mui/icons-material/ChevronLeft";
import { default as CR } from "@mui/icons-material/ChevronRight";

interface ICalendarHeaderProps {
  fullScreen: boolean;
  currentMonthData: Dayjs;
  setCurrentMonthData: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const CalendarHeader = ({
  fullScreen,
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
        {side === "left" ? (
          <CL fontSize={`${fullScreen ? "large" : "inherit"}`} />
        ) : (
          <CR fontSize={`${fullScreen ? "large" : "inherit"}`} />
        )}
      </button>
    );
  };

  const mainHeader = () => {
    return (
      <>
        {chavet("left")}
        <h2 className="text-3xl font-bold mx-6 text-center w-64">
          {currentMonthData.format("MMMM")}
          <span className="font-thin"> {currentMonthData.format("YYYY")}</span>
        </h2>
        {chavet("right")}
      </>
    );
  };

  const sideHeader = () => {
    return (
      <div className="flex items-center justify-between my-3">
        <p className="text-gray-500 font-bold text-sm whitespace-nowrap pr-10 pl-1 text-center w-28">
          {currentMonthData.format("MMM")}
          <span className="font-normal">
            {" "}
            {currentMonthData.format("YYYY")}
          </span>
        </p>
        <div className="flex justify-center">
          {chavet("left")}
          {chavet("right")}
        </div>
      </div>
    );
  };

  return <>{fullScreen ? mainHeader() : sideHeader()}</>;
};

export default CalendarHeader;
