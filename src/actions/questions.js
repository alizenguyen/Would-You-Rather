import { saveQuestion, saveQuestionAnswer } from '../utils/api'

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

function saveQuestionAnwer ({ authedUser, qid, answer}) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}