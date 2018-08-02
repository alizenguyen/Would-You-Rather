import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import '../css/Nav.css'
import logo from '../images/wyr_logo-01.png'

class Nav extends Component {
  render() {
    const { authedUserID, authedUserAvatar } = this.props

    return (
    <div className='full-nav'>
      <img className='nav-logo' src={logo} />
      <nav className='nav'>
        <ul>
          <Link to={'/home/' + authedUserID} className='nav-item'>
            HOME
          </Link>
          <Link to={'/newquestion'} className='nav-item'> 
            NEW QUESTION
          </Link>
          <Link to={'/leader'} className='nav-item'>
            LEADER BOARD
          </Link>
          <Link to={'/'} className='nav-item' id='left-nav'>
            <img className="nav-avatar" alt="user-avatar" src={authedUserAvatar} />
            LOGOUT
          </Link>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </div>
  )
  }
}

function mapStateToProps ({ authedUser }) {
  let authedUserAvatar = ''
  let authedUserID = ''

  if (authedUser !== null) {
    authedUserAvatar = authedUser.avatarURL;
    authedUserID = authedUser.id
  }

  return {
    authedUserAvatar: authedUserAvatar,
    authedUserID: authedUserID
  }
}

export default connect(mapStateToProps)(Nav)