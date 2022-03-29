import React from 'react'
import styled from 'styled-components'


const CalendarDayItem = styled.div`
  height: auto;
  width: 500px;
  max-width: 95%;
  margin: 10px auto 0;
  padding: 20px 0 20px 20px;
  background: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  border-radius: 10px
`
const CalendarDayItems = styled.div`
&:after {
  content: ".";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
`
const DayItemsLeft = styled.div`
  float: left
`
const DayItemsRight = styled.div`
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
  padding: 0 0 0 20px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`
const DayContent= styled.p `
  padding: 10px 0 0 80px;
  font-family: Roboto;
  font-size: 14px;
  line-height: 16px;
  color: #70757A;
`
const EventP= styled.div `
`
//---------------(View)---------------//

function TodayDayList(props) {  
  let events = props.events
  let rangeStart = props.rangeStart
  let rangeEnd = props.rangeEnd

  return (
    <>
      {
        events?.map((event) => {
          let eventStart = event.start
          if ((rangeStart <= eventStart) && (eventStart <= rangeEnd )) {
            const eventStrISO = event.start.slice(0, 19) + '+09:00'
            const eventStrTs = Date.parse(eventStrISO);
            const eventStrDt = new Date(eventStrTs);

            function toDoubleDigits(i) {
            if (i < 10) {
            i = "0" + i;
            }
            return i;
            }

            let strMonth = eventStrDt.getMonth() + 1
            let strDate = eventStrDt.getDate()
            let strHours = eventStrDt.getHours()
            let strMinutes = toDoubleDigits(eventStrDt.getMinutes())
            let todaysStrDate = strMonth + '/' + strDate
            let plansStrTime = strHours + ':' + strMinutes

            const eventEndISO = event.end.slice(0, 19) + '+09:00'
            const eventEndTs = Date.parse(eventEndISO);
            const eventEndDt = new Date(eventEndTs);

            let endMonth = eventEndDt.getMonth() + 1
            let endDate = eventEndDt.getDate()
            let endHours = eventEndDt.getHours()
            let endMinutes = toDoubleDigits(eventEndDt.getMinutes())
            let plansEndTime = endHours + ':' + endMinutes
            
            return(
              <CalendarDayItem>
                <CalendarDayItems>
                  <DayItemsLeft>
                    <DayTime>
                      <EventP>{plansStrTime}</EventP>
                      <p>↓</p>
                      <EventP>{plansEndTime}</EventP>
                    </DayTime>
                  </DayItemsLeft>
                  <DayItemsRight>
                    <DayTitle>
                      <EventP>{event.title}</EventP>
                    </DayTitle>
                    <DayContent>
                      <EventP>{event.content}</EventP>
                    </DayContent>
                  </DayItemsRight>
                </CalendarDayItems>
              </CalendarDayItem>
            );
          }
        })
      }
    </>
  )
}

export default TodayDayList


