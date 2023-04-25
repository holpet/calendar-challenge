import { EventApi, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import {
  calendarAPIAtom,
  eventsAtom,
  selectedDatesAtom,
} from "../../../lib/atoms/globalAtoms";
import EditModal from "../calendar_edit_cards/EditModal";
import dayjs from "dayjs";

export const CalendarFullView = () => {
  const [events] = useAtom(eventsAtom);
  const calendarRef = useRef<FullCalendar>(null);
  const [, setCalendarAPI] = useAtom(calendarAPIAtom);
  const [open, setOpen] = useState(false); // open or close edit modal
  const [, setSelectedDate] = useAtom(selectedDatesAtom);

  useEffect(() => {
    setCalendarAPI(calendarRef.current!.getApi());
  }, [calendarRef]);

  const goTo = () => {
    let calendarApi = calendarRef.current!.getApi();
    calendarApi.gotoDate("2019-10-12"); // call a method on the Calendar object
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const { start, end } = selectInfo;
    setSelectedDate({ start: dayjs(start), end: dayjs(end) });
    setOpen(true);
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const [event] = events.filter((event) => {
      return event.id === clickInfo.event.id;
    });
    setSelectedDate({
      start: dayjs(event.start + ""),
      end: dayjs(event.end + ""),
    });
    setOpen(true);
    // if (confirm(`Delete the event '${clickInfo.event.title}'?`)) {
    //   clickInfo.event.remove();
    // }
  };

  const handleEvents = (events: EventApi[]) => {
    //setEvents([...events]);
  };

  return (
    <div className="pb-6">
      <EditModal open={open} setOpen={setOpen} />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        locale={"en-gb"}
        timeZone="Europe/Prague"
        firstDay={1}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
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
        //initialEvents={EVENTS} // alternatively, use the `events` setting to fetch from a feed
        select={handleDateSelect}
        //eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        /* you can update a remote database when these fire:
    eventAdd={function(){}}
    eventChange={function(){}}
    eventRemove={function(){}}
    */
      />
    </div>
  );
};
