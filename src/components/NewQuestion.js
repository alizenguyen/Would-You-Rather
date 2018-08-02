import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import '../css/NewQuestion.css'

class NewQuestion extends Component {

  render() {
    const { authedUserAvatar } = this.props

    return(
      <Fragment>
        <Nav avatar={authedUserAvatar}/>
        <div className="new-question-full-div">
          <h2 className='complete-question-title'>Create New Question</h2>
          <form className='new-question-body'>
            <h1 className='title'> Would you rather... </h1>
            <input placeholder='Enter Option One Here' className='question-option'/>
            <h3 className='complete-question-title'> OR </h3>
            <input placeholder='Enter Option Two Here' className='question-option'/>
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