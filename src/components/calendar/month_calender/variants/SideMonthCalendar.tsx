import CalendarHeader from "../MonthCalendarHeader";
import Calendar from "../MonthCalendar";
import { useAtom } from "jotai";
import { currentSideMonthAtom } from "../../../../lib/atoms/globalAtoms";

const SideMonthCalendar = () => {
  const [currentSideMonthData, setCurrentSideMonthData] = useAtom(
    currentSideMonthAtom
  );

  return (
    <div className="px-4">
      <CalendarHeader
        fullScreen={false}
        currentMonthData={currentSideMonthData}
        setCurrentMonthData={setCurrentSideMonthData}
      />
      <Calendar
        fullScreen={false}
        currentMonthData={currentSideMonthData}
        setCurrentMonthData={setCurrentSideMonthData}
      />
    </div>
  );
};

export default SideMonthCalendar;
