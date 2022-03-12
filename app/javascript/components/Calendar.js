import React, { useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from '@fullcalendar/core/locales-all';  

function Calendar(props) {

  const events = props

  const dayCellContent = (e) => {
    (e.dayNumberText = e.dayNumberText.replace('日', ''))
  }

  const startDate = (info) => {
    info.startStr
  }

  const handleDateSelect = () => {
    console.log(events)
  }

  const calendarRef = React.useRef()

  const onClickHandler = (info) => {
    const startDateStr = info.startStr
    const startDate = (startDateStr + 'T00:00:00.000Z');
    const endDate = (startDateStr +'T23:59:59.000Z');

    events.map((event) => {
      let eventStart = event.start
      if ((startDate <= eventStart) && ((eventStart) <= endDate)) {
        return console.log(event)
      }
    })
  }

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


