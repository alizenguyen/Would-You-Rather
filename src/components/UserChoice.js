import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadingUsers } from '../actions/users'
import { WSAEUSERS } from 'constants';

class UserChoice extends Component {
  state = {
    users: {}
  }

  componentDidMount() {
    this.props.getUsers().then(response => {
      this.setState({ users: response.users})
    })
  }

  render () {
    const { users } = this.state
    
    return (
      <div>
        <h1>Choose User:</h1>
        <ul>
          {Object.keys(users).map( user => (
            <li key={users[user].id}>
              {users[user].name}
            </li>  
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(loadingUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChoice);