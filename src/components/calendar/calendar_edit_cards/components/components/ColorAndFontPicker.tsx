import { Dispatch, SetStateAction } from "react";
import { LEGEND_COLORS } from "../../../../../lib/constants/valuesHardcoded";
import { FONTS } from "../../../../../lib/constants/themeHardcoded";

interface IColorAndFontPickerProps {
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  setActiveFont: Dispatch<SetStateAction<string>>;
}

const ColorAndFontPicker = ({
  setActiveColor,
  setActiveFont,
}: IColorAndFontPickerProps) => {
  const style = {
    font:
      "w-5 h-5 flex justify-center hover:text-purple hover:cursor-pointer transition-all",
  };

  return (
    <div className="flex mr-2">
      {/* ------ colors ------ */}
      {Object.values(LEGEND_COLORS)
        .slice(0, Object.keys(LEGEND_COLORS).length - 1)
        .map((color, i) => (
          <div key={i} className="flex items-center text-xs text-gray py-1">
            <div
              onClick={() => setActiveColor(color.name)}
              className={`${color.colorClass} rounded-full w-5 h-5 mr-2 hover:scale-110 hover:cursor-pointer transition-all`}
            ></div>
          </div>
        ))}
      {/* ------ font ------ */}
      <div className="text-gray font-bold text-lg flex items-baseline">
        <div
          onClick={() => setActiveFont(FONTS.global)}
          className={`${style.font} font-global`}
        >
          A
        </div>
        <div
          onClick={() => setActiveFont(FONTS.handwritten)}
          className={`${style.font} font-handwritten self-baseline`}
        >
          A
        </div>
      </div>
    </div>
  );
};

export default ColorAndFontPicker;
