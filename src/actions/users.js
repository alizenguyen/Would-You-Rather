import { saveQuestionAnswer } from '../utils/api'

export const GET_USERS = 'GET_USERS'

//LOADS ALL USERS
export function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

//IN USER BECAUSE IT APPLIES TO USER OBJECT
function saveQuestionAnwer ({ authedUser, qid, answer}) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer
  }
}