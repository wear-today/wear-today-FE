import { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../../firebase';
import { CommentForm } from '../../service/comment';
import Comments from './Comment';
import Spinner from '../Spinner';

function AllComment({setComments,comments}) {
 
  const [loading, setLoading] = useState(true);

  const fetchComment = async () => {
    await getDocs(collection(db, 'comments')).then((snap) => {
      const newData: any = snap.docs.map((doc) => ({id:doc.id, ...doc.data().data }));
      setComments(newData);
      setLoading(false);
    });
  };
console.log(comments,'comments')
  useEffect(() => {
    fetchComment();
  }, []);
  
  return (
    <ul className="flex flex-col w-full pl-8 mt-4 gap-3">
      {loading ? (
        <Spinner />
      ) : (
        comments?.map((comment: CommentForm) => (
          <li key={comment.id}>
            <Comments comment={comment} />
          </li>
        ))
      )}
      {}
    </ul>
  );
}

export default AllComment;
