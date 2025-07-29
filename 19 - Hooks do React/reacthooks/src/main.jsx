import { StrictMode } from 'react'
import { createRoot} from 'react-dom/client'
import ReactDOM from 'react-dom/client'

import Home from './routes/Home.jsx'
import Contact from './routes/Contact.jsx'

import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,

    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'contact',
        element: <Contact/>
      },
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
