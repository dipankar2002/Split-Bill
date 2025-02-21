import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import ShowFriends from './components/ShowFriends';
import FormAddFriend from './components/FormAddFriend';
import FormSplitBill from './components/FormSplitBill';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendList, setFriendList] = useState([]);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    try {
      const storedList = JSON.parse(localStorage.getItem("list")) || [];
      setFriendList(storedList);
    } catch (error) {
      console.error("LocalStorage error:", error);
      setFriendList(initialFriends);
    }
  }, []);
  

  function addFriendFunc(obj) { 
    setFriendList((ele) => {
      const newList = [...ele, obj];
      localStorage.setItem("list", JSON.stringify(newList));
      return newList;
    });
  }

  function handleSplitBill(value) {
    console.log(value);
    
    setFriendList((val) => {
      const updatedArray = val.map((ele) => 
        ele.id === selectedFriend.id ? { ...ele, balance: ele.balance + value } : ele
      );
      localStorage.setItem("list", JSON.stringify(updatedArray));
      return updatedArray;
    })
    setSelectedFriend(null);
  }

  function deleteFriend(id,name) {
    if(window.confirm(`Want to delete ${name}`)) {
      setFriendList((ele)=>{
        const newList = ele.filter((item)=>item.id !== id);
        localStorage.setItem("list", JSON.stringify(newList));
        return newList;
      });
    }
    setSelectedFriend(null);
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((val)=>(val?.id === friend.id ? null : friend))
    setShowAddFriend(false);
  }

  function addFriendCompo() {
    setSelectedFriend(null);
    setShowAddFriend((ele)=>!ele);
  }

  return (
    <div >
      <Navbar 
        showAddFriend={showAddFriend} 
        addFriendCompo={addFriendCompo}
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 md:w-[95%] lg:w-[70%] xl:w-[50%] md:mt-10 lg:mt-20 xl:mt-30 mx-auto'>
        {selectedFriend && 
          <FormSplitBill 
            selectedFriend={selectedFriend} 
            onSplitBill={handleSplitBill} 
            onDelete={deleteFriend}
            darkMode={darkMode}
        />}
        <div className={` ${selectedFriend?`h-[30vh]`:(showAddFriend?`h-[100%]`:`h-[100%]`)} w-[100%] md:h-[60vh] p-2 mx-auto`}>
          {showAddFriend && 
            <FormAddFriend 
              onAddFriend={addFriendFunc}
              darkMode={darkMode}
            />}
          <ShowFriends 
            friends={friendList} 
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
            showAddFriend={showAddFriend}
            darkMode={darkMode}
          />
        </div>
      </div>
    </div>
  )
}

export default App
