import React from 'react'
import SignIn from './components/SignIn'
import List from './components/List'

const App = () => {
  const state = {
    iOweList: [
      {
        id: 1,
        name: 'test0',
        paid: false
      },
      {
        id: 2,
        name: 'test1',
        paid: false
      },
      {
        id: 3,
        name: 'test2',
        paid: false
      }
    ],
    owesMeList: [
      {
        id: 1,
        name: 'somebody',
        paid: false
      }
    ]
  }
  return <div><SignIn /><List iOweList={state.iOweList} /></div>
}

export default App
