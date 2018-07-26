import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/Question.css'

class Question extends Component {
  render() {
    const { users } = this.props

    return(
      <div className="question-full-div">
        <div>
          <img className="question-avatar" src={Object.values(users)[2]} /> 
        </div>
        <form className="question-form">
          <div className="question-title">{this.props.author} asks:</div>
          <h3> Would you rather... </h3>
          <input type='radio' name='option'/>
          <label className="question-choice"> {this.props.optionOne} </label>
          <br />
          <input type='radio' name='option'/> 
          <label className="question-choice">{this.props.optionTwo}</label>
          <br />
          <input className="question-button" type='submit' />
        </form>  
        <div className="clearfix"></div>
      </div>
    )
  }
}

function mapStateToProps ({ users }, { userID }) {
  const user = users[userID];

  return {
    users: user,
  }
}

export default connect(mapStateToProps)(Question)