import './App.css';
import Header from './components/Header';
import AllComment from './components/comments/AllComments';
import CreateComments from './components/comments/CreateComment';
import { db } from './firebase';
import { auth } from './firebase';

//로그인 / 회원가입 복구 필요 

function App() {
  return (
    <>
      <Header />
      <div className="w-10 h-10 bg-green-200">메인</div>
      <AllComment />
      <CreateComments />
    </>
  );
}

export default App;
