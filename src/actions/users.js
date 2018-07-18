import { _getUsers } from "../utils/_DATA";

export const GET_USERS = 'GET_USERS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

//LOADS ALL USERS
function getUsers (users) {
  return {
    type: GET_USERS,
    users
  }
}

export const loadingUsers = () => {
  return dispatch => {
    return _getUsers().then(response => dispatch(getUsers(response)))
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