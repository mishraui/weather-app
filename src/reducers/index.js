import { combineReducers } from 'redux';
import ConversionsReducer from './ConversionsReducer'
import WeatherInputReducer from './WeatherInputReducer';
import FetchWeatherReducer from './FetchWeatherReducer';
import UnitReducer from './UnitReducer';

const rootReducer = combineReducers({
  cfk: ConversionsReducer,
  weatherInputText: WeatherInputReducer,
  weatherData: FetchWeatherReducer,
  unit: UnitReducer
});

export default rootReducer;
