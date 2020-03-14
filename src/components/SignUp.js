import React, { useState } from 'react'
import Button from './Button'

const SignUp = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  return (
    <form onSubmit={(evt) => {
      evt.preventDefault()
      if (password !== passwordConfirm) alert('Passwords not equal!')
      else alert(JSON.stringify({ username, password }))
    }}
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
        Sign in
      </Button>
      <SignLink
        value='Sign In'
        href='sign_in'
        class=''
      />
    </form>
  )
}

const FormInput = ({ value, onChange, label, inputType = 'text' }) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={inputType}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </>
  )
}

const SignLink = ({ value, href }) => {
  return (
    <a href={href}>{value}</a>
  )
}

export default SignUp
