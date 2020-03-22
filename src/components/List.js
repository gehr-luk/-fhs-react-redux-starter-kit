import React from 'react'
import ListItem from './ListItem'
import styles from './CreateMoneyTransaction.module.css'

const List = ({ iOweList, userList }) => {
  const listItems = iOweList.map((iOweListItem) =>
    <ListItem
      key={iOweListItem.id}
      iOweListItem={iOweListItem}
      userList={userList}
    />
  )
  return <ul className={styles.debitList}> {listItems} </ul>
}

export default List
