import React from 'react'
import './Question.css'
import { useContext, useState } from 'react'
import { QuizzContext } from '../context/quizz'
import Option from './Option.jsx'


const Question = () => {
    const [quizzState, dispatch] = useContext(QuizzContext)
    const currentQuestion = quizzState.questions[quizzState.currentQuestion]

    return (
        <div id='question'>
            <p>Pergunta {quizzState.currentQuestion + 1 } de {quizzState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div className="options-container">
                {currentQuestion.options.map((option) => (
                    <Option option={option} key={option}/>
                ))}
            </div>
            <button onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>Continuar</button>
        </div>
    )
}

export default Question