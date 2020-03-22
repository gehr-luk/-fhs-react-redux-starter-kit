import React from 'react'
import ListItem from './ListItem'
import styles from './CreateMoneyTransaction.module.css'

const List = ({ iOweList, userList }) => {
  let listItems = null;
  if (iOweList) {
    listItems = iOweList.map((iOweListItem) =>
      <ListItem
        key={iOweListItem.id}
        iOweListItem={iOweListItem}
        userList={userList}
      />
    )
    return <ul className={styles.debitList}> {listItems} </ul>
  }
  return <h2 className={styles.failure}>Nothing found!</h2>
}

export default List
