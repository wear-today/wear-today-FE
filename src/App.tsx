import './App.css';
import { useState, useEffect } from 'react';
import Approuter from './Approuter';
import { updateProfile } from '@firebase/auth';
import { auth } from './firebase';
import { User } from './types/user';
import Spinner from './components/Spinner';
import { UserContext } from './context/userContext';

function App() {
  const [init, setInit] = useState(false);

  const [userdata, setUserdata] = useState<User | null>(null);
  useEffect(() => {
    auth.onAuthStateChanged((user: User) => {
      if (user) {
        setUserdata({
          displayName: user.displayName,
          uid: user.uid,
          email: user.email,
          updateProfile: (args) =>
            updateProfile(user, { displayName: user.displayName }),
        });
      } else {
        setUserdata(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = auth.currentUser;
    setUserdata({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) =>
        updateProfile(user, { displayName: user.displayName }),
    });
  };

  return (
    <div className="App">
      <UserContext.Provider value={{ userdata, refreshUser }}>
        {init ? <Approuter /> : <Spinner />}
      </UserContext.Provider>
    </div>
  );
}

export default App;
