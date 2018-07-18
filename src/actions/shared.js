import { getInitialData } from '../utils/api'
import { loadingUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

//HARD CODED AUTHED USER
const AUTHED_ID = 'averiewoodard'

//GETS handInitialData FROM API AND APPLIES IT TO ACTION CREATORS
export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions })=>{
        dispatch(loadingUsers(users))
        dispatch(getQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}