import { useCallback, useState } from 'react';
import { CommentForm, fetchPostComment } from '../../service/comment';

const CreateComments = ({userdata}) => {
  console.log(userdata,'dd')
  const [comment, setComment] = useState<CommentForm>({
    name: userdata&&userdata.displayName,
    region: '서울',
    text: '',
    postId: userdata&&userdata.uid,
  });

  const handleInputValue = useCallback(
    (key: string) =>
      (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLSelectElement>,
      ) => {
        setComment({ ...comment, [key]: e.target.value });
      },
    [comment],
  );
  console.log(comment,'comment')

  const handleSendComment = () => {
    fetchPostComment(comment).then((res) => console.log(res));
  };
  return (
    <form
      className="flex flex-row gap-2 w-full p-2 mt-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <select
        className="rounded-md h-8"
        onChange={handleInputValue('region')}
        required
        defaultValue='서울'
      >
        <option>서울</option>
        <option>경기</option>
        <option>강원</option>
        <option>충북</option>
        <option>충남</option>
        <option>전북</option>
        <option>전남</option>
        <option>경북</option>
        <option>경남</option>
        <option>제주</option>
      </select>
      <input
        className="h-8 w-full rounded-md p-2"
        placeholder="오늘의 날씨는 어떤가요?"
        type="text"
        onChange={handleInputValue('text')}
        required
      />
      <button className="w-14 h-8 text-sm p-0" onClick={handleSendComment}>
        작성
      </button>
    </form>
  );
};

export default CreateComments;
