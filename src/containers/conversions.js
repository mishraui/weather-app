import React, {Component} from 'react';
import { connect } from 'react-redux';
import {onChangeC, onChangeF, onChangeK} from '../actions/index';

class Conversions extends Component{

  handleOnChangeC(event){
    const {value} = event.target;
    this.props.onChangeC(value);
  }

  handleOnChangeF(event){
    const {value} = event.target;
    this.props.onChangeF(value);
  }

  handleOnChangeK(event){
    const {value} = event.target;
    this.props.onChangeK(value);
  }

  render(){
    return(
        <div className="row">

          <div className="col-xs-12 col-sm-4 text-center">
              <input
                type="number"
                value={this.props.cfk.c}
                onChange={this.handleOnChangeC.bind(this)}
                className="form-control"
                placeholder="ENTER TEMP IN C"
              />
              CELSIUS
          </div>

          <div className="col-xs-12 col-sm-4 text-center">
            <input
              type="number"
              value={this.props.cfk.f}
              onChange={this.handleOnChangeF.bind(this)}
              className="form-control"
              placeholder="ENTER TEMP IN F"
            />
            FAHRENHEIT
          </div>

          <div className="col-xs-12 col-sm-4 text-center">
            <input
              type="number"
              value={this.props.cfk.k}
              onChange={this.handleOnChangeK.bind(this)}
              className="form-control"
              placeholder="ENTER TEMP IN K"
            />
            KELVIN
          </div>

          <div className="col-xs-12 col-sm-12 text-center conversions">
            <h3>IMPORTANT TEMPERATURES TO NOTE</h3>
          </div>

          <div className="col-xs-12 col-sm-12">
            <table className="table table-bodered table-striped">
              <thead>
                <tr>
                  <th>Celsius (°C)</th>
                  <th>Fahrenheit (°F)</th>
                  <th>Kelvin (k)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-273.15 °C</td>
                  <td>-459.67 °F</td>
                  <td>0.00 k</td>
                  <td>absolute zero temperature</td>
                </tr>
                <tr>
                  <td>0°C</td>
                  <td>32.0 °F</td>
                  <td>273.15 k</td>
                  <td>freezing/melting point of water</td>
                </tr>
                <tr>
                  <td>21 °C</td>
                  <td>69.8 °F</td>
                  <td>294.15 k</td>
                  <td>room temperature</td>
                </tr>
                <tr>
                  <td>37 °C</td>
                  <td>98.6 °F</td>
                  <td>310.15 k</td>
                  <td>average body temperature</td>
                </tr>
                <tr>
                  <td>100 °C</td>
                  <td>212.0 °F</td>
                  <td>373.15</td>
                  <td>boiling point of water</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    cfk: state.cfk
  }
}

export default connect(mapStateToProps, {onChangeC, onChangeF, onChangeK})(Conversions);
