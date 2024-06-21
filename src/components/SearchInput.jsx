import React from 'react'
import uparrow from '../assets/upArrow.svg'

const SearchInput = () => {
    return (
        <>
            <div className='w-[70%] bg-slate-800 flex justify-between rounded-3xl'>
                <textarea className='w-[90%] scrl bg-slate-800 text-white outline-none rounded-3xl p-4' type="text" />
                <button className='m-[20px] bg-slate-600 rounded-full p-2'>
                    <img src={uparrow} className='w-[20px] rotate-180' />
                </button>
            </div>
        </>
    )
}

export default SearchInput
