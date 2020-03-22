import styles from './Login.module.css'
import React from 'react'
import { Link } from 'react-router-dom'

const LoginLink = ({ value, href }) => {
  return (
    <Link to={href} className={`${styles.loginLink}`}>{value}</Link>
  )
}

export default LoginLink
