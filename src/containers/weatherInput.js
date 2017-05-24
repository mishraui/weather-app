import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateWeatherInput, fetchWeatherData} from '../actions/index';

class WeatherInput extends Component{

  handleOnChange(event) {
    this.props.updateWeatherInput(event.target.value);
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.fetchWeatherData(this.refs.weatherinput.value);
    this.refs.weatherInputForm.reset();
  }

  render(){
    return(
      <div>
        <form ref="weatherInputForm" onSubmit={this.handleOnSubmit.bind(this)}>
          <div className="form-group">
            <div className="input-group">
              <input
                type="text"
                ref="weatherinput"
                value={this.props.weatherInputText}
                onChange={this.handleOnChange.bind(this)}
                placeholder="ENTER A CITY IN THE USA"
                required
                autoFocus
                className="form-control"
              />
            <span>
              <input type="submit" value="ADD CITY" className="btn btn-success"/>
            </span>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    weatherInputText: state.weatherInputText
  }
}

export default connect(mapStateToProps, {updateWeatherInput, fetchWeatherData})(WeatherInput);
