import { Dispatch, SetStateAction } from "react";
import { LEGEND_COLORS } from "../../../../../lib/constants/valuesHardcoded";

interface INamePickerProps {
  activeFont: string;
  activeColor: string;
  eventName: string;
  setEventName: Dispatch<SetStateAction<string>>;
  isSubmitted: boolean;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  emptyName: boolean;
}

const NamePicker = ({
  activeFont,
  activeColor,
  eventName,
  setEventName,
  isSubmitted,
  setIsSubmitted,
  emptyName,
}: INamePickerProps) => {
  return (
    <div className="pt-3 pb-7 w-full">
      <input
        id="name"
        name="name"
        autoCorrect="off"
        unselectable="off"
        placeholder="What's the event?..."
        className={`border-none py-2 px-1 w-full outline-none font-bold ${activeFont} ${
          LEGEND_COLORS[activeColor as keyof typeof LEGEND_COLORS]
            .colorTextClass
        } resize-none text-2xl bg-transparent`}
        autoFocus={true}
        value={eventName}
        autoComplete="off"
        onChange={(val) => {
          setEventName(val.currentTarget.value);
          setIsSubmitted(false);
        }}
      />
      <small
        className={`text-error px-1 ${
          isSubmitted && emptyName ? "visible" : "hidden"
        }`}
      >
        Missing title.
      </small>
    </div>
  );
};

export default NamePicker;
