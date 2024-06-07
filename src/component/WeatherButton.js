import { Button } from 'react-bootstrap';

const WeatherButton = ({cities,setCity,city}) => {
  return (
    <div className='weather-button'>
      <Button variant="primary" onClick={()=>setCity("")} style={city==='' ? {backgroundColor:'white', border:'1px solid rgba(13, 110, 253, 0.25)', color:'black'} : {}}>Current Location</Button>

      {cities.map((item, index)=>(
            <Button variant="primary" key={index} onClick={()=>setCity(item)} style={city === item ? {backgroundColor:'white', border:'1px solid rgba(13, 110, 253, 0.25)', color:'black'} : {}}>{item}</Button>
      ))}
    </div>
  )
}

export default WeatherButton