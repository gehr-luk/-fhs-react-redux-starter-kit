import styles from './Login.module.css'
import React from 'react'

const FormInput = ({ value, onChange, label, type = 'email' }) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.formLabel}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        className={styles.formInput}
      />
    </div>
  )
}

export default FormInput
