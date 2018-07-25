import React, { Component } from 'react'
import '../css/Question.css'

class Question extends Component {
  render() {
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

export default Question