import { useCallback, useState } from 'react';
import { Data, fetchPostComment } from '../../service/comment';
import Searchinput from './Searchinput';

const CreateComments = () => {
  const [comment, setComment] = useState<Data>({
    name: '',
    region: '',
    text: '',
    postId: 3,
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
  console.log(fetchPostComment,'함수')

  const handleSendComment = (event) => {
    event.preventDefault()
    fetchPostComment(comment).then((res) => console.log(res));
  };
  return (
    <>
  
    <form onSubmit={handleSendComment}>
      
      <select onChange={handleInputValue('region')}>
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
        placeholder="오늘의 날씨는 어떤가요?"
        type="text"
        onChange={handleInputValue('text')}
      />
      <button type='submit' >작성</button>
    </form>
  </>
  );
};

export default CreateComments;
