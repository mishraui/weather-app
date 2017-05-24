import {ON_CHANGE_C, ON_CHANGE_F, ON_CHANGE_K} from '../actions/index';

const INITAL_STATE=
  {
    c: null,
    f: null,
    k: null
  };

export default function(state=INITAL_STATE, action) {
  switch (action.type) {
    case ON_CHANGE_C:
      // to copy object and modify
      //
      //  return Object.assign({}, state, {
      //   c: action.payload
      //  })
      //
      // but below is es6 syntax called spread operator
      const value_c = action.payload;
      return {...state, c: value_c,
        f: ((value_c*(9/5)+32).toFixed(2)),
        k: ((value_c*1+273.15).toFixed(2))
      };

    case ON_CHANGE_F:
      const value_f = action.payload;
      return {...state, c: (((value_f-32)*(5/9)).toFixed(2)),
        f: value_f,
        k: ((((value_f*1 + 459.67)*(5/9))).toFixed(2))
      };

    case ON_CHANGE_K:
      let value_k = action.payload;
      return {...state, c: ((value_k*1-273.15).toFixed(2)),
        f: ((value_k*(9/5)-459.67).toFixed(2)),
        k: value_k
      };

    default:
      return state;

  }
}
