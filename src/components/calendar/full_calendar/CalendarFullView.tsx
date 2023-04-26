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
} from "../../../lib/atoms/globalAtoms";
import EditModal from "../calendar_edit_cards/EditModal";
import dayjs from "dayjs";
import { addEditedEventToDB } from "../../../lib/db/dbUtils";

export const CalendarFullView = () => {
  const [events, setEvents] = useAtom(eventsAtom);
  const calendarRef = useRef<FullCalendar>(null);
  const [, setCalendarAPI] = useAtom(calendarAPIAtom);
  const [open, setOpen] = useState(false); // open or close edit modal
  const [, setSelectedDate] = useAtom(selectedDatesAtom);
  const [, setActiveEvent] = useAtom(activeEventAtom);

  useEffect(() => {
    setCalendarAPI(calendarRef.current!.getApi());
  }, [calendarRef]);

  /* Select a date from calendar */
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const { start, end } = selectInfo;
    // NEW EVENT
    setSelectedDate({
      start: dayjs(start + ""),
      end: dayjs(end + ""),
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

  const handleDrop = (eventDropInfo: any) => {
    // EDITED EVENT
    const [event] = events.filter((event) => {
      return event.id === eventDropInfo.event.id;
    });

    // detect local timezone offset
    //var localoffset = dayjs().getTimezoneOffset();
    //alert(dayjs().utcOffset());
    // "unadjust" date
    //const ret = new Date(ret.valueOf() + localoffset * 60 * 1000);

    //
    addEditedEventToDB(
      event.title + "",
      dayjs(eventDropInfo.event.start + ""),
      dayjs(eventDropInfo.event.end + ""),
      event.color + "",
      event.font,
      eventDropInfo.event,
      events,
      setEvents
    );
  };

  // const handleEvents = (events: EventApi[]) => {
  //   //setEvents([...events]);
  // };

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
        initialView="dayGridMonth"
        timeZoneParam="local"
        editable={true}
        selectable={true}
        selectMirror={true}
        unselectAuto={true}
        dayMaxEvents={true}
        weekends={true}
        views={{
          dayGridMonth: {
            titleFormat: { year: "numeric", month: "long" },
          },
          dayGridWeek: {
            titleFormat: { year: "numeric", month: "long", day: "2-digit" },
          },
        }}
        events={events}
        select={handleDateSelect}
        //eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventDrop={handleDrop}
        /* you can update a remote database when these fire:
    eventAdd={function(){}}
    eventChange={function(){}}
    eventRemove={function(){}}
    */
      />
    </div>
  );
};
