import React, { useState } from 'react'
import NavBar from './components/NavBar'
import ChatContainer from './components/ChatContainer'
import ChatList from './components/ChatList'

const App = () => {
  const conversesion = []
  const [users, setUsers] = useState([])
  return (
    <>
      <div className="w-[100%] h-[100vh] bg-slate-900 flex">
        <div className="w-[25%] h-[100%] bg-[rgba(0,0,0,0.2)]">
          <ChatList users={users} />
        </div>
        <div className="w-[75%] h-[100%]">
          <div className="w-[100%] h-[10%] bg-[rgba(0,0,0,0.2)]">
            <NavBar />
          </div>
          <div className="w-[100%] h-[90%] relative">
            <ChatContainer setUsers={setUsers} conversesion={conversesion} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
