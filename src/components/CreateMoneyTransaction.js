import styles from './CreateMoneyTransaction.module.css'
import React, { useState } from 'react'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import CreateButton from './CreateButton'

const CreateMoneyTransaction = ({ userList }) => {
  const [amount, setAmount] = useState('')
  const [user, setUser] = useState('')

  return (
    <div>
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          alert(JSON.stringify({ user, amount }))
        }} className={styles.createMoneyContainer}
      >
        <FormSelect
          userList={userList}
          onChange={setUser}
          label='User'
        />
        <FormInput
          value={amount}
          onChange={setAmount}
          label='Amount'
          type='text'
        />
        <CreateButton>
          Create
        </CreateButton>
      </form>
    </div>
  )
}

export default CreateMoneyTransaction
