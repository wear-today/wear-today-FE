import './App.css'
import {useState, useEffect} from 'react';
import Approuter from "./Approuter";
import { updateProfile } from "@firebase/auth";
import { auth } from "./firebase";


function App() {
  const [init, setInit] = useState(false)
  const [userdata, setUserdata] = useState(null)
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
