import React, {useState} from 'react';
import CallApi from './GetWeather';
import PrintWeather from './PrintWeather';

 



const Form = () => {

  const [weatherInfo, setWeatherInfo]=useState({cityName:"",description:"", temp:"",feelLike:"", humidity:"",windSpeed:"", tempMax:"", tempMin:"", iconId:""});
  const [isSearch, setIsSearch]=useState(false);

  const submitForm=async(e)=>{
    e.preventDefault();
    let searchCity = e.target.city.value;
    if(searchCity.length>0){
      let response = await CallApi(searchCity);
      //  console.log(response);
       setWeatherInfo(response);
       setIsSearch(true);
       e.target.reset();
    }else{
      return
    }
  };


  return ( 
    <div className="container">
      <form id="search-weather" onSubmit={submitForm}>
        <h3>Find the City Weather here</h3>
        <input type="text" name="city" placeholder="city name" />
        <input type="submit" value="search" className="btn-style" />
      </form>
      <div className={isSearch?"weather-info":"d-none"}>
      <PrintWeather name={weatherInfo.cityName} description={weatherInfo.description}  temp={weatherInfo.temp} feelLike={weatherInfo.feelLike}  humidity={weatherInfo.humidity}  windSpeed={weatherInfo.windSpeed}  tempMax={weatherInfo.tempMax}  tempMin={weatherInfo.tempMin}  iconId={weatherInfo.iconId} />
      </div>
    </div>
   );
}
 
export default Form;