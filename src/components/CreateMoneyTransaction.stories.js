import React from 'react'
import { storiesOf } from '@storybook/react'
import CreateMoneyTransaction from './CreateMoneyTransaction'
import { userList } from './MockData'

storiesOf('CreateMoneyTransaction', module).add('default', () => (
  <CreateMoneyTransaction userList={userList} />
))
