import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './List'
import { withState } from '@dump247/storybook-state'

const state = {
  iOweList: [
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
  ],
  owesMeList: [
    {
      id: 1,
      name: 'somebody',
      paid: false
    }
  ]
}

storiesOf('List', module).add('default', withState(state)(({ store }) => (
  <List {...store.state} />
))
)
