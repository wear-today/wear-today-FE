import { db } from "../firebase";
import { addDoc, collection,  doc, getDocs, onSnapshot, query } from "firebase/firestore";
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
    const req = await addDoc(collection(db, "comments"), {data})
    return req
}

//DELETE
export async function fetchDeleteComment(postId:string) {

    const data =  doc(db, "comments", postId)
    console.log(data)
    try{
        const res = await deleteDoc(data)
        
        console.log("try",res);
    } catch(e){
        console.error("에러")
    }

}
