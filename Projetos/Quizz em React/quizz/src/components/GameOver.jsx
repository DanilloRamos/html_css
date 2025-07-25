import { useContext } from "react"
import { QuizzContext } from "../context/quizz"

import './GameOver.css'
import WellDone from '../img/welldone.svg'

const GameOver = () => {
    const [quizzState, dispatch] = useContext(QuizzContext)

    return (
        <div id="gameover">
            <h2>Fim de Jogo!</h2>
            <p>Pontuação:  {quizzState.score}</p>
            <p>Você acertou {quizzState.score} de {quizzState.questions.length} perguntas</p>
            <img src={WellDone} alt="Fim do Quizz" />
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
        </div>
    )
}

export default GameOver