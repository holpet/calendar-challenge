import Calendar from "../MonthCalendar";
import { useAtom } from "jotai";
import { currentMainMonthAtom } from "../../../../lib/atoms/globalAtoms";

const MainMonthCalendar = () => {
  const [currentMainMonthData, setCurrentMainMonthData] = useAtom(
    currentMainMonthAtom
  );

  return (
    <>
      <Calendar
        fullScreen={true}
        currentMonthData={currentMainMonthData}
        setCurrentMonthData={setCurrentMainMonthData}
      />
    </>
  );
};

export default MainMonthCalendar;
