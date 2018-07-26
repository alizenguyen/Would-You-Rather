import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Question.css'

class Question extends Component {
  render() {
    const { users } = this.props

    console.log(users)
    console.log(Object.values(users))

    return(
      <div className="question-full-div">
        <div>
          <img className="question-avatar" src={Object.values(users)[2]} /> 
        </div>
        <form className="question-form">
          <div>{this.props.author} asks:</div>
          <h3> Would you rather... </h3>
          <input type='radio' />
          <label> {this.props.optionOne} </label>
          <br />
          <input type='radio' /> 
          <label>{this.props.optionTwo}</label>
          <br />
          <input type='submit' />
        </form>  
        <div className="clearfix"></div>
      </div>
    )
  }
}

function mapStateToProps ({ users }, { userID }) {
  const user = users[userID];
  
  console.log(user)

  return {
    users: user,
  }
}

export default connect(mapStateToProps)(Question)