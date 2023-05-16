import { useCallback, useState } from 'react';
import { CommentForm, fetchPostComment } from '../../service/comment';

const Searchbox = ({comments,setComments}) => {
    const [filter,setFilter] =useState(null)
    console.log(filter,'f')
  console.log(comments,'com')
    const handleInputChange = (event) => {
        setFilter(event.target.value);
      };
    const searchClick = ()=>{
        const searchResult = comments.filter(data => {
            return data.text&&data.text.toUpperCase().includes(filter.toUpperCase());
          });
          console.log(searchResult,'sr')
        setComments(searchResult)
    }
  return (
    <>
        <input
          type="text"
          onChange={handleInputChange}
          placeholder="Search..."
        />
        <button onClick={searchClick}>
        검색
        </button >
      </>
  );
};

export default Searchbox;
