import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadingUsers } from '../actions/users'
import '../css/UserChoice.css';

class UserChoice extends Component {
  state = {
    users: {}
  }

  //CALLS getUsers() FUNCTION AND SETS THE STATE AS THE RESPONSE
  componentDidMount() {
    this.props.getUsers().then(response => {
      this.setState({ users: response.users})
    })
  }

  render () {
    const { users } = this.state
    
    return (
      <div>
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pick A User
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {Object.keys(users).map(user => (
              <li className="user-dropdown" key={users[user].id}>
                <a> {users[user].name} </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

//GRABS THE USERS AS A PROP
const mapStateToProps = state => {
  return {
    users: state.users
  }
}

//GRABS THE loadingUser() FUNCTION FROM ACTIONS TO BE ABLE TO USE IN THIS COMPONENT
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(loadingUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserChoice);