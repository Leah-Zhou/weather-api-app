import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';




const Home = () => {
  const cities =['Toronto', 'Ottawa','Hamilton','Kingston', 'London', 'Windsor', 'Waterloo']
  return ( 
    <div>
      <h2>WHITE BEAR WEATHER</h2>
      <ul>
        {cities.map(city=>(
          <li key={uuidv4()}>
            <Link  to={{pathname:"/weather", selectCity:city}}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
   );
}
 
export default Home;