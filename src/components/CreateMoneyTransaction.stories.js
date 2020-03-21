import React from 'react'
import { storiesOf } from '@storybook/react'
import CreateMoneyTransaction from './CreateMoneyTransaction'

const userList =
  [
    {
      id: 1,
      name: 'user1'
    },
    {
      id: 2,
      name: 'user2'
    },
    {
      id: 3,
      name: 'user3'
    },
    {
      id: 4,
      name: 'user4'
    },
    {
      id: 5,
      name: 'user5'
    },
    {
      id: 6,
      name: 'user6'
    },
    {
      id: 7,
      name: 'user7'
    }
  ]

storiesOf('CreateMoneyTransaction', module).add('default', () => (
  <CreateMoneyTransaction userList={userList} />
))
