import { useEffect } from 'react';

function WeatherData() {
  function uint8ArrayToBase64(data) {
    return btoa(
      Array.from(data)
        .map((c) => String.fromCharCode(c))
        .join(''),
    );
  }

  const get = async () => {
    const apikey = import.meta.env.VITE_WEATHER_API_KEY;
    const today = 20230509;
    const api = `/api`;
    const getdata = await fetch(
      `${api}/getVilageFcst?serviceKey=${apikey}pageNo=1dataType=JSON&base_date=${today}&base_time=0500&nx=55&ny=127`,
    ).then(async (res) => {
      const reader = res.body?.getReader();
      while (true) {
        const { done, value } = await reader?.read();
        if (done) {
          console.log('스트림완료');
          break;
        }
        console.log('청크 읽음', value);
        console.log('str', uint8ArrayToBase64(value));
      }
    });
    //   .then((body) => console.log(body?.getReader()));
    return getdata;
  };

  useEffect(() => {
    get();
  }, []);
  return <></>;
}

export default WeatherData;
