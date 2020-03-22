import React from 'react'
import style from './SwitchDeptor.module.css'
import loginStyle from './Login.module.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const SwitchDeptor = () => {
  return (
    <Router>
      <nav className={style.switchDeptorContainer}>
        <Link to='/i_owe_somebody' className={`${loginStyle.loginLink} ${style.switchLink}`}>I owe somebody</Link>
        <Link to='/somebody_owes_me' className={`${loginStyle.loginLink} ${style.switchLink}`}>Somebody owes me</Link>
      </nav>
    </Router>
  )
}

export default SwitchDeptor
