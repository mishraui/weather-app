import axios from 'axios';

const API_KEY = '6adb0f716ff7fb53d89de609621f9f6c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const ON_CHANGE_C = "ON_CHANGE_C";
export const ON_CHANGE_F = "ON_CHANGE_F";
export const ON_CHANGE_K = "ON_CHANGE_K";
export const UPDATE_WEATHER_INPUT = "UPDATE_WEATHER_INPUT";
export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA";
export const UPDATE_UNIT = "UPDATE_UNIT"

export function onChangeC(value) {
  return{
    type: ON_CHANGE_C,
    payload: value
  }
}

export function onChangeF(value) {
  return{
    type: ON_CHANGE_F,
    payload: value
  }
}

export function onChangeK(value) {
  return{
    type: ON_CHANGE_K,
    payload: value
  }
}

export function updateWeatherInput(input) {
  return{
    type: UPDATE_WEATHER_INPUT,
    payload: input
  }
}

export function fetchWeatherData(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return{
    type: FETCH_WEATHER_DATA,
    payload: request
  }
}

export function updateUnit(unit) {
  return{
    type: UPDATE_UNIT,
    payload: unit
  }
}
