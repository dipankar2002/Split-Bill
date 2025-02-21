import React from 'react'

export default function Navbar({showAddFriend, addFriendCompo, darkMode, setDarkMode}) {
  return (
    <nav className={`${darkMode?`bg-neutral-800`:`bg-[#fff4e6]`} flex justify-between py-4 px-6 sm:px-20 lg:px-40 items-center rounded-b-lg`}>
      <div className='flex items-center text-2xl font-bold'>
        Split Bill
        <button className='ml-2' onClick={() => setDarkMode((val)=>!val)}>🌘</button>
      </div>
      <div className=''>
      <button className={`${darkMode?`text-[#ffa94d]`:``} border-2  px-4 py-1 my-2 font-bold rounded-lg`}
        onClick={()=>{addFriendCompo()}}
      >{showAddFriend?`close`:`Add Friend`}</button>
      </div>
    </nav>
  )
}