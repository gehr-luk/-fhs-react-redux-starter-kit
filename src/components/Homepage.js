import React from 'react'
import SwitchDeptor from './SwitchDeptor'
import CreateMoneyTransaction from './CreateMoneyTransaction'
import List from './List'

const Homepage = ({ userList, iOweList }) => {
  return (
    <div>
      <SwitchDeptor />
      <CreateMoneyTransaction userList={userList} />
      <List iOweList={iOweList} userList={userList} />
    </div>
  )
}

export default Homepage
