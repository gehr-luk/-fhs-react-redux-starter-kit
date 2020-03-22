import styles from './Login.module.css'
import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const LoginLink = ({ value, href }) => {
  return (
    <Router>
      <Link to={href} className={`${styles.loginLink}`}>{value}</Link>
    </Router>
  )
}

export default LoginLink
