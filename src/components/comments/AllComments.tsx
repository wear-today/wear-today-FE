import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { CommentForm } from '../../service/comment';
import Comments from './Comment';
import Spinner from '../Spinner';

function AllComment() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComment = async () => {
    await getDocs(collection(db, 'comments')).then((snap) => {
      const newData: any = snap.docs.map((doc) => ({ ...doc.data().data }));
      setComments(newData);
      setLoading(false);
    });
  };

  useEffect(() => {
    // setLoading(false);
    fetchComment();
  }, []);
  return (
    <ul className="flex flex-col w-full pl-8 mt-4 gap-3">
      {loading ? (
        <Spinner />
      ) : (
        comments?.map((comment: CommentForm) => (
          <li key={comment.postId}>
            <Comments comment={comment} />
          </li>
        ))
      )}
      {}
    </ul>
  );
}

export default AllComment;
