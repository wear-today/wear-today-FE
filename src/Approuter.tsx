import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Join from './components/Join';
import Profile from './components/Profile';
import { User } from './types/user';

interface Props {
  isLoggedIn: boolean;
  userdata: User;
}

const Approuter = ({ isLoggedIn, userdata, refreshUser }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main isLoggedIn={isLoggedIn} userdata={userdata} />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Profile" element={<Profile refreshUser={refreshUser} userdata={userdata} /> }/>
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
