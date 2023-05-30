import { useCallback, useContext, useState } from 'react';
import { fetchDeleteComment, fetchPutComment } from '../../service/comment';
import { CommentForm } from '../../types/comment';
import { BsTrash, BsPen } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';
import { MdCancelPresentation } from 'react-icons/md';
import { UserContext } from '../../context/userContext';

type Props = {
  comment: CommentForm;
  fetchComment: any;
};

function Comment({ comment, fetchComment }: Props) {
  const { name, postId, region, text, id, collectionId } = comment;

  const { userdata } = useContext(UserContext);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [newText, setNewText] = useState('');

  const inputHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  }, []);

  const deleteHandler = async (collectionId: string) => {
    if (confirm('해당 글을 삭제하시겠습니까?')) {
      fetchDeleteComment(collectionId).then(() => fetchComment());
    }
  };

  const putHandler = async (collectionId: string, newText: string) => {
    fetchPutComment(collectionId, newText).then(
      () => setEditMode(false),
      fetchComment(),
    );
  };

  return (
    <>
      {userdata && userdata.collectionId === postId ? (
        <article className="flex flex-row gap-1 justify-start">
          <div className="bg-neutral-200 rounded-xl px-2 py-[1px]">
            <p className="text-sm font-bold">{region}</p>
          </div>
          <p className="text-md text-blue-800 font-bold">
            {name ? name : '익명의 유저'}
          </p>
          {editMode ? (
            <>
              <input defaultValue={text} onChange={inputHandler} />
              <AiOutlineCheck
                onClick={() => {
                  putHandler(collectionId, newText);
                }}
              />
              <MdCancelPresentation onClick={() => setEditMode(false)} />
            </>
          ) : (
            <>
              <p className="text-md ml-1">{text}</p>
              <div className="flex flex-row gap-2 ml-2 mt-1 w-8">
                <BsPen onClick={() => setEditMode(true)} />
                <BsTrash
                  onClick={() => {
                    deleteHandler(collectionId);
                  }}
                />
              </div>
            </>
          )}
        </article>
      ) : (
        <article className="flex flex-row gap-1 justify-start">
          <div className="bg-neutral-200 rounded-xl px-2 py-[1px]">
            <p className="text-sm font-bold">{region}</p>
          </div>
          <p className="text-md text-blue-800 font-bold">
            {name ? name : '익명의 유저'}
          </p>
          <p className="text-md ml-1">{text}</p>
        </article>
      )}
    </>
  );
}

export default Comment;
