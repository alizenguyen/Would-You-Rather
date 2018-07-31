import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/AnsweredQuestion.css'

class Question extends Component {
  render() {
    const { users, authedUser } = this.props

    const totalLength = this.props.optionOneVotes.length + this.props.optionTwoVotes.length

    return(
      <div className="question-full-div">
        <div>
          <img className="question-avatar" alt="user-avatar" src={Object.values(users)[2]} /> 
        </div>
        <div className="question-form">
          {authedUser.id === this.props.author
            ? <div className="question-title">Asked by You:</div>
            : <div className="question-title">{this.props.author} asked:</div>}
          <h3> Results </h3>
          <br />
          {this.props.optionOneVotes.includes(Object.values(authedUser)[0])
          ? <div>
              <p>Your Vote</p>
              <p>Would you rather {this.props.optionOne} </p>
              <br />
              <p>Would you rather {this.props.optionTwo}</p>
              <br />
              <p>{this.props.optionOneVotes.length} out of {totalLength}</p>
            </div>
          : <div> 
              <p>Would you rather {this.props.optionOne} </p>
              <br />
              <p>You chose </p>
              <p>Would you rather {this.props.optionTwo}</p>
              <br />
              <p>{this.props.optionTwoVotes.length} out of {totalLength}</p>
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