import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './List'

const iOweList =
[
  {
    id: 1,
    name: 'test0',
    paid: false
  },
  {
    id: 2,
    name: 'test1',
    paid: false
  },
  {
    id: 3,
    name: 'test2',
    paid: false
  }
]

storiesOf('List', module).add('default', () => (
  <List iOweList={iOweList} />
))
