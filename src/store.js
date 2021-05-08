import { createStore } from 'redux';

export default createStore((state, action) => {

  if (state === undefined) {
    return {
      country: 'Australia',
      countryCode: 'AU'
    }
  }

  if (action.type === 'SWITCH_COUNTRY') {
    return {
      ...state,
      country: action.country,
      countryCode: action.countryCode
    }
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());