import { CommentForm } from '../../types/comment';
import { User } from '../../types/user';

type Props = {
  comment: CommentForm;
  userdata: User;
};

function Comments({ comment, userdata }: Props) {
  const { name, postId, region, text, id } = comment;
  console.log('댓글유저----->', userdata.uid);
  console.log('댓글----->', comment.postId);
  console.log(userdata.uid === postId);

  return (
    <>
      {userdata.uid === postId ? (
        <article className="flex flex-row gap-1 justify-start">
          <div>내가쓴글이당</div>
          <div className="bg-neutral-200 rounded-xl px-2 py-[1px]">
            <p className="text-sm font-bold">{region}</p>
          </div>
          <p className="text-md text-blue-800 font-bold">
            {name ? name : '익명의 유저'}
          </p>
          <p className="text-md ml-1">{text}</p>
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

export default Comments;
