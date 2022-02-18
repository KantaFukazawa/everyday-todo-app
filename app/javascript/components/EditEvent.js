import React from 'react'
import styled from 'styled-components'

function EditEvent() {
  return (
    <>
      <div id="modal" class="modal">
        <div class="modal_content">
          <div id="modal_close" class="dli-close"></div>
          <div class="modal_body">
            <div class="form_items">
              <label class="form_label" name="title">タイトル</label>
              <input id ="event_form_name" class="text-field form_name" type="text" name="title"></input>
            </div>
            <div class="form_items">
              <label class="form_label" name="start">時間</label>
              <input id ="event_start_date" class="datetime_field start_datetime" type="datetime-local" name="start"></input>
              <span class="time_item">~</span>
              <input id ="event_end_date" class="datetime_field end_datetime" type="datetime-local" name="end"></input>
            </div>
            <div class="form_items">
              <label class="form_label" name="content">内容</label>
              <input id ="event_form_content" class="text-area form_content" type="text" name="content"></input>
            </div>
            <div class="btn_wrapper">
              <button id="event_form_btn" class="submit form_btn" value="保存" type="submit"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EditEvent
