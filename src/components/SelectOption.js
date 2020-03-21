import React from 'react'
import style from './CreateMoneyTransaction.module.css'

const SelectOption = ({ user }) => {
  return (
    <option
      value={user.id}
      className={style.selectOption}
    >
      {user.name}
    </option>
  )
}

export default SelectOption
