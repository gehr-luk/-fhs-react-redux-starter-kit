import React from 'react'
import style from './transaction.module.css'

const ListItem = ({ iOweListItem }) => {
  const amount = iOweListItem.amount.toString().replace('.', ',')

  return (
    <div className={style.listItemContainer}>
      <li className={style.listItem}>
        <p className={`${style.name} ${style.listItemPart}`}>{iOweListItem.name}</p>
        <p className={`${style.amount} ${style.listItemPart}`}>{amount}$</p>
        <button className={`${style.paidButton} ${style.listItemPart}`}>Paid</button>
      </li>
    </div>
  )
}

export default ListItem
