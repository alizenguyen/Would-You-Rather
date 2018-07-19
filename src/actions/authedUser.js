import { _saveSelectedUser } from '../utils/_DATA'

export const SET_AUTHED_USER = 'SET_AUTHED_USER'

function setAuthedUser (user) {
  return {
    type: SET_AUTHED_USER,
    user
  }
}

export const saveAuthedUser = user => {
  return dispatch => {
    return _saveSelectedUser(user).then(response => dispatch(setAuthedUser(response)));
  }
}

