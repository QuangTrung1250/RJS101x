import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/index.css'
import './CSS/App.css'
import HomePage from './HomePage/HomePage'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <HomePage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
