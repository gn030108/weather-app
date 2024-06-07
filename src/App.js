//1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다 
//2. 날씨정보에는 도시, 섭씨, 화씨, 날씨상태
//3. 5개의 버튼 (현재위치 + 다른도시 4개)
//4. 도시버튼을 클릭할때마다 그 도시의 날씨가 보인다 
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다
//6. 로딩스피너 추가
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [weather,setWeather] = useState(null)
  const [city,setCity] = useState("");
  let [loading, setLoading] = useState(false);
  const cities=['seoul' ,'paris','new york', 'london']

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    setLoading(true)
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1a82422192fcc7e7c12aa08ffe4fd383&units=metric`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    console.log(data)
    setLoading(false)
  }

  const getWeatherByCity= async() => {
    setLoading(true)
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1a82422192fcc7e7c12aa08ffe4fd383&units=metric`
    let response = await fetch(url)
    let data = await response.json()
    setWeather(data)
    console.log(data)
    setLoading(false)
  }

  useEffect(()=>{
    if(city===""){
      getCurrentLocation()
    }else{
      getWeatherByCity()
    }
  },[city]);



  

  return (
    <div>
      {loading ? (
        <div className='container'>
          <ClipLoader color='#f88c6b' loading={loading} size={150}/>
        </div>
      ) : (
        <div className='container'>
          <WeatherBox weather = {weather}/>
          <WeatherButton cities={cities} setCity={setCity} city={city} />
        </div>
      )}
    </div>
  );
}

export default App;
