import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Rutas } from './routes/rutas.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter>
<Rutas></Rutas>
</BrowserRouter>
  </React.StrictMode>
)
