import React, { useState,useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import axios from 'axios';
import sunny from './asset/icon/01d.svg';
import fewCloud from './asset/icon/02d.svg';
import scatteredClouds from './asset/icon/03d.svg';
import brokenCloud from './asset/icon/04d.svg';
import showerRain from './asset/icon/09d.svg';
import rain from './asset/icon/10d.svg';
import thunderstorm from './asset/icon/11d.svg';
import snow from './asset/icon/13d.svg';
import mist from './asset/icon/50d.svg';
// import './asset/style/_weather.scss';
SwiperCore.use(Pagination);




const SwipeWeather = () => {

  const slides=[];
  const [responseData, setResponseData]=useState('');
  const [iconId, setIconId] =useState('');
  const cities =['Toronto','Ottawa','Hamilton'];
  const weatherContainer ={
    display:"flex",
    flexDirection:"row",
    justifyContent: "center",
    alignItems:"center",
    margin: "10px",
  }
  const mainInfoStyle={
    display:"flex",
    marginTop:"15px",
    flexDirection:"column",
    justifyContent: "center",
    alignItems:"center",
  }

  const apiCall=async(cityName)=>{
    const API_KEY =`5dd0480be9870a0a40413a3f9f49139e`;
      let city_name=cityName;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}, ca&appid=${API_KEY}&units=metric`;

    const request =axios.get(url);
    const response =await request;
    setResponseData(response.data);
    let iconId = response.data.weather[0].icon;
    let iconNum = iconId.replace(/\D/g, ""); 
    let selectIcon ="";
     switch(iconNum){
       case '01':
         selectIcon=sunny;
         break;
       case '02':
         selectIcon=fewCloud;
         break;
        case '03':
          selectIcon=scatteredClouds;
          break;  
        case '04':
          selectIcon=brokenCloud;
          break;
         case '09':
          selectIcon=showerRain;
          break;
         case '10':
            selectIcon=rain;
            break;
          case '11':
              selectIcon=thunderstorm;
              break;
           case '13':
                selectIcon=snow;
                break;
             case '50':
                  selectIcon=mist;
                  break;   
          default:
            console.log(`no image`);
     }
    setIconId(selectIcon);
    console.log(selectIcon)
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
      <SwiperSlide key={`slide-${i}`} tag="div" style={{paddingBottom:"10px"}}>
        <div style={mainInfoStyle}>
          <h1>{responseData.name}</h1>
          <img src={iconId} alt="weather-icon"  width="400px"/>
          <h3>{responseData.weather[0].main}</h3>
        </div>
        <div style={weatherContainer}>
             <h1>{responseData.main.temp}&#8451;</h1>
          <ul style={{marginTop:"30px"}}>
            <li>
             <p className="small-text">Feels Like: {responseData.main.feels_like}&#8451;</p>
            </li>
            <li>
              <p className="small-text">Humidity: {responseData.main.humidity}&#37;</p>
            </li>
            <li>
            <p className="small-text">Wind: {responseData.wind.speed}KM/H</p>
            </li>
            <li className="small-text">
                <p>H: {responseData.main.temp_max}&#8451;
                </p></li>
              <li className="small-text">
                <p>L: {responseData.main.temp_min}&#8451;
                </p></li>
          </ul>
          </div>
      </SwiperSlide>
    )
  }
  return ( 
    <Swiper onSlideChange={(swiper)=>callCity(swiper.activeIndex)}  pagination={{ clickable: true }}>
       {slides}
    </Swiper>
   );
}
 
export default SwipeWeather;