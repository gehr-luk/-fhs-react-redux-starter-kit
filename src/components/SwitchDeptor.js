import React from 'react'
import style from './SwitchDeptor.module.css'
import loginStyle from './Login.module.css'

const SwitchDeptor = () => {
  return (
    <div className={style.switchDeptorContainer}>
      <a href={'#'} className={`${loginStyle.loginLink} ${style.switchLink}`}>I owe somebody</a>
      <a href={'#'} className={`${loginStyle.loginLink} ${style.switchLink}`}>Somebody owes me</a>
    </div>
  )
}

export default SwitchDeptor
