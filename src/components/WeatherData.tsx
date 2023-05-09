import { useEffect } from 'react';

function WeatherData() {
  const get = async () => {
    const apikey = import.meta.env.VITE_WEATHER_API_KEY;
    const today = 20230509;
    const api = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0`;
    const getdata = await fetch(
      `${api}/getVilageFcst?serviceKey=${apikey}pageNo=1dataType=JSON&base_date=${today}&base_time=0500&nx=55&ny=127`,
    ).then(console.log);

    return getdata;
  };
  useEffect(() => {
    get();
  }, []);
  return <></>;
}

export default WeatherData;
