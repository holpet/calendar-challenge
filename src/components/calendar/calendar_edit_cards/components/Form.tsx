import { Dispatch, useState } from "react";
import DatePicker from "./components/DatePicker";
import { SetStateAction, useAtom } from "jotai";
import { activeEventAtom, eventsAtom } from "../../../../lib/atoms/globalAtoms";
import { Dayjs } from "dayjs";
import ColorAndFontPicker from "./components/ColorAndFontPicker";
import NamePicker from "./components/NamePicker";
import {
  addEditedEventToDB,
  addNewEventToDB,
} from "../../../../lib/db/dbUtils";

interface IForm {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  eventName: string;
  setEventName: Dispatch<SetStateAction<string>>;
  startDate: Dayjs | null;
  setStartDate: Dispatch<SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: Dispatch<SetStateAction<Dayjs | null>>;
  activeColor: string;
  setActiveColor: Dispatch<SetStateAction<string>>;
  activeFont: string;
  setActiveFont: Dispatch<SetStateAction<string>>;
}

const Form = ({
  setOpen,
  eventName,
  setEventName,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  activeColor,
  setActiveColor,
  activeFont,
  setActiveFont,
}: IForm) => {
  /* ------------------------------------------------------ form validation */
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emptyName, setEmptyName] = useState(true);
  const [errorDate, setErrorDate] = useState(startDate! > endDate!);

  /* ------------------------------------------------------ EVENTS "db" obj */
  const [events, setEvents] = useAtom(eventsAtom);
  const [activeEvent] = useAtom(activeEventAtom);

  /* -------------------------------------------------------- SUBMIT FORM */
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // validate form
    if (!startDate || !endDate) return;
    if (eventName === "") {
      setIsSubmitted(true);
      setEmptyName(true);
      return;
    }
    if (errorDate) return;

    /* save event into the "db" +++++++++++++++++++++ */
    // NEW EVENT
    if (activeEvent === null) {
      addNewEventToDB(
        eventName,
        startDate,
        endDate,
        activeColor,
        activeFont,
        events,
        setEvents
      );
    }
    // EDITED EVENT
    else {
      addEditedEventToDB(
        eventName,
        startDate,
        endDate,
        activeColor,
        activeFont,
        activeEvent,
        events,
        setEvents
      );
    }
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
        activeColor={activeColor}
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
        <button
          type="submit"
          className="bg-purple hover:bg-mid-purple text-white btn"
        >
          SAVE
        </button>
      </div>
    </form>
  );
};

export default Form;
