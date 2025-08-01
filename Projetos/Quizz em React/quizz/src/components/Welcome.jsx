import { useContext } from 'react'
import { QuizzContext } from '../context/quizz'

import Quiz from '../img/quiz.svg'
import './Welcome.css'

const Welcome = () => {
  const [quizzState, dispatch] = useContext(QuizzContext)
  
  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Inicio do quizz" />
    </div>
  )
}

export default Welcome