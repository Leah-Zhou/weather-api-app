import React, {useRef, useEffect} from 'react';
import { v4 as uuid } from "uuid";
import {gsap} from "gsap";

const PrintWeather =(props)=>{
  let weatherImgLeft=useRef(null);
  let weatherImgRight=useRef(null);
  let weatherInfo=useRef(null);
  let tl=gsap.timeline();

    useEffect(()=>{
  tl.from(weatherInfo.current, {opacity:0, y:"100", duration:1, ease:"back.out"})
  .from([weatherImgLeft.current, weatherImgRight.current], {y:-100, opacity:0, duration:1, ease:"power3.out(1.25)"})
}, [props.name])
;

  return(
    <>
    <img src={props.iconId} alt="weather-icon" className="weather-icon"  ref={weatherImgLeft}/>
    <img src={props.iconId} alt="weather-icon" className="weather-icon-right"  ref={weatherImgRight}/>
    <div ref={weatherInfo}>
      <div className="main-info">
      <h1>{props.name}</h1>
      <h1>{props.temp}<span>&#176;</span>C</h1>
      <h3>{props.description}</h3>
    </div>
      <ul className="detail-info">
        <li key={uuid()}>
           <p className="small-text">Feels Like: {props.feelLike}<span>&#8451;</span></p>
        </li>
        <li key={uuid()}>
          <p className="small-text">Humidity: {props.humidity}<span>&#37;</span></p>
        </li>
        <li key={uuid()}>
          <p className="small-text">Wind: {props.windSpeed}Km/h</p>
        </li>
        <li className="small-text" key={uuid()}>
            <p>H: {props.tempMax}<span>&#8451;</span>
            </p></li>
          <li className="small-text" key={uuid()}>
            <p>L: {props.tempMin}<span>&#8451;</span>
            </p>
          </li>
      </ul>
    </div>
    </>
  )
}



export default PrintWeather;