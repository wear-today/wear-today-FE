import { CommentForm } from '../../service/comment';

function Comments({ comment }: { comment: CommentForm }) {
  const { name, postId, region, text } = comment;
  return (
    <article className="flex flex-row gap-1 justify-start">
      <div className="bg-neutral-200 rounded-xl px-2 py-[1px]">
        <p className="text-sm font-bold">{region}</p>
      </div>
      <p className="text-md text-blue-800 font-bold">
        {name ? name : '익명의 유저'}
      </p>
      <p className="text-md ml-1">{text}</p>
    </article>
  );
}

export default Comments;
