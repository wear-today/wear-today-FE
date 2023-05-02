import { getDatabase, ref, child, get  } from "firebase/database";
import { db } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query } from "firebase/firestore";

 type commenttt = {
        name: string;
        region: string;
        text: string;
        postId: number;
    }


//GET
function fetchCommentData() {
    const queryget =  query(collection(db, "comments"));
    onSnapshot(queryget, (snapshot)=> {
      return  snapshot.docs.map(doc=>({...doc.data()}))
    })
}
//POST
export async function fetchPostComment(data:comment) {
    const req = await addDoc(collection(db, "comments"), {data})
    return req
}

//DELETE
export async function fetchDeleteComment(postId:number) {
    const data =  doc(db, "comments", "postId")
    const res =await deleteDoc(data)
    return res;
}


function fetchComment() {
     return getDocs(collection(db, 'comments')).then((snap) => {
      return  snap.docs.map((doc) => ({ ...doc.data().data }));
    });
  };


export type {commenttt}
export {fetchCommentData,fetchComment}