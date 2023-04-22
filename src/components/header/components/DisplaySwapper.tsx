import { Dayjs } from "dayjs";
import { currentSideMonthAtom, now } from "../../../lib/atoms/globalAtoms";
import { useAtom } from "jotai";

interface IDisplaySwapperProps {
  currentMonthData: Dayjs;
  setCurrentMonthData: React.Dispatch<React.SetStateAction<Dayjs>>;
}

const DisplaySwapper = ({ setCurrentMonthData }: IDisplaySwapperProps) => {
  const [, setCurrentSideMonthData] = useAtom(currentSideMonthAtom);

  return (
    <div className="flex items-center justify-items-center text-sm text-center">
      <button
        onClick={() => {
          setCurrentMonthData(now);
          setCurrentSideMonthData(now);
        }}
        className="py-2 px-4 mr-5 swapper-hover"
      >
        Today
      </button>
      <div className="bg-lightest-gray rounded-lg">
        <button onClick={() => {}} className="py-2 px-6 w-24 swapper-hover">
          Day
        </button>
        <button onClick={() => {}} className="py-2 px-6 w-24 swapper-hover">
          Week
        </button>
        <button onClick={() => {}} className="py-2 px-6 w-24 swapper-active">
          Month
        </button>
      </div>
    </div>
  );
};

export default DisplaySwapper;
