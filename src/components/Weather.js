import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {Link, useLocation} from 'react-router-dom'



const Weather = (props) => {

  const [respData, setRespData]=useState('');
  const [main, setMain]=useState('');
  const [weather, setWeather]=useState('');
  const [wind, setWind]=useState('');

  // const location=useLocation();
  const apiCall=async()=>{
    const API_KEY='2acceff38206283f50a4dc5d0aac6562';
    let city_name='';
     city_name=props.location.selectCity;
    // const city_name='Toronto';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}, ca&appid=${API_KEY}&units=metric`;

    const request =axios.get(url);
    const response =await request;
     setRespData(response.data);
     setMain(response.data.main);
     setWeather(response.data.weather[0]);
     setWind(response.data.wind)

    console.log(response.data.weather)
  }

  useEffect (()=>{
    apiCall();
  },[])
  return ( 
    <div>
      <nav>
        <Link to="/">back</Link>
      </nav>
      <section>     
       <h3>{respData.name}</h3>
       <p>{weather.main}</p>
      </section>
      <ul>
        <li>Current Temp:{main.temp} &#8451;</li>
        <li>Feels Like{main.feels_like} &#8451;</li>
        <li>{wind.speed}km/s</li>
      </ul>
      
    </div>
   );
}
 
export default Weather;