import React from 'react'
import '../css/Nav.css'
import logo from '../images/wyr_logo-01.png'

export default function Nav (props) {
  return (
    <div className='full-nav'>
      <img className="nav-logo" src={logo} />
      <nav className='nav'>
        <ul>
          <li>
            HOME
          </li>
          <li>
            NEW QUESTION
          </li>
          <li>
            LEADER BOARD
          </li>
          <li id='left-nav'>
            <img className="nav-avatar" alt="user-avatar" src={props.avatar} />
            LOGOUT
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </div>
  )
}