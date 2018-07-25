import React, { Component, Fragment } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import UserChoice from './UserChoice'
import Question from './Question'
import { getAuthedUser } from '../actions/authedUser'
import { loadingQuestions } from '../actions/questions'
import { loadingUsers } from '../actions/users'

class UserHome extends Component {
  state = {
    loading: true,
    showUnansweredQuestions: true,
  }

  componentDidMount() {
    const { getSelectedUser, getQuestions, getUsers } = this.props;

    //CHECKS TO SEE IF COMPONENT IS MOUNTED BEFORE GETTING DATA
    this.mounted = true;

      // GETS CURRENT USER
      getSelectedUser().then(response => {
        //CHECKS TO SEE IF COMPONENT IS MOUNTED BEFORE GETTING DATA
        if (this.mounted) {
          // IF USER EXISTS, THEN LOAD QUESTIONS AND USERS AND SET loading: false
          if (response.user) {
            getQuestions()
              .then(getUsers())
              .then(() => this.setState({ loading: false }));
          } 
        } else {
          alert("Apologies for the Error. Please select again.")
        }
      });
  }

  renderQuestions = (e) => {
    if (this.showUnansweredQuestions === true) {
      this.setState({showUnasweredQuestions: false})
    } else {
      this.setState({showUnasweredQuestions: true})
    }
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  render() {

    const { id, users, questions, authedUser, unAnsweredQuestions, answeredQuestions } = this.props
    const { loading, showUnansweredQuestions } = this.state

    // console.log(loading)
    // console.log(authedUser)
    // console.log('Unanswered: ' + Object.values(unAnsweredQuestions))
    // console.log('Answered: ' + Object.values(answeredQuestions))

    // if (loading === true && authedUser === null) {
    //   return <Redirect to='/' />
    // }

    return (
      <Fragment>
        <Nav />
        <div>
          <button onClick={(e) => this.renderQuestions(e)}>Unaswered Questions</button>
          <button onClick={(e) => this.renderQuestions(e)}>Answered Questions</button>
        </div>
        <div>
          {showUnansweredQuestions === true && authedUser !== null? (
            unAnsweredQuestions.map(question => (
              <Question 
                key={question.id}
                author={question.author}
                optionOne={question.optionOne.text}
                optionTwo={question.optionTwo.text}
                userID={question.author}
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

function mapStateToProps ({questions, users, authedUser}, props) {
  const unAnsweredQuestions = Object.values(questions).filter((question) => 
      !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser)) 

  const answeredQuestions = Object.values(questions).filter((question) =>
      question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser))

  const { id } = props.match.params

  return {
    id,
    unAnsweredQuestions: Object.values(unAnsweredQuestions),
    answeredQuestions: Object.values(answeredQuestions),
    users: users,
    authedUser: authedUser,
    questions: questions
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSelectedUser: () => dispatch(getAuthedUser()),
    getQuestions: () => dispatch(loadingQuestions()),
    getUsers: () => dispatch(loadingUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserHome);