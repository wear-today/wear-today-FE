import './App.css'
import {useState, useEffect, useRef} from 'react';
import Approuter from "./Approuter";
import { updateProfile } from "@firebase/auth";
import { auth, db } from "./firebase";
import { onSnapshot,collection,query} from "firebase/firestore"


function App() {
  const [init, setInit] = useState(false)
  const [userdata, setUserdata] = useState(null)
  const [memo, setMemo] = useState()
  const [memos, setMemos] = useState()
  const { current: mymemo } = useRef(memo);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserdata({
          displayName: user.displayName,
          uid: user.uid,
          email : user.email,
          updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
        }) 
      }
      else {
        setUserdata(null)
      }
      setInit(true)
    })
  },[])
  console.log(userdata)
  const refreshUser = () => {
    const user = auth.currentUser;
    setUserdata({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
    });
  }

  return (
    <div className="App">
      {init ? <Approuter  isLoggedIn={Boolean(userdata)} userdata={userdata}/> : "Initializing...."}
    </div>
  );
}

export default App;
