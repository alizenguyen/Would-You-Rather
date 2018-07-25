import { _getQuestions } from "../utils/_DATA";

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const loadingQuestions = () => {
  return dispatch => {
    return _getQuestions().then(response => dispatch(getQuestions(response)))
  }
}

export function saveQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question
  }
}