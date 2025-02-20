import React, { useState } from 'react'

export default function FormAddFriend({onAddFriend}) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    if(!name || !imageUrl) return;

    // const id = Math.floor(Math.random()*1000);
    const id = Date.now()
    const newFriend = {
      id: id,
      name: name,
      image: `${imageUrl}?u=${id}`,
      balance: 0,
    }

    setName("");
    setImageUrl("https://i.pravatar.cc/48");
    onAddFriend(newFriend);
  }

  return (
    <form className="bg-[#fff4e6] my-4 rounded-lg text-center" onSubmit={handleSubmit}>
      <div className='flex items-center justify-between px-4 py-2'>
        <label className='text-xl font-bold'>👫 Friend name</label>
        <input className='bg-white rounded-lg text-md text-center w-[180px] h-[40px]'
          type="text"
          placeholder='Enter Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* <div className='flex items-center justify-between px-4 py-2'>
        <label className='text-xl font-bold'>🌄 Image URL</label>
        <input className='bg-white rounded-lg text-md text-center w-[180px] h-[40px]'
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div> */}

      <button className="bg-[#ffa94d] w-[80%] font-bold h-10 my-2 rounded-lg">Add Friend</button>
    </form>
  );
}
