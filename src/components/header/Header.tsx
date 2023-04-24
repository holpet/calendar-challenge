import MonthCalendarHeader from "../calendar/month_calender/components/MonthCalendarHeader";
import { currentMainMonthAtom } from "../../lib/atoms/globalAtoms";
import { useAtom } from "jotai";
import Logo from "./components/Logo";
import DisplaySwapper from "./components/DisplaySwapper";

const Header = () => {
  const [currentMainMonthData, setCurrentMainMonthData] = useAtom(
    currentMainMonthAtom
  );

  return (
    <header className="px-6 flex items-center justify-between border-b border-light-gray bg-white sticky top-0 w-full h-18 z-2">
      <div className="flex justify-start items-center">
        <Logo />
        <MonthCalendarHeader
          fullScreen={true}
          currentMonthData={currentMainMonthData}
          setCurrentMonthData={setCurrentMainMonthData}
        />
      </div>
      <DisplaySwapper
        currentMonthData={currentMainMonthData}
        setCurrentMonthData={setCurrentMainMonthData}
      />
    </header>
  );
};

export default Header;
