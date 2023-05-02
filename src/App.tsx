import './App.css';
import Header from './components/Header';
import AllComment from './components/comments/AllComments';
import CreateComments from './components/comments/CreateComment';
import { db } from './firebase';
import { auth } from './firebase';
import { useState } from 'react';
import Searchinput from './components/comments/Searchinput';
function App() {

  const [search, setSearch] = useState(null)//검색
  const [searchbtn, setSearchBtn] = useState(false)
  return (
    <>
      <Header />
      <div className="w-10 h-10 bg-green-200">메인</div>
      <AllComment searchbtn={searchbtn} search={search} />
      <Searchinput searchbtn={searchbtn} setSearchBtn={setSearchBtn} setSearch={setSearch} />
      <CreateComments />
    </>
  );
}

export default App;
