import { EventInput } from "@fullcalendar/core/index.js";
import dayjs, { Dayjs } from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { TO_HEX_COLORS } from "../themeHardcoded";
import { Dispatch, SetStateAction } from "react";

const style = [""];

export function addNewEventToDB(
  eventName: string,
  startDate: Dayjs,
  endDate: Dayjs,
  activeColor: string,
  activeFont: string,
  events: EventInput[],
  setEvents: Dispatch<SetStateAction<EventInput[]>>
) {
  const newEvent = {
    id: uuidv4() + "",
    title: eventName,
    start: dayjs(startDate).format(),
    end: dayjs(endDate).format(),
    color: TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS],
    font: activeFont,
    classNames: [...style, `bg-${activeColor}-300 hover:bg-${activeColor}-500`],
  };
  setEvents([...events, newEvent]);
}

export function addEditedEventToDB(
  eventName: string,
  startDate: Dayjs,
  endDate: Dayjs,
  activeColor: string,
  activeFont: string,
  activeEvent: EventInput,
  events: EventInput[],
  setEvents: Dispatch<SetStateAction<EventInput[]>>
) {
  const eventsAfterEdit = events.map((event) =>
    event.id === activeEvent.id
      ? {
          ...event,
          title: eventName,
          start: dayjs(startDate).format(),
          end: dayjs(endDate).format(),
          color: TO_HEX_COLORS[activeColor as keyof typeof TO_HEX_COLORS],
          font: activeFont,
          classNames: [
            ...style,
            `bg-${activeColor}-300 hover:bg-${activeColor}-500`,
          ],
        }
      : event
  );
  setEvents(eventsAfterEdit);
}
