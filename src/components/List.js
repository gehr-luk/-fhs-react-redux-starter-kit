import React from 'react'
import ListItem from './ListItem'

const List = ({ iOweList, userList }) => {
  const listItems = iOweList.map((iOweListItem) =>
    <ListItem
      key={iOweListItem.id}
      iOweListItem={iOweListItem}
      userList={userList}
    />
  )
  return <ul> {listItems} </ul>
}

export default List
