import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import UserChoice from './UserChoice'
import { getAuthedUser } from '../actions/authedUser'
import { getQuestions } from '../actions/questions'
import { loadingUsers } from '../actions/users'

class UserHome extends Component {
  state = {
    questions: []
  }

  render() {
    if (!this.props.authedUser) {
      return <UserChoice />;
    }

    return (
      <Fragment>
        <Nav />
        <div>
          <button>Unaswered Question</button>
          <button>Answered Question</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    authedUser: state.authedUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSelectedUser: () => dispatch(getAuthedUser()),
    getQuestions: () => dispatch(getQuestions()),
    getUsers: () => dispatch(loadingUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);