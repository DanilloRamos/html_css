import React from 'react'
import './Question.css'
import { useContext, useState } from 'react'
import { QuizzContext } from '../context/quizz'
import Option from './Option.jsx'


const Question = () => {
    const [quizzState, dispatch] = useContext(QuizzContext)
    const currentQuestion = quizzState.questions[quizzState.currentQuestion]

    const onSelectOption = (option) => {
        dispatch ({
            type:'CHECK_ANSWER',
            payload: {answer: currentQuestion.answer, option}
        })
    }

    return (
        <div id='question'>
            <p>Pergunta {quizzState.currentQuestion + 1 } de {quizzState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div className="options-container">
                {currentQuestion.options.map((option) => (
                    <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onSelectOption(option)} hide={quizzState.optionToHide === option ? 'hide' : null}/>
                ))}
            </div>
            {!quizzState.answerSelected && !quizzState.help && (
                <>
                    {currentQuestion.tip && (
                        <button onClick={() => dispatch({type:'SHOW_TIP'})}>Dica</button>
                    )}
                    <button onClick={() => dispatch({type: 'REMOVE_OPTION'})}>Excluir uma</button>
                </>
            )}
            {!quizzState.answerSelected && quizzState.help === 'tip' && ( <p>{currentQuestion.tip}</p>) }

            {quizzState.answerSelected && (
                <button onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>Continuar</button>
            )}
        </div>
    )
}

export default Question