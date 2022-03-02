import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from '@fullcalendar/core/locales-all';
import { all } from 'q';
import { end } from 'worker-farm';

function CalendarFunc(props) {

  const dayCellContent = (e) => {
    (e.dayNumberText = e.dayNumberText.replace('日', ''))
  }

  const startDate = (info) => {
    info.startStr
  }

  const handleDateSelect = () => {
    console.log(props.events)
  }

  const calendarRef = React. useRef()

  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    axios.get("/api/v1/events.js")
      .then(res => {
        const events =setEvents(res.data)
      })
  }, []);

  const onClickHandler = (info) => {
    const clickInfo = new Date(info.startStr);
    const startDate = new Date(clickInfo.setHours(clickInfo.getHours() - 9));
    const endDate = new Date(clickInfo.setHours(clickInfo.getHours() + 24));

    events.map((e) => {
      if (startDate <= new Date(e.start) < endDate) {
        console.log(e)
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
        events={'/api/v1/events.js'}
        eventTimeFormat={{ hour: "2-digit", minute: "2-digit" }}
        select={onClickHandler}
        />  
    </>   
  )
}
export default CalendarFunc
