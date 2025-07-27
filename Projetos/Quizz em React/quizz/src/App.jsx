import './App.css'
import { useContext, useEffect } from 'react'
import { QuizzContext } from './context/quizz'

import Welcome from './components/Welcome'
import Question from './components/Question'
import GameOver from './components/GameOver'
import PickCategory from './components/PickCategory'

function App() {
  const [quizzState, dispatch] = useContext(QuizzContext)


  return (
    <div className="App">
      <h1>Quizz de Programação</h1>
      {quizzState.gameStage === "Start" && <Welcome />}
      {quizzState.gameStage ===  'Category' && <PickCategory />}
      {quizzState.gameStage === 'Playing' && <Question />}
      {quizzState.gameStage === 'End' && <GameOver/>}
    </div>
  )
}

export default App
