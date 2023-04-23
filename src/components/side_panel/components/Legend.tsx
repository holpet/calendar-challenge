import { default as Info } from "@mui/icons-material/Info";
import { colors } from "../SidePanel";

export const LEGEND_COLORS = [
  {
    meaning: "High Priority",
    colorClass: "bg-orange",
  },
  {
    meaning: "Mid Priority",
    colorClass: "bg-green",
  },
  {
    meaning: "Special Event",
    colorClass: "bg-pink",
  },
  {
    meaning: "Standard Event",
    colorClass: "bg-white border border-light-gray",
  },
];

const Legend = () => {
  return (
    <div className="mt-8 break-all overflow-hidden">
      <div className="flex justify-between items-center mb-4 p-1 border-b-[5px] border-lightest-gray hover:cursor-pointer">
        <div className="hover:scale-105 transition-all">
          <Info fontSize="large" sx={{ color: `${colors.purple1}` }} />
        </div>
        <h3 className="text-right font-light text-base">...Legend</h3>
      </div>
      <div className="px-2">
        {LEGEND_COLORS.map((color, i) => {
          return (
            <div key={i} className="flex items-center text-xs text-gray py-1">
              <div
                className={`${color.colorClass} rounded-full w-5 h-5 mr-2`}
              ></div>
              <p>{color.meaning}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Legend;
