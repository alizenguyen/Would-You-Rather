import React from 'react'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
            Home
        </li>
        <li>
            New Question
        </li>
        <li>
            Leadership
        </li>
        <li id='left-nav'>
            Logout
        </li>
      </ul>
    </nav>
  )
}