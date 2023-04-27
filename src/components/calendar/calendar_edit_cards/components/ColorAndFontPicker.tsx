import { Dispatch, SetStateAction } from "react";
import { LEGEND_COLORS } from "../../../../lib/modal_utils/modalUtils";
import { FONTS } from "../../../../lib/themeHardcoded";

interface IColorAndFontPickerProps {
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  setActiveFont: Dispatch<SetStateAction<string>>;
}

const ColorAndFontPicker = ({
  setActiveColor,
  setActiveFont,
}: IColorAndFontPickerProps) => {
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
          className="w-5 h-5 font-global flex justify-center hover:text-purple hover:cursor-pointer transition-all"
        >
          A
        </div>
        <div
          onClick={() => setActiveFont(FONTS.handwritten)}
          className="w-5 h-5 font-handwritten flex justify-center self-baseline hover:text-purple hover:cursor-pointer transition-all"
        >
          A
        </div>
      </div>
    </div>
  );
};

export default ColorAndFontPicker;
