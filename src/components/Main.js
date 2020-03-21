import React from 'react'
import SwitchDeptor from './SwitchDeptor'
import CreateMoneyTransaction from './CreateMoneyTransaction'
import List from './List'

const Main = ({ userList, iOweList }) => {
  return (
    <div>
      <SwitchDeptor />
      <CreateMoneyTransaction userList={userList} />
      <List iOweList={iOweList} />
    </div>
  )
}

export default Main
