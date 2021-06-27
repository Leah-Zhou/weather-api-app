import React from 'react';
import { v4 as uuid } from "uuid";
const PrintWeather =(props)=>{

  return(
    <>
    <div className="main-info">
    <img src={props.iconId} alt="weather-icon" className="weather-icon"/>
    <img src={props.iconId} alt="weather-icon" className="weather-icon-right"/>
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
        <li className="small-text">
          <p>L: {props.tempMin}<span>&#8451;</span>
          </p>
          </li>
    </ul>
    </>
  )
}



export default PrintWeather;