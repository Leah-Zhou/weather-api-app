import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Home';
import Weather from './Weather';
// import Weather from './Weather';



const App = () => {
  return ( 
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/weather" component={Weather} />
    </Switch>
   );
}
 
export default App;