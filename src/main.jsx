import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import HomeHeader from './HomeHeader'
import List from './List'
import InfoStaff from './InfoStaff'
ReactDOM.render(
  <React.StrictMode>
    <HomeHeader />
    <List />
    <InfoStaff />
  </React.StrictMode>,
  document.getElementById('root')
)
