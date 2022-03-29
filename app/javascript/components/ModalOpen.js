import React,  { useState, useEffect } from 'react';
import styled from 'styled-components'
import NewEvent from './NewEvent';

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

function ModalOpen(props) {
  const show = props.show
  const setShow = props.setShow

  if (show) {
    return (
    <>
      <OverRay onClick={() => setShow(false)}></OverRay>
      <ModalContent>
        <ModalCloseBtn onClick={() => setShow(false)}/>
        <NewEvent/>
      </ModalContent>
    </>
    )
  } else {
    return null;
  }
}
export default ModalOpen