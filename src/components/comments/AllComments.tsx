import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { fetchCommentData,fetchComment,commenttt } from '../../service/comment';

function AllComment(props) {
  let [comments, setComments] = useState([]);


  useEffect(() => {
    fetchComment().then((comments) => {
     setComments(comments)
    }).catch((error) => {
      console.error(error);
    });
    
  }, []);
  console.log(comments,'come~')
  useEffect(() => {
   const newcomments= comments.filter(data => {
      return data.text.toUpperCase().includes(props.search.toUpperCase());
    });
    setComments(newcomments)
    
  }, [props.searchbtn]);
  console.log(comments,'!')
  return (
    <ul>
      {comments?.map((comment: comment) => (
        <li key={comment.postId}>{comment.text}</li>
      ))}
    </ul>
  );
}

export default AllComment;
