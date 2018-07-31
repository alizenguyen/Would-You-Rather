import React, { Component } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Question from './Question'
import AnsweredQuestion from './AnsweredQuestion'
import '../css/UserHome.css'
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
// IF USER EXISTS, THEN LOAD QUESTIONS AND USERS AND SET loading: false
        this.setState({ loading: false })
//CHECKS TO SEE IF COMPONENT IS MOUNTED BEFORE GETTING DATA
        if (this.mounted) {
          if (response.user) {
            getQuestions()
              .then(getUsers())
          } 
        } else {
          alert("Apologies for the Error. Please select again.")
        }
      });
  }

  renderQuestions = (e) => {
    if (this.state.showUnansweredQuestions === true) {
      this.setState({showUnansweredQuestions: false})
    } else {
      this.setState({showUnansweredQuestions: true})
    }
    console.log(this.state.showUnansweredQuestions)
  }

  componentWillUnmount () {
    this.mounted = false;
  }

  render() {

    const { authedUser, unAnsweredQuestions, answeredQuestions, authedUserAvatar } = this.props
    const { loading, showUnansweredQuestions } = this.state

    if (loading === true && authedUser === null) {
      return <Redirect to='/' />
    }

    return (
      <div className='userHome-full'>
        <Nav avatar={authedUserAvatar}/>
        <div className="userHome-question-buttons-div">
          <button className="userHome-question-buttons userHome-unanswer-btn" onClick={(e) => this.renderQuestions(e)}>QUESTIONS TO ANSWER</button>
          <button className="userHome-question-buttons userHome-answer-btn" onClick={(e) => this.renderQuestions(e)}>ANSWERED QUESTIONS</button>
        </div>
        <div>
          {showUnansweredQuestions === true ? (
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
              <AnsweredQuestion 
                key={question.id}
                author={question.author}
                questionID={question.id}
                optionOne={question.optionOne.text}
                optionTwo={question.optionTwo.text}
                userID={question.author}
                optionOneVotes={question.optionOne.votes}
                optionTwoVotes={question.optionTwo.votes}
                />
            ))
          }
        </div>
      </div>
    )
  }
}

function mapStateToProps ({questions, users, authedUser}, props) {
  let unAnsweredQuestions = {}

  let answeredQuestions = {}

  let authedUserAvatar = ''

  if (authedUser !== null) {
    unAnsweredQuestions = Object.values(Object.values(questions)).filter((question) => 
      !question.optionOne.votes.includes(authedUser.id) && !question.optionTwo.votes.includes(authedUser.id)); 

    answeredQuestions = Object.values(questions).filter((question) =>
        question.optionOne.votes.includes(authedUser.id) || question.optionTwo.votes.includes(authedUser.id));
    
    authedUserAvatar = authedUser.avatarURL;
  }

  return {
    unAnsweredQuestions: Object.values(unAnsweredQuestions),
    answeredQuestions: Object.values(answeredQuestions),
    users: users,
    authedUser: authedUser,
    questions: questions,
    authedUserAvatar: authedUserAvatar
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