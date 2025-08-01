import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { QuizzProvider } from './context/quizz.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizzProvider>
      <App/>
    </QuizzProvider>
  </StrictMode>,
)
