import { GET_USERS } from '../actions/users'
import { SAVE_QUESTION } from '../actions/questions'

export default function user (state = {}, action) {
  switch(action.type) {
    case GET_USERS: 
      return {
        ...state,
        ...action.users
      }
    case SAVE_QUESTION: 
      console.log(action.question.author)
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default: 
      return state
  }
}