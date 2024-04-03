import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router } from 'react-router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)
