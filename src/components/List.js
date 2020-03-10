import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
  render () {
    const listItems = this.props.iOweList.map((iOweListItem) =>
      <ListItem
        key={iOweListItem.id}
        iOweListItem={iOweListItem}
      />
    )
    return <ul> {listItems} </ul>
  }
}

export default List
