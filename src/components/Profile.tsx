import React, { useEffect, useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '@firebase/auth';
import { auth, db } from '../firebase';
import { onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { UserContext } from '../context/userContext';

function Profile({ memo }) {
  const { userdata, refreshUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(userdata.displayName);
  // const [memo, setMemo] = useState()
  // const { current: mymemo } = useRef(memo);
  const onLogOutClick = () => {
    auth.signOut();
    navigate('/');
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value);
  };

  console.log(userdata.displayName, '!!!!', '비교', newDisplayName, '!!!');
  const onSubmit = async (event) => {
    event.preventDefault();
    const users = {
      email: userdata.email,
      displayName: newDisplayName,
      uid: userdata.uid,
    };

    if (userdata.displayName != newDisplayName) {
      await updateProfile(auth.currentUser, { displayName: newDisplayName });
      refreshUser();
      window.location.replace('/Profile');
      alert('닉네임이 변경되었습니다');
    } else {
      alert('잠시후 변경 해주세요');
    }
  };

  // console.log(memo, 'memo');

  return (
    <>
      <div className="contain">
        <div className="wrap1200">
          {userdata ? (
            <form className="profilebox" onSubmit={onSubmit}>
              <input
                className="input"
                onChange={onChange}
                type="text"
                placeholder="Display neme"
                value={newDisplayName}
              />
              <input className="btn_sub" type="submit" value="Update" />
              <button className="btn_sub" onClick={onLogOutClick}>
                Logout
              </button>
            </form>
          ) : (
            'loading...'
          )}
        </div>
      </div>
      <button>
        <a href="/">메인으로</a>
      </button>
    </>
  );
}

export default Profile;
