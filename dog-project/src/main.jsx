import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Context from './Context/RecipeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Context>
     <h1>lo que hay aca se muestra en el children de conmtext.jsx</h1>
     <App />
  </Context>
    
  </BrowserRouter>,
)
