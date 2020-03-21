import styles from './CreateMoneyTransaction.module.css'
import React from 'react'
import SelectOption from './SelectOption'

const FormSelect = ({ userList, onChange, label, forSelect }) => {
  const selectOptions = userList.map((user) =>
    <SelectOption
      key={user.id}
      user={user}
    />
  )

  return (
    <div className={styles.formSelectContainer}>
      <label className={styles.label} form={forSelect}>{label}</label>
      <select
        id={forSelect}
        name={forSelect}
        className={styles.formSelect}
        onChange={(evt) => onChange(evt.target.value)}
      >
        {selectOptions}
      </select>
    </div>
  )
}

export default FormSelect
