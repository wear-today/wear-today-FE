import './App.css';
import Header from './components/Header';
import WeatherData from './components/WeatherData';
import AllComment from './components/comments/AllComments';
import CreateComments from './components/comments/CreateComment';
import { db } from './firebase';
import { auth } from './firebase';

//로그인 / 회원가입 복구 필요

function App() {
  return (
    <main className="bg-neutral-200 h-screen w-[30rem]">
      <Header />
      <section>
        <AllComment />
        <CreateComments />
        <WeatherData />
      </section>
    </main>
  );
}

export default App;
