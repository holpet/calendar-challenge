import React, { Dispatch, SetStateAction } from "react";
import { LEGEND_COLORS } from "../../../../lib/modal_utils/modalUtils";

interface IColorAndFontPickerProps {
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  setActiveFont: Dispatch<SetStateAction<string>>;
}

const ColorAndFontPicker = ({
  activeColor,
  setActiveColor,
  setActiveFont,
}: IColorAndFontPickerProps) => {
  return (
    <div className="flex mr-2">
      {/* ------ colors ------ */}
      {LEGEND_COLORS.map((color, i) => {
        if (i === LEGEND_COLORS.length - 1) return;
        else
          return (
            <div key={i} className="flex items-center text-xs text-gray py-1">
              <div
                onClick={() => setActiveColor(color.name)}
                className={`${color.colorClass} ${
                  color.name === activeColor && "color-active"
                } rounded-full w-5 h-5 mr-2 hover:scale-110 hover:cursor-pointer transition-all`}
              ></div>
            </div>
          );
      })}
      {/* ------ font ------ */}
      <div className="text-gray font-bold text-lg flex items-baseline">
        <div
          onClick={() => setActiveFont("font-global")}
          className="w-5 h-5 font-global flex justify-center hover:text-purple hover:cursor-pointer transition-all"
        >
          A
        </div>
        <div
          onClick={() => setActiveFont("font-handwritten")}
          className="w-5 h-5 font-handwritten flex justify-center self-baseline hover:text-purple hover:cursor-pointer transition-all"
        >
          A
        </div>
      </div>
    </div>
  );
};

export default ColorAndFontPicker;
