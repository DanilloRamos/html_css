import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'

//Link entre páginas
import Navbar from './components/Navbar'

//search params
import Search from './routes/Search'
import SearchForm from './components/SearchForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <SearchForm/>
      <Outlet/>
      <p>Footer</p>
    </div>
  )
}

export default App
