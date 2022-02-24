import React, { useState } from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from '@fullcalendar/core/locales-all';
import { all } from 'q';

function Calendar() {
  const dayCellContent = (e) => {
    (e.dayNumberText = e.dayNumberText.replace('日', ''))
  }

  const handleDateSelect = (info) => {
    const startDate = new Date(info.start).toLocaleDateString()
    console.log(events)
  }

  return (
    <>
      <div class= 'calendar'>
        <FullCalendar
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
          select={handleDateSelect}
          />  
      </div> 
    </>   
  )
}
export default Calendar
