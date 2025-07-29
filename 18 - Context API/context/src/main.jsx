import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './routes/Contact.jsx'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'

//criando provider
import { CounterContextProvider } from './context/CounterContext.jsx'

//contexto mais complexo
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

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
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router}/>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)