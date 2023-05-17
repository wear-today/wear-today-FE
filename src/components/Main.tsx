import Header from './Header';
import AllComment from './comments/AllComments';
import CreateComments from './comments/CreateComment';
import WeatherData from './WeatherData';
import Searchbox from './comments/Searchbox';
import { useState } from 'react';

function Main({isLoggedIn, userdata}) {
  const [comments, setComments] = useState([]);
  return (

    <main className="bg-blue-50 h-screen w-[30rem]">
        <Header isLoggedIn={isLoggedIn} userdata ={userdata} />
      <section>
        <Searchbox comments={comments} setComments={setComments} />
        <AllComment comments={comments} setComments={setComments}  />
        <CreateComments  userdata={userdata}/>
        <WeatherData />
      </section>
    </main>
  );
}

export default Main;