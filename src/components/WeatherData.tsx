
import { useEffect } from 'react';
import axios from 'axios';

function WeatherData() {
  const get = async (position) => {
    const today = new Date();
      const lat = position&&position.coords.latitude;
    const lon = position&&position.coords.longitude;
        console.log(lat,'lat')
    const base_date = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate()-1;
    const base_time = today.getHours() < 2 ? '23' : '05';
  console.log(base_date,'bd')
  console.log(base_time,'bd')
    const apikey = import.meta.env.VITE_WEATHER_API_KEY;
    //const url = `http://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=${apikey}&numOfRows=10&pageNo=1&dataCd=ASOS&dateCd=HR&stnIds=108&endDt=20200310&endHh=01&startHh=01&startDt=20190120`;
    const url = `https://apis.data.go.kr/1360000/AsosHourlyInfoService/getWthrDataList?serviceKey=${apikey}&pageNo=1&numOfRows=10&dataType=json&dataCd=ASOS&dateCd=HR&startDt=${base_date}&startHh=${base_time}&endDt=${base_date}&endHh=${base_time}&stnIds=108`
                                                                                                            //pageNo=1&numOfRows=10&dataType=XML&dataCd=ASOS&dateCd=HR&startDt=20220510&startHh=01&endDt=20220510&endHh=01&stnIds=108
    try {
      const response = await axios.get(url);
      const data = response.data;
      //const realdata = JSON.parse(data)
      console.log(data, 'data');
      //console.log(realdata, 'realdata');
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