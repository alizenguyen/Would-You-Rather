import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import UserChoice from './UserChoice'
import Question from './Question'
import { getAuthedUser } from '../actions/authedUser'
import { getQuestions } from '../actions/questions'
import { loadingUsers } from '../actions/users'

class UserHome extends Component {
  state = {
    questions: []
  }

  renderUnansweredQuestions = (users, questions) => {
    {Object.keys(users).length > 0 && questions.length > 0 ? (
      questions.map(question => (
        <Question
          question={question}
          key={question.id}
          author={users[question.author]}
        />
      ))
    ) : (
      <div className="not-available">
        No questions are available. <br />
        <em>Please ask a new question.</em>
      </div>
    )}
  }

  render() {
    if (!this.props.authedUser) {
      return <UserChoice />;
    }

    return (
      <Fragment>
        <Nav />
        <div>
          <button onClick={this.renderUnansweredQuestion(this.props.users, this.state.questions)}>Unaswered Questions</button>
          <button>Answered Questions</button>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    authedUser: state.authedUser,
    questions: state.questions
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