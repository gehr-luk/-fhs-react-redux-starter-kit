import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './List'
import { iOweList, userList } from './MockData'

storiesOf('List', module).add('default', () => (
  <List iOweList={iOweList} userList={userList} />
))
