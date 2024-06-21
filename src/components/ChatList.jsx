import React from 'react'
import search from '../assets/search.png'

const ChatList = ({ users }) => {
    return (
        <>
            <div className='w-[100%] h-[15%]'>
                <div className='h-[60px] flex'>
                    <div className='w-[60px] h-[60px] mb-6 rounded-full border'></div>
                    <div className='m-3 text-xl font-bold text-white'>Chats</div>
                </div>
                <div>
                    <div className='flex w-[90%]  bg-slate-800 rounded-full my-2 relative '>
                        <input className='w-[90%] text-white outline-none mx-auto my-1 bg-slate-800 rounded-full px-3' type="text" />
                        <button className='w-[15px] right-2 top-[10px] absolute'>
                            <img src={search} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-[100%] scrl overflow-y-auto text-white h-[84%]'>
                {
                    users.map((u, i) => {
                        return (
                            <div key={i} className='flex p-3 cursor-pointer hover:bg-slate-600'>
                                <div className='w-[40px] h-[40px] rounded-full border'></div>
                                <div className='px-3 py-2 w-[100%] '>{u.socketId}</div>
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}

export default ChatList
