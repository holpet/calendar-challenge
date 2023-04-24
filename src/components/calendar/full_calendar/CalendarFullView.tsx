import { EventApi, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "../../../lib/db/eventsData";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import {
  calendarAPIAtom,
  selectedDateAtom,
} from "../../../lib/atoms/globalAtoms";
import EditModal from "../calendar_edit_cards/EditModal";
import dayjs from "dayjs";

export const CalendarFullView = () => {
  const [events, setEvents] = useState<EventApi[]>([]);
  const [eventsObj, setEventsObj] = useState([]);
  const calendarRef = useRef<FullCalendar>(null);
  const [calendarAPI, setCalendarAPI] = useAtom(calendarAPIAtom);
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);

  useEffect(() => {
    setCalendarAPI(calendarRef.current!.getApi());
  }, [calendarRef]);

  const goTo = () => {
    let calendarApi = calendarRef.current!.getApi();
    calendarApi.gotoDate("2019-10-12"); // call a method on the Calendar object
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const { start, end } = selectInfo;
    setSelectedDate(dayjs(start));
    setOpen(true);
    console.log(start, end);

    // let title = prompt("Please enter a new title for your event");
    // let calendarApi = selectInfo.view.calendar;
    // console.log(calendarAPI?.getEvents);

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay,
    //   });
    // }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (confirm(`Delete the event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setEvents([...events]);
  };

  return (
    <div className="pb-6">
      <EditModal open={open} setOpen={setOpen} />
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        locale={"en-gb"}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        views={{
          dayGridMonth: { titleFormat: { year: "numeric", month: "long" } },
          dayGridWeek: {
            titleFormat: { year: "numeric", month: "long", day: "2-digit" },
          },
        }}
        events={eventsObj}
        initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
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
