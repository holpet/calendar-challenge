import SideMonthCalendar from "../calendar/month_calender/variants/SideMonthCalendar";
import Create from "./components/Create";
import Legend from "./components/Legend";

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
