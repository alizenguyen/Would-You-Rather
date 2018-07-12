import { GET_USERS, SAVE_QUESTION_ANSWER } from '../actions/users'

export default function user (state = {}, action) {
  switch(action.type) {
    case GET_USERS: 
      return {
        ...state,
        ...action.users
      }
    case SAVE_QUESTION_ANSWER: 
      return {
        ...state,
        [action.users.answers]: action.answer,
      }
    default: 
      return state
  }
}