import React, { useState,useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore from 'swiper';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import './asset/style/app.scss'






const SwipeWeather = () => {

  const slides=[];
  const [responseData, setResponseData]=useState('');
  const cities =['Toronto','Ottawa','Hamilton'];

  const apiCall=async(cityName)=>{
    // const API_KEY='2acceff38206283f50a4dc5d0aac6562';
    const API_KEY =`5dd0480be9870a0a40413a3f9f49139e`;
      let city_name=cityName;
    // const city_name='Toronto';
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}, ca&appid=${API_KEY}&units=metric`;

    const request =axios.get(url);
    const response =await request;
    console.log(response.data)
    setResponseData(response.data);
  }

  useEffect(()=>{
    apiCall('Toronto');
    console.log('toronto')
  },[])


 function callCity(cityIndex){
    let onCallCity =cities[cityIndex]
    console.log(onCallCity)
    apiCall(onCallCity);
 }
  
  for (let i=0; i<cities.length; i++){
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        <h1>{responseData.name}</h1>
        <h2>{responseData.weather[0].main}</h2>
          <ul>
            <li>Current Temp: {responseData.main.temp}&#8451;</li>
            <li>Feels Like: {responseData.main.feels_like}&#8451;</li>
            <li>H: {responseData.main.temp_max}&#8451;</li>
            <li>L: {responseData.main.temp_min}&#8451;</li>
            <li>Humidity: {responseData.main.humidity}&#37;</li>
            <li>Wind: {responseData.wind.speed}KM/H</li>
          </ul>
      </SwiperSlide>
    )
  }
  return ( 
    <Swiper onSlideChange={(swiper)=>callCity(swiper.activeIndex)}>
       {slides}
    </Swiper>
   );
}
 
export default SwipeWeather;