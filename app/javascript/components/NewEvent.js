import React,  { useState, useEffect } from 'react';
import styled from 'styled-components'
import axios from 'axios';

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

function NewEvent(props) {
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
export default NewEvent