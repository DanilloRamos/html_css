import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'

//configurando router
import Contact from './routes/Contact.jsx'

//página de erro
import ErrorPage from './routes/ErrorPage.jsx'

//componente base
import Home from './routes/Home.jsx'

//rota dinâmica
import Product from './routes/Product.jsx'

//nested routes
import Info from './routes/Info.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<ErrorPage/>,
    //componente base
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'contact',
        element: <Contact/>
      },
      //rota dinâmica
      {
        path:'products/:id',
        element: <Product/>
      },
      //nested routes
      {
        path:'products/:id/info',
        element: <Info/>
      }
    ]
  },
  // {
  //   path:'contact',
  //   element: <Contact/>
  // }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
