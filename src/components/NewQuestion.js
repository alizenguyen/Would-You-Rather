import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import { addQuestion } from '../actions/questions'
import '../css/NewQuestion.css'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleChangeOptionOne = (e) => {
    const optionOne = e.target.value

    this.setState({ optionOne: optionOne })
  }

  handleChangeOptionTwo = (e) => {
    const optionTwo = e.target.value

    this.setState({ optionTwo: optionTwo })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(addQuestion(optionOne, optionTwo))
  }

  render() {
    const { authedUserAvatar } = this.props
    const { optionOne, optionTwo } = this.state

    return(
      <Fragment>
        <Nav avatar={authedUserAvatar}/>
        <div className="new-question-full-div">
          <h2 className='complete-question-title'>Create New Question</h2>
          <form className='new-question-body' onSubmit={this.handleSubmit}>
            <h1 className='title'> Would you rather... </h1>
            <input 
              placeholder='Enter Option One Here' 
              value={optionOne}
              className='question-option' 
              onChange={this.handleChangeOptionOne}
              />
            <h3 className='complete-question-title'> or </h3>
            <input 
              placeholder='Enter Option Two Here' 
              value={optionTwo}
              className='question-option' 
              onChange={this.handleChangeOptionTwo}
              />
            <input type='submit' className='submit-btn'/>
          </form>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  let authedUserAvatar = ''

  if (authedUser !== null) {
    authedUserAvatar = authedUser.avatarURL;
  }

  return {
    authedUserAvatar: authedUserAvatar
  }
}

export default connect(mapStateToProps)(NewQuestion)