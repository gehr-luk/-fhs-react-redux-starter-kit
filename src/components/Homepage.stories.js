import React from 'react'
import { storiesOf } from '@storybook/react'
import Homepage from './Homepage'
import { iOweList, userList } from './MockData'

storiesOf('Homepage', module).add('default', () => (
  <Homepage iOweList={iOweList} userList={userList} />
))
