import React from 'react';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from '@fullcalendar/core/locales-all';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

function Calendar(props) {

  const events = props.events
  const dayCellContent = props.dayCellContent
  const calendarRef = props.calendarRef
  const onClickHandler = props.onClickHandler

  return (
    <>
    <FullCalendar
    ref={calendarRef}
    plugins={[
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin
    ]}
    initialView='dayGridMonth'
    selectable={true}
    locales={allLocales}
    locale='ja'
    timeZone='Asia/Tokyo'
    firstDay={0}
    businessHours={true}
    dayCellContent={dayCellContent}
    eventColor='#63ceef'
    eventTextColor='#000000'
    contentHeight='75vh'
    events={events}
    eventTimeFormat={{ hour: "2-digit", minute: "2-digit" }}
    select={onClickHandler}
    />
    </>
  )
}
export default Calendar


