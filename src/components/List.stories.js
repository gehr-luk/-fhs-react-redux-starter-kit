import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './List'

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

storiesOf('List', module).add('default', () => (
  <List iOweList={iOweList} />
))
