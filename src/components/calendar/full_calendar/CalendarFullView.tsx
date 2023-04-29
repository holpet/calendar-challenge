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
import {
  METRICS,
  getColorNameFromHex,
} from "../../../lib/constants/themeHardcoded";
import { createTentacleElement } from "../../../lib/gfx_utils/gfxUtils";

export const CalendarFullView = () => {
  const [events, setEvents] = useAtom(eventsAtom);
  const calendarRef = useRef<FullCalendar>(null);
  const [calendarAPI, setCalendarAPI] = useAtom(calendarAPIAtom);
  const [open, setOpen] = useState(false); // open or close edit modal
  const [, setSelectedDate] = useAtom(selectedDatesAtom);
  const [, setActiveEvent] = useAtom(activeEventAtom);
  const [viewSwitched, setViewSwitched] = useAtom(viewSwitchedAtom); // informs the side panel "year"

  useEffect(() => {
    setCalendarAPI(calendarRef.current!.getApi());
  }, [calendarRef]);

  // add gfx (tentacles) to today's date
  useEffect(() => {
    const elem = createTentacleElement("today");
    return () => {
      elem?.parent?.querySelector(".tentacles-today") !== null &&
        elem?.parent?.removeChild(elem.child);
    };
  }, [viewSwitched]);

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
    alert(`${eventDropResizeInfo.event.color} ${event.color}`);
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

  //************ custom buttons ************//
  const buttons = {
    prev: {
      click: function () {
        calendarAPI?.prev();
        setViewSwitched(true);
      },
    },
    next: {
      click: function () {
        calendarAPI?.next();
        setViewSwitched(true);
      },
    },
    today: {
      text: "today",
      click: function () {
        calendarAPI?.today();
        setViewSwitched(true);
      },
    },
    dayGridMonth: {
      text: "month",
      click: function () {
        calendarAPI?.changeView("dayGridMonth");
        setViewSwitched(true);
      },
    },
    timeGridWeek: {
      text: "week",
      click: function () {
        calendarAPI?.changeView("timeGridWeek");
        setViewSwitched(true);
      },
    },
    timeGridDay: {
      text: "day",
      click: function () {
        calendarAPI?.changeView("timeGridDay");
        setViewSwitched(true);
      },
    },
  };

  return (
    <>
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
        customButtons={buttons}
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
        height={`calc(100vh - ${METRICS.bodyEdgePadding * 2}px)`}
        views={{
          dayGridMonth: {
            titleFormat: { month: "long" },
          },
          timeGridWeek: {
            titleFormat: { month: "long" },
            dayHeaderFormat: { weekday: "short", day: "numeric" },
            selectMirror: false,
          },
          timeGridDay: {
            titleFormat: { month: "long", day: "numeric" },
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
    </>
  );
};
