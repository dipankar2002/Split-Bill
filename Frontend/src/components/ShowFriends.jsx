import React from 'react'



export default function ShowFriends({friends, onSelection, selectedFriend, showAddFriend, darkMode}) {

  // const isSelect = selectedFriend?.id === friend.id;
  // ${selectedFriend?`h-[220px]`:(showAddFriend?`h-[410px]`:`h-[560px]`)}

  return (
    <ul className={` ${selectedFriend?`h-[100%]`:(showAddFriend?`h-[410px]`:`h-[560px]`)} scrollbar-hide overflow-auto rounded-lg`}>
      {friends.map((ele,i)=>
        <FriendsLists 
          friend={ele} 
          key={i}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
          darkMode={darkMode}
        />)}
    </ul>
  )
}

function FriendsLists({friend, onSelection, selectedFriend, darkMode}) {

  const isSelect = selectedFriend?.id === friend.id;
  
  return (
    <li className={`${darkMode?` hover:bg-neutral-600 ${isSelect?`bg-neutral-600`:`bg-stone-900`}`:` hover:bg-[#fff4e6] ${isSelect?`bg-[#fff4e6]`:`bg-white`}`} grid grid-cols-[20%_60%_20%] w-[100%] my-2 rounded-lg p-2 items-center shadow-md`}>
      <img className='m-2 rounded-4xl'
        src={friend.image}
        alt={friend.name}
      />
      {/* This code is for text DP of their name */}
      {/* <div className={`${darkMode?`bg-black`:`${isSelect?`bg-white`:`bg-[#fff4e6]`}`} my-1 w-15 h-15 pt-3 rounded-4xl text-3xl font-bold text-center`}
        src={friend.image}
        alt={friend.name}
      >{(friend.name).toUpperCase().slice(0,2)}</div> */}

      <div className=''>
        <p className='text-xl font-bold'>{friend.name}</p>
        <p className={`${friend.balance!=0?friend.balance>0?`text-green-600`:`text-red-600`:null}`}>{friend.balance==0?`You and ${friend.name} is even`:friend.balance>0?`${friend.name} owes you ₹${friend.balance}`:`You owe ${friend.name} ₹${ Math.abs(friend.balance)}`}</p>
      </div>
      <button className={`${darkMode?`bg-neutral-700 text-[#ffa94d]`:``} bg-[#ffa94d] justify-self-end px-4 py-2 font-bold rounded-lg`}
        onClick={()=>onSelection(friend)}
      >{isSelect ? "Close" : "Select"}</button>
    </li>
  )
}