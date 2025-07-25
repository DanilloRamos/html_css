import { createContext, useReducer } from 'react'
import questions from '../data/questions'

const STAGES = ['Start', 'Playing', 'End']

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
}

const quizzReducer = (state, action) => {
    console.log(state, action)

    switch(action.type) {
        case "CHANGE_STATE":
            return {
                ...state,
                gameStage: STAGES[1],
                currentQuestion: 0,
            }

        case "REORDER_QUESTIONS":
            const reorderedQuestions = questions.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                reorderedQuestions,
            }

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1
            let endGame = false

            if (!questions[nextQuestion]) {
                endGame = true
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
            }
        
        case "NEW_GAME":
            return initialState
        
        default:
            return state
    }
}

export const QuizzContext = createContext()

export const QuizzProvider = ({children}) => {
    const value = useReducer(quizzReducer, initialState)
    return <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
}