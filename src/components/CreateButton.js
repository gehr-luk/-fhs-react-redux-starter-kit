import React from 'react'
import buttonStyles from './Button.module.css'
import createButtonStyles from './CreateMoneyTransaction.module.css'

const CreateButton = ({ onClick, children }) => (
  <button onClick={onClick} className={`${buttonStyles.button} ${buttonStyles.primary} ${createButtonStyles.createButton}`}>
    {children}
  </button>
)

export default CreateButton
