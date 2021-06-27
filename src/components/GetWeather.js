import React, { useState,useEffect} from 'react';
// import {Swiper, SwiperSlide} from 'swiper/react';
// import SwiperCore, { Pagination } from 'swiper/core';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/swiper.scss';
import axios from 'axios';
import './asset/style/_weather.scss';
import sunny from './asset/icon/clearSky.svg';
import fewCloud from './asset/icon/fewCloud.svg';
import scatteredClouds from './asset/icon/scatteredClouds.svg';
import brokenCloud from './asset/icon/brokenCloud.svg';
import showerRain from './asset/icon/showerRain.svg';
import rain from './asset/icon/rain.svg';
import thunderstorm from './asset/icon/thunderStorm.svg';
import snow from './asset/icon/snow.svg';
import mist from './asset/icon/mist.svg';





  const CallApi=async(city)=>{
      const API_KEY =`5dd0480be9870a0a40413a3f9f49139e`;
           let city_name=city;
      const url=`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}&units=metric`;
  
      //  const url =`api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;
        let request =axios.get(url);
        let response=await request;
         
        try{
            const cityName=response.data.name;
            const mainWeather =response.data.weather[0];
            const description=mainWeather.description;
            const mainInfo=response.data.main;
            const temp=mainInfo.temp;
            const feelLike=mainInfo.feels_like;
            const tempMin =mainInfo.temp_min;
            const tempMax=mainInfo.temp_max;
            const humidity=mainInfo.humidity;
            const windSpeed=response.data.wind.speed;
            

            let icon = response.data.weather[0].icon;
            let iconNum = icon.replace(/\D/g, ""); 
            let iconId ="";
             switch(iconNum){
               case '01':
                 iconId=sunny;
                 break;
               case '02':
                 iconId=fewCloud;
                 break;
                case '03':
                  iconId=scatteredClouds;
                  break;  
                case '04':
                  iconId=brokenCloud;
                  break;
                 case '09':
                  iconId=showerRain;
                  break;
                 case '10':
                    iconId=rain;
                    break;
                  case '11':
                      iconId=thunderstorm;
                      break;
                   case '13':
                        iconId=snow;
                        break;
                     case '50':
                          iconId=mist;
                          break;   
                  default:
                    console.log(`no image`);
             }

             const currentWeather ={cityName, description, temp, feelLike, tempMin, tempMax, humidity, windSpeed, iconId}
    
            return(
              currentWeather
            )
        }catch(err){
          console.log(err.message)
        }

    }



export default CallApi;

