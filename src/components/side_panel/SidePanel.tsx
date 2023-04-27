import { useAtom } from "jotai";
import { calendarAPIAtom, viewSwitchedAtom } from "../../lib/atoms/globalAtoms";
import SideMonthCalendar from "../calendar/month_calender/variants/SideMonthCalendar";
import Create from "./components/Create";
import Legend from "./components/Legend";
import { useEffect, useState } from "react";

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
    <div className="p-4 min-w-side-panel max-w-xs h-full flex flex-col">
      <div className="h-[44px] mb-5 bg-purple flex items-center justify-center text-white text-2xl">
        {currentYear !== null && currentYear}
      </div>
      <Create />
      <SideMonthCalendar />
      <Legend />
      <div className="h-full flex-1 border-light-gray border mt-5"></div>
    </div>
  );
};

export default SidePanel;
