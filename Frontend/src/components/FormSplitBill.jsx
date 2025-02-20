import React, { useState } from 'react'

export default function FormSplitBill({selectedFriend, onSplitBill, onDelete}) {
  const [bill, setBill] = useState("");
  const [yourBill, setYourBill] = useState("");
  const [whoPayBill, setWhoPayBill] = useState('user');
  const paidByFriend = bill ? bill - yourBill : "";

  function handleSubmit() {

    if (!bill || !yourBill) return;
    const value = whoPayBill === 'user' ? paidByFriend : -paidByFriend;
    console.log(value);
    onSplitBill(value);
  }

  return <div className='bg-[#fff4e6] w-[95%] mx-auto rounded-lg p-4 my-2 text-center'>
    <h2 className='text-3xl font-bold'>Split a bill with {selectedFriend.name}</h2>

    <div className='flex justify-between items-center my-2 text-left'>
      <label className='text-xl'>💵 Bill Value</label>
      <input className='bg-white rounded-lg text-lg text-center w-[50%] h-[40px]'
        type="text" min={0}
        placeholder='total amount'
        value={bill}
        onChange={(e)=>setBill(Number(e.target.value))}
      />
    </div>

    <div className='flex justify-between items-center my-2 text-left'>
      <label  className='text-xl'>😒 Your Expense</label>
      <input className='bg-white rounded-lg text-lg text-center w-[50%] h-[40px]'
        type="text" min={0}
        
        value={yourBill}
        onChange={(e)=>setYourBill(Number(e.target.value) > bill ? yourBill : Number(e.target.value))}
      />
    </div>

    <div className='flex justify-between items-center my-2 text-left'>
      <label  className='text-xl'>😉 {selectedFriend.name}'s Expense</label>
      <input className='bg-white rounded-lg text-lg text-center w-[50%] h-[40px]'
        type="text" 
        value={paidByFriend} 
        disabled
      />
    </div>

    <div className='flex justify-between items-center my-2 text-left'>
      <label  className='text-xl'>🤷‍♂️ Who is paying the bill</label>
      <select className='bg-white rounded-lg text-lg text-center w-[30%] h-[40px]'
        value={whoPayBill} 
        onChange={(e)=>setWhoPayBill(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{`${selectedFriend.name}`}</option>
      </select>
    </div>

    <div className='flex justify-between items-center my-2 text-left'>
      <button className='border-2 border-[#ffa94d] e w-[20%] font-bold h-10 my-2 rounded-lg'
        onClick={()=>onDelete(selectedFriend.id)}
      >Delete</button>
      <button  onClick={handleSubmit} className='bg-[#ffa94d] w-[40%] font-bold h-10 my-2 rounded-lg'>Split Bill</button>
    </div>
  </div>
}
