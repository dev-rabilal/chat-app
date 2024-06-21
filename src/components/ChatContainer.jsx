import React, { useEffect, useRef, useState } from 'react'
import Chat from './Chat'
import SearchInput from './SearchInput'
import { io } from "socket.io-client";

const ChatContainer = ({ conversesion, setUsers }) => {
    const [userId, setUserId] = useState(1)
    const socket = useRef(io('ws://localhost:7001'))
    useEffect(() => {
        setUserId(Math.floor(Math.random() * 10) + 1)
    }, [])
    useEffect(() => {
        socket.current.emit('addUser', userId)
        socket.current.on('getAllUsers', users => {
            setUsers(users)
        })
    }, [userId])
    return (
        <>

            <div className='w-[80%] h-[85%] scrl overflow-y-auto mx-auto'>
                {
                    conversesion.map((data, i) => {
                        return <Chat key={i} user={data?.user} context={data?.content} />
                    })
                }
            </div>
            <div className='w-[100%] absolute bottom-2 flex justify-center'>
                <SearchInput />
            </div>
        </>
    )
}

export default ChatContainer
