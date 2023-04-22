import Calendar from "../MonthCalendar";
import { useAtom } from "jotai";
import {
  currentMainMonthAtom,
  currentSideMonthAtom,
} from "../../../../lib/atoms/globalAtoms";

const MainMonthCalendar = () => {
  const [currentMainMonthData, setCurrentMainMonthData] = useAtom(
    currentMainMonthAtom
  );
  const [currentSideMonthData, setCurrentSideMonthData] = useAtom(
    currentSideMonthAtom
  );

  return (
    <>
      <Calendar
        fullScreen={true}
        currentMonthData={currentMainMonthData}
        setCurrentMonthData={setCurrentMainMonthData}
        currentOtherMonthData={currentSideMonthData}
        setCurrentOtherMonthData={setCurrentSideMonthData}
      />
    </>
  );
};

export default MainMonthCalendar;
