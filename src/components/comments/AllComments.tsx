import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import Comment from './Comment';
import Spinner from '../Spinner';
import { User } from '../../types/user';
import { CommentForm } from '../../types/comment';

interface AllCommentProps {
  setComments: React.Dispatch<React.SetStateAction<CommentForm[]>>;
  comments: CommentForm[];
  userdata: User;
  loading: boolean;
  fetchComment: any;
}

function AllComment({
  comments,
  userdata,
  loading,
  fetchComment,
}: AllCommentProps) {
  return (
    <ul className="flex flex-col w-full pl-8 mt-4 gap-3">
      {loading ? (
        <Spinner />
      ) : (
        comments?.map((comment: CommentForm) => (
          <li key={`${comment.collectionId} 의 ${comment.text}`}>
            <Comment
              comment={comment}
              userdata={userdata}
              fetchComment={fetchComment}
            />
          </li>
        ))
      )}
      {}
    </ul>
  );
}

export default AllComment;
