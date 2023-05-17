import Header from './Header';
import AllComment from './comments/AllComments';
import CreateComments from './comments/CreateComment';
import WeatherData from './WeatherData';
import Searchbox from './comments/Searchbox';
import { useEffect, useState } from 'react';
import { CommentData, CommentForm } from '../types/comment';
import { User } from '../types/user';

function Main({
  isLoggedIn,
  userdata,
}: {
  isLoggedIn: boolean;
  userdata: User;
}) {
  const [comments, setComments] = useState<CommentData[]>([]);

  useEffect(() => {}, [comments]);

  return (
    <main className="bg-blue-50 h-screen w-[30rem]">
      <Header isLoggedIn={isLoggedIn} userdata={userdata} />
      <section>
        <Searchbox comments={comments} setComments={setComments} />
        <AllComment
          comments={comments}
          setComments={setComments}
          userdata={userdata}
        />
        <CreateComments userdata={userdata} />
        {/* <WeatherData /> */}
      </section>
    </main>
  );
}

export default Main;
