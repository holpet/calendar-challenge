import { Dispatch, useState } from "react";
import DatePicker from "./DatePicker";
import { SetStateAction, useAtom } from "jotai";
import {
  eventsAtom,
  now,
  selectedDatesAtom,
} from "../../../../lib/atoms/globalAtoms";
import dayjs, { Dayjs } from "dayjs";
import { getDateFromFormatted } from "../../../../lib/db/dbUtils";
import { v4 as uuidv4 } from "uuid";
import ColorAndFontPicker from "./ColorAndFontPicker";
import NamePicker from "./NamePicker";

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
  const [selectedDates] = useAtom(selectedDatesAtom);

  /* ---------------------------------------------------- form data states */
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState<Dayjs | null>(
    selectedDates.start || getDateFromFormatted(now)
  );
  const [endDate, setEndDate] = useState<Dayjs | null>(
    selectedDates.end || getDateFromFormatted(now)
  );
  const [events, setEvents] = useAtom(eventsAtom);

  /* ------------------------------------------------------ form validation */
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emptyName, setEmptyName] = useState(true);
  const [errorDate, setErrorDate] = useState(startDate! > endDate!);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!startDate || !endDate) return;
    if (eventName === "") {
      setIsSubmitted(true);
      setEmptyName(true);
      return;
    }
    if (errorDate) return;
    const dbObj = {
      id: uuidv4() + "",
      title: eventName,
      start: dayjs(startDate).utc().format(),
      end: dayjs(endDate).utc().format(),
      color: activeColor,
      font: activeFont,
    };
    setEvents([...events, dbObj]);
    //alert(JSON.stringify(EVENTS));
    setOpen(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {/* ------ NAME OF THE EVENT ------ */}
      <NamePicker
        activeFont={activeFont}
        activeColor={activeColor}
        eventName={eventName}
        setEventName={setEventName}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        emptyName={emptyName}
      />

      {/* ------ DATE OF THE EVENT ------ */}
      <DatePicker
        setStartDate={setStartDate}
        startDate={startDate}
        setEndDate={setEndDate}
        endDate={endDate}
        errorDate={errorDate}
        setErrorDate={setErrorDate}
      />

      {/* ------ COLOR & FONT OF THE EVENT ------ */}
      <div className="flex justify-between items-center">
        <ColorAndFontPicker
          activeColor={activeColor}
          setActiveColor={setActiveColor}
          setActiveFont={setActiveFont}
        />

        {/* ------ save event ------ */}
        <button type="submit" className="gen-link">
          SAVE
        </button>
      </div>
    </form>
  );
};

export default Form;
