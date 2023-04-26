import { Dispatch, useState } from "react";
import DatePicker from "./DatePicker";
import { SetStateAction, useAtom } from "jotai";
import { activeEventAtom, eventsAtom } from "../../../../lib/atoms/globalAtoms";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";
import ColorAndFontPicker from "./ColorAndFontPicker";
import NamePicker from "./NamePicker";
import { TO_HEX_COLORS } from "../../../../lib/themeHardcoded";

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
      const newEvent = {
        id: uuidv4() + "",
        title: eventName,
        start: dayjs(startDate).format(),
        end: dayjs(endDate).format(),
        color: TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS],
        font: activeFont,
      };
      setEvents([...events, newEvent]);
    }
    // EDITED EVENT
    else {
      const eventsAfterEdit = events.map((event) =>
        event.id === activeEvent.id
          ? {
              ...event,
              title: eventName,
              start: dayjs(startDate).format(),
              end: dayjs(endDate).format(),
              color: TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS],
              font: activeFont,
            }
          : event
      );
      setEvents(eventsAfterEdit);
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
        <button type="submit" className="gen-link">
          SAVE
        </button>
      </div>
    </form>
  );
};

export default Form;
