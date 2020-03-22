import React from 'react'
import { storiesOf } from '@storybook/react'
import Main from './Main'
import { iOweList, userList } from './MockData'

storiesOf('Main', module).add('default', () => (
  <Main iOweList={iOweList} userList={userList} />
))
