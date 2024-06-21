import React from 'react'

const Chat = ({ user, context }) => {
    return (
        <div className={`w-[100%] ${!user?'justify-start':'justify-end'} flex`}>
            <div className='w-[20px] mt-[12px] h-[20px] rounded-full border'></div>
            <div className={`my-2 mr-4 ml-1 text-[#7a7a7a] ${!user ? 'bg-[rgba(0,0,0,0.5)] w-[60%]' : 'bg-[rgba(150,114,114,0.34)] max-w-[60%]'}  text-justify rounded-md p-2 `}>
                {context}
            </div>
        </div>
    )
}

export default Chat
