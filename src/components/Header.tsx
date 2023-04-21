import { useState } from "react";
import dayjs from "dayjs";
/* ------------- */
import { logo_grad, logo_grad2 } from "../assets/img";
import { default as CL } from "@mui/icons-material/ChevronLeft";
import { default as CR } from "@mui/icons-material/ChevronRight";

const Header = () => {
  //const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const [monthIndex, setMonthIndex] = useState(7);

  function handlePrevMonth() {
    // setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    //setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    // setMonthIndex(
    //   monthIndex === dayjs().month()
    //     ? monthIndex + Math.random()
    //     : dayjs().month()
    //);
  }

  return (
    <header className="px-4 py-2 flex items-center justify-between border-b border-light-gray">
      <div className="flex justify-start items-center">
        {/* ----- CALENDAR ICON ----- */}
        <div className="relative">
          <img
            src={logo_grad2}
            alt="calendar"
            className="mr-2 min-w-icon-big absolute opacity-0 hover:opacity-100 transition-opacity"
          />
          <img
            src={logo_grad}
            alt="calendar"
            className="mr-2  min-w-icon-big transition-opacity"
          />
        </div>

        {/* ----- CURRENT MONTH + chavets ----- */}
        <button
          onClick={handlePrevMonth}
          className="hover:bg-lightest-gray rounded-full text-gray transition-colors"
        >
          <CL fontSize="large" onClick={handlePrevMonth} />
        </button>
        <h2 className="text-3xl font-bold mx-6">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM")}
          <span className="font-thin">
            {" "}
            {dayjs(new Date(dayjs().year(), monthIndex)).format("YYYY")}
          </span>
        </h2>
        <button
          onClick={handleNextMonth}
          className="hover:bg-lightest-gray rounded-full text-gray transition-colors"
        >
          <CR fontSize="large" />
        </button>
      </div>

      {/* ----- DISPLAY SWAPPER ----- */}
      <div className="flex items-center text-sm ">
        <button onClick={handleReset} className="py-2 px-4 mr-5">
          Today
        </button>
        <div className="bg-lightest-gray rounded-lg">
          <button onClick={handleReset} className="py-2 px-6 w-24">
            Day
          </button>
          <button
            onClick={handleReset}
            className="py-2 px-6 w-24 m-1 rounded-lg bg-purple text-white"
          >
            Week
          </button>
          <button onClick={handleReset} className="py-2 px-6 w-24">
            Month
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
