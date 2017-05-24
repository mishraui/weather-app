import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import Conversions from './containers/conversions';
import WeatherApp from './components/WeatherApp';
import About from './components/About';


export default(
  <Route path='/' component={App}>
    <IndexRoute component={WeatherApp} />
    <Route path='conversions' component={Conversions}/>
    <Route path='about' component={About}/>
  </Route>
);
