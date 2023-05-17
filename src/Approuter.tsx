import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Login from './components/Login';
import Join from './components/Join';
import { User } from './types/user';

interface Props {
  isLoggedIn: boolean;
  userdata: User;
}

const Approuter = ({ isLoggedIn, userdata }: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main isLoggedIn={isLoggedIn} userdata={userdata} />}
        />
        <Route path="/Login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
