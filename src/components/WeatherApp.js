import React, { Component } from 'react';
import WeatherInput from '../containers/weatherInput';
import WeatherTable from '../containers/WeatherTable';

export default class WeatherApp extends Component{
  render(){
    return(
      <div>
        <WeatherInput/>
        <WeatherTable/>
      </div>
    );
  }
}
