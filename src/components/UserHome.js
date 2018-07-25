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
    authedUser: null,
    showUnansweredQuestions: true,
  }

  renderQuestions = (e) => {
    if (this.showUnansweredQuestions === true) {
      this.setState({showUnasweredQuestions: false})
    } else {
      this.setState({showUnasweredQuestions: true})
    }
  }

  render() {

    const { users, questions, authedUser, unAnsweredQuestions, answeredQuestions } = this.props
    const { showUnansweredQuestions } = this.state

    return (
      <Fragment>
        <Nav />
        <div>
          <button onClick={(e) => this.renderQuestions(e)}>Unaswered Questions</button>
          <button onClick={(e) => this.renderQuestions(e)}>Answered Questions</button>
        </div>
        <div>
          {showUnansweredQuestions === true ? (
            unAnsweredQuestions.map(question => (
              <Question 
                key={question.id}
                author={question.author}
                optionOne={question.optionOne.text}
                optionTwo={question.optionTwo.text}
                />
            ))) 
            : answeredQuestions.map(question => (
              <Question 
                key={question.id}
                author={question.author}
                />
            ))
          }
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  const unAnsweredQuestions = Object.values(state.questions).filter((question) => 
      !question.optionOne.votes.includes(state.authedUser) && !question.optionTwo.votes.includes(state.authedUser)) 

    console.log(unAnsweredQuestions)
    console.log(state.selectUser)

    const answeredQuestions = Object.values(state.questions).filter((question) =>
        question.optionOne.votes.includes(state.authedUser) || question.optionTwo.votes.includes(state.authedUser))

  return {
    unAnsweredQuestions: unAnsweredQuestions,
    answeredQuestions: answeredQuestions,
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