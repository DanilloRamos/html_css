import { useContext } from "react"
import { QuizzContext } from "../context/quizz"

import Category from '../img/category.svg'

import './PickCategory.css'

const PickCategory = () => {
    const [quizzState, dispatch] = useContext(QuizzContext)

    const chooseCategoryAndReorderQuestion = (category) => {
        dispatch({type: 'START_GAME', payload: category})
        dispatch({type: 'REORDER_QUESTIONS'})
    }

  return (
    <div className="category">
        <h2>Escolha uma categoria</h2>
        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
        <div>
            {quizzState.questions.map((question) => (
                <button onClick={() => chooseCategoryAndReorderQuestion(question.category)} key={question.category}>{question.category}</button>
            ))}
        </div>
        <img src={Category} alt="Categorias do Quizz" />
    </div>
  )
}

export default PickCategory