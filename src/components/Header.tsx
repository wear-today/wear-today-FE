import { useContext } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/userContext';
function Header() {
  const data = useContext(UserContext);
  const { userdata } = data;

  const isLoggedIn = Boolean(userdata);
  const navigate = useNavigate();

  const Logout = () => {
    auth.signOut();
    navigate('/');
    alert('로그아웃 되었습니다');
  };

  return (
    <header className="h-18 w-full flex gap-2 p-4 border-b-2 border-blue-300">
      <h2 className="text-xl font-bold pl-20">
        오늘, 당신의 옷차림은 어떤가요?
      </h2>
      {!isLoggedIn ? (
        <button className="flex w-12 h-8 text-sm p-1 ml-4">
          <a href="/Login">login</a>
        </button>
      ) : (
        <>
          <button className="flex w-12 h-8 text-sm p-1 ml-4">
            <a onClick={Logout}>Logout</a>
          </button>
          <button className="flex w-12 h-8 text-sm p-1 ml-4">
            <a href="/Profile">profile</a>
          </button>
        </>
      )}
    </header>
  );
}

export default Header;
