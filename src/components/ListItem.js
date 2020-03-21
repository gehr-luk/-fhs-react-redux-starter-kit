import React from 'react'
import style from './transaction.module.css'

const ListItem = ({ iOweListItem, userList }) => {
  const amount = iOweListItem.amount.toString().replace('.', ',')
  const buttonInvisible = (iOweListItem.paidAt !== null) ? style.buttonInvisible : ''
  const textLineThrough = (iOweListItem.paidAt !== null) ? style.textLineThrough : ''
  console.log(typeof userList)
  return (
    <div className={style.listItemContainer}>
      <li className={style.listItem}>
        <p className={`${style.name} ${style.listItemPart} ${textLineThrough}`}>{userList[iOweListItem.debitorId].name}</p>
        <p className={`${style.amount} ${style.listItemPart} ${textLineThrough}`}>{amount}$</p>
        <button className={`${style.paidButton} ${style.listItemPart} ${buttonInvisible}`}>Paid</button>
      </li>
    </div>
  )
}

export default ListItem
