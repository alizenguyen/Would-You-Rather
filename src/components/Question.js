import React, { Component } from 'react'

class Question extends Component {
  render() {
    return(
      <div>
        <div>{this.props.author} asks:</div>
        <h3> Would you rather... </h3>
        <select>
          <option>{this.props.optionOne}</option>
          <option>{this.props.optionTwo}</option>
        </select>
      </div>  
    )
  }
}

export default Question