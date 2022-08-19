import { combineReducers } from 'redux';

import inscriptionReducer from './inscriptionForm';
import citiesReducer from './cities';

const rootReducer = combineReducers({
  inscriptionForm: inscriptionReducer,
  cities: citiesReducer,
});

export default rootReducer;
