// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import FullCalendar from '@fullcalendar/react' ;
import dayGridPlugin from '@fullcalendar/daygrid' ;
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';


export default class CalendarApp extends React.Component {
  dayCellContent = (e) => {
    (e.dayNumberText = e.dayNumberText.replace('日', ''))
  }

  render() {
    return (
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
          dayCellContent={this.dayCellContent}
          eventColor='#63ceef'
          eventTextColor='#000000'
          events={'/events.json'}
          select={this.handleDateSelect}
          />  
      </div>    
    )
  }
}

