import React, { Component } from 'react';
import WeatherInput from '../containers/weatherInput';
import {Link} from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <h1>WEATHER APP</h1>
          </div>
          <div className="col-sm-12">
            <nav>
              <ul>
                <li><Link className="a" to="/">HOME</Link></li>
                <li><Link className="a" to="/conversions">CONVERSIONS</Link></li>
                <li><Link className="a" to="/about">ABOUT</Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-sm-12">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
