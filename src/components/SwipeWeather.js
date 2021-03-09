import React, { useState,useEffect} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper/core';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper.scss';
import axios from 'axios';
import sunny from './asset/icon/clearSky.svg';
import fewCloud from './asset/icon/fewCloud.svg';
import scatteredClouds from './asset/icon/scatteredClouds.svg';
import brokenCloud from './asset/icon/brokenCloud.svg';
import showerRain from './asset/icon/showerRain.svg';
import rain from './asset/icon/rain.svg';
import thunderstorm from './asset/icon/thunderStorm.svg';
import snow from './asset/icon/snow.svg';
import mist from './asset/icon/mist.svg';
import './asset/style/_weather.scss';
SwiperCore.use(Pagination);




const SwipeWeather = () => {

  const slides=[];
  const [responseData, setResponseData]=useState('');
  const [mainWeather, setMainWeather]=useState('');
  const [mainInfo, setMainInfo]=useState('');
  const [iconId, setIconId] =useState('');
  const [wind, setWind]=useState('');
  const cities =['Toronto','Ottawa','London','Hamilton','Kitchener'];

  const apiCall=async(cityName)=>{
    const API_KEY =`5dd0480be9870a0a40413a3f9f49139e`;
         let city_name=cityName;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}, ca&appid=${API_KEY}&units=metric`;

    const request =axios.get(url);
    const response =await request;
    setResponseData(response.data);
    setMainWeather(response.data.weather[0]);
    setMainInfo(response.data.main);
    setWind(response.data.wind)
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
    apiCall(onCallCity);
 }
  
  for (let i=0; i<cities.length; i++){
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="div">
        <div className="main-info">
          <h1>{responseData.name}</h1>
          <img src={iconId} alt="weather-icon"  width="200px"/>
          <h3>{mainWeather.main}</h3>
        </div>
        <div className="info-background">
             <h1>{mainInfo.temp}&#8451;</h1>
          <ul>
            <li>
             <p className="small-text">Feels Like: {mainInfo.feels_like}&#8451;</p>
            </li>
            <li>
              <p className="small-text">Humidity: {mainInfo.humidity}&#37;</p>
            </li>
            <li>
            <p className="small-text">Wind: {wind.speed}KM/H</p>
            </li>
            <li className="small-text">
                <p>H: {mainInfo.temp_max}&#8451;
                </p></li>
              <li className="small-text">
                <p>L: {mainInfo.temp_min}&#8451;
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