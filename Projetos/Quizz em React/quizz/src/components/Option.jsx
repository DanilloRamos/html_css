import { useContext } from "react"
import { QuizzContext } from "../context/quizz"

import './Option.css'

const Option = ({ option, selectOption, answer, hide }) => {
    const [quizzState, dispatch] = useContext(QuizzContext)

    return (
        <div className={`option ${quizzState.answerSelected && option === answer ? 'correct' : ''} 
        ${quizzState.answerSelected && option !== answer ? 'wrong' : ''}
        ${hide ? 'hide' : ''}`} 
        onClick={() => selectOption()}>
            <p>{option}</p>
        </div>
    )
}

export default Option