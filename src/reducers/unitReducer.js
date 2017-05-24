import {UPDATE_UNIT} from '../actions/index';
export default function(state="", action) {
  switch(action.type){

    case UPDATE_UNIT:
      return action.payload;

    default:
      return state;
  }
}
