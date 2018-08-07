# Would You Rather 

"Would You Rather" is a Udacity React Nanodegree project incorporating React with Redux. The project's goal was to improve to improvethe predictability of your application's state, to establish strict rules for getting, listening, and updated the store, and to identify what state should live inside of Redux and what state should live inside of React components. 

## The Setup

* `git clone https://github.com/alizenguyen/would-you-rather.git`
* cd to correlating folder
* install all project dependencies with `npm install`
* start the development server with `npm start`

## How it works & Demo

The app begins on a login page where you will have the option to select a user from a precomposed list. Once a user is chosen, the page will be redirected to the user homepage. 

<img src="./src/images/login.gif" width="800">

Once the user is authenticated, the user will be able to toggle between the user's unanswered question and answered questions on his or her homepage, which is located at the root. The unanswered questions are shown by default.

To provide clarity, the chosen user's avatar will always be displayed in the nav bar. 

For unanswered questions, the user will be able to see who asked the question, the question, and the two options to choose from. 

For answered questions, the user will be able to see the question, the two options, the number of people who voted for that option, and what the user has chosen. 

<img src="./src/images/user-home.gif" width="800">

The user will also have the ability to ask his or her own questions. After clicking on 'New Question,' the application should show a form with the text 'Would You Rather' and inputs for creating the two options. Upon submitting the form, a new poll should be created, the user will be redirected to the user home page, and the new polling question should appear in the correct category on teh home page. 

<img src="./src/images/new-question.gif" width="800">

<img src="./src/images/leaderboard.gif" width="800">
