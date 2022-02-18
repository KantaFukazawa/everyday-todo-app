import React,  { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AddEvent from '../components/AddEvent'

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

function ModalBtn() {
  const [show, setShow] = useState(false)
  const openModal = () => {
    setShow(true)
  }

  return (
    <>
    <CalendarDayBtn onClick={openModal}>
      <PlusIcon></PlusIcon>
    </CalendarDayBtn>
    </>
  )
}

export default ModalBtn