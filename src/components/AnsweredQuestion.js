import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/AnsweredQuestion.css'

class Question extends Component {
  render() {
    const { users, authedUser, author, optionOne, optionTwo, optionOneVotes, optionTwoVotes } = this.props

    const totalLength = optionOneVotes.length + optionTwoVotes.length
    const percentOne = (optionOneVotes.length / totalLength) * 100
    const percentTwo = (optionTwoVotes.length / totalLength) * 100

    return(
      <div className="answered-full-div">
        <div>
          <img className="question-avatar" alt="user-avatar" src={Object.values(users)[2]} /> 
        </div>
        <div className="question-form">
          {authedUser.id === author
            ? <div className="question-title">Asked by You:</div>
            : <div className="question-title">{author} asked:</div>}
          <h3> Results </h3>
          <br />
          {optionOneVotes.includes(Object.values(authedUser)[0])
          ? <div>
              <p>Your Vote</p>
              <p>Would you rather {optionOne} </p>
              <div className="progress">
                <div className="progress-bar" style={{width: `${percentOne}%`}}></div>
              </div>
              <p>{optionOneVotes.length} out of {totalLength}</p>
              <br />
              <p>Would you rather {optionTwo}</p>
              <div className="progress">
                <div className="progress-bar" style={{width: `${percentTwo}%`}}></div>
              </div>
              <p>{optionTwoVotes.length} out of {totalLength}</p>
            </div>
          : <div> 
              <p>Would you rather {optionOne} </p>
              <div className="progress">
                <div className="progress-bar" style={{width: `${percentOne}%`}}></div>
              </div>
              <p>{optionOneVotes.length} out of {totalLength}</p>
              <br />
              <p>You chose </p>
              <p>Would you rather {optionTwo}</p>
              <div className="progress">
                <div className="progress-bar" style={{width: `${percentTwo}%`}}></div>
              </div>
              <p>{optionTwoVotes.length} out of {totalLength}</p>
            </div>
          }
        </div>  
        <div className="clearfix"></div>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }, { userID }) {
  const user = users[userID];

  return {
    users: user,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Question)