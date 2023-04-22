import SideMonthCalendar from "../calendar/month_calender/variants/SideMonthCalendar";
import { default as Add } from "@mui/icons-material/AddCircle";
import { default as Info } from "@mui/icons-material/Info";

const colors = {
  purple1: "#7e45db",
  purple2: "#b8afec",
};

const SidePanel = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-8 p-1 border-b-[5px] border-lightest-gray hover:cursor-pointer">
        <h3 className="ml-1 font-light text-base">Create...</h3>
        <div className="hover:scale-105 transition-all">
          <Add fontSize="large" sx={{ color: `${colors.purple1}` }} />
        </div>
      </div>
      <SideMonthCalendar />
      <div className="mt-8">
        <div className="flex justify-between items-center mb-4 p-1 border-b-[5px] border-lightest-gray hover:cursor-pointer">
          <div className="hover:scale-105 transition-all">
            <Info fontSize="large" sx={{ color: `${colors.purple1}` }} />
          </div>
          <h3 className="text-right font-light text-base">...Legend</h3>
        </div>
        <div className="px-2">
          <div className="flex items-center text-xs text-gray py-1">
            <div className="bg-orange rounded-full w-5 h-5 mr-2"></div>
            <p>High Priority</p>
          </div>
          <div className="flex items-center text-xs text-gray py-1">
            <div className="bg-green rounded-full w-5 h-5 mr-2"></div>
            <p>Mid Priority</p>
          </div>
          <div className="flex items-center text-xs text-gray py-1">
            <div className="bg-light-pink rounded-full w-5 h-5 mr-2"></div>
            <p>Standard Event</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
