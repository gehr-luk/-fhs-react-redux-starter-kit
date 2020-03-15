import React, { useState } from 'react'
import Button from './Button'
import styles from './Login.module.css'
import FormInput from './FormInput'
import LoginLink from './LoginLink'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <div className={`${styles.formContainer}`}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          if (password !== passwordConfirm) alert('Passwords not equal!')
          else alert(JSON.stringify({ username, password }))
        }} className={`${styles.form}`}
      >
        <FormInput
          value={username}
          onChange={setUsername}
          label='Username'
        />
        <FormInput
          value={password}
          onChange={setPassword}
          label='Password'
          type='password'
        />
        <FormInput
          value={passwordConfirm}
          onChange={setPasswordConfirm}
          label='Repeat Password'
          type='password'
        />
        <Button>
        Sign up
        </Button>
        <LoginLink
          value='Sign In'
          href='sign_in'
          class=''
        />
      </form>
    </div>
  )
}

export default SignUp
