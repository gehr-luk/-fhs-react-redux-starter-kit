import React, { useState } from 'react'
import Button from './Button'
import styles from './Login.module.css'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={`${styles.formContainer}`}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          alert(JSON.stringify({ email, password }))
        }} className={`${styles.form}`}
      >
        <FormInput
          value={email}
          onChange={setEmail}
          label='Email'
        />
        <FormInput
          value={password}
          onChange={setPassword}
          label='Password'
          type='password'
        />
        <Button>
          Sign in
        </Button>
        <LoginLink
          value='Sign Up'
          href='sign_up'
        />
      </form>
    </div>
  )
}

const FormInput = ({ value, onChange, label, inputType = 'text' }) => {
  return (
    <div className={`${styles.inputContainer}`}>
      <label className={`${styles.formLabel}`}>{label}</label>
      <input
        type={inputType}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        className={`${styles.formInput}`}
      />
    </div>
  )
}

const LoginLink = ({ value, href }) => {
  return (
    <a href={href} className={`${styles.loginLink}`}>{value}</a>
  )
}

export default SignIn
