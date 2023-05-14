import Header from './Header';
import AllComment from './comments/AllComments';
import CreateComments from './comments/CreateComment';
import WeatherData from './WeatherData';

function Main({isLoggedIn, userdata}) {
  return (

    <main className="bg-blue-50 h-screen w-[30rem]">
        <Header isLoggedIn={isLoggedIn} userdata ={userdata} />
      <section>
        <AllComment />
        <CreateComments />
        <WeatherData />
      </section>
    </main>
  );
}

export default Main;