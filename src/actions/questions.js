import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

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

function saveQuestionAnwer () {
  return {
    type: SAVE_QUESTION_ANSWER,
    question
  }
}