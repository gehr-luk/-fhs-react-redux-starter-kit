import React from 'react'
import style from './transaction.module.css'

const ListItem = ({ iOweListItem, userList }) => {
  let amount = null;
  let buttonInvisible = null;
  let textLineThrough = null;
  if (iOweListItem) {
    amount = iOweListItem.amount.toString().replace('.', ',')
    buttonInvisible = (iOweListItem.paidAt !== null) ? style.buttonInvisible : ''
    textLineThrough = (iOweListItem.paidAt !== null) ? style.textLineThrough : ''
  }

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
