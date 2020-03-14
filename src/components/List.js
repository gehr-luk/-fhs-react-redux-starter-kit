import React from 'react'
import ListItem from './ListItem'

const List = ({ iOweList }) => {
  const listItems = iOweList.map((iOweListItem) =>
    <ListItem
      key={iOweListItem.id}
      iOweListItem={iOweListItem}
    />
  )
  return <ul> {listItems} </ul>
}

export default List
