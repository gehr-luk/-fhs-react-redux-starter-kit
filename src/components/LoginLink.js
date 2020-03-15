import styles from './Login.module.css'
import React from 'react'

const LoginLink = ({ value, href }) => {
  return (
    <a href={href} className={`${styles.loginLink}`}>{value}</a>
  )
}

export default LoginLink
