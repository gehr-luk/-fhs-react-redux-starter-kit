import React, { useState } from 'react'
import Button from './Button'
import styles from './Login.module.css'
import FormInput from './FormInput'
import LoginLink from './LoginLink'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault()
          alert(JSON.stringify({ email, password }))
        }} className={styles.form}
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
          href='/sign_up'
        />
      </form>
    </div>
  )
}

export default SignIn
