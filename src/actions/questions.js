import { saveQuestionAnswer } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

function saveQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}