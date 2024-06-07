import React from 'react'

const WeatherBox = ({weather}) => {

  const celsiusTemp = weather?.main?.temp; // 섭씨 온도
  const Cp = celsiusTemp?.toFixed(1)
  const fahrenheitTemp = celsiusTemp ? (celsiusTemp * 9/5) + 32 : null ; // 화씨 온도로 변환
  const Fp = fahrenheitTemp?.toFixed(1)
  
  return (
    <div className='weather-box'>
      <div className='city'>{weather?.name}</div>
      <div className='temp'>섭씨 {Cp}도 / 화씨 {Fp}도</div>
      <div className='description'>{weather?.weather[0]?.description}</div>
    </div>
  )
}

export default WeatherBox