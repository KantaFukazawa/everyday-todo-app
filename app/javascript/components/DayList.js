import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const CalendarDayItem = styled.div`
  height: auto;
  width: 500px;
  max-width: 95%;
  margin: 80px auto 0;
  padding: 20px 0 20px 20px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px
`
const CalendarDayItems = styled.div`
`
const DayTime = styled.p`
  display: inline-block;
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`
const DayTitle = styled.p `
  display: inline-block;
  padding: 0 0 0 10px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`
const DayContent= styled.picture `
  padding: 10px 0 0 5px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #70757A;
`
const EventP= styled.div `
`
//---------------(View)---------------//

function DayList(props) { 
  let todaysDateTime = new Date();
  let year = todaysDateTime.getFullYear();
  let month = todaysDateTime.getMonth();
  let day = todaysDateTime.getDate();

  let todaysDate = (year + '-' + month + '-' + day) 

  let events = props.events

  return (
    <>
    {events.map((event) => {
      <CalendarDayItem>
        <CalendarDayItems>
          <DayTime>
            <EventP>{event.start}</EventP>
          </DayTime>
          <DayTitle>
            <EventP>{event.title}</EventP>
          </DayTitle>
          <DayContent>
            <EventP>{event.content}</EventP>
          </DayContent>
        </CalendarDayItems>
      </CalendarDayItem> 
    })}

    </>
  )
}

export default DayList
