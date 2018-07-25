import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Question.css'

class Question extends Component {
  render() {
    const { users } = this.props
    const {
      avatarURL
    } = users

    return(
      <form>
        <div>{this.props.author} asks:</div>
        <h3> Would you rather... </h3>
        <input type='radio' />
        <label> {this.props.optionOne} </label>
        <input type='radio' /> 
        <label>{this.props.optionTwo}</label>
        <input type='submit' />
      </form>  
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