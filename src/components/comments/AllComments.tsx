import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { comment } from '../../service/comment';

function AllComment() {
  const [comments, setComments] = useState([]);

  const fetchComment = async () => {
    await getDocs(collection(db, 'comments')).then((snap) => {
      const newData: any = snap.docs.map((doc) => ({ ...doc.data().data }));
      setComments(newData);
      console.log(comments);
    });
  };

  useEffect(() => {
    fetchComment();
  }, []);
  return (
    <ul>
      {comments?.map((comment: comment) => (
        <li key={comment.postId}>{comment.text}</li>
      ))}
    </ul>
  );
}

export default AllComment;
