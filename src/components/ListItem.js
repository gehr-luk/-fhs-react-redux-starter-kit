import React from 'react'
import style from './transaction.module.css'

const ListItem = ({ iOweListItem }) => {
  const amount = iOweListItem.amount.toString().replace('.', ',')
  const buttonInvisible = iOweListItem.paid ? style.buttonInvisible : ''
  const textLineThrough = iOweListItem.paid ? style.textLineThrough : ''
  
  return (
    <div className={style.listItemContainer}>
      <li className={style.listItem}>
        <p className={`${style.name} ${style.listItemPart} ${textLineThrough}`}>{iOweListItem.name}</p>
        <p className={`${style.amount} ${style.listItemPart} ${textLineThrough}`}>{amount}$</p>
        <button className={`${style.paidButton} ${style.listItemPart} ${buttonInvisible}`}>Paid</button>
      </li>
    </div>
  )
}

export default ListItem
