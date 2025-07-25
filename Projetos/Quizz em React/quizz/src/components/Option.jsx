import { useContext } from "react"
import { QuizzContext } from "../context/quizz"

import './Option.css'

const Option = ({ option }) => {
    const [quizzState, dispatch] = useContext(QuizzContext)

    return (
        <div className="option">
            <p>{option}</p>
        </div>
    )
}

export default Option