import CalendarHeader from "../MonthCalendarHeader";
import Calendar from "../MonthCalendar";
import { useAtom } from "jotai";
import {
  currentMainMonthAtom,
  currentSideMonthAtom,
} from "../../../../lib/atoms/globalAtoms";

const SideMonthCalendar = () => {
  const [currentSideMonthData, setCurrentSideMonthData] = useAtom(
    currentSideMonthAtom
  );
  const [currentMainMonthData, setCurrentMainMonthData] = useAtom(
    currentMainMonthAtom
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
        currentOtherMonthData={currentMainMonthData}
        setCurrentOtherMonthData={setCurrentMainMonthData}
      />
    </div>
  );
};

export default SideMonthCalendar;
