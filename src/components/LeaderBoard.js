import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/LeaderBoard.css'
import Nav from './Nav'

class LeaderBoard extends Component {
  render() {
    return(
      <div>
        <Nav />
  
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: users,
  }
}

export default connect(mapStateToProps)(LeaderBoard)