import Header from './Header';
import AllComment from './comments/AllComments';
import CreateComments from './comments/CreateComment';
import WeatherData from './WeatherData';
import Searchbox from './comments/Searchbox';
import { useEffect, useState } from 'react';
import { CommentForm } from '../types/comment';
import { User } from '../types/user';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase.js';

type Props = {
  isLoggedIn: boolean;
  userdata: User;
};

function Main() {
  const [comments, setComments] = useState<CommentForm[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchComment = async () => {
    await getDocs(collection(db, 'comments')).then((snap) => {
      const newData: any = snap.docs.map((doc) => ({
        collectionId: doc.id,
        ...doc.data(),
      }));

      setComments(newData);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <main className="bg-blue-50 h-screen w-[30rem]">
      <Header />
      <section>
        <Searchbox comments={comments} setComments={setComments} />
        <AllComment
          comments={comments}
          setComments={setComments}
          loading={loading}
          fetchComment={fetchComment}
        />
        <CreateComments fetchComment={fetchComment} />
        {/* <WeatherData /> */}
      </section>
    </main>
  );
}

export default Main;
