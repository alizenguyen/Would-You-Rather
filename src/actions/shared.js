import { getInitialData } from '../utils/api'
import { getUsers } from '../actions/users'
import { getQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

//hard coded user id
const AUTHED_ID = 'averiewoodard'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets })=>{
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}