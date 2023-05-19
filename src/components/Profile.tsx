import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { updateProfile } from "@firebase/auth";
import { auth, db } from "../firebase";
import { onSnapshot,updateDoc, doc} from "firebase/firestore"

function Profile({memo,refreshUser, userdata}) {
    const navigate = useNavigate();
    const [newDisplayName, setNewDisplayName] = useState(userdata.displayName)
    // const [memo, setMemo] = useState()
    // const { current: mymemo } = useRef(memo);
    const onLogOutClick = () => {
        auth.signOut();
        navigate("/");
    };
    const onChange = (event) => {
       const { target : {value},
    } = event;
    setNewDisplayName(value);
    }
    // const getPostings = async () => {
    //     const q = query(
    //       collection(dbService, "users")
    //     );
    //     onSnapshot(q, (querySnapshot) => {
    //       const docData = querySnapshot.docs.map((doc) => {
    //         return {
    //           id: doc.id,
    //           ...doc.data(),
    //         };
    //       });
    //       console.log(docData,'docdata')
    //       if(docData != undefined){
    //       setMemo(docData.filter(memos => memos.email == String(userdata.email)));
    //     }
    //     });
    //   };
    //   useEffect(()=>{
    //     getPostings()
    //     },[])
        console.log(userdata.displayName ,'!!!!','비교',newDisplayName,'!!!' )
    const onSubmit = async (event) => {
        event.preventDefault();
        const users = {
            email : userdata.email,
            displayName : newDisplayName, 
            uid : userdata.uid
            };
        
        if(userdata.displayName != newDisplayName ){
            await updateProfile(auth.currentUser, { displayName: newDisplayName });
            refreshUser();
            window.location.replace('/Profile')
            alert('닉네임이 변경되었습니다')
        }
       else{
            alert('잠시후 변경 해주세요')
        }
    }
  
    console.log(memo,'memo')

    // const getMywrites = async() => {
    //     const artmemos = query(collection(dbService,"artmemos"),where("creatorId", "==", userdata.uid));
    //     const artquery = getDocs(artmemos)
    //     artquery.forEach((doc)=>{
    //         console.log(doc.id, " => ", doc.data())
    //     })
    // };
    
//     useEffect(()=>{
//         try{
//             const getmemodata = collection(dbService,"artmemos")
//             //const a = query(getmemodata)
//             const data = await getDocs(getmemodata)
//             const newData = data.docs.map(doc => ({
//                 ...doc.data()
//               }));
//             setMemo(newData)
//         } catch(e){
//             console.error('에러낫슈',e);
//             return e.response
//         }
        
//         //console.log(memodata)
//         // setMemo(memodata)
//     },[])
//    console.log(memo)
    
        //,where("creatorId", "==", userdata.uid)
        //,orderBy('createdAt','desc')
        
   
    
    //const newData = data.docs.map(doc => ({ ...doc.data()}))
    
    return (
        <>
        <div className="contain">
            <div className="wrap1200">
            {userdata ? 
                <form className="profilebox" onSubmit={onSubmit}>
                    <input className="input" onChange={onChange} type="text" placeholder="Display neme" value={newDisplayName} />
                    <input className="btn_sub" type="submit" value="Update" />
                    <button className="btn_sub" onClick={onLogOutClick}>Logout</button>
                </form>
                : 'loading...'
            }
            </div>
        </div>
        <button><a href='/'>메인으로</a></button>
        </>
    )
}

export default Profile;
