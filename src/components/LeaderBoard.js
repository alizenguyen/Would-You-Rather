import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../css/LeaderBoard.css'
import Nav from './Nav'

class LeaderBoard extends Component {
  render() {
    const { userArray } = this.props

    return(
      <div>
        <Nav />
        {userArray.map(user => (
          <div key={user.id} className="leader-item">
            <div>
              <img className="question-avatar" alt="user-avatar" src={user.avatarURL} /> 
            </div>
            <div>
              <h3 className="leader-name">{user.name}</h3>
              <p> Answered Questions: {user.answeredResults}</p>
              <p> Queestions Asked:   {user.questionsResults}</p>
              <p> Total Score: {user.ranking} </p>
            </div>
          </div> 
        ))}
        <div className="clearfix"></div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {

  const userArray = Object.keys(users).map((user) => {
    const userInfo = {
      avatarURL: users[user].avatarURL,
      name: users[user].name,
      answeredResults: Object.keys(users[user].answers).length,
      questionsResults: users[user].questions.length,
    }

    const ranking = userInfo.answeredResults + userInfo.questionsResults

    userInfo.ranking = ranking;

    return userInfo;
  }).sort((a,b) => {
    b.ranking - a.ranking
  })

  console.log(userArray)
  
  return {
    userArray,
  }
}

export default connect(mapStateToProps)(LeaderBoard)