import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Comments from './Comment';
import Spinner from '../Spinner';
import { User } from '../../types/user';
import { CommentForm } from '../../types/comment';

interface AllCommentProps {
  setComments: React.Dispatch<React.SetStateAction<CommentForm[]>>;
  comments: CommentForm[];
  userdata: User;
}

function AllComment({ setComments, comments, userdata }: AllCommentProps) {
  const [loading, setLoading] = useState<boolean>(true);

  const fetchComment = async () => {
    await getDocs(collection(db, 'comments')).then((snap) => {
      const newData: any = snap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data().data,
      }));
      setComments(newData);
      setLoading(false);
    });
  };

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
            <Comments comment={comment} userdata={userdata} />
          </li>
        ))
      )}
      {}
    </ul>
  );
}

export default AllComment;
