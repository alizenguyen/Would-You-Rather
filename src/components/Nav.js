import React from 'react'
import '../css/Nav.css'
import logo from '../images/wyr_logo-01.png'
import avatar from '../images/ayo-ogun.jpg'

export default function Nav () {
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
            LEADERSHIP
          </li>
          <li id='left-nav'>
            <img className="nav-avatar" src={avatar} />
            LOGOUT
          </li>
        </ul>
      </nav>
      <div className="clearfix"></div>
    </div>
  )
}