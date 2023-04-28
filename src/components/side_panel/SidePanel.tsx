import { useAtom } from "jotai";
import { calendarAPIAtom, viewSwitchedAtom } from "../../lib/atoms/globalAtoms";
import SideMonthCalendar from "../calendar/month_calender/SideMonthCalendar";
import Create from "./components/Create";
import Legend from "./components/Legend";
import { useEffect, useState } from "react";
import Tentacles from "../gfx_elems/Tentacles";
import { METRICS } from "../../lib/constants/themeHardcoded";

const SidePanel = () => {
  const [calendarAPI] = useAtom(calendarAPIAtom);
  const [viewSwitched, setViewSwitched] = useAtom(viewSwitchedAtom);
  const [currentYear, setCurrentYear] = useState<string | null>(null);

  useEffect(() => {
    const year = !calendarAPI
      ? new Date().getFullYear() + ""
      : calendarAPI.getDate().getFullYear() + "";
    setCurrentYear(year);
    setViewSwitched(false);
  }, [viewSwitched, calendarAPI]);

  return (
    <div className="p-4 w-side-panel h-full flex flex-col">
      <div
        className={`${METRICS.fillHeaderHeight} mb-5 bg-purple flex items-center justify-center text-white text-2xl`}
      >
        {currentYear !== null && currentYear}
      </div>
      <Create />
      <SideMonthCalendar />
      <Legend />
      <div className="h-full flex-1 bg-white-gray border-light-gray border mt-5 relative">
        <Tentacles type={"side"} />
      </div>
    </div>
  );
};

export default SidePanel;
