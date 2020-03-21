import React from 'react'
import { storiesOf } from '@storybook/react'
import Main from './Main'

const iOweList =
  [
    {
      id: 1,
      amount: 10.50,
      name: 'test0',
      paid: false
    },
    {
      id: 2,
      amount: 10.50,
      name: 'test1',
      paid: true
    },
    {
      id: 3,
      amount: 10.50,
      name: 'test2',
      paid: false
    },
    {
      id: 4,
      amount: 10.50,
      name: 'test3',
      paid: true
    },
    {
      id: 5,
      amount: 10.50,
      name: 'test4',
      paid: false
    }
  ]
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

storiesOf('Main', module).add('default', () => (
  <Main iOweList={iOweList} userList={userList} />
))
