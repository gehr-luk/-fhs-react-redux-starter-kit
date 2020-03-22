import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Homepage from './components/Homepage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/i_owe_somebody' component={Homepage} />
        <Route path='/somebody_owes_me' component={Homepage} />
        <Route path='/sign_in' component={SignIn} />
        <Route path='/sign_Up' component={SignUp} />
        <Route path='/' component={Homepage} />
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App
