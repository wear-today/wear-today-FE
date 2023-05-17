import { db } from "../firebase";
import { addDoc, collection,  doc, getDocs, onSnapshot, query, updateDoc } from "firebase/firestore";
import { CommentForm } from "../types/comment";
import { deleteDoc } from "firebase/firestore";



//GET
export async function fetchCommentData() {
    const queryget =  query(collection(db, "comments"));
    onSnapshot(queryget, (snapshot)=> {
      return  snapshot.docs.map(doc=>({id: doc.id,...doc.data()}))
    })
}
//POST
export async function fetchPostComment(data:CommentForm) {
    const req = await addDoc(collection(db, "comments"), data)
    return req
}

//DELETE
export async function fetchDeleteComment(collectionId:string) {
    const data =  doc(db, "comments", collectionId)
    try{
        await deleteDoc(data)
    } catch(e){
        console.error(e)
    }
}

//PUT
export async function fetchPutComment(collectionId:string, newtext:string) {
    const data = doc(db, "comments", collectionId )
    try{
        await updateDoc(data, {text:newtext})
    } catch(e) {
        console.error(e)
    }
}
