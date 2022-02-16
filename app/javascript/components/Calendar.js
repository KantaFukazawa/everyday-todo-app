import React from 'react';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from "@fullcalendar/timegrid";
import allLocales from '@fullcalendar/core/locales-all';

function Calendar() {
  const   dayCellContent = (e) => {
    (e.dayNumberText = e.dayNumberText.replace('日', ''))
  }

  const handleDateSelect = () => {
    const dateClick = $('.fc-daygrid-day').click(function(){
      const dataDate = $(this).data('date')

      axios.get(`http://localhost:3000/?date=${dataDate}`) 
        .then(resp => {
          console.log(resp)
        })
    })
    
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
          headerToolbar={{
            start: "prev,next today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
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
          events={'/api/v1/events'}
          select={handleDateSelect}
          />  
      </div> 
    </>   
  )
}
export default Calendar
