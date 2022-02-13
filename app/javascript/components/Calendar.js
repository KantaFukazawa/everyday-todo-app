import React from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';

function Calendar() {
  const   dayCellContent = (e) => {
    (e.dayNumberText = e.dayNumberText.replace('日', ''))
  }

  return (
    <>
      <div class= 'calendar'>
        <FullCalendar
          plugins={[ dayGridPlugin, interactionPlugin ]}
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
          events={'/events.json'}
          />  
      </div> 
    </>   
  )
}
export default Calendar
