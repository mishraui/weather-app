const INITIAL_STATE = '';
import {UPDATE_WEATHER_INPUT} from '../actions/index';
export default function(state=INITIAL_STATE, action) {

  switch(action.type){

    case UPDATE_WEATHER_INPUT:
      return action.payload;

    default:
      return state;
  }

}
