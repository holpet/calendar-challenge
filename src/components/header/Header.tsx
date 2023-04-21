import MonthCalendarHeader from "../calendar/month_calender/MonthCalendarHeader";
import { currentMainMonthAtom } from "../../lib/atoms/globalAtoms";
import { useAtom } from "jotai";
import Logo from "./components/Logo";
import DisplaySwapper from "./components/DisplaySwapper";

const Header = () => {
  const [currentMainMonthData, setCurrentMainMonthData] = useAtom(
    currentMainMonthAtom
  );

  return (
    <header className="px-6 py-2 flex items-center justify-between border-b border-light-gray sticky top-0 w-full h-20 z-2">
      <div className="flex justify-start items-center">
        <Logo />
        <MonthCalendarHeader
          fullScreen={true}
          currentMonthData={currentMainMonthData}
          setCurrentMonthData={setCurrentMainMonthData}
        />
      </div>
      <DisplaySwapper />
    </header>
  );
};

export default Header;
