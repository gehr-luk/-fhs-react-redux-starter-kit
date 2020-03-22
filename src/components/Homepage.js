import React from 'react'
import SwitchDeptor from './SwitchDeptor'
import CreateMoneyTransaction from './CreateMoneyTransaction'
import List from './List'
import { BrowserRouter as Router, Redirect } from 'react-router-dom'

function checkAuth () {
  return true
}

const Homepage = ({ userList, iOweList }) => {
  const isAuth = checkAuth()
  if (isAuth) {
    return (
      <div>
        <SwitchDeptor />
        <CreateMoneyTransaction userList={userList} />
        <List iOweList={iOweList} userList={userList} />
      </div>
    )
  }
  return <Router><Redirect to='/sign_in' /></Router>
}

export default Homepage
