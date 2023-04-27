import CalendarHeader from "../components/MonthCalendarHeader";
import Calendar from "../MonthCalendar";
import { useAtom } from "jotai";
import { currentSideMonthAtom } from "../../../../lib/atoms/globalAtoms";

const SideMonthCalendar = () => {
  const [currentSideMonthData, setCurrentSideMonthData] = useAtom(
    currentSideMonthAtom
  );

  return (
    <div>
      <CalendarHeader
        currentMonthData={currentSideMonthData}
        setCurrentMonthData={setCurrentSideMonthData}
      />
      <Calendar
        currentMonthData={currentSideMonthData}
        setCurrentMonthData={setCurrentSideMonthData}
      />
    </div>
  );
};

export default SideMonthCalendar;
