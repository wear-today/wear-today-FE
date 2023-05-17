import { useCallback, useState } from 'react';
import { fetchPostComment } from '../../service/comment';
import { CommentForm } from '../../types/comment';
import { User } from '../../types/user';

type Props = {
  userdata: User;
  fetchComment: any;
};

const CreateComments = ({ userdata, fetchComment }: Props) => {
  const DEFAULT_COMMENT = {
    name: userdata && userdata.displayName,
    region: '서울',
    text: '',
    postId: userdata && userdata.uid,
  };
  const [input, setInput] = useState<CommentForm>(DEFAULT_COMMENT);

  const handleInputValue = useCallback(
    (key: string) =>
      (
        e:
          | React.ChangeEvent<HTMLInputElement>
          | React.ChangeEvent<HTMLSelectElement>,
      ) => {
        setInput({ ...input, [key]: e.target.value });
      },
    [input],
  );

  const handleSendComment = () => {
    fetchPostComment(input);
    setInput(DEFAULT_COMMENT);
    fetchComment();
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
        defaultValue="서울"
      >
        <option value="서울">서울</option>
        <option value="경기">경기</option>
        <option value="강원">강원</option>
        <option value="충북">충북</option>
        <option value="충남">충남</option>
        <option value="전북">전북</option>
        <option value="전남">전남</option>
        <option value="경북">경북</option>
        <option value="경남">경남</option>
        <option value="제주">제주</option>
      </select>
      <input
        className="h-8 w-full rounded-md p-2"
        placeholder="오늘의 날씨는 어떤가요?"
        type="text"
        onChange={handleInputValue('text')}
        value={input.text}
        required
      />
      <button className="w-14 h-8 text-sm p-0" onClick={handleSendComment}>
        작성
      </button>
    </form>
  );
};

export default CreateComments;
