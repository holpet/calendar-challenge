import "./CalendarFullView.scss";
import { DateSelectArg, EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import {
  activeEventAtom,
  calendarAPIAtom,
  eventsAtom,
  selectedDatesAtom,
  viewSwitchedAtom,
} from "../../../lib/atoms/globalAtoms";
import EditModal from "../calendar_edit_cards/EditModal";
import dayjs from "dayjs";
import { addEditedEventToDB } from "../../../lib/db/dbUtils";
import { getColorNameFromHex } from "../../../lib/themeHardcoded";

export const CalendarFullView = () => {
  const [events, setEvents] = useAtom(eventsAtom);
  const calendarRef = useRef<FullCalendar>(null);
  const [, setCalendarAPI] = useAtom(calendarAPIAtom);
  const [open, setOpen] = useState(false); // open or close edit modal
  const [, setSelectedDate] = useAtom(selectedDatesAtom);
  const [, setActiveEvent] = useAtom(activeEventAtom);
  const [, setViewSwitched] = useAtom(viewSwitchedAtom);

  useEffect(() => {
    setCalendarAPI(calendarRef.current!.getApi());
  }, [calendarRef]);

  /* Select a date from calendar */
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const { start, end } = selectInfo;
    // NEW EVENT
    setSelectedDate({
      start: dayjs(start),
      end: dayjs(end),
    });
    setActiveEvent(null);
    setOpen(true);
  };

  /* Click on an event in the calendar */
  const handleEventClick = (clickInfo: EventClickArg) => {
    // EDITED EVENT
    const [event] = events.filter((event) => {
      return event.id === clickInfo.event.id;
    });
    setSelectedDate({
      start: dayjs(event.start + ""),
      end: dayjs(event.end + ""),
    });
    setActiveEvent(event);
    setOpen(true);
  };

  const handleDropAndResize = (eventDropResizeInfo: any) => {
    // EDITED EVENT
    const [event] = events.filter((event) => {
      return event.id === eventDropResizeInfo.event.id;
    });
    addEditedEventToDB(
      event.title + "",
      dayjs(eventDropResizeInfo.event.start),
      dayjs(eventDropResizeInfo.event.end),
      getColorNameFromHex(event.color + ""),
      event.font,
      eventDropResizeInfo.event,
      events,
      setEvents
    );
  };

  return (
    <div className="pb-6">
      <EditModal open={open} setOpen={setOpen} />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        locale={"en-gb"}
        firstDay={1}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        customButtons={{
          prev: {
            click: function () {
              calendarRef.current?.getApi().prev();
              setViewSwitched(true);
            },
          },
          next: {
            click: function () {
              calendarRef.current?.getApi().next();
              setViewSwitched(true);
            },
          },
          today: {
            text: "today",
            click: function () {
              calendarRef.current?.getApi().today();
              setViewSwitched(true);
            },
          },
        }}
        initialView="dayGridMonth"
        timeZoneParam="local"
        editable={true}
        selectable={true}
        selectMirror={true}
        unselectAuto={true}
        dayMaxEvents={true}
        allDaySlot={false}
        expandRows={true}
        weekends={true}
        views={{
          dayGridMonth: {
            titleFormat: { month: "long" },
          },
          timeGridWeek: {
            titleFormat: { month: "long" },
          },
          timeGridDay: {
            titleFormat: { month: "long", day: "2-digit" },
          },
        }}
        events={events}
        eventTimeFormat={{
          hour: "2-digit",
          minute: "2-digit",
          meridiem: false,
        }}
        select={handleDateSelect}
        eventClick={handleEventClick}
        eventDrop={handleDropAndResize}
        eventResize={handleDropAndResize}
      />
    </div>
  );
};
