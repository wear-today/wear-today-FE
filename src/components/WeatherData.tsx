import { useEffect } from 'react';
import axios from 'axios';

function WeatherData() {
  const get = async (position) => {
    const today = new Date();
    // const lat = position && position.coords.latitude;
    // const lon = position && position.coords.longitude;
    const base_date =
      today.getFullYear() * 10000 +
      (today.getMonth() + 1) * 100 +
      today.getDate() -
      1;
    const base_time = today.getHours() < 2 ? '23' : '05';

    const apikey = import.meta.env.VITE_WEATHER_API_KEY;

    const url = `https://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=${apikey}&pageNo=1&numOfRows=10&dataType=json&dataCd=ASOS&dateCd=HR&startDt=${base_date}&startHh=${base_time}&endDt=${base_date}&endHh=${base_time}&stnIds=108`;
    try {
      const response = await axios.get(url);
      const data = response.data;
      console.log(data, 'data');
    } catch (error) {
      console.error(error);
    }
  };

  function geterror() {
    alert('위치한 곳을 찾을 수 없습니다.');
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(get, geterror);
  }, []);

  return <></>;
}

export default WeatherData;
