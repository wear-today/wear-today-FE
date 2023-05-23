import { useContext } from 'react';
import Comment from './Comment';
import Spinner from '../Spinner';
import { CommentForm } from '../../types/comment';
import { UserContext } from '../../context/userContext';

interface AllCommentProps {
  setComments: React.Dispatch<React.SetStateAction<CommentForm[]>>;
  comments: CommentForm[];
  loading: boolean;
  fetchComment: any;
}

function AllComment({ comments, loading, fetchComment }: AllCommentProps) {
  return (
    <ul className="flex flex-col w-full pl-8 mt-4 gap-3">
      {loading ? (
        <Spinner />
      ) : (
        comments?.map((comment: CommentForm) => (
          <li key={`${comment.collectionId} 의 ${comment.text}`}>
            <Comment comment={comment} fetchComment={fetchComment} />
          </li>
        ))
      )}
      {}
    </ul>
  );
}

export default AllComment;
