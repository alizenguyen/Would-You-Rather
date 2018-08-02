import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'

class NewQuestion extends Component {

  render() {
    const { authedUserAvatar } = this.props
    
    return(
      <Fragment>
        <Nav avatar={authedUserAvatar}/>
        <div className="new-question-full-div">
          <h2>Create New Question</h2>
          <form className='new-question-body'>
            <p> Complete the question: </p>
            <h3> Would you rather... </h3>
            <input placeholder='Enter Option One Here'/>
            <h3> OR </h3>
            <input placeholder='Enter Option Two Here'/>
            <input type='submit' />
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