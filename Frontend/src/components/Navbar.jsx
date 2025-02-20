import React from 'react'

export default function Navbar({showAddFriend, addFriendCompo}) {
  return (
    <nav className={`${null?`bg-neutral-800`:`bg-[#fff4e6]`} flex justify-between py-4 px-6 sm:px-20 lg:px-40 items-center rounded-b-lg`}>
      <div className='flex items-center text-black text-2xl font-bold'>
        Split Bill
        <button className='ml-2' onClick={() => null}>🌘</button>
      </div>
      <div className=''>
      <button className='border-2 text-[#ffa94d] px-4 py-1 my-2 font-bold rounded-lg'
        onClick={()=>{addFriendCompo()}}
      >{showAddFriend?`close`:`Add Friend`}</button>
      </div>
    </nav>
  )
}