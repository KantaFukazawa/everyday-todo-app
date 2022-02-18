// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import Calendar from '../components/Calendar'
import AddEvent from '../components/AddEvent'
import ModalBtn from '../components/ModalBtn'

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <BrowserRouter>
      <Calendar/>
    </BrowserRouter>,
    document.querySelector('#root'),
  )

  ReactDOM.render(
    <BrowserRouter>
      <ModalBtn/>
    </BrowserRouter>,
    document.querySelector('#modal_btn'),
  )

  ReactDOM.render(
    <BrowserRouter>
      <AddEvent show={show}/>
    </BrowserRouter>,
    document.querySelector('#modal'),
  );
});


