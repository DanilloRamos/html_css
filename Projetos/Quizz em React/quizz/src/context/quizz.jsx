import { createContext, useReducer } from 'react'
import questions from '../data/questions_complete'

const STAGES = ['Start', 'Category', 'Playing', 'End']

const initialState = {
    gameStage: STAGES[0],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    help: false,
    optionToHide: null,
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
        
        case 'START_GAME':
            let quizzQuestions = null

            state.questions.forEach((question) => {
                if (question.category === action.payload) {
                    quizzQuestions = question.questions
                }
            })

            return {
                ...state,
                questions: quizzQuestions,
                gameStage: STAGES[2]
            }

        case "REORDER_QUESTIONS":
            const reorderedQuestions = state.questions.sort(() => {
                return Math.random() - 0.5
            })
            return {
                ...state,
                question: reorderedQuestions,
            }

        case "CHANGE_QUESTION":
            const nextQuestion = state.currentQuestion + 1
            let endGame = false

            if (!state.questions[nextQuestion]) {
                endGame = true
            }

            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[3] : state.gameStage,
                answerSelected: false,
                help: false,
            }
        
        case "NEW_GAME":
            return initialState
        
        case 'CHECK_ANSWER':
            if (state.answerSelected) return state

            const answer = action.payload.answer
            const option = action.payload.option
            let correctAnswer = 0

            if (answer === option) correctAnswer = 1

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option,
            }
        
        case 'SHOW_TIP':
            return {
                ...state,
                help: 'tip',
            }
        
        case 'REMOVE_OPTION':
            const questionWithoutOption = state.questions[state.currentQuestion]
            let repeat = true
            let optionToHide

            questionWithoutOption.options.forEach((option) => {
                if (option !== questionWithoutOption.answer && repeat) {
                    optionToHide = option
                    repeat = false
                }
            })

            return {
                ...state,
                optionToHide,
                help: true,
            }

        
        default:
            return state
    }
}

export const QuizzContext = createContext()

export const QuizzProvider = ({children}) => {
    const value = useReducer(quizzReducer, initialState)
    return <QuizzContext.Provider value={value}>{children}</QuizzContext.Provider>
}