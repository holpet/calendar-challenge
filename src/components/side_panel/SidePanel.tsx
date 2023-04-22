import SideMonthCalendar from "../calendar/month_calender/variants/SideMonthCalendar";
import Create from "./components/Create";
import Legend from "./components/Legend";

/* colors for changing mui icon */
export const colors = {
  purple1: "#7e45db",
  purple2: "#b8afec",
};

const SidePanel = () => {
  return (
    <div className="p-4 min-w-side-panel max-w-xs">
      <Create />
      <SideMonthCalendar />
      <Legend />
    </div>
  );
};

export default SidePanel;
