import { getDatabase, ref, child, get  } from "firebase/database";
import { db } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, query } from "firebase/firestore";
import { CommentForm } from "../types/comment";



//GET
export async function fetchCommentData() {
    const queryget =  query(collection(db, "comments"));
    onSnapshot(queryget, (snapshot)=> {
      return  snapshot.docs.map(doc=>({id: doc.id,...doc.data()}))
    })
}
//POST
export async function fetchPostComment(data:CommentForm) {
    const req = await addDoc(collection(db, "comments"), {data})
    return req
}

//DELETE
export async function fetchDeleteComment(postId:number) {
    const data =  doc(db, "comments", "postId")
    const res =await deleteDoc(data)
    return res;
}
