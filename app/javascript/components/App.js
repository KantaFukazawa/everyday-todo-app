import React,  { useState, useEffect } from 'react';
import {  useLocation } from "react-router";
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Calendar, {startDateStr} from './Calendar'
import axios from 'axios';
import { csrfToken } from '@rails/ujs';
import DayList from './DayList';


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
//---------------モーダル---------------//
const OverRay = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.5);
`
const ModalContent = styled.div`
  position: fixed;
  z-index: 9999;
  left: 25%;
  top: 0;
  background-color: #fff;
  width: 600px;
  height: 62vh;
  min-width: 40%;
  margin: 100px auto;
  border-radius: 30px;
`
const ModalCloseBtn = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #333;
  line-height: 1;
  width: 1.5em;
  height: 0.1em;
  background: currentColor;
  border-radius: 0.1em;
  position: relative;
  top: 20px;
  left: 20px;
  transform: rotate(45deg);
  cursor: pointer;
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
const ModalBody =styled.div`
  margin: 40px 0 20px 0;
`
const FormItems = styled.div`
  margin: 20px 0 0 30px;
`
const FormLabel = styled.label`
  display: block;
  padding: 0 0 0 0;
  font-size: 18px;
  line-height: 42px;
  color: #70757A;
`
const FormName = styled.input`
  padding: 1px 1px 1px 5px;
  width: 530px;
  line-height: 30px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px;
`
const DateTime = styled.input`
  display: inline-block;
  padding: 0 10px 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  box-sizing: border-box;
`
const FormContent = styled.textarea`
  padding: 10px 0 0 10px;
  width: 530px;
  height: 150px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px;
`
const FormBtn = styled.button` 
  display: block;
  margin: 10px auto 0;
  padding: 10px 25px;
  color: #FFFFFF;
  background: #1B4965;
  border-radius: 25px;
`
 
//---------------メインページ(View)---------------//

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

  /////Calendar/////

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
          <Modal show={show } setShow={setShow}/>
        </CalendarDay>
      </CalendarPage>
    </Container>
    </>
  )
}

export default App

//---------------モーダル(View)---------------//
function Modal({show, setShow}) {
  if (show) {
    return (
    <>
      <OverRay onClick={() => setShow(false)}></OverRay>
      <ModalContent>
        <ModalCloseBtn onClick={() => setShow(false)}></ModalCloseBtn>
        <AddEvent/>
      </ModalContent>
    </>
    )
  } else {
    return null;
  }
}

function AddEvent() {
  const initialDate = new Date()
  const [title, setTitle] = useState('')
  const [start, setStart] = useState(initialDate)
  const [end, setEnd] = useState(initialDate.setHours(initialDate.getHours()+1))
  const [content, setContent] = useState('')

  const changeTitle = (e) => {
    setTitle(e.target.value)
  }

  const changeStart = (e) => {
    setStart(e.target.value)
  }

  const changeEnd = (e) => {
    setEnd(e.target.value)
  }

  const changeContent = (e) => {
    setContent(e.target.value)
  }

  const createEvent = () => {
    axios.post('api/v1/events', {
      event: {
        title: title,
        start: start,
        end: end,
        content: content
      }
    })
    .then(
      window.location.reload()
    )
          .catch((e) => {
        window.alert('Error')
        console.log(e)
    })
  }


  return(
    <>
      <ModalBody>
        <FormItems>
          <FormLabel name='title'>タイトル</FormLabel>
          <FormName name='title' onChange={changeTitle}></FormName>
        </FormItems>
        <FormItems>
          <FormLabel name='start'>時間</FormLabel>
          <DateTime name='start' type='datetime-local' onChange={changeStart}></DateTime>
          <span> </span>
          <span>〜</span>
          <span> </span>
          <DateTime name='end' type='datetime-local' onChange={changeEnd}></DateTime>
        </FormItems>
        <FormItems>
          <FormLabel name='content'>内容</FormLabel>
          <FormContent name='content' onChange={changeContent}></FormContent>
        <div class='btn_wrapper'>
          <FormBtn type='submit' value='保存' onClick={createEvent}>保存</FormBtn>
        </div>
        </FormItems>
      </ModalBody>
    </>
  )
}


