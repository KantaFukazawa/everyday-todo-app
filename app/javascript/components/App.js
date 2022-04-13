import React,  { useState, useEffect } from 'react';
import {  useLocation } from "react-router";
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios';
import { csrfToken } from '@rails/ujs';
import Calendar from './Calendar'
import DayList from './DayList';
import ModalOpen from './ModalOpen';



axios.defaults.headers.common['X-CSRF-Token'] = csrfToken();

//---------------メインページ---------------//
const Container = styled.div`
  max-width: 90%;
  margin: 0 auto;
`
const CalendarPage = styled.div`
  position: relative;
`
const CalendarZone = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  padding: 80px 0;
`
const CalendarDay = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 36%;
  height: 100vh;
  background: #5FA8D340;
  padding: 100px 0 0 0;
`
const CalendarDayBtn = styled.button`
  height: 60px;
  width: 500px;
  max-width: 95%;
  margin:20px 10px 0;
  background: rgba(27, 73, 101, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
`
const PlusIcon = styled.span`
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  display: inline-block;
  vertical-align: middle;
  color: #C4C4C4;
  line-height: 1;
  width: 35px;
  height: 7px;
  background: currentColor;
  border-radius: 0.1em;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    transform: rotate(90deg);
  }
`

function App() {
  const [show, setShow] = useState(false)
  const [events, setEvents] = useState(null);

  React.useEffect(() => {
    axios.get('/api/v1/events.js')
      .then(res => {
        setEvents(res.data)
      })
  }, []);

  const openModal = () => {
  setShow(true)
  }

  const dayCellContent = (e) => {
    (e.dayNumberText = e.dayNumberText.replace('日', ''))
  }

  const handleDateSelect = () => {
    console.log(events)
  }

  const calendarRef = React.useRef()

  let todaysDateTime = new Date();
  let year = todaysDateTime.getFullYear();
  let month = todaysDateTime.getMonth() + 1;
  let day = todaysDateTime.getDate();

  const [rangeStart, setRangeStart] = useState(year + '-' + '0' + month + '-' + day + 'T00:00:00.000Z')
  const [rangeEnd, setRangeEnd] = useState(year + '-' + '0' + month + '-' + day + 'T23:59:59.999Z')

  const onClickHandler = (info) => {
    const startDateStr = info.startStr

    setRangeStart(startDateStr + 'T00:00:00.000Z');
    setRangeEnd(startDateStr +'T23:59:59.999Z');
  };

  return (
    <>
    <Container>
      <CalendarPage>
        <CalendarZone>
          <div className= 'Calendar'>
            <Route path='/'>
              <Calendar
              events={events} 
              dayCellContent={dayCellContent} 
              handleDateSelect={handleDateSelect}
              calendarRef={calendarRef}
              onClickHandler={onClickHandler}
              />
            </Route>
          </div>
        </CalendarZone>
        <CalendarDay>
          <Route path='/'>
            <DayList 
            events={events}
            rangeStart={rangeStart}
            rangeEnd={rangeEnd}
            />
          </Route>
          <CalendarDayBtn onClick={openModal}>
            <PlusIcon></PlusIcon>
          </CalendarDayBtn>
          <ModalOpen show={show } setShow={setShow}/>
        </CalendarDay>
      </CalendarPage>
    </Container>
    </>
  )
}

export default App





