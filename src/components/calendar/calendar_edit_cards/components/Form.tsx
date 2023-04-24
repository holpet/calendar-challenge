import { Dispatch, useState } from "react";
import { LEGEND_COLORS } from "../../../../lib/constants";
import DatePicker from "./DatePicker";
import { SetStateAction, useAtom } from "jotai";
import { now, selectedDateAtom } from "../../../../lib/atoms/globalAtoms";
import { Dayjs } from "dayjs";
import {
  getDateFromFormatted,
  getFormattedDateForDBInsertion,
} from "../../../../lib/db/dbUtils";
import { EVENTS } from "../../../../lib/db/eventsData";

interface IForm {
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  activeFont: string;
  setActiveFont: Dispatch<SetStateAction<string>>;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}

const Form = ({
  setOpen,
  activeColor,
  setActiveColor,
  activeFont,
  setActiveFont,
}: IForm) => {
  const [selectedDate] = useAtom(selectedDateAtom);

  /* ---------------------------------------------------- form data states */
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(
    getDateFromFormatted(selectedDate) || getDateFromFormatted(now)
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    getDateFromFormatted(selectedDate)?.add(4, "hour") ||
      getDateFromFormatted(now)!.add(4, "hour")
  );

  /* ---------------------------------------------------- form validation */
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emptyName, setEmptyName] = useState(true);
  const [errorDate, setErrorDate] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!startDate || !endDate) return;
    if (eventName === "") {
      setIsSubmitted(true);
      setEmptyName(true);
      return;
    }
    if (errorDate) return;
    const dbObj = getFormattedDateForDBInsertion(
      eventName,
      startDate,
      endDate,
      activeColor,
      activeFont
    );
    EVENTS.push(dbObj);
    console.log(EVENTS);
    setOpen(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* ------ NAME OF THE EVENT ------ */}
      <div className="pt-3 pb-7 w-full">
        <input
          id="name"
          name="name"
          autoCorrect="off"
          placeholder="What's the event?..."
          className={`border-none py-2 px-1 w-full outline-none font-bold ${activeFont} resize-none text-2xl bg-white-purple text-purple`}
          autoFocus={true}
          value={eventName}
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
          Missing name.
        </small>
      </div>

      {/* ------ DATE OF THE EVENT ------ */}
      <DatePicker
        setStartDate={setStartDate}
        startDate={startDate}
        setEndDate={setEndDate}
        endDate={endDate}
        errorDate={errorDate}
        setErrorDate={setErrorDate}
      />

      {/* ------ colors ------ */}
      <div className="flex justify-between items-center">
        <div className="flex mr-2">
          {LEGEND_COLORS.map((color, i) => {
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

        {/* ------ save event ------ */}
        <button type="submit" className="gen-link">
          SAVE
        </button>
      </div>
    </form>
  );
};

export default Form;
