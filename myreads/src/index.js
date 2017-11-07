import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

/* BrowserRouter component listens to the changes in the URL.
   When any change in the URL happens, it makes sure that right
   screen shows up.
*/
ReactDOM.render(
  <BrowserRouter>
    <div> <App /> </div>
  </BrowserRouter>,
  document.getElementById('root')
)
