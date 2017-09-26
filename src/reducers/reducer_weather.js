// import constants from index.js
import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_WEATHER:
    // We need to store history of weather report for multiple cities
    // DO not modift state directly like - state.push(new payload)
    // U can use concat - this returns new array in JS - state.concat(new payload)

    // or use ES6 syntax like below
    return [ action.payload.data, ...state ];

  }
  return state
}
