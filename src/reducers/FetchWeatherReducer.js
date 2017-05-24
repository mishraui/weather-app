import {FETCH_WEATHER_DATA} from '../actions/index';
const INITIAL_STATE = [];

export default function(state=INITIAL_STATE, action) {
  switch(action.type){


    case FETCH_WEATHER_DATA:
      // note we use action.payload and then data below.
      // this is becuse redux promise is a middeware that waits unitl we get a
      // respose back from your api promise request. so we ar interested in the
      // data that is why we use data
      return [action.payload.data, ...state];

    default:
      return state;

  }
}
