import { db } from "../firebase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

type Data = {
    data:{
        createAt?: { nanoseconds: number; seconds: number};
        name: string;
        region: string;
        text: string;
        postId: number;
    }
}

//GET
export async function fetchCommentData() {
    const comment = await getDocs(collection(db, "comments")).then((res)=> res.forEach((doc)=> {console.log(doc.data())}))
    return comment;
}
//POST
export async function fetchPostComment({data}:Data ) {
    const req = await addDoc(collection(db, "comment"), {data})
    return req
}

//DELETE
export async function fetchDeleteComment(postId:number) {
    const data =  doc(db, "comments", "postId")
    const res =await deleteDoc(data)
    return res;
}
