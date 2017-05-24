import React, { Component } from 'react';
import { connect } from "react-redux";
import {updateUnit} from '../actions/index';

class WeatherTable extends Component{

  handleOnChange(event){
    this.props.updateUnit(event.target.value);
  }

  handleInnerMap(obj, index){
    const {unit} = this.props;
    const {temp} = obj.main;
    const {dt} = obj;
    const a = new Date(dt * 1000);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const dayOfWeek = days[a.getDay()]
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = `${month} ${date}, ${year} at ${hour}:${min}:${sec}`;
    const {description, icon} = obj.weather[0];
    const img_url = `http://openweathermap.org/img/w/${icon}.png`;
    const output = (index, time, temp, unit) =>{
      return (
        <tr key={index}>
          <td>{dayOfWeek}</td>
          <td>{time}</td>
          <td>{temp} {unit}</td>
          <td>{description}<img src={img_url} alt={description}/></td>
        </tr>
      );
    }

    switch(unit){
      case "CELSIUS":
          const c = (temp-273.15).toFixed(2);
          return output(index, time, c, "°C");

      case "FAHRENHEIT":
            const f = ((temp*(9/5))-459.67).toFixed(2);
            return output(index, time, f, "°F");

      default:
        return output(index, time, temp, "k");
    }

  }

  handleMap(obj, index) {
    const {name: CityName} = obj.city;
    const {list} = obj;

    return(
      <tr key={index}>
        <td className="text-center">{CityName}</td>
        <td><table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>day</th>
              <th>time</th>
              <th>temp</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            {list.map(this.handleInnerMap.bind(this))}
          </tbody>
        </table></td>
      </tr>
    );
  }

  render() {
    const { weatherData } = this.props;
    const showTable = () => {
      if(weatherData.length === 0){
        return(
          <div className="row">
            <div className="col-xs-12 col-sm-12">
              <p>NO CITY ADDED</p>
            </div>
          </div>
          );
      }else{
        return (
          <div className="row">

            <div className="col-xs-12 col-sm-3">
              <p className="align">SHOW CITY TEMPERATURE IN</p>
            </div>

            <div className="col-xs-12 col-sm-9">
              <select onChange={this.handleOnChange.bind(this)} className="form-control">
                <option value="KELVIN">KELVIN</option>
                <option value="CELSIUS">CELSIUS</option>
                <option value="FAHRENHEIT">FAHRENHEIT</option>
              </select>
            </div>

            <div className="col-xs-12 col-sm-12 table">
              <table className="table table-bordered">
                <tbody>
                  {this.props.weatherData.map(this.handleMap.bind(this))}
                </tbody>
              </table>
            </div>

          </div>
        );
      }

    }
    return(
      <div>
          {showTable()}
      </div>);
  }
}
function mapStateToProps(state) {
  return{
    weatherData: state.weatherData,
    unit: state.unit
  }
}

export default connect(mapStateToProps,{updateUnit})(WeatherTable);
