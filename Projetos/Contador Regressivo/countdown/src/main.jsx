import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

//páginas
import Home from './routes/Home'
import Countdown from './routes/Countdown'

//context
import { CountdownProvider } from './context/CountdownContext'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/countdown',
        element: < Countdown />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CountdownProvider>
      <RouterProvider router={router} />
    </CountdownProvider>
  </React.StrictMode>
)